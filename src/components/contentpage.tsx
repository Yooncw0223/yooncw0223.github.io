
import './contentpage.css';
import { useEffect, useState } from 'react';
import Postcontent from './postcontent';
import { contentList } from '../assets/posts/projects/general';
import { title } from 'process';
import ReactMarkdown from 'react-markdown';

interface Content {
  contentPath: string
}

export default function Content(props: Content) {

  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = () => {
      const defaultDoc = props.contentPath + "/general";
      // const contents = await import(defaultDoc);
      console.log("!!!!!!!!!!!!!!got through!!!!!!!!!!!!");
      console.log("content 2: " + contentList);
      setContents(contentList);
      setLoading(true);
      console.log("test" + contentList);
      setLoading(false);
    };
    getPosts();


    return () => {
      // do some clean up here
      console.log(contentList);
      console.log("clean up complete");
    }
  });

  // console.log('default' + defaultDoc);
  // const contentList = await import(defaultDoc);
  console.log("hello");
  console.log(contentList);
  
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  
  console.log("I shouldn't be here")

  return (
    <div className="contentPageDiv">
      <div className="tableOfContent">
        {contentList[0].title}
      </div>

      <hr className="contentVerticalLine"/>

      <ReactMarkdown children={contentList[0].mdContent} />

    </div>
  );
}
