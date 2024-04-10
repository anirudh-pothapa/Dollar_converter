const countryList = {

    AUD: "AU",
    BRL: "BR",
    CAD: "CA",
    CNY: "CN",
    CZK: "CZ",
    DKK: "DK",
    EUR: "FR",
    GBP: "GB",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    ISK: "IS", 
    JPY: "JP",
    KRW: "KR",
    MXN: "MX",
    MYR: "MY", 
    NZD: "NZ",   
    PHP: "PH",   
    PLN: "PL",
    RON: "RO",
    RUB: "RU", 
    SEK: "SE",
    SGD: "SG",
    TRY: "TR",
    USD: "US",
    ZAR: "ZA"
  };

let base_URL =  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_pthoEMhNuNgRWmJI4T2z6diaHc1m0RQBMpW3xkdS&currencies=";

const drop = document.querySelectorAll(".drop select");

let fromSElect = document.querySelector(".from select");
let toSelect = document.querySelector(".to select");
let result = document.querySelector(".result");
let conversion = document.querySelector(".conversion");

for(let select of drop) // selects the select of name "to"
{
for(code in countryList)
{
let newoption = document.createElement("option");
newoption.innerText = code;
newoption.value = code;
select.append(newoption);

 if (select.name=="to" && code=="INR")
{ 
  newoption.selected = true;
}
}

select.addEventListener("change",(evt)=>{
  updateFlag(evt.target);
  // console.log(evt.target); //!gives <select name="from/to">
})
}

const updateFlag = (updateInfo) =>{
 let Curr_code =  updateInfo.value;
 let Country_code = countryList[Curr_code];
 let newSrc =  `https://flagsapi.com/${Country_code}/shiny/64.png`;

let img = updateInfo.parentElement.querySelector("img");
img.src = newSrc;

} 
let button = document.querySelector("button") 
button.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector("form input");
 let amount_val = amount.value;
  if(amount_val <1 || amount_val == '')
  {
    amount_val=1; 
  }
  const url = `${base_URL}${toSelect.value}%2C${fromSElect.value}`;
  let response = await fetch(url)
  let data1 = await response.json()
  // console.log(data.data);

// Get an array of the values of the 'data' object
let valuesArray = Object.values(data1.data);

// Access the first value
console.log(valuesArray[0]); // Output: 2323
conversion.innerText = `1 ${fromSElect.value} = ${valuesArray[0]} ${toSelect.value}`;

result.innerText = valuesArray[0] * amount_val;
  // console.log(fromSElect.value);
})
