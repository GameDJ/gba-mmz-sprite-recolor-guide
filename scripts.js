var zero_sprite = [
    [,,,,,,,,,,,,,,,,,,12,,,,,11,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,11,12,,,,11,11,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,10,11,12,,,10,11,11,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,10,10,13,12,2,2,10,11,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,2,10,11,13,12,3,2,10,11,,,,,,,,],
    [,,,,,,,,,,,,,,,,,2,3,2,10,12,9,11,3,2,11,,,,,,,,],
    [,,,,,,,,,,,,,,,,3,2,3,2,10,11,13,9,12,2,10,11,,,,,,,],
    [,,,,,,,,,,,,,,,3,5,4,2,2,2,10,11,13,12,4,5,11,,,,,,,],
    [,,,,,,,,,,,,,,7,3,4,5,4,2,2,1,1,10,13,12,4,11,,,,,,,],
    [,,,,,11,11,11,,,,,2,2,2,10,3,5,13,12,1,6,4,1,10,13,12,10,,,,,,,],
    [,,,,11,12,12,12,2,2,2,2,3,4,3,2,10,4,12,13,5,6,5,1,9,1,,,,,,,,,],
    [,,,,11,12,13,12,2,2,3,3,3,3,3,2,11,10,11,4,5,5,9,9,9,6,,,,,,,,,],
    [,,,11,12,12,13,12,2,2,2,2,2,2,2,12,13,12,10,1,3,4,9,10,6,,,,,,,,,,],
    [,,,11,12,13,13,12,11,2,2,2,10,10,11,7,8,13,12,11,10,1,6,6,,,,,,,,,,,],
    [,,,11,12,13,13,12,11,7,8,10,10,10,11,8,12,13,12,7,11,2,2,,,,,,,2,3,3,,,],
    [,,10,7,8,8,8,7,10,8,8,10,11,11,11,11,11,12,12,7,11,3,2,,,,,2,2,3,4,5,3,,],
    [,,10,6,2,2,2,6,10,8,7,10,10,11,12,12,12,11,11,10,2,2,3,2,,,10,6,5,5,3,4,3,,],
    [,,2,2,3,3,3,2,7,8,6,6,2,2,2,10,11,12,12,11,2,2,2,3,2,10,7,7,3,4,2,5,5,2],
    [,,2,3,3,3,3,3,2,7,6,2,4,3,2,2,2,2,,,,2,2,2,10,11,7,7,2,3,2,3,4,2],
    [,2,4,3,3,3,2,4,5,2,6,2,4,5,4,2,3,2,,,,,2,10,11,11,6,7,2,2,4,5,2,,],
    [,2,4,5,3,5,3,2,4,2,6,2,3,3,5,3,4,3,2,,,,10,10,11,11,11,6,6,2,3,2,,,],
    [,,2,4,3,4,3,7,2,6,2,2,3,3,3,4,4,2,3,2,2,,10,10,10,10,10,10,1,2,2,,,,],
    [,,,2,2,4,2,7,7,6,2,3,3,3,2,4,3,2,2,3,3,2,,10,10,10,10,,,,,,,,],
    [,,,,,2,6,7,7,2,2,3,3,2,2,1,1,2,2,2,3,3,2,,,,,,,,,,,,],
    [,,,,,,6,11,10,2,3,4,3,2,2,,,1,1,2,2,2,3,2,10,,,,,,,,,,],
    [,,,,,,11,12,12,2,2,3,3,2,,,,,,1,2,2,2,2,12,10,,,,,,,,,],
    [,,,,,,11,13,13,12,2,2,2,6,,,,,,,1,2,11,12,11,10,,,,,,,,,],
    [,,,,,11,12,13,13,13,12,10,2,6,,,,,,,10,11,11,11,11,10,,,,,,,,,],
    [,,,,10,11,13,13,13,12,12,10,7,6,,,,,,,10,11,11,11,10,,,,,,,,,,],
    [,,,6,7,6,13,13,12,11,10,,6,6,6,,,,,,10,11,11,11,10,,,,,,,,,,],
    [,,6,7,8,8,7,6,11,10,,,,6,6,,,,,,,10,11,11,10,10,,,,,,,,,],
    [,,11,6,7,7,8,8,10,,,,,,,,,,,,10,10,11,6,6,7,10,,,,,,,,],
    [,,10,11,12,6,7,7,10,,,,,,,,,,,,10,6,7,7,7,6,10,,,,,,,,],
    [,10,11,12,12,12,11,6,10,,,,,,,,,,,,10,6,6,6,6,10,11,11,10,,,,,,],
    [1,11,12,13,13,13,11,10,,,,,,,,,,,,3,4,10,10,11,11,12,12,12,11,10,,,,,],
    [1,11,12,13,9,13,11,10,,,,,,,,,,,,3,3,3,11,11,11,11,12,12,12,10,,,,,],
    [2,11,12,12,12,12,11,2,,,,,,,,,,,,2,3,3,10,10,3,3,4,4,3,2,,,,,],
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
    '(248, 208, 168)', // 9 skin color
    '(152, 16, 64)', // 10 dark red
    '(208, 32, 88)', // 11 middark red
    '(248, 80, 96)', // 12 midlight red
    '(248, 160, 136)' // 13 light red
];

