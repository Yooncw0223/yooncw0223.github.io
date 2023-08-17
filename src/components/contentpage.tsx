
import './contentpage.css';
import { useState } from 'react';
import Postcontent from './postcontent';

interface Content {
  contentPath: string
}

export default function Content(props: Content) {
  const defaultDoc = props.contentPath + "/default.txt";
  
  console.log(test);
  const [selection, setSelection] = useState(defaultDoc);

  return (
    <div>
      <div>
        Hello
      </div>

      <hr />

      <Postcontent postPath={props.contentPath + "/" + selection}> </Postcontent> 

    </div>
  );
}
