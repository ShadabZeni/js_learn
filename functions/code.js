function usermsg(username){
    if(username === undefined ){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(usermsg("rahul"))

const user = {
    name: "sid",
    price : 99
}

function handleObj(obj){
    console.log(`username is ${obj.name} and price is ${user.price}`);

}

// handleObj(user)

// Immediatly Invoked Fucntion Expressions (IIFE)

(function chai(){
    console.log(`DB connected`);
})();
