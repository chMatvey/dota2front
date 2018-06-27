const initialState = [
    {
        "id":"1",
        "href":"/heroes/abaddon/",
        "img":"/img/heroes/abaddon/m_icon.jpg",
        "type":"power",
        "typeImg":"/img/icon-str.png",
        "title":"abaddon",
        "role":"Support-Carry-Durable",
        "attackType":"melee",
        "tooltipe":"Abaddon",
        "meta":2,
        "position":"3-4",
    },
    {
        "id":"1",
        "href":"/heroes/abaddon/",
        "img":"/img/heroes/abaddon/m_icon.jpg",
        "type":"power",
        "typeImg":"/img/icon-str.png",
        "title":"abaddon",
        "role":"Support-Carry-Durable",
        "attackType":"melee",
        "tooltipe":"Abaddon",
        "meta":2,
        "position":"3-4",
    }
];

export default function hero(state = initialState, action) {
    switch(action.type){
        case 'ADD_HERO':{
            state = [];
            return[
                ...state,
                action.payload
            ]
        }
    }
    return state
}
