const selectDate = document.querySelectorAll("#dateSelector");
let planContainer = document.querySelector("#planContainer");
let dateContainer = document.querySelector("#dateContainer");
let totalAmount = document.querySelector("#totalAmount");
let cartContainer = document.querySelector("#cart")

let cart = []

const dateClicked = e => {
    let date = e.target.dataset.date
    e.target.style.color = "black"
    e.target.classList.toggle("clicked");

    if (e.target.classList.contains("clicked")) {
        const menuCard = () => {
            meals.forEach((meal) => {
                mealGroup.innerHTML += `
                <div class="card border border-secondary">
                        <img src="${meal.imgSrc}" class="card-img-top" alt="${meal.name}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.name}</h5>
                        <p class="card-text">${meal.description}</p>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item small">Price: <span class="fw-bold" id="price">${meal.price}</span></li>
                        <li class="list-group-item small">${meal.facts}
                        </li>
                        </ul>
                    <div class="card-body">
                        <div class="units">
                            <div class="btn add-Cart" onclick="addToCart(${meal.id})">Add to cart</div>
                            <div class="btn minus onclick="changeNumberOfUnits('minus', ${meal.id})">-</div>
                            <div id="quantity" class="number">0</div>
                            <div class="btn plus onclick="changeNumberOfUnits('plus', ${meal.id})">+</div>           
                        </div>
                    </div>
                </div>
                `
            })
            
        }
        e.target.classList.add("delete")

        var main = document.createElement("div")
        main.classList = "mb-3 deleteID"
   
        let dateTitle = document.createElement("p")
        dateTitle.classList = "date_title fw-bold text-center py-2"
        dateTitle.innerHTML = date + " MENU"
    
        let mealGroup = document.createElement("div")
        mealGroup.classList = "card-group gap-4"
  
        planContainer.appendChild(main)
        main.appendChild(dateTitle)
        main.appendChild(mealGroup)
        mealGroup.appendChild(menuCard())
        
    } else if (e.target.classList.contains("delete")) {
            var delMain = document.querySelector(".deleteID");
            delMain.remove();
    }
}


// ADD CART
function addToCart(id) {
    if(cart.some((item) => item.id === id)) {
        alert("boo")
    } else {
        const item = meals.find((meal) => meal.id === id)
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
    }
    updateCart()

    console.log(cart)
}

function updateCart() {
    renderCart()
}

function renderCart() {
    cartContainer.innerHTML = ""
    cart.forEach((meal) => {
        cartContainer.innerHTML += `
                <div class="card border border-secondary">
                    <div class="card-body">
                        <h5 class="card-title">${meal.name}</h5>
                    </div>
                        <p class="list-group-item small">Price: <span class="fw-bold" id="price">${meal.price}</p>
                    <div class="card-body">
                        <div class="units">
                            <div class="number">${meal.numberOfUnits}</div>
                        </div>
                    </div>
                </div>
                `
    })
}


function changeNumberOfUnits(action, id) {

    console.log(cart)

    cart = cart.map((meal) => {

        let numberOfUnits = meal.numberOfUnits

        if(meal.id === id) {
            if (action === "minus") {
                numberOfUnits--
            } else if (action === "plus") {
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart()
}


for (let x of selectDate) {
    x.addEventListener("click", dateClicked)
}