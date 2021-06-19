export function setName(name) {
   return {
      type:'SET_NAME',
      name: name
   }
}

export function setPlusMinus(num, plus) {
   if (plus === 'plus') {
      return {
         type:"SET_PLUS",
         num: num
      }
   } else return {
         type: "SET_MINUS",
         num:num
      }
}