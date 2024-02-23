function toggleMode() { 
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

        if (html.classList.contains('light')) {
            const imgEscuro = './source/assets/avatar-light.png'
            img.setAttribute('src', imgEscuro)
            img.setAttribute( 'alt','foto do tema escuro')
    } else {
        const imgPadrao = './source/assets/avatar.png'
        img.setAttribute('src', imgPadrao, 'alt', 'foto do tema escuro')

    }

}