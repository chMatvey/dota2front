const initialState = [
    {
        "id":"1",
        "name":"Abaddon",
        "role":"Support-Carry-Durable",
        "attack":"melee",
        "type":"power",
        "img":"/img/heroes/abaddon/m_icon.jpg",
        "typeImg":"/img/icon-str.png",
    },
    {
        "id":"1",
        "name":"Abaddon",
        "role":"Support-Carry-Durable",
        "attack":"melee",
        "type":"power",
        "img":"/img/heroes/abaddon/m_icon.jpg",
        "typeImg":"/img/icon-str.png",
    }
];

export default function hero(state = [], action) {
    switch(action.type){
        case 'ADD_HERO':{
            return[
                ...state,
                action.payload
            ]
        }
        case 'DELETE_HERO':{
            state = [];
            break;
        }
        default: break;
    }
    return state
}
