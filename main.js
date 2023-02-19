var count = 0;
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
let div6 = document.getElementById('div6');
let div7 = document.getElementById('div7');
let div8 = document.getElementById('div8');
let div9 = document.getElementById('div9');


function listenClick() {
    div1.addEventListener('click', () => {
        changeInnerHtml(div1);
    });

    div2.addEventListener('click', () => {
        changeInnerHtml(div2);
    });

    div3.addEventListener('click', () => {
        changeInnerHtml(div3);
    });

    div4.addEventListener('click', () => {
        changeInnerHtml(div4);
    });

    div5.addEventListener('click', () => {
        changeInnerHtml(div5);
    });

    div6.addEventListener('click', () => {
        changeInnerHtml(div6);
    });

    div7.addEventListener('click', () => {
        changeInnerHtml(div7);
    });

    div8.addEventListener('click', () => {
        changeInnerHtml(div8);
    });

    div9.addEventListener('click', () => {
        changeInnerHtml(div9);
    });
}

listenClick();

function changeInnerHtml(div) {
    if (div.innerHTML == "" || div.innerHTML == null) {
        if (count % 2 == 0) {
            div.innerHTML = "X";
        }
        else {
            div.innerHTML = "0";
        }
        count++;
        if (count >= 5) {
            checkWinningMove();
        }
    }

}

function checkWinningMove() {
    if (div1.innerHTML == div2.innerHTML && div2.innerHTML == div3.innerHTML && div3.innerHTML !== "") {
        declareResults(div1);
    }
    else if (div4.innerHTML == div5.innerHTML && div5.innerHTML == div6.innerHTML && div6.innerHTML !== "") {
        declareResults(div4);
    }
    else if (div7.innerHTML == div8.innerHTML && div8.innerHTML == div9.innerHTML && div9.innerHTML !== "") {
        declareResults(div7);
    }
    else if (div1.innerHTML == div4.innerHTML && div4.innerHTML == div7.innerHTML && div7.innerHTML !== "") {
        declareResults(div1);
    }
    else if (div2.innerHTML == div5.innerHTML && div5.innerHTML == div8.innerHTML && div8.innerHTML !== "") {
        declareResults(div2);
    }
    else if (div3.innerHTML == div6.innerHTML && div6.innerHTML == div9.innerHTML && div9.innerHTML !== "") {
        declareResults(div3);
    }
    else if (div1.innerHTML == div5.innerHTML && div5.innerHTML == div9.innerHTML && div9.innerHTML !== "") {
        declareResults(div1);
    }
    else if (div3.innerHTML == div5.innerHTML && div5.innerHTML == div7.innerHTML && div7.innerHTML !== "") {
        declareResults(div3);
    }
    else if (count == 9) {
        declareDraw();
    }
}

function declareResults(div) {
    let modal = document.getElementById("modal");
    let winnerPlayer = document.getElementById("winnerPlayer");
    modal.style.display = "block";
    winnerPlayer.innerHTML = div.innerHTML;

}

function declareDraw() {
    let modal = document.getElementById("modal");
    let winnerText = document.getElementById("winnerText");
    modal.style.display = "block";
    winnerText.innerHTML = "DRAW !!"
}