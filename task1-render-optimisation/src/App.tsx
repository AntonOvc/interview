import "./styles.css";
import { useState, useEffect } from 'react';

function ChildComponent({ onClick }: { onClick: () => void }) {
  // useEffect to track each render in console
  useEffect(() => {
    console.log("Child rerendered")
  })

  return (
    <div>
      <button onClick={onClick}>I do nothing here</button>
    </div>
  )
}

function ParentComponent () {
  const [counter, setCounter] = useState(0);
  const onChildComponentPressHandler = () => {};

  // useEffect to track each render in console
  useEffect(() => {
    console.log("Parent rerendered")
  })

  return (
    <>
      <div>Counter: {counter}</div>
      <button
        onClick={() => setCounter(p => p + 1)}
      >
        Increase parent counter
      </button>
      <ChildComponent
        onClick={onChildComponentPressHandler}
      />
    </>
  )
}

export default function App() {
  return (
    <div className="App" style={{ textAlign: 'left' }}>
      <h1>Task 1</h1>
      <div>
        There are two components defined in this file: <i>ParentComponent</i> and <i>ChildComponent</i>.
      </div>
      <div>
        <i>ChildComponent</i> receives a function as a prop which do nothing in this demo.
      </div>
      <div>
        <i>ParentComponent</i> has a state with a counter and a button to increase the counter.
      </div>
      <div>
        Imagine that <i>ChildComponent</i> implements some heavy logic and you need to prevent it from rerender each time <i>ParentComponent</i> rerenders until <i>ChildComponent</i> props are not changed.
      </div>
      <div>
        To trigger <i>ParentComponent</i> rerender use "Increase parent counter" button.
      </div>
      <br />
      <br />
      <ParentComponent />
    </div>
  );
}
