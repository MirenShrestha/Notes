let NOTE_KEY = 'Miren Note';

window.onload = function () {
    displayNote();
};


var noteArry = JSON.parse(localStorage.getItem(NOTE_KEY)) ? JSON.parse(localStorage.getItem(NOTE_KEY)) : [];

function saveAction() {
    var inputnotevalue = document.getElementById('note').value;
    noteArry.push(inputnotevalue);
    var x = localStorage.setItem(NOTE_KEY, JSON.stringify(noteArry));
     displayNote();
};


function displayNote() {
    var getNote = JSON.parse(localStorage.getItem(NOTE_KEY)) ? JSON.parse(localStorage.getItem(NOTE_KEY)) : [];
   var noteDiv = '';
    getNote.forEach(function(value,index) {
        if(value){
            noteDiv = noteDiv + '<div class="displaying">' +
            '<div>'+value+'</div>'+
                 '<button id = "remove" onclick = "deleteNote(\''+index+'\')">Remove</button>'+
                 '</div>';}
     
         });      

    document.getElementById('display').innerHTML = noteDiv;
};

function deleteNote(id){
    var getNote = JSON.parse(localStorage.getItem(NOTE_KEY)) ? JSON.parse(localStorage.getItem(NOTE_KEY)) : [];
    delete getNote[id];
    // console.log(getNote);
    localStorage.setItem(NOTE_KEY, JSON.stringify(getNote));
    displayNote();


}
