import './App.css'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Hero from './components/sections/Hero'
import Skill from './components/sections/Skills'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <ProjectsSection/>
    <ExperienceSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
