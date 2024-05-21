let container = document.querySelector('.content-box');
container.classList.add('product-listings-content-box');

let searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');

/*Create search bar and button*/
let searchBar = document.createElement('div');
let searchButton = document.createElement('div');

searchButton.innerHTML = 'Search';

/*Add search bar to search container and style it*/
searchBar.classList.add('search-bar');
searchContainer.appendChild(searchBar);

/*Add search button to search container and style it*/
searchButton.classList.add('product-listings-search-button');
searchContainer.appendChild(searchButton);

/*Add search container to listing page*/
container.appendChild(searchContainer);

/*Add listing info*/
let listingContainer = document.createElement('div');
listingContainer.classList.add('product-listings');

let listingText = document.createElement('p');
listingText.innerHTML = 'Sellers identify many identifiable features of a garment, such as color, measurements, and material that would be observed in person.'

listingContainer.appendChild(listingText);
container.appendChild(listingContainer);