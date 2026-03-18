document.addEventListener("DOMContentLoaded", function(){

    const productTitle = document.querySelector(".product-title").innerText;

    const modal = document.getElementById("orderModal");
    const closeBtn = document.querySelector(".modal-close");

    const productField = document.getElementById("productName");
    const urlField = document.getElementById("productURL");
    const productLabel = document.getElementById("selectedProduct");

    const form = document.getElementById("orderForm");
    const formSuccess = document.getElementById("formSuccess");
    const hiddenIframe = document.getElementById("hidden_iframe");

    let formSubmitted = false;

    // === EMAIL POPUP ===
    document.querySelector(".order-btn").addEventListener("click", function(){
        productField.value = productTitle;
        urlField.value = window.location.href;
        productLabel.innerHTML = "<strong>Товар:</strong> " + productTitle;
        modal.style.display = "block";
    });

    // === WHATSAPP ===
    document.querySelector(".whatsapp-btn").addEventListener("click", function(){
        const phone = "996556447445"; // номер WhatsApp в международном формате
        const message = "Здравствуйте! Хочу заказать товар: " + productTitle + "\n" + window.location.href;
        const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
    });

    // === ЗАКРЫТИЕ POPUP ===
    closeBtn.onclick = function(){ modal.style.display = "none"; }
    window.onclick = function(event){
        if(event.target == modal){ modal.style.display = "none"; }
    }

    // === ОТПРАВКА ФОРМЫ ===
    form.addEventListener("submit", function(){ formSubmitted = true; });

    hiddenIframe.addEventListener("load", function(){
        if(formSubmitted){
            formSuccess.style.display = "block";
            form.reset();

            // Закрыть popup через 4 сек
            setTimeout(function(){
                modal.style.display = "none";
                formSuccess.style.display = "none";
            },4000);

            formSubmitted = false;
        }
    });

});