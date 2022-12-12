import React from "react";

export default ({children}) => {
  return <>
    <div style={{border: "1px solid #000"}}>
      {children}
    </div>
  </>
}