import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPage from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    // <div>
    //   <Introduction />
    // </div>

    <div>
      <HeaderPage />
      <Routes>
        <Route path="/" element={ <Introduction /> } />
        <Route path="/about" element={ <About />} />
        <Route path="/experience" element={ <Experience />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
    
  );
}

export default App;
