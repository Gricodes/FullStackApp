let initialState = {
    dialogsData: [
        {id: 1, name: 'Dina'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'David'},
        {id: 5, name: 'Jon'},
    ],
    massagesData: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you'},
        {id: 3, massage: 'React'},
    ],
};
export const sendMassageAC = (newMassageTextArea)=>{
    return{
        type: 'SEND_MASSAGE',
        newMassageTextArea:newMassageTextArea
    }
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_MASSAGE": // the same push spread operator ====>   [...state.massagesData, {a:4, b:text,}]
            return {
                ...state,
                massagesData: [...state.massagesData, {id: 4, massage: action.newMassageTextArea}],
            };
        default:
            return state;
    }
};
export default dialogReducer;