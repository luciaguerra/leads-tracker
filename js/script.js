let myLeads = [];
const inputButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    clearInput();
})

function clearInput(){
    inputEl.value = "";
}

function renderLeads(){
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>`
    }

    ulEl.innerHTML = listItems; 
}

/*const recipient = "James";
const sender = "Lucía";

const email = `Hey ${recipient}!
        How is it going? 
        Cheers ${sender}`;

console.log(email)



let container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>"; 

function buy(){
    container.innerHTML += "<p>Thank you for buying</p>";
}

let boxEl = document.getElementById("box");

boxEl.addEventListener("click", function() {
    console.log("i want to open the box!")
})

const playerName = "Per";
let credits = 45;

const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

shippingCost = 15;
shippingTime = "7-14 days";

const fullPrice = basePrice - discount + shippingCost;

console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);*/