var zero_sprite_addresses = ['83002CC2', // 1 dark gray/brown
    '83002CC4', // 2 dark blue
    '83002CC6', // 3 mid blue
    '83002CC8', // 4 light blue
    '83002CCA', // 5 white
    '83002CCC', // 6 dark yellow
    '83002CCE', // 7 mid yellow
    '83002CD0', // 8 light yellow
    '83002CD2', // 9 skin color
    '83002CD4', // 10 dark red
    '83002CD6', // 11 middark red
    '83002CD8', // 12 midlight red
    '83002CDA' // 13 light red
];

var zx_sprite = [
    [,,,,,,,,,,,,,,7,,,,,,,6,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,6,7,7,,,,,6,6,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,6,6,8,7,,,,6,6,6,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,6,6,6,8,7,1,9,9,9,6,6,,,,,,,,,,],
    [,,,,,,,,,,,,,,,6,6,6,7,8,8,1,1,9,15,6,6,,,,,,,,,],
    [,,,,,,,,,,,,,,,,6,6,6,7,12,8,1,1,9,15,6,,,,,,,,,],
    [,,,,,,,,,,,,3,3,,,1,6,4,6,8,12,7,1,2,9,15,6,,,,,,,,],
    [,,,,,,,,,,,,2,4,3,3,1,2,3,5,7,8,8,7,15,15,5,15,,,,,,,,],
    [,,,,,,,,,,,,,2,5,4,3,1,1,5,6,7,8,8,7,9,15,6,,,,,,,,],
    [,,,,,,,,,,6,6,6,6,2,5,5,7,7,5,14,13,3,1,8,8,6,,,,,,,,,],
    [,,,,,,,,,,6,12,12,7,6,2,5,5,8,3,13,12,5,1,13,6,,,,,,,,,,],
    [,,,,6,6,6,,,1,6,7,8,12,7,7,2,3,5,7,6,12,12,12,12,13,6,,,,,,,,,],
    [,,,6,7,8,7,1,1,2,5,7,7,8,8,7,14,6,6,4,7,6,12,7,13,6,6,,,,,2,,,,],
    [,,9,15,9,12,7,2,2,1,4,5,7,7,7,6,10,14,1,6,6,6,14,14,14,,,,,,2,5,2,,,],
    [,,9,5,15,12,8,7,1,1,2,4,3,6,6,8,8,11,1,1,14,13,6,6,6,6,,,,,2,5,2,2,,],
    [,,14,10,11,10,8,7,6,10,10,2,6,6,7,8,12,13,2,10,13,6,7,7,7,6,,,14,1,3,2,1,4,2,],
    [,14,10,13,2,2,13,6,10,10,10,13,6,7,6,7,7,2,2,8,7,6,7,6,2,1,,14,2,5,5,1,4,2,4,2],
    [14,13,2,2,5,1,14,10,10,13,13,1,6,7,8,1,1,2,6,6,6,6,3,1,,6,13,1,4,2,1,2,3,3,2],
    [14,2,4,2,5,1,14,10,10,13,13,1,1,2,2,1,1,1,7,7,6,3,2,1,1,6,10,13,1,3,2,1,2,1,],
    [,2,3,5,3,2,3,2,10,10,13,13,2,4,4,2,2,1,3,2,,,1,1,2,1,7,7,10,2,1,1,1,1,,],
    [,2,5,3,4,1,1,5,2,13,13,2,3,2,1,15,5,4,9,2,2,,,1,1,6,7,7,6,1,13,14,14,,,],
    [,,2,4,1,2,1,5,2,13,13,2,3,5,2,1,5,3,1,3,3,2,2,,6,6,6,6,6,6,6,,,,,],
    [,,,1,,13,10,1,10,13,2,3,4,5,4,1,4,2,1,3,3,3,3,2,,6,6,6,6,,,,,,,],
    [,,,,,13,10,10,10,13,2,3,5,5,4,2,1,1,2,3,3,3,4,3,2,,,7,7,,,,,,,],
    [,,,,,13,10,10,6,7,2,3,5,4,3,2,,,1,1,2,3,3,5,3,2,7,8,6,,,,,,,],
    [,,,,,,13,10,6,12,7,6,7,7,2,,,,,,1,1,2,3,2,6,8,7,6,,,,,,,],
    [,,,,,,13,6,8,12,8,7,12,8,7,,,,,,,6,7,7,7,6,7,7,6,,,,,,,],
    [,,,,,,,6,8,8,7,12,8,8,6,,,,,,,6,8,12,8,6,7,6,,,,,,,,],
    [,,,,,,,6,7,7,12,8,8,6,6,,,,,,,6,7,7,8,6,6,6,,,,,,,,],
    [,,,,,,6,7,8,7,8,8,6,6,,,,,,,,,6,6,7,7,6,,,,,,,,,],
    [,,,,,13,6,8,8,7,6,6,6,13,,,,,,,,,,6,7,7,6,,,,,,,,,],
    [,,,,13,10,10,13,7,6,6,,13,10,13,,,,,,,,,6,7,6,14,14,,,,,,,,],
    [,,,6,13,10,11,11,13,14,,,,13,13,,,,,,,,14,13,13,13,10,13,14,,,,,,,],
    [,,,6,6,7,13,13,10,14,,,,,13,,,,,,,1,14,13,10,10,14,14,6,6,,,,,,],
    [,,6,7,7,8,8,7,6,14,,,,,,,,,,,,1,6,14,13,14,7,8,8,8,6,,,,,],
    [,,6,7,8,12,12,5,8,6,,,,,,,,,,,,1,2,6,14,6,6,7,7,8,7,6,,,,],
    [,,6,7,7,8,8,12,7,6,,,,,,,,,,,,1,2,3,1,6,2,2,3,3,2,1,,,,],
    [,,1,2,3,4,4,3,2,1,,,,,,,,,,,,,1,1,1,1,1,1,1,1,1,1,,,,],
    [,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,,,,,,,,]
];

