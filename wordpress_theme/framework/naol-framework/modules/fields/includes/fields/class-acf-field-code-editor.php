<?php

if (!class_exists('acf_field_code_editor')):

    class acf_field_code_editor extends acf_field
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
            $this->name     = 'code_editor';
            $this->label    = __("Code Editor", 'acf');
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
       wp_enqueue_style('wp-codemirror');
wp_enqueue_code_editor(array('codemirror'=>array('mode'=>'php')));
 $settings = wp_get_code_editor_settings( array('codemirror'=>array('mode'=>'php')) );
 wp_enqueue_script('acf-input-form-builder', acf_get_url('assets/inc/code-editor/mode/php/php.js'), array('jquery','acf-input'), '1.11.4');
 print_r($settings['codemirror']['mode']);
$var = array(
    'cm_settings'   => $settings
);
wp_localize_script('wp-codemirror', 'my_var', $var);

        }


        public function render_field($field)
    {
            $hidden_value  = '';
            $display_value = '';

            // format value

            // elements
            $div = array(
               
                'class'     => 'acf-code-editor acf-input-wrap',
                'data-name' => 'semir',
                'data-id'   => 'builder-' . $field['id'],

            );

            $hidden_input = array(
                'id'    => $field['id'],
                'name'  => $field['name'],
                'value' => $hidden_value,
            );
            $text_input = array(
                'class' => 'input',
                'value' => $display_value,
            );

  $hidden_input['value'] = $field['value'];

                // remove formatted value (will do this via JS)
                $text_input['value'] = $field['value'];
           ?>
         <textarea id="acf-code-editor"></textarea>
         <div <?php acf_esc_attr_e($div);?>>
                 
                <?php acf_hidden_input($hidden_input);?>
                <?php acf_text_input($text_input);?>
            </div>
           <?php
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
    acf_register_field_type('acf_field_code_editor');

endif; // class_exists check
