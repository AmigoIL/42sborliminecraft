function showModInfo(modId) {
    let modTitle = document.getElementById('modTitle');
    let modDescription = document.getElementById('modDescription');
    let modDetails = document.getElementById('modDetails');
    let downloadLink = document.getElementById('downloadLink');
    let content = document.getElementById('content');
    let infoBox = document.getElementById('infoBox');
    let siteDescriptionBox = document.getElementById('siteDescriptionBox');
    let serverInfoBox = document.getElementById('serverInfoBox');

    // Если modId не определен или не передан, скрываем текст и устанавливаем начальный фон
    if (!modId) {
        modTitle.classList.add('hidden');
        modDescription.classList.add('hidden');
        modDetails.classList.add('hidden');
        downloadLink.classList.add('hidden');
        infoBox.classList.add('hidden');
        siteDescriptionBox.classList.remove('hidden'); // Показываем блок с информацией о сайте
        serverInfoBox.classList.add('hidden'); // Скрываем блок с информацией о сервере
        content.classList.add('default-bg');
        content.style.backgroundImage = ''; // Убираем фоновое изображение
        return;
    }

    // Скрываем блок с информацией о сайте
    siteDescriptionBox.classList.add('hidden');

    // Показываем текст, когда сборка выбрана
    modTitle.classList.remove('hidden');
    modDescription.classList.remove('hidden');
    modDetails.classList.remove('hidden');
    downloadLink.classList.remove('hidden');
    infoBox.classList.remove('hidden');
    serverInfoBox.classList.add('hidden'); // Скрываем блок с информацией о сервере

    // Устанавливаем отступ сверху для infoBox
    infoBox.classList.remove('margin-top-large');

    // Сбрасываем активный класс для всех элементов
    let modListItems = document.querySelectorAll('#modList li');
    modListItems.forEach(item => item.classList.remove('active'));

    // Устанавливаем активный класс для выбранного элемента
    document.querySelector(`#modList li[onclick="showModInfo('${modId}')"]`).classList.add('active');

    // Устанавливаем фон и информацию в зависимости от выбранной сборки
    switch(modId) {
        case 'mod1':
            modTitle.innerText = 'MagicCreate';
            modDescription.innerText = 'Сборка включает в себя очень популярные моды. Такие как: Create, DivineRPG, Ice and Fire. Вы сможете сражаться с монстрами и путешествовать по различным мирам. Вы сможете полететь на другие планеты и КОЛАНИЗИРОВАТЬ МАРС. Строить летающие корабли и браздить просторы морей. Строить различные механизмы и выживать. Сборка сделана при поддержке - higssi';
            modDetails.innerText = 'Список модов:';
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=1tibR_CPw16xAECZg4UT0a1fmnNrqOPjh';
            downloadLink.download = 'MagicCreate.zip';
            content.style.backgroundImage = 'url("images/Createmagic.jpeg")';
            content.classList.remove('default-bg');
            infoBox.classList.add('margin-top-large'); // Применяем отступ сверху для mod1
            break;
        case 'mod2':
            modTitle.innerText = 'Vanilla+';
            modDescription.innerText = 'Сборка включает в себя моды которые улучшают майнкрафт и оптимизируют его. Подходит для игры на серверах. Версия 1.20.2';
            modDetails.innerText = 'Список модов:';
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=1RwyfwvSz2z723CV9Kbw0TSQNejSNedK8';
            downloadLink.download = 'Vanilla1202.zip';
            content.style.backgroundImage = 'url("images/vanillaplus.png")';
            content.classList.remove('default-bg');
            infoBox.classList.add('margin-top-large');
            break;
        case 'mod3':
            modTitle.innerText = 'Vanilla++';
            modDescription.innerText = 'Сборка включает в себя моды которые улучшают майнкрафт и оптимизируют его. Подходит для игры на серверах. Версия 1.20.1';
            modDetails.innerText = 'Список модов:';
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=1fS26Dq_tYrSHh3LbmMopc32npA7yqcCk';
            downloadLink.download = 'Vanilla1201.zip';
            content.style.backgroundImage = 'url("images/vanillaplusplus.png")';
            content.classList.remove('default-bg');
            infoBox.classList.add('margin-top-large');
            break;
        case 'mod4':
            modTitle.innerText = 'СП5';
            modDescription.innerText = 'Сборка 5opka на которой он играет на сервере СП5 Версия 1.20.1';
            modDetails.innerText = 'Список модов:';
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=1QvUkP4n-09q2WCpevZgCaQSVynnlMd6q';
            downloadLink.download = "sp.zip";
            content.style.backgroundImage = 'url("images/maxresdefault.jpg")';
            content.classList.remove('default-bg');
            infoBox.classList.add('margin-top-large');
            break;
        case 'server':
            showServerInfo(); // Показать информацию о сервере
            return;
        default:
            modTitle.innerText = 'Выберите сборку';
            modDescription.innerText = 'Описание сборки';
            modDetails.innerText = 'Эта сборка включает в себя ...';
            downloadLink.href = '#';
            downloadLink.download = '';
            content.style.backgroundImage = '';
            content.classList.add('default-bg');
            infoBox.classList.add('margin-top-large');
            break;
    }
}

function showServerInfo() {
    let modTitle = document.getElementById('modTitle');
    let modDescription = document.getElementById('modDescription');
    let modDetails = document.getElementById('modDetails');
    let downloadLink = document.getElementById('downloadLink');
    let content = document.getElementById('content');
    let infoBox = document.getElementById('infoBox');
    let siteDescriptionBox = document.getElementById('siteDescriptionBox');
    let serverInfoBox = document.getElementById('serverInfoBox');

    // Скрываем все остальные блоки
    modTitle.classList.add('hidden');
    modDescription.classList.add('hidden');
    modDetails.classList.add('hidden');
    downloadLink.classList.add('hidden');
    infoBox.classList.add('hidden');
    siteDescriptionBox.classList.add('hidden');

    // Показываем блок с информацией о сервере
    serverInfoBox.classList.remove('hidden');

    // Сбрасываем активный класс для всех элементов
    let modListItems = document.querySelectorAll('#modList li');
    modListItems.forEach(item => item.classList.remove('active'));

    // Устанавливаем активный класс для элемента сервера
    document.querySelector(`#modList li[onclick="showModInfo('server')"]`).classList.add('active');

    // Устанавливаем фоновое изображение для .content
    content.style.backgroundImage = 'url("images/servers52.png")';
    // Выравниваем изображение в правой части
    content.style.backgroundPosition = 'right';
    // Отключаем фоновое изображение, если оно было установлено ранее
    content.classList.remove('default-bg');
}
function copyIP() {
    let serverIPText = document.getElementById('serverIPText').innerText;
    navigator.clipboard.writeText(serverIPText).then(function() {
       ;
    }, function(err) {
        console.error('Ошибка копирования IP адреса: ', err);
    });
}
