import { Component } from '@angular/core';
import {blogService} from './blog.service'
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {forEach} from "@angular/router/esm/src/utils/collection";
import { BlogBlock } from './blogblock';

@Component({
  moduleId: __filename,
  selector: 'blog',
  directives: [BlogBlock],
  templateUrl: 'blog.template.html'
})
export class Blog {

  blogPosts: any;

  constructor( private _httpService: blogService) {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this._httpService.getBlogPosts()
      .subscribe(
        data => this.blogPosts = data,
        error => console.log(error),
        () => {
          console.log('finished');
        }
      );
  }
}
