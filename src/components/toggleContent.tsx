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
    console.log("clicked")
    setHide(!hide);
  }

  console.log("reached here")

  return (<section>
    <p onClick={handleClick}> {props.title} </p>
    {
      hide ? (<div></div>) : (<section> <br/> {content} </section>)
    }
  </section>);

}
