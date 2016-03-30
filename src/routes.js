import angularRoute from "angular-route";

export function RouteConfig($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './src/modules/book/list/book.html',
        controller: 'BookListController',
        controllerAs :'bookList'
    })
    .when('/books/add', {
        templateUrl: './src/modules/book/add/add-book.html',
        controller: 'BookAddController',
        controllerAs: 'book'
    })
    .when('/books/:id', {
        templateUrl: './src/modules/book/details/book-details.html',
        controller: 'BookDetailsController',
        controllerAs: 'book'
    });
}

RouteConfig.$inject = ['$routeProvider'];
export default angular.module('book.routes',['ngRoute']).config(RouteConfig).name;
