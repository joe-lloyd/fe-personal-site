import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __filename,
  selector: 'blog-block',
  templateUrl: 'blogblock.template.html',
  directives: [
    ...ROUTER_DIRECTIVES
  ]
})
export class BlogBlock {

  @Input('item') item: any;

  title: string;
  year: string;
  intro: string;
  slug: string;


  constructor() {}

  ngOnInit() {
    console.log('child load',this.item);
    this.title = this.item.title.rendered;
    // this.year = this.item.acf.year_made;
    // this.intro = this.item.acf.intro;
    this.slug = './' + this.item.slug;
  }

}
