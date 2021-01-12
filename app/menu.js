addEventListener('DOMContentLoaded', () => {
    const button_resposive = document.querySelector('.button_resposive')
    if (button_resposive) {
        button_resposive.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})