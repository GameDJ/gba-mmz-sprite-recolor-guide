var zero_sprite = [
[,,,,,,,,,,,,,,,,,,11,,,,,10,,,,,,,,,,,],
[,,,,,,,,,,,,,,,,,,10,11,,,,10,10,,,,,,,,,,],
[,,,,,,,,,,,,,,,,,,9,10,11,,,9,10,10,,,,,,,,,],
[,,,,,,,,,,,,,,,,,,9,9,12,11,2,2,9,10,,,,,,,,,],
[,,,,,,,,,,,,,,,,,,2,9,10,12,11,3,2,9,10,,,,,,,,],
[,,,,,,,,,,,,,,,,,2,3,2,9,11,13,10,3,2,10,,,,,,,,],
[,,,,,,,,,,,,,,,,3,2,3,2,9,10,12,13,11,2,9,10,,,,,,,],
[,,,,,,,,,,,,,,,3,5,4,2,2,2,9,10,12,11,4,5,10,,,,,,,],
[,,,,,,,,,,,,,,7,3,4,5,4,2,2,1,1,9,12,11,4,10,,,,,,,],
[,,,,,10,10,10,,,,,2,2,2,9,3,5,12,11,1,6,4,1,9,12,11,9,,,,,,,],
[,,,,10,11,11,11,2,2,2,2,3,4,3,2,9,4,11,12,5,6,5,1,13,1,,,,,,,,,],
[,,,,10,11,12,11,2,2,3,3,3,3,3,2,10,9,10,4,5,5,13,13,13,6,,,,,,,,,],
[,,,10,11,11,12,11,2,2,2,2,2,2,2,11,12,11,9,1,3,4,13,9,6,,,,,,,,,,],
[,,,10,11,12,12,11,10,2,2,2,9,9,10,7,8,12,11,10,9,1,6,6,,,,,,,,,,,],
[,,,10,11,12,12,11,10,7,8,9,9,9,10,8,11,12,11,7,10,2,2,,,,,,,2,3,3,,,],
[,,9,7,8,8,8,7,9,8,8,9,10,10,10,10,10,11,11,7,10,3,2,,,,,2,2,3,4,5,3,,],
[,,9,6,2,2,2,6,9,8,7,9,9,10,11,11,11,10,10,9,2,2,3,2,,,9,6,5,5,3,4,3,,],
[,,2,2,3,3,3,2,7,8,6,6,2,2,2,9,10,11,11,10,2,2,2,3,2,9,7,7,3,4,2,5,5,2],
[,,2,3,3,3,3,3,2,7,6,2,4,3,2,2,2,2,,,,2,2,2,9,10,7,7,2,3,2,3,4,2],
[,2,4,3,3,3,2,4,5,2,6,2,4,5,4,2,3,2,,,,,2,9,10,10,6,7,2,2,4,5,2,,],
[,2,4,5,3,5,3,2,4,2,6,2,3,3,5,3,4,3,2,,,,9,9,10,10,10,6,6,2,3,2,,,],
[,,2,4,3,4,3,7,2,6,2,2,3,3,3,4,4,2,3,2,2,,9,9,9,9,9,9,1,2,2,,,,],
[,,,2,2,4,2,7,7,6,2,3,3,3,2,4,3,2,2,3,3,2,,9,9,9,9,,,,,,,,],
[,,,,,2,6,7,7,2,2,3,3,2,2,1,1,2,2,2,3,3,2,,,,,,,,,,,,],
[,,,,,,6,10,9,2,3,4,3,2,2,,,1,1,2,2,2,3,2,9,,,,,,,,,,],
[,,,,,,10,11,11,2,2,3,3,2,,,,,,1,2,2,2,2,11,9,,,,,,,,,],
[,,,,,,10,12,12,11,2,2,2,6,,,,,,,1,2,10,11,10,9,,,,,,,,,],
[,,,,,10,11,12,12,12,11,9,2,6,,,,,,,9,10,10,10,10,9,,,,,,,,,],
[,,,,9,10,12,12,12,11,11,9,7,6,,,,,,,9,10,10,10,9,,,,,,,,,,],
[,,,6,7,6,12,12,11,10,9,,6,6,6,,,,,,9,10,10,10,9,,,,,,,,,,],
[,,6,7,8,8,7,6,10,9,,,,6,6,,,,,,,9,10,10,9,9,,,,,,,,,],
[,,10,6,7,7,8,8,9,,,,,,,,,,,,9,9,10,6,6,7,9,,,,,,,,],
[,,9,10,11,6,7,7,9,,,,,,,,,,,,9,6,7,7,7,6,9,,,,,,,,],
[,9,10,11,11,11,10,6,9,,,,,,,,,,,,9,6,6,6,6,9,10,10,9,,,,,,],
[1,10,11,12,12,12,10,9,,,,,,,,,,,,3,4,9,9,10,10,11,11,11,10,9,,,,,],
[1,10,11,12,13,12,10,9,,,,,,,,,,,,3,3,3,10,10,10,10,11,11,11,9,,,,,],
[2,10,11,11,11,11,10,2,,,,,,,,,,,,2,3,3,9,9,3,3,4,4,3,2,,,,,],
[2,3,4,4,4,4,3,2,,,,,,,,,,,,,2,2,2,2,2,2,2,2,2,2,,,,,],
[,2,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
];

var zero_sprite_rgb = ['(64, 72, 64)', // 1 dark gray/brown
                       '(0, 40, 104)', // 2 dark blue
                       '(64, 96, 136)', // 3 mid blue
                       '(144, 176, 208)', // 4 light blue
                       '(248, 248, 248)', // 5 white
                       '(216, 128, 16)', // 6 dark yellow
                       '(248, 184, 0)', // 7 mid yellow
                       '(248, 232, 128)', // 8 light yellow
                       '(152, 16, 64)', // 9 dark red
                       '(208, 32, 88)', // 10 middark red
                       '(248, 80, 96)', // 11 midlight red
                       '(248, 160, 136)', // 12 light red
                       '(248, 208, 168)' // 13 skin color
                      ];

var zero_sprite_addresses = ['83002CC2', // 1 dark gray/brown
                             '83002CC4', // 2 dark blue
                             '83002CC6', // 3 mid blue
                             '83002CC8', // 4 light blue
                             '83002CCA', // 5 white
                             '83002CCC', // 6 dark yellow
                             '83002CCE', // 7 mid yellow
                             '83002CD0', // 8 light yellow
                             '83002CD4', // 9 dark red
                             '83002CD6', // 10 middark red
                             '83002CD8', // 11 midlight red
                             '83002CDA', // 12 light red
                             '83002CD2' // 13 skin color
                            ];

function resetElement(elementId, recreateBool, containerId, elementType, height, bgColor) {
    // deletes canvas if already open and returns new canvas element
    var element = document.getElementById(elementId);
    if (!element)
        element = document.getElementsByClassName(elementId);
    if (element) {
        if (element instanceof HTMLCollection)
            while (element.length > 0)
                element[0].parentNode.removeChild(element[0]);
        else
            element.parentNode.removeChild(element);
    }
    if (recreateBool) {
        var container = document.getElementById(containerId);
        var element = document.createElement(elementType) || document.createElement('DIV');
        element.id = elementId;
        element.style.height = height || '0px';
        element.style.backgroundColor = bgColor || '';
        container.appendChild(element);
        return element;
    }
}

function showZero() {
    var canvas = resetElement('sprite-canvas', true, 'sprite-container', 'DIV', '780px', 'gray');
    for (var i = 0; i < zero_sprite.length; i++) {
        for (var j = 0; j < zero_sprite[i].length; j++) {
            var pixel = document.createElement("DIV");
            pixel.className = "sprite-pixel";
            if (!zero_sprite[i][j]) {
                pixel.style.visibility = 'hidden';
            } else {
                pixel.style.backgroundColor = 'rgb' + zero_sprite_rgb[zero_sprite[i][j]-1];
                pixel.className = 'sprite-pixel pix' + zero_sprite[i][j].toString();
                pixel.setAttribute('onclick', 'selectPixel(this)');
            }
            canvas.appendChild(pixel);
        }
    }
    populateColorControls(zero_sprite_rgb, zero_sprite_addresses);
    // resetElement(targetID, true, 'color-controls-container', 'P'); // optional
}

function populateColorControls(rgb_colors, color_addresses) {
    resetElement('color-control-row', false, 'color-controls');
    var table = document.getElementById('color-controls');
    var rowArr = []; // holds arrays of each row's TDs [row][column]
    var rows = []; // holds actual row elements (TRs)
    for (var i = 0; i < zero_sprite_addresses.length; i++) {
        rowArr[i] = []; // define current row as a matrix
        for (var j = 0; j < 4; j++) // populate current row with 4 TDs
            rowArr[i][j] = document.createElement("TD");
        rowArr[i][0].innerHTML = color_addresses[i]; // first row displays address
        rowArr[i][1].style.backgroundColor = 'rgb' + rgb_colors[i]; // 2nd, colors
        var inputBox = document.createElement("INPUT"); // 3rd is color input box
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('id', 'input' + (i+1)); // eg id="input4" is 4th row
        inputBox.setAttribute('size', '4');
        inputBox.setAttribute('maxLength', '13');
        inputBox.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                console.log(this.id.replace('input', 'update'));
                document.getElementById(this.id.replace('input', 'update')).click();
            }
        });
        rowArr[i][2].appendChild(inputBox); // puts inputBox into the TD
        var updateButton = document.createElement("BUTTON"); // update from input
        updateButton.setAttribute('id', 'update' + (i+1));
        updateButton.setAttribute('onclick', 'refreshPixel('+(i+1)+')');
        updateButton.innerHTML = "Update";
        rowArr[i][3].appendChild(updateButton);

        rows[i] = document.createElement("TR");
        rows[i].className = 'color-control-row';
    }
    // place the rows into the table, then place all the TDs into their rows
    for (var i = 0; i < rowArr.length; i++) {
        table.appendChild(rows[i]);
        for (var j = 0; j < 4; j++)
            rows[i].appendChild(rowArr[i][j]);
    }
}

