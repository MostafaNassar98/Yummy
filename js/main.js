var myHttp = new XMLHttpRequest;
var mainArr = []


function getdata() {
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            mainArr = JSON.parse(myHttp.response).meals;

            displayingrediant()

        }
    })
}

function displayingrediant() {
    var cartoona = ``;

    for (let i = 0; i < 20; i++) {

        cartoona += ` <div class="col-lg-3 ">
        <div class="item position-relative ">
            <img src="${mainArr[i].strMealThumb}" class="w-100 " alt=" ">
            <div class=" position-absolute item-caption d-flex align-items-center ">
                <h2 class="ms-3 meal ">${mainArr[i].strMeal}</h2>
            </div>
        </div>
    </div>`

    }

    document.querySelector('.ingrediant').innerHTML = cartoona;
}
getdata()
