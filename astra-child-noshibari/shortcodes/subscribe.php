<?php

add_shortcode(
  'subscribe',
  function ($atts) {

    $sendtext = isset($atts['send']) ?
      $atts['send']
      :
      'Enviar';
    $invalidtext = isset($atts['invalid']) ? 
      $atts['invalid'] 
      :  
      'Escribe una dirección de correo válida';
    $errortext = isset($atts['error']) ? 
      $atts['error'] 
      :  
      'Error enviando mail, vuelve a intentarlo, por favor.';
    $oktext = isset($atts['error']) ? 
      $atts['error'] 
      :  
      'Gracias!. Hemos guardado tu e-mail.';

    return '<div class="shortcode subscribe">
      <form>
        <div class="field">
          <input 
            name="email"
            type="email"
            data-message-invalid="'. $invalidtext . '" 
            data-message-error="'. $errortext . '"  
            data-message-ok="'. $oktext . '" 
            required 
          />
        </div>
        <button 
          class="wp-block-button"
          disabled
        >
          ' . $sendtext . '
        </button>
      </form>
      <div class="message"></div>
    </div>';
  }
);