<?php

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
        'astra-theme-css'
      ), 
			filemtime(get_stylesheet_directory() . '/js-css/flickity.css'),
			'all' 
		);

		wp_enqueue_style( 
			'astra-child-noshibari-theme-css',
			get_stylesheet_directory_uri() . '/js-css/main.css', 
			array(
        'dashicons',
        'astra-child-noshibari-theme-flickity-css'
      ), 
			filemtime(get_stylesheet_directory() . '/js-css/main.css'),
			'all' 
		);
	}, 
	999 
);