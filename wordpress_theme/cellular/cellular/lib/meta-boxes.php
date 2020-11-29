<?php
add_action( 'admin_init', 'custom_meta_boxes' );

function custom_meta_boxes() {
	$page_css = array(
		'id'        => 'custom_page_css',
		'title'     => 'Page Custom Css',
		'desc'      => '',
		'pages'     => array('page','post','wpcf7_contact_form' ),
		'context'   => 'normal',
		'priority'  => 'low',
		'fields'    => array(
			array(
				'type'=>'css',
				'id'=>'page_css'
			)
		)
	);
	$template_side = array(
		'id'        => 'template_side',
		'title'     => 'Template Options',
		'desc'      => '',
		'pages'     => array('template' ),
		'context'   => 'side',
		'priority'  => 'low',
		'fields'    => array(



			array(
				'id'=>'template_type',
				'type'=>'select',
				'label'=>'Template Type',
				'std'=>'post',

				'choices'=>array(
					array(
						'label'=>'Post',
						'value'=>'post'
					),
					array(
						'label'=>'Page',
						'value'=>'page'
					),
					array(
						'label'=>'User',
						'value'=>'user'
					),
					array(
						'label'=>'Header',
						'value'=>'header'
					),
					array(
						'label'=>'Footer',
						'value'=>'footer'
					),
					array(
						'label'=>'Sidebar',
						'value'=>'sidebar'
					),
					array(
						'label'=>'Misc',
						'value'=>'misc'
					),
					array(
						'label'=>'Side Panels',
						'value'=>'side-panels'
					),
					array(
						'label'=>'Modals',
						'value'=>'modals'
					),
					array(
						'label'=>'Menu',
						'value'=>'menu'
					),

				)
			),








		)
	);


$builder = array(
'id'        => 'template_builder',
'title'     => 'Template Builder',
'desc'      => '',
'pages'     => array( 'template','product' ),
'context'   => 'normal',
'priority'  => 'high',
'fields'    => array(


	array(
		'id'          => 'panels_data',


		'desc'        => '',
		'std'         => '',
		'type'        => 'customized-builder',
		'class'       => '',



	)
)
);
	$contact_form_settings = array(
		'id'        => 'contact_form_setting',
		'title'     => 'Form Settings',
		'desc'      => '',
		'pages'     => array( 'template' ),
		'context'   => 'side',
		'priority'  => 'low',
		'fields'    => array(


			array(
				'id'          => 'panels_data',


				'desc'        => '',
				'std'         => '',
				'type'        => 'builder',
				'class'       => '',



			)
		)
	);

	$widget_control_settings = array(
		'id'        => 'widget_control',
		'title'     => 'Widget Status',
		'desc'      => '',
		'pages'     => array( 'widget' ),
		'context'   => 'side',
		'priority'  => 'high',
		'fields'    => array(
			array(
				'type'=>'on-off',
				'id'=>'widget_status',


			)
		));
	$widget_settings = array(
		'id'        => 'widget-template-designer',
		'title'     => 'Designer',
		'desc'      => '',
		'pages'     => array( 'widget' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(
			array(
				'type'=>'tab',
				'id'=>'widget_info_tab',
				'label'=>'Widget Info'

			),
			array(
				'type'=>'text',
				'id'=>'widget_name',
				'label'=>'Name'

			),
			array(
				'type'=>'text',
				'id'=>'widget_class',
				'label'=>'Class Name'

			),
			array(
				'type'=>'text',
				'id'=>'widget_description',
				'label'=>'Description'

			),
			array(
				'type'=>'icon-list',
				'id'=>'widget_icon',
				'label'=>'Icon'

			),
			array(
				'type'=>'text-disabled',
				'id'=>'unique_id',
				'label'=>'Unique Id',
				'std'=>uniqid('widget-')


			),
			array(
				'type'=>'select',
				'id'=>'widget_group',
				'label'=>'Panel Group',
				'choices'=>array(
					array(
						'label'=>'Form Widgets',
						'value'=>'harif-form-widgets'
					),
					array(
						'label'=>'Slider Widgets',
						'value'=>'harif-slider-widgets'
					),
					array(
						'label'=>'Harif Widgets',
						'value'=>'harif-widgets'
					)
				)


			),
			array(
				'type'=>'tab',
				'id'=>'widget_fields_tab',
				'label'=>'Widget Fields',
				'condition'=>'widget_name:not()'

			),
			array(
				'type'=>'meta-creator',
				'id'=>'widget_fields',
				'label'=>'Fields'

			),
			array(
				'type'=>'tab',
				'id'=>'widget_template_tab',
				'label'=>'Widget Template',
				'condition'=>'widget_fields:not()'

			),
			array(
				'type'=>'textarea-simple',
				'id'=>'widget_template',
				'label'=>'Template',
				'std'=>'content here'

			),
			array(
				'type'=>'tab',
				'id'=>'widget_cssjs_tab',
				'label'=>'Widget Css/Js',
				'condition'=>'widget_template:not()'

			),
			array(
				'type'=>'css',
				'id'=>'widget_css',
				'label'=>'Css'

			),
			array(
				'type'=>'javascript',
				'id'=>'widget_js',
				'label'=>'Js'

			),
			array(
				'type'=>'tab',
				'id'=>'widget_externals_tab',
				'label'=>'Widget External Resource',


			),
			array(
				'type'=>'list-item',
				'id'=>'widget_externals_css_files',
				'label'=>'Upload Css',
				'settings'=>array(
					array(
						'id'=>'widget_external_css',
						'type'=>'upload'
					)
				)


			),
			array(
				'type'=>'list-item',
				'id'=>'widget_externals_js_files',
				'label'=>'Upload Js',
				'settings'=>array(
					array(
						'id'=>'widget_external_js',
						'type'=>'upload'
					)
				)


			),




		)
	);
$choices = ot_option_types_array();
	$ch = array();

	foreach($choices as $name=>$title){
		$ch[] = array(
			'label'=>$title,
			'value'=>$name
		);
	}
	$my_meta_box3 = array(
		'id'        => 'widget-data-designer',
		'title'     => 'Data',
		'desc'      => '',
		'pages'     => array( 'widget' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(


			array(
				'id'          => 'widget-data',
				'name' => 'widget-data',
				'type'=>'list-item',
				'label'=>'Widget Data',
				'settings'=>array(
					array(
						'id'=>'data-name',
						'label'=>'Data Name',
						'type'=>'text',
						'class'=>'ot-float-left ot-four-sixth',
					),
					array(
						'id'=>'data-type',
						'label'=>'Data Type',
						'type'=>'select',
						'class'=>'ot-float-left ot-two-sixth ot-last',
						'choices'=>
		$ch

					)
				)
			),
			array(
				'id'          => 'panels_data',
				'name' => 'panels_data',
				'type'=>'builder3',
				'label'=>'Template'
			),
			array(
				'id'          => 'widget-css',
				'name' => 'widget-css',
				'type'=>'text',
				'label'=>'Widget Css',

		),
			array(
				'id'          => 'widget-js',
				'name' => 'widget-js',
				'type'=>'text',
				'label'=>'Widget Javascript',

			)
		)
	);
	$custom_post_meta_control = array(
		'id'        => 'post_custom_fields_control',
		'title'     => 'Select Type',
		'desc'      => '',
		'pages'     => array( 'custom-field' ),
		'context'   => 'side',
		'priority'  => 'high',
		'fields'    => array(
			array(
				'type'=>'select',
				'id'=>'custom_field_type',
				'choices'=>array(
					array(
						'label'=>'Post',
						'value'=>'post'
					),
					array(
						'label'=>'Taxonomy',
						'value'=>'taxonomy'
					),
					array(
						'label'=>'User',
						'value'=>'user'
					),

				)

			)
	)
	);

	$custom_post_meta = array(
		'id'        => 'post_custom_fields',
		'title'     => 'Custom Post Fields',
		'desc'      => '',
		'pages'     => array( 'custom-field' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(
			array(
				'type'=>'tab',
				'id'=>'custom_field_name_tab',
				'label'=>'Field Name'


			),
			array(
				'type'=>'text',
				'id'=>'custom_field_group_id',
				'label'=>'Id'


			),
			array(
				'type'=>'text',
				'id'=>'custom_field_group_label',
				'label'=>'Label'


			),
			array(
				'type'=>'select',
				'id'=>'custom_field_group_Context',
				'label'=>'Context',
				'condition'=>'custom_field_type:is(post)',
				'choices'=>array(
					array(
						'label'=>'Normal',
						'value'=>'normal'
					),
					array(
						'label'=>'Side',
						'value'=>'side'
					),

				)


			),
			array(
				'type'=>'select',
				'id'=>'custom_field_group_priority',
				'label'=>'Priority',
				'condition'=>'custom_field_type:is(post)',

				'choices'=>array(
					array(
						'label'=>'High',
						'value'=>'high'
					),
					array(
						'label'=>'Low',
						'value'=>'low'
					),

				)


			),
			array(
				'type'=>'tab',
				'id'=>'custom_field_option_tab',
				'label'=>'Options'


			),
			array(
				'id'=>'custom_field_group_option',
				'label'=>'Options',
				'type'=>'meta-creator'
			),
			array(
				'type'=>'tab',
				'id'=>'custom_field_assignment',
				'label'=>'Assignment'


			),
			array(
				'id'=>'custom_field_group_post_assignment',
				'label'=>'Post Type Assignmet',
				'type'=>'post-type-checkbox',
				'condition'=>'custom_field_type:is(post)',

			),
			array(
				'id'=>'custom_field_group_taxonomy_assignment',
				'label'=>'Taxonomy Assignmet',
				'type'=>'taxonomy-field_checkbox',
				'condition'=>'custom_field_type:is(taxonomy)',

			),

		));

	$custom_post_type = array(
		'id'        => 'post_custom_types',
		'title'     => 'Custom Post Types',
		'desc'      => '',
		'pages'     => array( 'custom-post-type' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(
			array(

					'type'=>'tab',
					'id'=>'custom_post_name_tab',
					'label'=>'Post Type Name'

			),
			array(
				'type'=>'text',
				'id'=>'name',
				'label'=>'Name'


			),
			array(
				'type'=>'text',
				'id'=>'slug',
				'label'=>'Slug'


			),
			array(
				'type'=>'textarea-simple',
				'id'=>'description',
				'label'=>'Description'


			),
			array(

				'type'=>'tab',
				'id'=>'custom_post_label_tab',
				'label'=>'Labels'

			),
			array(
				'type'=>'text',
				'id'=>'singular_name',
				'label'=>'Singular Name',
				'class'=>'ot-float-left ot-half',



			),
			array(
				'type'=>'text',
				'id'=>'menu_name',
				'label'=>'Menu Name',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'name_admin_bar',
				'label'=>'Name Admin Bar',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'add_new',
				'label'=>'Add New',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'add_new_item',
				'label'=>'Add New Item',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'new_item',
				'label'=>'New Item',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'edit_item',
				'label'=>'Edit Item',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'view_item',
				'label'=>'View Item',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'all_items',
				'label'=>'All Items',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'search_items',
				'label'=>'Search Items',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'parent_item_colon',
				'label'=>'Parent Item Colon',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'not_found',
				'label'=>'Not Found',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'not_found_in_trash',
				'label'=>'Not Found in Trash',
				'class'=>'ot-float-left ot-half',
			),

			array(

				'type'=>'tab',
				'id'=>'custom_post_setting_tab',
				'label'=>'Setting'

			),
			array(
				'id'=>'public',
				'type'=>'true-false',
				'label'=>'Public',
				'class'=>'ot-float-left ot-half',

			),
			array(
				'id'=>'publicly_queryable',
				'type'=>'true-false',
				'label'=>'Publicly Queryable',
				'class'=>'ot-float-left ot-half ot-last',
				'std'=>'true'

			),
			array(
				'id'=>'show_ui',
				'type'=>'true-false',
				'label'=>'Show UI',
				'class'=>'ot-float-left ot-half',
				'std'=>'true'

			),
			array(
				'id'=>'show_in_menu',
				'type'=>'true-false',
				'label'=>'Show in Menu',
				'class'=>'ot-float-left ot-half ot-last',
				'std'=>'true'

			),
			array(
				'id'=>'query_var',
				'type'=>'true-false',
				'label'=>'Query Var',
				'class'=>'ot-float-left ot-half',
				'std'=>'false'

			),
			array(
				'id'=>'rewrite',
				'type'=>'text',
				'label'=>'Rewrite',
				'desc'=>'Default:slug',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'id'=>'has_archive',
				'type'=>'true-false',
				'label'=>'Has Archive',
				'class'=>'ot-float-left ot-half',
				'std'=>'false'
			),
			array(
				'id'=>'hierarchical',
				'type'=>'true-false',
				'label'=>'Hierarchical',
				'class'=>'ot-float-left ot-half ot-last',
				'std'=>'false'
			),
			array(
				'id'=>'menu_position',
				'type'=>'text',
				'label'=>'Menu Position',
				'class'=>'ot-float-left ot-half',

			),
			array(
				'id'=>'menu_icon',
				'type'=>'icon-list',
				'label'=>'Menu Icon',
				'class'=>'ot-float-left ot-last',

			),
			array(
				'id'=>'supports',
				'type'=>'checkbox',
				'label'=>'Supports',
				'class'=>'ot-float-left ot-half ',
				'choices'=>array(
					array(
						'label'=>'Title',
						'value'=>'title'
					),
					array(
						'label'=>'Editor',
						'value'=>'editor'
					),
					array(
						'label'=>'Post Thumbnail',
						'value'=>'post-thumbnail'
					)
				)
			),



			array(
				'type'=>'tab',
				'label'=>'Taxonomies',
				'id'=>'taxonomies',
			),
			array(
				'type'=>'taxonomy-field-checkbox',
				'label'=>'Taxonomies',
				'id'=>'post_type_taxonomies'
			)








		));
	$custom_taxonomy = array(
		'id'        => 'custom_taxonomy',
		'title'     => 'Custom Taxonomy',
		'desc'      => '',
		'pages'     => array( 'custom-taxonomy' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(
			array(

				'type'=>'tab',
				'id'=>'custom_taxonomy_name_tab',
				'label'=>'Taxonomy Name'

			),
			array(
				'type'=>'text',
				'id'=>'name',
				'label'=>'Name'


			),
			array(
				'type'=>'text',
				'id'=>'slug',
				'label'=>'Slug'


			),
			array(
				'type'=>'textarea-simple',
				'id'=>'description',
				'label'=>'Description'


			),
			array(

				'type'=>'tab',
				'id'=>'custom_taxonomy_label_tab',
				'label'=>'Labels',


			),
			array(
				'type'=>'text',
				'id'=>'singular_name',
				'label'=>'Singular Name',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'search_items',
				'label'=>'Search Items',
				'class'=>'ot-float-left ot-half ot-last',
			),

			array(
				'type'=>'text',
				'id'=>'all_items',
				'label'=>'All Items',
				'class'=>'ot-float-left ot-half',
			),

			array(
				'type'=>'text',
				'id'=>'parent_item',
				'label'=>'Parent Item',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'parent_item_colon',
				'label'=>'Parent Item Colon',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'edit_item',
				'label'=>'Edit Item',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'update_item',
				'label'=>'Update Item',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'add_new_item',
				'label'=>'add_new_item',
				'class'=>'ot-float-left ot-half ot-last',
			),
			array(
				'type'=>'text',
				'id'=>'new_item_name',
				'label'=>'New Item Name',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'update_item',
				'label'=>'Update Item',
				'class'=>'ot-float-left ot-half',
			),
			array(
				'type'=>'text',
				'id'=>'menu_name',
				'label'=>'Menu Item',
				'class'=>'ot-float-left ot-half',
			),
			array(

				'type'=>'tab',
				'id'=>'custom_taxonomy_setting_tab',
				'label'=>'Setting'

			),
			array(
				'id'=>'show_ui',
				'type'=>'true-false',
				'label'=>'Show UI',
				'class'=>'ot-float-left ot-half',

			),
			array(
				'id'=>'show_admin_column',
				'type'=>'true-false',
				'label'=>'Show Admin Column',
				'class'=>'ot-float-left ot-half ot-last',

			),
			array(
				'id'=>'query_var',
				'type'=>'true-false',
				'label'=>'Query Var',
				'class'=>'ot-float-left ot-half',

			),
			array(
				'id'=>'rewrite',
				'type'=>'text',
				'label'=>'Rewrite',
				'desc'=>'Default:slug',
				'class'=>'ot-float-left ot-half ot-last',
			),

			array(
				'id'=>'hierarchical',
				'type'=>'true-false',
				'label'=>'Hierarchical',
				'class'=>'ot-float-left ot-half ot-last',

			),
			array(
				'type'=>'tab',
				'label'=>'Post Types'
			),
			array(
				'type'=>'post-type-checkbox',
				'label'=>'Apply to Post Types',
				'id'=>'post_types'
			)

		));


	$custom_type_control = array(
		'id'        => 'custom_type_control',
		'title'     => 'Property Status',
		'desc'      => '',
		'pages'     => array( 'custom-post-type','custom-taxonomy','custom-field' ),
		'context'   => 'side',
		'priority'  => 'high',
		'fields'    => array(
			array(
				'type'=>'on-off',
				'id'=>'property_status',


			)
		));
	$builder2 = array(
		'id'        => 'template_builder',
		'title'     => 'Template Builder',
		'desc'      => '',
		'pages'     => array( 'category' ),
		'context'   => 'normal',
		'priority'  => 'high',
		'fields'    => array(

			array(
				'id'          => '22',
				'type'=>'tab',

				'desc'        => '',

			),
			array(
				'id'          => 'hh555',


				'desc'        => '',
				'std'         => '',
				'type'        => 'upload',
				'class'       => '',
				'label'=>'Text',




			),
			array(
				'id'          => 'hh5h',


				'desc'        => '',
				'std'         => '',
				'type'        => 'list-item',
				'class'       => '',
				'label'=>'Text',
				'settings'=>array(
					array(
						'id'          => 'gg',


						'desc'        => '',
						'std'         => '',
						'type'        => 'list-item',
						'class'       => '',
						'label'=>'Text',
					)
				)




			)
		)
	);

	//ot_register_user_meta_box( $page_css );
	ot_register_user_meta_box( $custom_post_meta );
	ot_register_meta_box( $custom_post_meta_control );

	ot_register_meta_box( $custom_post_type );
	ot_register_meta_box( $custom_taxonomy );
	ot_register_meta_box( $custom_type_control );
ot_register_meta_box( $widget_settings );
	ot_register_meta_box( $widget_control_settings );
	ot_register_meta_box( $builder );
	ot_register_meta_box( $template_side );


}