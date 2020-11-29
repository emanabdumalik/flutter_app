<?php
if ( ! function_exists( 'ot_type_text_disabled' ) ) {

	function ot_type_text_disabled( $args = array() ) {

		/* turns arguments array into variables */
		extract( $args );


		/* verify a description */
		$has_desc = $field_desc ? true : false;

		/* format setting outer wrapper */
		echo '<div class="format-setting type-text ' . ( $has_desc ? 'has-desc' : 'no-desc' ) . '">';

		/* description */
		echo $has_desc ? '<div class="description">' . htmlspecialchars_decode( $field_desc ) . '</div>' : '';

		/* format setting inner wrapper */
		echo '<div class="format-setting-inner">';

		/* build text input */
		echo '<input readonly type="text" name="' . esc_attr( $field_name ) . '" id="' . esc_attr( $field_id ) . '" value="' . esc_attr( $field_value ) . '" class="widefat option-tree-ui-input ' . esc_attr( $field_class ) . '" />';

		echo '</div>';

		echo '</div>';

	}

}
if ( ! function_exists( 'ot_type_tinymce' ) ) {

	function ot_type_tinymce( $args = array() ) {
		extract($args);


		//wp_enqueue_script( 'so-tinymce-field', get_template_directory_uri() . '/lib/tiny/js/so-tinymce-field.js', array( 'jquery', 'editor', 'quicktags' ), '' );
		wp_enqueue_style( 'so-tinymce-field', get_template_directory_uri() . '/lib/tiny/css/so-tinymce-field.css', array(), '' );
		$settings = array(
			'textarea_name'  => esc_attr( $field_name ),
			'default_editor' =>'tinymce',

			'editor_class'   => 'widget-element siteorigin-widget-input',
			'tinymce'        => array(
				'wp_skip_init' => strpos( $field_id, '__i__' ) != false || strpos( $field_id, '_id_' ) != false
			)
		);

			$settings['editor_height'] = 550;
		preg_match( '/widget-(.+?)\[/', $field_name, $id_base_matches );

		$widget_id_base = empty($id_base_matches) || count($id_base_matches) < 2 ? '' : $id_base_matches[1];

		?>

		<div id="tinymce-container-<?php echo $unique_identifier.'-tinymce';?>">
		<div class="siteorigin-widget-tinymce-container"
		     data-mce-settings="<?php echo esc_attr( json_encode( $settings['tinymce'] ) ) ?>"
		     data-qt-settings="<?php echo esc_attr( json_encode( array() ) ) ?>"
		     data-widget-id-base="<?php echo $widget_id_base ?>"
			>
			<?php



			wp_editor( $field_value, $field_id, $settings )
			?>
		</div>

		<input type="hidden"
		       name="<?php $field_id.'_selected_editor'?>"
		       class="siteorigin-widget-input siteorigin-widget-tinymce-selected-editor"
		       value="tinymce"/>



		</div>
			<?php
		remove_filter( 'the_editor_content', 'wp_richedit_pre' );

	}
}
if ( ! function_exists( 'ot_type_select_widget' ) ) {

	function ot_type_select_widget( $args = array() ) {

		/* turns arguments array into variables */
		extract( $args );

		/* verify a description */
		$has_desc = $field_desc ? true : false;

		/* format setting outer wrapper */
		echo '<div class="format-setting type-custom-post-type-select ' . ( $has_desc ? 'has-desc' : 'no-desc' ) . '">';

		/* description */
		echo $has_desc ? '<div class="description">' . htmlspecialchars_decode( $field_desc ) . '</div>' : '';

		/* format setting inner wrapper */
		echo '<div class="format-setting-inner">';

		/* build category */
		echo '<select name="' . esc_attr( $field_name ) . '" id="' . esc_attr( $field_id ) . '" class="option-tree-ui-select ' . $field_class . '">';

		/* setup the post types */
		$post_type = isset( $field_post_type ) ? explode( ',', $field_post_type ) : array( 'post' );

		/* query posts array */
		$my_posts = get_posts( apply_filters( 'ot_type_custom_post_type_select_query', array( 'post_type' => $post_type, 'posts_per_page' => -1, 'orderby' => 'title', 'order' => 'ASC', 'post_status' => 'any' ), $field_id ) );

		/* has posts */
		if ( is_array( $my_posts ) && ! empty( $my_posts ) ) {
			echo '<option value="">-- ' . __( 'Choose One', 'option-tree' ) . ' --</option>';
			foreach( $my_posts as $my_post ) {
				$post_title = '' != $my_post->post_title ? $my_post->post_title : 'Untitled';
				echo '<option value="' . esc_attr( $my_post->ID ) . '"' . selected( $field_value, $my_post->ID, false ) . '>' . get_post_meta($my_post->ID,'widget_class',true) . '</option>';
			}
		} else {
			echo '<option value="">' . __( 'No Posts Found', 'option-tree' ) . '</option>';
		}

		echo '</select>';

		echo '</div>';

		echo '</div>';

	}

}
if ( ! function_exists( 'ot_type_widget' ) ) {

	function ot_type_widget( $args = array() ) {
		extract( $args );
		echo $field_std;
		$me = get_post((int)$field_std);

		$ID = $me->ID;
		$class = get_post_meta( $me->ID, 'widget_class', true );
		$name  = get_post_meta( $me->ID, 'widget_name', true );
		$desc  = get_post_meta( $me->ID, 'widget_description', true );
		$grp   = get_post_meta( $me->ID, 'widget_group', true );
		$fields  = get_post_meta( $me->ID, 'widget_fields', false )[0] ;
		$template  =  get_post_meta( $me->ID, 'widget_template', true );
		$icon  =  get_post_meta( $me->ID, 'widget_icon', true );

		$class = str_replace('-','_',$class);
		$class = str_replace(' ','_',$class);
		/* turns arguments array into variables */
$p = $field_value;
		$cl;
		if(class_exists($class)) {

			$cl = new $class;


		}
		else {}
		$cl = '';


		$field_before = apply_filters('harif_instance_fields_before',array(),$cl,$p);
		$fields_before_widget = apply_filters('harif_instance_fields_before_'.$name,$field_before,$cl,$p);
		$q = $fields;
		$r = array_merge($fields_before_widget,$q);

		$field_after = apply_filters('harif_instance_fields_after',$r,$cl,$p);
		$fields_after_widget = apply_filters('harif_instance_fields_after_'.$name,$field_after,$cl,$p);

		$has_desc = $field_desc ? true : false;

		// Default
		$sortable = true;

		// Check if the list can be sorted
		if ( ! empty( $field_class ) ) {
			$classes = explode( ' ', $field_class );
			if ( in_array( 'not-sortable', $classes ) ) {
				$sortable = false;
				str_replace( 'not-sortable', '', $field_class );
			}
		}

		/* format setting outer wrapper */
		echo '<div class="format-setting widget type-list ' . ( $has_desc ? 'has-desc' : 'no-desc' ) . '">';

		/* description */
		echo $has_desc ? '<div class="description">' . htmlspecialchars_decode( $field_desc ) . '</div>' : '';
		$field_value['unique_identifier'] = uniqid();
		/* format setting inner wrapper */
		echo '<div class="format-setting-inner">';
		echo '<ul class="sub-widget option-tree-setting-wrap' . ( $sortable ? ' option-tree-sortable' : '' ) .'" data-name="' . esc_attr( $field_id ) . '" data-id="' . esc_attr( $post_id ) . '" data-get-option="' . esc_attr( $get_option ) . '" data-type="' . esc_attr( $type ) . '">';
		echo '<li class="ui-state-default list-list-item">';
			ot_widget_item_view( $name,$field_value,$field_name,$field_id,$cl, $fields_after_widget,$get_option );

		echo '</li>';
		echo '</ul>';

		/* button */

		/* description */
		$list_desc = $sortable ? __( 'You can re-order with drag & drop, the order will update after saving.', 'option-tree' ) : '';
		echo '<div class="list-item-description">' . apply_filters( 'ot_list_item_description', $list_desc, $field_id ) . '</div>';

		echo '</div>';

		echo '</div>';
		?>
		<script>setTimeout(function(){OT_UI.init()},2500);</script>

		<?php
		/* verify a description */

		//ot_widget_item_view( $field_class,$field_id,$field_value, $type );


	}

}
if ( ! function_exists( 'ot_widget_item_view' ) ) {

	function ot_widget_item_view( $w_name,$value,$name,$id, $cls, $fields ,$options) {
?>
<div class="option-tree-setting">
      <div class="open"><?php echo $w_name;?></div>
      <div class="button-section">
        <a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . __( 'Edit', 'option-tree' ) . '">
          <span class="icon ot-icon-pencil"></span>
        </a>

      </div>
      <div class="option-tree-setting-body">

<?php
		/* required title setting */


		foreach( $fields as $field ) {

			// Set field value
			// $field_value = isset( $field['id'] ) ? $field['id'] : '';

			/* set default to standard value */
			if ( isset( $field['std'] ) ) {
				$field_value = ot_filter_std_value( $field_value, $field['std'] );
			}

			// filter the title label and description
			if ( $field['id'] == 'title' ) {

				// filter the label
				$field['label'] = apply_filters( 'ot_list_item_title_label', $field['label'], $name );

				// filter the description
				$field['desc'] = apply_filters( 'ot_list_item_title_desc', $field['desc'], $name );

			}

			/* make life easier */
			$_field_name = $get_option ? $options  : $name;

			/* build the arguments array */
			$_args = array(
				'type'              => $field['type'],
				'field_id'          => $id . '-' . $field['id'] ,
				'field_name'        => $_field_name . '['.$field['id'].']',
				'field_value'       => $value[$field['id']],
				'field_desc'        => isset( $field['desc'] ) ? $field['desc'] : '',
				'field_std'         => isset( $field['std'] ) ? $field['std'] : '',
				'field_rows'        => isset( $field['rows'] ) ? $field['rows'] : 10,
				'field_post_type'   => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
				'field_taxonomy'    => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
				'field_min_max_step'=> isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
				'field_class'       => isset( $field['class'] ) ? $field['class'] : '',
				'field_condition'   => isset( $field['condition'] ) ? $field['condition'] : '',
				'field_operator'    => isset( $field['operator'] ) ? $field['operator'] : 'and',
				'field_choices'     => isset( $field['choices'] ) && ! empty( $field['choices'] ) ? $field['choices'] : array(),
				'field_settings'    => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),

				'get_option'        => $_field_name . '['.$field['id'].']',



			);


			$conditions = '';

			/* setup the conditions */
			if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

				/* doing magic on the conditions so they work in a list item */
				$conditionals = explode( ',', $field['condition'] );
				foreach( $conditionals as $condition ) {
					$parts = explode( ':', $condition );
					if ( isset( $parts[0] ) ) {
						$v = explode(':',$field['condition']);
						// $field['condition'] = str_replace($this->base_name,$v[0],$field['id']).':'.$v[1];
						$field['condition'] = str_replace( $condition, $name . '-' . $parts[0] . '-' . $key . ':' . $parts[1], $field['condition'] );
					}
				}

				$conditions = ' data-condition="' . $field['condition'] . '"';
				$conditions.= isset( $field['operator'] ) && in_array( $field['operator'], array( 'and', 'AND', 'or', 'OR' ) ) ? ' data-operator="' . $field['operator'] . '"' : '';

			}

			// Build the setting CSS class
			if ( ! empty( $_args['field_class'] ) ) {

				$classes = explode( ' ', $_args['field_class'] );

				foreach( $classes as $_key => $value ) {

					$classes[$_key] = $value . '-wrap';

				}

				$class = 'format-settings widget' . implode( ' ', $classes );

			} else {

				$class = 'format-settings';

			}

			/* option label */
			echo '<div id="setting_' . $_args['field_id'] . '" class="widget ' . $class . '"' . $conditions . '>';

			/* don't show title with textblocks */
			if ( $_args['type'] != 'textblock' && ! empty( $field['label'] ) ) {
				echo '<div class="format-setting-label">';
				echo '<h3 class="label">' . esc_attr( $field['label'] ) . '</h3>';
				echo '</div>';
			}

			/* only allow simple textarea inside a list-item due to known DOM issues with wp_editor() */
			if ( apply_filters( 'ot_override_forced_textarea_simple', false, $field['id'] ) == false && $_args['type'] == 'textarea' )
				$_args['type'] = 'textarea-simple';

			/* option body, list-item is not allowed inside another list-item */
			if (  $_args['type'] !== 'slider' ) {
				echo ot_display_by_type( $_args );
			}

			echo '</div>';

		}

