import { DRESSING, GET_POSITION } from '../types/dressingRoomType'


const initialState = {
    outFit: [{
        "id": "background_2",
        "type": "background",
        "name": "Background 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "./images/background/background2_show.jpg",
        "imgSrc_png": "./images/background/background2.jpg"
    },]
};
const dressingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRESSING: {
            let { clothes } = action;
            let newOutFit = [...state.outFit];
            if (state.outFit.length === 0) {
                newOutFit.push(clothes);
            } else {
                let index = newOutFit.findIndex(item => item.type === clothes.type);
                if (index != -1) {
                    newOutFit[index] = clothes;
                } else {
                    newOutFit.push(clothes);
                }
            }
            return { ...state, outFit: newOutFit }
        }
    }
    return { ...state }
}
export default dressingRoomReducer;