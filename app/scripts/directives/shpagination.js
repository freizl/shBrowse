;(function(angular, _){
    'use strict';

    function _generateUrl (path, search) {
        return path + '?' + _.map(search, function (v, k) { return k+'='+v;} ).join('&');
    }

    function _generatePageData (path, search, total, size) {

        var tp = Math.ceil(total / size),
            cp = !!search.p ? parseInt(search.p) : 1,
            np = (cp + 1) > tp ? tp : (cp + 1),
            pp = (cp - 1) == 0 ? cp : (cp - 1),
            pageIndexs = _.range((cp-3) >= 1 ? (cp-3) : 1, (cp+5) > tp ? tp+1 : cp+5);

        var vo = {
            np: {num: np , url: _generateUrl(path, _.extend({}, search, {p:np}))},
            pp: {num: pp , url: _generateUrl(path, _.extend({}, search, {p:pp}))},
            tp: {num: tp , url: _generateUrl(path, _.extend({}, search, {p:tp}))},
            pages: _.map(pageIndexs, function (i) { return { num: i, url: _generateUrl(path, _.extend({}, search, {p:i}))}; })
        };

        vo.isCurrentPage = function (p) { return p.num === cp ? 'current':'';};

        return vo;
    }

    /**
     * @ngdoc directive
     * @name ngBrxApp.directive:shPagination
     * @description
     * # shPagination
     */
    angular.module('ngBrxApp')
        .directive('shPagination', ['$location', function ($location) {
            return {
                templateUrl: '/views/directives/sh-pagination.html',
                restrict: 'A',
                scope: {
                    total: '&totalCount',
                    size: '&pageSize'
                },

                link: function (scope, linkElement, linkAttrs) {
                    var search = $location.search(),
                        //url = $location.absUrl().replace(/\&p=[0-9]+/, ''),
                        path = $location.path(),
                        size = scope.size() || 20,
                        total = scope.total() || 0;

                    scope.vo = _generatePageData(path, search, total, size);

                    //console.log("total:", scope.total(), "size: ", size);

                    //element.text('this is the shPagination directive');


                }
            };
        }]);

})(angular, _);
