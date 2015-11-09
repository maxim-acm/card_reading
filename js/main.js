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

            document.getElementById('choosen-cards').children[currentCards].hidden = false;
        }

    }

    window.game = new Game();

    game.init();

});