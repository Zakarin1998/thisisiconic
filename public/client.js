document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const resultDiv = document.getElementById('result');
    const voteCountImg1Div = document.getElementById('voteCountImg1');
    const voteCountImg2Div = document.getElementById('voteCountImg2');

    let voteCountImg1 = 0;
    let voteCountImg2 = 0;

    leftButton.addEventListener('click', () => vote('left'));
    rightButton.addEventListener('click', () => vote('right'));

    function vote(side) {
        const image = document.querySelector(`[data-image="${side === 'left' ? 'img1' : 'img2'}"]`);
        const imageSrc = image.getAttribute('src');

        fetch('/submitVote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                side,
                image: imageSrc,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nella richiesta al server.');
                }
                return response.json();
            })
            .then((data) => {
                // Incrementa il conteggio dei voti per l'immagine corrispondente
                if (data.side === 'left') {
                    voteCountImg1 = data.voteCountImg1;
                } else if (data.side === 'right') {
                    voteCountImg2 = data.voteCountImg2;
                }

                // Mostra il messaggio di voto e il numero di voti per ciascuna foto
                resultDiv.innerText = `Hai votato a ${data.side}! Voti: Img1 - ${voteCountImg1}, Img2 - ${voteCountImg2}`;
                voteCountImg1Div.innerText = voteCountImg1;
                voteCountImg2Div.innerText = voteCountImg2;
            })
            .catch((error) => {
                console.error('Errore:', error);
            });
    }
});
