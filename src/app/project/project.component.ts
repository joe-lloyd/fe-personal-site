import { Component } from '@angular/core';
import {projectService} from './project.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {forEach} from "@angular/router/esm/src/utils/collection";
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: __filename,
  selector: 'project',
  templateUrl: 'project.template.html'
})
export class Project {

  getData: any;

  constructor(private route: ActivatedRoute, private _httpService: projectService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.getProject(slug);
    });
  }

  getProject(slug) {
    this._httpService.getProject(slug)
      .subscribe(
        data => this.getData = data,
        error => console.log(error),
        () => {
          console.log('finished', this.getData[0].slug);
        }
      );
  }
}
