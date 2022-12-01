const selectDate = document.querySelectorAll("#dateSelector");
let planContainer = document.querySelector("#planContainer");
let dateContainer = document.querySelector("#dateContainer");
let totalAmount = document.querySelector("#totalAmount");

var menu = [
    ["Cocoa-spiced Beef Tenderloin",
     "Latin American flavors come alive in this festive beef dish with fruity salsa.", 
     "$49.99",
     `Each serving provides:<br/>
    <b>calories</b> 215;
    <b>total fat</b> 9 g;
    <b>saturated fat</b> 3 g;
    <b>cholesterol</b> 67 mg;
    <b>sodium</b> 226 mg;
    <b>total fiber</b> 2 g;
    <b>protein</b> 25 g;
    <b>carbohydrates</b> 9 g;
    <b>potassium</b> 451 mg;`, "../img/cocoa-spiced beef tenderloin.png"],
    ["Stir-Fried Orange Beef",
     "Tangy orange-flavored beef with crips vegetables.<br/>&nbsp;", 
     "$69.99", 
     `Each serving provides:<br/>
    <b>calories</b> 261;
    <b>total fat</b> 9 g;
    <b>saturated fat</b> 2 g;
    <b>cholesterol</b> 28 mg;
    <b>sodium</b> 418 mg;
    <b>total fiber</b> 3 g;
    <b>protein</b> 23 g;
    <b>carbohydrates</b> 23 g;
    <b>potassium</b> 648 mg;`, "../img/cocoa-spiced beef tenderloin.png"],
    ["Sweet-and-Sour Chicken", 
     "Sweet and sour flavours make a winning combination in this healthier version of a popular Chinese dish.", 
     "$39.99",
     `Each serving provides:<br/>
    <b>calories</b> 221;
    <b>total fat</b> 6 g;
    <b>saturated fat</b> 1 g;
    <b>cholesterol</b> 51 mg;
    <b>sodium</b> 287 mg;
    <b>total fiber</b> 3 g;
    <b>protein</b> 23 g;
    <b>carbohydrates</b> 21 g;
    <b>potassium</b> 460 mg;`, "../img/cocoa-spiced beef tenderloin.png"]
]

const dateClicked = e => {
    let date = e.target.dataset.date
    e.target.style.color = "black"
    // e.target.classList.add("hello")
    // selectDate.forEach(f => f.classList.remove('hello'));
    e.target.classList.toggle("clicked");

    if (e.target.classList.contains("clicked")) {
        const menuCard = () => {
            menu.forEach(p => {
                mealGroup.innerHTML += `
                
                <div class="card border border-secondary">
                        <img src="${p[4]}" class="card-img-top" alt="${p[0]}">
                    <div class="card-body">
                        <h5 class="card-title">${p[0]}</h5>
                        <p class="card-text">${p[1]}</p>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item small">Price: <span class="fw-bold" id="price">${p[2]}</span></li>
                        <li class="list-group-item small">${p[3]}
                        </li>
                        </ul>
                    <div class="card-body">
                        <label for="quantity">Quantity: </label>
                        <input type="number" class="small" id="quantity" min="1">
                    </div>
                </div>`
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
            // main.remove()
    }
 
}

for (let x of selectDate) {
    x.addEventListener("click", dateClicked)
}