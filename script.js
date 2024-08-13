// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrcifX2t4tQ0zlMuQ0XzXZzBBHVGBvbco",
    authDomain: "task-4da24.firebaseapp.com",
    databaseURL: "https://task-4da24-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "task-4da24",
    storageBucket: "task-4da24.appspot.com",
    messagingSenderId: "247305574824",
    appId: "1:247305574824:web:65686cdf77e4db7fe5259d",
    measurementId: "G-K295VG367V"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var totalItems
var maxCode
var maxCode

function storeData(e){
    e.preventDefault();
    var task = document.getElementById("task").value;
var desc =document.getElementById("desc").value;

document.getElementById("task").value =""
document.getElementById("desc").value =""

code = totalItems
if (totalItems< maxcode){
   code = maxcode + 1
}

//update number of tasks in database
firebase.database()
.ref("TaskList" + code)
.set({
    taskName:task,
    descName:desc,
    status:"pending"


});

//update number of tasks in database

firebase
.database()
.ref("TaskList" + code)
.update({
  totalItems:totalItems + 1,
  maxCode:maxCode + 1, 
});

if (document.getElementById("info") !==null) {
    document.getElementById("info").remove()

}


  // Show the data in the body in form of card
  document.getElementById("tasks-header").insertAdjacentHTML(
    "afterend",
    `<div class="Task-item" id="${code}">
    <div class="data" id="${task}">
        <button id="done" class="done" onclick = "changeStatus('${code}')"><i class="far fa-check-circle"></i></button>
        <h2 class="Task">${task}</h2>
        <p class="desc">${desc}</p>
        <small id = "status"></small>
    </div>
    <hr>
    <div class="buttons">
        <button class="button edit" id="editbtn" onclick = "editData('${code}')"><i class="fas fa-edit"></i> EDIT TASK</button>
        <button class="button delete" id="deletebtn" onclick = "deleteData('${code}')">
        <i class="fas fa-trash-alt"></i>DELETE TASK</button>
    </div>
    
    </div>`
  );
}
// Reading the data from the database
var data;
firebase
  .database()
  .ref("TaskList")
  .on("value", function (snapshot) {
    data = snapshot.val();
    console.log("This is data speaking from open");
    console.log(data);
  });























































































































// // Listening to load event on window
// // Reading the number of tasks stored in the database
// var totalItems;
// var maxCode;
// var code;
// window.addEventListener("load", function () {
//   console.log("Complete Window LOADED");
//   firebase
//     .database()
//     .ref("TotalTasks")
//     .on("value", function (snapshot) {
//       totalItems = snapshot.val().totalItems;
//       maxCode = snapshot.val().maxCode;
//       console.log("The total Items are : " + totalItems);
//       if (totalItems > 0 && document.getElementById("info") != null) {
//         document.getElementById("info").remove();
//       }
//       if (totalItems === 0) {
//         firebase.database().ref("TotalTasks").update({
//           maxCode: 0,
//         });
//       }
//     });
// });