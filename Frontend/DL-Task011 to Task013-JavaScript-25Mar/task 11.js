let str = 'background-color';
function camelize(str){
    let arr = str.split('-');
    let hold= "";
    arr.forEach((data,index) =>{
        if(index!=0){
            data=data.charAt(0).toUpperCase() + data.slice(1);
            hold+=data;
        }
        
    })
    return hold;
}
console.log(camelize(str))