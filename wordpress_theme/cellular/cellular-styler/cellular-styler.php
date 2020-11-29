<?php
/**
 * Plugin Name: CellularStyler
 * Plugin URI:  http://themers.com/plugins/cellular-styler
 * Description: An advanced visual css editor
 * Version:     1.0
 * Author:      Rimes Gold
 * Author URI:  http://themers.com/author/rimes
 * License:     GPLv3
 * Text Domain: cellular-styler
 */



if ( ! class_exists( 'CS_Loader' ) ) {

	class CS_Loader {

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
			//$this->load_cellular_widgets();

				add_action( 'after_setup_theme', array( $this, 'load_cellular_styler' ), 2 );

			add_action( 'admin_init', array( $this, 'create_css_custom_fields' ) );


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
		public function edit_widget_columns($columns){





		}
		public function manage_widget_columns($column_name){



		}
		public function load_textdomain() {

		}

		public function create_widget_custom_post_type(){


		}


		public function create_css_custom_fields() {

			$page_css = array(
				'id'        => 'page_css',
				'title'     => 'Page Css',
				'desc'      => '',
				'pages'     => array( 'page','post' ),
				'context'   => 'normal',
				'priority'  => 'high',
				'fields'    => array(
					array(
						'type'=>'textarea',
						'id'=>'page_custom_css',



					)
				));


			//$this->load_file( CW_DIR . "includes" . DIRECTORY_SEPARATOR . "meta-boxes.php" );


			//ot_register_user_meta_box( $page_css );


			ot_css_register_meta_box( $page_css );


		}


		public function load_cellular_styler() {

			/* setup the constants */
			$this->constants();

			/* include the required admin files */
			$this->admin_includes();

			/* include the required files */
			$this->includes();

			/* hook into WordPress */
			$this->hooks();

		}


		private function constants() {


			define( 'CS_DIR', plugin_dir_path( __FILE__ ) );
			define( 'CS_URL', plugin_dir_url( __FILE__ ) );

		}


		private function admin_includes() {
			$files = array(
				'ot-meta-box-api',
				'cellular-styler-ajax',




			);

			$files = apply_filters('cellular_styler_admin_includes',$files);


			foreach($files as $file){
				$this->load_file( CS_DIR  ."inc" . DIRECTORY_SEPARATOR . "{$file}.php" );

			}



		}


		private function includes() {



		}


		private function hooks() {
			if(isset($_GET['siteorigin_panels_live_editor']) && $_GET['siteorigin_panels_live_editor'] == true && is_user_logged_in()) {

				add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styler_scripts' ) );
			}//add_filter('siteorigin_panels_widgets', array($this,'add_dynamic_widgets'));



		}
		public function cellular_add_widget_tabs($tabs) {

		}
		public function enqueue_styler_scripts(){
			//wp_enqueue_script('cs-jquery',CS_URL."assets/libs/jquery.js", array(),false,true);

			wp_enqueue_script('cs-utils',CS_URL."assets/background/utils.js", array(),false,true);
			wp_enqueue_script('cs-styles',CS_URL."assets/background/styles.js", array(),false,true);
			wp_enqueue_script('cs-version',CS_URL."assets/background/version.js", array(),false,true);
			wp_enqueue_script('cs-listeners',CS_URL."assets/background/listeners.js", array(),false,true);

			wp_enqueue_script('cs-init-background',CS_URL."assets/background/init.js", array(),false,true);
			wp_enqueue_script('cs-jscsspimporter',CS_URL."assets/libs/jscsspimporter.js", array(),false,true);
			wp_enqueue_script('cs-cssformatter',CS_URL."assets/shared/cssformatter.js", array(),false,true);
			wp_enqueue_script('cs-css-utils',CS_URL."assets/shared/css-utils.js", array(),false,true);
			wp_enqueue_script('cs-css-apply-css',CS_URL."assets/editor/apply-css.js", array(),false,true);
			wp_enqueue_style('cs-colorpicker',CS_URL."assets/libs/colorpicker/colorpicker.css");
			wp_enqueue_style('cs-tipsy',CS_URL."assets/libs/tipsy/tipsy.css");
			wp_enqueue_style('cs-ace',CS_URL."assets/libs/ace/stylebot-ace.css");
			wp_enqueue_style('cs-selectize',CS_URL."assets/libs/selectize/selectize.css");
			wp_enqueue_style('cs-widget-style',CS_URL."assets/editor/css/widget.css");
			wp_enqueue_style('cs-modal-css',CS_URL."assets/shared/modalbox/modalbox.css");
			wp_enqueue_style('cs-controls',CS_URL."assets/editor/css/controls.css");
			wp_enqueue_style('cs-shortcuts_help',CS_URL."assets/editor/css/shortcuts_help.css");
			wp_enqueue_style('cs-preview',CS_URL."assets/editor/css/preview.css");
			wp_enqueue_style('cs-scrollbars',CS_URL."assets/editor/css/scrollbars.css");


			wp_enqueue_script('cs-events',CS_URL."assets/editor/events.js", array(),false,true);

			wp_enqueue_script('cs-underscore',CS_URL."assets/libs/underscore.js", array(),false,true);
			wp_enqueue_script('cs-handlebars',CS_URL."assets/libs/handlebars.js", array(),false,true);
			wp_enqueue_script('cs-colorpicker',CS_URL."assets/libs/colorpicker/colorpicker.js", array(),false,true);
			wp_enqueue_script('cs-tipsy',CS_URL."assets/libs/tipsy/jquery.tipsy.js", array(),false,true);
			wp_enqueue_script('cs-parser',CS_URL."assets/libs/parser.js", array(),false,true);
			wp_enqueue_script('cs-selectize-script',CS_URL."assets/libs/selectize/selectize.js", array(),false,true);
			wp_enqueue_script('cs-ace',CS_URL."assets/libs/ace/ace.js", array(),false,true);
			wp_enqueue_script('cs-ace-mode-css',CS_URL."assets/libs/ace/mode-css.js", array(),false,true);
			wp_enqueue_script('cs-ace-theme-dawn',CS_URL."assets/libs/ace/theme-dawn.js", array(),false,true);
			wp_enqueue_script('cs-selectorGenerator',CS_URL."assets/shared/selectorGenerator.js", array(),false,true);
			wp_enqueue_script('cs-selectionBox',CS_URL."assets/shared/selectionBox.js", array(),false,true);
			wp_enqueue_script('cs-modalbox',CS_URL."assets/shared/modalbox/modalbox.js", array(),false,true);
			wp_enqueue_script('cs-utils-shared',CS_URL."assets/shared/utils.js", array(),false,true);
			wp_enqueue_script('cs-template-page',CS_URL."assets/editor/templates/page.js", array(),false,true);
			wp_enqueue_script('cs-stylebot',CS_URL."assets/editor/stylebot.js", array(),false,true);
			wp_enqueue_script('cs-chrome',CS_URL."assets/editor/chrome.js", array(),false,true);
			wp_enqueue_script('cs-init',CS_URL."assets/editor/init.js", array(),false,true);
			wp_enqueue_script('cs-widget',CS_URL."assets/editor/widget.js", array(),false,true);

			wp_enqueue_script('cs-widget.basic',CS_URL."assets/editor/widget.basic.js", array(),false,true);

			wp_enqueue_script('cs-widget.advanced',CS_URL."assets/editor/widget.advanced.js", array(),false,true);
			wp_enqueue_script('cs-widget-ui',CS_URL."assets/editor/widget-ui.js", array(),false,true);

			wp_enqueue_script('cs-style',CS_URL."assets/editor/style.js", array(),false,true);

			wp_enqueue_script('cs-page',CS_URL."assets/editor/page.js", array(),false,true);

			wp_enqueue_script('cs-undo',CS_URL."assets/editor/undo.js", array(),false,true);


			wp_enqueue_script('cs-shortcuts',CS_URL."assets/editor/shortcuts.js", array(),false,true);
global $post;
			$pid = $post->ID;
			if($post){

}
			wp_localize_script( 'cs-styles', 'cellularStylerOptions', array(
					'ajaxurl' => wp_nonce_url( admin_url('admin-ajax.php'), 'styler_action', '_stylernonce' ),
					'postId'=>$pid
				)
			);



  
		}
		public function add_dynamic_widgets($widgets){


		}


		private function load_file( $file ){

			include_once($file);

		}


		public function global_admin_css() {

		}




	}



	$cs_loader = new CS_Loader();

}





