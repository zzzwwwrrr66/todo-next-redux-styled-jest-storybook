import React from "react";

type Props = {
  text: string;
};

export default ({ text }: Props) => 
<button onClick={()=>{console.log("click on storybook")}}>{text}</button>;
