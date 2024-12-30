import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Domain from "./components/Domain";
import Events from "./components/Events";
import Social from "./components/Socials"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Domain />
            <Events />
            <Social />
          </>
        } />
        
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
