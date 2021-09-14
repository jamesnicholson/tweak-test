import { useState, FC, useContext, useRef, useEffect } from "react";
import styled from 'styled-components';
import { GiPhotoCamera } from "react-icons/gi";
interface IUploadImageProps {

};
const Wrapper = styled.div`
    text-align: center;
`;

const UploadWrapper = styled.div`
    width: 100%;
    max-width: 200px;
    background-color: #000;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    margin: 15px auto;
    color:#fff;
    outline: 2px solid #000;
    border: 3px solid #fff;

    > input {
       display: none;
    }
    :hover {
        color: #000;
        background-color: #fff;
        border: 3px solid #fff;
        outline: 2px solid #000;
    }
`;

const CameraWrapper = styled.div`
    margin-top: 25px;
    font-size:2em;
`;

const UploadLabel = styled.p`
    width: 100%;
    margin: 0px 0px 50px;
    text-align: center;
    display: block;
    
`;

const PreviewImage = styled.img`
    width: 100%;
    padding: 5px;
`;

const PreviewWrapper = styled.div`
    margin: 25px auto;
    width:100%;
    max-width:500px;
`
const ChangeBackground = styled.div`
    width: 100%;
    font-size: 14px;
    text-align: right;
    text-decoration: underline;
    padding: 5px 6px;
    cursor: pointer;
    color: #757642;
    :hover {
        color: #000;
    }
}
`;
const ChangeBackgroundWrapper = styled.div`
   width:100%;
   > input {
        display: none;
   }
`
const UploadImage: FC<IUploadImageProps> = () => {
    const [picture, setPicture] = useState<string>("");
    const inputCBRef =  useRef<any>(null);
    const inputRef =  useRef<any>(null);


    const handleFile = (e: any) => {
        const content = e.target.result;
        var image = new Image();
        image.src = content;
        image.onload = function() {
            
        };
       setPicture(content);
   
    }
    const handleError = (e: any) => {
        console.log(e)
    }
    const handleChangeFile = (file: any) => {
        let fileData = new FileReader();
        fileData.onloadend = handleFile;
        fileData.onerror = handleError;
        fileData.readAsDataURL(file);
    }
    const triggerInput = () => {
      if(inputRef.current) {
        inputRef.current.click();
      }
    }
    const triggerCBInput = () => {
        if(inputCBRef.current) {
            inputCBRef.current.click();
        }
    }

  return <Wrapper>
        {picture ? 
            <PreviewWrapper>
                <PreviewImage src={picture} />
                <ChangeBackgroundWrapper>
                     <ChangeBackground onClick={triggerCBInput}>Change Image</ChangeBackground>
                     <input ref={inputCBRef} type="file" accept=".png,.jpg" onChange={e => 
                            e.target.files ? handleChangeFile(e.target.files[0]) : null
                        } /> 
                </ChangeBackgroundWrapper>
               
            </PreviewWrapper>
            :
            <UploadWrapper onClick={triggerInput}>
                <CameraWrapper>
                        <GiPhotoCamera />

                </CameraWrapper>

               
                <input ref={inputRef} type="file" accept=".png,.jpg" onChange={e => 
                    e.target.files ? handleChangeFile(e.target.files[0]) : null
                } /> 
                <UploadLabel>Upload your image</UploadLabel>
            </UploadWrapper>
             }
        </Wrapper>
};

export default UploadImage;