<?php
global $hrf_field;
global $hrf_control;
$class_template;

add_action('widgets_init','init_widgets',0);
function init_widgets() {
	$j     = get_posts( array(
		'post_type'   => 'widget',
		'post_status' => 'publish'
	) );
	$value = "<input type='text'>";

	if ( count( $j ) ) {
		foreach ( $j as $me ) {
			$ID    = $me->ID;
			$class = get_post_meta( $me->ID, 'widget_class', true );
			$name2 = get_post_meta( $me->ID, 'widget_name', true );

			$desc             = get_post_meta( $me->ID, 'widget_description', true );
			$grp              = get_post_meta( $me->ID, 'widget_group', true );
			$fields           = json_encode( get_post_meta( $me->ID, 'widget_fields', false )[0] );
			$template         = get_post_meta( $me->ID, 'widget_template', true );

			$css              = get_post_meta( $me->ID, 'widget_css', true );
			$js             =  get_post_meta( $me->ID, 'widget_js', true );

			$widget_externals_css = json_encode( get_post_meta( $me->ID, 'widget_externals_css_files', false )[0] );
			$widget_externals_js = json_encode( get_post_meta( $me->ID, 'widget_externals_js_files', false )[0] );

			$icon = get_post_meta( $me->ID, 'widget_icon', true );

			$class = str_replace( '-', '_', $class );
			$class = str_replace( ' ', '_', $class );

			if ( $class ) {
				eval("class $class extends WP_Widget {

			private \$shortcode_vars;
	function __construct() {
		parent::__construct(
__( '$name2', 'siteorigin-panels' ),
			// TRANSLATORS: This is the name of a widget
__( '$name2', 'siteorigin-panels' ),

			array(
				'description' => __( '$desc','siteorigin-panels' ),

				'panels_groups'=>array('$grp'),
				'panels_icon'=>siteorigin_widget_get_icon2('$icon'),

			),
			array(
			),
			array(
			)
		);
\$this->shortcode_vars = get_vars('$fields',\$instance,\$this->id_base,\$this);
add_shortcode('$name2',array(\$this,'widget_shortcode'));

	}
function widget_return(\$args,\$instance) {
\$template_vars = \$this->get_template_vars_return(\$instance);
//enqueue_widget_styles('$widget_externals_css',\$instance['unique_identifier']);
extract(\$template_vars);

ob_start();
?>
$template
<?php
\$x = ob_get_clean();



return \$x;




	}
	function widget(\$args,\$instance) {
\$template_vars = \$this->get_template_vars(\$instance);
enqueue_widget_styles('$widget_externals_css','$widget_externals_js',\$this->id_base);

echo \$args['before_widget'];
extract(\$template_vars);


?>

$template
<?php
echo \$args['after_widget'];
	}


	function update(\$new,\$old) {
	return \$new;

	}

	function get_id(\$id){
	return \$this->get_field_id(\$id);
	}
	function get_name(\$id){
	return \$this->get_field_name(\$id);
	}
	function get_template_vars(\$instance){

	return harf_get_values('$ID','$fields',\$this->id_base,\$instance,'$class');

	}
	function get_template_vars_return(\$instance){

	return harf_get_values_return('$ID','$fields',\$this->id_base,\$instance,'$class');

	}
	function widget_shortcode(\$atts){

		\$atts = shortcode_atts(

get_vars_shortcode('$fields')
		,\$atts,'$name2');
		extract(\$atts);
 print_r(\$atts);

?>
$template

<?php





	}


	function form(\$instance){
\$instance = wp_parse_args(\$instance, get_vars('$fields',\$instance,\$this->id_base,\$this));

//editor(\$instance,\$this);

	     build_mee(\$this,'$fields',\$instance,\$this->id_base,'$class');
	    ?>



<?php


	}



}


			//register_widget( get_post_meta( $me->ID, 'widget_class', true ) );

");

				//update_widget_css($me->ID,$class_template);
				$class_template = '';

			}




		}
	}


	if ( count( $j ) ) {
		foreach ( $j as $me ) {
			if ( class_exists( get_post_meta( $me->ID, 'widget_class', true ) ) ) {

				register_widget( get_post_meta( $me->ID, 'widget_class', true ) );
			}

		}

	}

}
function get_vars_shortcode($cl){
	$r = json_decode( $cl, true );
	$t = array();
	if($r) {
		foreach ( $r as $i ) {
			$t[ $i['id']] = '';

		}
	}

	return $t;
}
function enqueue_widget_styles($css,$js,$id){
	$r = json_decode($css,true);

	if(count($r)) {
		foreach ( $r as $t ) {

			wp_enqueue_style( 'harif-widget-css' . $id, $t['widget_external_css'] );

		}
	}
	$rc = json_decode($js,true);
	if(count($rc)) {

		foreach ( $rc as $t ) {

			wp_enqueue_script( 'harif-widget-js' . $id, $t['widget_external_js'] );

		}
	}
}
function get_widget_attributes($id,$attr,$instance,$class){
	$x = '';
	if($attr == 'widget_fields'){

		$x =  get_post_meta( $id, 'widget_fields', false )[0];


	}
	else if($attr == 'widget_template'){


		$hh = new $class;
		$x = $hh->widget_return($instance);

	}

	else {
		$x = get_post_meta( $id, $attr, true );
	}

	return $x;
}
function get_vars($cl,$inst,$id,$crnt) {



	$r = json_decode( $cl, true );

	$instance = apply_filters('harif_instance_fields',$r);
	$widget_instance = apply_filters('harif_instance_fields_'.$id,$instance);
	$t = array();
	$t['unique_identifier'] = uniqid();
	$t['style_json_id'] = '';
	if($widget_instance) {
		foreach ( $widget_instance as $i ) {
			$t[ $i['id']] = $i['std'];

		}
	}

	return $t;

}
function harf_get_values_return($p_id,$cl,$id,$instance,$class) {



	$r = json_decode( $cl, true );
	$t = array();
	//$t['view'] = get_widget_attributes($p_id,'widget_template',$instance,$class);
	if($r) {
		foreach ( $r as $i ) {
			$t[ $i['id']] = apply_filters('harif_instance_values',$instance[$i['id']],$i,$instance);

		}
	}

	return $t;

}
function harf_get_values($p_id,$cl,$id,$instance,$class) {



	$r = json_decode( $cl, true );
	$t = array();
	if(class_exists($class)) {
		$u = new $class;
	}
	//$t['view'] = $u->widget_return(array(),$instance);
	if($r) {
		foreach ( $r as $i ) {
			$t[ $i['id']] = apply_filters('harif_instance_values',$instance[$i['id']],$i,$instance);

		}
	}

	return $t;

}
function build_mee($cl,$x,$p,$baseid,$class){

$v = $cl;
	$field_before = apply_filters('harif_instance_fields_before',array(),$cl,$p);
	$fields_before_widget = apply_filters('harif_instance_fields_before_'.$baseid,$field_before,$cl,$p);
	$q = json_decode($x,true);
	$r = array_merge($fields_before_widget,$q);

	$field_after = apply_filters('harif_instance_fields_after',$r,$cl,$p);
	$fields_after_widget = apply_filters('harif_instance_fields_after_'.$baseid,$field_after,$cl,$p);



	$n = array();
	if($fields_after_widget){

		foreach($fields_after_widget as $t){
			$x = $t['id'];
			if($t['id']=='nome')
				$t['class'] = $p['style_json_id'];


			$t['value'] = $p[$x];
			if($p[$x] == '')
				$t['value'] = $t['std'];
			if($t['id'] == 'unique_identifier')
				$t['value'] = $n[0]['id'];
			$t['name']=$v->get_name($t['id']);
			$t['id']=$v->get_id($t['id']);

			if($t['type'] == 'widget') {
				$t['std'] = $t['widget'];

			}








			$t['class'] = 'widget-element-'.$t['type'];



$n[]=$t;

		}

		$temp =  get_form($baseid,$n,$p,$class);

	}

}
function editor($instance,$item){

}
function siteorigin_widget_get_icon2($icon_value, $icon_styles = false) {

	if( empty( $icon_value ) ) return false;
	list( $family, $icon ) = explode('-', $icon_value, 2);
	if( empty( $family ) || empty( $icon ) ) return false;

	static $widget_icon_families;
	static $widget_icons_enqueued = array();

	if( empty($widget_icon_families) ) $widget_icon_families = apply_filters('harif_icon_families', array() );
	if( empty($widget_icon_families[$family]) || empty($widget_icon_families[$family]['icons'][$icon]) ) return false;
	//echo print_r($widget_icon_families);
	if(empty($widget_icons_enqueued[$family]) && !empty($widget_icon_families[$family]['style_uri'])) {
		if( !wp_style_is( 'siteorigin-widget-icon-font-'.$family ) ) {
			wp_enqueue_style('siteorigin-widget-icon-font-'.$family, $widget_icon_families[$family]['style_uri'] );
		}
		return '<span class="sow-icon-' . esc_attr($family) . '" data-sow-icon="' . $widget_icon_families[$family]['icons'][$icon] . '" ' . ( !empty($icon_styles) ? 'style="'.implode('; ', $icon_styles).'"' : '' ) . '></span>';
	}
	else {
		return false;
	}

}
function create_new_post_type($post_type) {

	$small = strtolower($post_type);
	$cap2 = str_replace('-',' ',$post_type);
	$cap = ucwords($cap2);


	$labels = array(
		'name'               => _x( $cap.'s', 'post type general name', 'eyer' ),
		'singular_name'      => _x( $cap, 'post type singular name', 'eyer' ),
		'menu_name'          => _x( $cap, 'admin menu', 'eyer' ),
		'name_admin_bar'     => _x( $cap, 'add new on admin bar', 'eyer' ),
		'add_new'            => _x( 'Add New', $small, 'eyer' ),
		'add_new_item'       => __( 'Add New '.$cap, 'eyer' ),
		'new_item'           => __( 'New '.$cap, 'eyer' ),
		'edit_item'          => __( 'Edit '.$cap, 'eyer' ),
		'view_item'          => __( 'View '.$cap, 'eyer' ),
		'all_items'          => __( 'All '.$cap.'s', 'eyer' ),
		'search_items'       => __( 'Search '.$cap.'s', 'eyer' ),
		'parent_item_colon'  => __( 'Parent '.$cap.'s', 'eyer' ),
		'not_found'          => __( 'No '.$cap.' found.', 'eyer' ),
		'not_found_in_trash' => __( 'No '.$cap.' found in Trash.', 'eyer' )
	);

	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Description.', 'eyer' ),
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,

		'rewrite'            => array( 'slug' => $small ),
		'capability'    => 'edit_theme_options',
		'has_archive'        => false,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'=>null,
		'supports'           => false
	);

	register_post_type( $small, $args );
}

