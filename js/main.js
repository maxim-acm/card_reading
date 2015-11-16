/**
 * Created by Maxim on 05.11.2015.
 */

$( document ).ready( function (){

    function Game() {

        var domElem = {
                cards:              $( '.card' ),
                resultContainer:    $( '#choosen-cards' ),
                cardBox:            $( '.result__box' ),
                restartButton:      $( '#restart-divination' )
            },
            __self = this,
            currentCardsSel = -1,
            shuffleCards = [ ];

        this.init = function () {
            __self.showCards();
            __self.selectCard();

        };

        this.showCards = function () {
            domElem.cards.each( function ( elem ) {
                ( function ( that, i ) {
                    var t = setTimeout( function(){
                        $( that ).removeClass( 'hidden' );
                    }, 30 * i );
                })( this, elem )
            });

            domElem.restartButton.click(function () {
                __self.restart();
            });
        };

        this.selectCard = function () {

            function shuffle( array ) {
                var currentIndex = array.length, temporaryValue, randomIndex ;

                while ( 0 !== currentIndex ) {

                    randomIndex = Math.floor( Math.random() * currentIndex );
                    currentIndex -= 1;

                    temporaryValue = array [ currentIndex ];
                    array[ currentIndex ] = array[ randomIndex ];
                    array[ randomIndex ] = temporaryValue;
                }

                return array;
            }

            shuffleCards = cardsData.item.slice();
            shuffle( shuffleCards );

            domElem.cards.on( 'click', function (){

                if ( currentCardsSel < 4 ) {
                //    console.log(currentCardsSel);
                    console.log( this );
                    $( this ).addClass( 'card-selected' );

                    var currentCardNumber = $( this ).data( 'number' );
                //    console.log(currentCardNumber);
                    currentCardsSel++;
                    __self.addCard( currentCardNumber );

                }


            })
        };

        this.addCard = function ( cardNumber ) {

            var card = document.getElementById( 'choosen-cards' ).children[ currentCardsSel ];
           // console.log(card);
            card.querySelector( '.description' ).innerHTML = shuffleCards[ cardNumber - 1 ][ 'description' ];
            card.hidden = false;

        };

        this.restart = function () {
            domElem.cards.each( function () {
                $( this ).addClass( 'hidden' );
                $( this ).removeClass( 'card-selected' );
            });

            domElem.cardBox.each( function () {

                this.hidden = true;
            });

            domElem.cards.off('click');

            currentCardsSel = -1;

            game.init();
        }

    }

    window.game = new Game();
    game.init();

});