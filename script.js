var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+916363549133'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:varshithvh@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/916363549133'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Varshith V Hegde Resume.pdf</label></div><a href='assets/varshith_v_hegde_resume.pdf' download='varshith_v_hegde_resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("je m'appelle")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Waouh, moi aussi je m'appelle comme xa");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Salut ici 👋🏻,<br><br>je suis <span class='bold'><a class='alink'>BEIDI DINA SAMUEL</a>.</span><br><br>Je suis enseignant  a ENSPM <span class='bold'> Ecole nationale superieure polytechnique de Maroua👨🏻‍💻📚</span><br><br>Envoie <span class='bold'>'help'</span> pour connaitre plus sur moi.<br>");
            }, 2000);
            break;
        
        

        case "help":
            sendTextMessage("<span class='sk'>Tape help pour plus de details...<br>e.g<br><span class='bold'>'skills'</span> <br><span class='bold'>'resume'</span> - pour voir mon CV<br><span class='bold'>'education'</span> - pour voir mes etudes<br><span class='bold'>'contact'</span> - pour me contacter me<br><span class='bold'>'projects'</span> - pour voir mes projets<br><span class='bold'>'clear'</span> - pour effacer la conversation<br>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>pour mon CV je suis enseignant a ENSPM.<br><br> j'aime trop les langages de programmation comme :<br><span class='bold'>Java<br>C<br>PHP<br>Kotlin<br>Dart<br><br>CSS<br>HTML<br>JavaScript</span><br><br>j'aime egalement utiliser les frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs</span><br>");
            break;

        case "education":
            sendTextMessage("Titulaire d'un master en ingenierie des reseaux et systemes");
            break;

        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("pour les projets verifiez mon compte github.<br><br><div class='social'><a target='_blank' href='https://github.com/samglish'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("salut ici👋🏻");
            sendTextMessage("<span class='sk'>Tape help pour plus de details...<br>e.g<br><span class='bold'>'skills'</span> <br><span class='bold'>'resume'</span> - pour voir mon CV<br><span class='bold'>'education'</span> - pour voir mes etudes<br><span class='bold'>'contact'</span> - pour me contacter me<br><span class='bold'>'projects'</span> - pour voir mes projets<br><span class='bold'>'clear'</span> - pour effacer la conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello 👋🏻");
            sendTextMessage("<span class='sk'>Tape help pour plus de details...<br>e.g<br><span class='bold'>'skills'</span> <br><span class='bold'>'resume'</span> - pour voir mon CV<br><span class='bold'>'education'</span> - pour voir mes etudes<br><span class='bold'>'contact'</span> - pour me contacter me<br><span class='bold'>'projects'</span> - pour voir mes projets<br><span class='bold'>'clear'</span> - pour effacer la conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hi 👋🏻");
            sendTextMessage("<span class='sk'>Tape help pour plus de details...<br>e.g<br><span class='bold'>'skills'</span> <br><span class='bold'>'resume'</span> - pour voir mon CV<br><span class='bold'>'education'</span> - pour voir mes etudes<br><span class='bold'>'contact'</span> - pour me contacter me<br><span class='bold'>'projects'</span> - pour voir mes projets<br><span class='bold'>'clear'</span> - pour effacer la conversation<br>");
            break;
        
        case "hey":
            sendTextMessage("Hey 👋🏻");
            sendTextMessage("<span class='sk'>Tape help pour plus de details...<br>e.g<br><span class='bold'>'skills'</span> <br><span class='bold'>'resume'</span> - pour voir mon CV<br><span class='bold'>'education'</span> - pour voir mes etudes<br><span class='bold'>'contact'</span> - pour me contacter me<br><span class='bold'>'projects'</span> - pour voir mes projets<br><span class='bold'>'clear'</span> - pour effacer la conversation<br>");
            break;
       

        case "beidi":
            sendTextMessage("oui, je suis la");
            break;
        case "beidi dina samuel":
            sendTextMessage("oui, je suis la");
            break;
        case "beidi dina":
            sendTextMessage("oui, je t'ecoute");
            break;
        
        case "site":
            sendTextMessage("voici mon site <a target='_blank' href='https://beidisamuel.github.io/'>BEIDI DINA</a>");
            break;
        case "blog":
            sendTextMessage("voici mon site <a target='_blank' href='https://beidisamuel.github.io/'>BEIDI DINA</a>");
            
            break;
        
        case "github":
            sendTextMessage("voici mon site <a target='_blank' href='https://beidisamuel.github.io/'>BEIDI DINA</a>");
            
            break;
        case "linkedin":
            sendTextMessage("voici mon site <a target='_blank' href='https://beidisamuel.github.io/'>BEIDI DINA</a>");
            
            break;
        case "amis":
         sendTextMessage("mes amis sont mes etudiants");
        case "ami":
            sendTextMessage("mes amis sont mes etudiants");
            break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("salut "+name+"! comment tu vas?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("salut sorry...😢<br>envoie 'help' pour connaitre les fonctions et connaitre de BEIDI.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
