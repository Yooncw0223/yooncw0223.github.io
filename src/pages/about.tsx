
import './about.css';
import Card from '../components/card';


export default function About() {
  return (
    <div className="about">
      <h2 className="title">
        About
      </h2>
      <pre className="textbody">
        {`Hello! My name is Chanwoo Yoon, a rising senior in Computer Science (6-3) at MIT.

         My interests lie in inference, machine learning, and general computer systems (e.g., RAFT),
         and this website mainly serves to host some of my projects and notes/cheatsheets from reading
         papers or playing with some concepts from class/softwares/frameworks.

         If you want to learn more about me, check out my resume below with the link, or please send me 
         an email with questions at [chanwooy@mit.edu].`}
      </pre>

      <div className="cardContainer">
        
        <Card title="test card" imagePath=""/>

      </div>
      
    </div>
  );
}
