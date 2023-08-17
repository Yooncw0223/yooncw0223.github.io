
import './about.css';
import gitImage from '../assets/images/git.png';
import linkedInImage from '../assets/images/linkedin.png';
import resumeImage from '../assets/images/resume.png';


export default function About() {
  return (
    <div className="about">
      <h2 className="title">
        About
      </h2>
      <ul>
        <li className="listText">My name is Chanwoo 👋. </li>
        <li className="listText">I am a rising senior at MIT majoring in Computer Science 🖳.</li>
        <li className="listText">I am interested in inference, machine learning, and general computer systems (to be specific, their corresponding designs/ensuing tradeoffs).</li>
        <li className="listText">In the upcoming fall semester (2023), I am planning on taking classes on reinforcement learning (6.7920 🤖), memory/runtime optimization (6.1060 ⚡), database (6.5830 💾), and psychology in the context of economics (14.13 🤯). I'm very excited! :)</li>
        <li className="listText">If you are more curious, you can look at my resume below!</li>
        <li className="listText">To contact me, email me at [chanwooy@mit.edu]!</li>
      </ul>
      <hr className="subline"/>

      <h1 className="textbody">
        {
          `This website is about:`
        }
      </h1>

      <ul>
        <li className="listText">Keeping track of my projects 🧪.</li>
        <li className="listText">Hosting little summaries of random papers or concepts that I encounter 📝.</li>
        <li className="listText">Storing cheatsheets for languages I'm using (e.g., class declaration in Rust) 📑</li>
        <li className="listText">Remembering various plugin shortcuts (e.g., Vim, Git) 🚀.</li>
        <li className="listText">This website uses React and is deployed through Github Pages 🐱.</li>
      </ul>

      <pre className="textbody">
        {`Thank you for reading this far!`}
      </pre>

      <hr className="subline"/>

      <div className="cardList">
        <a className="cardLogo" href="">
          <div className="cardContent">
            <img className="icon" src={resumeImage} />
            <p className="iconText">Resume</p>
          </div>
        </a>
        <a className="cardLogo" href="https://www.linkedin.com/in/chanwooy" target="_blank">
          <div className="cardContent">
            <img className="icon" src={linkedInImage} />
            <p className="iconText">LinkedIn</p>
          </div>
        </a>
        <a className="cardLogo" href="https://github.com/Yooncw0223" target="_blank">
          <div className="cardContent">
            <img className="icon" src={gitImage} />
            <p className="iconText">GitHub</p>
          </div>
        </a>
      </div>

      
    </div>
  );
}
