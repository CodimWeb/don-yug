const data = [
    {
        id: 1,
        city: 'Ростов',
        img: 'img/city/lg/rostov.jpg',
        info: `
            В пути : 6 часов <br/>
            Прямая машина <br/>
            Пеший переход <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 2,
        city: 'Краснодар',
        img: 'img/city/lg/krasnodar.jpg',
        info: `
            В пути : 12 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 8:00 и 17:00 <br/>
            &ndash; Из Краснодар - 21:00 <br/></br>
            Прибывает в Краснодар: <br/>
            &ndash; Краснодар 1,2<br/>
            &ndash; ТЦ "Галерея"<br/>
            &ndash; ТЦ "Лента " по ул. Российская <br/>
            &ndash; ТЦ "Лента" по ул. Восточный обход <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 3,
        city: 'Геленджик',
        img: 'img/city/lg/gelendjik.jpg',
        info: `
            В пути : 13 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 17:00 <br/>
            &ndash; Из Геленджика -17:00 <br/></br>
            Прибывает в Геленджик: <br/>
            &ndash; Семейный магнит ул.Кирова 125 <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 4,
        city: 'Анапа',
        img: 'img/city/lg/anapa.jpg',
        info: `
            В пути : 12 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 17:00 <br/>
            &ndash; Из Анапы - 19:00 <br/></br>
            Прибытие в Анапу: <br/>
            &ndash; ТЦ "Магнит" <br/>
            &ndash; Ул. Анапское шоссе 14 <br/><br/>
            Отправление из Анапы:<br/>
            &ndash; ТЦ "Магнит" <br/>
            &ndash; Ул. Анапское шоссе 14 <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 5,
        city: 'Новороссийск',
        img: 'img/city/lg/novorosiysk.jpg',
        info: `
            В пути : 12 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 17:00 <br/>
            &ndash; Из Новороссийска - 18:00 <br/></br>
            Отправление из Новороссийска:<br/>
            &ndash; ТЦ "Красная Площадь" (Анапское шоссе 2) <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 6,
        city: 'Архипо-осиповка',
        img: 'img/city/lg/arhipo-osipovka.jpg',
        info: `
            В пути : 12 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 17:00 <br/>
            &ndash; Из Архипо Осиповки - 17:30 <br/></br>
            Прибытие в Архипо- Осиповку:</br>
            &ndash; АВ Архипо- Осиповка <br/>
            Отправление из Архипо-Осиповки:<br/>
            &ndash; АВ Архипо-Осиповка <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 7,
        city: 'Джубга',
        img: 'img/city/lg/djugba.jpg',
        info: `
            В пути : 12 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 17:00 <br/>
            &ndash; Из Джубги 18:00 <br/></br>
            Прибытие в Джубгу:</br>
            &ndash; АВ Джубга <br/>
            Отправление из Джубги:<br/>
            &ndash; АВ Джубга <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 8,
        city: 'Туапсе',
        img: 'img/city/lg/tuapse.jpg',
        info: `
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Туапсе 17:00 <br/></br>
            Прибытие в Туапсе:</br>
            &ndash; АВ Туапсе <br/>
            Отправление из Туапсе:<br/>
            &ndash; АВ Туапсе <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 9,
        city: 'Сочи',
        img: 'img/city/lg/sochi.jpg',
        info: `
            В пути : 14 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Сочи 14:00 <br/></br>
            Прибытие в Сочи:</br>
            &ndash; ТЦ "Моремолл" <br/>
            Отправление из Сочи:<br/>
            &ndash; Заправка Роснефть <br/>
            &ndash; ТЦ "Моремолл" <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 10,
        city: 'Адлер',
        img: 'img/city/lg/adler.jpg',
        info: `
            В пути : 15 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Адлера 14:00 <br/></br>
            Прибытие в Адлер:</br>
            &ndash; ЖД вокзал <br/>
            Отправление из Адлера:<br/>
            &ndash; Остановка Лавровая <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 11,
        city: 'Гагра',
        img: 'img/city/lg/gagra.jpg',
        info: `
            В пути : 18 часов <br/>
            Без пересадок <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Гагры 12:00 <br/></br>
            Прибытие в Гагру:</br>
            &ndash; ЖД вокзал <br/>
            &ndash; Остановка Павильон <br/>
            Отправление из Гагры:<br/>
            &ndash; Жд вокзал <br/>
            &ndash; Остановка Павильон <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 12,
        city: 'Пицунда',
        img: 'img/city/lg/pitsunda.jpg',
        info: `
            В пути : 19 часов <br/>
            Без пересадок <br/>
            На таможне не стоим <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Пицунды 11:00 <br/></br>
            Прибытие в Пицунду:</br>
            &ndash; Рыб завод <br/>
            Отправление из Пицунды:<br/>
            &ndash; Рыб завод <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 13,
        city: 'Сухум',
        img: 'img/city/lg/suhum.jpg',
        info: `
            В пути : 20 часов <br/>
            Без пересадок <br/>
            На таможне не стоим <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Сухум 11:00 <br/></br>
            Прибытие в Сухум:</br>
            &ndash; Автовокзал <br/>
            Отправление из Сухум:<br/>
            &ndash; Автовокзал <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 14,
        city: 'Новый Афон',
        img: 'img/city/lg/new-afon.jpg',
        info: `
            Время выезда: <br/>
            &ndash; Из ДНР - 13:00 <br/>
            &ndash; Из Н.Афон 10:00 <br/></br>
            Прибытие в Н.Афон:</br>
            &ndash; Музей боевой славы <br/>
            Отправление из Н.Афон:<br/>
            &ndash; Музей боевой славы <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; Донецк <br/>
            &ndash; Макеевка <br/>
            &ndash; Харцызк <br/>
            &ndash; Иловайск <br/>
            &ndash; Амросивка <br/>
            &ndash; Горловка <br/>
        `
    },
    {
        id: 15,
        city: 'Киев',
        img: 'img/city/lg/kiev.jpg',
        info: `
            
        `
    },
    {
        id: 16,
        city: 'Харьков',
        img: 'img/city/lg/kharkov.jpg',
        info: `
            Время выезда: <br/>
            &ndash; Из ДНР - 7:00 - 12:00 <br/>
            &ndash; Из Харькова 22:30 <br/></br>
            Отправление из Харькова :<br/>
            &ndash; Центральный Ав <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; С центральных точек <br/><br/>
            Минивэн 8 мест <br/>
            Без пеших переходов <br/><br/>
            КПП <br/>
            &ndash; Нехотеевка /Гоптовка <br/>
            &ndash; Меловое/Чертково <br/><br/>
            2 водителя
        `
    },
    {
        id: 17,
        city: 'Донецк',
        img: 'img/city/lg/donetsk.jpg',
        info: `
            Мариуполь, Волноваха, Курахово, Селидово, Покровск, Бахмут, Константиновка, Доброполье, Дружковка, Краматорск, Славянск <br/><br/>
            Время выезда: <br/>
            &ndash; Из ДНР - 7:00 <br/>
            <div class="modal-direction__city-title">Заберём из городов ДНР:</div>
            &ndash; С центральных точек <br/><br/>
            Минивэн 8 мест <br/>
            Без пеших переходов <br/><br/>
            КПП <br/>
            &ndash; Меловое/Чертково <br/><br/>
        `
    },
];

export default data;