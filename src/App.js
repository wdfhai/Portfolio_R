import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageContainer } from "./pages/PageContainer";
import { WDProjects } from "./pages/wdProjects/WDProjects"
import { UXProjects } from "./pages/uxProjects/UXProjects";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
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