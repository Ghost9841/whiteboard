import SearchButton from "@/components/Search";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCanvasOpen, setIsCanvasOpen] = useState(true);
  const sidebarClass = `fixed flex flex-col ${isCanvasOpen ? 'w-72 md:w-64' : 'w-0 md:w-16'
    } bg-gray-50 transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <>
      {isOpen ?

        <div className={`${sidebarClass}`}>
          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-medium text-gray-700 ">Layers</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-4" onClick={() => { setIsOpen(false) }}>
                <ChevronLeft className="w-3 h-3" />
              </Button>
            </div>
          </div>
          <SearchButton />
        </div> :
        <div className={`${sidebarClass}`}>
          Closed
          <Button variant="ghost" size="sm" className="h-6 w-6 p-4" onClick={() => { setIsOpen(true) }}>
                <ChevronLeft className="w-3 h-3" />
              </Button>
        </div>
      }
    </>
  )
}

export default Sidebar
