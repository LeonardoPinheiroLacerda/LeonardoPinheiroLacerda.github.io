function changeLanguage(){
    var select = document.getElementById('languageSelect');
    var lang = select.options[select.selectedIndex].value;

    setLang(lang);
}

window.onload = () => {
    setLang("en");
}