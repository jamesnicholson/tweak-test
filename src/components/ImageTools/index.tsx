import { FC } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
interface IImageTools {

};
const ImageTools: FC<IImageTools> = () => {

    const { editor, onReady } = useFabricJSEditor();
    const onAddCircle = () => {
        editor?.addCircle();
      };
      const onAddRectangle = () => {
        editor?.addRectangle();
      };

      
    const AddImage = () => {
        fabric.Image.fromURL('my_image.png', function(oImg) { 
            editor?.canvas.add(oImg);
        })
    }
    return(
        <div>
            <div onClick={() => AddImage()}>Add Image</div>
            <button onClick={onAddCircle}>Add circle</button>
            <button onClick={onAddRectangle}>Add Rectangle</button>
            <div style={{border: '1px solid red'}}>
                <FabricJSCanvas className="sample-canvas" onReady={onReady} />
            </div>
        </div>
    )
}
export default ImageTools;

