// const colors = ["червоний", "синій", "зелений", "жовтий", "фіолетовий"];

// ТВОЄ ЗАВДАННЯ:
// 1. Знайди список ul з класом "js-colors-list"
// 2. Створи елементи li для кожного кольору
// 3. Додай їх до списку

// Підказка: використовуй map() і createElement()


// const listEL = document.querySelector(".js-colors-list")
// // console.log(listEL);

// colors.forEach((item) => {
//     const newElement = document.createElement("li")
//     newElement.textContent = item;
//     listEL.appendChild(newElement)
// })










const fruits = ["яблуко", "банан", "апельсин", "виноград", "полуниця"];

// ТВОЄ ЗАВДАННЯ:
// 1. Знайди список ul з класом "js-fruits-list"
// 2. Створи елементи li для кожного фрукта
// 3. Додай їх до списку

// Можеш використати forEach() або map() - як тобі зручніше


const listEl = document.querySelector(".js-fruits-list")

fruits.forEach((item) => {
    const newElements = document.createComment("li")
    newElements.textContent = item;
    listEl.append(newElements)
})