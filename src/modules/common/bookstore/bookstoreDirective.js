//notice this file is not coupled to Angular

import bookstoreTemplate from "./bookstore.html";

export default function bookstoreDirective(){
    return {
        restrict: 'EA',
        //note template instead of templateUrl and now the template is a string from ./bookstore.html
        //webpack takes care of transforming properly the content of the file escaping if necessary 
        //notice "html-loader" has been added to package.json
        template: bookstoreTemplate
    };
}