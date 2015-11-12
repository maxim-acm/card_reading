/**
 * Created by Maxim on 05.11.2015.
 */

$( document ).ready( function (){

    function Game() {

        var domElem = {
            cards: $( '.card' ),
            resultContainer: $( '#choosen-cards' )
        },
            __self = this,
            currentCards = -1;


        this.init = function () {
            __self.viewCards();
        };

        this.showCards = function () {

        };

        this.viewCards = function () {

            domElem.cards.click( function (){
                if (currentCards < 2) {
                    $( this ).addClass( 'card-selected' );
                    currentCards++;
                    __self.addCard();
                }
            })
        };

        this.addCard = function () {

            function randomNumber() {
                return Math.floor(Math.random()*35);
            }

            var cardData = cardsArray[randomNumber()];
            console.log(cardData);

            var card = document.getElementById('choosen-cards').children[currentCards];
            console.log(card);

            card.querySelector('.description').innerHTML = cardData['description'];

            card.hidden = false;

        };

    }



    window.game = new Game();

    game.init();

});