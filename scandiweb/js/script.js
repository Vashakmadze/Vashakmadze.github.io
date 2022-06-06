// declaring needed variables
const form = document.getElementById("product_form");
const submit = document.getElementById("submit_button");


function update() {
    
    // declaring needed variables
    const furniture = document.getElementById('furniture_inputs');
    const dvd = document.getElementById("dvd_input");
    const book = document.getElementById("book_input");
    const select = document.getElementById('productType');
    let option = select.options[select.selectedIndex].text;



    // handling drop down switcher logic
    if(option == "Furniture") {
        furniture.style.display = "flex";
        dvd.style.display = "none";
        book.style.display = "none";
    } else if(option == "DVD") {
        dvd.style.display = "flex";
        book.style.display = "none";
        furniture.style.display = "none";
    } else {
        book.style.display = "flex";
        furniture.style.display = "none";
        dvd.style.display = "none";
    }


}
function validateForm() {   
    const error_required = document.getElementById("error_required");
    const error_required_text = "Please, submit required data";
    const error_indicated = document.getElementById("error_indicated");
    const error_indicated_text = "Please, provide the data of indicated type";
    const select = document.getElementById('productType');
    let option = select.options[select.selectedIndex].text;



    let letterNumber = /^[0-9a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;

    // let x = document.forms["myForm"]["name"].value;
    // if (x == "") {
    //   console.log("rame");
    //   error_required.innerText = error_required_text;
    //   return false;
    // }

    

    let sku = document.forms["myForm"]["sku"].value;
    let name = document.forms["myForm"]["name"].value;
    let price = document.forms["myForm"]["price"].value;

    // validate name 
    if (name === "" || name == null) {
        error_required.innerText = error_required_text;
        return false;
    }

    // // validate sku
    if (sku === "" || sku == null) {
        error_required.innerText = error_required_text;
        return false;
    } else if (!sku.match(letterNumber)) {
        error_indicated.innerText = error_indicated_text;
        return false;
    } 

    // validate price
    if (price === "" || price == null) {
        error_required.innerText = error_required_text;
        return false;
    } else if (!price.match(numbers)) {
        error_indicated.innerText = error_indicated_text;
        return false;
    } 

    // // validate furniture
    if(option == "Furniture") {
        let height = document.forms["myForm"]["height"].value;
        let width = document.forms["myForm"]["width"].value;
        let length = document.forms["myForm"]["length"].value;

        // validate height
        if(height === "" || height == null ) {
            error_required.innerText = error_required_text;
            return false;
        } else if(!height.match(numbers)) {
            error_indicated.innerText = error_indicated_text;
            return false;
        }

        // validate width
        if(width === "" || width == null ) {
            error_required.innerText = error_required_text;
            return false;
        } else if(!width.match(numbers)) {
            error_indicated.innerText = error_indicated_text;
            return false;
        }

        // validate length
        if(length === "" || length == null ) {
            error_required.innerText = error_required_text;
            return false;
        } else if(!length.match(numbers)) {
            error_indicated.innerText = error_indicated_text;
            return false;
        }

    // validate dvd
    } else if(option == "DVD") {
        let size = document.forms["myForm"]["size"].value;

        // validate size
        if(size === "" || size == null ) {
            error_required.innerText = error_required_text;
            return false;
        } else if(!size.match(numbers)) {
            error_indicated.innerText = error_indicated_text;
            return false;
        }

    // validate book
    } else if(option == "Book") {
        let weight = document.forms["myForm"]["weight"].value;

        // validate weight
        if(weight === "" || weight == null ) {
            error_required.innerText = error_required_text;
            return false;
        } else if(!weight.match(numbers)) {
            error_indicated.innerText = error_indicated_text;
            return false;
        }
    }


}


