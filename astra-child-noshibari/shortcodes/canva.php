<?php

add_shortcode(
  'canva',
  function ($atts) {

    $canvasite = $atts['site'];
    // $proxyurl = '/wp-json/noshibari/canva?site=' . $canvasite;
    return '<div class="shortcode canvasite"><iframe src="' . $canvasite . '"></iframe></div>';
  }
);