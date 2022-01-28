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





function generateCell(title,img,insertId) {

    let check = $.get("templete.html", (data) => {
        let newData = data.replace("##IMG##", img);
        // let newData = data.replace("##IMG##", img);
        newData = newData.replace("##TITLE##", title);
        // console.log(newData);
        document.getElementById(insertId).innerHTML+=newData;
    });

}


function bindingData(data,titleKey,imgKey,insertId) {
 


    for(let i=0; i< (data).length;i++){
        var title=data[i][titleKey];
        var img = data[i][imgKey];
       generateCell(title,img,insertId);
     
    }
}
getEndPointData("latestMeal.json","strMeal","strMealThumb","latest-row", bindingData);
getEndPointData("popularMeal.json","strCategory","strCategoryThumb","popular-row", bindingData);
getEndPointData("randomMeal.json","strMeal","strMealThumb","random-row", bindingData);
getEndPointData("randomIngredients.json","strCategory","strCategoryThumb","ingredient-row", bindingData);
