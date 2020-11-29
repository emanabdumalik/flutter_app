<?php
/**
 * OptionTree Meta Box API
 *
 * This class loads all the methods and helpers specific to build a meta box.
 *
 * @package   OptionTree
 * @author    Derek Herman <derek@valendesigns.com>
 * @copyright Copyright (c) 2013, Derek Herman
 */
if ( ! class_exists( 'OT_User_Meta_Box' ) ) {

	class OT_User_Meta_Box {

		/* variable to store the meta box array */
		private $meta_box;

		/**
		 * PHP5 constructor method.
		 *
		 * This method adds other methods of the class to specific hooks within WordPress.
		 *
		 * @uses      add_action()
		 *
		 * @return    void
		 *
		 * @access    public
		 * @since     1.0
		 */
		function __construct( $meta_box ) {
			if ( ! is_admin() ) {
				return;
			}

			global $ot_meta_boxes;

			if ( ! isset( $ot_meta_boxes ) ) {
				$ot_meta_boxes = array();
			}

			$ot_meta_boxes[] = $meta_box;

			$this->meta_box = $meta_box;

				add_action( 'show_user_profile', array( $this, 'build_meta_box' ) );
				add_action( 'edit_user_profile', array( $this, 'build_meta_box' ) );

				add_action( 'personal_options_update', array( $this, 'save_meta_box' ) );
				add_action( 'edit_user_profile_update', array( $this, 'save_meta_box' ) );



		}

		/**
		 * Adds meta box to any post type
		 *
		 * @uses      add_meta_box()
		 *
		 * @return    void
		 *
		 * @access    public
		 * @since     1.0
		 */
		function add_meta_boxes() {
			foreach ( (array) $this->meta_box['pages'] as $page ) {
				add_meta_box( $this->meta_box['id'], $this->meta_box['title'], array(
					$this,
					'build_meta_box'
				), $page, $this->meta_box['context'], $this->meta_box['priority'], $this->meta_box['fields'] );
			}
		}

		/**
		 * Meta box view
		 *
		 * @return    string
		 *
		 * @access    public
		 * @since     1.0
		 */
		function build_meta_box( $user ) {
			?>

			<tr class="form-field">
				<th scope="row" valign="top">
					&nbsp;</th>
				<td>
					<?php
					echo '<div class="ot-metabox-wrapper">';

					/* Use nonce for verification */
					echo '<input type="hidden" name="' . $this->meta_box['id'] . '_nonce" value="' . wp_create_nonce( $this->meta_box['id'] ) . '" />';
					foreach ( $this->meta_box['fields'] as $field ) {
						$t_id      = $tag->term_id;
						//echo $t_id;// Get the ID of the term you're editing
						$user_meta = get_user_meta( $user->ID ,$field['id'],true);

						echo $user_meta;
						/* get current post meta data */
						//$field_value = get_post_meta( $post->ID, $field['id'], true );

						/* set standard value */


						/* build the arguments array */
						$_args = array(
							'type'               => $field['type'],
							'field_id'           => $field['id'],
							'field_name'         =>  $field['id'],
							'field_value'        => $user_meta,
							'field_desc'         => isset( $field['desc'] ) ? $field['desc'] : '',
							'field_std'          => isset( $field['std'] ) ? $field['std'] : '',
							'field_rows'         => isset( $field['rows'] ) && ! empty( $field['rows'] ) ? $field['rows'] : 10,
							'field_post_type'    => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
							'field_taxonomy'     => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
							'field_min_max_step' => isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
							'field_class'        => isset( $field['class'] ) ? $field['class'] : '',
							'field_condition'    => isset( $field['condition'] ) ? $field['condition'] : '',
							'field_operator'     => isset( $field['operator'] ) ? $field['operator'] : 'and',
							'field_choices'      => isset( $field['choices'] ) ? $field['choices'] : array(),
							'field_settings'     => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),
							'post_id'            => $post->ID,
							'meta'               => true
						);


						/* don't show title with textblocks */




						$conditions = '';
						if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

							$conditions = ' data-condition="' . $field['condition'] . '"';
							$conditions.= isset( $field['operator'] ) && in_array( $field['operator'], array( 'and', 'AND', 'or', 'OR' ) ) ? ' data-operator="' . $field['operator'] . '"' : '';

						}

						/* only allow simple textarea due to DOM issues with wp_editor() */
						if ( apply_filters( 'ot_override_forced_textarea_simple', false, $field['id'] ) == false && $_args['type'] == 'textarea' )
							$_args['type'] = 'textarea-simple';

						// Build the setting CSS class
						if ( ! empty( $_args['field_class'] ) ) {

							$classes = explode( ' ', $_args['field_class'] );

							foreach( $classes as $key => $value ) {

								$classes[$key] = $value . '-wrap';

							}

							$class = 'format-settings ' . implode( ' ', $classes );

						} else {

							$class = 'format-settings';

						}

						/* option label */
						echo '<div id="setting_' . $field['id'] . '" class="' . $class . '"' . $conditions . '>';

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
					?>
				</td>
			</tr>
			<?php



		}

		/**
		 * Saves the meta box values
		 *
		 * @return    void
		 *
		 * @access    public
		 * @since     1.0
		 */
		function save_meta_box( $user_id ) {




			$t_id = $user_id;
			//$new = get_option( "taxonomy_term_$t_id" );

			foreach ( $this->meta_box['fields'] as $field ) {


				$new = $_POST[$field['id']];

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

				//save the option array
				update_user_meta( $t_id,$field['id'], $new );
			}
		}


	}
}
/**
 * This method instantiates the meta box class & builds the UI.
 *
 * @uses     OT_Meta_Box()
 *
 * @param    array    Array of arguments to create a meta box
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_register_user_meta_box' ) ) {

	function ot_register_user_meta_box( $args ) {
		if ( ! $args )
			return;

		$ot_user_meta_box = new OT_User_Meta_Box( $args );
	}

}

/* End of file ot-meta-box-api.php */
/* Location: ./includes/ot-meta-box-api.php */