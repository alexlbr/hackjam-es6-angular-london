//notice this file is not coupled to Angular

export default class BookDetailsController {

    constructor($routeParams, BookFactory) {
        if ($routeParams.id) {

            BookFactory.getBook($routeParams.id)
                .then((book)=>{
                angular.extend(this, book);
                });
        }
    }
}
  