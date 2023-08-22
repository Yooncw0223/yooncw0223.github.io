import { Component } from "react";
import { useEffect, useState } from 'react';


interface Input {
  title: string,
  content: Component
}

export default function ToggleContent(props: Input) {

  const [hide, setHide] = useState(true);
  const [content, setContent] = useState((<></>));

  console.log("------------------------------------")
  console.log(props.className);
  console.log("------------------------------------")
  useEffect(() => {
    setContent(props.content);
  });


  function handleClick() {
    console.log("clicked")
    setHide(!hide);
  }

  console.log("reached here")

  return (<section className={props.contentStyle}>
    <section onClick={handleClick} className={props.toggleStyle}> 
      {hide ? (<>&#9657;</>) : <>&#9663;</>} 
      {props.title} 
    </section>
    {
      hide ? (<div></div>) : (content)
    }
  </section>);

}
