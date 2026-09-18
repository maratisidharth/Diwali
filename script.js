document.addEventListener("DOMContentLoaded", function () {

    const whatsappButtons = document.querySelectorAll(".whatsapp-btn");


    const whatsappNumber = "9493982659";

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const product = button.getAttribute("data-product");

            const message =
                "Hello, I would like to get more details about  HAPPY DIWALI " +
                product + 
                ".";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        });

    });

});
