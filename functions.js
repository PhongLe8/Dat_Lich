// This function is called when the form is submitted.
function submitForm() {
    // Get the form data.
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var problem = document.getElementById("problem").value;

    // Send the form data to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "action.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&phone=" + phone + "&email=" + email + "&brand=" + brand + "&model=" + model + "&problem=" + problem);

    // Handle the response from the server.
    xhr.onload = function() {
        if (xhr.status === 200) {
            // The form was submitted successfully.
            alert("Đặt lịch thành công!");
        } else {
            // The form was not submitted successfully.
            alert("Đặt lịch thất bại!");
        }
    };
}
