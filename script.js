//Estamos creando una función
function addNote(){
//Necesito capturar el dato que se pone en el input
const noteInput = document.getElementById('noteInput');
//comunicarnos con ul en html
const noteList = document.getElementById('noteList');


//generamos uhna condicional
//condicion --> si la caja de texto está vacía
//entonces puedo llenar una lista

   if(noteInput.value.trim !== ""){
      //creo un elemento li
      const newNote = document.createElement('li');
      //agrego el texto que se puso en el input
      newNote.textContent = noteInput.value;
      //agrego el elemento li a la lista
      noteList.appendChild(newNote);
      //limpio el input
      noteInput.value = "";
   }else{
      alert("No puedes dejar el campo vacío :)");
   }
}