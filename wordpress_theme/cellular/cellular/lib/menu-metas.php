<?php
/**
 * Proof of concept for how to add new fields to nav_menu_item posts in the WordPress menu editor.
 * @author Weston Ruter (@westonruter), X-Team
 */

add_action( 'init', array( 'Cellular_Nav_Menu_Item_Custom_Fields', 'setup' ) );

class Cellular_Nav_Menu_Item_Custom_Fields {
	static $options = array();


	static function setup() {
		if ( !is_admin() )
			return;

		$new_fields = apply_filters( 'cellular_nav_menu_item_additional_fields', array() );
		if ( empty($new_fields) )
			return;
		self::$options = self::get_fields_schema( $new_fields );

		add_filter( 'wp_edit_nav_menu_walker', function () {
			return 'Cellular_Menu_Walker_Nav_Menu_Edit';
		});
		//add_filter( 'cellular_nav_menu_item_additional_fields', array( __CLASS__, '_add_fields' ), 10, 5 );
		add_action( 'save_post', array( __CLASS__, '_save_post' ), 10, 2 );
	}

	static function get_fields_schema( $new_fields ) {
		$schema = array();
		foreach( $new_fields as $field) {
			if (empty($field['name'])) {
				$field['name'] = $name;
			}
			$schema[] = $field;
		}
		return $schema;
	}


	static function get_menu_item_postmeta_key($name) {
		return  $name;
	}

	/**
	 * Inject the
	 * @hook {action} save_post
	 */
	static function get_field( $item, $depth, $args ) {

ob_start();
		echo '<div class="ot-metabox-wrapper">';
		foreach( self::$options as $field ) {
			$field['value'] = get_post_meta($item->ID, self::get_menu_item_postmeta_key($field['id'].$item->ID), true);





			$_args = array(
				'type'               => $field['type'],
				'field_id'           =>  $field['id'].$item->ID,
				'field_name'         =>  $field['name'].$item->ID,

				'field_value'        => $field['value'],
				'field_desc'         => isset( $field['desc'] ) ? $field['desc'] : '',
				'field_std'          => isset( $field['std'] ) ? $field['std'] : '',
				'field_rows'         => isset( $field['rows'] ) && ! empty( $field['rows'] ) ? $field['rows'] : 10,
				'field_post_type'    => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : '',
				'field_taxonomy'     => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : '',
				'field_min_max_step' => isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
				'field_class'        => isset( $field['class'] ) ? $field['class'] : '',
				'field_condition'    => isset( $field['condition'] ) ? $field['condition'] : '',
				'field_operator'     => isset( $field['operator'] ) ? $field['operator'] : 'and',
				'field_choices'      => isset( $field['choices'] ) ? $field['choices'] : array(),
				'field_settings'     => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array()

			);



			$conditions = '';

			/* setup the conditions */
			if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

				$v = explode(':',$field['condition'] );
				$field['condition'] = $v[0].$item->ID.':'.$v[1];

				$conditions = ' data-condition="' . $field['condition'] . '"';
				$conditions .= isset( $field['operator'] ) && in_array( $field['operator'], array(
					'and',
					'AND',
					'or',
					'OR'
				) ) ? ' data-operator="' . $field['operator'] . '"' : '';

			}

			/* only allow simple textarea due to DOM issues with wp_editor() */
			if ( apply_filters( 'ot_override_forced_textarea_simple', false, $field['id'] ) == false && $_args['type'] == 'textarea' ) {
				$_args['type'] = 'textarea-simple';
			}

			// Build the setting CSS class
			if ( ! empty( $_args['field_class'] ) ) {

				$classes = explode( ' ', $_args['field_class'] );

				foreach ( $classes as $key => $value ) {

					$classes[ $key ] = $value . '-wrap';

				}
				$class= '';


				$class .= 'format-settings ' . implode( ' ', $classes );

			}
			else {

				$class = 'format-settings';

			}

			/* option label */
			echo '<div id="setting_' . $field['id'].$item->ID . '" class="' . $class . '"' . $conditions . '>';

			echo '<div class="format-setting-wrap">';

			/* don't show title with textblocks */
			if ( $_args['type'] != 'textblock' && ! empty( $field['label'] ) ) {
				echo '<div class="format-setting-label">';
				echo '<label for="' . $field['id'] . '" class="label">' . $field['label'] . '</label>';
				echo '</div>';
			}

			/* get the option HTML */
			echo ot_display_by_type( $_args );

			echo '</div>';

			echo '</div>';






		}
		echo '<div class="clear"></div>';

		echo '</div>';

		echo '<script>OT_UI.init();//adminize();</script>';

