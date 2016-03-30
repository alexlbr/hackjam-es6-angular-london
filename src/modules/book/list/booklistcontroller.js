//notice this file is not coupled to Angular

export default class BookListController {
    
    constructor(BookFactory) {
        BookFactory.getBooks()
        .then((books)=>{
            this.books = books;
        });    
    }
}
