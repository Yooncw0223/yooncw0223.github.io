
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
    const getPosts = async () => {
      // setLoading(true);
      // setContents(contentList);
      // setLoading(false);
      setLoading(true);

      // const panel = await import('../assets/posts/projects/general');
      //
      const value: string = props.contentPath + '/general';
      const panel = await import('../assets/posts/projects/general');

      console.log("debug start")
      console.log('../assets/posts/projects/general')
      console.log(props.contentPath + "/general")
      console.log(props.contentPath + "/general")
      console.log("end")
      setContents(panel)
      

      setLoading(false);
      console.log(panel);
      console.log(panel.contentList)
      console.log('close')
    };
    getPosts();


    return () => {
      // do some clean up here
      console.log(contentList);
      console.log("clean up complete");
    }
  });

 
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  

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
