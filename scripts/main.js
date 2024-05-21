/*Content to Load*/
let next_button = document.querySelector("button");
let next_page_count = 0;
let h1_array = ['Listing Vintage Fashion',null,null,null,null,null,null];
let h2_array = ['How are vintage fashion items described in e-marketplace contexts?',"Shopping for vintage fashion online has become a viable option for many in the market for clothing, shoes, and accessories. Motivated by environmental concerns, discounted prices, or fashionability, the buzz to buy second-hand is higher than ever. Ecommerce platforms facilitate the exchange of vintage goods, making it easier than ever to buy and sell second hand. Since shopping is traditionally a platform agnostic process, the invention of ecommerce platforms created new prerequisites to be able to successfully exchange goods. One of the most notable is the reliance on descriptions, written by sellers, for each item listed on the market.", "From a list of 53 designers, I analyzed vintage clothing product descriptions from over 4,000 eBay listings, assembling a corpus of containting over 300,000 words to understand how these items are being described. Here are the findings.", null, 'Condition','Narrative'];
let p_array =[null,null,null,['Garment','Color','Sizing','Material'],['Wear','Age','Damage'],['Identification','Personal History','Current Trends']];
let svg_array = [null,null,'assets/img/webpage.svg',null,null]
let color_array = ['black', 'brown', '#004aad', '#e74c3c', '#52be80']
let material_array = ['wool', 'silk', 'cotton', 'nylon', 'suede']
let garment = ['bag', 'jacket', 'dress', 'skirt', 'pants']
const narrativeTextPairs = [
    { "History": "One of the world's oldest luxury leather goods Houses, Loewe has bloomed under the direction of Jonathan Anderson, and the Loewe love shows no signs of slowing down. LOEWE is one of the world's major luxury houses, founded in 1846 in Spain, and today under the creative direction of Jonathan Anderson. " },
    { "Collection": "issey miyake F/W 1999 pleated cream with black stripes lightweight jacket" },
    { "Personal Provenance": "Bought in Paris worn once and sad to see them go,  included is the original box and the shoe bags." },
    { "Appeal to Trends": "Jil Sander vintage y2k dark purple velvet jacket.Very good vintage condition." }
  ];
  const condition_words = [
    ['used', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['good', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.4404}],
    ['perfect', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.5719}],
    ['excellent', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.5719}],
    ['scratches', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['stains', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['mark', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['discoloration', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['damages', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4404}],
    ['flaws', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['dust', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['odor', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['holes', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['nice', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.4215}],
    ['defects', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4019}],
    ['preowned', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['tears', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.2263}],
    ['scuffs', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['fair', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.3182}],
    ['acceptable', {'neg': 0.0, 'neu': 0.0, 'pos': 1.0, 'compound': 0.3182}],
    ['yellowish', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['distressed', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4215}],
    ['loose', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.3182}],
    ['worn', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.296}],
    ['problems', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4019}],
    ['defects', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4019}],
    ['smoke', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['preowned', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['blemishes', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['tears', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.2263}],
    ['patchable', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['spots', {'neg': 0.0, 'neu': 1.0, 'pos': 0.0, 'compound': 0.0}],
    ['missing', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.296}],
    ['defect', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.34}],
    ['wrong', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4767}],
    ['inconvenience', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.3612}],
    ['dirt', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.34}],
    ['poor', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4767}],
    ['faulty', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.3182}],
    ['broken', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4767}],
    ['dirty', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4404}],
    ['defective', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4404}],
    ['affected', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.1531}],
    ['imperfect', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.3182}],
    ['faults', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4767}],
    ['gross', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4767}],
    ['dull', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.4019}],
    ['torn', {'neg': 1.0, 'neu': 0.0, 'pos': 0.0, 'compound': -0.25}]];

/*Load Headers on load*/
document.querySelector('h1').innerText = h1_array[next_page_count];
document.querySelector('h2').innerText = h2_array[next_page_count];

/*Next Button Styling on Events*/
next_button.addEventListener("mouseover",function(){
    this.style.backgroundColor = '#004aad';
    this.style.color = 'white';
    this.style.transition = 'all 0.15s';
    this.style.cursor = 'pointer';
})

next_button.addEventListener("mouseout",function(){
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
    this.style.transition = 'all 0.15s';
    this.style.cursor = 'pointer';
})

/*Load next page content on click*/
next_button.addEventListener("click", function(){
    replacePage();
    /*Increase page count*/
    /*Remove Full Webpage SVG*/
    hideSVG();

    if (next_page_count == 2) {
        removeButton();
    }

    /*Update h1, h2, and p for each page of content*/
    document.querySelector('h1').innerText = h1_array[next_page_count];
    document.querySelector('h2').innerText = h2_array[next_page_count]; 
})

