const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 같음 const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//const -> let 
//const 항상 빈 채로 시작하고 입력할때 덮어쓰기됨, let으로 바꾸면 기존 localstorage 에서 발견된 것 모두 가져옴

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //string 으로 만들기 => toDos = JSON.stringify(toDos), 이렇게 해두면 array 모양으로 저장 가능
}
// 입력된 todo localStorage에 저장하기

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    //true 면 남기고, false 면 remove
    //toDo.id 는 number 이고, li.id의 형태는 string이라서 parseInt로 number로맞춰주어야함
}
// 입력한 값의 parentNode 를 알아내고, 어떤 버튼(innerText)을 누른건지 알아내기
// const li 로 parentElement 지정해두고 .remove 로 지우기

function paintToDo(newTodo){
    const li = document.createElement("li");
    //li = list item
    li.id = newTodo.id;
    // 아래에서 부여한 id로 불러오기
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    // newTodoObj text, id 둘 중에 text를 노출해야함, 아님 [object, pbject]라고 뜸
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    // input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";
    // 입력값 비우기
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
        //랜덤id 처럼 ms 시간 출력
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    //newTodo text가 아닌 이제 newTodoObj object를 받음, object는 text 와 id가 있음
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //localstorage 에서 가져온 string 을 JS object로 변환
    //array 는 똑똑함, 각각의 item으로 뭔가를 할 수 있음
    toDos = parsedToDos;
    //빈 채로 처음 시작해서 계속 덮어쓰기됨, let toDos 로 바꾸고 시작을 parsedToDos 로 추가 
    //localstorage에 있던 item 그대로 유지한 채로 업데이트됨, 덮어쓰기 되지 않음
    parsedToDos.forEach(paintToDo);
    //forEach 는 array 의 각 item 에 대해 function을 실행하게 해줌
}
//array 에서 item 을 삭제하는 것 = 지우는 item 을 제외하고 새로운 array 를 짜는 것