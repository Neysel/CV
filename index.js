let themeButton = document.querySelector('.changeTheme')
let currentTheme = 'dark-theme'

themeButton.addEventListener('click', function() {

    if (currentTheme === 'light-theme') {
        document.body.style.backgroundColor = '#1e1f27';
        document.documentElement.style.setProperty('--text', 'white')
        document.documentElement.style.setProperty('--pink', '#ee2db4')
     code_example_wrapper.style.backgroundColor = '#2d2d3a'
        themeButton.style.backgroundImage = 'url(./assets/icons/light_mode.png)'
        themeButton.style.filter = 'invert(100%)'

        currentTheme = 'dark-theme';
    } else {
        document.body.style.backgroundColor = '#fafafa';
        document.documentElement.style.setProperty('--text', 'black')
        document.documentElement.style.setProperty('--pink', '#5c0042')
        code_example_wrapper.style.backgroundColor = 'white'
        themeButton.style.backgroundImage = 'url(./assets/icons/night_mode.png)'
        themeButton.style.filter = 'invert(0%)'

        currentTheme = 'light-theme';
    }
});