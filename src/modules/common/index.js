//In this file we wire all the dependencies wit Angular
import angular from "angular";
import bookstoreDirective from "./bookstore/bookstoreDirective";
import bsNavbar from "./nav/navbarComponent"; 

//export default the name of the module so in /src/index.js we can do 
//angular.module('bookstore', ['ngRoute', common, book]); 
//instead of angular.module('bookstore', ['ngRoute', "common", book]);
//And so we don't hardcode the name of the module
export default angular.module('common', []).name;

angular.module('common').directive('bsNavbar', bsNavbar);
angular.module('common').directive('bookstore', bookstoreDirective);