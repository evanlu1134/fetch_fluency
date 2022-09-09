import fetch from "node-fetch"
//Task 1
const logPost = (postId) => {
    //endpoints* - users/posts
    // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()).then(json => console.log(json))
    //title and post aka body
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()).then(json => {
        console.log(`Title: ${json.title}`)
        console.log(`Posts: ${json.body}`)
})
}
logPost(1);

//Task 2
const logUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => json.forEach(e => console.log("All the names",e.name)));
}
logUsers()

//task 3
const getBizUsers = () => {
    const bizArray = [];
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => { json.forEach(e => {let email = e.email.split("."); if (email.includes("biz")){
       bizArray.push(email)
    }
});
console.log(bizArray);
})
}
getBizUsers()

//task 4
const longestPost = () => {
    let max = -Infinity
    let maxPost = ""
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => {
        json.forEach(e => {
        if(e.body.length > max){
            //find the max length set to max
            max = e.body.length
            console.log("The max goes", e.body.length)
            //just like obj grab from body derive the longest
            maxPost = e.body
        }
    })
    console.log(`The longest Post states: ${maxPost} with ${maxPost.length}`)
})
}
longestPost()

//task 5
const getCompletedTasks = () => {
    const completed = new Array ()
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json()).then(json => { json.forEach(e => {if(e.completed === true){
    completed.push(e);
    }
});
console.log(completed);
})
}
getCompletedTasks()