let apiData=[];
let row = document.getElementById('row');
let searchBtn = document.getElementById('search');
let searchLable;
var x ;

    //search part
searchBtn.addEventListener('click',function () {
    searchLable = document.getElementById('search_lable').value;
    getAPI(searchLable)
})

// default weather api
if (apiData.current == undefined) {
    getAPI("cairo");  
}
    
    // get API 
async function getAPI(name)
{
let result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=55e0497ff3f2403daa4202603220412%20&q=${name}&days=3`);
let response =  await result.json();
apiData=response;
display();
}
    // display API in html
function display() {
   let str=``

   str=`
   <div class="col-lg-4 mt-5 ">
   <div class="bg-dark rounded-3 ">

     <div class="d-flex justify-content-between align-items-center text-gray p-1 ">
     <img src="https:${apiData.current.condition.icon}" class="" alt="">
       <p class="pt-1" >${apiData.forecast.forecastday[0].date}</p>
     </div>

        <div class="text-gray bg-gray p-4 rounded-3">
        <h5>${apiData.location.name}</h5>

       <p class="text-light fs-larger fw-bolder">${apiData.current.temp_c} C</p>
        
       <p class="text-warning mt-2 ">${apiData.current.condition.text}</p>
       <div class >
       <span class="pe-2 ">
       <img src="images/icon-umberella.png" class="pe-2" alt="">${apiData.current.cloud} %
        </span>

        <span class="pe-2  ">
        <img src="images/icon-wind.png" class="pe-2" alt="">${apiData.current.vis_km} km/h
        </span>

        <span class=" ">
        <img src="images/icon-compass.png" class="pe-2" alt="">${apiData.current.wind_dir}
        </span>
     
     </div>


     </div>

   </div>
 </div>



 <div class="col-lg-4 mt-5 ">
 <div class="bg-dark rounded-3">

   <div class="d-flex justify-content-between align-items-center text-gray p-1 ">
   <img src="https:${apiData.forecast.forecastday[1].day.condition.icon}" class="" alt="">
     <p class="pt-1" >${apiData.forecast.forecastday[1].date}</p>
   </div>

      <div class="text-gray bg-gray p-4 pb-2 rounded-3">
      <h5>${apiData.location.name}</h5>

     <p class="text-light fs-larger fw-bolder">${apiData.forecast.forecastday[1].day.maxtemp_c} C</p>
     <p class="text-light fs-small fw-bolder">${apiData.forecast.forecastday[1].day.mintemp_c} C</p>
    
     <p class="text-warning mt-2 ">${apiData.forecast.forecastday[1].day.condition.text}</p>


   </div>

 </div>
</div>

<div class="col-lg-4 mt-5 ">
<div class="bg-dark rounded-3">

  <div class="d-flex justify-content-between align-items-center text-gray p-1 ">
  <img src="https:${apiData.forecast.forecastday[2].day.condition.icon}" class="" alt="">
    <p class="pt-1" >${apiData.forecast.forecastday[2].date}</p>
  </div>

     <div class="text-gray bg-gray p-4 pb-2  rounded-3">
     <h5>${apiData.location.name}</h5>

    <p class="text-light fs-larger fw-bolder">${apiData.forecast.forecastday[2].day.maxtemp_c} C</p>
    <p class="text-light fs-small fw-bolder">${apiData.forecast.forecastday[2].day.mintemp_c} C</p>
   
    <p class="text-warning mt-2 ">${apiData.forecast.forecastday[2].day.condition.text}</p>


  </div>

</div>
</div>
`;

 row.innerHTML=str;    
}
