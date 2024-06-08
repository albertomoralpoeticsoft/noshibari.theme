
export default $ => {

  const $subscribe = $('.shortcode.subscribe')
  if($subscribe.length) {    

    $subscribe
    .each(function() {

      const $this = $(this)
      const $form = $this.find('form')
      const $input = $form.find('input')
      const $button = $form.find('.wp-block-button')
      const $message = $this.find('.message')
      const messageinvalid = $input.data('message-invalid')
      const messageerror = $input.data('message-error')
      const messageok = $input.data('message-ok')
      
      $form.validate({
        messages: {
          email: {
            email: messageinvalid
          }
        }
      });


      $input
      .on(
        'keyup',
        function() {

          const $this = $(this)          
          if($this.valid()) {

            $button.prop('disabled', false);

          } else {

            $button.prop('disabled', true);
          }
        }
      )

      $button
      .on(
        'click',
        function() {

          $form.hide()

          $message.removeClass('warning error success')
          $message.html('Enviando...')
          $message.addClass('warning')
          $message.show()

          fetch(
            'https://noshibari.com/wp-json/noshibari/subscribe',
            {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: $input.val()
              })
            }
          )
          .then(response => {

            $message.removeClass('warning error success')

            if(response.status != 200) {

              $message.html(messageerror)
              $message.addClass('error')

            } else {

              $message.html(messageok)
              $message.addClass('success')
            }
              
            $message.show()

            setTimeout(() => {

              $message.hide()
              $form.show()
              
            }, 4000)
          })

          return false
        }
      )
    })
  }
}