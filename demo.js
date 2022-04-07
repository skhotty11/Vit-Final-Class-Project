
function security(){
    let input = document.getElementById("usr").value;
    console.log(input)

    let input2 = document.getElementById("secondInput").value;
    if(input === "12345" & input2 === "zxasqw"){
        console.log("Logged in")
        alert("Welcome! Login Successful.")
    }
    else{
        console.log("Bad Login")
        alert("Invalid Login. Please Try Again.")
    }

    // alert("Our Servers Are Down For Scheduled Maintenance, Try Again Later.")

}