		return ob_get_clean();
	}

	/**
	 * Save the newly submitted fields
	 * @hook {action} save_post
	 */
	function _save_post( $post_id, $post_object ) {
		global $pagenow;

		/* don't save if $_POST is empty */

		/* verify nonce */


		/* check permissions */


		foreach ( self::$options as $field ) {
			$field['id'] = $field['id'].$post_id;
			$old = get_post_meta( $post_id, $field['id'], true );
			$new = '';

			/* there is data to validate */
			if ( isset( $_POST[$field['id']] ) ) {

				/* slider and list item */
				if ( in_array( $field['type'], array( 'list-item', 'slider' ) ) ) {

					/* required title setting */
					$required_setting = array(
						array(
							'id'        => 'title',
							'label'     => __( 'Title', 'option-tree' ),
							'desc'      => '',
							'std'       => '',
							'type'      => 'text',
							'rows'      => '',
							'class'     => 'option-tree-setting-title',
							'post_type' => '',
							'choices'   => array()
						)
					);

					/* get the settings array */
					$settings = isset( $_POST[$field['id'] . '_settings_array'] ) ? unserialize( ot_decode( $_POST[$field['id'] . '_settings_array'] ) ) : array();

					/* settings are empty for some odd ass reason get the defaults */
					if ( empty( $settings ) ) {
						$settings = 'slider' == $field['type'] ?
							ot_slider_settings( $field['id'] ) :
							ot_list_item_settings( $field['id'] );
					}

					/* merge the two settings array */
					$settings = array_merge( $required_setting, $settings );

					foreach( $_POST[$field['id']] as $k => $setting_array ) {

						foreach( $settings as $sub_setting ) {

							/* verify sub setting has a type & value */
							if ( isset( $sub_setting['type'] ) && isset( $_POST[$field['id']][$k][$sub_setting['id']] ) ) {

								$_POST[$field['id']][$k][$sub_setting['id']] = ot_validate_setting( $_POST[$field['id']][$k][$sub_setting['id']], $sub_setting['type'], $sub_setting['id'] );

							}

						}

					}

					/* set up new data with validated data */
					$new = $_POST[$field['id']];

				} else if ( $field['type'] == 'social-links' ) {

					/* get the settings array */
					$settings = isset( $_POST[$field['id'] . '_settings_array'] ) ? unserialize( ot_decode( $_POST[$field['id'] . '_settings_array'] ) ) : array();

					/* settings are empty get the defaults */
					if ( empty( $settings ) ) {
						$settings = ot_social_links_settings( $field['id'] );
					}

					foreach( $_POST[$field['id']] as $k => $setting_array ) {

						foreach( $settings as $sub_setting ) {

							/* verify sub setting has a type & value */
							if ( isset( $sub_setting['type'] ) && isset( $_POST[$field['id']][$k][$sub_setting['id']] ) ) {

								$_POST[$field['id']][$k][$sub_setting['id']] = ot_validate_setting( $_POST[$field['id']][$k][$sub_setting['id']], $sub_setting['type'], $sub_setting['id'] );

							}

						}

					}

					/* set up new data with validated data */
					$new = $_POST[$field['id']];

				} else {

					/* run through validattion */
					$new = ot_validate_setting( $_POST[$field['id']], $field['type'], $field['id'] );

				}

				/* insert CSS */
				if ( $field['type'] == 'css' ) {

					/* insert CSS into dynamic.css */
					if ( '' !== $new ) {

						ot_insert_css_with_markers( $field['id'], $new, true );

						/* remove old CSS from dynamic.css */
					} else {

						ot_remove_old_css( $field['id'] );

					}

				}

			}

			if ( isset( $new ) && $new !== $old ) {
				update_post_meta( $post_id, $field['id'], $new );
			} else if ( '' == $new && $old ) {
				delete_post_meta( $post_id, $field['id'], $old );
			}
		}

	}

}

// @todo This class needs to be in it's own file so we can include id J.I.T.
// requiring the nav-menu.php file on every page load is not so wise
require_once ABSPATH . 'wp-admin/includes/nav-menu.php';
class Cellular_Menu_Walker_Nav_Menu_Edit extends Walker_Nav_Menu_Edit {
	function start_el(&$output, $item, $depth, $args) {
		$item_output = '';
		parent::start_el($item_output, $item, $depth, $args);
		// Inject $new_fields before: <div class="menu-item-actions description-wide submitbox">
		if ( $new_fields = Cellular_Nav_Menu_Item_Custom_Fields::get_field( $item, $depth, $args ) ) {
			$item_output = preg_replace('/(?=<div[^>]+class="[^"]*submitbox)/', $new_fields, $item_output);


		}
		$output .= $item_output;
	}
}


// Somewhere in config...
add_filter( 'cellular_nav_menu_item_additional_fields', 'mytheme_menu_item_additional_fields' );
function mytheme_menu_item_additional_fields( $fields ) {
	$fields = array(
		array(
			'id' => 'menu_type',
			'name' => 'menu_type',

			'type' => 'select',
			'class'=>'ot-full ot-float-left ot-last',

			'choices'=>array(
				array(
					'label'=>'Mega Menu Links',
					'value'=>'mega-menu-links'
				),
				array(
					'label'=>'Mega Menu Builder',
					'value'=>'mega-menu-builder'
				)
			)
		),
		array(
			'id' => 'menu_builder',
			'name' => 'menu_builder',

			'type' => 'menu-builder',
			'class'=>'ot-full ot-float-left ot-last',


			'condition'=>'menu_type:is(mega-menu-builder)'

		)
		,
		array(
			'id' => 'menu_icon',
			'name' => 'menu_icon',

			'type' => 'icon-list',
			'label'=>'Icon',


			'class'=>'ot-half ot-float-left'

		),
		array(
			'id' => 'menu_icon_color',
			'name' => 'menu_icon_color',
			'label'=>'Icon Color',
			'type' => 'colorpicker',


			'class'=>'ot-half ot-float-left ot-last'

		),
		array(
			'id' => 'menu_subtitle',
			'name' => 'menu_subtitle',
			'label'=>'Subtitle',
			'type' => 'text',
			'class'=>'ot-full ot-float-left ot-last'



		)
	);

	return $fields;
}
