import NavBar from "@/features/navbar/pages/NavBar";
import { useState } from "react";


const Layout = () => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(true);
    const [isDocsOpen, setIsDocsOpen] = useState(false);
    const [zoom, setZoom] = useState(100); 


  return (
    <div>
      <NavBar 
        isCanvasOpen={isCanvasOpen} 
        isDocsOpen={isDocsOpen} 
        zoom={zoom}
        setIsCanvasOpen={setIsCanvasOpen} 
        setIsDocsOpen={setIsDocsOpen} 
        setZoom={setZoom}  
        />
    </div>
  )
}

export default Layout
