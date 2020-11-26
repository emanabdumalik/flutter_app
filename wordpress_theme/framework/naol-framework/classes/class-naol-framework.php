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
            "publicly_queryable"  => true,
            "show_ui"             => true,

            "has_archive"         => false,
            "show_in_menu"        => true,
            'menu_icon'           => 'dashicons-admin-generic',
            '_builtin'            => false,
            "show_in_nav_menus"   => true,
            "delete_with_user"    => false,
            "exclude_from_search" => true,
            "map_meta_cap"        => true,
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
                'create_posts' => 'do_not_allow',
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
            'widgets'

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
