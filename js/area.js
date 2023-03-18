var myHttp = new XMLHttpRequest;
var areaArr = [];
var area=document.querySelectorAll('.area-itam h3');


for(let i=0 ; i<area.length ;i++){
    area[i].addEventListener('click',function(e){
        var country=e.target.gerAttribute('country');
        localStorage.setItem('countryname',JSON.stringify(`${country}`))
        location.href = "areadetail.html"
    })

}
