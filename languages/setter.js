function setLang(lang){  

     var temp = (lang == "pt") ? lang = portuguese : lang = english;

    var profile = document.getElementById('profile');
    var description = document.getElementById('description');    

    profile.innerHTML = temp.header.text1;
    description.innerHTML = temp.header.text2;

    var aboutMeTitle = document.getElementById('aboutmeTitle');
    var aboutMetext = document.getElementById('aboutmeText');

    aboutMeTitle.innerHTML = temp.aboutMe.title;
    aboutMetext.innerHTML = temp.aboutMe.text;

    var detalaisTitle = document.getElementById('detalaisTitle');
    var nameTitle = document.getElementById('nameTitle');
    var name = document.getElementById('name');
    var ageTitle = document.getElementById('ageTitle');
    var age = document.getElementById('age');
    var locationTitle = document.getElementById('locationTitle');
    var location = document.getElementById('location');

    detalaisTitle.innerHTML = temp.details.title;

    nameTitle.innerHTML = temp.details.name.title;
    name.innerHTML = temp.details.name.text;

    ageTitle.innerHTML = temp.details.age.title;
    age.innerHTML = temp.details.age.text;

    locationTitle.innerHTML = temp.details.location.title;
    location.innerHTML = temp.details.location.text;

    var skillsTitle = document.getElementById('skillsTitle');
    skillsTitle.innerHTML = temp.skills.title;

    var footerTexts = document.getElementsByClassName('footerText');

    footerTexts[0].innerHTML = temp.footer.text1;
    footerTexts[1].innerHTML = temp.footer.text2;
    footerTexts[2].innerHTML = temp.footer.text3;
    footerTexts[3].innerHTML = temp.footer.text4;

    var langText = document.getElementById('langText');
    langText.innerHTML = temp.selectText.text1;

}