
//Программа Курса

let cour = [
    {
        lesson: 'Модуль 1', 
        title: ' Знакомство. Общие сведения о профориентации',
        descr: `
        `,
    },
    {
        lesson: 'Модуль 2', 
        title: ' IT как наиболее перспективная профессиональная сфера в Республики Беларусь',
        descr: `
        <li>2.1 Что такое IT как область деятельности</li>
        <li>2.2 Фриланс и удаленная работа: отличия, преимущества и «подводные камни»</li>
        <li>2.3 Карьерная лестница в It</li>
        `,
    },
    {
        lesson: 'Модуль 3', 
        title: ' Гид по профессиям',
        descr: `
        <li>3.1 Разработка ПО</li>
        <li>3.2 Тестирование ПО </li>
        <li>3.3 Дизайн</li>
        <li>3.4 Маркетинг и продажи</li>
        <li>3.5 Рекрутинг</li>
        <li>3.6 Бизнес-анализ и управление проектами</li>
        `,
    },
    {
        lesson: 'Модуль 4', 
        title: 'Как разобраться кем быть',
        descr: `
        <li> 4.1 Базовая схема профориентации</li>
        <li> 4.2 Как получить выбранную профессию </li>
        <li>Подведение итогов. Вопрос-ответ.</li>
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


