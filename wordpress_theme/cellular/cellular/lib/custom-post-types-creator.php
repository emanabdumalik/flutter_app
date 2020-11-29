<?php
add_action('init','custom_post_types');
function custom_post_types(){
$pst = get_posts(array(
	'post_type'=>'custom-post-type',
	'post_status'=>'publish'

));
$list_posts = array();
$collective_posts = array();
if($pst){
	foreach($pst as $p){

		$list_posts['name'] = get_post_meta($p->ID,'name',true);
		$list_posts['slug'] = get_post_meta($p->ID,'slug',true);

		$list_posts['singular_name'] = get_post_meta($p->ID,'singular_name',true);
		$list_posts['menu_name'] = get_post_meta($p->ID,'menu_name',true);
		$list_posts['name_admin_bar'] = get_post_meta($p->ID,'name_admin_bar',true);
		$list_posts['add_new'] = get_post_meta($p->ID,'add_new',true);

		$list_posts['add_new_item'] = get_post_meta($p->ID,'add_new_item',true);
		$list_posts['new_item'] = get_post_meta($p->ID,'new_item',true);
		$list_posts['edit_item'] = get_post_meta($p->ID,'edit_item',true);
$list_posts['view_item'] = get_post_meta($p->ID,'view_item',true);

		$list_posts['all_items'] = get_post_meta($p->ID,'all_items',true);
		$list_posts['search_items'] = get_post_meta($p->ID,'search_items',true);
		$list_posts['parent_item_colon'] = get_post_meta($p->ID,'parent_item_colon',true);
		$list_posts['not_found'] = get_post_meta($p->ID,'not_found',true);
		$list_posts['not_found_in_trash'] = get_post_meta($p->ID,'not_found_in_trash',true);
		$list_posts['description'] = get_post_meta($p->ID,'description',true);
		$list_posts['public'] = get_post_meta($p->ID,'public',true);
		$list_posts['publicly_queryable'] = get_post_meta($p->ID,'publicly_queryable',true);
		$list_posts['show_ui'] = get_post_meta($p->ID,'show_ui',true);
		$list_posts['show_in_menu'] = get_post_meta($p->ID,'show_in_menu',true);
		$list_posts['rewrite'] = get_post_meta($p->ID,'rewrite',true);
		$list_posts['capability'] = get_post_meta($p->ID,'capability',true);
		$list_posts['has_archive'] = get_post_meta($p->ID,'has_archive',true);
		$list_posts['hierarchical'] = get_post_meta($p->ID,'hierarchical',true);
		$list_posts['menu_position'] = get_post_meta($p->ID,'menu_position',true);
		$list_posts['supports'] = get_post_meta($p->ID,'supports',false)[0];
		$list_posts['post_type_taxonomies'] = get_post_meta($p->ID,'post_type_taxonomies',false)[0];





		$collective_posts[]=$list_posts;

	}
}


$harif_post_types = new Harif_Custom_Post_Types($collective_posts);
}
if ( ! class_exists( 'Harif_Custom_Post_Types' ) ) {

	class Harif_Custom_Post_Types {

		/* variable to store the meta box array */
		private $post_types;

		function __construct( $post_types ) {
			if ( ! is_admin() )
				return;

			global $harif_post_types;

			if ( ! isset( $harif_post_types ) ) {
				$harif_post_types = array();
			}

			$harif_post_types[] = $post_types;

			$this->post_types = $post_types;

			$this->create_custom_post_types();


		}

		function create_custom_post_types(){


			foreach($this->post_types as $ptype_object){

				$labels = array(
					'name'               =>  isset( $ptype_object['name']) && ! empty( $ptype_object['name'] )? $ptype_object['name']:'',
					'singular_name'      =>  isset( $ptype_object['singular_name'])&& ! empty( $ptype_object['singular_name'] )?$ptype_object['singular_name']:'',
					'menu_name'          =>  isset( $ptype_object['menu_name'])&& ! empty( $ptype_object['menu_name'] )?$ptype_object['menu_name']:'',
					'name_admin_bar'     =>  isset( $ptype_object['name_admin_bar'])&& ! empty( $ptype_object['name_admin_bar'] )?$ptype_object['name_admin_bar']:'',
					'add_new'            =>  isset( $ptype_object['add_new'])&& ! empty( $ptype_object['add_new'] )?$ptype_object['add_new']:'',
					'add_new_item'       =>  isset( $ptype_object['add_new_item'])&& ! empty( $ptype_object['add_new_item'] )?$ptype_object['add_new_item']:'',
					'new_item'           =>  isset( $ptype_object['new_item'])&& ! empty( $ptype_object['new_item'] )?$ptype_object['new_item']:'',
					'edit_item'          =>  isset( $ptype_object['edit_item'])&& ! empty( $ptype_object['edit_item'] )?$ptype_object['edit_item']:'',
					'view_item'          =>  isset( $ptype_object['view_item'])&& ! empty( $ptype_object['view_item'] )?$ptype_object['view_item']:'',
					'all_items'          =>  isset( $ptype_object['all_items'])&& ! empty( $ptype_object['all_items'] )?$ptype_object['all_items']:'',
					'search_items'       =>  isset( $ptype_object['search_items'])&& ! empty( $ptype_object['search_items'] )?$ptype_object['search_items']:'',
					'parent_item_colon'  =>  isset( $ptype_object['parent_item_colon'])&& ! empty( $ptype_object['parent_item_colon'] )?$ptype_object['parent_item_colon']:'',
					'not_found'          =>  isset( $ptype_object['not_found'])&& ! empty( $ptype_object['not_found'] )?$ptype_object['not_found']:'',
					'not_found_in_trash' =>  isset( $ptype_object['not_found_in_trash'])&& ! empty( $ptype_object['not_found_in_trash'] )?$ptype_object['not_found_in_trash']:'',
				);

				$args = array(
					'labels'             => $labels,
					'description'        => $ptype_object['description'],
					'public'             => boolval($ptype_object['public']),
					'publicly_queryable' => boolval($ptype_object['publicly_queryable']),
					'show_ui'            => boolval($ptype_object['show_ui']),
					'show_in_menu'       => boolval($ptype_object['show_in_menu']),
					'query_var'          => $ptype_object['query_var'],
'taxonomies'=>$ptype_object['post_type_taxonomies'],
					'rewrite'            => isset($ptype_object['rewrite']) && !empty($ptype_object['rewrite'])?array( 'slug' => $ptype_object['rewrite'] ):array( 'slug' => '' ),
					'capability'    => 'post',
					'has_archive'        => boolval($ptype_object['has_archive']),
					'hierarchical'       => boolval($ptype_object['hierarchical']),
					'menu_position'      => $ptype_object['menu_position'],
					'supports'      => $ptype_object['supports'],

				);

				register_post_type( $ptype_object['slug'], $args );





			}

		}
	}

}