import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './assets/images/catLogo2.gif';
import './App.css';
import Navbar from './components/navbar';

const ABOUT = lazy(() => import('./pages/about'));
const HOME = lazy(() => import('./pages/home'));

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Suspense fallback={<>Loading...</>}>
        
        <Routes>
          <Route path="/" element={<HOME/>}/>
          <Route path="/about" element={<ABOUT/>}/>
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
