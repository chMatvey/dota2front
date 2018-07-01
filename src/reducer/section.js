export default function section(state = [], action) {
    switch(action.type){
        case 'ADD_SECTION':{
            return[
                ...state,
                action.payload
            ]
        }
        case 'DELETE_SECTION':{
            state = [];
            break;
        }
        default: break;
    }
    return state
}
