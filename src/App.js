import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageContainer } from "./Pages/PageContainer/PageContainer";
import { WDProjects } from "./Pages/WDProjects/WDProjects"
// import { UXProjects } from "./Pages/UXProjects/UXProjects";
import { About } from "./Pages/About/About";
import { Blogs } from "./Pages/Blog/Blog";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/404/404";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PageContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="/wdportfolio" element={<WDProjects />} />
              <Route path="/uxportfolio" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;