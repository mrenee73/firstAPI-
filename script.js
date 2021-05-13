


const api_url = 'https://api.covid19api.com/summary';
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('submit', fetchResults);
let countryArray;

const fetchResults = () => {

 fetch(api_url)
        .then ((res) => res.json())
        .then (data => {
            countryArray = data.Countries[181]
           console.log(data.Countries[181]);
           displayData(data.Countries[181])
            
        })              
 };
const factsDisplay = document.querySelector(".myData");
 function displayData(countryArray){
     

         let div = document.createElement('div');
         let ctry = document.createElement("h3");
         let newC = document.createElement("p");
         let newD = document.createElement("p");
         let totalCC = document.createElement("p");
         let totalD = document.createElement("p");

        ctry.text = countryArray;

        console.log(function);
        factsDisplay.appendChild(div);
        div.appendChild(ctry);        

        // ctry.innerHTML = 'Country:' + thing[i].Country;
        // newC.innerHTML = 'New Cases:' + thing[i].NewConfirmed;
        // newD.innerHTML = 'New Death:' + thing[i].NewDeaths;
        // totalCC.innerHTML = 'Total Confirmed Cases:' + thing[i].TotalConfirmed;
        // totalD.innerHTML = 'Total Deaths:' + thing[i].TotalDeaths;



           
 };



