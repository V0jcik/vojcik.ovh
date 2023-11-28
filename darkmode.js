var darkmode = document.getElementById('darkmode');
var icon = document.getElementById('icon');
darkmode.addEventListener("mouseover", function(event){
    //do something
});

darkmode.addEventListener('click', change)

var elems = document.getElementsByClassName("darkmode");
    let oldColor = "rgb(0, 0, 0)";
    let temp = "";
    let newColor = "rgb(255, 255, 255)";

    let blackFilter = "brightness(0) invert(1)"
    let tempFilter = "";
    let whiteFilter = "brightness(1) invert(0)"

function getValue (elem, property) {
    return window.getComputedStyle(elem, null).getPropertyValue(property);
}

function change(){
    darkmode.setAttribute('disabled','');
    Array.prototype.forEach.call(elems, function (elem) {
        var backgroundColor = getValue(elem, "background-color"),
        borderColor = getValue(elem, "border-color"),
        color = getValue(elem, "color"),
        filter = getValue(elem, "filter");
        
        console.log(filter);

        if (backgroundColor == oldColor) {
            elem.style.backgroundColor = newColor;
        }
        
        if (borderColor == oldColor) {
            elem.style.borderColor = newColor;
        }
        
        if (color == newColor) {
            elem.style.color = oldColor;
        }
        
        if (filter == blackFilter) {
            elem.style.filter = whiteFilter;
        }
    });
    temp = oldColor;
    oldColor = newColor;
    newColor = temp;

    tempFilter = blackFilter;
    blackFilter = whiteFilter;
    whiteFilter = tempFilter;
    setTimeout(
        function(){
            darkmode.removeAttribute('disabled','');
        }, 
    500);
}

function setCol(){
    darkmode.style.setProperty('filter',"brightness(0) invert(1)");
    Array.prototype.forEach.call(elems, function (elem) {
        elem.style.color = "rgb(255, 255, 255)";
    });
}