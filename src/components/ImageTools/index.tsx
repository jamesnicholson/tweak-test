import { FC, useContext, useEffect, useState } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import AppContext from "../../store/context";
import styled from "styled-components";
interface IImageTools {

};

const CanvasWrapper = styled.div`
    margin: 25px;
    background: #5050500d;
`;

const CanvasInnerWrapper = styled(FabricJSCanvas)`
   height:500px;
`;
const ToolsWrapper = styled.div`
    background: #e6dada;
    padding: 5px;
    max-width: 300px;
    margin: 0 auto;
`;
const ImageTools: FC<IImageTools> = () => {
    const {state} = useContext(AppContext);
    const [sepia, setSepia] = useState<boolean>(false);
    const [greyScale, setGreyScale] = useState<boolean>(false);
    const [brightness, setBrightness] = useState<boolean>(false);
    const [range, setRange] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);

    const [cImg, setCImg] = useState<HTMLImageElement>();
    
    const {image} = state;
    const { editor, onReady } = useFabricJSEditor();

      useEffect(() => { 
        editor?.canvas.clear();
        const img = new Image();
        img.src = image;
        img.crossOrigin = "";
        img.onload = () => {
            setCImg(img)
        }
      },[image])

    useEffect(() => { 
        if(cImg){
            editor?.canvas.clear();

            const image2 = new fabric.Image(cImg);
               
            if(sepia){
                var filter = new fabric.Image.filters.Sepia({
                    sepia: 0.3
                });
                image2.filters?.push(filter);
                image2.applyFilters();
            }
            if(greyScale){
                var filter = new fabric.Image.filters.Grayscale();
                image2.filters?.push(filter);
                image2.applyFilters();
            }
            if(brightness){
                var filter = new fabric.Image.filters.Brightness({
                    brightness: range
                });
                image2.filters?.push(filter);
                image2.applyFilters();
            }
            editor?.canvas.add(image2)
            editor?.canvas.renderAll(); 
        }
    },[cImg, sepia, brightness, greyScale, range]);

    const handleRange = (event: any) =>{
        setRange( event.target.value);
    }
    const toggleTools = (tool: string) =>{
        if(tool === "sepia"){
            setSepia(true);
            setGreyScale(false);
            setBrightness(false);
        }else if(tool === "greyScale"){
            setSepia(false);
            setGreyScale(true);
            setBrightness(false);

        }else if(tool === "brightness"){
            setSepia(false);
            setGreyScale(false);
            setBrightness(true);
        }
    }

    if(image){
        return(
            <div>
                <p>
                        Toggle between Sepia, GreyScale and brightness.<br/>
                    <u>Brightness can have vairable range</u>
                </p>
                <ToolsWrapper>
                <div>

                    <label>
                        <input type="radio"   checked={sepia} onClick={() => toggleTools("sepia")} />
                        <span>Sepia</span>
                    </label>
                    <label>
                        <input type="radio"  checked={greyScale} onClick={() => toggleTools("greyScale")} />
                        <span>GreyScale</span>
                    </label>
                </div>
                <br/>
                <div>
                    <label>
                        <input type="radio"   checked={brightness} onClick={() => toggleTools("brightness")} />
                        <span>Brightness</span>
                    </label>
                    <label>
                        <span> (between 0 and 50):</span>
                        <input type="range" id="vol" name="vol" min="0" max="1"  step="0.01" defaultValue={0} onChange={handleRange}/>
                    </label>
                </div>
                </ToolsWrapper>
                <CanvasWrapper>
                    <CanvasInnerWrapper onReady={onReady} />
                </CanvasWrapper>
            </div>
        )
    }else{
        return null;
    }

}
export default ImageTools;

