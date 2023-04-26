
 const initialState =[]
 
export default function TodoReducer(state = initialState , action) {
 switch(action.type) {
    case 'ADD_TODO':
      const newTodo = action.payload
       const updatedSatate = [...state, newTodo]
       console.log(updatedSatate)
       return updatedSatate
      
       case "TOGGLE_TODO":
         const updatedStateWithToggle = state.map((todo, index) => {
           if (index === action.payload) {
             todo.completed = !todo.completed;
           }
           return todo;
         });
         return updatedStateWithToggle;




     case 'REMOVE_TODO':
      const index =0;
      const unpdatedDltTodo= initialState.splice( index,1)
           return unpdatedDltTodo;
     
     default:
         return state;
}
  
}
