let age = document.getElementById('age').value
function validation() {
    if (age > 17) {
        return document.write( "You can Drive" )
    } else {
        return document.write ( "You are so young to drive" )
    }
}