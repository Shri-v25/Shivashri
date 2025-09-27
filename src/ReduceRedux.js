export const initialState={count:[]};

function ReduceRedux(state,action){
   switch(action.type){
    case "INCRE":
        return {count:[...state.count,action.product]};
    
    case "DECRE":
        let index = state.count.findIndex(item=> item.id === action.id);
            const updateCount =[...state.count]
            updateCount.splice(index,1);
            return {count: updateCount};

    case "RESET":
            return {count:[]}

    default:
        return state

}
}
export default ReduceRedux;