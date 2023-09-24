// find frequency of string
function occurance(str){
    var occ={};
    str.split("").forEach((element) => {
        if(occ.hasOwnProperty(element)===false){
            occ[element] =1;
        }else{

            occ[element]++
        }
        
    })
    return occ;

}
const result=occurance("elephent")
console.log(result  )