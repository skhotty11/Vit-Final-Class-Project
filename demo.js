//login input
function security(){
    let input = document.getElementById("usr").value;
    console.log(input)

    let input2 = document.getElementById("secondInput").value;

    if(input === "12345" & input2 === "zxasqw"){
        console.log("Logged in")
        alert("Welcome! Login Successful.")
        location.href = "https://bruno-simon.com/";//redirected to new url
    }
    else{
        console.log("Invalid Login")
        alert("Invalid Login. Please Try Again.")
    }
}

// when hovered over image, will enlarge.
function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}
// when not hovered over, image returns to original size
function normalImg(x) {
    x.style.height = "77px";
    x.style.width = "77px";
}
//get my button
mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}