function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    //toggle - vai colocar o modo se não tiver
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    // contains vai ver se existe o Dark mode
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

//começa declarando as variaveis
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
// foi colocado o índice 0 pq foi pego a tag, e a tag retorna um array


button.addEventListener('click', changeMode);
//aqui vai especificar a ação do botão, no caso mudar o modo.
