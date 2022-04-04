import { DRESSING, GET_POSITION } from '../types/dressingRoomType'
export const actDressing = (clothes) => {
    return {
        type: DRESSING,
        clothes
    }
}