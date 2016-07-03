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
  styles: [`
    * { padding:0; margin:0; }
    nav { background:#158126; min-height:40px; border-bottom:5px #046923 solid; }
    nav a { font-weight:bold; text-decoration:none; color:#fff; padding:20px; display:inline-block; }
    nav a:hover { background:#00AF36; }
    .router-link-active { background-color: #00AF36; }
    main { padding:20px 0; }
  `],
  templateUrl:  'app.template.html'
})
export class App {

}
