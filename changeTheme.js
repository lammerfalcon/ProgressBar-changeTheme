var btn = document.querySelector(".btn");
var link = document.querySelector(".theme");
btn.addEventListener('click', function () {
    ChangeTheme();
});

function ChangeTheme() {
    let lightTheme = "./style/light-theme.css";
    let darkTheme = "./style/dark-theme.css";

    let currTheme = link.getAttribute('href');
    console.log(currTheme);
    let theme = '';
    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = 'dark';
        btn.textContent = 'Change to light';
    } else {
        currTheme = lightTheme;
        theme = 'light';
        btn.textContent = 'Change to dark';
    }
    link.setAttribute("href", currTheme);
}