import { createContext } from 'react'
import IState from './interface';

export const initialState: IState =  {
  image: "",
}

const AppContext = createContext<any>({
    state: initialState,
    setImage: () => null,
  });
  
export default AppContext