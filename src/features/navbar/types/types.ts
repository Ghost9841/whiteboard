export interface NavbarProps {
    isCanvasOpen : boolean,
    isDocsOpen : boolean,
    zoom : number,
    setIsCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDocsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}