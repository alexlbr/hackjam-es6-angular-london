//notice this file is not coupled to Angular

export default function BookAddController($routeParams, BookFactory) {

    function addBook() {
        BookFactory.addBook(this.book);
    }

    this.addBook = addBook;
}
