<?php


if ( ! class_exists( 'CT_Loader' ) ) {

	class CT_Loader {

		/**
		 * PHP5 constructor method.
		 *
		 * This method loads other methods of the class.
		 *
		 * @return    void
		 *
		 * @access    public
		 * @since     2.0
		 */
		public function __construct() {
			//$this->load_cellular_templates();
			add_action( 'after_setup_theme', array( $this, 'load_cellular_templates' ), 1 );

			add_action('init',array($this,'create_template_custom_post_type'),0);
			add_action( 'admin_init', array( $this, 'create_custom_fields' ) );
			add_action("manage_edit-cellular-template_columns", array($this,"edit_template_columns"));
			add_action("manage_cellular-template_posts_custom_column", array($this,"manage_template_columns"));

		}

		/**
		 * Load the languages before everything else.
		 *
		 * @return    void
		 *
		 * @access    private
		 * @since     2.1.3
		 */
		private function load_languages() {





		}
		public function edit_template_columns($columns){
			$new_columns = array();

			$new_columns["cb"] = '<input type="checkbox">';
			$new_columns["title"] = 'Template Name';
			$new_columns["image"] = 'Preview';

			$new_columns["applied"] = 'Applied To';
			$new_columns["description"] = 'Description';
			$new_columns["status"] = 'Status';

			return $new_columns;




		}
		public function manage_template_columns($column_name){
			global $post;
			switch($column_name){
				case "image":
					$template_image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail')[0];

					echo '<div class="template-column-preview"><img src="'.$template_image.'"></div>';
					break;
				case "description":
					$column_title = get_post_meta($post->ID,'template_description',true);
					echo $column_title;
					break;
				case "applied":
					$column_title = get_post_meta($post->ID,'template_type',true);
					echo $column_title;
					break;
				case "status":
					$column_title = get_post_meta($post->ID,'template_status',true);
					echo $column_title;
					break;
				default:
					break;


			}

		}
		public function load_textdomain() {

		}

		public function create_template_custom_post_type(){
			$labels = array(
				'name'               => _x( 'Templates', 'post type general name', 'cellular-Templates' ),
				'singular_name'      => _x( 'Template', 'post type singular name', 'cellular-Templates' ),
				'menu_name'          => _x( 'Template', 'admin menu', 'cellular-Templates' ),
				'name_admin_bar'     => _x( 'Template', 'add new on admin bar', 'cellular-Templates' ),
				'add_new'            => _x( 'Add New Template', 'cellular-Templates' ),
				'add_new_item'       => __( 'Add New Template', 'cellular-Templates' ),
				'new_item'           => __( 'New Template', 'cellular-Templates' ),
				'edit_item'          => __( 'Edit Template', 'cellular-Templates' ),
				'view_item'          => __( 'View Template', 'cellular-Templates' ),
				'all_items'          => __( 'All Templates', 'cellular-Templates' ),
				'search_items'       => __( 'Search Templates', 'cellular-Templates' ),
				'parent_item_colon'  => __( 'Parent Template', 'cellular-Templates' ),
				'not_found'          => __( 'No Templates Found found.', 'cellular-Templates' ),
				'not_found_in_trash' => __( 'No Templates found in Trash', 'cellular-Templates' )
			);

			$args = array(
				'labels'             => $labels,
				'description'        => __( 'Description.', 'cellular-templates' ),
				'public'             => false,
				'publicly_queryable' => false,
				'show_ui'            => true,
				'show_in_menu'       => true,
				'query_var'          => true,

				'rewrite'            => array( 'slug' => 'cellular-template' ),
				'capability'    => 'page',
				'has_archive'        => false,
				'hierarchical'       => false,
				'menu_position'      => null,
				'menu_icon'=> 'dashicons-cellular-template',
				'supports'           => array('title','thumbnail')
			);

			register_post_type( 'cellular-template', $args );
		}


		public function create_custom_fields() {

			$template_control_settings = array(
				'id'        => 'template_control',
				'title'     => 'template Status',
				'desc'      => '',
				'pages'     => array( 'cellular-template' ),
				'context'   => 'side',
				'priority'  => 'high',
				'fields'    => array(
					array(
						'type'=>'on-off',
						'id'=>'template_status',
						'std'=>'on'


					),
					array(
						'id'=>'template_type',
						'type'=>'select',
						'label'=>'Template Type',
						'std'=>'post-template',

						'choices'=>array(
							array(
								'label'=>'Post Template',
								'value'=>'post-template'
							),
							array(
								'label'=>'Page Template',
								'value'=>'page-template'
							),
							array(
								'label'=>'User Template',
								'value'=>'user-template'
							),
							array(
								'label'=>'Widget',
								'value'=>'widget-template'
							),
							array(
								'label'=>'Menu',
								'value'=>'menu-template'
							),
							array(
								'label'=>'Post Loop',
								'value'=>'post-loop'
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
							)


						)
					),
					array(
						'id'=>'widget_selection',
						'type'=>'select-widget',
						'label'=>'Widget',
						'post_type'=>'cellular-widget',
						'condition'=>'template_type:is(widget-template)'
					),
					array(
						'id'=>'user_template',
						'type'=>'select',
						'label'=>'User Template',
						'condition'=>'template_type:is(user-template)',


						'choices'=>array(
							array(
								'label'=>'Login',
								'value'=>'Login'
							),
						),
					),
					array(
						'id'=>'post_template',
						'type'=>'select',
						'label'=>'Post Template',
						'condition'=>'template_type:is(post-template)',


						'choices'=>array(
							array(
								'label'=>'Search',
								'value'=>'search'
							),
						),
					),
					array(
						'id'=>'page_template',
						'type'=>'select',
						'label'=>'Page Template',
						'condition'=>'template_type:is(page-template)',


						'choices'=>array(
							array(
								'label'=>'404',
								'value'=>'page-not-found'
							),
						),
					),
					array(
						'id'=>'post_loop_template',
						'type'=>'select',
						'label'=>'Post Loops',
						'condition'=>'template_type:is(post-loop)',


						'choices'=>get_all_post_types_2()
					),




				));
			$template_settings = array(
				'id'        => 'template-template-designer',
				'title'     => 'Designer',
				'desc'      => '',
				'pages'     => array( 'cellular-template' ),
				'context'   => 'normal',
				'priority'  => 'high',
				'fields'    => array(
					array(
						'type'=>'text',
						'id'=>'template_description',
						'label'=>'Description'

					),
					array(
						'type'=>'customized-builder',
						'id'=>'panels_data',

					),

				)
			);

			$template_for_posts = array(
				'id'        => 'display_template',
				'title'     => 'Template',
				'desc'      => '',
				'pages'     => array( 'page','post' ),
				'context'   => 'side',
				'priority'  => 'high',
				'fields'    => array(
					array(
						'type'=>'select-widget',
						'id'=>'post_template',
						'post_type'=>'cellular-template'

					)
				)
			);












			//$this->load_file( CW_DIR . "includes" . DIRECTORY_SEPARATOR . "meta-boxes.php" );


			//ot_register_user_meta_box( $page_css );
			$template_for_posts = apply_filters('cellular_templates_applied_posts',$template_for_posts);

			$template_settings = apply_filters('cellular_templates_settings_fields',$template_settings);
			$template_control_settings = apply_filters('cellular_templates_control_fields',$template_control_settings);

			ot_register_template_meta_box( $template_settings );
			ot_register_template_meta_box( $template_control_settings );
			ot_register_template_meta_box( $template_for_posts );



		}


		public function load_cellular_templates() {

			/* setup the constants */
			$this->constants();

			/* include the required admin files */
			$this->admin_includes();

			/* include the required files */
			//$this->includes();

			/* hook into WordPress */
			$this->hooks();

		}


		private function constants() {

			define( 'CT_DIR', plugin_dir_path( __FILE__ ) );
			define( 'CT_URL', plugin_dir_url( __FILE__ ) );


		}


		private function admin_includes() {
			$files = array(
				'ot-template-meta-box-api',



			);

			$files = apply_filters('cellular_template_admin_includes',$files);


			foreach($files as $file){
				$this->load_file( CT_DIR . "{$file}.php" );

			}



		}


		private function includes() {



		}


		private function hooks() {

			//add_action('wp_enqueue_scripts',array($this,'enqueue_dynamic_resources'));
			//add_filter('siteorigin_panels_templates', array($this,'add_dynamic_templates'));


			add_filter('siteorigin_panels_template_dialog_tabs', array($this,'cellular_add_template_tabs'), 20);

		}
		public function cellular_add_template_tabs($tabs) {
			if($_GET['post_type']=='template'){
				//$tabs = array();
			}
			$tabs[] = array(
				'title' => __('Templates', 'cellular'),
				'filter' => array(
					'groups' => array('cellular-templates')
				)
			);



			return $tabs;
		}

		public function add_dynamic_templates($templates){


		}


		private function load_file( $file ){

			include_once($file);

		}


		public function global_admin_css() {

		}




	}



	$CT_Loader = new CT_Loader();

}
add_filter('siteorigin_panels_is_admin_page','include_template_page');
function include_template_page($crnt){
	$screen = get_current_screen();
	return $crnt || in_array($screen->id,array('cellular-template'));
}



