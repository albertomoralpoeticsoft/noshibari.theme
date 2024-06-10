<?php
/**
 * Astra Child Noshibari Art Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child Noshibari Art
 * @since 1.0.0
 */

 require_once(dirname(__FILE__) . '/cleanhead.php');   
 require_once(dirname(__FILE__) . '/api/main.php');   
 require_once(dirname(__FILE__) . '/shortcodes/main.php');
 require_once(dirname(__FILE__) . '/mail/main.php'); 

add_filter('xmlrpc_enabled', '__return_false');
add_filter('login_display_language_dropdown', '__return_false');

/**
* In construction
*/

global $post;

add_action(
  'template_redirect', 
  function () use ($post){

    if(
      !is_user_logged_in()
      &&
      !has_category('allow-in-construction', $post->ID)
    ) {

      wp_redirect('/volvemos-pronto'); 
      exit;
    }
  }
); 

/**
* Init
*/

add_action( 
  'init', 
  function () {

    /**
      * Categories for pages
      */  

    register_taxonomy_for_object_type( 
      'category', 
      'page' 
    );
  }
); 

add_filter(
  'body_class',
  function($classnames) {    

    if(is_page('volvemos-pronto')) {
      
      $classnames[] = 'volvemos-pronto';
    }

    return $classnames;
});

/**
 * Analytics
 */ 

add_action(  
  'wp_head', 
  function () { 
    ?>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ET6MBWP16N"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ET6MBWP16N');
      </script>
    <?php
  }
);  

/**
 * Enqueue styles
 */

add_action( 
	'wp_enqueue_scripts', 
	function () {

    wp_enqueue_style('dashicons');

    wp_enqueue_script(
      'astra-child-noshibari-theme-flickity-js', 
      get_stylesheet_directory_uri() . '/js-css/flickity.pkgd.min.js',
      array(), 
      filemtime(get_stylesheet_directory() . '/js-css/flickity.pkgd.min.js'),
      true
    );

    wp_enqueue_script(
      'astra-child-noshibari-theme-jquery-validate-js', 
      get_stylesheet_directory_uri() . '/js-css/jquery.validate.min.js',
      array(
        'jquery',
        'jquery-form'
      ), 
      filemtime(get_stylesheet_directory() . '/js-css/jquery.validate.min.js'),
      true
    );

    wp_enqueue_script(
      'astra-child-noshibari-theme-js', 
      get_stylesheet_directory_uri() . '/js-css/main.js',
      array(
        'astra-child-noshibari-theme-flickity-js',
        'astra-child-noshibari-theme-jquery-validate-js'
      ), 
      filemtime(get_stylesheet_directory() . '/js-css/main.js'),
      true
    );

		wp_enqueue_style( 
			'astra-child-noshibari-theme-flickity-css',
			get_stylesheet_directory_uri() . '/js-css/flickity.css', 
			array(
        'astra-theme-css',
        'dashicons'
      ), 
			filemtime(get_stylesheet_directory() . '/js-css/flickity.css'),
			'all' 
		);

		wp_enqueue_style( 
			'astra-child-noshibari-theme-css',
			get_stylesheet_directory_uri() . '/js-css/main.css', 
			array(
        'astra-theme-css',
        'dashicons',
        'astra-child-noshibari-theme-flickity-css'
      ), 
			filemtime(get_stylesheet_directory() . '/js-css/main.css'),
			'all' 
		);
	}, 
	999 
);

/* Admin styles */

add_action(
  'admin_enqueue_scripts',
  function () {
    
    wp_enqueue_style(
      'astra-child-noshibari-theme-admin-styles', 
      get_stylesheet_directory_uri() . '/js-css/admin.css',
      array(),
      filemtime(get_stylesheet_directory() . '/js-css/admin.css')
    );
  }
);

/* Theme setup */

add_post_type_support( 'page', 'excerpt' );

/* Clean head */

require_once(dirname(__FILE__) . '/cleanhead.php');

/* Show reusable blocks */

add_action( 
  'admin_menu', 
  function () {
    add_menu_page( 
      'Reusable Blocks', 
      'Reusable Blocks', 
      'edit_posts', 
      'edit.php?post_type=wp_block', 
      '', 
      'dashicons-editor-table', 
      22 
    );
  }
);

/* Disable Product comments */

add_filter( 
  'woocommerce_product_tabs', 
  function ($tabs) {

    unset($tabs['reviews']);
    return $tabs;
  }, 
  98
);

/* Enable gutenberg for woocommerce */

add_filter( 
  'use_block_editor_for_post_type', 
  function ($can_edit, $post_type) {

    if ( $post_type == 'product' ) {

      $can_edit = true;
    }
    
    return $can_edit;
  }, 
  10, 
  2 
);
 


