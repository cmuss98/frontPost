import { IPost } from './../../models/post';
import {createAction, props} from "@ngrx/store";


export const getPosts= createAction('[IPost] get All post');
export const getPostsFail=createAction('[IPost] get all post fail', props<{payload: any}>());
export const getPostsSucess=createAction('[IPost] get all post sucess', props<{payload: IPost[]}>());

export const addPosts= createAction('[IPost] add post', props<{payload: IPost}>());
export const addPostsFail=createAction('[IPost] add post fail', props<{payload: any}>());
export const addPostsSucess=createAction('[IPost] add post sucess', props<{payload: IPost}>());



