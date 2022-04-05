let user = {
    firstName: "Namratha",
    surame: "R",
  }

  user.firstName="Nimmi"
  delete user.surame;

   for(let name in user){
  console.log(user[name]);
  }
  