import angular from "angular";
import BookFactory from "./services/bookservice";
import BookListController from "./list/booklistcontroller";
import BookDetailsController from "./details/bookdetailscontroller";
import BookAddController from "./add/bookaddcontroller";

BookFactory.$inject = ['$http'];
BookListController.$inject = ['BookFactory'];
BookDetailsController.$inject = ['$routeParams','BookFactory'];
BookAddController.$inject = ['$scope','$routeParams','BookFactory'];

angular.module('book', []);
angular.module('book').factory('BookFactory', BookFactory);
angular.module('book').controller('BookListController', BookListController);
angular.module('book').controller('BookDetailsController',BookDetailsController);
angular.module('book').controller('BookAddController',BookAddController);