?>
</div>
</div>
<?php

	}

}
if ( ! function_exists( 'ot_type_multiple_selection' ) ) {

	function ot_type_multiple_selection( $args = array() ) {
		extract( $args );
		global $post;
		$output = '';

		$extra = array();
		foreach ( $field_choices as $choice ) {
			if ( $choice['value'] != get_post_meta( $post->ID, 'slug', true ) ) {

			$extra[] = $choice['label'];
			$output .= '<option value=' . $choice['value'] . '>' . $choice['label'] . '</option>';
		}
	}

		?>
		<select id="<?php echo $field_id;?>" class="select-tags form-control"  multiple="" tabindex="-1" aria-hidden="true">
			<?php echo $output;?>
		</select>
		<input class="holder" value="<?php echo $field_value;?>" type="hidden" id="<?php echo $field_id;?>" name="<?php echo $field_name;?>">
		<script>
			!function ($) {
				$("#<?php echo $field_id;?>").val([<?php echo $field_value;?>]);
				$("#<?php echo $field_id;?>").select2({

					width:'100%'

				}).change(function(){
					$(this).parent().find('.holder').attr('value',$(this).val())
				});
			}(window.jQuery);
		</script>

		<?php


	}
}
if ( ! function_exists( 'ot_type_multiple_selection_tags' ) ) {

	function ot_type_multiple_selection_tags( $args = array() ) {
		extract( $args );
		$output = '';


		$val = explode(',',$field_value);
		$counter=0;
		$o = '';


		foreach($val as $p){
			if(count($val) == $counter)
			$o .= "'".$p."'";
			else
				$o .= "'".$p."',";

			$counter++;
		}
$extra = array();
		foreach($field_choices as $choice){

			$extra[] = $choice['label'];
				$output .= '<option>'.$choice['label'].'</option>';
		}
		foreach($val as $choice){

			if(!in_array($choice,$extra) && $choice != '')
			$output .= '<option>'.$choice.'</option>';
		}
		?>
		<select class="select-tags form-control"  multiple="true" tabindex="-1" aria-hidden="true">
			<?php echo $output;?>
		</select>
<input class="holder" value="<?php echo $field_value;?>" type="hidden" id="<?php echo $field_id;?>" name="<?php echo $field_name;?>">
		<script>
			!function ($) {
				$(".select-tags").val([<?php echo $o;?>]);
				$(".select-tags").select2({
					tags: true,
					width:'100%'

				}).change(function(){
					$(this).parent().find('.holder').attr('value',$(this).val())
				});
			}(window.jQuery);
		</script>

		<?php


	}
}
if ( ! function_exists( 'ot_type_icon_list' ) ) {

	function ot_type_icon_list( $args = array() ) {
		extract( $args );
		$output = '';
		include( 'templates/icons.php' );


	}
	}
