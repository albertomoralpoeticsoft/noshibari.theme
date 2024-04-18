<?php

/**
 * 
 * @package WordPress
 * @subpackage AlbertoMoral
 * @since AlbertoMoral 1.0
 */

add_action(
  'after_setup_theme', 
  function () {
  
    add_theme_support('title-tag');
    add_theme_support(
      'custom-logo',
      array(
        'height'      => 240,
        'width'       => 240,
        'flex-height' => true,
      )
    );
  }
);

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
