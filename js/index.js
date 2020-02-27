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
    });

    $('#loginButton').click(function () {
        $('#loginIcon').toggle();
    });

    $('.container__login').click(function () {
        $(this).hide();
    });

    $('.container__login form.login').click(function (event) {
        event.stopPropagation();
    });

    $('form.login .login__cross').click(function () {
        $('.container__login').hide();
    });

    $('.account-sidebar .account-sidebar__item').click(function (event) {
        event.preventDefault();
        let $this = $(this);
        let tabName = $this.data('tab');
        $('.account-sidebar .account-sidebar__item').removeClass('account-sidebar__item_active');
        $this.addClass('account-sidebar__item_active');
        let $tab = $('.account .account-body main[data-tab="' + tabName + '"]');
        $('.account .account-body main').hide();
        $tab.show();
    });

    $('.account-main .account-main__list .account-main__list-link').click(function (event) {
        event.preventDefault();
        let $this = $(this);
        let tabName = $this.data('tab');
        $('.account-sidebar .account-sidebar__item').removeClass('account-sidebar__item_active');
        let $tab = $('.account .account-body main[data-tab="' + tabName + '"]');
        $('.account .account-body main').hide();
        $tab.show();
    });

});