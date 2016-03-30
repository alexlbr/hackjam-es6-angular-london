import angular from "angular";
import common from "./modules/common/";
import book from "./modules/book/";

angular.module('bookstore', ['common','ngRoute','book', 'ngMockE2E']);

document.addEventListener('DOMContentLoaded',function(){
    angular.bootstrap(document.body, ['bookstore']);
});
