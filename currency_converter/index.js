const countryList = {
    // AED: "AE",
    // AFN: "AF",
    // XCD: "AG",
    // ALL: "AL",
    // AMD: "AM",
    // ANG: "AN",
    // AOA: "AO",
    // AQD: "AQ",
    // ARS: "AR",
    AUD: "AU",
    // AZN: "AZ",
    // BAM: "BA",
    // BBD: "BB",
    // BDT: "BD",
    // XOF: "BE",
    // BGN: "BG",
    // BHD: "BH",
    // BIF: "BI",
    // BMD: "BM",
    // BND: "BN",
    // BOB: "BO",
    BRL: "BR",
    // BSD: "BS",
    // NOK: "BV",
    // BWP: "BW",
    // BYR: "BY",
    // BZD: "BZ",
    CAD: "CA",
    // CDF: "CD",
    // XAF: "CF",
    // CHF: "CH",
    // CLP: "CL",
    CNY: "CN",
    // COP: "CO",
    // CRC: "CR",
    // CUP: "CU",
    // CVE: "CV",
    // CYP: "CY",
    CZK: "CZ",
    // DJF: "DJ",
    DKK: "DK",
    // DOP: "DO",
    // DZD: "DZ",
    // ECS: "EC",
    // EEK: "EE",
    // EGP: "EG",
    // ETB: "ET",
    EUR: "FR",
    // FJD: "FJ",
    // FKP: "FK",
    GBP: "GB",
    // GEL: "GE",
    // GGP: "GG",
    // GHS: "GH",
    // GIP: "GI",
    // GMD: "GM",
    // GNF: "GN",
    // GTQ: "GT",
    // GYD: "GY",
    // HKD: "HK",
    // HNL: "HN",
    // HRK: "HR",
    // HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    // IQD: "IQ",
    // IRR: "IR",
    ISK: "IS",
    // JMD: "JM",
    // JOD: "JO",
    JPY: "JP",
    // KES: "KE",
    // KGS: "KG",
    // KHR: "KH",
    // KMF: "KM",
    // KPW: "KP",
    KRW: "KR",
    // KWD: "KW",
    // KYD: "KY",
    // KZT: "KZ",
    // LAK: "LA",
    // LBP: "LB",
    // LKR: "LK",
    // LRD: "LR",
    // LSL: "LS",
    // LTL: "LT",
    // LVL: "LV",
    // LYD: "LY",
    // MAD: "MA",
    // MDL: "MD",
    // MGA: "MG",
    // MKD: "MK",
    // MMK: "MM",
    // MNT: "MN",
    // MOP: "MO",
    // MRO: "MR",
    // MTL: "MT",
    // MUR: "MU",
    // MVR: "MV",
    // MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    // MZN: "MZ",
    // NAD: "NA",
    // XPF: "NC",
    // NGN: "NG",
    // NIO: "NI",
    // NPR: "NP",
    NZD: "NZ",
    // OMR: "OM",
    // PAB: "PA",
    // PEN: "PE",
    // PGK: "PG",
    PHP: "PH",
    // PKR: "PK",
    PLN: "PL",
    // PYG: "PY",
    // QAR: "QA",
    RON: "RO",
    // RSD: "RS",
    RUB: "RU",
    // RWF: "RW",
    // SAR: "SA",
    // SBD: "SB",
    // SCR: "SC",
    // SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    // SKK: "SK",
    // SLL: "SL",
    // SOS: "SO",
    // SRD: "SR",
    // STD: "ST",
    // SVC: "SV",
    // SYP: "SY",
    // SZL: "SZ",
    // THB: "TH",
    // TJS: "TJ",
    // TMT: "TM",
    // TND: "TN",
    // TOP: "TO",
    TRY: "TR",
    // TTD: "TT",
    // TWD: "TW",
    // TZS: "TZ",
    // UAH: "UA",
    // UGX: "UG",
    USD: "US",
    // UYU: "UY",
    // UZS: "UZ",
    // VEF: "VE",
    // VND: "VN",
    // VUV: "VU",
    // YER: "YE",
    ZAR: "ZA"
  };

let base_URL =  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_pthoEMhNuNgRWmJI4T2z6diaHc1m0RQBMpW3xkdS&currencies=";

const drop = document.querySelectorAll(".drop select");

let fromSElect = document.querySelector(".from select");
let toSelect = document.querySelector(".to select");
let result = document.querySelector(".result");
let conversion = document.querySelector(".conversion");
// conversion.innerText = `1 ${fromSElect.value} equals ${valuesArray[0]} ${toSelect.value}``;

// document.addEventListener('DOMContentLoaded', function() {
//   var selectElement = document.querySelector('.mySelect');
//   var options = selectElement.options;
//   for (var i = 0; i < options.length; i++) {
//       if (options[i].value !== "USD") {
//           options[i].style.display = 'none';
//       }
//   }
// });


for(let select of drop)
{
for(code in countryList)
{
let newoption = document.createElement("option");
newoption.innerText = code;
newoption.value = code;
select.append(newoption);

if(select.name=="from" && code=="USD")
{ 
  newoption.selected = true;
}
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
