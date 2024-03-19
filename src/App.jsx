import { useEffect } from "react";
import ColorItem from "./ColorItem";
function App() {
  const colors = ['red','blue',"Orange","Lime","Yellow","Cyan"]
  useEffect(()=>{
    const currentColor = localStorage.getItem('color') 
    setTheme(currentColor)
  },[])
  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg',color)
  }
  const setColor = (e) =>{
    const currentColor = e.target.style.getPropertyValue('--bg');
    setTheme(currentColor);
    localStorage.setItem("color", currentColor);  
  }
  return ( 
    
    <div className="App">
      <div className="color-switcher">
        <div className="color-list">
          {colors.map((color, idx)=> <ColorItem key={idx} setColor={setColor} color={color}/>)}
        </div>
      </div>
    </div>
   );
}

export default App;