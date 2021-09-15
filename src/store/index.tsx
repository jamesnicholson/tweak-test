import React, {useReducer} from 'react'
import reducer from './reducers'
import AppContext, {initialState} from './context'
import { ActionType } from './enums';

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = {
      state:{...state},
      setImage: (image: string) => { dispatch({ type: ActionType.SET_IMAGE, payload: image }) },
    }
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    )
  }
  export default AppProvider