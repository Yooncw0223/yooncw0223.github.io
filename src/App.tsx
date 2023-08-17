import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import { content } from './assets/posts/projects/bar';
import reactMarkdown from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const ABOUT = lazy(() => import('./pages/about'));
const HOME = lazy(() => import('./pages/home'));
const CONTENT = lazy(() => import('./components/contentpage'));

function App() {
  return (
    <div className="App">
      <Navbar/>

      <hr className="line"/>
      
      <button onClick={()=>console.log(content)}>test me</button>
      <ReactMarkdown children={content} />

      <Suspense fallback={<>Loading...</>}>
        
        <Routes>
          <Route path="/" element={<HOME/>}/>
          <Route path="/about" element={<ABOUT/>}/>
          <Route path="/projects" element={<CONTENT contentPath={"./assets/posts/projects"} />}/>
          <Route path="/papers" element={<CONTENT contentPath={"./assets/posts"} />}/>
          <Route path="/misc" element={<CONTENT contentPath={"./assets/posts"} />}/>
        </Routes>

      </Suspense>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWithRouter;
