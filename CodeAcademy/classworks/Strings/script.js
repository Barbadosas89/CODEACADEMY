let userInfoOutput = document.getElementById("main");
let user = {name: "Donatas", surname: "Balionis" };
userInfoOutput.innerHTML =  `<h2>User Information</h2>
<p>User name is ${user.name}, and surname is ${user.surname}</p>`;
