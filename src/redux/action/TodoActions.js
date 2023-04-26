export function Add_Todo(text ){
    return{
        type: 'ADD_TODO',
        payload : text,
            
    };
}

export function Toggle_Todo(){
    return{
        type: 'TOGGLE_TODO',
        payload: Id,
            
    };
}
export function Remove_Todo(){
    return{
        type: 'REMOVE_TODO',
        payload: Id,
            
    };
}