import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  constructor (private http: Http) {}

  getBlogPosts (slug) {
    return this.http.get(`http://mysite.local/wp-json/wp/v2/posts?_embed=true&slug=${slug}`).map((res: Response) => res.json());
  }

  getPostFeatureImage (id) {
    return this.http.get(`http://mysite.local/wp-json/wp/v2/media/${id}`).map((res: Response) => res.json());
  }
}