var zx_sprite_rgb = ['(16, 33, 99)', // 1 darkdark blue
    '(57, 82, 148)', // 2 dark blue
    '(148, 156, 198)', // 3 mid blue
    '(214, 222, 247)', // 4 light blue
    '(255, 255, 255)', // 5 white
    '(156, 0, 41)', // 6 dark red
    '(247, 57, 74)', // 7 mid red
    '(255, 148, 132)', // 8 light red
    '(16, 140, 115)', // 9 dark gem
    '(255, 206, 24)', // 10 midlight yellow
    '(255, 255, 140)', // 11 light yellow
    '(255, 214, 189)', // 12 skin
    '(214, 132, 16)', // 13 middark yellow
    '(140, 74, 0)', // 14 darkdark yellow
    '(57, 231, 198)' // 15 light gem
];

var zx_sprite_addresses = ['120DAA22', // 1 darkdark blue
    '120DAA24', // 2 dark blue
    '120DAA26', // 3 mid blue
    '120DAA28', // 4 light blue
    '120DAA2A', // 5 white
    '120DAA2C', // 6 dark red
    '120DAA2E', // 7 mid red
    '120DAA30', // 8 light red
    '120DAA32', // 9 dark gem
    '120DAA34', // 10 midlight yellow
    '120DAA36', // 11  light yellow
    '120DAA38', // 12 skin
    '120DAA3A', // 13 middark yellow
    '120DAA3C', // 14 darkdark yellow
    '120DAA3E' // 15 light gem
];

/******************************************************************************************
 ****** TO-DO ******
 * main input, RGB sliders, and RGB inputs all affect each other for selected pixel
 * hex and rgb codes round to nearest gba
 * THEN implement conversion between hex rgb gba from radio buttons
 */

//------------------------- INITIALIZATION -------------------------//

var selected;
var colorType = 'rgb';
var current_sprite_rgb;
var current_sprite_addresses;


//------------------------------------------------------------------//

