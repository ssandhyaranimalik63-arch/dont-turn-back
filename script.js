let hasClue = false;
let hasKey = false;


// ===============================
// CLASSROOM
// ===============================

function findClue() {

    hasClue = true;

    document.getElementById("message").innerText =
        "You found a note under the desk: The exit code is 2719.";
}


function tryExit() {

    if (hasClue) {

        document.getElementById("classroom").style.display = "none";

        document.getElementById("corridor").style.display = "block";

    } else {

        document.getElementById("message").innerText =
            "The exit is locked. There must be a clue somewhere...";

    }
}


// ===============================
// CORRIDOR
// ===============================

function searchCorridor() {

    document.getElementById("corridorMessage").innerText =
        "You find a strange note on the wall: 'The library knows the way out...'";

}


function enterLibrary() {

    document.getElementById("corridor").style.display = "none";

    document.getElementById("library").style.display = "block";

    document.getElementById("libraryMessage").innerText =
        "You enter the library. The lights suddenly go out...";

}


// ===============================
// LIBRARY
// ===============================

function searchLibrary() {

    document.getElementById("libraryMessage").innerText =
        "You hear a whisper behind you... 'Leave.'";

}


function checkDoor() {

    if (hasKey) {

        document.getElementById("libraryMessage").innerText =
            "The key fits the lock... The door opens! 🔓";

    } else {

        document.getElementById("libraryMessage").innerText =
            "The library door is locked. Find the final key first.";

    }

}


// ===============================
// FINAL KEY
// ===============================

function finalKey() {

    // JUMPSCARE
    showJumpscare();

    setTimeout(function () {

        hasKey = true;

        document.getElementById("libraryMessage").innerText =
            "The room becomes silent... You found a small rusty key! 🔑";

    }, 2200);

}


// ===============================
// JUMPSCARE
// ===============================

function showJumpscare() {

    const scare = document.getElementById("jumpscare");

    scare.style.display = "block";

    document.body.classList.add("shake");

    setTimeout(function () {

        scare.style.display = "none";

        document.body.classList.remove("shake");

    }, 2000);

}


// ===============================
// FINAL GATE
// ===============================

function escape() {

    if (hasKey) {

        document.getElementById("gateMessage").innerText =
            "The key turns slowly... The gate opens. YOU ESCAPED! 🎉👻";

    } else {

        document.getElementById("gateMessage").innerText =
            "The gate is locked. You need the key.";

    }

}
