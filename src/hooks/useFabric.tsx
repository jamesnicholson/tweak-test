import fabric from 'fabric';
import React, { useRef, useCallback } from 'react';
const useFabric = (onChange:any) => {
    const fabricRef = useRef<fabric.fabric.Canvas>();
    const disposeRef = useRef<fabric.fabric.Canvas>();

    return useCallback((node) => {
        if (node) {
            fabricRef.current = new fabric.fabric.Canvas(node);
            if (onChange) {
                disposeRef.current = onChange(fabricRef.current);
            }
        }
        else if (fabricRef.current) {
            fabricRef.current.dispose();
            if (disposeRef.current) {
               // disposeRef.current();
                disposeRef.current = undefined;
            }
        }
    }, []);
};
export default useFabric