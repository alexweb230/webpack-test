function analitics() {
    let counter = 0;
    const clicked = () => counter++;
    let destroid = false;


    document.addEventListener('click', clicked);
    return {
        destroy() {
            document.removeEventListener('click', clicked);
            destroid = true;
        },
        getClicks() {
            if (destroid) {
                return 'analitick test'
            }
            return counter;
        }

    }

}


window.analitic = analitics();


