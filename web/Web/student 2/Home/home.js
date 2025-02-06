document.addEventListener('DOMContentLoaded', function() {
    const text = "Welcome to BuyAnything.com\nYour Ultimate Online Computer Store\nWelcome to BuyAnything.com, your go-to destination for all your computer and technology needs. We are delighted to have you here and are committed to providing you with the best online shopping experience. Whether you're looking for the latest laptops, powerful desktops, cutting-edge gaming systems, or essential accessories, we have everything you need to stay ahead in the digital world.\nThank you for choosing BuyAnything.com. We look forward to serving you and making your online shopping experience exceptional.\nHappy shopping!";
    let index = 0;
    const typingSpeed = 50; // Adjust typing speed (milliseconds)

    function type() {
        if (index < text.length) {
            if (text.charAt(index) === '\n') {
                document.getElementById('typing-text').innerHTML += '<br>';
            } else {
                document.getElementById('typing-text').innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});