import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCanvasOpen, setIsCanvasOpen] = useState(true);
  const sidebarClass = `fixed flex flex-col ${isCanvasOpen ? 'w-72 md:w-64' : 'w-0 md:w-16'
    } bg-gray-50 transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <>
      {isCanvasOpen ?

        <div className={`${sidebarClass}`}>
          Open
        </div> :
        <div className={`${sidebarClass}`}>
          Closed
        </div>
      }
    </>
  )
}

export default Sidebar
