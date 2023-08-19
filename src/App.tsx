import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import * as contentManager from './assets/posts/manager';

const ABOUT = lazy(() => import('./pages/about'));
const HOME = lazy(() => import('./pages/home'));
const CONTENT = lazy(() => import('./components/contentpage'));

function App() {
  // managing contents
  const contents = contentManager.default();
  const contentRoutes = []; 
  for (const key in contents) {
    contentRoutes.push(
      <Route path={"/" + key} element={<CONTENT contents={contents[key]}/>}/>
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
