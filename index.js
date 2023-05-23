
const appContainer = document.getElementById('app');

const addBtn = appContainer.querySelector('.add-btn');








getNote().forEach(note => {
    const noteElement = createNote(note.id, note.content);
    appContainer.insertBefore(noteElement, addBtn);
});


addBtn.addEventListener('click', () => addNote())


function getNote(){
return JSON.parse(localStorage.getItem('stickynotes-notes') || "[]" );
}







function saveNote(notes){
localStorage.setItem("stickynotes-notes", JSON.stringify(notes))
}







function createNote(id, content){
const element = document.createElement('textarea');

element.classList.add("note");
element.value=content;
element.placeholder="Creat new note"

element.addEventListener("change", ()=>{
    return updateNote(id, element.value);
});

element.addEventListener( "dblclick", () =>{
const doDelete = confirm("Are sure you want to delete this note ?");

if (doDelete){
     deleteNote(id, element);
}});
return element;

}





function addNote(){
const notes = getNote();
const object = {
    id: Math.floor(Math.random() * 1000000),
    content: ""
};

const noteElement = createNote(object.id, object.content);
appContainer.insertBefore(noteElement, addBtn);

notes.push(object);
saveNote(notes);
}



//FINISH THIS PART !! //


function updateNote(id, newContent){
const notes = getNote();
const targetNote = notes.filter(note => note.id == id)[0];

targetNote.content = newContent;
saveNote(notes);

}







function deleteNote(id, element){
const notes = getNote().filter(note => note.id != id);

saveNote(notes);
appContainer.removeChild(element);
}