
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
    const contentList = props.contents.contentList;
    setContents(contentList);

    setLoading(false);

  });

  
  if (loading)
    return <div>Loading at this moment</div> 


  // now generate the links for the table of contents
  const links = [];
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    links.push(<a onClick={() => setPostIndex(i)} className="contentLink" key={content.title}>{"[" + content.title + "]"}</a>)
    links.push(<br/>)
  }

  return (
    <div className="contentPageDiv">
      <div className="tableOfContent">
        {links}
      </div>

      <hr className="contentVerticalLine"/>

      <ReactMarkdown className="articleContent" children={contents[postIndex].mdContent} />

    </div>
  );
}
