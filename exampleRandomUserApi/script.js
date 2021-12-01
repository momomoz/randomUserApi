// let listDiv = $("#div");
// let data = [
//     {
//         firstName: "zita",
//         surname: "ramazanova",
//         age: 16,
//         group: "211.1",
//     },
//     {
//         firstName: "inokesha",
//         surname: "zhanbolat",
//         age: 17,
//         group: "211.1",
//     }
// ];

// const appendStudent = (student) => {
//     listDiv.append(`
//         <div class="student_block">
//             <p>Name: ${student.firstName}</p>
//             <p>Surname: ${student.surname}</p>
//             <p>Age: ${student.age}</p>
//             <p>Group: ${student.group}</p>
//         </div>
//     `)
// }

// data.map(item => appendStudent(item));

// let studentCards = document.querySelectorAll(".student_block");

// for (let i = 0; i < studentCards.length; i++) {
//     studentCards[i].addEventListener('click', function (event) {
//         let card = event.currentTarget;
//         console.log(card.childNodes[1])
//     })
// }


// listDiv = $("#list")

// const appendCourse = (course) => {
//     listDiv.append(`
//         <div class="course_block">
//             <p> Название курса: ${course.course_title}</p>
//             <p> Название курса: ${course.price} ${course.currency}</p>
//         </div>
//     `)
// }

// $.ajax({
//     url: "https://realibi.kz/courseCards",
//     success: function (response) {
//         let data = response;
//         console.log(data);
//         data.map(item => appendCourse(item));

//     },
//     error: function (response) {
//         console.log("ошибка!")
//     }
// })

// data.map(item => appendCourse(item));



// let data = [

// ];

// ajax - запрос 

/* вопросы:
1. что такое .map ?

*/



let listDiv = $("#list")
let btn = document.querySelector("#btn");


btn.addEventListener('click', function () {
    $.ajax({
        url: "https://randomuser.me/api/",
        method: "get",
        success: function (response) {
            let userInfoDiv = $("#list");
            console.log(response)
            userInfoDiv.append(`
            <div class="card">
            <div class="imgBlock"><img class="img" src="${response.results[0].picture.large}" alt=""></div>
            <div class="textBlock"><p>User phone number: ${response.results[0].phone}</p>
            <p>User age: ${response.results[0].dob.age}</p>
            <p>User email: ${response.results[0].email}</p>
            <p>City: ${response.results[0].location.city}</p>
            <p>User name:  ${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}</p>
            <p>User adress: ${response.results[0].location.street.name} ${response.results[0].location.street.number}</p></div>
            </div>`)
        },
        error: function () {
            console.log('error')
        }
    })
})

