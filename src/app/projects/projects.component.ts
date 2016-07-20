import { Component } from '@angular/core';
import {projectsService} from './projects.service'
import 'rxjs/add/operator/map'
import { ProjectBlock } from './projectblock';

@Component({
  moduleId: __filename,
  selector: 'projects',
  directives: [ProjectBlock],
  templateUrl: 'projects.template.html'
})
export class Projects {

  projects: any;
  id: number;

  constructor ( private _httpService: projectsService) {
    console.log('i got constructed');
    this.getProjects();
  }

  getProjects () {
    this._httpService.getProjects()
      .subscribe(
        data => this.projects = data,
        error => console.log(error),
        () => {
          console.log('finished');
        }
      );
  }
}
