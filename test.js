// https://xenforo.com/community/help/bb-codes/

window.button_id = 0;

window.active_old = 0;

var button_shavar = 'value="Выбрать ответ" id="shabs" style="margin-left: 3px;"';

var button_shabs = '<input type="button" class="button shabs" ' + button_shavar + '>';

$('.button--icon--reply').after(button_shabs);

$(document).ready(function () {

$("button#shabs.button.shabs.rippleButton").click(function() {

$('div.overlay-container').remove()

XF.alert(`<div id="shabscontent"></div>`, "Выберите ответ");

addbtnscript("трабл мобайл", "<br>Сообщите о проблеме или предложении в личные сообщения группы [B]Мастерская ARIZONA MOBILE[/B] - [URL='https://vk.com/agm_workshop']кликабельно[/URL].<br>Закрыто.");

addbtnscript("трабл лаунчер", "<br>Сообщите о проблеме или предложении в личные сообщения группы [B]Мастерская ARIZONA GAMES[/B] - [URL='https://vk.com/ag_workshop']кликабельно[/URL].<br>Закрыто.");

addbtnscript("1.взлом(привязки)", "<br>Привязана ли почта к аккаунту и имеете ли к ней доступ?<br>Привязан ли ВК на сайте в личном кабинете?");
addbtnscript("2.взлом(с вк)", "<br>Из-за того, что у вас имеется привязка ВК к личному кабинету, мы предоставляем вам ссылку на восстановление аккаунта - [URL='http://ttps%3A//arizona-rp.com/account-restore']кликабельно [/URL]<br>Перед заполнением формы вам необходимо создать новый почтовый адрес и максимально его обезопасить от взлома (установить двухфакторную аутентификацию, установить дополнительный пароль на папку входящие), а так же сделать полную проверку компьютера антивирусом. Далее заполните форму и ожидайте рассмотрения вашего обращения в течении 10-20 дней. Если прошло более 20 дней и вам не привязали новую почту, значит вам отказали. Создавать дальнейшие темы не нужно.<br>Закрыто.");
addbtnscript("2.взлом(с почтой)", "<br>Из-за того, что у вас имеется привязка почты , мы предоставляем вам ссылку на восстановление аккаунта - [URL='https://arizona-rp.com/profile/recovery']кликабельно[/URL]<br>Перед заполнением формы вам необходимо создать новый почтовый адрес и максимально его обезопасить от взлома (установить двухфакторную аутентификацию, установить дополнительный пароль на папку входящие), а так же сделать полную проверку компьютера антивирусом. Далее заполните форму и ожидайте рассмотрения вашего обращения в течении 10-20 дней. Если прошло более 20 дней и вам не привязали новую почту, значит вам отказали. Создавать дальнейшие темы не нужно.<br>Закрыто.");
addbtnscript("3.взлом(бан)", "Так как на аккаунте нет никаких привязок, в восстановлении аккаунта - отказано. В данном случае ваш аккаунт будет забанен навсегда.<br>После регистрации нового аккаунта, следуйте этим правилам:<br>1. Устанавливайте все доступные варианты безопасности в настройках аккаунта (/settings), а так же в личном кабинете включите аутентификацию через ВК.<br>2. Привязывайте свою действующую почту к аккаунту, усиливайте защиту своего почтового ящика, а также обязательно ставьте вход по почте(/settings).<br>3. Не скачивайте никакие моды и играйте с нашего лаунчера.<br>Закрыто.<br>");

addbtnscript("1.пропажа(форма)", "<br>Заполните 1 раз данную форму - [URL='https://docs.google.com/forms/d/e/1FAIpQLSfn7RHUzdMF8TMS3MDSqlbUwRrPPE1A8gqrWi91awssv-4Iww/viewform']кликабельно[/URL]. <br>После чего ваше обращение будет на рассмотрении. Рассмотрение происходит в течение суток, далее, о ходе работ мы сообщим вам в этой теме.<br>Закрыто.<br>");
addbtnscript("2.пропажа (выдача)", "<br>Была создана заявка '   '. Заявка будет обработана и принята в течении недели. Просьба не менять свой ник до момента выдачи, не менять предметы местами в инвентаре в случае, если вам должны выдать предмет который помещается в инвентарь.<br>Закрыто.<br>");

addbtnscript("предложение", "<br>[FONT=georgia][SIZE=4]Будьте добры заполнить данную форму - [/SIZE][/FONT][URL='https://docs.google.com/forms/d/e/1FAIpQLScSb11WJAu9wMWWiAxdm-ycDz65sZe9Ki-Fxqh_I-E8p9v7Cw/viewform'][FONT=georgia][SIZE=4]кликабельно[/SIZE][/FONT][/URL][FONT=georgia][SIZE=4]. <br>Закрыто.<br>[/SIZE][/FONT]");

addbtnscript("откат игрока", "<br>В ближайшее время откатим Вам инвентарь на состояние ' ' . В данный момент не взаимодействуйте с инвентарем и не покупайте ничего ценного т.к. мы возвращаем состояние инвентаря, а не выдаем предметы обратно, в случае жалобы на пропажу предмета, который был куплен после слета инвентаря, в возврате будет отказано. <br>[B]Ожидайте ответа от старшей технической администрации проекта[/B].<br>Закрыто.");
addbtnscript("откат багажника", "В ближайшее время откатим Вам багажник машины и ее состояние (TT/модификации), в данный момент не взаимодействуйте с машиной (можете ездить на ней) и не устанавливайте на нее ничего ценного. В случае жалобы на пропажу предмета, который был установлен после слета состояния машины, в возврате будет отказано. <br> Ожидайте ответа от старшей технической администрации сервера.<br>Закрыто.");
addbtnscript("откат дома","<br>В ближайшее время откатим Вам состояние шкафа, в данный момент не взаимодействуйте с шкафом и не кладите туда ничего ценного т.к. мы возвращаем состояние шкафа, а не выдаем предметы обратно, в случае жалобы на пропажу предмета, который был положен после слета шкафа, в возврате будет отказано.  Ожидайте ответа от старшей технической администрации сервера.<br>Закрыто.");

addbtnscript("флуд", "<br>Ответ вам был дан в прошлой теме. Дальнейшее создание подобных тем может привести к блокировке форумного аккаунта.<br>Закрыто.");

addbtnscript("аунтефикатор", "<br>Для отключения аутентификатора используйте тот код, который вам давали при подключении.<br>Закрыто.");

addbtnscript("защита","<br>Следуйте этим правилам чтобы защитить свой аккаунт:<br>1. Устанавливайте все доступные варианты безопасности в настройках аккаунта (/settings), а так же в личном кабинете включите аутентификацию через ВК.<br>2. Привязывайте свою действующую почту к аккаунту, усиливайте защиту своего почтового ящика, а также обязательно ставьте вход по почте(/settings).<br>3. Не скачивайте никакие моды и играйте с нашего лаунчера..<br>Закрыто.");

addbtnscript("будет наказан","<br>Игрок будет наказан.<br>Приятной игры.<br>Закрыто.<br>");

addbtnscript("не по форме","<br>Жалоба составлена не по форме. Ознакомьтесь с формой, а затем пересоздайте ее:<br> <br>Жалоба на игрока: 'TEXT' | Причина: 'TEXT' <br><br>Ваш игровой ник: 'TEXT'<br>Игровой ник нарушителя: 'TEXT'<br>Суть жалобы: 'TEXT'<br>Доказательства: 'TEXT'<br>.<br>Закрыто.");

addbtnscript("/dell","<br>Тема закрыта по просьбе ее автора. ");

addbtnscript('24ч без ответа',"<br>Не дождались от вас ответа (прошло более 24 часов).<br> Если проблема до сих пор актуальна - перепишите жалобу.<br>Закрыто");
addbtnscript('жб на адм',"<br>Пишите жалобу на администратора.<br>Закрыто");
addbtnscript('наказан',"<br>Игрок будет наказан.<br>Закрыто");
addbtnscript('недостаточно докв',"<br>Недостаточно доказательств на нарушение.<br>Закрыто");
addbtnscript('недоступны',"<br>Доказательства недоступны.<br>Закрыто");
addbtnscript('  ',"<br>  <br>Закрыто");
addbtnscript('  ',"<br>  <br>Закрыто");
addbtnscript('  ',"<br>  <br>Закрыто");

});

})

