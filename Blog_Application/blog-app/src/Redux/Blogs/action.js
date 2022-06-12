import * as types from "./actionType";
import Axios from "axios";

const fetchBlogPostRequest = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_REEQUEST,
    payload,
  };
};

const fetchBlogPostSuccess = (payload) => {
   
  return {
    type: types.FETCH_BLOG_POST_SUCCESS,
    payload,
  };
};

const fetchBlogPostFailure = (payload) => {
  return {
    type: types.FETCH_BLOG_POST_FAULIURE,
    payload,
  };
};

const fetchSingleBlogPostRequest = (payload) => {
    return {
      type: types.FETCH_SINGLE_BLOG_POST_REEQUEST,
      payload,
    };
  };
  
  const fetchSingleBlogPostSuccess = (payload) => {
     
    return {
      type: types.FETCH_SINGLE_BLOG_POST_SUCCESS,
      payload,
    };
  };
  
  const fetchSingleBlogPostFailure = (payload) => {
    return {
      type: types.FETCH_SINGLE_BLOG_POST_FAULIURE,
      payload,
    };
  };



  const createBlogPostRequest = (payload) => {
    return {
      type: types.CREATE_BLOG_POST_REEQUEST,
      payload,
    };
  };
  
  const createBlogPostSuccess = (payload) => {
     
    return {
      type: types.CREATE_BLOG_POST_SUCCESS,
      payload,
    };
  };
  
  const createBlogPostFailure = (payload) => {
    return {
      type: types.CREATE_BLOG_POST_FAULIURE,
      payload,
    };
  };




  
  const updateBlogPostRequest = (payload) => {
    return {
      type: types.UPDATE_BLOG_POST_REEQUEST,
      payload,
    };
  };
  
  const updateBlogPostSuccess = (payload) => {
     
    return {
      type: types.UPDATE_BLOG_POST_SUCCESS,
      payload,
    };
  };
  
  const updateBlogPostFailure = (payload) => {
    return {
      type: types.UPDATE_BLOG_POST_FAULIURE,
      payload,
    };
  };

const updateBlogPost =(payload)=>(dispatch)=>{
    dispatch(updateBlogPostRequest());
    Axios.patch(`/blogs/${payload.id}`,payload)
    .then((r)=>dispatch(updateBlogPostSuccess(r.data)))
    .then(()=>fetchBlogPost())
    .catch((e)=>dispatch(updateBlogPostFailure(e.data)))
    

}


const createBlogPost =(payload)=>(dispatch)=>{
    dispatch(createBlogPostRequest());
    Axios.post(`/blogs`,payload)
    .then((r)=>dispatch(createBlogPostSuccess(r.data)))
    .catch((e)=>dispatch(createBlogPostFailure(e.data)))
}



const fetchSingleBlogPost =(payload)=>(dispatch)=>{
    dispatch(fetchSingleBlogPostRequest());
    Axios.get(`/blogs/${payload}`)
    .then((r)=>dispatch(fetchSingleBlogPostSuccess(r.data)))
    .catch((e)=>dispatch(fetchSingleBlogPostFailure(e.data)))
}
const fetchBlogPost = (payload) => (dispatch) => {
  dispatch(fetchBlogPostRequest());
  Axios.get("/blogs")
  .then((r) => dispatch(fetchBlogPostSuccess(r.data)))
  .catch((e) => dispatch(fetchBlogPostFailure(e.data)));
};

export  { fetchBlogPost,fetchSingleBlogPost,createBlogPost ,updateBlogPost};
