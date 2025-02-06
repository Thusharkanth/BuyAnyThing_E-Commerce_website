function validateReviewForm(){

    var reviewName=document.getElementById("review-form-name").value
    var reviewEmail=document.getElementById("review-form-email").value
    var reviewNumber=document.getElementById("review-form-number").value
    
    if ((reviewName && reviewEmail && reviewNumber)=='')
    {
        alert("Compalsory feilds cannot be empty")
    
    }

    else{

    if (!validateEmail(reviewEmail)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    else{
        alert("The review submitted successfully")
    }
}

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    }