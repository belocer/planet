window.addEventListener('load', () => {
    let label = document.querySelector('.label');
    let planet__container = document.querySelector('.planet__container');
    let xOld = 0;
    let positionElement = -150;
    planet__container.addEventListener('mousemove', (e) => {
        let xNew = e.screenX;
        if (xNew > xOld) {
            positionElement += 3;
            if (positionElement >= 279) {
                positionElement = 279;
            } else {
                label.style.left = `-${positionElement}px`;
            }
        } else {
            positionElement -= 3
            if (positionElement <= 30) {
                positionElement = 30;
            } else {
                label.style.left = `-${positionElement}px`;
            }
        }
        xOld = e.screenX;
    });
});