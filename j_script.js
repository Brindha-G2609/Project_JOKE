// const jokecontainer = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
// let getjoke = ()=>
//     {
//      jokecontainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         jokecontainer.textcontent =`${item.joke}`;
//         jokecontainer.classList.add("fade");

//     });
// }

// btn.addEventListener("click",getjoke);
//  getjoke();

 const jokecontainer = document.getElementById("joke");
 const btn = document.getElementById("btn");
 const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
 
 let getjoke = () => {
     jokecontainer.classList.remove("fade");
     fetch(url)
         .then(data => data.json())
         .then(item => {
             // Check if the joke is single or twopart
             if (item.type === "single") {
                 jokecontainer.textContent = item.joke; // For single jokes
             } else {
                 jokecontainer.textContent = `${item.setup} - ${item.delivery}`; // For twopart jokes
             }
             jokecontainer.classList.add("fade");
         })
         .catch(error => {
             jokecontainer.textContent = "Oops! Something went wrong. Please try again later.";
         });
 };
 
 btn.addEventListener("click", getjoke);
 getjoke();
 