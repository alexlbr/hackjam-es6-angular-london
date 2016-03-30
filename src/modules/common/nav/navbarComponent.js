//notice this file is not coupled to Angular

import navbarTemplate    from './nav.html';
import NavbarController  from './navcontroller';

export default function bsNavbar(){
  return {
    restrict: 'EA',
    //note template instead of templateUrl and now the template is a string from ./nav.html
    //webpack takes care of transforming properly the content of the file escaping if necessary 
    //notice "html-loader" has been added to package.json
    template: navbarTemplate,
    controller: NavbarController,
    controllerAs: 'nav'
  };
}