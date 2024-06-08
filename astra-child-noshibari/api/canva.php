<?php

function noshibari_canva( WP_REST_Request $req ) {
  
  $site = $req->get_param('site');
  $remoteurl = $site != null ? $site : 'https://resona.my.canva.site/type';
  
  $remotecontent = file_get_contents($remoteurl);

  $contentdom = new DOMDocument('1.0');
  $contentdom->substituteEntities = false;
  libxml_use_internal_errors(true);
  $contentdom->loadHTML($remotecontent);
  libxml_use_internal_errors(false);
  $contentdomx = new DOMXPath($contentdom);

  $contentbases = $contentdomx->query('//base');
  foreach($contentbases as $contentbase) {
    
    $contentbase->setAttribute('href', $remoteurl . '/');
  }  

  $content = $contentdom->saveHTML();

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: text/html');
  echo $content;
  exit();
}

add_action(
  'rest_api_init',
  function () {

    register_rest_route(
      'noshibari',
      'canva',
      [
        'methods'  => [
          'GET',
          'POST'
        ],
        'callback' => 'noshibari_canva',
        'permission_callback' => '__return_true'
      ]
    );
  }
);