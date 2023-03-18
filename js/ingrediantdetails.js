var myHttp = new XMLHttpRequest;
let ingrediantarr = [];

function getIngreddetais() {
    if (localStorage.getItem('ingr') != null) {
        let counName = JSON.parse(localStorage.getItem('ingr'));
        myHttp.open('GET', `www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
        myHttp.send();
        myHttp.addEventListener('readystatechange', function() {
            if (myHttp.readyState == 4) {
                ingrediantarr = JSON.parse(myHttp.response).meals;

                displayingrediantdetails()

            }
        })


    }
}


function displayingrediantdetails() {
    var cartoona = ``;

    for (let i = 0; i < ingrediantarr.length; i++) {

        cartoona += `
                <div class="col-lg-3 ">
                <div class="item position-relative ">
                    <img src="${ingrediantarr[i].strMealThumb} " class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center ">
                        <h3 class="ms-3 meal">${ingrediantarr[i].strMeal}</h3>
                    </div>
                </div>
            </div>
                `

    }

    document.querySelector('.ingrediantmeal').innerHTML = cartoona;
    let meal = document.querySelectorAll('.meal');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('mealingredIantDetails', JSON.stringify(`${category}`))
            location.href = "ingrediantdetail.html"
        })
    }
}
getIngreddetais()