<?php

function noshibari_fbapp_test( WP_REST_Request $req ) {
      
  $res = new WP_REST_Response();

  try {   

    $token = 'IGAAKPMaH65AVBZAE5LZAk1vMTM5czhGLXRKSDl3YWtTR2tBbTBNSi1BWW9xaWdobVROSnJrN3RtM2Y2ZA1N6MnQ1QmJzUkctUm5IMFlidkZAkcW1jUElVVjFkU3JJbkZAWZA1d0ZA2N3UkdLakZAKREpfZAS0wM3QwRkFoSmFaTldiT1FYcwZDZD';
    $url = "https://graph.facebook.com/v19.0/me/accounts?access_token={$token}";
    $testcall = wp_remote_get($url); 

    $res->set_data(json_decode($testcall['body']));
  
  } catch (Exception $e) {
    
    $res->set_status($e->getCode());
    $res->set_data($e->getMessage());
  }

  return $res;
}

add_action(
  'rest_api_init',
  function () {

    register_rest_route(
      'noshibariart',
      'fbapp/test',
      [
        'methods'  => 'GET',
        'callback' => 'noshibari_fbapp_test',
        'permission_callback' => '__return_true'
      ]
    );
  }
);