function replacePage(){
    console.log(next_page_count);
    next_page_count += 1;
    var newdiv = document.createElement('div');
    newdiv.classList.add('.content-box');
    var newh1 = document.createElement('h1');
    var newh2 = document.createElement('h2');

    newdiv.appendChild(newh1);
    newdiv.appendChild(newh2);
    document.body.appendChild(newdiv);
}

/*load_page_content(fullURL1);*/

function applyProductListingsFormat() {

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
    listingText.innerHTML = 'Sellers identify many features of a garment, such as color and measurements that would be observed in person.'

    listingContainer.appendChild(listingText);
    container.appendChild(listingContainer);

    searchBar.innerHTML = 'Description';

    setTimeout(() => {
    /*Add listing info*/

    /*Create Listing Image Container*/
    listingText.remove();

    let listingImageContainer = document.createElement('div');
    let listingTextContainer = document.createElement('div');

    /*Create Circl Image*/
    let circle = document.createElement('div');
    circle.classList.add('circle');

    listingImageContainer.appendChild(circle);
    

    listingImageContainer.classList.add('product-listing-item');
    listingTextContainer.classList.add('product-listing-item');

    /*Create sliider containers*/
    let sliderContainer1 = document.createElement('div');
    let sliderContainer2 = document.createElement('div');
    let sliderContainer3 = document.createElement('div');

    /*Create labels for each slider*/
    let sliderLabel1 = document.createElement('p');
    let sliderLabel2 = document.createElement('p');

    sliderLabel1.innerHTML = 'Color';
    sliderLabel2.innerHTML = 'Size';

    /*Append slider labels to each slider*/
    sliderContainer1.appendChild(sliderLabel1);
    sliderContainer2.appendChild(sliderLabel2);

    /*Create sliider and input elements*/
    let slider1 = document.createElement('div');
    let slider2 = document.createElement('div');
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');

    /*Set the input attribute for each slider. Add class*/
    input1.setAttribute('type','range');
    input1.classList.add('custom-slider-range');
    input1.setAttribute('id','myRange1');
    input1.setAttribute('min','1');
    input1.setAttribute('max','100');
    input1.setAttribute('oninput',"changeBackgroundColor()");

    input2.setAttribute('type','range');
    input2.classList.add('slider');
    input2.setAttribute('id','myRange2');
    input2.setAttribute('min','1');
    input2.setAttribute('max','100');
    input2.setAttribute('oninput',"changeSize()");

    /*Add input element to sliders*/
    slider1.appendChild(input1);
    slider2.appendChild(input2);

    /*Append each slider to it's container*/
    sliderContainer1.appendChild(slider1);
    sliderContainer2.appendChild(slider2);

    /*Append slider containers to text container*/
    listingTextContainer.appendChild(sliderContainer1);
    listingTextContainer.appendChild(sliderContainer2);

    /*Search Button*/
    document.querySelector(".product-listings-search-button").addEventListener("mouseover", function() {
    this.style.backgroundColor = '#004aad';
    this.style.color = 'white';
    this.style.transition = 'all 0.25s';
    this.style.cursor = 'pointer';

    });
    
    document.querySelector(".product-listings-search-button").addEventListener("mouseout", function() {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
    this.style.transition = 'all 0.25s';
    this.style.cursor = 'pointer';

    });
    
    document.querySelector(".product-listings-search-button").addEventListener("click", function() {
    document.querySelector('.product-listings-content-box').innerHTML = '';

    createListingTextFormat();
});
    /*Append to containers*/
    /*listingImageContainer.appendChild(listingImage);*/
listingContainer.appendChild(listingImageContainer);
listingContainer.appendChild(listingTextContainer);

container.appendChild(listingContainer);

},5000);

}

function getSliderValue(range) {
    let x = document.getElementById(range).value;
    console.log(x);
}

function removeButton() {
    let button = document.querySelector('.next-button');

    button.remove();
    
}

/*Search Button*/
document.querySelector(".search-button").addEventListener("mouseover", function() {
    this.style.fill = '#004aad';
    document.querySelector('#search-text').style.fill = 'white';
    this.style.transition = 'all 0.25s';
    this.style.cursor = 'pointer';
});

document.querySelector(".search-button").addEventListener("mouseout", function() {
    this.style.fill = 'white';
    document.querySelector('#search-text').style.fill = 'black';
    this.style.transition = 'all 0.25s';
    this.style.cursor = 'pointer';
});

document.querySelector(".search-button").addEventListener("click", function() {
    replacePage();
    document.querySelector('body').style.backgroundColor = 'ghostwhite';

    hideSVG();
    applyProductListingsFormat();
    
    /*Update h1 and h2 for each page of content*/
    document.querySelector('h1').innerText = h1_array[next_page_count];
    document.querySelector('h2').innerText = h2_array[next_page_count];
});

