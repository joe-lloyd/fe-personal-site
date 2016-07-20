import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class blogService {
  constructor (private http: Http) {}

  getBlogPosts () {
    return this.http.get(`http://mysite.local/wp-json/wp/v2/posts`).map((res: Response) => res.json());
  }
}
