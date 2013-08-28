(function ($) {
  $(document).ready(function(){
    $('a.service-links-google-plus-one').each(function(){
      var counter = Drupal.settings.ws_gpo.counter ? '' : 'count="false" ';
      var type = (Drupal.settings.ws_gpo.type == '') ? '' : 'size="'+ Drupal.settings.ws_gpo.type + '" ';
      var g_text = '<g:plusone ' + counter + type + 'href="' + $(this).attr('href') + '" >' + '</g:plusone>';
      $(this).replaceWith(g_text);
    });
  });
})(jQuery);
;
(function ($) {
  $(document).ready(function(){
    $('a.service-links-linkedin-share-button').each(function(){
      var script_obj = document.createElement('script');
      script_obj.type = 'IN/Share';
      script_obj.setAttribute("data-url", $(this).attr('href'));
      if (Drupal.settings.ws_lsb.countmode != '') {
        script_obj.setAttribute("data-counter", Drupal.settings.ws_lsb.countmode);
      }

      $(this).replaceWith(script_obj);
    });
  });
})(jQuery);
;
