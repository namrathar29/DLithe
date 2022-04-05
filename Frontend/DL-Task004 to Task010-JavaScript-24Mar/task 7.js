let pageInfo ={
    width:500,
    height:800,
    title:"my page"
}
let total_sum = 0;

for(let amount in pageInfo){
    if(typeof pageInfo[amount]=='number'){
        pageInfo[amount] *= 2;
    }
}
console.log('total amount : ',total_sum);
console.log(pageInfo);