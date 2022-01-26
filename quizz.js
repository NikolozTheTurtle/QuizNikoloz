let quizzBase = [
  {
    question: `რამდენი ოსკარი მიიღო პიტერ ჯექსონის „ბეჭდების მბრძანებლის“ კინოტრილოგიამ?`,
    foto: `photos/lotr.jpg`,
    answers: [`16`, `17`, `18`, `19`],
    correct: `17`,
    level: 40,
  },
  {
    question: `რომელი ფილმიდან/ფილმების სერიიდან არის ციტატა: "May the Force be with you"`,
    foto: `photos/film.jpg`,
    answers: [
      `ვარსკვლავური ომები`,
      `შერეკილები`,
      `ჰარი პოტერი`,
      `კარიბის ზღვის მეკობრეები`,
    ],
    correct: `ვარსკვლავური ომები`,
    level: 10,
  },
  {
      question: `სწორედ ამდენი ბურთის (ქულის) აღება შეუძლია ჩოგბურთელს ერთ გეიმში.`,
      foto: `photos/tennis.jpg`,
      answers: [
          `40`, `30`, `განუსაზღვრელი რაოდენობის`, `100`
      ],
      correct: `განუსაზღვრელი რაოდენობის`,
      level: 20
  },
  {
      question: `ესაა მინიატურული ხე, რომელსაც ხშირად ეძახიან იაპონელი იმპერატორების ხეს.`,
      foto: `photos/japan.jpg`,
      answers: [
          `საკურა`, `მურაი`, `ბონსაი`, `არცერთი ჩამოთვლილთაგან`
      ],
      correct: `მურაი`,
      level: 60
  },
  {
      question: `ამ ქალაქში ჩატარდა პირველი ღამის რბოლა ფორმულა ერთში.`,
      foto: `photos/formula.jpg`,
      answers: [
          `ტოკიო`, `სინგაპური`, `ლონდონი`, `ნიუ-იორკი`
      ],
      correct: `სინგაპური`,
      level: 70
  },
  {
      question: `სამხრეთის ზღვებში ჯეიმს კუკის 1769 წლის ექსპედიცია აკვირდებოდა სწორედ ამ პლანეტას`,
      foto: `photos/planet.jpg`,
      answers: [
          `ვენერა`, `მარსი`, `იუპიტერი`, `მერკური`
      ],
      correct: `ვენერა`,
      level: 20
  },
  {
      question: `სწორედ ამ ადამიანის სახელი ერქვა ჯორჯ ორუელის “ცხოველების ფერმაში” ტახს, რომელმაც დიქტატურა დაამყარა და თავისი მოწინააღმდეგე გააძევა ფერმიდან.`,
      foto: `photos/farmm.jpg`,
      answers: [
          `ალექსანდრე მაკედონელი`, `ალექსანდრე პირველი`, `ჰიტლერი`, `ნაპოლეონი`
      ],
      correct: `ნაპოლეონი`,
      level: 30
  },
  {
      question: `1991 წელს ჩატარდა რეფერენდუმი საქართველოს დამოუკიდებლობის მოთხოვნით. დაასახელეთ თვე და რიცხვი`,
      foto: `photos/geo.jpg`,
      answers: [
          `31 მარტი`, `1 სექტემბერი`, `16 აპრილი`, `26 მაისი`
      ],
      correct: `31 მარტი`,
      level: 20
  },
  {
      question: `ეს კუნძული სიდიდით მეოთხეა მსოფლიოში. იმის გამო, რომ დიდი ხნის განმავლობაში იზოლირებული იყო, ამ კუნძულზე განვითარდა ფლორისა და ფაუნის ბევრი ენდემური სახეობა`,
      foto: `photos/island.jpg`,
      answers: [
          `გრენლანდია`, `ჰავაი`, `აღდგომის კუნძულები`, `მადაგასკარი`
      ],
      correct: `მადაგასკარი`,
      level: 10
  },
  {
      question: `წიგნში “მსოფლიოს 100 საოცრება” ავტორი ამბობს: “აქ ქვებს ზღვის სუნი აქვთ, აქ ყველა შენობა ცოცხალი ისტორიაა, აქ იმდენი ნახატი და ფრესკა, სკულპტურა და მოზაიკაა, რომ შეიძლება მოგეჩვენოთ რომ ეს ქალაქი ერთი უზარმაზარი მუზეუმია. “ სად?`,
      foto: `photos/wonders.jpg`,
      answers: [
           `მადრიდი`, `რომი`, `ვენეცია`, `პარიზი`
      ],
      correct: `ვენეცია`,
      level: 50
  }
];
let form = document.querySelector(".my-form");
let pak = document.querySelector(".paket");
for (let i = 0; i < quizzBase.length; i++) {
  pak.innerHTML += `<div class="task">
    <p class="question">${quizzBase[i].question}</p>
    <img src="${quizzBase[i].foto}" alt="">
    <div class="answers" id="answers-${i + 1}" data-id="${i}"></div>
</div>`;
}
document.querySelector(".task").classList.add("task-active");
let answerGrid = document.querySelectorAll(".answers");
answerGrid.forEach((el) => {
  let dataId = el.getAttribute("data-id");
  for (let i = 0; i < quizzBase[dataId].answers.length; i++) {
    el.innerHTML += `<button class="choice">${quizzBase[dataId].answers[i]}</button>`;
  }
});
let checked = 0;
answerGrid.forEach((el) => {
  for (let i = 0; i < el.children.length; i++) {
    el.children[i].addEventListener("click", function () {
      if (el.children[i].classList.contains("chosen")) {
        el.children[i].classList.remove("chosen");
        checked--;
      } else {
        for (let t = 0; t < el.children.length; t++) {
          if (el.children[t].classList.contains("chosen")) {
            checked--;
          }
          el.children[t].classList.remove("chosen");
        }
        el.children[i].classList.add("chosen");
        checked++;
      }
      let shownCh = document.querySelector(".task-active .answers").children;
      for (let i = 0; i < shownCh.length; i++) {
        if (shownCh[i].classList.contains("chosen")) {
          document.querySelector(".next-btn").removeAttribute("disabled");
        }
      }
      if (checked == quizzBase.length) {
        document.querySelector(".submit-btn").removeAttribute("disabled");
      } else {
        document.querySelector(".submit-btn").setAttribute("disabled", "");
      }
    });
  }
});

