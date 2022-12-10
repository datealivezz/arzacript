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

