import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import * as contentManager from './assets/posts/manager';

const ABOUT = lazy(() => import('./pages/about'));
const HOME = lazy(() => import('./pages/home'));
const CONTENT = lazy(() => import('./components/contentpage'));
const NOTFOUND = lazy(() => import('./pages/notfound'));

export default function App() {
  // managing contents
  const contents = contentManager.default();
  const contentRoutes = []; 
  for (const key in contents) {
    contentRoutes.push(
      <Route path={"/" + key} element={<CONTENT contents={contents[key]} />}/>
    )
  };
  

  return (
    <div className="App">
      <Navbar/>

      <hr className="line"/>

      <Suspense fallback={<>Loading...</>}>
        
        <Routes>
          <Route path="/" element={<HOME/>}/>
          <Route path="/about" element={<ABOUT/>}/>

          {contentRoutes}

          <Route path="*" element={<NOTFOUND/>} />

          

        </Routes>

      </Suspense>
    </div>
  );
}


