;(function(angular, SH) {
    'use strict';

    /**
     * Constant values
     * @ngdoc constant
     * @name ngBrxApp.constantService
     * @description
     *
     */
    angular.module('ngBrxApp')
        .constant('C_APP_TOKEN', SH.APP_TOKEN)
        .constant('C_PAGE_SIZE', 20)
        .constant('C_LOCALE_KEY', 'currentLocale')
    ;
})(angular, StubHub || {});
