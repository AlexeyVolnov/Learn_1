var money;
var time;
// вводим данные о своем бюджете
money = Number.parseInt(prompt("Ваш бюджет на месяц?:", 0));
time = (prompt("Введите дату в формате yyy-mm-dd"));

// помещаем данные о своем бюджете в обьект
let appData = {
    budget: money,
    Date: time
}




// спрашиваем о обязательной покупке в этом месяце для того чтобы потом убрать эту сумму из бюджета
var question_1 = prompt("Введите обязательную статью расходов: ");
var question_2 = Number.parseInt(prompt("Во сколько обойдется?: "));

var expenses = {
    question: question_1 + ":" + question_2
}
console.log(expenses);


// Производим расчет бюджета на 1 день и выводим на экран  

var amountOfMoneyPerDay = (money - question_2) / 30;
alert("Ваш бюджет на один день составляет:" + amountOfMoneyPerDay)