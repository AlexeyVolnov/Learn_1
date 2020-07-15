// вводим данные о своем бюджете
let money = Number.parseInt(prompt("Ваш бюджет на месяц?:", 0)),
    time = (prompt("Введите дату в формате yyy-mm-dd"));

// помещаем данные о своем бюджете в обьект
var appData = {
    budget: money,
    expenses: {},
    Date: time,
    income: [],
    savings: false,
    optionalexpenses: {}
}

// спрашиваем о обязательной покупке в этом месяце для того чтобы потом убрать эту сумму из бюджета
let question_1 = prompt("Введите обязательную статью расходов: "),
    question_2 = Number.parseInt(prompt("Во сколько обойдется?: ")),
    question_3 = prompt("Введите обязательную статью расходов: "),
    question_4 = Number.parseInt(prompt("Во сколько обойдется?: "));


appData.expenses.question_1 = question_2;
appData.expenses.question_3 = question_4;

alert(appData.budget / 30);