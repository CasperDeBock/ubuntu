let term = document.getElementById("term");
let explorer = document.getElementById("explorer");
let nav = document.getElementById("show");
let countterm = 0;
let countexplorer = 0;
let count;
let history = [];

let counthistory = 0;
function dropout(soort) {
  let soortt = document.getElementById(soort);
  if (soortt === "explorer") {
    count = countexplorer;
  } else {
    count = countterm;
  }
  if (count % 2 == 0) {
    soortt.classList.add("transition");
    soortt.classList.add("shownav");
    soortt.classList.remove("hidenav");
  } else {
    soortt.classList.add("transition");
    soortt.classList.add("hidenav");
    soortt.classList.remove("shownav");
  }
  if (soortt === "explorer") {
    countexplorer++;
  } else {
    countterm++;
  }
}

function weg() {
  term.classList.add("hidenav");
  term.classList.remove("shownav");
  count++;
}

let counterinput = 0;

let con = document.getElementById("contentterm");
var input;
// Execute a function when the user releases a key on the keyboard
function doefunctieidng(event) {
  // Number 13 is the "Enter" key

  if (event.keyCode === 13) {
    history.push(document.getElementById("inputie" + counterinput).value);
    console.log(history);
    answertoInput();
    createnewLine();
  }

  if (event.keyCode === 38) {
    counthistory++;
    console.log(history.length);
    document.getElementById("inputie" + counterinput).value =
      history[history.length - counthistory];
  }
}

function answertoInput() {
  var antwoord = document.getElementById("inputie" + counterinput).value;

  let respons;
  switch (antwoord) {
    case "hey":
      respons = "Hallo! welkom bij Casper's Ubuntu! Enjoi!";
      break;

    case "sudo destroy world":
      respons = "You just destroyed a whole world how you feeling?";
      break;
    case "clear":
      con.removeChild();
      break;
    case "help":
      respons =
        "1) hey -> Talk to the console \r\n2) sudo destroy world -> Distroy a planet \r\n3) help -> All commands ";
      break;
    case "":
      respons = "nothing here";
      break;
    default:
      respons = "Sorry commando niet gevonden";
      break;
  }
  let line = document.createElement("div");
  line.classList.add("line");
  let responss = document.createElement("span");
  responss.classList.add("name");
  responss.innerHTML = respons;
  line.appendChild(responss);
  con.appendChild(line);
}

function createnewLine() {
  let line = document.createElement("div");
  line.classList.add("line");
  let nameline = document.createElement("div");
  nameline.classList.add("name");
  let spancolorgr = document.createElement("span");
  spancolorgr.classList.add("gr");
  spancolorgr.innerHTML = "caspercool@caspercool";
  let spancolorblu = document.createElement("span");
  spancolorblu.classList.add("blu");
  spancolorblu.innerHTML = "~";
  let spancolordubble = document.createElement("span");
  spancolordubble.innerHTML = ":";
  let spancolordollar = document.createElement("span");
  spancolordollar.innerHTML = "$";
  nameline.appendChild(spancolorgr);
  nameline.appendChild(spancolordubble);
  nameline.appendChild(spancolorblu);
  nameline.appendChild(spancolordollar);
  line.appendChild(nameline);
  let inputline = document.createElement("INPUT");
  inputline.setAttribute("type", "text");
  counterinput++;
  inputline.setAttribute("id", "inputie" + counterinput);
  inputline.onkeyup = function () {
    doefunctieidng(event);
  };
  line.appendChild(inputline);
  con.appendChild(line);
}

function showpick() {
  let putin = document.getElementById("puttie");
  putin.classList.add("showputin");
}

dragElement(document.getElementById("term"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "nav")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "nav").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function verwijderdingkie() {
  term.classList.remove("transition");
}
function voegdingkietoe() {
  term.classList.add("transition");
}

function changeactive(activeclicked, id) {
  document.getElementById("recent").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("desktop").classList.remove("active");
  document.getElementById("document").classList.remove("active");
  document.getElementById("download").classList.remove("active");
  document.getElementById("music").classList.remove("active");
  document.getElementById("picture").classList.remove("active");
  document.getElementById("video").classList.remove("active");
  document.getElementById("trash").classList.remove("active");
  document.getElementById("wifi").classList.remove("active");
  document.getElementById(activeclicked).classList.add("active");
  document.getElementById("sel").selectedIndex = id;
  toonfiles(activeclicked);
}

function changedingkie(tochange, numberchane) {
  changeactive(tochange, numberchane);
}

document.getElementById("sel").addEventListener("change", function () {
  var l = document.getElementById("sel").value;
  var i = document.getElementById("sel").selectedIndex;
  changeactive(l, i);
});

