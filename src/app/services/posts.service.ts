import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { RespuestaPosts } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  paginaPost = 0;

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.paginaPost ++;

    return this.httpClient.get<RespuestaPosts>(`${URL}/posts/?pagina=${this.paginaPost}`);
  }
}
