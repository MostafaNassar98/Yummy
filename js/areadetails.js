var myHttp = new XMLHttpRequest;
let areaArr = [];


function getMealCountry() {
    if (localStorage.getItem('countryname') != null) {
        let country = JSON.parse(localStorage.getItem('countryname'));
        myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        myHttp.send();
        myHttp.addEventListener('readystatechange', function() {
            if (myHttp.readyState == 4) {
                areaArr = JSON.parse(myHttp.response).meals;

                displayArea()

            }
        })


    }
}
function displayArea() {
    var cartoona = ``;

    for (let i = 0; i < areaArr.length; i++) {

        cartoona += `
                <div class="col-lg-3 ">
                <div class="item position-relative ">
                    <img src="${areaArr[i].strMealThumb} " class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center ">
                        <h3 class="ms-3  meal">${areaArr[i].strMeal}</h3>
                    </div>
                </div>
            </div>
                `

    }

    areacountry.innerHTML = cartoona;
    let meal = document.querySelectorAll('.meal');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('meallocation', JSON.stringify(`${categorys}`))
            location.href = "details.html"
        })
    }
}
getMealCountry()
