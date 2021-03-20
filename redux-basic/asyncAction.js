const redux = require("redux");
const createStore = redux.createStore;

const FETCH_USERS_LOADING = "FETCH_USERS_LOADING";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

function fetchUsersLoading() {
  return {
    type: FETCH_USERS_LOADING,
  };
}

function fetchUsersSuccess() {
  return {
    type: FETCH_USERS_SUCCESS,
  };
}

function fetchUsersFailure() {
  return {
    type: FETCH_USERS_FAILURE,
  };
}

const initialState = {
  loading: false,
  users: [],
  errors: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errors: [],
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        errors: action.payload,
      };
  }
};

const store = createStore(userReducer);
