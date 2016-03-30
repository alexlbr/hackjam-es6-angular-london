//In this file we wire all the dependencies wit Angular
import angular from "angular";
import bookstoreDirective from "./bookstore/bookstoreDirective";
import bsNavbar from "./nav/navbarComponent"; 

angular.module('common', []);
angular.module('common').directive('bsNavbar', bsNavbar);
angular.module('common').directive('bookstore', bookstoreDirective);