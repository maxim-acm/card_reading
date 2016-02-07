$(window).load(function () {

    function Game() {

        var domElem = {},
            __self = this,
            currentCardsSel = 0,
            cardData = {
                cards: new Array(56)
            },
            shuffleCards = [];

        this.init = function () {

            $('.card').hover(function () {
                $(this).children('.card__hover').addClass('card__hover-active');
            }, function () {
                $(this).children('.card__hover').removeClass('card__hover-active');
            });

            for (var i = 0; i < cardData.cards.length; i++) {
                cardData.cards[i] = {
                    card: i + 1
                };
            }

            __self.showCards();
            __self.selectCard();

        };

        this.showCards = function () {

            domElem = {
                cards: $('.card'),
                resultContainer: $('#choosen-cards'),
                cardBox: $('.l-result__box'),
                restartButton: $('#restart-divination')
            };

            domElem.cards.each(function (elem) {
                (function (that, i) {
                    var t = setTimeout(function () {
                        $(that).removeClass('hidden');
                        domElem.restartButton.off('click');
                    }, 30 * i);
                })(this, elem)
            });
        };

        this.shuffleArray = function (array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array [currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        };

        this.selectCard = function () {

            shuffleCards = cardData.cards.slice();
            __self.shuffleArray(shuffleCards);

            domElem.cards.on('click', function () {

                if (currentCardsSel < 5) {
                    $(this).addClass('card-selected');
                    var domCardNumber = $(this).data('number');
                    currentCardsSel++;
                    __self.addCard(domCardNumber);

                }
            })
        };

        this.addCard = function (cardNumber) {

            domElem.restartButton.on('click', function () {
                __self.restart();
            });

            var shuffleCardNumber = shuffleCards[cardNumber - 1]['card'],
                resultCardsList = document.getElementById('resultCardsList'),
                card = resultCardsList.children[currentCardsSel - 1],
                resultBox = document.createElement('li');

            resultBox.className = 'l-result__box';

            var newCard = document.createElement('div');
            newCard.className = 'l-result__card';

            var newCardLink = document.createElement('a');
            newCardLink.setAttribute('href', 'cards-images/color-cards/' + shuffleCardNumber + '_Card.jpg');
            newCardLink.setAttribute('rel', 'lightbox');

            var newCardImg = document.createElement('img');
            newCardImg.classList.add('quickbox');
            newCardImg.setAttribute('src', 'cards-images/color-cards/' + shuffleCardNumber + '_Card.jpg');
            newCardImg.setAttribute('alt', 'card');
            newCardImg.classList.add('l-result__card--image');

            if (shuffleCardNumber <= 31) {
                newCard.classList.add('l-result__card-horizontal');
            } else {
                newCard.classList.add('l-result__card-vertical');
            }

            newCardLink.appendChild(newCardImg);
            newCard.appendChild(newCardLink);
            resultBox.appendChild(newCard);
            resultCardsList.appendChild(resultBox);
        };

        this.restart = function () {

            domElem.cards.each(function () {
                $(this).addClass('hidden');
                $(this).removeClass('card-selected');
            });

            var resultCardsList = document.getElementById('resultCardsList');

            while (resultCardsList.lastChild) {
                resultCardsList.removeChild(resultCardsList.lastChild);
            }

            domElem.cards.off('click');
            currentCardsSel = 0;
            game.init();
        }
    }

    window.game = new Game();
    game.init();

});