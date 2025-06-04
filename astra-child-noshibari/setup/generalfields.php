<?php

add_filter(
  'admin_init', 
  function () {

    $fields = [

      // Auto reload

      'reloadonedit' => [
        'title' => 'Reload page on changes',
        'type' => 'checkbox'
      ],

      // ANALYTICS

      'tagmanager_id' => [
        'title' => 'Tag Manager Id',
        'value' => ''
      ],

      'analytics_id' => [
        'title' => 'Analytics ID',
        'value' => ''
      ],  

      // Jitsi KEYS

      'jitsi_apikey' => [
        'title' => 'Jitsi API Key',
        'value' => ''
      ],     

      'jitsi_appid' => [
        'title' => 'Jitsi APP ID',
        'value' => ''
      ] 
    ];

    foreach($fields as $key => $field) {

      register_setting(
        'general', 
        'noshibari_settings_' . $key
      );

      add_settings_field(
        'noshibari_settings_' . $key, 
        '<label for="noshibari_settings_' . $key . '">' . 
          __($field['title']) .
        '</label>',
        function () use ($key, $field){

          $value = get_option('noshibari_settings_' . $key, $field['value']);

          if(isset($field['type'])) {

            if('checkbox' == $field['type']) {

              echo '<input type="checkbox" 
                          id="noshibari_settings_' . $key . '" 
                          name="noshibari_settings_' . $key . '" 
                          class="regular-text"
                          ' . ($value ? 'checked="chedked"' : '') . ' />';

            }   
            
          } else {

            echo '<input type="text" 
                         id="noshibari_settings_' . $key . '" 
                         name="noshibari_settings_' . $key . '" 
                         class="regular-text"
                         value="' . $value . '" />';
          }
        },
        'general'
      );  
    }  
  }
);

?>