<?php

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

            "show_in_menu"          => 'edit.php?post_type=acf-field-group',
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
            "show_in_menu"        => 'edit.php?post_type=acf-field-group',
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
            "show_in_menu"          => 'edit.php?post_type=acf-field-group',
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
            "show_in_menu"          => 'edit.php?post_type=acf-field-group',
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
            "show_in_menu"          => 'edit.php?post_type=acf-field-group',
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
            "show_in_menu"          => 'edit.php?post_type=acf-field-group',
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


        ?>