//using selectors inside the element
// traversing the dom

// const question = document.querySelectorAll(".question");

// question.forEach(function (orange){
//     const

// });

// currentTarget : là phần tử lắng nghe sự kiện
// target : phần tử kích hoạt sự kiện

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});

