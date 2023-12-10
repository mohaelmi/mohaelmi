import './App.css';
import { projects } from './data/data'
import ProjectList from './components/ProjectList';
import Navebar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navebar />
      <ProjectList projects={projects}/>
      {/* <h1> ELMI  Porfolio </h1> */}
    </div>
  );
}

export default App;
