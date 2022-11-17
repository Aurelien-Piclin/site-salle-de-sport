function testSujCont() {
    var validation1;
    var x = document.getElementById("sujet").value;
    var y = document.getElementById("message").value;

    if (x == "" || y == "") {
        validation1 = false;
        if (x == "") {
            alert("Entrez le sujet s.v.p !")
        }
        if (y == "") {
            alert("Entrez un message s.v.p !")
        }
    }
    else {
        validation1 = true;
    }
    console.log("Validation1 :" + validation1);
    return validation1;
}

function testArobase() {
    var filtre = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    var a = document.getElementById("email").value;
    var validation2 = filtre.test(a);
    console.log("Validation2 :" + validation2);
    if (validation2 == false) {
        alert("L'adresse mail n'est pas correcte !")
    }
    return validation2;
}


function validationEnvoi() {

    if (testSujCont() == true && testArobase() == true) {
        alert("Le formulaire est correcte et a été transmis");
    }
    else {
        alert("Le formulaire ne sera pas envoyé !");
    }
}