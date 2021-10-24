window.addEventListener('load', () => {
    let label = document.querySelector('.label');
    let planet__container = document.querySelector('.planet__container');
    let xOld = 0;
    let positionElement = -150;
    planet__container.addEventListener('mousemove', moveLabel);
    planet__container.addEventListener('click', moveLabel);
    planet__container.addEventListener('touch', moveLabel);

    function moveLabel (e) {
        let xNew = e.screenX;
        if (xNew > xOld) {
            positionElement += 4;
            if (positionElement >= 285) {
                positionElement = 285;
            } else {
                label.style.left = `-${positionElement}px`;
            }
        } else {
            positionElement -= 4
            if (positionElement <= 30) {
                positionElement = 30;
            } else {
                label.style.left = `-${positionElement}px`;
            }
        }
        xOld = e.screenX;
    }
});