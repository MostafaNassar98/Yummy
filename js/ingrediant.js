var myHttp = new XMLHttpRequest;
ingrediantMealArr = [];




//ingredients
function getingrediant() {
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            ingrediantMealArr = JSON.parse(myHttp.response).meals;

            displayingrediant()


        }
    })
}

function displayingrediant() {
    var cartoona = ``;

    for (let i = 0; i < 20; i++) {

        cartoona += `<div class="col-lg-3 col-md-6 ">
        <div class="item position-relative ">
            <div class="area-item  d-flex justify-content-center align-items-center  text-white  rounded-3">
                <div class="text-center">
                    <i class="fa-solid fa-drumstick-bite"></i>
                    <h3 class="my-3 meal">${ingrediantMealArr[i].strIngredient}</h3>
                    <p>${ingrediantMealArr[i].strDescription.split(' ').splice(0,15).join(" ")}</p>
                </div>
            </div>
        </div>
    </div>`

    }

    document.querySelector('.ingrediant .ingredientMeals').innerHTML = cartoona;
    let meal = document.querySelectorAll('.meal');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('ingrediant', JSON.stringify(`${categorys}`))
            location.href = "ingrediantdetail.html"
        })
    }
}
getingrediant()
