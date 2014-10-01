/**
 * StubHub hack
 */

;(function($, W) {

    W.StubHub = {
        'APP_TOKEN' : 'Bearer wzHoy6uSWWV9qHnK9KF42NP09LQa'
    };

    function _loadAngularI18N (locale) {
        if (!!locale && locale.toLowerCase() !== 'en-us') {
            $.getScript("/bower_components/angular-i18n/angular-locale_" + locale + ".js");
        }
    }


    if (!!W.localStorage) {
        var locale = W.localStorage.getItem('stubhub.currentLocale');
        _loadAngularI18N(locale);
    }

})(jQuery, window);
