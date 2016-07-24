import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from './post.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __filename,
  selector: 'post',
  templateUrl: 'post.template.html'
})
export class Post {

  // main data
  postData: any;
  featureImageData: any;

  // printable values
  title: string;
  content: string = '<img src="/public/assets/loading.gif" />';
  featuredImage: string = '';

  // meta stuff
  sub: any;

  constructor( private _httpService: PostService,  private route: ActivatedRoute) {}

  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      let slug = params['post'];
      this.getBlogPosts(slug);
    });
  }

  /**
   * gets the data for a post
   * @param slug
   */
  getBlogPosts (slug) {
    this._httpService.getBlogPosts(slug)
      .subscribe(
        data => this.postData = data[0],
        error => console.log(error),
        () => {
          this.title = this.postData.title.rendered;
          this.content = this.postData.content.rendered;
          this.checkFeatureImage(this.postData.featured_media);
          console.log('post finished');
        }
      );
  }

  /**
   * gets the data for featured image
   * @param id
   */
  getFeaturedImage (id) {
    this._httpService.getPostFeatureImage(id)
      .subscribe(
        data => this.featureImageData = data,
        error => console.log(error),
        () => {
          let imgUrl = this.featureImageData.media_details.sizes.full.source_url;
          this.featuredImage = `<figure><img src="${imgUrl}" /></figure>`;
          console.log('img finished');
        }
      );
  }

  /**
   * check if feature img id exists and look for it if it does also set figure as a placeholder while it loads
   * @param id
   */
  checkFeatureImage (id) {
    if (id) {
      this.featuredImage = '<figure></figure>';
      this.getFeaturedImage(id);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
