import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class projectService {
  constructor (private http: Http) {}

  getProject(slug) {
    return this.http.get(`http://mysite.local/wp-json/wp/v2/my_projects?slug=${slug}`).map((res: Response) => res.json());
  }
}
