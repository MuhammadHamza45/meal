 
function getEndPointData(endPointURL,titleKey,imgKey,insertId, callBackFunction){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
        var key = Object.keys(data)[0];
        var objectList=data[key]; 
        
        callBackFunction(objectList,titleKey,imgKey,insertId);
  
    }
    xhr.send();
  }
 


function generateCell(title,img) {

  return `<div style="margin:0 0 10px 0;" class="col-lg-3">
    <a href=""><img class="img-style" src="${img}"></a>
    <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
     </div>`;
}

function bindingData(data,titleKey,imgKey,insertId) {
 


    for(let i=0; i< (data).length;i++){
        var title=data[i][titleKey];
        var img = data[i][imgKey];
        document.getElementById(insertId).append(generateCell(title,img));
    }
}


getEndPointData("/meals.json/latestMeal.json","strMeal","strMealThumb","latest-row", bindingData);
getEndPointData("/meals.json/popularMeal.json","strCategory","strCategoryThumb","popular-row", bindingData);
getEndPointData("/meals.json/randomMeal.json","strMeal","strMealThumb","random-row", bindingData);
getEndPointData("/meals.json/randomIngredients.json","strCategory","strCategoryThumb","ingredient-row", bindingData);




// function getCountryEndPointData(endPointURL,callBackFunction){
//     const xhr = new XMLHttpRequest();
//     xhr.open("Get", endPointURL);
//     xhr.onload = function () {
//         const data = JSON.parse(xhr.responseText); 
        
//         callBackFunction(data);
  
//     }
//     xhr.send();
//   }
 




// function generateCountryCell(img) {
//     return `   <div style="margin:0 0 10px 0;" class="col-lg-1">
//     <a href=""><img class="img-country-style" src="${img}"></a>
//     </div> `;
//   }
//   getCountryEndPointData("country.json",bindingData4);
//   function bindingData4(data) {
//   for(let i in data.country){
//       var img = data.country[i].cunFlagThumb;
//       document.getElementById("country").innerHTML+=generateCountryCell(img);
   
//   }
//   }



// getEndPointData("popularMeal.json",bindingData1);
// function bindingData1(data) {
// for(let i in data.categories){
//     var title=data.categories[i].strCategory;
//     var img = data.categories[i].strCategoryThumb;
//     document.getElementById("popular-row").innerHTML+=generateCell(title,img);
 
// }
// }

// getEndPointData("randomMeal.json",bindingData2);
// function bindingData2(data) {
// for(let i in data.meals){
//     var title=data.meals[i].strMeal;
//     var img = data.meals[i].strMealThumb;
//     document.getElementById("random-row").innerHTML+=generateCell(title,img);
 
// }
// }

// getEndPointData("randomIngredients.json",bindingData3);
// function bindingData3(data) {
// for(let i in data.categories){
//     var title=data.categories[i].strCategory;
//     var img = data.categories[i].strCategoryThumb;
//     document.getElementById("ingredient-row").innerHTML+=generateCell(title,img);
 
// }
// }









// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();

// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("randon-row").innerHTML=getHtml();
// document.getElementById("ingredient-row").innerHTML=getHtml();







