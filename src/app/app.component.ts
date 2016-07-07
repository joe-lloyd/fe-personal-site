import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';

// templateUrl example
import { Home } from './home';
import { Project } from './project';
import { Projects } from './projects';
import { Blog } from './blog';
import { Post } from './post';
import { Technology } from './technology';
import { Contact } from './contact';
import { YouTube } from './youtube';
//


/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  templateUrl:  'app.template.html'
})
export class App {

}
