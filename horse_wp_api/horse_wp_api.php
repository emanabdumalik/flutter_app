<?php
/**
* Plugin Name: Horse WP API
* Description: API for Horse Market Place APP
* Author: Rimes Gold
* Version: 1.0
* Text Domain: horse-wp-api
* Domain Path: /languages/
*/
/**
 * Horse_WP_API
 *
 * @package Horse_WP_API\Classes
 * @version  1.0
 */


defined( 'ABSPATH' ) || exit;


class Horse_WP_API {

	public function __construct() {
		define( 'WP_CONSUMER_KEY', 'ck_6d2c7a515f1af9ff9a2fe0f58e9509884c9a0961' );
define( 'WP_CONSUMER_SECRET', 'cs_73c59e0b31a815a1dcc3e553a3e89a33ab369c1d' );
		add_action('rest_api_init', array($this,'remoteLogin' ));
		add_action('rest_api_init', array($this,'remoteSignup' ));
		add_action('rest_api_init', array($this,'remotePasswordReset' ));
				add_action('rest_api_init', array($this,'remoteForgotPassword' ));
		add_action('rest_api_init', array($this,'remoteVerify' ));
		add_action('rest_api_init', array($this,'remoteUpdateProfile' ));


	}
	/**
	* Login Endpoint Registration
	* @since  1.0
	* 
	*/
	public function remoteLogin($request = [])
		{
		    register_rest_route('remote-login', '/login', array(
		        'methods' => 'POST',
		        'callback' => array($this,'restUserLogin' ),
		         'permission_callback' => array($this,'restPermissionCallback' ),
		    ));
		     register_rest_route('remote-login', '/test_login', array(
		        'methods' => 'GET',
		        'callback' => array($this,'testrestUserLogin' ),
		         'permission_callback' => array($this,'restPermissionCallback' ),
		    ));
		}
		public function remoteSignup($request = [])
		{
		    register_rest_route('remote-signup', '/signup', array(
		        'methods' => 'POST',
		        'callback' => array($this,'restUserSignup' ),
		         'permission_callback' => array($this,'restPermissionCallback' ),
		    ));
		}
		public function restPermissionCallback($request){
            // This always returns false
            //return true;
		         	return true;
        }
	/**
		* Login Endpoint 
		* @since  1.0
		* @return array
	*/
			public function testrestUserLogin($request = [])
	{
	    $response = [
	        'success' => false,
	        'message' => 'Login failed'
	    ];
	    $response['statusCode']=403;
	    $status_code = 403;
	    $parameters = $request->get_json_params();
	    $username = 'admin';
	    $password = 'Testing1';

	    $user = null;
	    if (!empty($username) && !empty($password)) {
	        $user = wp_authenticate($username, $password);
	    }
	    $user_details=array();
	    if ($user) {
	    	$user_details['email']=$user->user_email;
	    	print_r( $user_details);
	    	print_r($user->data);
	    	$t=get_user_meta($user->ID,'profile_pic',true);

	    	echo $t;
	    	print_r(wp_get_attachment_url($t));
	        $response['success'] = true;
	        $response['message'] = 'Login successful';
	       	$user->loggedIn = 'yes';
	        $response['user']=$this->get_user($user);
	        print_r($this->get_user($user));
	        //GET IMPORTANT USER DETAILS ONLY
	        $response['statusCode']=200;
    	    //$nonce = wp_create_nonce( 'wp_rest' );
    	   // $response['nonce']=$nonce;

	    }


return $response;	
}
	public function restUserLogin($request = [])
	{
	    $response = [
	        'success' => false,
	        'message' => 'Login failed'
	    ];
	    $response['statusCode']=403;
	    $status_code = 403;
	    $parameters = $request->get_json_params();
	    $username = sanitize_text_field($parameters['username']);
	    $password = sanitize_text_field($parameters['password']);

	    $user = null;
	    if (!empty($username) && !empty($password)) {
	        $user = wp_authenticate($username, $password);
	    }

	    if ($user) {
	        $response['success'] = true;
	        $response['message'] = 'Login successful';
	       	$user->loggedIn = 'yes';
	        $response['user']=$this->get_user($user);
	        //GET IMPORTANT USER DETAILS ONLY
	        $response['statusCode']=200;
    	    //$nonce = wp_create_nonce( 'wp_rest' );
    	   // $response['nonce']=$nonce;

	    }

return $response;	
}
	public function restUserSignup($request = [])
	{
	    $response = [
	        'success' => false,
	        'message' => 'Signup failed'
	    ];
	    $response['statusCode']=403;
	    $status_code = 403;
	    $parameters = $request->get_json_params();
	    $email = sanitize_text_field($parameters['email']);
	    $password = sanitize_text_field($parameters['password']);
	    $user_name = sanitize_text_field($parameters['user_name']);

	   
	    $user_id = username_exists($user_name);
	    if($user_id){
	    	 $response = [
	        'success' => false,
	        'message' => 'Username already registered!!',
	        'statusCode' => 403
	    ];
	    return $response;
	    }
	    $email_id =email_exists($email);
	      if($email_id){
	    	 $response = [
	        'success' => false,
	        'message' => 'Email already registered!!',
	        'statusCode' => 403
	    ];
	    return $response;
	    }
  if (!$user_id && email_exists($email) == false) {
    $user_id = wp_create_user($user_name, $password, $email);
    if (!is_wp_error($user_id)) {
      // Ger User Meta Data (Sensitive, Password included. DO NOT pass to front end.)
      $user = get_user_by('id', $user_id);
      // $user->set_role($role);
      $user->set_role('author');
      // WooCommerce specific code
      $user->loggedIn = 'yes';
      $response['user']=$user;
      update_user_meta($user->ID,'confirmation_code','12345');
      
      // Ger User Data (Non-Sensitive, Pass to front end.)
      $response['statusCode'] = 200;
      $response['message'] = __("User '" . $email . "' Registration was Successful", "wp-rest-user");
    } 
  } 
  else {
  	 $response['statusCode'] = 205;
      $response['message'] = 'Email Already Exists';
  }

	  

	    return $response;
	}
	/**
		* Validate authorization header
		* @since  1.0
		* @return bool
	*/
	public function validate_authorization_header() {
    $headers = apache_request_headers();
    if ( isset( $headers['authorization'] ) ) {
        $wc_header = 'Basic ' . base64_encode( WP_CONSUMER_KEY . ':' . WP_CONSUMER_SECRET );
        if ( $headers['authorization'] == $wc_header ) {
            return true;
        }
    }
    return false;
}
public function get_user($user){
	$profile_pic_meta=get_user_meta($user->ID,'profile_pic',true);
	
	return array(
		'profile_pic'=> $profile_pic_meta ? wp_get_attachment_url($profile_pic_meta):'',
		'user_name'=>$user->user_login,
		'email'=>$user->user_email,

	);
}
public function upload_images(){
	$img = ['jpg', 'jpeg', 'png', 'bmp'];
$doc = ['zip', 'rar', 'pdf', 'doc', 'docx', 'xls','xlsx','ppt','pptx'];
$whitelistExt = array_merge($img, $doc);
foreach ($_POST['attachment'] as $key => $value)
{
    $fn = $value->fileName;
    $ext = pathinfo($fn, PATHINFO_EXTENSION);
    $f = base64_decode($value->encoded);
    file_put_contents("uploads/".$fn, $f);
}
}

}

// Instantiate Class
new Horse_WP_API();

add_action( 'rest_api_init', function () {
    register_rest_route( 'namespace/v1', '/product/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'my_awesome_func',
    ) );
} );
//If you need to add options for ex. /namespace/v1/product/81838240219?name=Rob

function my_awesome_func( $data ) {
    $product_ID = $data['id'];
    $name = $data->get_param( 'name' );
}

?>