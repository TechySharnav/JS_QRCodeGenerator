var txt = document.getElementById('inpt');
var warn = document.getElementById('warning');

var qr = new QRCode("qrcode", {
    width: 512,
    height: 512
})

warn.style.opacity = 0;
warn.style.transform = 'translate-y(-30px)';


function generate() {
    if (txt.value !== '') {
        qr.makeCode(txt.value);
        warn.style.transform = 'translate-y(-30px)'
        warn.style.opacity = 0;
    } else {
        qr.clear();
        warn.style.opacity = 1;
        warn.style.transform = 'translate-y(30px)';
    }
}

document.body.onkeypress = function (e) {
    if (e.keyCode === 13) {
        generate();
    }
}