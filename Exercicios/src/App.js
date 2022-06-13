import React from 'react';
import ReactDOM from 'react-dom/client';


function Body(props) {
  return <h2>My body have { props.brand.name }!</h2>;
}
function MyBody() {
  const bodyInfo = { name: "Arms and Legs", inside: "Bones, Blood, Vessels and Muscles" };
  return (
    <>
      <h1>What my body have?</h1>
      <Body brand={bodyInfo} />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyBody/>);

ReactDOM.render( document.getElementById('root'));





