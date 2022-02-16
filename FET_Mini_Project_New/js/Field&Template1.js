function addNewWeField() {
    console.log("Adding new Work Experience");

    //creating new text area (creation of new node)
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter here")

    //storing reference of form group
    let weOb = document.getElementById("we");
    //storing reference of button
    let weAddButtonOb = document.getElementById("weAddButton");

    //add new newNode, before weAddButtonOB
    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAqField() {

    console.log("Adding new Academic qualification")

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter Here")

    //storing reference of form group
    let aqOb = document.getElementById("aq");
    //storing reference of button
    let aqAddButtonOb = document.getElementById("aqAddButton");

    //add new newNode, before aqAddButtonOb
    aqOb.insertBefore(newNode, aqAddButtonOb);
}


//genrating CV

function genrateCV() {
    console.log("Generating CV");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT");

    nameT1.innerHTML = nameField;

    //direct
    //setting template name with the name field
    document.getElementById("nameT2").innerHTML = nameField;

    //setting profile picture

    const image_input = document.querySelector('#fileTag');
    var uploaded_image = "";

    image_input.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploaded_image = reader.result
            document.querySelector('#previewImg').style.backgroundImage = `url(${uploaded_image})`

        })
        reader.readAsDataURL(image_input.files[0])
    })



    //same for the contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    //work experience
    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //Academic Experience

    let aqs = document.getElementsByClassName("aqField");

    let str2 = "";

    for (let e of aqs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str2;
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template2").style.display = "none";
    document.getElementById("cv-template3").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    


}

//Script for template 2








function printCV() {
    let doc = new jsPDF('p','pt','a4');

    doc.addHTML(document.body,function() {
        doc.save('html.pdf');
    });
}