if ( ! function_exists( 'ot_type_post_selector' ) ) {

	function ot_type_post_selector( $args = array() ) {
		extract( $args );
		$output = '';
		//wp_enqueue_script( 'so-tinymce-field', get_stylesheet_directory_uri() . '/js/so-tinymce-field.js', array( 'jquery', 'editor', 'quicktags' ), SOW_BUNDLE_VERSION );
		$settings = array(
			'textarea_name' => esc_attr( $field_name ),
			'default_editor' => 'tinymce',

			'editor_class' => 'siteorigin-widget-input',
			'tinymce' => array(
				'wp_skip_init' => strpos( $field_id, '__i__' ) != false || strpos( $field_id, '_id_' ) != false
			)
		);
		//wp_editor( $field_value, esc_attr( $field_id ), $settings );
		//remove_filter( 'the_editor_content', 'wp_richedit_pre' );
		?>

<?php
		//$f->form(array('title'=>'semir','type'=>'visual','text'=>'hoho'));
		?>
<div id="meme">
<?php
		siteorigin_widget_post_selector_admin_form_field( is_array( $field_value ) ? '' : $field_value, $field_name );
?>
</div>
<script>
		//jQuery('#meme').soWidgetPostSelector();
</script>
<?php
		include( 'templates/select-box.php' );


	}
}
if ( ! function_exists( 'ot_type_lists_option' ) ) {

	function ot_type_lists_option( $args = array() ) {



		/* turns arguments array into variables */
		extract( $args );

		/* verify a description */
		$has_desc = $field_desc ? true : false;

		// Default
		$sortable = true;

		// Check if the list can be sorted
		if ( ! empty( $field_class ) ) {
			$classes = explode( ' ', $field_class );
			if ( in_array( 'not-sortable', $classes ) ) {
				$sortable = false;
				str_replace( 'not-sortable', '', $field_class );
			}
		}

		/* format setting outer wrapper */
		echo '<div class="format-setting type-list-item ' . ( $has_desc ? 'has-desc' : 'no-desc' ) . '">';

		/* description */
		echo $has_desc ? '<div class="description">' . htmlspecialchars_decode( $field_desc ) . '</div>' : '';

		/* format setting inner wrapper */
		echo '<div class="format-setting-inner">';

		/* pass the settings array arround */
		echo '<input type="hidden" name="' . esc_attr( $field_id ) . '_settings_array" id="' . esc_attr( $field_id ) . '_settings_array" value="' . ot_encode( serialize( $field_settings ) ) . '" />';

		/**
		 * settings pages have array wrappers like 'option_tree'.
		 * So we need that value to create a proper array to save to.
		 * This is only for NON metabox settings.
		 */
		if ( ! isset( $get_option ) )
			$get_option = '';

		/* build list items */
		echo '<ul class="option-tree-setting-wrap' . ( $sortable ? ' option-tree-sortable' : '' ) .'" data-name="' . esc_attr( $field_id ) . '" data-id="' . esc_attr( $post_id ) . '" data-get-option="' . esc_attr( $get_option ) . '" data-type="' . esc_attr( $type ) . '">';

		if ( is_array( $field_value ) && ! empty( $field_value ) ) {

			foreach( $field_value as $key => $list_item ) {

				echo '<li class="ui-state-default list-list-item">';
				ot_list_item_view( $field_id, $key, $list_item, $post_id, $get_option, $field_settings, $type );
				echo '</li>';

			}

		}

		echo '</ul>';

		/* button */
		echo '<a href="javascript:void(0);" class="option-tree-list-item-add option-tree-ui-button button button-primary right hug-right" title="' . __( 'Add New', 'option-tree' ) . '">' . __( 'Add New', 'option-tree' ) . '</a>';

		/* description */
		$list_desc = $sortable ? __( 'You can re-order with drag & drop, the order will update after saving.', 'option-tree' ) : '';
		echo '<div class="list-item-description">' . apply_filters( 'ot_list_item_description', $list_desc, $field_id ) . '</div>';

		echo '</div>';

		echo '</div>';


	}

}
if ( ! function_exists( 'ot_type_font_preview' ) ) {

	function ot_type_font_preview( $args = array() ) {
		extract( $args );

		echo "<h1 class='font-preview'>$field_std</h1>";

	}
}
if ( ! function_exists( 'ot_type_menu_builder' ) ) {

	function ot_type_menu_builder( $args = array() ) {
		extract( $args );
		$output = '';
		include( 'templates/menu-builder-template.php' );

		return $output;
	}
}

	if ( ! function_exists( 'ot_type_builder' ) ) {

		function ot_type_builder($args = array()){
			extract( $args );
			$output = '';
			include('templates/builder-template.php');

		}

	}
	if ( ! function_exists( 'ot_type_customized_builder' ) ) {

		function ot_type_customized_builder($args = array()){
			extract( $args );
			$output = '';
			include('templates/customized-builder.php');

		}


}
if ( ! function_exists( 'ot_type_composite_select' ) ) {

	function ot_type_composite_select($args = array()){
		extract( $args );










		$composite_field = array(
			array(
			'type'=>$field_std,
				'field_name'=>$field_name.'[normal_value]',
			'field_id'=>$field_id.'-normal_value',
			'field_value'=>isset( $field_value['normal_value'] ) ? esc_attr( $field_value['normal_value'] ) : '',

			),
			array(
				'type'=>'select',
				'field_name'=>$field_name.'[custom_value]',
				'field_id'=>$field_id.'-custom_value',
				'field_value'=>isset( $field_value['custom_value'] ) ? esc_attr( $field_value['custom_value'] ) : '',


				'field_choices'=>array(
					array(
						'label'=>'yes',
						'value'=>'no'
					),
					array(
						'label'=>'no',
						'value'=>'yes'
					)
				)

			)
		);

		echo "<div class='composite'>";
		echo "<div class='composite-select'>";
		echo ot_display_by_type($composite_field[1]);
		echo "</div>";
		echo ot_display_by_type($composite_field[0]);
		echo "</div>";

	}

}
if ( ! function_exists( 'ot_type_taxonomy_field_select' ) ) {

	function ot_type_taxonomy_field_select($args = array()){
		extract( $args );
		//echo json_encode();
		$opt = get_all_taxonomies();

		$ptypes = array(
			'type'=>'select',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,

			'field_choices'=>$opt

		);
		echo ot_display_by_type($ptypes);
	}

}
if ( ! function_exists( 'ot_type_taxonomy_field_checkbox' ) ) {

	function ot_type_taxonomy_field_checkbox($args = array()){
		extract( $args );
		//echo json_encode();
		$opt = get_all_taxonomies();

		$ptypes = array(
			'type'=>'checkbox',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,

			'field_choices'=>$opt

		);
		echo ot_display_by_type($ptypes);
	}

}
if ( ! function_exists( 'ot_type_custom_field_select' ) ) {

	function ot_type_custom_field_select($args = array()){
		extract( $args );
		//echo json_encode(get_all_taxonomies());
		$opt = get_all_custom_fields();

		$ptypes = array(
			'type'=>'select',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,

			'field_choices'=>$opt

		);
		echo ot_display_by_type($ptypes);
	}

}
if ( ! function_exists( 'ot_type_post_type_select' ) ) {

	function ot_type_post_type_select($args = array()){
		extract( $args );
		$_args = array('public'=>true);
		$output = 'objects';
		$ptype = get_post_types($_args,$output);
		//echo json_encode($ptype);
		$opt = array();

		foreach($ptype as $ptype=>$values){

			$opt[]= array('label'=>$values->labels->name,'value'=>$values->name);

		}

		$ptypes = array(
			'type'=>'select',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,

			'field_choices'=>$opt

		);
		echo ot_display_by_type($ptypes);
	}

}

