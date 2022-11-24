import { API_URL } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPost } from '../models/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService{

    constructor(private http: HttpClient){}
   
    getAllPosts(){
        return this.http.get<IPost[]>(`${API_URL}/Posts`);
    }

    createPost(title: string, image: string, content: string){
        const token =localStorage.getItem('token');

        const options={
            headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
        }
    console.log(title, image,content);    
    return this.http.post<IPost>(`${API_URL}/Posts`, {title, image,content}, options);
    }


}