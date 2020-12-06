import * as React from "react";

// when we need to go to javascript from jsx we need to wrap that with `{}`
function App() {
  const date = new Date();
  //   const date = new Date(2020, 10, 8, 10, 11, 11);
  const hours = date.getHours();
  let h1 = "";
  if (hours <= 12) {
    h1 = "Morning";
  } else if (hours > 12 && hours <= 18) {
    h1 = "Evening";
  } else {
    h1 = "Night";
  }
  return (
    <div>
      <h1>Its {h1}</h1>
    </div>
  );
}

export default App;
