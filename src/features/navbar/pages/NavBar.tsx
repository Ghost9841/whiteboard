import { Settings, Share, Share2, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "../../../components/ui/button"
import logo from '@/assets/logo.jpg';
import { TabsList, TabsTrigger, Tabs, } from "../../../components/ui/tabs";
import type { NavbarProps } from "../types/types";

const NavBar = ({ isCanvasOpen, isDocsOpen, zoom, setIsCanvasOpen, setIsDocsOpen, setZoom }: NavbarProps) => {

    return (
        <>
            <div className="flex items-center justify-between p-4 mb-0">
                <div className="flex items-center gap-2">

                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-12 h-12 rounded-full bg-white" />
                        <h1 className="">WhiteBoard</h1>
                    </div>
                    <span className="text-gray-100">|</span>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
                        <Tabs defaultValue="" className="">
                            <TabsList className="grid w-fit grid-cols-2">
                                <TabsTrigger value="canvas" className={`px-4 cursor-pointer   ${isCanvasOpen ? "bg-gray-50 border-1 border-gray-400" : "text-gray-400"}`} onClick={() => { setIsCanvasOpen(true); setIsDocsOpen(false); }}>Canvas</TabsTrigger>
                                <TabsTrigger value="document" className={`px-4 cursor-pointer${isDocsOpen ? "bg-gray-50 border-1 border-gray-400" : "text-gray-400 "}`} onClick={() => { setIsCanvasOpen(false); setIsDocsOpen(true); }}>Document</TabsTrigger>
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
            <div className="border-gray-100 border-b-1 mt-0"></div>
        </>
    )
}

export default NavBar

