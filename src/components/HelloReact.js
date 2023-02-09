import React from 'react';

// TODO: Add a comment explaining what a react component is
// Component is a function which creates the xml to be created as html
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // XML which will be translated into html, allows for templating for inserting expressions
  return <p>Hello World! Here is {text}</p>;
}

export default HelloReact;
