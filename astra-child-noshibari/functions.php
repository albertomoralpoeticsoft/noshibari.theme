<?php
/**
 * Astra Child Noshibari Art Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child Noshibari Art
 * @since 1.0.0
 */

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
      'astra-child-noshibari-theme-js', 
      get_stylesheet_directory_uri() . '/main.js',
      array('jquery'), 
      filemtime(get_stylesheet_directory() . '/main.js'),
      true
    );

		wp_enqueue_style( 
			'astra-child-noshibari-theme-css',
			get_stylesheet_directory_uri() . '/main.css', 
			array(
        'astra-theme-css',
        'dashicons'
      ), 
			filemtime(get_stylesheet_directory() . '/main.css'),
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
      get_stylesheet_directory_uri() . '/admin.css',
      array(),
      filemtime(get_stylesheet_directory() . '/admin.css')
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
 