function hideSVG() {
    let x = document.querySelector('.web-page')

    if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    }
let i = 0;

/*Change color function from https://www.geeksforgeeks.org/how-to-change-background-color-using-html-rounded-slider/#*/
  function changeBackgroundColor() {
    let slider = document.getElementById("myRange1");
    let value = slider.value;
    let color;
    if (value > 0 && value <= 20) {
        color = 'hsl(' + 0 + ', 100%, 0%)';
    } else if (value > 20 && value <= 40) {
        color = 'hsl(' + 30 + ', 41%, 23%)';
    } else if (value > 40 && value <= 60) {
        color = 'hsl(' + 213 + ', 100%, 33%)';
    } else if (value > 60 && value <= 80) {
        color = 'hsl(' + 0 + ', 96%, 42%)';
    } else {
        color = 'hsl(60, 56%, 91%)';
    }
    document.querySelector('.circle').style.background = color;
}

function changeSize() {
    let slider = document.getElementById("myRange2");
    let value = slider.value;
    let size = value*3 + 'px';
    document.querySelector('.circle').style.height = size;
    document.querySelector('.circle').style.width = size;
}

function createListingTextFormat() {
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
    listingText.innerHTML = 'Vintage goods are uniquely valued for their age. While time adds cultural value, it also means garments are often far from new condition. Items without significant wear are described generally, whereas flaws are called out in more detail. Sellers describe imperfections such as scratches, stains, smells, and cracks explicitly.<br><br>Sentiment analysis gives us a better understanding of the positive and negative features described, and how sever the languaged used is.'

    listingContainer.appendChild(listingText);
    container.appendChild(listingContainer);

    searchBar.innerHTML = 'Condition';

    setTimeout(() => {
        /*Add listing info*/
        listingText.remove();
        /*Create Listing Image Container*/
        let listingTextContainer = document.createElement('div');
    
        /*Create and load Imag (svg)*/        
        listingTextContainer.classList.add('product-listing-item');
        listingTextContainer.style.width = '80%';
        listingTextContainer.style.border = 'none';

        /*Create Buttons*/
        let buttonContainer = document.createElement('div');
        listingTextContainer.appendChild(buttonContainer);
        listingContainer.appendChild(listingTextContainer);

        buttonContainer.classList.add('word-box')
        for (i=0; i < condition_words.length; i++) {
            /*Create Button*/
            let button = document.createElement('button');
            button.classList.add('word-button');

            /*Iterate through words*/ 
            let word = condition_words[i][0]
            button.innerHTML = word;

            /*Add words as button text*/
            buttonContainer.appendChild(button);

            /*Change the button background color based on sentiment analysis*/
            for (let j = 1; j < condition_words[i].length; j++) {
                const score = condition_words[i][j];
                let compoundText;

                for (const [key, value] of Object.entries(score)) {
                const compound = score.compound;

                if (compound >= 0.5) {
                    compoundText = 'Positive: '  + compound*1.0;
                    button.style.backgroundColor = 'hsl(105, 56%, 33%)';
                  } else if (compound >= 0.25) {
                    compoundText = 'Positive: ' + compound;
                    button.style.backgroundColor = 'hsl(105, 56%, 54%)';
                  } else if (compound >= 0.1) {
                    compoundText = 'Slightly Positive: '  + compound;
                    button.style.backgroundColor = 'hsl(105, 56%, 83%)';
                  } else if (compound > -0.1) {
                    compoundText = 'Neutral:' + compound;
                    button.style.backgroundColor = '#f2f3f4';
                  } else if (compound > -0.25) {
                    compoundText = 'Negative: ' + compound;
                    button.style.backgroundColor = 'hsl(0, 100%, 87%)'
                  } else if (compound > -0.5) {
                    compoundText = 'Negative: '  + compound;
                    button.style.backgroundColor = 'hsl(0, 100%, 67%)';
                  } else {
                    compoundText = 'Highly Negative: ' + compound;
                    button.style.backgroundColor = 'hsl(0, 100%, 44%)';
                  }

                  console.log(`${word}: ${compoundText}`);

                  button.addEventListener("mouseover", function() {
                    this.style.opacity = '0.7';
                    this.innerHTML = compoundText;
                    this.style.cursor = 'pointer';
                    });
                    
                button.addEventListener("mouseout", function() {
                    this.style.opacity = '1';
                    this.innerHTML = word;
                    this.style.cursor = 'pointer';
                }); 
              }
            }
                



        }


        document.querySelector(".product-listings-search-button").addEventListener("mouseover", function() {
            this.style.backgroundColor = '#004aad';
            this.style.color = 'white';
            this.style.transition = 'all 0.25s';
            this.style.cursor = 'pointer';

            });    

        /*Append to containers*/

        /*Search Button*/
        
        document.querySelector(".product-listings-search-button").addEventListener("mouseover", function() {
        this.style.backgroundColor = '#004aad';
        this.style.color = 'white';
        this.style.transition = 'all 0.25s';
        this.style.cursor = 'pointer';
        });
        
        document.querySelector(".product-listings-search-button").addEventListener("mouseout", function() {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        this.style.transition = 'all 0.25s';
        this.style.cursor = 'pointer';
        });

        document.querySelector(".product-listings-search-button").addEventListener("click", function() {
            document.querySelector('.product-listings-content-box').innerHTML = '';
            createNarrativePage();

        });
        
    },10000)
        
    
}

