import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts: Post[] = [];
  habilitado = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.siguientes();
  }

  reload(event) {
    // console.log('Hola');
    this.siguientes(event, true);
    this.posts = [];
    this.habilitado = false;
  }


  siguientes(event?, pull: boolean = false) {
    // console.log(pull);

    this.postsService.getPosts(pull)
      .subscribe(resp => {
        console.log(resp);
        this.posts.push(...resp.posts);

        if (event) { // Si existe el elemento vuelves a cargar los posts
          event.target.complete();

          // Lo desactivamos cuando no haya nada publicaciones
          if (resp.posts.length === 0) {
            this.habilitado = true;
          }
        }
      });
  }

}
