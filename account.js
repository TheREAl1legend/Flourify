const firebaseConfig = {
    apiKey: "AIzaSyAcmxy3Uc1_gsXZk_u0L6pPe7oNG_c76c8",
    authDomain: "accountpage-52f26.firebaseapp.com",
    databaseURL: "https://accountpage-52f26-default-rtdb.firebaseio.com",
    projectId: "accountpage-52f26",
    storageBucket: "accountpage-52f26.appspot.com",
    messagingSenderId: "1011224093242",
    appId: "1:1011224093242:web:91af327333f504f1efcb03"
  };

firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var Name = getElementVal('Name');
    var Email_Id = getElementVal('Email_Id');
    var password = getElementVal('password');
    var Address = getElementVal('Address');

    saveMessages(Name,Email_Id,password,Address);

    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('contactForm').reset();

   
}

const saveMessages = (Name, Email_Id,password, Address) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        Name : Name,
        Email_Id : Email_Id,
        password:password,
        Address : Address,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

