document.querySelectorAll('.buttonModalOpen').forEach(function (element) {
    element.onclick = oPen;
});

document.querySelectorAll('.buttonModalClose').forEach(function (element) {
    element.onclick = closePen;
});

function oPen() {
    let modOpen = this.dataset.winopen;
    document.querySelector(modOpen).classList.remove('hide');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) closePen();
    }
}

function closePen() {
    document.querySelectorAll('.modalWrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;    
}
