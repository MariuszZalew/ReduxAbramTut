// our main reducer
const state1 = 0;
const counter = (state = state1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;
// import createStore from 'Redux';
const store = createStore(counter);

// const render = () => {
//   document.body.innerText = store.getState();
// };

const Counter = ({ value }) => <h1>{value}</h1>;

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState} />,
    document.getElementById("root")
  );
};

store.subscribe(render);
// store.dispatch({ type: "INCREMENT" });
render();
document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
