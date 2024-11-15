

document.addEventListener('DOMContentLoaded', () => {
    loadFragrances(); // Load fragrances on DOMContentLoaded
});

function loadFragrances() {
    return fetch('/fragrances/getAllFragrances')  // Fetch fragrances from the correct API
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(fragrances => {
            console.log('Fragrances fetched:', fragrances);

            // Filter fragrances by brand '1232'
            const brandFragrances = fragrances.filter(fragrance => fragrance.brand === 'Tom Ford');
            const firstFourFragrances = brandFragrances.slice(0, 5);
            console.log('Filtered brandFragrances:', firstFourFragrances);  // Debugging the filtered result
            
            // Handle first section
            const insertLocations = document.querySelectorAll('.fragrance-flex1');
            insertLocations.forEach(location => {
                const carouselDiv = document.createElement('div');
                carouselDiv.classList.add('index-Fragrance-carousel');
                location.appendChild(carouselDiv);

                firstFourFragrances.forEach(fragrance => {
                    const fragranceCard = document.createElement('div');
                    fragranceCard.classList.add('card');

                    fragranceCard.innerHTML = 
                      `
                <div class="cardimg" style="background-image: url(${fragrance.image});"></div>
                <div class="card-info">
                    <span>${fragrance.brand} – ${fragrance.title}</span>
                   <span class="currentprice"><span class="pricebefore">ფასი - </span>${fragrance.price} ₾</span>
                    <div class="card-bnts">
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntface"><a href="https://m.me/effectline.georgia/" target="_blank">დაგვიკავშირდი  -  <i class="fa-brands fa-facebook-f"></i></a></span> 
                           
                        </button>
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntinsta"><a href="https://ig.me/m/online.effect" target="_black">დაგვიკავშირდი -  <i class="fa-brands fa-instagram"> </i></a></span> 
                          
                        </button>
                    </div>
                </div>
            `;

                    // Optionally add a click event for adding the fragrance to the cart
                    
                    
                    

                    carouselDiv.appendChild(fragranceCard);
                });
            });


            const brandFragrances2 = fragrances.filter(fragrance => fragrance.brand === 'Creed');
            const firstFourFragrances2 = brandFragrances2.slice(0, 5);
            console.log('Filtered brandFragrances:', firstFourFragrances2);


            const insertLocations2 = document.querySelectorAll('.fragrance-flex2');
            insertLocations2.forEach(location => {
                const carouselDiv = document.createElement('div');
                carouselDiv.classList.add('index-Fragrance-carousel');
                location.appendChild(carouselDiv);

                firstFourFragrances2.forEach(fragrance => {
                    const fragranceCard = document.createElement('div');
                    fragranceCard.classList.add('card');

                    fragranceCard.innerHTML = 
                       `
                <div class="cardimg" style="background-image: url(${fragrance.image});"></div>
                <div class="card-info">
                    <span>${fragrance.brand} – ${fragrance.title}</span>
                   <span class="currentprice"><span class="pricebefore">ფასი - </span>${fragrance.price} ₾</span>
                    <div class="card-bnts">
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntface">     <a href="https://m.me/effectline.georgia/" target="_blank">დაგვიკავშირდი  -  <i class="fa-brands fa-facebook-f"></i></a></span> 
                           
                        </button>
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntinsta"><a href="https://ig.me/m/online.effect" target="_black">დაგვიკავშირდი -  <i class="fa-brands fa-instagram"> </i></a></span> 
                          
                        </button>
                    </div>
                </div>
            `;

                    // Optionally add a click event for adding the fragrance to the cart
                    

                    carouselDiv.appendChild(fragranceCard);
                });
            });

            const brandFragrances3 = fragrances.filter(fragrance => fragrance.brand === 'Valentino');
            const firstFourFragrances3 = brandFragrances3.slice(0, 5);
            console.log('Filtered brandFragrances:', firstFourFragrances3);


            const insertLocations3 = document.querySelectorAll('.fragrance-flex3');
            insertLocations3.forEach(location => {
                const carouselDiv = document.createElement('div');
                carouselDiv.classList.add('index-Fragrance-carousel');
                location.appendChild(carouselDiv);

                firstFourFragrances3.forEach(fragrance => {
                    const fragranceCard = document.createElement('div');
                    fragranceCard.classList.add('card');

                    fragranceCard.innerHTML = 
                       `
                <div class="cardimg" style="background-image: url(${fragrance.image});"></div>
                <div class="card-info">
                    <span>${fragrance.brand} – ${fragrance.title}</span>
                   <span class="currentprice"><span class="pricebefore">ფასი - </span>${fragrance.price} ₾</span>
                    <div class="card-bnts">
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntface">     <a href="https://m.me/effectline.georgia/" target="_blank">დაგვიკავშირდი  -  <i class="fa-brands fa-facebook-f"></i></a></span> 
                           
                        </button>
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntinsta"><a href="https://ig.me/m/online.effect" target="_black">დაგვიკავშირდი -  <i class="fa-brands fa-instagram"> </i></a></span> 
                          
                        </button>
                    </div>
                </div>
            `;

                    // Optionally add a click event for adding the fragrance to the cart
                    

                    carouselDiv.appendChild(fragranceCard);
                });
            });


            const brandFragrances4 = fragrances.filter(fragrance => fragrance.brand === 'Tiziana Terenzi');
            const firstFourFragrances4 = brandFragrances4.slice(0, 5);
            console.log('Filtered brandFragrances:', firstFourFragrances4);


            const insertLocations4 = document.querySelectorAll('.fragrance-flex4');
            insertLocations4.forEach(location => {
                const carouselDiv = document.createElement('div');
                carouselDiv.classList.add('index-Fragrance-carousel');
                location.appendChild(carouselDiv);

                firstFourFragrances4.forEach(fragrance => {
                    const fragranceCard = document.createElement('div');
                    fragranceCard.classList.add('card');

                    fragranceCard.innerHTML = 
                       `
                <div class="cardimg" style="background-image: url(${fragrance.image});"></div>
                <div class="card-info">
                    <span>${fragrance.brand} – ${fragrance.title}</span>
                   <span class="currentprice"><span class="pricebefore">ფასი - </span>${fragrance.price} ₾</span>
                    <div class="card-bnts">
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntface">     <a href="https://m.me/effectline.georgia/" target="_blank">დაგვიკავშირდი  -  <i class="fa-brands fa-facebook-f"></i></a></span> 
                           
                        </button>  
                        <button class="addcartbnt" data-fragrance-id="${fragrance.id}">
                            <span class="addcartbnt-span addcartbntinsta"><a href="https://ig.me/m/online.effect" target="_black">დაგვიკავშირდი -  <i class="fa-brands fa-instagram"> </i></a></span> 
                          
                        </button>
                    </div>
                </div>
            `;

                    // Optionally add a click event for adding the fragrance to the cart
                    

                    carouselDiv.appendChild(fragranceCard);
                });
            });





            

            


        })
      
}

