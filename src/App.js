import './App.css';
import { projects } from './data/data'
import ProjectList from './components/ProjectList';
import Navebar from './components/Navbar'
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navebar />
      <About />
      <ProjectList projects={projects}/>
      {/* <h1> ELMI  Porfolio </h1> */}
    </div>
  );
}

export default App;
