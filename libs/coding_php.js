
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Базовые принципы и понятия',
        descr: `
        <li>1. Понятие Интернет-приложения.</li>
        <li>2. Технологии программирования интернет- приложений.</li>
        <li>3. Структура web-страницы. HTML и CSS.</li>
        <li>4. Подготовка рабочего места интернет-программиста.</li>
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Основы программирования на РНР',
        descr: `
        <li>1. Основы РНР.</li>
        <li>2. Массивы.</li>
        <li>3. Операторы.</li>
        <li>4. Условные операторы и циклы.</li>
        <li>5. Функции РНР.</li>
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Язык SQL и СУБД MySQL',
        descr: `
        <li>1. Основы. Работа с одиночной таблицей.</li>
        <li>2. Работа со связанными таблицами.</li>
        <li>3. Средства РНР для работы с MySQL.</li>
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Программирование форм',
        descr: `
        <li>1. POST и GET запросы.</li>
        <li>2. Элементы форм и работа с ними.</li>
        <li>3. Программирование форм.</li>
        `,
    },
    {
        lesson: 'Занятие 5', 
        title: 'Объектно ориентированное программирование (ООП) на PHP',
        descr: `
        <li>1. Классы и объекты.</li>
        <li>2. Практическое применение ООП в PHP.</li>
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'Обзор готовых решений (CMS и frameworks)',
        descr: `
        <li>1. CMS Joomla.</li>
        <li>2. Framework Yii2.</li>
        `,
    },
    {
        lesson: 'Занятие 7', 
        title: 'Практика разработки',
        descr: `
        <li>1. Проектирование.</li>
        <li>2. Разработка программного кода.</li>
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


