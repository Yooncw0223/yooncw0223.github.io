
import ReactMarkdown from 'react-markdown';

export default function Postcontent(props: any) {

  return (
    <div>
      <ReactMarkdown children={props.content} />
    </div>
  );
}
