;(function(angular, _) {
    'use strict';

    function _generateUrl (path, search) {
        return path + '?' + _.map(search, function (v, k) { return k+'='+v;} ).join('&');
    }

    function _generatePageObj (path, search, num) {
        return {num: num , url: _generateUrl(path, _.extend({}, search, {p:num}))};
    }

    function _generatePageData (path, search, total, size) {

        var tp = Math.ceil(total / size),
            cp = !!search.p ? parseInt(search.p) : 1,
            np = (cp + 1) > tp ? tp : (cp + 1),
            pp = (cp - 1) == 0 ? cp : (cp - 1),
            pageIndexs = _.range((cp-3) >= 1 ? (cp-3) : 1, (cp+5) > tp ? tp+1 : cp+5);
        var poGen = _.bind(_generatePageObj, {}, path, search);

        var vo = {
            fp: poGen(1),
            np: poGen(np),
            pp: poGen(pp),
            tp: poGen(tp),
            pages: _.map(pageIndexs, poGen)
        };

        vo.showFirstMore = !_.contains(pageIndexs, 1);
        vo.showLastMore = !_.contains(pageIndexs, tp);
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
        .directive('shPagination', ['$location', 'constantService', function ($location, constantService) {
            return {
                templateUrl: '/views/directives/sh-pagination.html',
                restrict: 'A',
                scope: {
                    total: '&totalCount',
                    size: '&pageSize'
                },

                link: function (scope, linkElement, linkAttrs) {
                    var search = $location.search(),
                        path = $location.path(),
                        size = scope.size() || constantService.pageSize,
                        total = scope.total() || 0;

                    scope.vo = _generatePageData(path, search, total, size);
                }
            };
        }]);

})(angular, _);
