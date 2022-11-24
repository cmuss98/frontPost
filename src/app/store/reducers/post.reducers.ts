import { getPosts, getPostsSucess, getPostsFail, addPosts, addPostsSucess, addPostsFail } from './../actions/post.actions';
import { IPost } from './../../models/post';
import { createReducer, on } from '@ngrx/store';

export interface IPostState{
    posts: IPost[],
    isLoading: boolean,
    isSaving: boolean
}
const initialState: IPostState={
    posts:[],
    isLoading:false,
    isSaving:false
}

export const postsReducer=createReducer(
    initialState,
    on(getPosts, (state)=>{
        return {...state, isLoading: true}
    }),
    on(getPostsSucess, (state, {payload})=>{
        return {...state, post: payload, isLoading: false}
    }),
    on(getPostsFail, (state, {payload})=>{
        return {...state, isLoading: false}
    }),
    on(addPosts, (state)=>{
        return {...state, isSaving: true}
    }),
    on(addPostsSucess, (state, {payload})=>{
        return {...state, post: payload, isSaving: false}
    }),
    on(addPostsFail, (state, {payload})=>{
        return {...state, isSaving: false}
    }),
)