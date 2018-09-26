var phoneInput = new Cleave('[name="phone"]', {
    phone: true,
    prefix: '+7',
    phoneRegionCode: 'RU',
    blocks: [3, 3, 2, 2],
    noImmediatePrefix: true
});

// Modal Form Call-Close
function modalFormCall() {
    document.getElementById('modal-stamp-order-form').style.display='block';
    document.body.classList.add('no-scroll');
}
function modalFormClose() {
    document.getElementById('modal-stamp-order-form').style.display='none';
    document.body.classList.remove('no-scroll');
}
function modalFormClose_overlay() {
    var modal = document.getElementById('modal-stamp-order-form');
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
        }
    }
}
modalFormClose_overlay();

function validateForm(formThis) {
    var req_rules = {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        mail: /^[\w0-9\._-]+@\w+\.\w{2,4}$/
    };
    // event.preventDefault();
    var action = formThis.hasAttribute("action"),
        inputs = formThis.querySelectorAll( "input" ),
        phoneInput = formThis.querySelector("[name=phone]");
    for ( var i = 0; i < inputs.length; i++ ) {
        if (inputs[ i ].hasAttribute( "data-req")) {
            var name = inputs[ i ].getAttribute("name"),
                field = inputs[ i ].closest(".product-form__info-item"),
                value = inputs[ i ].value,
                label = field.querySelector(".info-name__error-message");
            if (req_rules[name] === undefined) {
                req_rules[name] = /^.+$/; // any symbol
            }
            if (req_rules[name].test(value)) {
                field.classList.remove("form__field_invalid");
                label.style.opacity = 0;
            } else {
                field.classList.add("form__field_invalid");
                label.style.opacity = 1;
                event.preventDefault();
            }
        }
        
    };
    // event.preventDefault();
}

// Check for Filled Input of the Form
function checkFilledInput(self) {
    if (self.closest(".product-form__info-item").classList.contains("form__field_invalid")) {
        self.closest(".product-form__info-item").classList.remove("form__field_invalid");
    }
    if (self.parentElement.querySelector(".info-name__error-message").style.opacity = 1) {
        self.parentElement.querySelector(".info-name__error-message").style.opacity = 0;
    }
}
function labelFilledInput(self) {
    if(self.value.length >= 1){
        self.nextElementSibling.classList.add('product-form__info-name_filled');
    } else {
        self.nextElementSibling.classList.remove('product-form__info-name_filled');
    }
}