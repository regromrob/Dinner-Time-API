document.querySelector('button').addEventListener('click', getFetch)

async function getFetch(){
    try{
        const choice = document.querySelector('input').value
        const url =`https://api.edamam.com/search?q=${choice}&app_id=%75ab452e%`
        const food = await fetch(url)
        const foodData = await food.json()
        console.log(foodData)
        loopThruAPI(foodData)
    
}catch(err){
        console.log(`you're error is ${err}`)
    }
}

function loopThruAPI(foodData){
    document.querySelector("#content").innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${foodData.hits[0].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodData.hits[0].recipe.label}</h5>
            <ul>
                <li class="card-text">${foodData.hits[0].recipe.ingredientLines[0]}</li>
                <li class="card-text">${foodData.hits[0].recipe.ingredientLines[1]}</li>
                <li class="card-text">${foodData.hits[0].recipe.ingredientLines[2]}</li>
            </ul>
            <a href="${foodData.hits[0].recipe.url}" class="btn btn-primary">See More</a>
        </div>
        </div>
        `    
}
// let myLabel = []
// for(let hits of Object.values(foodData.hits)){
//    myLabel.push(hits.recipe.label)
//    myLabel.push(hits.recipe.image)
//        for(let recipe of Object.values(hits.recipe)){
        
//         document.querySelector('h2').innerText = myLabel
       
//     }
// }






// {/* <ul>
//                 <li class="card-text">${foodData.hits[0].recipe.ingredientLines[0]}</li>
//                 <li class="card-text">${foodData.hits[0].recipe.ingredientLines[1]}</li>
//                 <li class="card-text">${foodData.hits[0].recipe.ingredientLines[2]}</li>
//                 <li class="card-text">${foodData.hits[0].recipe.ingredientLines[3]}</li>
//             </ul> */}



//             <div class = "card" style= "width: 18rem;">
//         <img src="${foodData.hits[0].recipe.image}" class="card-img-top" alt="..."
//         <div class="card-body"
//             <h5 class= "card-title">${foodData.hits[0].recipe.label}</h5>
//             <p class= "card-text">Some quick example blah blah</p>
//             <a href="${foodData.hits[0].recipe.url}" class="btn btn-primary">See More</a>
//         </div>
//     </div>`