import {ActionType} from './enums'
export interface ISetImage {
    type: ActionType.SET_IMAGE;
    payload: String
  }
export const setAddFrame = (payload: String): ISetImage => ({
    type: ActionType.SET_IMAGE,
    payload
});
type TAction = ISetImage;
export default TAction