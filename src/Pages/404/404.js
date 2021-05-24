import { Footer } from "../../Components/Footer/Footer";
import './404.css';

export const NotFound = () => {

  return (
    <>
      <div className="jumbotron" id="jumbo">
        <p id="text">Page does not exist, oh weary traveller :( </p>
      </div>
      <Footer />
    </>
  )
}