if ( ! function_exists( 'ot_type_post_type_checkbox' ) ) {

	function ot_type_post_type_checkbox($args = array()){
		extract( $args );
		$_args = array('public'=>true);
		$output = 'objects';
		$ptype = get_post_types($_args,$output);
		//echo json_encode($ptype);
		$opt = array();

		foreach($ptype as $ptype=>$values){

			$opt[]= array('label'=>$values->labels->name,'value'=>$values->name);

		}

		$ptypes = array(
			'type'=>'checkbox',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,

			'field_choices'=>$opt

		);
		echo ot_display_by_type($ptypes);
	}

}
if ( ! function_exists( 'ot_type_composite_text' ) ) {

	function ot_type_composite_text($args = array()){
		extract( $args );


	}

}
if ( ! function_exists( 'ot_type_cpt_checkbox' ) ) {

	function ot_type_cpt_checkbox($args = array()){
		extract( $args );

	}

}
if ( ! function_exists( 'ot_type_ct_checkbox' ) ) {

	function ot_type_ct_checkbox($args = array()){
		extract( $args );

	}

}

if ( ! function_exists( 'ot_type_widget_options' ) ) {

	function ot_type_widget_options($args = array()){
		extract( $args );

	}

}
if ( ! function_exists( 'ot_type_post_creator' ) ) {

	function ot_type_creator($args = array()){
		extract( $args );

	}

}
if ( ! function_exists( 'ot_type_meta_creator_level2' ) ) {

	function ot_type_meta_creator_level2($args = array()){
		extract( $args );

		$opt = array(
			'field_id'=>$field['id'],

			'type'=>'list-item',

			'field_condition'=>$field_condition,
			'field_settings'=>array(
				array(
					'id'=>'meta_id',
					'type'=>'text',
					'class'=>'ot-float-left ot-half'

				),
				array(
					'id'=>'meta_type',
					'type'=>'option-types',
					'class'=>'ot-float-left ot-half ot-last'

				),
				array(
					'id'=>'meta_options',
					'type'=>'list-item',
					'condition'=>'meta_type:is(select),meta_type:is(checkbox)',
					'operator'=>'or',
					'settings'=>array(
						array(
							'id'=>'meta_label',
							'type'=>'text',
							'class'=>'ot-float-left ot-half'

						),
						array(
							'id'=>'meta_value',
							'type'=>'text',
							'class'=>'ot-float-left ot-half ot-last'
						)


					)
				)
			));

		echo ot_display_by_type($opt);

	}

}
if ( ! function_exists( 'ot_type_meta_creator' ) ) {

	function ot_type_meta_creator($args = array()){
		extract( $args );

		$posts = get_posts(array(
			'post_type'=>'widget'
		));



		$opt = array(
			'field_id'=>$field_id,
			'field_name'=>$field_name,
			'type'=>'list-item',
			'field_condition'=>$field_condition,
			'field_value'=>$field_value,
			'field_settings'=>
				nested_levels()


		);

		echo ot_display_by_type($opt);

	}

}

