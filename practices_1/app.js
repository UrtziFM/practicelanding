document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validation); 
  });

let age = document.getElementById('age').value
function validation() {
    if (age > 17) {
        return document.write( "You can Drive" )
    } else {
        return document.write ( "You are so young to drive" )
    }
}

let result = document.getElementById('result').value
console.log(result)

function validation_exam() {
    if (result > 0 && result <= 10) {
        if (result < 3) {
            alert("Muy deficiente");
        }
        else if (result < 5) {
            alert("Insuficiete");
        }
        else if (result < 6) {
            alert("Suficiente");
        }
        else if (result < 7) {
            alert("Bien");
        }
        else if (result < 9) {
            alert("Notable"); 5
        }
        else if (result >= 9) {
            alert("Sobresaliente");
        }
    }
    //SI LA NOTA NO ES ENTRE 0 Y 10
    else {
        alert("Nota erronea");
    }
}

