
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Специфика поиск работы в условиях кризиса.',
        descr: `
        <li>1. Схема поиска работы.</li>
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Где искать работу.',
        descr: `
        <li>1. Сайты по трудоустройству.</li>
        <li>2. Телеграмм-каналы и группы.</li>
        <li>3. Социальные сети.</li>
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Подготовка резюме.',
        descr: `
        <li>1. Резюме и СV: в чем различия и что на самом деле необходимо высылать работодателям.</li>
        <li>2. Обзор основных разделов резюме.</li>
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Интервью с работодателем.',
        descr: `
        <li>1. Общая схема интервью. Правила поведения на интервью.</li>
        <li>2. Самопрезентация кандидата на интервью.</li>
        <li>3. Корректные ответы на вопросы интервьюера. Типовые ошибки, которые допускают кандидаты на интервью.</li>
        <li>4. Формирование вопросов о компании/вакансии/проекте собеседующему.</li>
        <li>5. Завершение интервью и договоренность об обратной связи. Договоренность о тестовом задании.</li>
        <li>6. Как узнать обратную связь.</li>
        `,
    },
    {
        lesson: 'Занятие 5', 
        title: 'Оценка эффективности интервью.',
        descr: `
        <li>1. Корректировка ошибок.</li>
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'Подведение итогов.',
        descr: `
        <li>1. Вопросы-ответы.</li>
        `,
    },
];

let sc='';
for (i1=0; i1<cour.length; i1++) {
    
 sc += `<div>
 <span>${cour[i1].lesson}.</span>
        <span class="sec-2__title">${cour[i1].title}</span>
     </div>
 <div>
     <div class="sec-2__less-block">
         
    
      <div class="sec-2__content">
            <ol>
            ${cour[i1].descr}
            </ol>
        </div>
    </div>
 </div> ` ;


}

course.innerHTML = sc;

