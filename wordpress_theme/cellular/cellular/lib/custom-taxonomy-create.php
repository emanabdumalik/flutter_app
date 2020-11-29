<?php
add_action('init','custom_taxonomies');
function custom_taxonomies(){

	$pst = get_posts(array(
		'post_type'=>'custom-taxonomy',
		'post_status'=>'publish'

	));
	$list_posts = array();
	$collective_posts = array();
	if($pst){

		foreach($pst as $p){
			register_taxonomy( get_post_meta($p->ID,'slug',true),
				array('post'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
				array('hierarchical' => true,     /* if this is true, it acts like categories */
				      'labels' => array(
					      'name' => __( 'Custom Categories', 'bonestheme' ), /* name of the custom taxonomy */
					      'singular_name' => __( 'Custom Category', 'bonestheme' ), /* single taxonomy name */
					      'search_items' =>  __( 'Search Custom Categories', 'bonestheme' ), /* search title for taxomony */
					      'all_items' => __( 'All Custom Categories', 'bonestheme' ), /* all title for taxonomies */
					      'parent_item' => __( 'Parent Custom Category', 'bonestheme' ), /* parent title for taxonomy */
					      'parent_item_colon' => __( 'Parent Custom Category:', 'bonestheme' ), /* parent taxonomy title */
					      'edit_item' => __( 'Edit Custom Category', 'bonestheme' ), /* edit custom taxonomy title */
					      'update_item' => __( 'Update Custom Category', 'bonestheme' ), /* update title for taxonomy */
					      'add_new_item' => __( 'Add New Custom Category', 'bonestheme' ), /* add new title for taxonomy */
					      'new_item_name' => __( 'New Custom Category Name', 'bonestheme' ) /* name title for taxonomy */
				      ),
				      'show_admin_column' => true,
				      'show_ui' => true,
				      'query_var' => true,
				      'rewrite' => array( 'slug' => get_post_meta($p->ID,'slug',true) ),
				)
			);

			$list_posts['name'] = get_post_meta($p->ID,'name',true);
			$list_posts['slug'] = get_post_meta($p->ID,'slug',true);



			$list_posts['add_new_item'] = get_post_meta($p->ID,'add_new_item',true);
			$list_posts['new_item_name'] = get_post_meta($p->ID,'new_item_name',true);
			$list_posts['update_item'] = get_post_meta($p->ID,'update_item',true);

			$list_posts['all_items'] = get_post_meta($p->ID,'all_items',true);
			$list_posts['search_items'] = get_post_meta($p->ID,'search_items',true);
			$list_posts['parent_item_colon'] = get_post_meta($p->ID,'parent_item_colon',true);
			$list_posts['parent_item'] = get_post_meta($p->ID,'parent_item',true);

			$list_posts['description'] = get_post_meta($p->ID,'description',true);
			$list_posts['menu_name'] = get_post_meta($p->ID,'menu_name',true);

			$list_posts['show_ui'] = get_post_meta($p->ID,'show_ui',true);
			$list_posts['show_admin_colon'] = get_post_meta($p->ID,'show_admin_column',true);
			$list_posts['rewrite'] = get_post_meta($p->ID,'rewrite',true);
			$list_posts['query_var'] = get_post_meta($p->ID,'query_var',true);
			$list_posts['has_archive'] = get_post_meta($p->ID,'has_archive',true);
			$list_posts['hierarchical'] = get_post_meta($p->ID,'hierarchical',true);
			$list_posts['post_types'] = get_post_meta($p->ID,'post_types',false)[0];





			$collective_posts[]=$list_posts;

		}
	}


	//$harif_taxonomie = new Harif_Custom_Taxonomies($collective_posts);
}
if ( ! class_exists( 'Harif_Custom_Taxonomies' ) ) {

	class Harif_Custom_Taxonomies {

		/* variable to store the meta box array */
		private $post_types;

		function __construct( $post_types ) {


			if ( ! is_admin() )
				return;




			$this->create_custom_taxonomies($post_types);


		}

		function create_custom_taxonomies($harif_taxonomies){


			foreach($harif_taxonomies as $ptype_object){
				/*$labels = array(
					'name'               =>  isset( $ptype_object['name']) && ! empty( $ptype_object['name'] )? $ptype_object['name']:'',
					'singular_name'      =>  isset( $ptype_object['singular_name'])&& ! empty( $ptype_object['singular_name'] )?$ptype_object['singular_name']:'',
					'search_items'       =>  isset( $ptype_object['search_items'])&& ! empty( $ptype_object['search_items'] )?$ptype_object['search_items']:'',
					'all_items'          =>  isset( $ptype_object['all_items'])&& ! empty( $ptype_object['all_items'] )?$ptype_object['all_items']:'',
					'parent_item'  =>       isset( $ptype_object['parent_item'])&& ! empty( $ptype_object['parent_item_colon'] )?$ptype_object['parent_item_colon']:'',
					'parent_item_colon'  =>  isset( $ptype_object['parent_item_colon'])&& ! empty( $ptype_object['parent_item_colon'] )?$ptype_object['parent_item_colon']:'',
					'edit_item'          =>  isset( $ptype_object['edit_item'])&& ! empty( $ptype_object['edit_item'] )?$ptype_object['edit_item']:'',
					'update_item'          =>  isset( $ptype_object['update_item'])&& ! empty( $ptype_object['edit_item'] )?$ptype_object['edit_item']:'',
					'add_new_item'          =>  isset( $ptype_object['add_new_item'])&& ! empty( $ptype_object['edit_item'] )?$ptype_object['edit_item']:'',
					'new_item_name'          =>  isset( $ptype_object['new_item_name'])&& ! empty( $ptype_object['edit_item'] )?$ptype_object['edit_item']:'',
					'menu_name'          =>  isset( $ptype_object['menu_name'])&& ! empty( $ptype_object['menu_name'] )?$ptype_object['menu_name']:'',
				);

				$args = array(
					'hierarchical'      => boolval($ptype_object['hierarchical']),
					'labels'            => $labels,
					'show_ui'            => boolval($ptype_object['show_ui']),
					'show_admin_column'            => boolval($ptype_object['show_admin_column']),

					'query_var'         =>  boolval($ptype_object['query_var']),
					'rewrite'            => array('slug'=>'alloha','with_front'=>false),
				);*/
				//register_taxonomy( $ptype_object['slug'],$ptype_object['post_types'], $args );







			}



		}
	}

}