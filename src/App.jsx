import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/background';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
          maxHeight: "500px",
          width: "100%",
        }}
      >
        <Background
          count={200}       // number of balls
          gravity={0.7}     // falling speed
          friction={0.8}    // slows balls when rolling
          wallBounce={0.95} // bounce effect
          followCursor={true} // balls follow your mouse
        />
      </div>
    </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;