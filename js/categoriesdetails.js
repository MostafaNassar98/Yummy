var myHttp = new XMLHttpRequest;
mealsArr = []

function displayCatMeals() {
    if (localStorage.getItem('category') != null) {
        let mealCat = JSON.parse(localStorage.getItem('category'))
        myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCat}`);
        myHttp.send();
        myHttp.addEventListener('readystatechange', function() {
            if (myHttp.readyState == 4) {
                mealsArr = JSON.parse(myHttp.response).meals;
                displayscategory()

            }
        })



    }
}

function displayscategory() {
    var cartoona = ``;

    for (let i = 0; i < mealsArr.length; i++) {

        cartoona += `
                <div class="col-lg-3 items ">
                <div class="item position-relative ">
                    <img src="${mealsArr[i].strMealThumb}" class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center justify-content-center text-center ">
                        <div>
                            <h3 class="ms-3 meal ">${mealsArr[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>
                `

    }
    document.querySelector('.meals').innerHTML = cartoona;
    let meal = document.querySelectorAll('.meal');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('mealsvalue', JSON.stringify(`${categorys}`))
            location.href = "categoriesdetail.html"
        })
    }

}

displayCatMeals()