if ( ! function_exists( 'ot_type_option_types' ) ) {

	function ot_type_option_types($args = array()){
		extract( $args );
		$options = get_option_types();

		$ptypes = array(
			'type'=>'select',
			'field_name'=>$field_name,
			'field_id'=>$field_id,
			'field_value'=>$field_value,
			'field_class'=>$field_class,


			'field_choices'=>$options

		);

		echo ot_display_by_type($ptypes);
	}

}
if ( ! function_exists( 'ot_type_styler' ) ) {

	function ot_type_styler($args = array()){
		extract( $args );

	}

}

if ( ! function_exists( 'ot_type_nested_list_item' ) ) {

	function ot_type_nested_list_item( $args = array() ) {

		/* turns arguments array into variables */
		extract( $args );

		/* verify a description */
		$has_desc = $field_desc ? true : false;

		// Default
		$sortable = true;

		// Check if the list can be sorted
		if ( ! empty( $field_class ) ) {
			$classes = explode( ' ', $field_class );
			if ( in_array( 'not-sortable', $classes ) ) {
				$sortable = false;
				str_replace( 'not-sortable', '', $field_class );
			}
		}

		/* format setting outer wrapper */
		echo '<div class="format-setting type-list-item ' . ( $has_desc ? 'has-desc' : 'no-desc' ) . '">';

		/* description */
		echo $has_desc ? '<div class="description">' . htmlspecialchars_decode( $field_desc ) . '</div>' : '';

		/* format setting inner wrapper */
		echo '<div class="format-setting-inner">';

		/* pass the settings array arround */
		echo '<input type="hidden" name="' . esc_attr( $field_id ) . '_settings_array" id="' . esc_attr( $field_id ) . '_settings_array" value="' . ot_encode( serialize( $field_settings ) ) . '" />';

		/**
		 * settings pages have array wrappers like 'option_tree'.
		 * So we need that value to create a proper array to save to.
		 * This is only for NON metabox settings.
		 */
		if ( ! isset( $get_option ) )
			$get_option = '';

		/* build list items */
		echo '<ul class="option-tree-setting-wrap' . ( $sortable ? ' option-tree-sortable' : '' ) .'" data-name="' . esc_attr( $field_id ) . '" data-id="' . esc_attr( $post_id ) . '" data-get-option="' . esc_attr( $get_option ) . '" data-type="' . esc_attr( $type ) . '">';

		if ( is_array( $field_value ) && ! empty( $field_value ) ) {

			foreach( $field_value as $key => $list_item ) {

				echo '<li class="ui-state-default list-list-item">';
				ot_nested_list_item_view( $field_id, $key, $list_item, $post_id, $get_option, $field_settings, $type );
				echo '</li>';

			}

		}

		echo '</ul>';

		/* button */
		echo '<a href="javascript:void(0);" class="option-tree-list-item-add option-tree-ui-button button button-primary right hug-right" title="' . __( 'Add New', 'option-tree' ) . '">' . __( 'Add New', 'option-tree' ) . '</a>';

		/* description */
		$list_desc = $sortable ? __( 'You can re-order with drag & drop, the order will update after saving.', 'option-tree' ) : '';
		echo '<div class="list-item-description">' . apply_filters( 'ot_list_item_description', $list_desc, $field_id ) . '</div>';

		echo '</div>';

		echo '</div>';

	}

}

