//1
let doc = {
  header: '',
  body: '',
  footer: '',
  date: new Date().toString(),
  addition: {
    header: '',
    body: '',
    footer: '',
    date: new Date().toString(),
  },
}
function header(header) {
  doc.header = header
  let myHeader = document.createElement('h1')
  myHeader.innerHTML = `Заголовок: ${doc.header}`
  document.body.appendChild(myHeader)
}
function body(body) {
  doc.body = body
  let myBody = document.createElement('h1')
  myBody.innerHTML = `Тeло : ${doc.body}`
  document.body.appendChild(myBody)
}
function footer(footer) {
  doc.footer = footer
  let myFooter = document.createElement('h1')
  myFooter.innerHTML = `Футер : ${doc.footer}`
  document.body.appendChild(myFooter)
}

function date(date = new Date().toString()) {
  doc.date = date
  let myDate = document.createElement('h1')
  myDate.innerHTML = `Дата : ${doc.date}`
  document.body.appendChild(myDate)
}
function addition(header, body, footer, date) {
  doc.addition.header = header
  doc.addition.body = body
  doc.addition.footer = footer
  doc.addition.date = date
  let addition = document.createElement('div')
  addition.style.background = 'blue'
  addition.style.color = 'white'
  addition.innerHTML = `Дополнительный заголовок : ${doc.addition.header}
    <br>
    Дополнительное тело : ${doc.addition.body}
    <br>
    Дополнительный футер : ${doc.addition.footer}
    <br>
    Дополнительная дата : ${doc.addition.date}

    `
  document.body.appendChild(addition)
}

function constrution() {
  header('Заголовок')
  body('Тело проекта')
  date()
  addition(
    'Хедер в дополнении',
    'Тело в дополнении',
    'Футер в дополнении',
    new Date().toString(),
  )
  footer('Футер')
}
//constrution()
//2
function calc(num1, num2, sign) {
  switch (sign) {
    case '+':
      let result1 = num1 + num2
      alert(`Вы ввели ${num1} и ${num2} Результат добавления : ${result1}`)
      break
    case '-':
      let result2 = num1 - num2
      alert(`Вы ввели ${num1} и ${num2} Результат вычитания : ${result2}`)

      break
    case '/':
      let result3 = num1 / num2
      alert(`Вы ввели ${num1} и ${num2} Результат деления : ${result3}`)

      break
    case '*':
      let result4 = num1 * num2
      alert(`Вы ввели ${num1} и ${num2} Результат умножения : ${result4}`)

      break

    default:
      console.log('Введите корректное значение')
  }
}
//calc(100,50,'*')

//3 and 4
function calculate(num1, num2, sign) {
  const signs = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  }
  if (Array.isArray(num1)) {
    let res = []
    num1.map((num, index) => {
      const sec = num2[index]
      res.push(signs[sign](num, sec))
    })
    return res
  }
  if (typeof num1 === 'object') {
    return { res: signs[sign](num1.a, num2.b) }
  }
  return signs[sign](num1, num2)
}

//console.log(`[10,60] * [20,3] = `,calculate([10,60], [20,3], "*"))
//console.log(`[10,30] + [2,4] = `,calculate([10,30], [2,4], "+"))

//console.log(`{a: 480} - {b: 200} = ` ,calculate( {a: 480}, {b: 200}, "-"))
//console.log(`{a: 4} * {b: 200} = ` ,calculate({a: 4}, {b: 200}, "*"))
//5 and 6
let MathFrameWork ={
  num1:0,
  num2:0,
  calc: (num1,num2,sign)=>MathFrameWork.result = calculate(num1, num2, sign) ,
  result:''
}
MathFrameWork.num1 = [10, 60]
MathFrameWork.num2 = [20, 3]
MathFrameWork.calc(MathFrameWork.num1, MathFrameWork.num2, '+')
console.log(
  `[${MathFrameWork.num1}] + [${MathFrameWork.num2}] \n Сума: `,
  MathFrameWork.result,
)

MathFrameWork.num1 = 2
MathFrameWork.num2 = 300
MathFrameWork.calc(MathFrameWork.num1, MathFrameWork.num2, '*')
console.log(
  `${MathFrameWork.num1} * ${MathFrameWork.num2} \n Умножение: `,
  MathFrameWork.result,
)

MathFrameWork.num1 = { a: 500 }
MathFrameWork.num2 = { b: 20 }
MathFrameWork.calc(MathFrameWork.num1, MathFrameWork.num2, '/')
console.log(
  `${MathFrameWork.num1.a} / ${MathFrameWork.num2.b} \n Деление: `,
  MathFrameWork.result,
)

