const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Need a cake",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Need a icecream",
  };
}

const initialState = {
  numOfCakes: 10,
};
const initialStateIcecream = {
  numOfIcecream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }
    default:
      return state;
  }
};

const icecreamReducer = (state = initialStateIcecream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: reducer,
  icecreamReducer: icecreamReducer,
});
const store = createStore(rootReducer);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
