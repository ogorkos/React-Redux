export default (state, action) => {
   switch (action.type) {
      case "SET_NAME":
         return {
            ...state, name: action.name
         } 
      case "SET_PLUS":
         return {
            ...state, num: action.num+1
         }         
      case "SET_MINUS":
         return {
            ...state, num: action.num-1
         }         
   
      default:
         return state
   }
}