// select all matching 'pixels'; takes an element of class pix#
function selectPixel(pix) {
    var control = document.getElementById('input' + pix.className.replace('sprite-pixel pix', ''));
    control.focus();
    control.select();
    /*var matching = document.getElementsByClassName(pix.className);
    for (var i = 0; i < matching.length; i++) {
        matching[i].style.outline = '1px solid white';
    }*/
}

// refresh corresponding pixel with inputted color value
function refreshPixel(num) {
    var newColor = document.getElementById('input' + num.toString()).value;
    var matching = document.getElementsByClassName('pix' + num.toString());
    if (newColor) {
        if (isRGB(newColor)) {
            newColor = 'rgb(' + isRGB(newColor) + ')';
        }
        if (isHex(newColor))
            newColor = '#' + isHex(newColor);
        for (var i = 0; i < matching.length; i++) {
                matching[i].style.backgroundColor = newColor;
        }
    }
}

function refreshAllPixels() {
    for (var i = 0; i < zero_sprite_addresses.length; i++)
        refreshPixel(i+1);
}

function outputCodes(targetID) {
    var target = resetElement(targetID, true, 'color-controls-container', 'P');
    //var target = document.getElementById(targetID);
    var colorArr = [];
    for (var i = 0; i < zero_sprite_addresses.length; i++) {
        var input = document.getElementById('input' + (i+1));
        if (input.value)
            target.innerHTML = target.innerHTML + zero_sprite_addresses[i] + ' ' + convertToGBA(input.value) + '<br>';
    }
}

