import NavBar from "@/features/navbar/pages/NavBar";
import Sidebar from "@/features/sidebar/pages/Sidebar";
import { useState } from "react";

const Layout = () => {
    const [isCanvasOpen, setIsCanvasOpen] = useState(true);
    const [isDocsOpen, setIsDocsOpen] = useState(false);
    const [zoom, setZoom] = useState(100);

    return (
        <div className="flex flex-col h-screen">
            <NavBar
                isCanvasOpen={isCanvasOpen}
                isDocsOpen={isDocsOpen}
                zoom={zoom}
                setIsCanvasOpen={setIsCanvasOpen}
                setIsDocsOpen={setIsDocsOpen}
                setZoom={setZoom}
            />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1"></main>
            </div>
        </div>
    );
};

export default Layout