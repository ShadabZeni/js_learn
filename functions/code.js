function usermsg(username){
    if(username === undefined ){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


console.log(usermsg())