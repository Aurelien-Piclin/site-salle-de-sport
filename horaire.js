const time = () => {

    const activerow = document.querySelector('#activerow');

    const lundi = document.querySelector('.jour1');
    const mardi = document.querySelector('.jour2');
    const mercredi = document.querySelector('.jour3');
    const jeudi = document.querySelector('.jour4');
    const vendredi = document.querySelector('.jour5');
    const samedi = document.querySelector('.jour6');
    const dimanche = document.querySelector('.jour7');


    switch (new Date().getDay()) {

        case 1:
            lundi.setAttribute("id", "activerow");
            break;
        case 2:
            mardi.setAttribute("id", "activerow");
            break;
        case 3:
            mercredi.setAttribute("id", "activerow");
            break;
        case 4:
            jeudi.setAttribute("id", "activerow");
            break;
        case 5:
            vendredi.setAttribute("id", "activerow");
            break;
        case 6:
            samedi.setAttribute("id", "activerow");
            break;
        case 0:
            dimanche.setAttribute("id", "activerow");
            break;
    }

}
time();