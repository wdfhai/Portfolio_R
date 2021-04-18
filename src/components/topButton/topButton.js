import { useState } from "react";
import {TiArrowUpThick} from 'react-icons/ti';
import './topButton.css';


export const TopButton = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 150){
      setShowScroll(false)
    }
  };
  
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  window.addEventListener('scroll', checkScrollTop)

  return (
    <TiArrowUpThick 
      size="56px"
      className="scrollTop" 
      onClick={scrollTop} 
      style={{display: showScroll ? 'flex' : 'none'}}/>
  );
}