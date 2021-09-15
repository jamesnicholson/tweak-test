import IState from './interface';
import TActions from './actions';
import {ActionType} from './enums'


function reducer(state: IState, action: TActions): IState {
    const {type, payload} = action
    switch(type){
        case ActionType.SET_IMAGE: 
            return {...state, image: payload}
        default:
            return state
    }
}
export default reducer;
