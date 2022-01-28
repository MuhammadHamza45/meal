// latest Meal Function
function getLatestMeal() {

    const xhr = new XMLHttpRequest();
    xhr.open("Get", "latestMeal.json");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        const data = datax.meals;
        console.log(data);
        var outPut = '';
        for (let i in data) {
            outPut += ` 
            <div style="margin:0 0 10px 0;" class="col-lg-3">
            <a href=""><img class="img-style" src="${data[i].strMealThumb}"></a>
            <a href="" style="color:#d57d1f; font-size:25px">${data[i].strMeal}</a>
             </div>
    `
        }

        document.getElementById("latest-row").innerHTML = outPut;
        // document.getElementById("popular-row").innerHTML=outPut;
        // document.getElementById("randon-row").innerHTML=outPut;
        // document.getElementById("ingredient-row").innerHTML=outPut;

    }

    xhr.send();
}



// popular Meal Function
function getPopularMeal() {

    const xhr = new XMLHttpRequest();
    xhr.open("Get", "popularMeal.json");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        const data = datax.categories;
        console.log(data);
        var outPut = '';
        for (let i in data) {
            outPut += ` 
            <div style="margin:0 0 10px 0;" class="col-lg-3">
            <a href=""><img class="img-style" src="${data[i].strCategoryThumb}"></a>
            <a href="" style="color:#d57d1f; font-size:25px">${data[i].strCategory}</a>
             </div>
    `
        }

        // document.getElementById("latest-row").innerHTML=outPut;   
        document.getElementById("popular-row").innerHTML = outPut;
        // document.getElementById("randon-row").innerHTML=outPut;
        // document.getElementById("ingredient-row").innerHTML=outPut;

    }

    xhr.send();
}





// Rendom Meal function
function getRendomMeal() {

    const rm = new XMLHttpRequest();
    rm.open("Get", "randomMeal.json");
    rm.onload = function () {
        const datax = JSON.parse(rm.responseText);
        const data = datax.meals;
        console.log(data);
        var outPut = '';
        for (let i in data) {
            outPut += ` 
            <div style="margin:0 0 10px 0;" class="col-lg-3">
            <a href=""><img class="img-style" src="${data[i].strMealThumb}"></a>
            <a href="" style="color:#d57d1f; font-size:25px">${data[i].strMeal}</a>
             </div>
    `
        }

        // document.getElementById("latest-row").innerHTML=outPut;   
        // document.getElementById("popular-row").innerHTML=outPut;
        document.getElementById("randon-row").innerHTML = outPut;
        // document.getElementById("ingredient-row").innerHTML=outPut;

    }

    rm.send();
}



// Random Ingredients Meal Function
function getRandomIngredientsMeal() {

    const xhr = new XMLHttpRequest();
    xhr.open("Get", "randomIngredients.json");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        const data = datax.categories;
        console.log(data);
        var outPut = '';
        for (let i in data) {
            outPut += ` 
            <div style="margin:0 0 10px 0;" class="col-lg-3">
            <a href=""><img class="img-style" src="${data[i].strCategoryThumb}"></a>
            <a href="" style="color:#d57d1f; font-size:25px">${data[i].strCategory}</a>
             </div>
    `
        }

        // document.getElementById("latest-row").innerHTML=outPut;   
        // document.getElementById("popular-row").innerHTML=outPut;
        // document.getElementById("randon-row").innerHTML=outPut;
        document.getElementById("ingredient-row").innerHTML = outPut;

    }

    xhr.send();
}




// Country Flag Function
function getCountryFlag() {

    const xhr = new XMLHttpRequest();
    xhr.open("Get", "country.json");
    xhr.onload = function () {
        const datax = JSON.parse(xhr.responseText);
        const data = datax.country;
        console.log(data);
        var outPut = '';
        for (let i in data) {
            outPut += ` 
            <div style="margin:0 0 10px 0;" class="col-lg-1">
            <a href=""><img class="img-country-style" src="${data[i].cunFlagThumb}"></a>
            </div> 
    `
        }

        // document.getElementById("latest-row").innerHTML=outPut;   
        // document.getElementById("popular-row").innerHTML=outPut;
        // document.getElementById("randon-row").innerHTML=outPut;
        // document.getElementById("ingredient-row").innerHTML=outPut;
        document.getElementById("country").innerHTML = outPut;
    }

    xhr.send();
}



getLatestMeal();
getPopularMeal();
getRendomMeal();
getRandomIngredientsMeal();
getCountryFlag();
