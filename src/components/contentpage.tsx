
import './contentpage.css';
import { useState } from 'react';
import Postcontent from './postcontent';
import { contentList } from '../assets/posts/projects/general.ts';

interface Content {
  contentPath: string
}

export default function Content(props: Content) {
  const defaultDoc = props.contentPath + "/general.ts";

  console.log('test');
  // const test = require(defaultDoc);
  
  const [selection, setSelection] = useState(defaultDoc);

  return (
    <div>
      <div>
        Hello
      </div>

      <hr />

      <Postcontent postPath={contentList[0]}> </Postcontent> 

    </div>
  );
}
