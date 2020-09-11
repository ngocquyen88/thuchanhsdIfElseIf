let userName=prompt("Who's there? ").toLowerCase();

if(userName==="admin") {
    let password = prompt("Password: ").toLowerCase();
    if (password === "themaster") {
        alert("Welcome!");
    } else if (password === null) {
        alert("Cancelled!");
    } else {
        alert("I don't now you!");
    }
}
else if(userName==="themaster"){
    alert("Welcome!");
}
else if(userName===null){
    alert("Cancelled!");
}
else {
    alert("I don't now you!");
}
