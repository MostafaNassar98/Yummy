var categMeals = [];
var myHttp = new XMLHttpRequest;


function categories() {
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/categories.php`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            categMeals = JSON.parse(myHttp.response).categories;
            displayCategories();
        }
    })
}

function displayCategories() {
    var cartoona = ``;

    for (let i = 0; i < categMeals.length; i++) {

        cartoona += `
                <div class="col-lg-3 items ">
                <div class="item position-relative ">
                    <img src="${categMeals[i].strCategoryThumb}" class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center justify-content-center text-center ">

                    <div>
                        <h3 class="ms-3 meal ">${categMeals[i].strCategory}</h3>
                        <p>${categMeals[i].strCategoryDescription.split(' ').splice(0,10).join(" ")}</p>
                    </div>

                    </div>
                </div>
            </div>
                `

    }

    document.querySelector('.categoreies .categoriesMeals').innerHTML = cartoona;
    let meal = document.querySelectorAll('.meal');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('category', JSON.stringify(`${categorys}`))
            location.href = "categoriesdetail.html"


        })
    }
}
categories()
