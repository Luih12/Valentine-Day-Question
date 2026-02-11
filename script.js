function selectOption(option) {

    if (option === 'si') {

        flashRainbowColors(function() {

            document.getElementById('question').innerText = "¡¡YEEEY!! 💖";

            document.getElementById('image-container').innerHTML =
                '<img src="yes.gif" alt="Feliz">';

            document.getElementById('options').style.display = 'none';
        });

    } else if (option === 'no') {

        document.getElementById('no-button').innerText = "¿Estás segura?";

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5;
        yesButton.style.fontSize = newSize + 'px';
    }
}


function flashRainbowColors(callback) {

    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        if (callback) {
            callback();
        }
    }, 2000);
}