function buttonsh_add(title, text) {

var h = new Date().getHours();

var bstyle = 'margin-top: 3px;margin-left: 3px;';

var button_addv = 'value="' + title + '" id="shabs_' + window.button_id + '" style="'+ bstyle +'"';

var button_add = '<input type="button" class="button shabs_button" ' + button_addv + '>';

$('#shabscontent').append(button_add);

var text_nw = text.replace(/\{times_of_day\}/g, (6 < h && h <= 10) ? "Доброе утро" : 0 || (10 < h && h <= 18) ? "Добрый день" : 0 || (18 < h && h <= 22) ? "Добрый вечер" : 0 || "Доброй ночи");

$("input#shabs_" + window.button_id + ".button").bind('click', function () {

$('div.fr-element.fr-view').append(text_nw);

$('span.fr-placeholder').empty()

$('div.overlay-container').remove()

$('body').attr('class', '')

$("a.overlay-titleCloser").trigger('click')

})

window.button_id++;

}

function addbtnscript(titl, text) {

buttonsh_add(titl, 'Приветствую.'+text );
}

// https://xenforo.com/community/help/bb-codes/


window.button_id = 0;

var button =  '<input type="button" class="button shabs" value="ожидание" id="close" style="margin-top: 3px; margin-left: 3px;" onClick="button_wait()"> ';
$('.button--icon--reply').before(button);

