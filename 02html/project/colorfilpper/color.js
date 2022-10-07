const changeBackgroundColor = function() {
    let red, green, blue;
    red = Math.floor(257*Math.random());
    green = Math.floor(257*Math.random());
    blue = Math.floor(257*Math.random());
    redHexStr = String(red.toString(16));
    greenHexStr = String(green.toString(16));
    blueHexStr = String(blue.toString(16));
    (redHexStr.length == 1) ? (redHexStr = '0'+redHexStr) : (null);
    (greenHexStr.length == 1) ? (greenHexStr = '0'+greenHexStr) : (null);
    (blueHexStr.length == 1) ? (blueHexStr = '0'+blueHexStr) : (null);
    let colorText = '#'+redHexStr+greenHexStr+blueHexStr;
    console.log(colorText);
    colorTextSpan = document.querySelector("#colorVal span");
    colorTextSpan.innerText = colorText;
    document.body.style.backgroundColor = colorText;
}