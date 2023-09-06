
import './contentpage.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ToggleContent from './toggleContent';
import rehypeRaw from "rehype-raw";

interface Input {
  contentPath: string,
  contents: Object<string, Array<Object> | string>,
}

export default function Content(props: Input) {

  const [contents, setContents] = useState({key: "", value: ""});
  const [postIndex, setPostIndex] = useState([0]);
  const [mdContent, setMdContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // using hooks to prevent infinite re-rendering
    function getPost(contents, indices: Array<number>) {
      let content = contents;
      for (const i of indices) {
        content = content.value;
        content = content[i];
      }
      return content;
    }
    const contentList = props.contents.contentList;
    setContents(contentList);

    let content;
    try {
      content = getPost(contents, postIndex).mdContent;
    } catch(e) {
      content = contents[0];
    }
    setMdContent(content);
    setLoading(false);

  });

  if (loading)
    return <div>Loading at this moment</div> 

  // now generate the links for the table of contentList
  // make it recursive to emulate filesystem-like structure
  function buildToC(dir, indices: Array<number>=[]) {
    // dir is an array of further dir (in deeper levels) or strings that signify actual posts
    const values = dir.value;
    const links = [];
    for (let i = 0; i < values.length; i++) {
      const content = values[i];
      if ("key" in values[i]) {
        links.push(<ToggleContent title={values[i].key} content={buildToC(values[i], [...indices, i])} contentStyle="tableOfContent" toggleStyle="toggleSettings" />);
      } else {
        links.push(<a onClick={() => setPostIndex([...indices, i])} className="contentLink" key={content.title}>{"[" + content.title + "]"}</a>)
      }
    }
    return links;
  }


  return (
    <div className="contentPageDiv">
      <section className="tableOfContent">
        {buildToC(contents)}
      </section>

      <hr className="contentVerticalLine"/>
      <ReactMarkdown className="articleContent" children={mdContent} rehypePlugins={[rehypeRaw]} />
    </div>
  );
}
