const langSwitch = new I18NSwitch(
    "switch-container",
    {
        flag: CountryFlags.UNITED_STATES,
        language: english
    },
    {
        flag: CountryFlags.BRAZIL,
        language: portuguese
    }
);

document.querySelector("#switch-description").addEventListener('click', (evt) => {
    evt.preventDefault();
})