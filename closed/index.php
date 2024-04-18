<?php 

$siteurl = site_url();
$sitename = '';
$instagram = '';
if(str_contains($siteurl, '.art')) { 
  
  $sitename = 'NOSHIBARI ART';
  $instagram = 'https://instagram.com/noshibariart';
}
if(str_contains($siteurl, '.com')) { 
  
  $sitename = 'NOSHIBARI';
  $instagram = 'https://instagram.com/nonoshibari';
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php echo $sitename ?></title><!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ET6MBWP16N"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ET6MBWP16N');
    </script>
    <style type="text/css">

      html,
      body {

        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
      }

      body {

        text-align: center;
        background-color: #FFFFFF;
      }

      body .content{

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        text-align: center;
      }

      body .content:before,
      body .content a {

        display: inline-block;
        vertical-align: middle;
      }

      body .content:before {

        content: " ";
        height: 100%;
        width: 0;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }

      body .content a {

        width: 100px;
      }

      body .content a img {

        width: 100%;
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="content">
    <?php 
      $custom_logo_id = get_theme_mod('custom_logo');
      $logo = wp_get_attachment_image_src($custom_logo_id, array(240, 0));
      if (has_custom_logo() && $logo) {

        echo '<a href="' . $instagram . '"><img src="' . $logo[0] . '" /></a>';
        
      }
    ?>
    </div>
  </body>
</html>

