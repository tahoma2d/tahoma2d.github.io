  $(function() {
      $("[href]").each(function() {
          if (this.href == window.location.href) {
              $(this).addClass("current_page");
          }
      });
  });