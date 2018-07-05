const initialState = {
    isAuth: false,
    isAdmin: true,
    login: "User"
};

export default function user(state = initialState, action) {
    switch(action.type){
        case 'ADD_MEM':{
            state = action.payload;
            break;
        }
        default: break;
    }
    return state
}
