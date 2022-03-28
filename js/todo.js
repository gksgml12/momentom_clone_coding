const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY="todos";
let toDos=[];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));//sting화해서 저장(localStorage에 array형태로 저장하는 법)
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id!== parseInt(li.id)); //로지컬 삭제
    li.remove(); //피지컬 삭제
    saveToDos() //최신화
}

function paintToDo(newTodoObj) {
    const li=document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodoObj.id //동명 todo 일때 구분할 수 있는 값
    span.innerText=newTodoObj.text;
    button.innerText="❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li)
}
//<li><span></span><button></button></li>

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""; //값 저장하고는 출력값 지움
    const newTodoObj = { 
        text:newTodo,
        id:Date.now() //동명 todo 일때 구분할 수 있는 값(밀리초)
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}