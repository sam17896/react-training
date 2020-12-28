import * as React from "react";
import ParentChild from "./components/4-ParentChild";
import Styles from "./components/5-Styles";
import JSXInterpolation from "./components/6-JSXInterpolation";
import Props from "./components/7-Props";
import ClassBased from "./components/8-ClassBaseComponents";
import Hooks from "./components/9-Hooks";
import Routing from "./components/10-Routing";
import Redux from "./components/11-Redux";
import Context from "./components/12-Context";
import Bonus from "./components/13-Bonus";

import { Provider } from "react-redux";
import store from "./components/11-Redux/store";

const lessions = [
  {
    id: 4,
    name: "ParentChild",
    component: () => <ParentChild />,
  },
  {
    id: 5,
    name: "Styles",
    component: () => <Styles />,
  },
  {
    id: 6,
    name: "JSX Interpolation",
    component: () => <JSXInterpolation />,
  },
  {
    id: 7,
    name: "Props",
    component: () => <Props />,
  },
  {
    id: 8,
    name: "ClassBased",
    component: () => <ClassBased />,
  },
  {
    id: 9,
    name: "Hooks",
    component: () => <Hooks />,
  },
  {
    id: 10,
    name: "Routing",
    component: () => <Routing />,
  },
  {
    id: 11,
    name: "Redux",
    component: () => <Redux />,
  },
  {
    id: 12,
    name: "Context",
    component: () => <Context />,
  },
  {
    id: 13,
    name: "Bonus",
    component: () => <Bonus />,
  },
];

function App() {
  const [index, setIndex] = React.useState(-1);
  return (
    <Provider store={store}>
      <ul style={{ display: 'flex', flexDirection: 'row' }}>
        {lessions.map((item) => {
          return (
            <li style={{ flex: 1, }} key={item.id}>
              <button onClick={() => setIndex(item.id)}>{item.name}</button>
            </li>
          );
        })}
      </ul>
      {index !== -1 && lessions.find((item) => item.id === index).component()}
    </Provider>
  );
}

export default App;
