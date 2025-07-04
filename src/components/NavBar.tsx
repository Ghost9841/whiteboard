import { Settings, Share, Share2, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";
import logo from '@/assets/logo.jpg';
import { TabsList, TabsTrigger, Tabs, } from "./ui/tabs";

const NavBar = () => {
    const [isCanvasOpen, setIsCanvasOpen] = useState(true);
    const [isDocsOpen, setIsDocsOpen] = useState(false);
    const [zoom, setZoom] = useState(100);
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-12 h-12 rounded-full bg-white" />
                    <h1 className="">WhiteBoard</h1>
                </div>
                <span className="">|</span>
                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                    <Tabs defaultValue="account" className="">
                        <TabsList className="grid w-fit grid-cols-2">
                            <TabsTrigger value="canvas" className={`px-4 ${isCanvasOpen ? "bg-gray-50 border-1 border-gray-400" : "text-gray-400"}`} onClick={() => { setIsCanvasOpen(true); setIsDocsOpen(false); }}>Canvas</TabsTrigger>
                            <TabsTrigger value="document" className={`px-4 ${isDocsOpen ? "bg-gray-50 border-1 border-gray-400" : "text-gray-400 "}`} onClick={() => { setIsCanvasOpen(false); setIsDocsOpen(true); }}>Document</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                    <Button variant={"ghost"} className="hover:bg-gray-100 cursor-pointer" onClick={() => zoom > 0 ? setZoom(zoom - 10) : null}> <span><ZoomOut /></span> </Button>
                    <Button variant={"ghost"} className="hover:bg-gray-200 transition-all cursor-pointer"> <span>{zoom}%</span> </Button>
                    <Button variant={"ghost"} className="hover:bg-gray-100 cursor-pointer" onClick={() => zoom < 500 ? setZoom(zoom + 10) : null}> <span><ZoomIn /></span> </Button>
                </div>
                <div className="gap-2 flex items-center">
                    <Button variant={"ghost"} className="hover:bg-gray-100 cursor-pointer"> <span><Share2 /></span> Share </Button>
                    <Button variant={"ghost"} className="hover:bg-gray-100 cursor-pointer"> <span><Share /></span> Export </Button>
                    <Button variant={"ghost"} className="hover:bg-gray-100 cursor-pointer">
                        <Settings className="w-6 h-6 cursor-pointer hover:bg-gray-100 " />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default NavBar

