import { FC, useContext, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import AppContext from "../../store/context";
interface IImageTools {

};
const ImageTools: FC<IImageTools> = () => {
    const {state} = useContext(AppContext);
    const {image} = state;
    const { editor, onReady } = useFabricJSEditor();
    const onAddCircle = () => {
        editor?.addCircle();
    };
    const onAddRectangle = () => {
        editor?.addRectangle();
    };

    const filters = {
        brightness: new fabric.Image.filters.Brightness(),
        saturation: new fabric.Image.filters.Saturation(),
        contrast: new fabric.Image.filters.Contrast(),
      }
      
    useEffect(() =>{ 

        
        if(image){
            editor?.canvas.clear()
            const img = new Image();
            img.crossOrigin = "";
            new Promise(res => {
              img.onload = res;
              img.src = image;
            });
            const image2 = new fabric.Image(img);
            
            if(image2){
                var filter = new fabric.Image.filters.Brightness({
                    brightness: 0.54
                });
                image2.filters?.push(filter);
                image2.applyFilters();
                editor?.canvas.add(image2)
            }
        }
    },[image]);
    return(
        <div>
            <button onClick={onAddCircle}>Add circle</button>
            <button onClick={onAddRectangle}>Add Rectangle</button>
            <div style={{border: '1px solid red'}}>
                <FabricJSCanvas className="sample-canvas" onReady={onReady} />
            </div>
        </div>
    )
}
export default ImageTools;

