$(function () {

    $('.menu-button').click(function () {
        let $this = $(this);
        let $menu = $('.header__menu');
        if (!$this.hasClass('menu-button_active')) {
            $this.addClass('menu-button_active');
            $menu.css('opacity', 0);
            $menu.show();
            $menu.fadeTo(200, 1);
        } else {
            $this.removeClass('menu-button_active');
            $menu.fadeTo(100, 0);
            setTimeout(function () {$menu.hide()}, 100);
        }
    })

});