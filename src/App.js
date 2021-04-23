import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageContainer } from "./Pages/PageContainer";
import { WDProjects } from "./Pages/WDProjects/WDProjects"
import { UXProjects } from "./Pages/UXProjects/UXProjects";
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PageContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="/wdportfolio" element={<WDProjects />} />
              <Route path="/uxportfolio" element={<UXProjects />} />
              <Route path="/about" element={<About />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;