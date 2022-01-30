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

  function generateCell(title, img) {
    let template = document.querySelector("#html-templete").content.cloneNode(true);
    template.querySelector("img").setAttribute("src", img);
    template.querySelector("p").textContent = title;
    return template;
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
















//   function generateCell(title,img,insertId) {

//     let check = $.get("templete.html", (data) => {
//         let newData = data.replace("##IMG##", img);
//         // let newData = data.replace("##IMG##", img);
//         newData = newData.replace("##TITLE##", title);
//         console.log(newData);
//         document.getElementById(insertId).innerHTML+=newData;
//     });
   
// }




// function generateCell(title,img,insertId) {

//     let check = $.get("templete.html", (data) => {
//         let newData = data.replace("##IMG##", img);
//         // let newData = data.replace("##IMG##", img);
//         newData = newData.replace("##TITLE##", title);
//         // console.log(newData);
        
//     });

// }