var button =  '<input type="button" class="button shabs" value="на рассм" id="close" style="margin-top: 3px; margin-left: 3px;" onClick="button_narasm()"> ';
$('.button--icon--reply').before(button);

var button =  '<input type="button" class="button shabs" value="рассмотрено" id="close" style="margin-top: 3px; margin-left: 3px;" onClick="button_closerassm()"> ';
$('.button--icon--reply').before(button);

var button =  '<input type="button" class="button shabs" value="отказ" id="close" style="margin-top: 3px; margin-left: 3px;" onClick="button_closeoktaz()"> ';
$('.button--icon--reply').before(button);

var button =  '<input type="button" class="button shabs" value="обр" id="close" style="margin-top: 3px; margin-left: 3px;" onClick="button_obrabotka()"> ';
$('.button--icon--reply').before(button);




$('.button--icon--preview').after('<br><br>');


// Закреп+префикс ожидание
function button_wait(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "40",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "1",
"_xfSet[discussion_open]": "1",
"sticky": "1",
"_xfSet[sticky]": "1",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}

// Закреп+префикс на рассм
function button_narasm(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "15",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "1",
"_xfSet[discussion_open]": "1",
"sticky": "1",
"_xfSet[sticky]": "1",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}

// Закрыть+рассмотрено
function button_closerassm(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "17",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "0",
"_xfSet[discussion_open]": "0",
"sticky": "0",
"_xfSet[sticky]": "0",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}

// Закрыть+отказано
function button_closeoktaz(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "18",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "0",
"_xfSet[discussion_open]": "0",
"sticky": "0",
"_xfSet[sticky]": "0",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}

// обрабатывается
function button_obrabotka(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "36",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "0",
"_xfSet[discussion_open]": "0",
"sticky": "0",
"_xfSet[sticky]": "0",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}

// на обработке
function button_obrabotkat(){ 
  var str = $('div.fr-element.fr-view').text();
 if (str.length > 0){
        $(".button--icon--reply").trigger('click');
 }

if (document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0]){
        document.getElementsByClassName('p-title-value')[0].getElementsByTagName('span')[0].remove();
}
 post(document.getElementsByClassName("menu-linkRow")[15].href, {
"prefix_id": "39",
"title": document.getElementsByClassName('p-title-value')[0].textContent,
"discussion_open": "0",
"_xfSet[discussion_open]": "0",
"sticky": "0",
"_xfSet[sticky]": "0",
"_xfToken": document.getElementsByName('_xfToken')[0].value,
"_xfRequestUri": document.getElementsByClassName("menu-linkRow")[15].href,
"_xfWithData": "1",
"_xfResponseType": "html",
});
}


function post(path, params, method='post') {
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

