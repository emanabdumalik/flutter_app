<?php

if (!class_exists('acf_field_form_builder')):

    class acf_field_form_builder extends acf_field
{

        /*
         *  __construct
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
            $this->name     = 'form_builder';
            $this->label    = __("Form Builder", 'acf');
            $this->category = 'jquery';
            $this->defaults = array(

            );
        }

        /*
         *  input_admin_enqueue_scripts
         *
         *  description
         *
         *  @type    function
         *  @date    16/12/2015
         *  @since    5.3.2
         *
         *  @param    $post_id (int)
         *  @return    $post_id (int)
         */

        public function input_admin_enqueue_scripts()
    {

            // bail ealry if no enqueue

            // script
    	echo 'hello';

            //wp_enqueue_script('jquery');
           // wp_enqueue_script('jquery-ui');
            wp_enqueue_script('acf-input-form-builder', acf_get_url('assets/inc/form-builder/form-builder.min.js'), array('jquery','acf-input'), '1.11.4');
            // style

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

        public function render_field($field)
    {

            // vars
            $hidden_value  = '';
            $display_value = '';

            // format value

            // elements
            $div = array(
                //'id'        => 'builder-' . $field['id'],
                'class'     => 'acf-form-builder acf-input-wrap',
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

            // special attributes
            foreach (array('readonly', 'disabled') as $k) {
                if (!empty($field[$k])) {
                    $text_input[$k] = $k;
                }
            }

            // save_format - compatibility with ACF < 5.0.0
         

                // revert hidden input value to raw DB value
                $hidden_input['value'] = $field['value'];

                // remove formatted value (will do this via JS)
                $text_input['value'] = $field['value'];
            

            // html
            ?>
            <div id="<?php echo $div['data-id'];?>"></div>
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
         *  @type    action
         *  @since    3.6
         *  @date    23/01/13
         *
         *  @param    $field    - an array holding all the field's data
         */

        public function render_field_settings($field)
    {

            // global

        }


        /*
         *  format_value()
         *
         *  This filter is appied to the $value after it is loaded from the db and before it is returned to the template
         *
         *  @type    filter
         *  @since    3.6
         *  @date    23/01/13
         *
         *  @param    $value (mixed) the value which was loaded from the database
         *  @param    $post_id (mixed) the $post_id from which the value was loaded
         *  @param    $field (array) the field array holding all the field options
         *
         *  @return    $value (mixed) the modified value
         */

        public function format_value($value, $post_id, $field)
    {

            // save_format - compatibility with ACF < 5.0.0
            if (!empty($field['save_format'])) {

                return $value;

            }

            // return
            return $value;

        }

    }

// initialize
    acf_register_field_type('acf_field_form_builder');

endif; // class_exists check

?>