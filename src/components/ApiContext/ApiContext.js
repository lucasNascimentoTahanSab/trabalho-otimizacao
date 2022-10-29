import React from "react";

function ApiContext(props) {
  const ApiContext = React.createContext('/optimize');

  return (
    <ApiContext.Provider value="/optimize">
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContext;