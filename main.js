// Barcha showcase_mark elementlarini tanlash
let showcase_marks = document.querySelectorAll(".showcase_mark");

// Har bir showcase_mark elementiga hodisa qo'shish
showcase_marks.forEach((mark) => {
    mark.addEventListener("click", () => {
        // Tegishli showcase_elementsni yashirish
        let showcase_element = mark.closest('div'); // closest yordamida ota divni olish
        showcase_element.classList.add("hidden");
    });
});
