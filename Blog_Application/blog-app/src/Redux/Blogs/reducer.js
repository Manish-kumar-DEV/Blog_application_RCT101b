import * as types from "./actionType";


const intialState = {
  blogs: [],
  loading: false,
  currentBlog:{},
  error: "",
};

const reducer = (state=intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_BLOG_POST_REEQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_BLOG_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs:payload,
        error: "",
      };
    case types.FETCH_BLOG_POST_FAULIURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      case types.FETCH_SINGLE_BLOG_POST_REEQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentBlog:payload,
        error: "",
      };
    case types.FETCH_SINGLE_BLOG_POST_FAULIURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };


    default:
      return state;
  }
};

export default reducer;
