import * as React from "react";

function MyInfo() {
  return (
    <div>
      <h1>Ahsan Sohail</h1>
      <p>Software Engineer</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  );
}
// export is es6 syntax that is used to export elements from files for other file to use it
// if you export something with default keyword, you can directly import the item in other file using this syntax

// import MyInfo from './MyInfo';

// sicne it default export you can also rename the item exported from file

// import SomeOtherName from './MyInfo';
// export default MyInfo;

// If you want to export multiple items from a file, export the objects as a object
// you can import these items in other files

// import {MyInfo} from './MyInfo';

// Here you cannot rename the item

export { MyInfo };
