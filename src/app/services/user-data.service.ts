import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }

  photos() {
    return this.http.get(this.photosUrl);
  }
}
