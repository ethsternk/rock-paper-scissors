function result (url) {
    document.getElementById("result").src = url;
}

function resultText (text) {
    document.getElementById("resultText").innerHTML = text;
}

document.getElementById("rock").onclick = function () {
    let rng = Math.random();
    if (rng < 1/3) {
        result("http://moondancefilmfestival.com/wp-content/uploads/2012/01/TWO-ROCKS.jpg");
        resultText("You chose rock. Computer chose rock. It's a tie.");
    } else if (rng > 2/3) {
        result("https://media.giphy.com/media/6iMNwNs4cmSti/giphy.gif");
        resultText("You chose rock. Computer chose paper. You lose.");
    } else {
        result("http://www.grudge-match.com/Images/rock.gif");
        resultText("You chose rock. Computer chose scissors. You win.");
    }
}

document.getElementById("paper").onclick = function () {
    let rng = Math.random();
    if (rng < 1/3) {
        result("https://media.giphy.com/media/6iMNwNs4cmSti/giphy.gif");
        resultText("You chose paper. Computer chose rock. You win.");
    } else if (rng > 2/3) {
        result("https://quovadisblog.com/wp-content/uploads/2007/08/paper-pile.jpg");
        resultText("You chose paper. Computer chose paper. It's a tie.");
    } else {
        result("https://i.imgur.com/hcaB5ZM.gif");
        resultText("You chose paper. Computer chose scissors. You lose.");
    }
}

document.getElementById("scissors").onclick = function () {
    let rng = Math.random();
    if (rng < 1/3) {
        result("http://www.grudge-match.com/Images/rock.gif");
        resultText("You chose scissors. Computer chose rock. You lose.");
    } else if (rng > 2/3) {
        result("https://i.imgur.com/hcaB5ZM.gif");
        resultText("You chose scissors. Computer chose paper. You win.");
    } else {
        result("http://notesfromthekitchentable.com/wp-content/uploads/2013/01/scissors-8.jpg");
        resultText("You chose scissors. Computer chose scissors. It's a tie.");
    }
}