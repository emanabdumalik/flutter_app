<?php
/**
 * NaolFramework
 *
 * @package Classes\NaolFramework
 * @version  1.0
 */

defined('ABSPATH') || exit;

class NaolFramework
{

    public function __construct()
    {

        add_action('plugins_loaded', array($this, 'load_modules'), 1);

        add_action('init', array($this, 'load_custom_post_types'));
        add_action('wp_head', array($this, 'replace_sidebars'));
        add_action('widgets_init', array($this, 'register_custom_sidebars'));

    }
    public function register_custom_sidebars()
    {
        $posts = acf_get_posts(array(
            'post__in'  => null,
            'post_type' => 'sidebar',
        ));
        foreach ($posts as $post) {
            register_sidebar(
                array(
                    'name'          => __($post->post_title, 'twentyseventeen'),
                    'id'            => get_field('sidebar_id', $post->ID, true),
                    'description'   => __('Add widgets here to appear in your sidebar on blog posts and archive pages.', 'twentyseventeen'),
                    'before_widget' => '<section id="%1$s" class="widget %2$s">',
                    'after_widget'  => '</section>',
                    'before_title'  => '<h2 class="widget-title">',
                    'after_title'   => '</h2>',
                )
            );

        }
    }

    public function replace_sidebars()
    {
        global $_wp_sidebars_widgets, $wp_registered_sidebars, $wp_registered_widgets;

        $posts = acf_get_posts(array(
            'post__in'  => null,
            'post_type' => 'sidebar',
        ));
        foreach ($posts as $post) {
            $original                        = get_field('sidebar_to_replace', $post->ID, true);
            $new_sidebar                     = get_field('sidebar_id', $post->ID, true);
            $_wp_sidebars_widgets[$original] = $_wp_sidebars_widgets[$new_sidebar];
        }
        // print_r($wp_registered_sidebars);

        //  print_r($wp_registered_widgets);

    }
    public function load_custom_post_types()
    {

        /**
         * Post Type: Slideshows.
         */

        $labels = [
            "name"          => __("Slideshows", "naol-framework"),
            "singular_name" => __("Slideshow", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Slideshows", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => false,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            'menu_icon'             => 'dashicons-admin-generic',

            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            "delete_with_user"      => false,
            "exclude_from_search"   => true,
            "capability_type"       => "post",
            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => false,
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("slideshow", $args);

        /**
         * Post Type: Forms.
         */

        $labels = [
            "name"          => __("Forms", "naol-framework"),
            "singular_name" => __("Form", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Forms", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            'menu_icon'             => 'dashicons-admin-generic',

            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            "delete_with_user"      => false,
            "exclude_from_search"   => true,
            "capability_type"       => "post",
            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => false,
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("form", $args);

        /**
         * Post Type: Views.
         */

        $labels = [
            "name"          => __("Views", "naol-framework"),
            "singular_name" => __("View", "naol-framework"),
        ];

        $args = [
            "label"               => __("Views", "naol-framework"),
            "labels"              => $labels,
            "description"         => "",
            "public"              => false,

            "show_ui"             => true,

            "has_archive"         => false,
            "show_in_menu"        => true,
            'menu_icon'           => 'dashicons-admin-generic',
            '_builtin'            => false,
            "show_in_nav_menus"   => true,
            "delete_with_user"    => false,
            "exclude_from_search" => true,
            // "map_meta_cap"        => true,
            '_builtin'            => false,
            "capability_type"     => "post",
            "hierarchical"        => false,
            "rewrite"             => false,
            "query_var"           => false,
            "supports"            => ["title", "thumbnail"],
        ];

        register_post_type("view", $args);

        /**
         * Post Type: Settings.
         */

        $labels = [
            "name"          => __("Configurations", "naol-framework"),
            "singular_name" => __("Setting", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Settings", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            'menu_icon'             => 'dashicons-admin-generic',
            "delete_with_user"      => false,
            "exclude_from_search"   => true,
            "capability_type"       => "post",
            'capabilities'          => array(
                //'create_posts' => 'do_not_allow',
            ),
            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => ["slug" => "setting", "with_front" => true],
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("setting", $args);

        $labels = [
            "name"          => __("Widgets", "naol-framework"),
            "singular_name" => __("Widget", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Widgets", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            'menu_icon'             => 'dashicons-admin-generic',
            "delete_with_user"      => false,
            "exclude_from_search"   => true,

            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => ["slug" => "widget", "with_front" => false],
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("widget", $args);

        $labels = [
            "name"          => __("Sidebars", "naol-framework"),
            "singular_name" => __("Sidebar", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Sidebars", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            'menu_icon'             => 'dashicons-admin-generic',
            "delete_with_user"      => false,
            "exclude_from_search"   => true,

            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => ["slug" => "sidebar", "with_front" => false],
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("sidebar", $args);

        $labels = [
            "name"          => __("Menus", "naol-framework"),
            "singular_name" => __("Menu", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Menus", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            'menu_icon'             => 'dashicons-admin-generic',
            "delete_with_user"      => false,
            "exclude_from_search"   => true,

            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => ["slug" => "menu", "with_front" => false],
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("menu", $args);
        $labels = [
            "name"          => __("Data Sources", "naol-framework"),
            "singular_name" => __("Data Source", "naol-framework"),
        ];

        $args = [
            "label"                 => __("Data Sources", "naol-framework"),
            "labels"                => $labels,
            "description"           => "",
            "public"                => false,
            "publicly_queryable"    => true,
            "show_ui"               => true,
            "show_in_rest"          => true,
            "rest_base"             => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive"           => false,
            "show_in_menu"          => true,
            "show_in_nav_menus"     => true,
            'menu_icon'             => 'dashicons-admin-generic',
            "delete_with_user"      => false,
            "exclude_from_search"   => true,

            "map_meta_cap"          => true,
            "hierarchical"          => false,
            "rewrite"               => ["slug" => "data_source", "with_front" => false],
            "query_var"             => true,
            "supports"              => ["title", "thumbnail"],
        ];

        register_post_type("data_source", $args);

    }

    /**
     * Load RimesStyler on the 'after_plugins_loaded' action. Then filters will
     * be availble to the plugin.
     *
     * @return    void
     *
     * @access    public
     * @since     1.0.0
     */
    public function load_modules()
    {
        /* setup the constants */
        $files = array(
            'models',
            'fields',
            'account',
            'builder',
            'widgets',
            'options-page',

        );

        /* require the files */
        foreach ($files as $file) {
            $this->load_file(NL_PLUGIN_DIR . "modules" . DIRECTORY_SEPARATOR . "{$file}" . DIRECTORY_SEPARATOR . "{$file}.php");
        }

    }
    /**
     * Load a file
     *
     * @return    void
     *
     * @access    private
     * @since     1.0.0
     */
    private function load_file($file)
    {
        include_once $file;
    }

}
if (class_exists('MultiPostThumbnails')) {
    new MultiPostThumbnails(
        array(
            // Replace [YOUR THEME TEXT DOMAIN] below with the text domain of your theme (found in the theme's `style.css`).
            'label'     => __('Secondary Image', '[YOUR THEME TEXT DOMAIN]'),
            'id'        => 'secondary-image',
            'post_type' => 'post',
        )
    );
}
/*add_filter('single_template', 'my_custom_template');

function my_custom_template($single) {

    global $post;

  
    if ( $post->post_type == 'POST TYPE NAME' ) {
        if ( file_exists( PLUGIN_PATH . '/Custom_File.php' ) ) {
            return PLUGIN_PATH . '/Custom_File.php';
        }
    }

    return $single;

}


function my_acf_user_form_func( $atts ) {
 
  $a = shortcode_atts( array(
    'field_group' => ''
  ), $atts );
 
  $uid = get_current_user_id();
  
  if ( ! empty ( $a['field_group'] ) && ! empty ( $uid ) ) {
    $options = array(
      'post_id' => 'user_'.$uid,
      'field_groups' => array( intval( $a['field_group'] ) ),
      'return' => add_query_arg( 'updated', 'true', get_permalink() )
    );
    
    ob_start();
    
    acf_form( $options );
    $form = ob_get_contents();
    
    ob_end_clean();
  }
  
    return $form;
}
 
add_shortcode( 'my_acf_user_form', 'my_acf_user_form_func' );

*/