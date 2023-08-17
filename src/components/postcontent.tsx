
import ReactMarkdown from 'react-markdown';

export default async function Postcontent(props: any) {

  return (
    <div>
      <ReactMarkdown children={fs.readFileSync("../assets/posts/test.md", {encoding:"utf-8"})} />
    </div>
  );
}
