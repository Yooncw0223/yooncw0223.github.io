import { Component } from "react";
import { useEffect, useState } from 'react';


interface Input {
  title: string,
  content: Component
}

export default function ToggleContent(props: Input) {

  const [hide, setHide] = useState(true);
  const [content, setContent] = useState((<></>));

  useEffect(() => {
    setContent(props.content);
  });


  function handleClick() {
    setHide(!hide);
  }

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
