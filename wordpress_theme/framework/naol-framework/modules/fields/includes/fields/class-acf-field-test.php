<?php

if (!class_exists('acf_field_test')):

    class acf_field_test extends acf_field
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
            $this->name     = 'test';
            $this->label    = __("Test", 'acf');
            $this->defaults = array(
                'default_value' => '',
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
$script = acf_get_url("assets/inc/owl/web.assets_common.js");
$script2 = acf_get_url("assets/inc/owl/app.js");
$script3 = acf_get_url("assets/inc/owl/utils.js");


  wp_enqueue_script( 'acf-input-owl', $script, array('acf-input'), '2.0.0' );
    wp_enqueue_script( 'acf-input-utils', $script3, array('acf-input-owl'), '2.0.0' );
 wp_enqueue_script( 'acf-input-angular', acf_get_url("assets/inc/angular-form-builder/angular/angular.js"), array(), '2.0.0' );
    wp_enqueue_script( 'acf-input-app', $script2, array('acf-input-owl','acf-input-utils'), '2.0.0' );

        
        $style = acf_get_url("assets/inc/owl/main.css");
        wp_enqueue_script( 'acf-input-repeater', $script, array('acf-input'), '2.0.0' );
        wp_enqueue_style( 'acf-input-repeater', $style, '', '2.0.0' );
$var = array(
'plugin_url'=>NL_PLUGIN_URL.'modules/fields/assets/inc/owl'
);
        wp_localize_script('acf-input-app', 'my_var', $var);


        }
        public function render_field($field)
    {
            $html = '';
            // Prepend text.
            if ($field['prepend'] !== '') {
                $field['class'] .= ' acf-is-prepended';
                $html .= '<div class="acf-input-prepend">' . acf_esc_html($field['prepend']) . '</div>';
            }

            // Append text.
            if ($field['append'] !== '') {
                $field['class'] .= ' acf-is-appended';
                $html .= '<div class="acf-input-append">' . acf_esc_html($field['append']) . '</div>';
            }

            // Input.
            $input_attrs = array();
            foreach (array('type', 'id', 'class', 'name', 'value', 'placeholder', 'maxlength', 'pattern', 'readonly', 'disabled', 'required') as $k) {
                if (isset($field[$k])) {
                    $input_attrs[$k] = $field[$k];
                }
            }
            $html .= '<div ng-app="naolMobi" ng-controller="AppController">{{me}}</div><div id="test-owl" class="acf-input-wrap">' . acf_get_text_input(acf_filter_attrs($input_attrs)) . '</div>';

            // Display.
            echo $html;
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
    acf_register_field_type('acf_field_test');

endif; // class_exists check
