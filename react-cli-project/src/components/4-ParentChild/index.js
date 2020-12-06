import * as React from "react";

function App() {
  return (
    <div>
      <Welcome />
      <p>Welcome to react training!</p>
    </div>
  );
}

function Welcome() {
  return <Greeting />;
}

function Greeting() {
  return <h1>Hello Ibex!</h1>;
}

export default App;