function convertToGBA(color) {
    color = isHex(color);
    if (color) {
        if (isHex(color).length === 4)
            return color;
        else {
            if (isHex(color).length === 8)
                color = color.substr(0, 6);
            var arrRGB = [];
            var finalCode = '';
            for (var i = 0; i < 3; i++) {
                arrRGB[i] = parseInt(color.substr(i * (isHex(color).length / 3), isHex(color).length / 3), 16);
                arrRGB[i] = (Math.floor(parseInt(arrRGB[i]) / 8)).toString(2); // converts each 8bit hex to 5bit hex-sized binary eg FF -> 11111
                while (arrRGB[i].length < 5)
                    arrRGB[i] = '0' + arrRGB[i];
                finalCode = arrRGB[i] + finalCode;
            }
            finalCode = parseInt(finalCode, 2).toString(16);
            while (finalCode.length < 4)
                finalCode = '0' + finalCode;
            finalCode = finalCode.toUpperCase();
        }
        return finalCode;
    }
}
    
function isHex(code) {
    code = code.trim();
    if (code.charAt(0) === '#')
        code = code.slice(1);
    code = code.toUpperCase();
    var hexDigits = '0123456789ABCDEF'; //['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for (var i = 0; i < code.length; i++)
        //for (var j = 0; j < hexDigits.length; j++)
        if (hexDigits.indexOf(code.charAt(i)) === -1)
            return false; // not hex if a character isnt a hex numeral
    if (code.length === 8 || code.length === 6 || code.length === 4 || code.length === 3) // 8: Hex with alpha (RGBA), 6: 6digit hex eg #F2F2F2, 4: GBA, 3: 3digit hex eg #DDD
        return code;
    else return false;
}

function isRGB(code) {
    code = code.trim();
    code = code.replace(/rgb/g, '');
    code = code.replace(/\(/g, '');
    code = code.replace(/\)/g, '');
    code = code.replace(/ /g, '');
    var arrRGB = code.split(',');
    for (var i = 0; i < arrRGB.length; i++)
        if (arrRGB[i] < 0 || arrRGB[i] > 255)
            return false;
    if (arrRGB.length === 3 || arrRGB.length === 4)
        return arrRGB.join();
    else return false;
}