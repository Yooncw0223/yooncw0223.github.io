
import './contentpage.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ToggleContent from './toggleContent';

interface Input {
  contentPath: string,
  contents: Object<string, Array<Object> | string>,
}

export default function Content(props: Input) {

  const [contents, setContents] = useState({key: "", value: ""});
  const [postIndex, setPostIndex] = useState([0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // using hooks to prevent infinite re-rendering
    const contentList = props.contents.contentList;
    console.log("marker")
    console.log(contentList);
    setContents(contentList);

    setLoading(false);

  });

  if (loading)
    return <div>Loading at this moment</div> 

  // now generate the links for the table of contentList
  // make it recursive to emulate filesystem-like structure
  
  
  function buildToC(dir, indices: Array<number>=[]) {
    // dir is an array of further dir (in deeper levels) or strings that signify actual posts
    console.log("start")
    console.log(dir)
    
    const values = dir.value;
    console.log(values);
    const links = [];
    for (let i = 0; i < values.length; i++) {
      const content = values[i];
      console.log('test')
      console.log(content);
      if ("key" in values[i]) {
        links.push(<ToggleContent className="tableOfContent" title={values[i].key} content={buildToC(values[i], [...indices, i])} />);
      } else {
        links.push(<a onClick={() => setPostIndex([...indices, i])} className="contentLink" key={content.title}>{"[" + content.title + "]"}</a>)
      }
    }
    return links;
  }

  function getPost(contents, indices: Array<number>) {
    let content = contents;
    for (const i of indices) {
      content = content.value;
      content = content[i];
    }
    return content;
   

  }

  return (
    <div className="contentPageDiv">
      <section className="tableOfContent">
        {buildToC(contents)}
      </section>

      <hr className="contentVerticalLine"/>
      <ReactMarkdown className="articleContent" children={getPost(contents, postIndex).mdContent} />
    </div>
  );
}


