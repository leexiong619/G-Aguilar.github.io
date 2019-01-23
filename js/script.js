/*eslint-env browser*/

function showAlert() {
    var myText = "Your information was received and I'll get back to you in 48 hours.";
    alert(myText);
}

/*JS for Accordian*/

$(function () {

    // Default
    $('.example').beefup();

    // Open single
    $('.example-opensingle').beefup({
        openSingle: true,
        stayOpen: 2
    });

    // Fade animation
    $('.example-fade').beefup({
        animation: 'fade',
        openSpeed: 400,
        closeSpeed: 400
    });

    // Scroll
    $('.example-scroll').beefup({
        scroll: true,
        scrollOffset: -10
    });

    // Self close
    $('.example-selfclose').beefup({
        selfClose: true
    });

    // Hash
    $('.example-hash').beefup({
        hash: true
    });

    // Breakpoints
    $('.example-breakpoints').beefup({
        scroll: true,
        scrollOffset: -10,
        breakpoints: [{
                breakpoint: 768,
                settings: {
                    animation: 'fade',
                    scroll: false
                }
                    },
            {
                breakpoint: 1024,
                settings: {
                    animation: 'slide',
                    openSpeed: 800,
                    openSingle: true
                }
                    }
                ]
    });

    // API Methods
    var $beefup = $('.example-api').beefup();
    $beefup.open($('#beefup'));

    // Callback
    $('.example-callbacks').beefup({
        onInit: function ($el) {
            $el.css('border-color', 'blue');
        },
        onOpen: function ($el) {
            $el.css('border-color', 'green');
        },
        onClose: function ($el) {
            $el.css('border-color', 'red');
        }
    });

    // Use HTML5 data attributes
    $('.example-data').beefup();

    // Tabs
    $('.tab__item').beefup({
        animation: '',
        openSingle: true,
        openSpeed: 0,
        closeSpeed: 0,
        onOpen: function ($el) {
            // Add active class to tabs
            $('a[href="#' + $el.attr('id') + '"]').parent().addClass(this.openClass)
                .siblings().removeClass(this.openClass);
        }
    });

    // Dropdown
    $('.dropdown').beefup({
        animation: 'fade',
        openSingle: true,
        selfClose: true
    });
});




/*Data Validation JS*/
/*
const input = document.querySelectorAll("input, select, email");
inputs.forEach(input => {
    input.addEventListener(
    "invalid",
    event => {
        input.classList.add("error");
    },
        false
    };
});
*/

/* Form Popup JS for Calendar */
