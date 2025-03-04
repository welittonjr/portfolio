$(function () {
  $(".menu-toggle").on("click", function (e) {
    e.preventDefault();

    const $parentItem = $(this).parent();

    $(".menu-item--active").each(function () {
      if (!$(this).is($parentItem)) {
        $(this).removeClass("menu-item--active");
        $(this).find(".submenu").css("max-height", 0);
      }
    });

    const $submenu = $parentItem.find(".submenu");

    if ($parentItem.hasClass("menu-item--active")) {
      $submenu.css("max-height", 0);
      $parentItem.removeClass("menu-item--active");
    } else {
      $submenu.css("max-height", $submenu[0].scrollHeight + "px");
      $parentItem.addClass("menu-item--active");
    }
  });

  const $navToggle = $("#nav-toggle");
  const $sidebar = $("#sidebar");
  const $wrapper = $(".wrapper");

  function handleResize() {
    if ($(window).width() <= 1400) {
      $sidebar.hide();
      $wrapper.css({ "margin-left": "0", width: "100%" });
    } else {
      $sidebar.show();
      $wrapper.css({ "margin-left": "130px", width: "calc(100% - 130px)" });
    }
  }

  handleResize();

  $(window).on("resize", handleResize);

  $navToggle.on("click", function () {
    if ($(window).width() <= 1400) {
      $sidebar.toggleClass("sidebar__toggle--show");
      $sidebar.hasClass("sidebar__toggle--show") ? $sidebar.css("display", "flex") : $sidebar.hide();
    } else {
      $sidebar.toggleClass("sidebar__toggle--show");
      if ($sidebar.hasClass("sidebar__toggle--show")) {
        $wrapper.css({ "margin-left": "0", width: "100%" });
      } else {
        $wrapper.css({ "margin-left": "130px", width: "calc(100% - 130px)" });
      }
    }
  });
});
