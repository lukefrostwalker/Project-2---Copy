const planContainer = document.querySelector("#planContainer");
const selectDate = document.querySelectorAll("#dateSelector");

let cart = []


function dateSelect(date) {
    console.log(date)
}

const dateClicked = e => {
    let date = e.target.dataset.date
    let order = e.target.dataset.seq
    console.log(order)
    e.target.style.color = "black"
    e.target.classList.add("clicked")
    e.target.style.pointerEvents = "none"

    if (e.target.classList.contains("clicked")) {
        dateSelect(date)
        e.target.classList.add("delete")

        var main = document.createElement("div")
        main.classList = "mb-3 deleteID"
        main.dataset.id = date
        main.style.order = order
   
        var dateTitle = document.createElement("p")
        dateTitle.classList = "date_title fw-bold text-center py-2"
        dateTitle.innerHTML = date + " MENU"

        var delBtn = document.createElement("button")
        delBtn.innerHTML = "Remove"
        delBtn.classList = "del-btn";
        delBtn.addEventListener("click", delItem)
    
        var mealGroup = document.createElement("div")
        mealGroup.classList = "card-group gap-4"
  
        planContainer.appendChild(main)
        main.appendChild(dateTitle)
        main.appendChild(delBtn)
        main.appendChild(mealGroup)

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
                        <div class="d-inline-flex">
                            <div class="btn-group">
                                <button type="button" class="btn btn-warning btn__meal-minus minus" onclick="changeNumberOfUnits('minus', ${meal.id})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" class="input_quantity remove-arrows-inputs-number">
                                <button type="button" class="btn btn-warning btn__meal-plus plus" onclick="changeNumberOfUnits('plus', ${meal.id})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            
        })

        } else if (e.target.classList.contains("delete")) {
            // var delMain = document.querySelector('[data-id = ${date}]');
            // console.log(delMain)
            console.log(date)
            // delMain.remove()
            
    }

    

    function delItem() {
        let delText = "Are you sure?";
            
            if (confirm(delText) === true) {
                delBtn.parentElement.remove();
                e.target.classList.remove("clicked")
                e.target.style.pointerEvents = ""
            } else {
                delText= "Noice!";
                alert(delText);
            }
    }
}

for (let x of selectDate) {
    x.addEventListener("click", dateClicked)
}

function changeNumberOfUnits(action, id) {

        if(cart.some((item) => item.id === id)) {
            let numberOfUnits = meals.numberOfUnits
            if(meals.id === id) {
                if (action === "minus" && numberOfUnits > 1) {
                    numberOfUnits--
                } else if (action === "plus") {
                    numberOfUnits++
                }
            }
        } else {
            const item = meals.find((meal) => meal.id === id)
            cart.push({
                ...item,
                numberOfUnits: 1,
            })
        }
        console.log(cart)
        
   
    cart = cart.map((meal) => {
        let numberOfUnits = meal.numberOfUnits
        if(meal.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--
                // quantity.value--
            } else if (action === "plus") {
                numberOfUnits++
                // quantity.value++
            }
        }
        return {
            ...meal,
            numberOfUnits,
        }
        
    })
}

