function getEndPoint(endPointURL, insertId,callBackFunction) {
    const xNew= new XMLHttpRequest();
    xNew.open("Get",endPointURL);
    xNew.onload= function () {
        const data= JSON.parse(xNew.responseText);
        var key = Object.keys(data)[0];
        var objectList=data[key];
        callBackFunction(objectList,insertId);
    }
    xNew.send();
}


function generateHtml(title,img) {
    return `<div style="margin:0 0 10px 0;" class="col-lg-3">
    <a href=""><img class="img-style" src="${img}"></a>
    <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
     </div>`;
}


function bindingData(data,insertId) {
//  console.log(data);
var key = Object.keys(data)[0][0];
var key1 = Object.keys(data)[0][1];
for(let i=0; i< (data).length;i++){
    var title=data[key];
    var img = data[key1];
    document.getElementById(insertId).innerHTML+=generateCell(title,img);
 
}


    // for(let i=0; i< (data).length;i++){
    //     var title=data[i][titleKey];
    //     var img = data[i][imgKey];
    //     document.getElementById(insertId).innerHTML+=generateCell(title,img);
     
    // }


    // for(let i=0;i<(data.meals).length;i++){
    //     let title = data.meals[i].strMeal;
    //     let img = data.meals[i].strMealThumb;
        
    //     document.getElementById("latest-row").innerHTML+=generateHtml(title,img);
    // }

}

getEndPointData("latestMeal.json","latest-row", bindingData);
// getEndPoint("latestMeal.json",bindingData);
// getEndPointData("latestMeal.json","strMeal","strMealThumb","latest-row", bindingData);











// return [{title:"hamza",img:"1.png"},{title:"hamza",img:"1.png"},{title:"hamza",img:"1.png"}];

// document.getElementById("latest-row").innerHTML+=generateHtml();
// document.getElementById("latest-row").innerHTML+=generateHtml();

// let bindData= getEndPoint("latestMeal.json");
// console.log(bindData);
// bindingData(bindData);