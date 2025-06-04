<?php

add_action( 
	'wp_enqueue_scripts', 
	function () {

    $update = get_option('noshibari_settings_reloadonedit', false);

    if (
      is_page()
      &&
      $update
    ) {

      global $post;

      wp_enqueue_script(
        'astra-child-noshibari-theme-check-update-js',
        get_stylesheet_directory_uri() . '/updater/check-update.js',
        array('jquery'),
        filemtime(get_stylesheet_directory() . '/updater/check-update.js'),
        true
      );

      wp_localize_script(
        'astra-child-noshibari-theme-check-update-js', 
        'arpPageData',
        array(
          'post_id' => $post->ID,
          'last_modified' => get_post_modified_time('U', true, $post->ID),
          'ajax_url' => admin_url('admin-ajax.php'),
        )
      );
    }
	}, 
	999 
);

function astra_child_noshibari_theme_ajax_check_update() {

  $post_id = intval($_POST['post_id'] ?? 0);
  $client_last_modified = intval($_POST['last_modified'] ?? 0);
  $server_last_modified = get_post_modified_time('U', true, $post_id);

  wp_send_json(array(
    'updated' => ($server_last_modified > $client_last_modified)
  ));
}
add_action(
  'wp_ajax_check_page_update', 
  'astra_child_noshibari_theme_ajax_check_update'
);
add_action(
  'wp_ajax_nopriv_check_page_update', 
  'astra_child_noshibari_theme_ajax_check_update'
);