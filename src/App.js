import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skill from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scroll from './components/scrollup/Scroll';

function App() {
  return (
    <>

    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skill />
      <Services />
      <Qualification />
      <Contact />
    </main>
    <Footer />
    <Scroll />

    </>
  );
}

export default App;