function createNarrativePage() {
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
    listingText.innerHTML = 'Sellers also use the description to make rhetorical appeals. Many position themselves as experts, identifying the specific seasonal collections, detail a personal history with a certain piece, or make appeals to current trends.'

    listingContainer.appendChild(listingText);
    container.appendChild(listingContainer);

    searchBar.innerHTML = 'Narrative'; 

    setTimeout(() => {
        /*Add listing info*/
        listingText.remove();
        /*Create Listing Image Container*/

        let listingImageContainer = document.createElement('div');
        let listingTextContainer = document.createElement('div');
    
        listingImageContainer.classList.add('product-listing-item');
        listingImageContainer.style.border = 'none';
        listingTextContainer.classList.add('product-listing-item');
    
        listingContainer.appendChild(listingImageContainer);
        listingContainer.appendChild(listingTextContainer);

        for (const pair of narrativeTextPairs) {
            const key = Object.keys(pair)[0];
            const value = Object.values(pair)[0];

            console.log(`${key}` + `${value}`);

            let button = document.createElement('button');
            button.innerHTML = `${key}`

            listingImageContainer.appendChild(button);
            
            button.classList.add('narrative-button');

            button.addEventListener("mouseover", function() {
                this.style.opacity = '0.7';
                this.style.cursor = 'pointer';
            
                });
                
                button.addEventListener("mouseout", function() {
                    this.style.opacity = '1';
                    this.style.cursor = 'pointer';
                });
        
                button.addEventListener("click", function() {
                    listingTextContainer.innerHTML = `${value}`;
                    this.style.cursor = 'pointer';
                });
          }
        container.appendChild(listingContainer);

        document.querySelector(".product-listings-search-button").addEventListener("mouseover", function() {
        this.style.backgroundColor = '#004aad';
        this.style.color = 'white';
        this.style.transition = 'all 0.25s';
        this.style.cursor = 'pointer';
        });
        
        document.querySelector(".product-listings-search-button").addEventListener("mouseout", function() {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        this.style.transition = 'all 0.25s';
        this.style.cursor = 'pointer';
        });

        document.querySelector(".product-listings-search-button").addEventListener("click", function() {
            document.querySelector('.product-listings-content-box').innerHTML = '';

            createFinalPage()

        });
    },15000);
}

function createFinalPage() {
    let container = document.querySelector('.content-box');
    container.classList.add('product-listings-content-box');

    let listingContainer = document.createElement('div');
    listingContainer.classList.add('product-listings');

    let p = document.createElement('p');
    p.innerText = 'Those who value vintage pieces, and shop for them online, know firsthand how the practice differs from sorting through racks at a shop around the corner.<br><br> To examine the language used in vintage clothing product descriptions is to turn an eye toward the realities of vintage fashion collection online and explore the subculture the way in which most of us encounter it.';
    
    listingContainer.appendChild(p);
    listingContainer.style.border = 'none';

    next_button.innerHTML = 'Exit';
    listingContainer.appendChild(next_button);
    container.appendChild(listingContainer)

    next_button.style.backgroundColor = 'white';
    next_button.style.color = 'black';
    
    next_button.addEventListener("mouseover",function(){
        this.style.backgroundColor = '#004aad';
        this.style.color = 'white';
        this.style.transition = 'all 0.15s';
        this.style.cursor = 'pointer';
    
    })
    
    next_button.addEventListener("mouseout",function(){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        this.style.transition = 'all 0.15s';
        this.style.cursor = 'pointer';
    });

    next_button.addEventListener("click",function(){
        document.body.innerHTML = "";

        let container = document.createElement('div');
        container.classList.add('container');

        let p1 = document.createElement('p');
        p1.innerHTML = 'Essay by: Cecilia Knaub'
        
        container.appendChild(p1);
        container.appendChild(next_button)
        document.body.appendChild(container);
    })
}