function resetElement(elementId, recreateBool, containerId, elementType, width, height, bgColor) {
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
        element.style.width = width || '0px';
        element.style.height = height || '0px';
        element.style.backgroundColor = bgColor || '';
        container.appendChild(element);
        document.getElementById("sprite-container").style.width = width;
        document.getElementById("color-controls-container").style.width = "calc(100% - " + width + ")";
        return element;
    }
}

function showZero() {
    current_sprite_rgb = zero_sprite_rgb;
    current_sprite_addresses = zero_sprite_addresses;
    var addressTrunc = document.getElementById("addressTrunc");
    addressTrunc.innerHTML = "83002C...";
    var canvas = resetElement('sprite-canvas', true, 'sprite-container', 'DIV', '680px', '780px', 'gray');
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
function showZX() {
    current_sprite_rgb = zx_sprite_rgb;
    current_sprite_addresses = zx_sprite_addresses;
    var addressTrunc = document.getElementById("addressTrunc");
    addressTrunc.innerHTML = current_sprite_addresses[0].substring(0, 6) + "...";
    var canvas = resetElement('sprite-canvas', true, 'sprite-container', 'DIV', '700px', '780px', 'gray');
    for (var i = 0; i < zx_sprite.length; i++) {
        for (var j = 0; j < zx_sprite[i].length; j++) {
            var pixel = document.createElement("DIV");
            pixel.className = "sprite-pixel";
            if (!zx_sprite[i][j]) {
                pixel.style.visibility = 'hidden';
            } else {
                pixel.style.backgroundColor = 'rgb' + zx_sprite_rgb[zx_sprite[i][j]-1];
                pixel.className = 'sprite-pixel pix' + zx_sprite[i][j].toString();
                pixel.setAttribute('onclick', 'selectPixel(this)');
            }
            canvas.appendChild(pixel);
        }
    }
    populateColorControls(zx_sprite_rgb, zx_sprite_addresses);
    // resetElement(targetID, true, 'color-controls-container', 'P'); // optional
}

function populateColorControls(rgb_colors, color_addresses) {
    resetElement('color-control-row', false, 'color-controls');
    var table = document.getElementById('color-controls');
    var rowArr = []; // holds arrays of each row's TDs [row][column]
    var rows = []; // holds actual row elements (TRs)
    for (var i = 0; i < color_addresses.length; i++) {
        rowArr[i] = []; // define current row as a matrix
        for (var j = 0; j < 4; j++) // populate current row with 4 TDs
            rowArr[i][j] = document.createElement("TD");
        rowArr[i][0].innerHTML = '...' + color_addresses[i].replace(current_sprite_addresses[0].substring(0, 6), ''); // first row displays address
        rowArr[i][1].style.height = '100%';
        var colorBox1 = document.createElement('DIV');
        colorBox1.style.display = 'inline-block';
        colorBox1.style.width = '50%';
        colorBox1.style.height = '20px';
        colorBox1.style.backgroundColor = 'rgb' + rgb_colors[i]; // 2nd, colors
        /* static colorbox
        var colorBox2 = document.createElement('DIV');
        colorBox2.style.display = 'inline-block';
        colorBox2.style.width = '50%';
        colorBox2.style.height = '20px';
        colorBox2.style.backgroundColor = 'rgb' + rgb_colors[i];
        */
        var colorBox2 = document.createElement("INPUT");
        colorBox2.style.display = 'inline-block';
        colorBox2.type = 'color';
        colorBox2.value = '#' + convertAnyToAny(rgb_colors[i], 'hex');
        //colorBox2.oninput = "document.getElementById('input' + (i+1)).value = this.value";
        colorBox2.style.width = 'calc(50% - 2px)'; //'18px';
        colorBox2.style.height = '20px';
        colorBox2.style.padding = '0px';
        colorBox2.style.marginTop = '-1px';
        colorBox2.style.verticalAlign = 'top';
        colorBox2.setAttribute('id', 'colorBox' + (i+1));
        colorBox2.addEventListener('input', function(event) {
            document.getElementById(this.id.replace('colorBox', 'input')).value = this.value.slice(1);
        });
        //colorBox2.className = 'colorBox';
        rowArr[i][1].appendChild(colorBox1);
        rowArr[i][1].appendChild(colorBox2);
        var inputBox = document.createElement("INPUT"); // 3rd is color input box
        inputBox.className = 'inputBox';
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('id', 'input' + (i+1)); // eg id="input4" is 4th row
        inputBox.setAttribute('size', '4');
        inputBox.setAttribute('maxLength', '13');
        inputBox.setAttribute('onclick', 'selectInput(this)');
        inputBox.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                //console.log(this.id.replace('input', 'update'));
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
    //var colorConvertRow = document.createElement("DIV");
}

function convertAll(type) {
    colorType = type;
    var toConvert = document.getElementsByClassName('inputBox');
    for (var i = 0; i < toConvert.length; i++)
        toConvert[i].value = convertAnyToAny(toConvert[i].value, type);
}

// select all matching 'pixels'; takes an element of class pix#
function selectPixel(pix) {
    var control = document.getElementById('input' + pix.className.replace('sprite-pixel pix', ''));
    control.focus();
    control.select();
    selectInput(control);
    /*var matching = document.getElementsByClassName(pix.className);
    for (var i = 0; i < matching.length; i++) {
        matching[i].style.outline = '1px solid white';
    }*/
}

function selectInput(input) {
    if (selected)
        selected.parentElement.parentElement.style.outline = 'none';
    selected = input;
    selected.parentElement.parentElement.style.outline = 'solid';
    var baseValue = selected.value;
    if (!baseValue)
        baseValue = trimRGB(current_sprite_rgb[selected.id.replace('input', '') - 1]);
        //selected.value = trimRGB(current_sprite_rgb[selected.id.replace('input', '') - 1]);
    /*
    var indivRGBtext = document.getElementsByName('colorInput');
    //const indivRGBrange = document.getElementsByName('colorRange');
    if (isRGB(baseValue))
        var selectedSplit = baseValue.split(',');
    for (var i = 0; i < 3; i++) {
        if (isRGB(baseValue)) {
            indivRGBtext[i].value = selectedSplit[i];
        }
        indivRGBtext[i].addEventListener('input', function(event) {
            //console.log(parseInt(this.id.replace('colorInput', '')) - 1);
            selectedSplit[parseInt(this.id.replace('colorInput', '')) - 1] = event.target.value;
            selected.value = selectedSplit.toString();
            document.getElementById('colorRange' + this.id.replace('colorInput', '')).value = Math.floor(event.target.value / 8);
        });
    }
     */
}
/*
function updateColorRange(channelNum) {
    var range = document.getElementById('colorRange' + channelNum);
    document.getElementById('colorInput' + channelNum).value = range.value * 8;
    if (isRGB(selected.value))
        var selectedSplit = selected.value.split(',');
    selectedSplit[channelNum - 1] = range.value * 8;
    selected.value = selectedSplit.toString();
}
*/


// refresh corresponding pixel with inputted color value
function refreshPixel(num) {
    var newColor = document.getElementById('input' + num.toString()).value;
    var matching = document.getElementsByClassName('pix' + num.toString());
    if (newColor) {
        if (isRGB(newColor)) {
            newColor = 'rgb(' + isRGB(newColor) + ')';
        }
        if (isHex(newColor)) {
            if (newColor.length != 4)
                newColor = '#' + isHex(newColor);
            else
                newColor = '#' + convertAnyToAny(newColor, 'hex');
        }
        for (var i = 0; i < matching.length; i++) {
                matching[i].style.backgroundColor = newColor;
        }
        document.getElementById('colorBox' + num).value = '#' + convertAnyToAny(newColor, 'hex').replace('#', '');
    }
}

function refreshAllPixels() {
    for (var i = 0; i < current_sprite_addresses.length; i++)
        refreshPixel(i+1);
}

function outputCodes(targetID) {
    var target = resetElement(targetID, true, 'color-controls-container', 'P');
    //var target = document.getElementById(targetID);
    var colorArr = [];
    for (var i = 0; i < current_sprite_addresses.length; i++) {
        var input = document.getElementById('input' + (i+1));
        if (input.value)
            target.innerHTML = target.innerHTML + current_sprite_addresses[i] + ' ' + convertToGBA(input.value) + '<br>';
    }
    if(current_sprite_addresses === zx_sprite_addresses) { //do it again for zx which has them twice
        for (var i = 0; i < current_sprite_addresses.length; i++) {
            var input = document.getElementById('input' + (i+1));
            if (input.value)
                target.innerHTML = target.innerHTML + (parseInt(current_sprite_addresses[i], 16) + 32).toString(16).toUpperCase() + ' ' + convertToGBA(input.value) + '<br>';
        }
    }
}

function convertToGBA(color) {
    var code = isHex(color);
    if (!code)
        code = rgbToHex(color);
    if (code) {
        if (code.length === 4)
            return code;
        else {
            if (code.length === 8)
                code = code.substr(0, 6);
            var arrRGB = [];
            var finalCode = '';
            for (var i = 0; i < 3; i++) {
                arrRGB[i] = parseInt(code.substr(i * (code.length / 3), code.length / 3), 16);
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
    } else return color;
}

function convertAnyToAny(color, outputType) {
    var inputType = false;
    var code = isHex(color);
    if (code.length === 6) {
        inputType = 'hex'; // returns string
    } else if (code.length === 4) {
        inputType = 'gba';
    } else if (!code) {
        code = isRGB(color); // returns string of channels separated by commas
        if (code)
            inputType = 'rgb';
    }
    if (!inputType)
        return color; // If can't figure out inputType, just returns self...
    if (outputType === inputType)
        return color; // returns self if color is already the requested type
    if (outputType === 'hex') {
        if (inputType === 'rgb') {
            code = rgbToHex(code);
        } else if (inputType === 'gba') {
            code = parseInt(code, 16).toString(2); // converts 4-digit GBA into 15-digit Binary
            while (code.length < 15)
                code = '0' + code;
            code = [code.substr(10, 5), code.substr(5, 5), code.substr(0, 5)]; // separates into 3 5-digit binaries
            for (var i = 0; i < 3; i++) {
                code[i] = (parseInt(code[i], 2) * 8).toString(16); // convert to 24-bit hex
                while (code[i].length < 2)
                    code[i] = '0' + code[i];
            }
            code = code.join(''); // joins array elements into one string without breaks
            code = code.toUpperCase();
        }
        return code;
    } else if (outputType === 'rgb') {
        if (inputType === 'hex') {
            code = [code.substr(0,2), code.substr(2,2), code.substr(4,2)]; // eg ['ff','00','00']
            for (var i = 0; i < code.length; i++)
                code[i] = parseInt(code[i], 16).toString(10); // convert each hex value into decimal
            code = code.join(); // joins; no argument means separated by commas eg '255,0,0'
        } else if (inputType === 'gba') {
            code = parseInt(code, 16).toString(2); // converts 4-digit GBA into 15-digit Binary
            code = [code.substr(10, 5), code.substr(5, 5), code.substr(0, 5)]; // separates into 3 5-digit binaries
            for (var i = 0; i < 3; i++)
                code[i] = (parseInt(code[i], 2) * 8).toString(10); // convert to 256 decimal
            code = code.join(); // joins array elements into one string without breaks
        }
        return code;
    } else if (outputType === 'gba') {
        return convertToGBA(code);
    } else return color; // If error, just returns self...
}

function rgbToHex(color) {
    var code = isRGB(color);
    if (code) {
        code = code.split(',');
        for (var i = 0; i < code.length; i++) {
            code[i] = parseInt(code[i]).toString(16);
            while (code[i].length < 2)
                code[i] = '0' + code[i];
        }
        //code = code.replace(/,/g, '');
        code = code.join('');
        code = code.toUpperCase();
        return code;
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
    if (code.length === 8)
        code = code.substr(0, 6);
    if (code.length === 3)
        code = code.charAt(0) + '0' + code.charAt(1) + '0' +code.charAt(2) + '0';
    if (code.length === 6 || code.length === 4) // 8: Hex with alpha (RGBA), 6: 6digit hex eg #F2F2F2, 4: GBA, 3: 3digit hex eg #DDD
        return code;
    else return false;
}

function isRGB(code) {
    code = trimRGB(code);
    var arrRGB = code.split(',');
    for (var i = 0; i < arrRGB.length; i++)
        if (arrRGB[i] < 0 || arrRGB[i] > 255)
            return false;
    if (arrRGB.length === 4)
        arrRGB.splice(0, 3);
    if (arrRGB.length === 3)
        return arrRGB.join();
    else return false;
}

function trimRGB(code) {
    code = code.trim();
    code = code.replace(/rgb/g, '');
    code = code.replace(/\(/g, '');
    code = code.replace(/\)/g, '');
    code = code.replace(/ /g, '');
    return code;
}


function clearRadio(elementName) {
    var elements = document.getElementsByName(elementName);
    for (var i = 0; i < elements.length; i++)
        elements[i].checked = false;
}