if ( ! function_exists( 'ot_nested_list_item_view' ) ) {

	function ot_nested_list_item_view( $name, $key, $list_item = array(), $post_id = 0, $get_option = '', $settings = array(), $type = '' ) {

		/* required title setting */
		$required_setting = array(
			array(
				'id'        => 'title',
				'label'     => __( 'Unique Identifier', 'option-tree' ),
				'desc'      => '',
				'std'       => '',
				'type'      => 'text',
				'rows'      => '',
				'class'     => 'option-tree-setting-title',
				'post_type' => '',
				'choices'   => array()
			)
		);

		/* load the old filterable slider settings */
		if ( 'slider' == $type ) {

			$settings = ot_slider_settings( $name );

		}


		/* if no settings array load the filterable list item settings */
		if ( empty( $settings ) ) {

			$settings = ot_list_item_settings( $name );

		}

		/* merge the two settings array */
		$settings = array_merge( $required_setting, $settings );

		echo '
    <div class="option-tree-setting">
      <div class="open">' . ( isset( $list_item['title'] ) ? esc_attr( $list_item['title'] ) : '' ) . '</div>
      <div class="button-section">
        <a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . __( 'Edit', 'option-tree' ) . '">
          <span class="icon ot-icon-pencil"></span>' . __( 'Edit', 'option-tree' ) . '
        </a>
        <a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . __( 'Delete', 'option-tree' ) . '">
          <span class="icon ot-icon-trash-o"></span>' . __( 'Delete', 'option-tree' ) . '
        </a>
      </div>
      <div class="option-tree-setting-body">';
		$k2 = 0;
		foreach( $settings as $field ) {

			// Set field value
			$field_value = isset( $list_item[$field['id']] ) ? $list_item[$field['id']] : '';

			/* set default to standard value */
			if ( isset( $field['std'] ) ) {
				$field_value = ot_filter_std_value( $field_value, $field['std'] );
			}

			// filter the title label and description
			if ( $field['id'] == 'title' ) {

				// filter the label
				$field['label'] = apply_filters( 'ot_list_item_title_label', $field['label'], $name );

				// filter the description
				$field['desc'] = apply_filters( 'ot_list_item_title_desc', $field['desc'], $name );

			}

			/* make life easier */
			$_field_name = $get_option ? $get_option  : $name;

			/* build the arguments array */
			$_args = array(
				'type'              => $field['type'],
				'field_id'          => $name . '-' . $field['id'] . '-' . $key,
				'field_name'        => $_field_name . '[' . $key . ']['.$field['id'].']',
				'field_value'       => $field_value,
				'field_desc'        => isset( $field['desc'] ) ? $field['desc'] : '',
				'field_std'         => isset( $field['std'] ) ? $field['std'] : '',
				'field_rows'        => isset( $field['rows'] ) ? $field['rows'] : 10,
				'field_post_type'   => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
				'field_taxonomy'    => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
				'field_min_max_step'=> isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
				'field_class'       => isset( $field['class'] ) ? $field['class'] : '',
				'field_condition'   => isset( $field['condition'] ) ? $field['condition'] : '',
				'field_operator'    => isset( $field['operator'] ) ? $field['operator'] : 'and',
				'field_choices'     => isset( $field['choices'] ) && ! empty( $field['choices'] ) ? $field['choices'] : array(),
				'field_settings'    => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),
				'post_id'           => $post_id,
				'get_option'        => $_field_name . '[' . $key . ']['.$field['id'].']',



			);


			$conditions = '';

			/* setup the conditions */
			if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

				/* doing magic on the conditions so they work in a list item */
				$conditionals = explode( ',', $field['condition'] );
				foreach( $conditionals as $condition ) {
					$parts = explode( ':', $condition );
					if ( isset( $parts[0] ) ) {
						$v = explode(':',$field['condition']);
						// $field['condition'] = str_replace($this->base_name,$v[0],$field['id']).':'.$v[1];
						$field['condition'] = str_replace( $condition, $name . '-' . $parts[0] . '-' . $key . ':' . $parts[1], $field['condition'] );
					}
				}

				$conditions = ' data-condition="' . $field['condition'] . '"';
				$conditions.= isset( $field['operator'] ) && in_array( $field['operator'], array( 'and', 'AND', 'or', 'OR' ) ) ? ' data-operator="' . $field['operator'] . '"' : '';

			}

			// Build the setting CSS class
			if ( ! empty( $_args['field_class'] ) ) {

				$classes = explode( ' ', $_args['field_class'] );

				foreach( $classes as $_key => $value ) {

					$classes[$_key] = $value . '-wrap';

				}

				$class = 'format-settings ' . implode( ' ', $classes );

			} else {

				$class = 'format-settings';

			}

			/* option label */
			echo '<div id="setting_' . $_args['field_id'] . '" class="' . $class . '"' . $conditions . '>';

			/* don't show title with textblocks */
			if ( $_args['type'] != 'textblock' && ! empty( $field['label'] ) ) {
				echo '<div class="format-setting-label">';
				echo '<h3 class="label">' . esc_attr( $field['label'] ) . '</h3>';
				echo '</div>';
			}

			/* only allow simple textarea inside a list-item due to known DOM issues with wp_editor() */
			if ( apply_filters( 'ot_override_forced_textarea_simple', false, $field['id'] ) == false && $_args['type'] == 'textarea' )
				$_args['type'] = 'textarea-simple';

			/* option body, list-item is not allowed inside another list-item */
			if (  $_args['type'] !== 'slider' ) {
				echo ot_display_by_type( $_args );

			}

			echo '</div>';
			$k2++;
		}

		echo '</div>';

		echo '</div>';

	}

}





	add_filter( 'ot_option_types_array', 'harif_custom_fields',0 );