function create_new_taxonomy($taxonomy){
	$labels = array(
		'name'              => _x( 'Genres', 'taxonomy general name' ),
		'singular_name'     => _x( 'Genre', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Genres' ),
		'all_items'         => __( 'All Genres' ),
		'parent_item'       => __( 'Parent Genre' ),
		'parent_item_colon' => __( 'Parent Genre:' ),
		'edit_item'         => __( 'Edit Genre' ),
		'update_item'       => __( 'Update Genre' ),
		'add_new_item'      => __( 'Add New Genre' ),
		'new_item_name'     => __( 'New Genre Name' ),
		'menu_name'         => __( 'Genre' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'genre' ),
	);

	register_taxonomy( 'genre', array( 'post' ), $args );
}




add_action( 'init', 'codex_book_init' );
/**
 * Register a book post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function codex_book_init() {

	$posts = array(
		'template','widget','custom-post-type','custom-taxonomy','custom-field'
	);

	foreach($posts as $t){
		create_new_post_type($t);
	}

}

//add_action( 'init', 'create_new_taxonomy', 0 );

// create two taxonomies, genres and writers for the post type "book"
function create_book_taxonomies() {
	// Add new taxonomy, make it hierarchical (like categories)


}

/*function presenters_taxonomy_custom_fields($tag) {
	// Check for existing taxonomy meta for the term you're editing
	$t_id = $tag->term_id; // Get the ID of the term you're editing
	$term_meta = get_option( "taxonomy_term_$t_id" ); // Do the check


	$arg = array(
		'field_id'=>'term_meta[presenter]',
		'field_name'=>'term_meta[presenter]',
		'field_value'=> $term_meta['presenter'],
		'type'=>'checkbox2',
		'field_choices'=>array(
			array(
				'label'=>'Yes',
				'value'=>'yes',
			),
			array(
				'label'=>'No',
				'value'=>'no',
			)
		)

	);
	?>
	<tr class="form-field">
		<th scope="row" valign="top">
			<label for="presenter"><?php _e('WordPress User ID'); ?></label>
		</th>
		<td>
			<?php
			echo ot_display_by_type($arg);
			?>
		</td>
	</tr>
	<?php
}
function save_taxonomy_custom_fields( $term_id ) {
	if ( isset( $_POST['term_meta'] ) ) {
		$t_id = $term_id;
		$term_meta = get_option( "taxonomy_term_$t_id" );
		$cat_keys = array_keys( $_POST['term_meta'] );
		foreach ( $cat_keys as $key ){
			if ( isset( $_POST['term_meta'][$key] ) ){
				$term_meta[$key] = $_POST['term_meta'][$key];
			}
		}
		//save the option array
		update_option( "taxonomy_term_$t_id", $term_meta );
	}
}

add_action( 'genre_add_form_fields', 'presenters_taxonomy_custom_fields', 10, 2 );
add_action( 'genre_edit_form_fields', 'presenters_taxonomy_custom_fields', 10, 2 );

// Save the changes made on the "presenters" taxonomy, using our callback function
add_action( 'edited_genre', 'save_taxonomy_custom_fields', 10, 2 );
add_action( 'created_genre', 'save_taxonomy_custom_fields', 10, 2 );



add_action('admin_print_scripts-post-new.php','books_edit',0,2);

function books_edit($hook) {

	if($_GET['post_type'] != 'book'){
		return false;
	}
	add_filter( 'siteorigin_panels_widget_dialog_tabs', function ( $tab ) {

		$tabs[] = array(
			'title'  => __( 'My Tab', 'mytheme' ),
			'filter' => array(
				'groups' => array( 'mytheme' )
			)
		);

		return $tabs;
	} );
}

*/



add_filter('harif_instance_fields_after','add_before',10,3);
function add_before($v,$x,$y){
	$v[] = array(
		'id'=>'unique_identifier',
		'type'=>'text-disabled',

	);


	return $v;


}

add_filter('harif_instance_values','filter_values',10,3);
function filter_values($x,$y,$z){

	if($y['type'] == 'widget'){
		$me = get_post((int)$y['widget']);
		$class = get_post_meta( $me->ID, 'widget_class', true );
		$v = new $class;
		return $v->widget_return(array(),$x);
	}
	if($y['type'] == 'tinymce'){

		return $x['tinymce'];
	}
	else {
		return $x;
	}
}


