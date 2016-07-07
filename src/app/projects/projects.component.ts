import { Component } from '@angular/core';
import {projectsService} from './projects.service'
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {forEach} from "@angular/router/esm/src/utils/collection";
import { ProjectBlock } from './projectblock';

@Component({
  moduleId: __filename,
  selector: 'projects',
  directives: [ProjectBlock],
  templateUrl: 'projects.template.html'
})
export class Projects {

  getData: any;
  id: number;
  title: string;
  client: string;
  employer: string;
  link_to_project: string;
  link_to_repo: string;
  tech_used: any;

  constructor( private _httpService: projectsService) {}

  ngOnInit() {
    console.log('i got init');
    this.getProjects();
  }

  getProjects() {
    this._httpService.getProjects()
      .subscribe(
        // data => this.getData = JSON.stringify(data),
        data => this.getData = data,
        error => console.log(error),
        () => {
          console.log('finished');
          // this.loopValues(this.getData);
        }
      );
  }

  loopValues(data) {
    console.log(data.length);
    for(let item of data) {
      console.log(item);
    }
  }

  assignValues(item) {
    console.log(item.id);
    this.id = item.id;
    this.title = item.title.rendered;

    let acf = item.acf;
    this.client = acf.client;
    this.employer = acf.employer;
    this.link_to_project = acf.link_to_project;
    this.link_to_repo = acf.link_to_repo;
    this.tech_used = acf.tech_used;
  }
}
