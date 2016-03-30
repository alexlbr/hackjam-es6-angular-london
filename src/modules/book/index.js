//this file handles all the dependencies with Angular

import angular from "angular";
import BookFactory from "./services/bookservice";
import BookListController from "./list/booklistcontroller";
import BookDetailsController from "./details/bookdetailscontroller";
import BookAddController from "./add/bookaddcontroller";

BookFactory.$inject = ['$http'];
BookListController.$inject = ['BookFactory'];
BookDetailsController.$inject = ['$routeParams','BookFactory'];
BookAddController.$inject = ['$scope','$routeParams','BookFactory'];

//export default the name of the module so in /src/index.js we can do 
//angular.module('bookstore', ['ngRoute', common, book]); 
//instead of angular.module('bookstore', ['ngRoute', common, "book""]);
//And so we don't hardcode the name of the module
export default angular.module('book', []).name;

angular.module('book').factory('BookFactory', BookFactory);
angular.module('book').controller('BookListController', BookListController);
angular.module('book').controller('BookDetailsController',BookDetailsController);
angular.module('book').controller('BookAddController',BookAddController);


