const btnSubmit = document.querySelector('#submit');
const btnReset = document.querySelector('#reset');
const form = document.querySelector('#puppies-form');
const secOne = document.querySelector('#one');
const secTwo = document.querySelector('#two');
const age = document.querySelector('#date-btn');

/*input */
const answer = document.querySelector('.answer');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
let fullName = document.querySelector(".fullName");

form.addEventListener('submit', function (event) {
    event.preventDefault();
});
  

btnReset.style.backgroundColor = 'pink'; //test
btnReset.style.color = 'black'; //test

age.addEventListener('click', calculator);

function calculator() {
    const userinput = document.querySelector("#birthday").value;
    const birthday = new Date(userinput);
    const ageFinal = document.querySelector("#your-age");
    if(userinput == null || userinput == '') {
      document.querySelector("#message").innerHTML = "Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    let month_diff = Date.now() - birthday.getTime();
    
    //convert the calculated difference in date format
    let age_dt = new Date(month_diff); 
    
    //extract year from date    
    let year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    let age = Math.abs(year - 1970);
    
    //display the calculated age
    return ageFinal.innerHTML =  
        "Age is: " + age + " years. ";
    }
}


/*Oninput msg */
fname.addEventListener("input", messageFname);
lname.addEventListener("input", messageLname);


function messageFname() {
    return fname.value;
}

function messageLname(){
    form.style.marginTop = "-150px";
    answer.style.display = "block";
    const firstName = messageFname();
    fullName.innerHTML = "Hello " + firstName + " " +  lname.value + ", have a nice adoption day!";
}
