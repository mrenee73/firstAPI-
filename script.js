



const api_url = 'https://api.covid19api.com/summary';
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// async function getInfo() {
//     const response = await fetch(api_url);
//     const data = await response.json();    
//     console.log(data);
// }

// getInfo();



searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    // console.log(e);
    e.preventDefault();
    url = `${api_url}&countries${countries}`;
    
   
    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    console.log('Display Results', json);
    
}


searchForm.addEventListener('submit', fetchResults);
fetchResults();

