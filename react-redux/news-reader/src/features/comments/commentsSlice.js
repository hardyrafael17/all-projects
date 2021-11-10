import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadCommentsForArticleId = createAsyncThunk('commentsSlice/loadCommentsForArticleId',
async (id) => {
  const response = await fetch(`api/articles/${id}/comments`);
  const json = await response.json();
  return json;
  });

export const postCommentForArticleId = createAsyncThunk(
  'commentsSlice/postCommentForArticleId',
  async ({ articleId, comment }) => {

    const requestBody = await JSON.stringify({ comment });
    const response = await fetch(`api/articles/${articleId}/comments`, {
      method: 'POST',
      body: requestBody
    });
    const json = await response.json()
    return json;
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byArticleId: {
        
      }
  },
  isLoadingComments: false,
  failedToLoadComments: false,
  createCommentIsPending: false,
  failedToCreateComment: false,

  extraReducers: {
    [loadCommentsForArticleId.pending]: (state) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      const objectKey = action.payload.articleId.toString();
      const returnObject = {
        [objectKey]: action.payload.comments 
      };
      state.byArticleId = returnObject;
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.rejected]: (state) => {
      state.failedToLoadComments = true;
      state.isLoadingComments = false;
    },
    [postCommentForArticleId.pending]: (state) => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.fulfilled]: (state, action) => {
      state.byArticleId[action.payload.articleId.toString()].push(action.payload)
      state.failedToCreateComment = false;
      state.createCommentIsPending = false;
    },
    [postCommentForArticleId.rejected]: (state) => {
      state.failedToCreateComment = true;
      state.createCommentIsPending = false;
    }
  }
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
