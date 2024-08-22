let number = prompt('yoshingizni kiriting');

// Условие для вывода результата
let result;
if (number < 10) {
    result = "siz detskisiz 🍼👶 abduqodir:" ;  
    let img = document.createElement('img');

    // Устанавливаем источник изображения (ссылка на изображение)
    img.src = 'https://img.freepik.com/free-photo/adorable-african-american-baby-lying-bed-smiling_181624-46153.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid';
    img.alt = "Милый ребенок";
    img.style.width = "150px";
    img.style.height = "auto";

    document.querySelector("#image_result-blok").appendChild(img)
} else if (number <= 50) {
    result = "siz patsansiz 😎 ";
} else {
    result = "siz dodasiz 🧓👴";
}


document.getElementById("result").textContent = result;