function harif_custom_fields( $fields ) {
	$fields['builder'] =  __( 'Menu Builder', 'harif' );
	$fields['composite-select'] =  __( 'Composite Select', 'harif' );
	$fields['post-type-select'] =  __( 'Post Type Select', 'harif' );
	$fields['option-types'] =  __( 'Option Types', 'harif' );
	$fields['post-type-checkbox'] =  __( 'Post Type Checkbox', 'harif' );
	$fields['custom-field-select'] =  __( 'Custom Field Select', 'harif' );
	$fields['taxonomy-field-select'] =  __( 'Taxonomy Select', 'harif' );
	$fields['taxonomy-field-checkbox'] =  __( 'Taxonomy Checbox', 'harif' );
	$fields['font-preview'] =  __( 'Font Preview', 'harif' );
	$fields['lists-option'] =  __( 'Lists Option', 'harif' );
	$fields['icon-list'] =  __( 'Icons', 'harif' );
	$fields['post-selector'] =  __( 'Post Selector', 'harif' );
	$fields['multiple-selection-tags'] =  __( 'Multiple Selection Tags', 'harif' );
	$fields['multiple-selection'] =  __( 'Multiple Selection', 'harif' );
	$fields['widget'] =  __( 'Widget', 'harif' );
	$fields['tinymce'] =  __( 'Rich Editor', 'harif' );
	$fields['olist-item'] =  __( 'Options Tree List Item', 'harif' );









	return $fields;
}
?>