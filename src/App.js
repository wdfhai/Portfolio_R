import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { WDProjects } from "./components/wdProjects/WDProjects"
import { UXProjects } from "./components/uxProjects/UXProjects";
import { About } from "./components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav/>
      <WDProjects/>
      <UXProjects/>
      <About/>
    </>
  );
}

export default App;