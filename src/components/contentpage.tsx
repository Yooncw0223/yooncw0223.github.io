
import './contentpage.css';
import { useEffect, useState } from 'react';
import Postcontent from './postcontent';
import { title } from 'process';
import ReactMarkdown from 'react-markdown';

interface Content {
  contentPath: string,
  contents: Object<string, Array<Object>>,
}

export default function Content(props: Content) {

  const [contents, setContents] = useState([]);
  const [postIndex, setPostIndex] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // using hooks to prevent infinite re-rendering
    setContents(props.contents.contentList);
    console.log('test')
    console.log(props.contents.contentList);
    setLoading(false);
  });

  
  if (loading)
    return <div>Loading at this moment</div> 



  return (
    <div className="contentPageDiv">
      <div className="tableOfContent">
        {contents[0].title}
      </div>

      <hr className="contentVerticalLine"/>

      <ReactMarkdown children={contents[0].mdContent} />

    </div>
  );
}
