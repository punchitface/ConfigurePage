(function() {
    var add_tel = $(".add-contact-tel")[0];
    var tel_context = $(".block-two")[0];
    var add_adr = $(".add-contact-adr");
    var previous = $();

    add_tel.onclick = function() {
        var tel_input = document.createElement("input");
        tel_input.className = "input user_phone";
        tel_input.placeholder = "Доп. телефон:";
        tel_context.insertBefore(tel_input, add_tel);
    }
}());