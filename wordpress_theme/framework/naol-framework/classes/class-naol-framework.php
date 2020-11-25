<?php
/**
 * CF7_File_Download
 *
 * @package CF7_File_Download\Classes
 * @version  1.0
 */


defined( 'ABSPATH' ) || exit;


class NaolFramework {

	public function __construct() {
		
            add_action('plugins_loaded', array($this, 'load_modules'), 1);
	


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
               'account'

            );

            /* require the files */
            foreach ($files as $file) {
                $this->load_file(NL_PLUGIN_DIR . "modules" . DIRECTORY_SEPARATOR . "{$file}" .DIRECTORY_SEPARATOR. "{$file}.php");
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