//game
function game() {
  let questions = {
    0: '',
    1: '«Людям не те що позакладало вуха – людям позакладало душі» Ці рядки сказала Ольга Кобилянська?',
    2: '«Можна все на світі вибирати, сину, Вибрати не можна тільки Батьківщину» Це сказав Павло Тичина?',
    3: '«Як добре те, що смерті не боюсь я і не питаю, чи тяжкий мій хрест, \nщо перед вами, судді, не клонюся в передчутті недовідомих верст».Це сказав Василь Стус?',
    4: '«Лупайте сю скалу! Нехай ні жар, ні холод Не спинить вас! Зносіть і труд, і спрагу, й голод, Бо вам призначено скалу сесю розбить» Це сказав Іван Франко?',
    5: '«...Морем в бурю їхать слизько, Човнів ніхто не підкує» Ці рядки сказав Остап Вишня?',
    6: '«Ні! я жива! Я буду вічно жити! Я в серці маю те, що не вмирає». Ці слова сказала Леся Українка?',
    7: '«Він був сином мужика і став володарем у царстві духа. Він був кріпаком і став велетнем у царстві людської культури. \nВін був самоуком і вказав нові, світлі і вільні шляхи професорам і книжним ученим» Ці слова про Тараса Шевченка?',
    8: ' ',
    9: '',
    10: 'А працювати заради підтримання економіки України треба ж???',
  }
  let result = {
    0: 'Ні, такі рядки сказала Ліна Костенко. ',
    1: 'Так, ви праві. Рухаємося далі.',
    2: 'Ні! Це сказав Василь Симоненко - український поет, шістдесятник.',
    3: 'Так!! Це сказав саме цей автор, будьте уважні!',
    4: 'Ні! Ці рядки сказав Іван Котляревський - класик нової української літератури. ',
    5: 'Саме вона входить до переліку найвідоміших жінок давньої та сучасної України!',
    6: 'Ці слова про нього, символ України та нескоренності.',
    7: 'Ви праві, подивимося ваш результат! ',
  }
  let user = prompt("Введіть своє ім'я", '')

  user = user || (user = 'Анонім')
  let info1 = `
  Доброго здоров'я, ${user}!
  `
  console.log(info1)
  let userAge = prompt('Введіть свій вік', '')

  console.log('Твій вік ', userAge, ' років')
  if (userAge > 7 && userAge <= 80) {
    let count = 0;
    let res1 = prompt(questions[1])
    console.log(`Ти обрав `, res1)
    switch (res1) {
      case 'так': {
        console.log(result[0])
     
      }
      case 'ні': {
        console.log(result[1])
        count++;
      }
    }
    let res2 = prompt(questions[2])
    console.log(`Ти обрав `, res2)
    switch (res2) {
      case 'так': {
        console.log(result[2])
      }
      case 'ні': {
        console.log(result[1])
        count++;
      }
    }

    let res3 = prompt(questions[3])
    console.log(`Ти обрав `, res3)
    switch (res3) {
      case 'так': {
        console.log(result[1])
        count++;
      }
      case 'ні': {
        console.log(result[3])
     
      }
    }
    let res4 = prompt(questions[4])
    console.log(`Ти обрав `, res4)
    switch (res4) {
      case 'так': {
        console.log(result[1])
        count++;
      }
      case 'ні': {
        console.log(result[3])
      }
    }

    let res5 = prompt(questions[5])
    console.log(`Ти обрав `, res5)
    switch (res5) {
      case 'так': {
        console.log(result[4])
     
      }
      case 'ні': {
        console.log(result[1])
        count++;
      }
      
    }
    let res6 = prompt(questions[6])
    console.log(`Ти обрав `, res6)
    switch (res6) {
      case 'так': {
        console.log(result[1])
        count++;
      }
      case 'ні': {
        console.log(result[5])
      
      }
      
    }
    let res7 = prompt(questions[7])
    console.log(`Ти обрав `, res7)
    switch (res7) {
      case 'так': {
        console.log(result[7])
        count++;
      }
      case 'ні': {
        console.log(result[6])
      
      }
      
    }
    console.log(`Ви набрали ${count} очків`)
    if (count >= 5 && count <= 7)
      console.log(`Ви дуже обізнана людина в українській культурі та літературі!`)
    if (count >= 2 && count <= 4)
      console.log(`Ви маєте середній результат, але не засмучуйтесь! Є куди рости!!!`)
    if (count <= 1)
      console.log(`Вам потрібно більше поглинути в культуру українського народу та її витоки!`)
      
  }
  else {
    console.log('Введіть коректну відповідь!')
  }
}
//game()
//additionally
//1
let manager = {
    first_name: 'Lopatka',
    last_name: 'Vlad',
    age: 19,
    gender: 'male',
    id: 30003041
  }

console.log('manager ', manager.first_name='Malenkiv', manager.last_name='Yaroslav', manager.age = 30, manager.gender= 'male', manager.id = 40400302)
  //2
  function secretary(name, lastName, age, gender, id) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.id = id

  }
  let Secretary = new secretary('Lapenko', 'Ivan', 40, 'male', 4000040)
  console.log('secretary ', Secretary)

//3
let input1 = document.createElement('input')
input1.type = 'number'
document.body.appendChild(input1)

let input2 = document.createElement('input')
input2.type = 'number'
document.body.appendChild(input2)

let button = document.createElement('button')
button.innerHTML = 'calculate'
document.body.appendChild(button)

let Res = document.createElement('p')
document.body.appendChild(Res)

  function calc(result) {
    Res.innerHTML = `<br/> Result = ${result.toFixed(2)}`
  }

button.onclick = () => {
  Res.innerHTML = `
сума = ${input1.value + input2.value}
умножение = ${input1.value * input2.value}
деление = ${input1.value / input2.value}
вычитание = ${input1.value - input2.value}`
}
