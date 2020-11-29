<?php

if (!class_exists('acf_field_template_builder')):

    class acf_field_template_builder extends acf_field
{

        /*
         *  initialize
         *
         *  This function will setup the field type data
         *
         *  @type    function
         *  @date    5/03/2014
         *  @since    5.0.0
         *
         *  @param    n/a
         *  @return    n/a
         */

        public function initialize()
    {

            // vars
            $this->name     = 'template_builder';
            $this->label    = __("Template Builder", 'acf');
            $this->defaults = array(
                'default_value' => '{}',
                'maxlength'     => '',
                'placeholder'   => '',
                'prepend'       => '',
                'append'        => '',
            );

        }

        /*
         *  render_field()
         *
         *  Create the HTML interface for your field
         *
         *  @param    $field - an array holding all the field's data
         *
         *  @type    action
         *  @since    3.6
         *  @date    23/01/13
         */

        public function input_admin_enqueue_scripts()
    {
            wp_enqueue_media();
            wp_enqueue_script(
                'so-panels-admin',
                siteorigin_panels_url( 'js/siteorigin-panels' . SITEORIGIN_PANELS_JS_SUFFIX . '.js' ),
                array(
                    'jquery',
                    'jquery-ui-resizable',
                    'jquery-ui-sortable',
                    'jquery-ui-draggable',
                    'underscore',
                    'backbone',
                    'plupload',
                    'plupload-all'
                ),
                SITEORIGIN_PANELS_VERSION,
                true
            );
            wp_enqueue_style(
                'so-panels-admin',
                siteorigin_panels_url( 'css/admin' . SITEORIGIN_PANELS_CSS_SUFFIX . '.css' ),
                array( 'wp-color-picker' ),
                SITEORIGIN_PANELS_VERSION
            );
            add_action( 'admin_footer', array( $this, 'js_templates' ) );
            add_action( 'wp_footer', array( $this, 'js_templates' ) );

            $widgets = $this->get_widgets();
            $directory_enabled = get_user_meta( get_current_user_id(), 'so_panels_directory_enabled', true );

            // This is the widget we'll use for default text
            if( ! empty( $widgets[ 'SiteOrigin_Widget_Editor_Widget' ] ) ) $text_widget = 'SiteOrigin_Widget_Editor_Widget';
            else if( ! empty( $widgets[ 'WP_Widget_Text' ] ) ) $text_widget = 'WP_Widget_Text';
            else $text_widget = false;

            $text_widget = apply_filters( 'siteorigin_panels_text_widget_class', $text_widget );

            $user = wp_get_current_user();

            $load_on_attach = true;
            wp_localize_script( 'so-panels-admin', 'panelsOptions', array(
                'user'                      => ! empty( $user ) ? $user->ID : 0,
                'ajaxurl'                   => wp_nonce_url( admin_url( 'admin-ajax.php' ), 'panels_action', '_panelsnonce' ),
                'widgets'                   => $widgets,
                'text_widget'               => $text_widget,
                'widget_dialog_tabs'        => apply_filters( 'siteorigin_panels_widget_dialog_tabs', array(
                    0 => array(
                        'title'  => __( 'All Widgets', 'siteorigin-panels' ),
                        'filter' => array(
                            'installed' => true,
                            'groups'    => ''
                        )
                    )
                ) ),
                'row_layouts'               => apply_filters( 'siteorigin_panels_row_layouts', array() ),
                'directory_enabled'         => ! empty( $directory_enabled ),
                'copy_content'              => siteorigin_panels_setting( 'copy-content' ),
                'cache'                     => array(),
                'instant_open'              => siteorigin_panels_setting( 'instant-open-widgets' ),

                // Settings for the contextual menu
                'contextual'                => array(
                    // Developers can change which widgets are displayed by default using this filter
                    'default_widgets' => apply_filters( 'siteorigin_panels_contextual_default_widgets', array(
                        'SiteOrigin_Widget_Editor_Widget',
                        'SiteOrigin_Widget_Button_Widget',
                        'SiteOrigin_Widget_Image_Widget',
                        'SiteOrigin_Panels_Widgets_Layout',
                    ) )
                ),

                // General localization messages
                'loc'                       => array(
                    'missing_widget'       => array(
                        'title'       => __( 'Missing Widget', 'siteorigin-panels' ),
                        'description' => __( "Page Builder doesn't know about this widget.", 'siteorigin-panels' ),
                    ),
                    'time'                 => array(
                        // TRANSLATORS: Number of seconds since
                        'seconds' => __( '%d seconds', 'siteorigin-panels' ),
                        // TRANSLATORS: Number of minutes since
                        'minutes' => __( '%d minutes', 'siteorigin-panels' ),
                        // TRANSLATORS: Number of hours since
                        'hours'   => __( '%d hours', 'siteorigin-panels' ),

                        // TRANSLATORS: A single second since
                        'second'  => __( '%d second', 'siteorigin-panels' ),
                        // TRANSLATORS: A single minute since
                        'minute'  => __( '%d minute', 'siteorigin-panels' ),
                        // TRANSLATORS: A single hour since
                        'hour'    => __( '%d hour', 'siteorigin-panels' ),

                        // TRANSLATORS: Time ago - eg. "1 minute before".
                        'ago'     => __( '%s before', 'siteorigin-panels' ),
                        'now'     => __( 'Now', 'siteorigin-panels' ),
                    ),
                    'history'              => array(
                        // History messages
                        'current'           => __( 'Current', 'siteorigin-panels' ),
                        'revert'            => __( 'Original', 'siteorigin-panels' ),
                        'restore'           => __( 'Version restored', 'siteorigin-panels' ),
                        'back_to_editor'    => __( 'Converted to editor', 'siteorigin-panels' ),

                        // Widgets
                        // TRANSLATORS: Message displayed in the history when a widget is deleted
                        'widget_deleted'    => __( 'Widget deleted', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a widget is added
                        'widget_added'      => __( 'Widget added', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a widget is edited
                        'widget_edited'     => __( 'Widget edited', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a widget is duplicated
                        'widget_duplicated' => __( 'Widget duplicated', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a widget position is changed
                        'widget_moved'      => __( 'Widget moved', 'siteorigin-panels' ),

                        // Rows
                        // TRANSLATORS: Message displayed in the history when a row is deleted
                        'row_deleted'       => __( 'Row deleted', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a row is added
                        'row_added'         => __( 'Row added', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a row is edited
                        'row_edited'        => __( 'Row edited', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a row position is changed
                        'row_moved'         => __( 'Row moved', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a row is duplicated
                        'row_duplicated'    => __( 'Row duplicated', 'siteorigin-panels' ),
                        // TRANSLATORS: Message displayed in the history when a row is pasted
                        'row_pasted'        => __( 'Row pasted', 'siteorigin-panels' ),

                        // Cells
                        'cell_resized'      => __( 'Cell resized', 'siteorigin-panels' ),

                        // Prebuilt
                        'prebuilt_loaded'   => __( 'Prebuilt layout loaded', 'siteorigin-panels' ),
                    ),

                    // general localization
                    'prebuilt_loading'     => __( 'Loading prebuilt layout', 'siteorigin-panels' ),
                    'confirm_use_builder'  => __( "Would you like to copy this editor's existing content to Page Builder?", 'siteorigin-panels' ),
                    'confirm_stop_builder' => __( "Would you like to clear your Page Builder content and revert to using the standard visual editor?", 'siteorigin-panels' ),
                    // TRANSLATORS: This is the title for a widget called "Layout Builder"
                    'layout_widget'        => __( 'Layout Builder Widget', 'siteorigin-panels' ),
                    // TRANSLATORS: A standard confirmation message
                    'dropdown_confirm'     => __( 'Are you sure?', 'siteorigin-panels' ),
                    // TRANSLATORS: When a layout file is ready to be inserted. %s is the filename.
                    'ready_to_insert'      => __( '%s is ready to insert.', 'siteorigin-panels' ),

                    // Everything for the contextual menu
                    'contextual'           => array(
                        'add_widget_below' => __( 'Add Widget Below', 'siteorigin-panels' ),
                        'add_widget_cell'  => __( 'Add Widget to Cell', 'siteorigin-panels' ),
                        'search_widgets'   => __( 'Search Widgets', 'siteorigin-panels' ),

                        'add_row' => __( 'Add Row', 'siteorigin-panels' ),
                        'column'  => __( 'Column', 'siteorigin-panels' ),

                        'cell_actions'        => __( 'Cell Actions', 'siteorigin-panels' ),
                        'cell_paste_widget'   => __( 'Paste Widget', 'siteorigin-panels' ),

                        'widget_actions'   => __( 'Widget Actions', 'siteorigin-panels' ),
                        'widget_edit'      => __( 'Edit Widget', 'siteorigin-panels' ),
                        'widget_duplicate' => __( 'Duplicate Widget', 'siteorigin-panels' ),
                        'widget_delete'    => __( 'Delete Widget', 'siteorigin-panels' ),
                        'widget_copy'      => __( 'Copy Widget', 'siteorigin-panels' ),
                        'widget_paste'     => __( 'Paste Widget Below', 'siteorigin-panels' ),

                        'row_actions'   => __( 'Row Actions', 'siteorigin-panels' ),
                        'row_edit'      => __( 'Edit Row', 'siteorigin-panels' ),
                        'row_duplicate' => __( 'Duplicate Row', 'siteorigin-panels' ),
                        'row_delete'    => __( 'Delete Row', 'siteorigin-panels' ),
                        'row_copy'      => __( 'Copy Row', 'siteorigin-panels' ),
                        'row_paste'     => __( 'Paste Row', 'siteorigin-panels' ),
                    ),
                    'draft'                => __( 'Draft', 'siteorigin-panels' ),
                    'untitled'             => __( 'Untitled', 'siteorigin-panels' ),
                    'row' => array(
                        'add' => __( 'New Row', 'siteorigin-panels' ),
                        'edit' => __( 'Row', 'siteorigin-panels' ),
                    ),
                    'welcomeMessage' => array(
                        'addingDisabled' => __( 'Hmmm... Adding layout elements is not enabled. Please check if Page Builder has been configured to allow adding elements.', 'siteorigin-panels' ),
                        'oneEnabled' => __( 'Add a {{%= items[0] %}} to get started.', 'siteorigin-panels' ),
                        'twoEnabled' => __( 'Add a {{%= items[0] %}} or {{%= items[1] %}} to get started.', 'siteorigin-panels' ),
                        'threeEnabled' => __( 'Add a {{%= items[0] %}}, {{%= items[1] %}} or {{%= items[2] %}} to get started.', 'siteorigin-panels' ),
                        'addWidgetButton' => "<a href='#' class='so-tool-button so-widget-add'>" . __( 'Widget', 'siteorigin-panels' ) . "</a>",
                        'addRowButton' => "<a href='#' class='so-tool-button so-row-add'>" . __( 'Row', 'siteorigin-panels' ) . "</a>",
                        'addPrebuiltButton' => "<a href='#' class='so-tool-button so-prebuilt-add'>" . __( 'Prebuilt Layout', 'siteorigin-panels' ) . "</a>",
                        'docsMessage' => sprintf(
                                __( 'Read our %s if you need help.', 'siteorigin-panels' ),
                            "<a href='https://siteorigin.com/page-builder/documentation/' target='_blank' rel='noopener noreferrer'>" . __( 'documentation', 'siteorigin-panels' ) . "</a>"
                        ),
                    ),
                ),
                'plupload'                  => array(
                    'max_file_size'       => wp_max_upload_size() . 'b',
                    'url'                 => wp_nonce_url( admin_url( 'admin-ajax.php' ), 'panels_action', '_panelsnonce' ),
                    'flash_swf_url'       => includes_url( 'js/plupload/plupload.flash.swf' ),
                    'silverlight_xap_url' => includes_url( 'js/plupload/plupload.silverlight.xap' ),
                    'filter_title'        => __( 'Page Builder layouts', 'siteorigin-panels' ),
                    'error_message'       => __( 'Error uploading or importing file.', 'siteorigin-panels' ),
                ),
                'wpColorPickerOptions'      => apply_filters( 'siteorigin_panels_wpcolorpicker_options', array() ),
                'prebuiltDefaultScreenshot' => siteorigin_panels_url( 'css/images/prebuilt-default.png' ),
                'loadOnAttach'              => $load_on_attach ,
                'siteoriginWidgetRegex'     => str_replace( '*+', '*', get_shortcode_regex( array( 'siteorigin_widget' ) ) ),
                'forms'                 => array(
                    'loadingFailed' => __( 'Unknown error. Failed to load the form. Please check your internet connection, contact your web site administrator, or try again later.', 'siteorigin-panels' ),
                )
            ) );

           

            // This gives panels a chance to enqueue scripts too, without having to check the screen ID.
         
        

        }
        public function js_templates(){
            include NL_PLUGIN_DIR . 'modules/builder/tpl/js-templates.php';
        }
            function get_widgets() {
        global $wp_widget_factory;
        $widgets = array();
        foreach ( $wp_widget_factory->widgets as $class => $widget_obj ) {
            $class = preg_match( '/[0-9a-f]{32}/', $class ) ? get_class( $widget_obj ) : $class;
            $widgets[ $class ] = array(
                'class'       => $class,
                'title'       => ! empty( $widget_obj->name ) ? $widget_obj->name : __( 'Untitled Widget', 'siteorigin-panels' ),
                'description' => ! empty( $widget_obj->widget_options['description'] ) ? $widget_obj->widget_options['description'] : '',
                'installed'   => true,
                'groups'      => array(),
            );

            // Get Page Builder specific widget options
            if ( isset( $widget_obj->widget_options['panels_title'] ) ) {
                $widgets[ $class ]['panels_title'] = $widget_obj->widget_options['panels_title'];
            }
            if ( isset( $widget_obj->widget_options['panels_groups'] ) ) {
                $widgets[ $class ]['groups'] = $widget_obj->widget_options['panels_groups'];
            }
            if ( isset( $widget_obj->widget_options['panels_icon'] ) ) {
                $widgets[ $class ]['icon'] = $widget_obj->widget_options['panels_icon'];
            }

        }

        // Other plugins can manipulate the list of widgets. Possibly to add recommended widgets
        $widgets = apply_filters( 'siteorigin_panels_widgets', $widgets );

        // Exclude these temporarily, as they won't work until we have a reliable way to enqueue their admin form scripts.
        $to_exclude = array(
            'Jetpack_Gallery_Widget',
            'WPCOM_Widget_GooglePlus_Badge',
            'Jetpack_Widget_Social_Icons',
            'Jetpack_Twitter_Timeline_Widget'
        );

        foreach ( $to_exclude as $widget_class ) {
            if ( in_array( $widget_class, $widgets ) ) {
                unset( $widgets[ $widget_class ] );
            }
        }

        // Sort the widgets alphabetically
        uasort( $widgets, array( $this, 'widgets_sorter' ) );

        return $widgets;
    }
    function widgets_sorter( $a, $b ) {
        if ( empty( $a['title'] ) ) {
            return - 1;
        }
        if ( empty( $b['title'] ) ) {
            return 1;
        }

        return $a['title'] > $b['title'] ? 1 : - 1;
    }
        public function render_field($field)
    {
            $field_id         = $field['id'];
            $field_name       = $field['name'];
            $field_value      = $field['value'];
            $builder_supports = apply_filters('siteorigin_panels_builder_supports', array('addRow' => false));

            ?>

hello
    <div class="siteorigin-page-builder-widget " id="siteorigin-page-builder-widget-<?php echo $field_id ?>" data-builder-id="<?php echo esc_attr($field_id) ?>"
         data-type="layout-widget" data-builder-supports="<?php echo esc_attr(json_encode($builder_supports)); ?>" data-live-editor="1">

        <input type="hidden" data-panels-filter="json_parse" value="" class="panels-data" name="<?php echo $field_name ?>" id="<?php echo $field_id ?>" />
    <?php

            if (!is_string($field_value)) {
                $field_value = json_encode($field_value);
            }
            ?>
        <script type="text/javascript">
            ( function( panelsData ){
                // Create the panels_data input
                document.getElementById('<?php echo $field_id ?>').value = JSON.stringify( panelsData );
            } )( <?php echo stripslashes($field_value); ?>);
        </script>

        <input type="hidden" value="<?php echo esc_attr($field_id) ?>"    />
    </div>
    <script type="text/javascript">
        if( typeof jQuery.fn.soPanelsSetupBuilderWidget != 'undefined' && !jQuery('body').hasClass('wp-customizer') ) {
            jQuery( "#siteorigin-page-builder-widget-<?php echo esc_attr($field_id) ?>").soPanelsSetupBuilderWidget();
        }


    </script><?php
    }

        /*
         *  render_field_settings()
         *
         *  Create extra options for your field. This is rendered when editing a field.
         *  The value of $field['name'] can be used (like bellow) to save extra data to the $field
         *
         *  @param    $field    - an array holding all the field's data
         *
         *  @type    action
         *  @since    3.6
         *  @date    23/01/13
         */

        public function render_field_settings($field)
    {

            // default_value
            acf_render_field_setting($field, array(
                'label'        => __('Default Value', 'acf'),
                'instructions' => __('Appears when creating a new post', 'acf'),
                'type'         => 'text',
                'name'         => 'default_value',
            ));

            // placeholder
            acf_render_field_setting($field, array(
                'label'        => __('Placeholder Text', 'acf'),
                'instructions' => __('Appears within the input', 'acf'),
                'type'         => 'text',
                'name'         => 'placeholder',
            ));

            // prepend
            acf_render_field_setting($field, array(
                'label'        => __('Prepend', 'acf'),
                'instructions' => __('Appears before the input', 'acf'),
                'type'         => 'text',
                'name'         => 'prepend',
            ));

            // append
            acf_render_field_setting($field, array(
                'label'        => __('Append', 'acf'),
                'instructions' => __('Appears after the input', 'acf'),
                'type'         => 'text',
                'name'         => 'append',
            ));

            // maxlength
            acf_render_field_setting($field, array(
                'label'        => __('Character Limit', 'acf'),
                'instructions' => __('Leave blank for no limit', 'acf'),
                'type'         => 'number',
                'name'         => 'maxlength',
            ));

        }

        /**
         * validate_value
         *
         * Validates a field's value.
         *
         * @date    29/1/19
         * @since    5.7.11
         *
         * @param    (bool|string) Whether the value is vaid or not.
         * @param    mixed $value The field value.
         * @param    array $field The field array.
         * @param    string $input The HTML input name.
         * @return    (bool|string)
         */
        public function validate_value($valid, $value, $field, $input)
    {

            // Check maxlength
            if ($field['maxlength'] && (acf_strlen($value) > $field['maxlength'])) {
                return sprintf(__('Value must not exceed %d characters', 'acf'), $field['maxlength']);
            }

            // Return.
            return $valid;
        }
    }

// initialize
    acf_register_field_type('acf_field_template_builder');

endif; // class_exists check
