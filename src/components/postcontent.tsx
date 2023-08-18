
import ReactMarkdown from 'react-markdown';

export default function Postcontent(props: any) {

  return (
    <ReactMarkdown children={props.content} />
  );
}
