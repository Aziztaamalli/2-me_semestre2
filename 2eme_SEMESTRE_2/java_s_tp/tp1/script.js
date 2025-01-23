let pos; 
window.addEventListener("load", function () {
    changecar();
    gameEngine();
});
function changecar() {
    let typecar = document.getElementById("img1");
    let typecar2 = document.getElementById("img2");
    let carlist1 = ['../mer1.jpg', '../fer1.jpg', '../clio1.jpg'];
    let carlist2 = ['../mer2.jpg', '../fer2.jpg', '../clio2.jpg'];
    let i = 0;
    window.addEventListener("keydown", function (event) {
        if (event.key == 't' || event.key == 'T') {
            if (++i >= carlist1.length) {
                i = 0;
            }
            typecar.src = carlist2[i];
            typecar2.src = carlist1[i];
        }
    });
}
function changecolor() {
    let piste = document.getElementById("piste");
    let couleur = document.getElementById("c").value;
    piste.bgColor = couleur;
}
function gameEngine() {
    let piste = document.getElementById("piste");
    pos = piste.getElementsByTagName("td");

    window.addEventListener("keydown", function (event) {
        let previousindex =0;

        for (let i = 0; i < pos.length; i++) {
            if (pos[i].innerHTML.includes('imghere')) {
                previousindex = i;
                break;
            }
        }

        if (event.key === 'ArrowUp') {
            avanceCar(previousindex);
        } else if (event.key === 'ArrowLeft') {
            gaucheCar(previousindex);
        } else if (event.key === 'ArrowRight') {
            droiteCar(previousindex);
        } else if (event.key === 'ArrowDown') {
            arriereCar(previousindex);
        }
    });
}



function avanceCar(previousindex) {
    let newindex = previousindex - 5;
    if (newindex >= 0) {
        pos[newindex].title = 'imghere'; 
        pos[newindex].innerHTML = pos[previousindex].innerHTML;
        pos[previousindex].title = ''; 
        pos[previousindex].innerHTML = "";
    } else {
        alert("La voiture est sortie de la piste");
    }
}


function gaucheCar(previousindex) {
    let newindex = previousindex - 1;
    if (newindex >= 0 && newindex % 5 !== 4) {
        pos[newindex].title = 'imghere';
        pos[newindex].innerHTML = pos[previousindex].innerHTML;
        pos[previousindex].title = '';
        pos[previousindex].innerHTML = '';
    } else {
        alert("La voiture ne peut pas aller à gauche");
    }
}

function droiteCar(previousindex) {
    let newindex = previousindex + 1;
    if (newindex >= 0 && newindex % 5 !== 0) {
        pos[newindex].title = 'imghere';
        pos[newindex].innerHTML = pos[previousindex].innerHTML;
        pos[previousindex].title = '';
        pos[previousindex].innerHTML = '';
    } else {
        alert("La voiture ne peut pas aller à droite");
    }
}

function arriereCar(previousindex) {
    let newindex = previousindex + 5;
    if (newindex < 25) {
        pos[newindex].title = 'imghere';
        pos[newindex].innerHTML = pos[previousindex].innerHTML;
        pos[previousindex].title = '';
        pos[previousindex].innerHTML = '';
    } else {
        alert("La voiture ne peut pas reculer");
    }
}