document.querySelector(".next-btn").addEventListener("click", function () {
  let tAct = document.querySelector(".task-active");
  tAct.classList.remove("task-active");
  tAct.nextElementSibling.classList.add("task-active");
  document.querySelector(".next-btn").setAttribute("disabled", "");
  if (tAct.nextElementSibling.nextElementSibling == null) {
    document.querySelector(".next-btn").classList.add("next-none");
  }
});
document.querySelector(".submit-btn").addEventListener("click", function (e) {
  let ansArr = [];
  let correct = 0;
  for (let i = 0; i < document.querySelectorAll(".chosen").length; i++) {
    ansArr.push(document.querySelectorAll(".chosen")[i].innerText);
  }
  for (let i = 0; i < ansArr.length; i++) {
    if (ansArr[i] == quizzBase[i].correct) {
      correct++;
    }
  }
  form.classList.add("d-none");
  document.querySelector(".results").innerHTML = ``;
  document.querySelector(".results").classList.remove("d-none");
  document.querySelector(".results").innerHTML = `
    <p>თქვენი შედეგია: ${correct * (100 / quizzBase.length)}%</p>
    <button type="button" class="reset">Restart</button>
    `;
  // reset click event START!!!!!!!!
  document.querySelector(".reset").addEventListener("click", function () {
    form.classList.remove("d-none");
    document.querySelector(".results").classList.add("d-none");
    correct = 0;
    checked = 0;
    document.querySelectorAll(".chosen").forEach((el) => {
      el.classList.remove("chosen");
    });
    document.querySelector(".task-active").classList.remove("task-active");
    document.querySelector(".paket").children[1].classList.add("task-active");
    document.querySelector(".next-btn").classList.remove("next-none");
    document.querySelector(".next-btn").setAttribute("disabled", "");
  });
  // reset click event END!!!!!!!!
});
