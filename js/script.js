document.addEventListener('DOMContentLoaded', () => {
    const inputTodo = document.querySelector(".main__content__input");
    const addTodo = document.querySelector(".main__content__add");
    const todoList = document.querySelector(".main__content__list");
    const mainContentTotal = document.querySelector(".main__content__total");
    const mainContentClear = document.querySelector(".main__content__clear");
    let counter = 0;
    let arrayOfTodos = [];
    let savedTodos = JSON.parse(localStorage.getItem('todos'));

    addTodo.addEventListener('click', () => {
        if (inputTodo.value !== '' && inputTodo !== undefined && inputTodo.value.includes(">") !== true) {
            todoList.insertAdjacentHTML('afterbegin', `
            <div class="main__content__list__item"><input type="checkbox" class="main__content__list__check"><span>${inputTodo.value}</span> <i class="fa-solid fa-trash main__content__list__trash"></i></div>
            `)
            // localStorage.setItem();
            inputTodo.value = '';
            const addTotal = document.querySelectorAll(".main__content__list__item");
            if (addTotal.length >= 1) {
                counter++;
            }
            mainContentTotal.innerHTML = `<p class="active__todos">You have ${counter} active todos</p>`;
        } else {
            alert("Введено неправильное значение");
            inputTodo.value = '';
        }
    });
    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('main__content__list__trash')) {
            const item = event.target.parentElement;
            todoList.removeChild(item);
            counter--;
            mainContentTotal.innerHTML = `<p class="active__todos">You have ${counter} active todos</p>`;
        }
        if (event.target.checked === true) {
            const item = event.target.parentElement;
            // const toCross = item.querySelector("span");
            // toCross.style.textDecoration = "line-through";
            item.classList.toggle('main__content__list__item_done')
        } else if (event.target.checked !== true) {
            const item = event.target.parentElement;
            // const toCross = item.querySelector("span");
            // toCross.style.textDecoration = "none";
            item.classList.remove('main__content__list__item_done')
        };
    });
    mainContentClear.addEventListener('click', () => {
        const getList = document.querySelectorAll(".main__content__list__item");
        getList.forEach(element => {
            element.remove();
            counter--;
            mainContentTotal.innerHTML = `<p class="active__todos">You have ${counter} active todos</p>`;
        });
    });

});