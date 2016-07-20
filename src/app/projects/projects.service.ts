import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class projectsService {
  constructor (private http: Http) {}

  getProjects() {
    return this.http.get('http://mysite.local/wp-json/wp/v2/my_projects').map((res: Response) => res.json());
  }
}
