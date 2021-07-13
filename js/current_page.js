  $(function() {
      $("[href]").each(function() {
          if (this.href == window.location.href) {
              $(this).addClass("current_page");
          }
      });
  });

  $(window).on('hashchange', function() {

      $("[href]").each(function() {
          if (this.href == window.location.href) {
              $(this).addClass("current_page");
          } else {
              $(this).removeClass("current_page");
          }
      });
  });