function toonfiles(activ) {
  let contentmain = document.getElementById("contentmain");
  console.log(contentmain);
  let e = document.getElementById("contentmain");

  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
  console.log(activ);
  if (activ === "recent") {
    let atj = document.createElement("a");
    atj.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

    let folderke = document.createElement("div");

    folderke.classList.add("folderke");
    folderke.classList.add("hov");
    let imgakeFolder = document.createElement("img");
    imgakeFolder.src = "images/icons/file-earmark.svg";
    let naamfolder = document.createElement("div");
    naamfolder.classList.add("naamfolder");
    naamfolder.innerHTML = "MyFile.exe";

    folderke.appendChild(imgakeFolder);
    folderke.appendChild(naamfolder);
    atj.appendChild(folderke);
    document.getElementById("contentmain").appendChild(atj);
  }
  if (activ === "home") {
    let folderke = document.createElement("div");
    folderke.classList.add("folderke");
    folderke.classList.add("hov");
    let imgakeFolder = document.createElement("img");
    imgakeFolder.src = "images/icons/folder.svg";
    let naamfolder = document.createElement("div");
    naamfolder.classList.add("naamfolder");
    naamfolder.innerHTML = "Desktop";
    folderke.appendChild(imgakeFolder);
    folderke.appendChild(naamfolder);
    folderke.onclick = function () {
      changeactive("desktop");
      changedingkie("desktop", 2);
    };

    let folderke2 = document.createElement("div");
    folderke2.classList.add("folderke");
    folderke2.classList.add("hov");
    folderke2.classList.add("m");
    let naamfolder2 = document.createElement("div");
    let imgakeFolder2 = document.createElement("img");
    imgakeFolder2.src = "images/icons/folder.svg";
    naamfolder2.classList.add("naamfolder");
    naamfolder2.innerHTML = "Documents";
    folderke2.appendChild(imgakeFolder2);
    folderke2.appendChild(naamfolder2);
    folderke2.onclick = function () {
      changeactive("document");
      changedingkie("document", 3);
    };

    let folderke3 = document.createElement("div");
    folderke3.classList.add("folderke");
    folderke3.classList.add("hov");
    folderke3.classList.add("m");
    let naamfolder3 = document.createElement("div");
    let imgakeFolder3 = document.createElement("img");
    imgakeFolder3.src = "images/icons/folder.svg";
    naamfolder3.classList.add("naamfolder");
    naamfolder3.innerHTML = "Downloads";
    folderke3.appendChild(imgakeFolder3);
    folderke3.appendChild(naamfolder3);
    folderke3.onclick = function () {
      changeactive("download");
      changedingkie("download", 4);
    };

    let folderke4 = document.createElement("div");
    folderke4.classList.add("folderke");
    folderke4.classList.add("hov");
    folderke4.classList.add("m");
    let naamfolder4 = document.createElement("div");
    let imgakeFolder4 = document.createElement("img");
    imgakeFolder4.src = "images/icons/folder.svg";
    naamfolder4.classList.add("naamfolder");
    naamfolder4.innerHTML = "Music";
    folderke4.appendChild(imgakeFolder4);
    folderke4.appendChild(naamfolder4);
    folderke4.onclick = function () {
      changeactive("music");
      changedingkie("music", 5);
    };

    let folderke5 = document.createElement("div");
    folderke5.classList.add("folderke");
    folderke5.classList.add("hov");
    folderke5.classList.add("m");
    let naamfolder5 = document.createElement("div");
    let imgakeFolder5 = document.createElement("img");
    imgakeFolder5.src = "images/icons/folder.svg";
    naamfolder5.classList.add("naamfolder");
    naamfolder5.innerHTML = "Pictures";
    folderke5.appendChild(imgakeFolder5);
    folderke5.appendChild(naamfolder5);
    folderke5.onclick = function () {
      changeactive("picture");
      changedingkie("picture", 6);
    };

    let folderke6 = document.createElement("div");
    folderke6.classList.add("folderke");
    folderke6.classList.add("hov");
    folderke6.classList.add("m");
    let naamfolder6 = document.createElement("div");
    let imgakeFolder6 = document.createElement("img");
    imgakeFolder6.src = "images/icons/folder.svg";
    naamfolder6.classList.add("naamfolder");
    naamfolder6.innerHTML = "Videos";
    folderke6.appendChild(imgakeFolder6);
    folderke6.appendChild(naamfolder6);
    folderke6.onclick = function () {
      changeactive("video");
      changedingkie("video", 7);
    };

    document.getElementById("contentmain").appendChild(folderke);
    document.getElementById("contentmain").appendChild(folderke2);
    document.getElementById("contentmain").appendChild(folderke3);
    document.getElementById("contentmain").appendChild(folderke4);
    document.getElementById("contentmain").appendChild(folderke5);
    document.getElementById("contentmain").appendChild(folderke6);
  }
  if (activ === "desktop") {
  }
  if (activ === "document") {
  }
  if (activ === "download") {
  }
  if (activ === "music") {
  }
  if (activ === "picture") {
  }
  if (activ === "video") {
  }
  if (activ === "trash") {
  }
  if (activ === "wifi") {
  }
}
