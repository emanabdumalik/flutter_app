<?php
add_action('admin_init','custom_fields');
function custom_fields() {
	$pst              = get_posts( array(
		'post_type' => 'custom-field',
		'post_status'=>'publish'
	) );
	$list_posts       = array();
	$collective_posts = array();
	if ( $pst ) {
		foreach ( $pst as $p ) {
			$list_posts['custom_field_type'] = get_post_meta($p->ID,'custom_field_type',true);
			$list_posts['custom_field_group_id'] = get_post_meta($p->ID,'custom_field_group_id',true);
			$list_posts['custom_field_group_label'] = get_post_meta($p->ID,'custom_field_group_label',true);
			$list_posts['custom_field_group_context'] = get_post_meta($p->ID,'custom_field_group_Context',true);
			$list_posts['custom_field_group_priority'] = get_post_meta($p->ID,'custom_field_group_priority',true);
			$list_posts['custom_field_group_option'] = get_post_meta($p->ID,'custom_field_group_option',false)[0];
			$list_posts['custom_field_group_post_type_assignment'] = get_post_meta($p->ID,'custom_field_group_post_assignment',false)[0];
			$list_posts['custom_field_group_taxonomy_assignment'] = get_post_meta($p->ID,'custom_field_group_taxonomy_assignment',false)[0];

			$collective_posts[]=$list_posts;

		}


	}
	foreach($collective_posts as $fields){
		$custom_field = array(
			'id'        => $fields['custom_field_group_id'],
			'title'     => $fields['custom_field_group_label'],
			'desc'      => '',

			'context'   => $fields['custom_field_group_context'],
			'priority'  => $fields['custom_field_group_priority'],
			'fields'    => $fields['custom_field_group_option']
		);
		if($fields['custom_field_type'] == 'user'){

			ot_register_user_meta_box($custom_field);

		}
		else if($fields['custom_field_type'] == 'post'){
			$custom_field['pages']=$fields['custom_field_group_post_type_assignment'];
			//print_r($custom_field);
			ot_register_meta_box($custom_field);

		}
		else if($fields['custom_field_type'] == 'taxonomy'){
			$custom_field['pages']=$fields['custom_field_group_taxonomy_assignment'];

			ot_register_taxonomy_meta_box($custom_field);

		}
	}
}