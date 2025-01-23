window.addEventListener("keydown", changeCar);

function changeCar(event)
{
    var img1= document.getElementById("img1");
    var img2= document.getElementById("img2");
    if (event.keyCode==116 || event.keyCode==84)
    {
        if(img1.src.match("clio"))
        {
            img1.src="fer2.jpg";
            img2.src="fer1.jpg";
        }
    }
}

function changeColor(event)
{
    var colorChoice=document.getElementById("c");
    var tableau=document.getElementById("piste");

    tableau.style.backgroundColor=colorChoice.value;
}

function gameEngine(event)
{
    pos=-1;
    while(cells[i].innerHTML.includes('img'))
    {
        pos=pos+1;
    }

    
}

//ljlkjoi





window.addEventListener("keydown", changeCar);

function changeCar(event)
{
    var img1= document.getElementById("img1");
    var img2= document.getElementById("img2");
    if (event.keyCode==116 || event.keyCode==84)
    {
        if(img1.src.match("clio"))
        {
            img1.src="fer2.jpg";
            img2.src="fer1.jpg";
        }
    }
}
function changeColor(event)
{
    var colorChoice=document.getElementById("c");
    var tableau=document.getElementById("piste");

    tableau.style.backgroundColor=colorChoice.value;
}
//kjnnj
function getPosition() {
    var cells = document.getElementById('piste').getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML.includes('img')) {
            return i;
        }
    }
    return -1; 
}
function moveCar(key) {
    var currentPosition = getPosition();
    var cells = document.getElementById('piste').getElementsByTagName('td');

    cells[currentPosition].innerHTML = '';

    var newPosition;
    if (key === 'ArrowUp') {
        newPosition = currentPosition - 5;
    } else if (key === 'ArrowDown') {
        newPosition = currentPosition + 5;
    } else if (key === 'ArrowRight') {
        newPosition = currentPosition + 1;
    } else if (key === 'ArrowLeft') {
        newPosition = currentPosition - 1;
    }
    cells[newPosition].innerHTML = '<img id="img2" src="img/clio2.jpg" height="100" width="100" />';
}
document.addEventListener('keydown', function(event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
        moveCar(event.key);
    }
})
