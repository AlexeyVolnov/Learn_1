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

/* // спрашиваем о обязательной покупке в этом месяце для того чтобы потом убрать эту сумму из бюджета
for (let i = 0; i < 2; i++) {
    question_1 = prompt("Введите обязательную статью расходов: ");
    question_2 = Number.parseInt(prompt("Во сколько обойдется?: "));

    if ((typeof (question_1)) === 'string' && question_1 != null && (typeof (b) != null) &&
        question_1 != "" && question_2 != "" && question_1.length < 50) {
        appData.expenses[question_1] = question_2;

    }
} */
let i = 0;
while (i < 2) {
    question_1 = prompt("Введите обязательную статью расходов: ");
    question_2 = Number.parseInt(prompt("Во сколько обойдется?: "));
    if ((typeof (question_1)) === 'string' && question_1 != null && (typeof (b) != null) &&
        question_1 != "" && question_2 != "" && question_1.length < 50) {
        appData.expenses[question_1] = question_2;
        i++;


    }

    /* let i = 0;
    switch (i) {
        case (i < 2) && ((typeof (question_1)) === 'string' && question_1 != null && (typeof (b) != null) &&
            question_1 != "" && question_2 != "" && question_1.length < 50):
            question_1 = prompt("Введите обязательную статью расходов: ");
            question_2 = Number.parseInt(prompt("Во сколько обойдется?: "));
            i++; */

    //с помощью цикла swith case мне эту задачу решить неудобно,из вариантов выше лучше всего эту задачу решает цикл while;


}
alert(appData.budget / 30);