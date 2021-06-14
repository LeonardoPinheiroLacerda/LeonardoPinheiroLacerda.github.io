var header = {
    "text1":"Perfil",
    "text2":"Desenvolvedor Java"
}

var aboutMe = {
    "title": "Sobre mim",
    "text" : "aqui esta escrito sobre mim"
}

var details = {
    "title" : "Detalhes",
    "name" : {
        "title": "Nome",
        "text" : "Leonardo Pinheiro Lacerda"
    },
    "age" : {
        "title" : "Idade",
        "text" : "22 anos",
    },
    "location" : {
        "title" : "Localização",
        "text" : "São Paulo - SP"
    }
}

var skills = {
    "title" : "Habilidades"
}

var footer = {
    "text1" : "A procura de oportunidades.",
    "text2" : "Contato:",
    "text3" : "Telefone: (11) 9 5324-8804"
} 

function setPortuguese(){


    var profile = document.getElementById('profile');
    var description = document.getElementById('description');    

    profile.innerHTML = header.text1;
    description.innerHTML = header.text2;

    var aboutMeTitle = document.getElementById('aboutmeTitle');
    var aboutMetext = document.getElementById('aboutmeText');

    aboutMeTitle.innerHTML = aboutMe.title;
    aboutMetext.innerHTML = aboutMe.text;

    var detalaisTitle = document.getElementById('detalaisTitle');
    var nameTitle = document.getElementById('nameTitle');
    var name = document.getElementById('name');
    var ageTitle = document.getElementById('ageTitle');
    var age = document.getElementById('age');
    var locationTitle = document.getElementById('locationTitle');
    var location = document.getElementById('location');

    detalaisTitle.innerHTML = details.title;

    nameTitle.innerHTML = details.name.title;
    name.innerHTML = details.name.text;

    ageTitle.innerHTML = details.age.title;
    age.innerHTML = details.age.text;

    locationTitle.innerHTML = details.location.title;
    location.innerHTML = details.location.text;

    var skillsTitle = document.getElementById('skillsTitle');
    skillsTitle.innerHTML = skills.title;

    var footerTexts = document.getElementsByClassName('footerText');

    footerTexts[0].innerHTML = footer.text1;
    footerTexts[1].innerHTML = footer.text2;
    footerTexts[3].innerHTML = footer.text3;


}

setPortuguese();