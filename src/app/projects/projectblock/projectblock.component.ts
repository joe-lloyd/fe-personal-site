import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __filename,
  selector: 'project-block',
  templateUrl: 'projectblock.template.html'
})
export class ProjectBlock {

  @Input('item') item: any;

  title: string;
  year: string;
  intro: string;


  constructor() {}

  ngOnInit() {
    console.log('child load',this.item);
    this.title = this.item.title.rendered;
    this.year = this.item.acf.year_made;
    this.intro = this.item.acf.intro;
  }

}