let currentIndex = 0;

function moveSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}

// Media query listener for switching images
const mediaQuery = window.matchMedia("(max-width: 1000px)");

function handleMediaQueryChange(e) {
    const carouselImagesContainer = document.getElementById('carouselImagesContainer');
    if (e.matches) {
        carouselImagesContainer.innerHTML = 
            `<img class="carouselafter-resp" src="/images/sale-resp-IMG1.png" alt="Image 1">
            <img class="carouselafter-resp" src="/images/sale-resp-IMG2.png" alt="Image 2">
            <img class="carouselafter-resp" src="/images/sale-resp-IMG3.png" alt="Image 3">`;
    } else {
        carouselImagesContainer.innerHTML = 
            `<img class="carouselbefore-resp" src="/images/sale-IMG1.png" alt="Image 1">
            <img class="carouselbefore-resp" src="/images/sale-IMG2.png" alt="Image 2">
            <img class="carouselbefore-resp" src="/images/sale-IMG3.png" alt="Image 3">`;
    }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);










// Custom Alert Function with Auto Hide
function showCustomAlert(message) {
    const alertPopup = document.getElementById('custom-alert');
    alertPopup.querySelector('p').textContent = message;

    // Show the alert with smooth fade-in
    alertPopup.classList.remove('hide'); // Remove hide class
    alertPopup.classList.add('show'); // Add show class
    alertPopup.style.display = 'block'; // Set display to block

    // Automatically hide the alert after 2 seconds
    setTimeout(() => {
        alertPopup.classList.remove('show'); // Fade-out
        setTimeout(() => {
            alertPopup.classList.add('hide'); // Add hide class after fade-out
            alertPopup.style.display = 'none'; // Fully hide after fade-out
        }, 500); // Wait for fade-out transition (0.5s)
    }, 2000); // Show for 2 seconds
}
