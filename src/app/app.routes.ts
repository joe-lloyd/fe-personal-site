import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Project } from './project';
import { Projects } from './projects';
import { Blog } from './blog';
import { Post } from './post';
import { Technology } from './technology';
import { Contact } from './contact';
import { YouTube } from './youtube';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'projects', component: Project },
  { path: 'projects/:slug', component: Projects },
  { path: 'blog', component: Blog },
  { path: 'blog/:post', component: Post },
  { path: 'technology', component: Technology },
  { path: 'contact', component: Contact },
  { path: 'youtube', component: YouTube },
  { path: '**', redirectTo: '' }
];
