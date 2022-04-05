let arrObj = [
    { name: "Shantanu", age: 27 },
    { name: "Vignesh", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Goutham", age: 26 },
  ]; // ['Shantanu','Vignesh','Priya', 'Goutham']

  let res =[];
  let array= arrObj.map((data)=>{
      return data.name;
  })
  console.log(array);