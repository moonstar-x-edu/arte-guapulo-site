import ActionTypes from './actionTypes';
import { postPieceRequest } from '../../networking';
import { BAD_REQUEST_CODE } from '../../constants';

const { POST_UPLOAD_SUCCESS, POST_UPLOAD_FAILURE, POST_UPLOAD_STARTED, POST_UPLOAD_CLEAR_DONE } = ActionTypes;

const postPieceStarted = () => {
  return {
    type: POST_UPLOAD_STARTED
  };
};

const postPieceSuccess = (postData) => {
  return {
    type: POST_UPLOAD_SUCCESS,
    payload: postData
  };
};

const postPieceFailure = (error) => {
  return {
    type: POST_UPLOAD_FAILURE,
    payload: error
  };
};

const postPiece = (pieceData) => {
  return (dispatch) => {
    dispatch(postPieceStarted());
    postPieceRequest(pieceData)
      .then((response) => {
        dispatch(postPieceSuccess(response.data.data));
      })
      .catch((error) => {
        if (error.response.status === BAD_REQUEST_CODE) {
          dispatch(postPieceFailure(error.response.data.error.details[0].message));
        } else {
          dispatch(postPieceFailure(error.message));
        }
      });
  }
};

const clearDone = () => {
  return {
    type: POST_UPLOAD_CLEAR_DONE
  }
};

export {
  postPiece,
  clearDone
};
