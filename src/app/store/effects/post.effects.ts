import { addPosts, addPostsFail, addPostsSucess } from './../actions/post.actions';

import { PostService } from './../../Services/post.service';
import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getPosts, getPostsFail, getPostsSucess} from "../actions/post.actions";
import {catchError, exhaustMap, map, of} from "rxjs";


@Injectable()
export class PostsEffects{

    constructor(private postService: PostService, private actions$: Actions){

    }
    loadPost$=createEffect( ()=>
    this.actions$.pipe(
    ofType(getPosts),
    exhaustMap(actions=>
        this.postService.getAllPosts().pipe(
            map((post)=> getPostsSucess({payload:post})),
            catchError ((error)=> of(getPostsFail({payload:error})))
            ))
    ));
    addPost$=createEffect( ()=>
    this.actions$.pipe(
    ofType(addPosts),
    exhaustMap(action=>
        this.postService.createPost(action.payload.content, action.payload.image,action.payload.title).pipe(
            map(post=> addPostsSucess({payload:post})),
            catchError ((error)=> of(addPostsFail({payload:error})))
            ))
    ));
}


