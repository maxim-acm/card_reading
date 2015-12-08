/**
 * Created by Maxim on 05.11.2015.
 */

$( window ).load( function (){

    function Game() {

        var domElem = {
                cards:              $( '.card' ),
                resultContainer:    $( '#choosen-cards' ),
                cardBox:            $( '.l-result__box' ),
                restartButton:      $( '#restart-divination' )
            },
            __self = this,
            currentCardsSel = 0,
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

            domElem.restartButton.on('click', function () {  // Max, put this event to the next function!
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

                if ( currentCardsSel < 5 ) {

                    $( this ).addClass( 'card-selected' );

                    var domCardNumber = $( this ).data( 'number' );

                    currentCardsSel++;
                    __self.addCard( domCardNumber );

                }
            })
        };

        this.addCard = function ( cardNumber ) {

            var shuffleCardNumber = shuffleCards[ cardNumber - 1 ][ 'card' ];

            var resultCardsList = document.getElementById( 'resultCardsList' );
            var card = resultCardsList.children[ currentCardsSel - 1 ];

            var resultBox = document.createElement( 'li' );
            resultBox.className = 'l-result__box';

            var newCard = document.createElement( 'div' );
            newCard.className = 'l-result__card';

            var newCardImg = document.createElement('img');
            newCardImg.setAttribute( 'src', 'cards-images/Cards_v-' + shuffleCardNumber + '.jpg' );
            newCardImg.setAttribute( 'alt', 'card' );
            newCardImg.classList.add( 'l-result__card--image' );


           ( shuffleCardNumber <= 41 ) ? ( newCard.classList.add( 'l-result__card-horizontal' ) ) : ( newCard.classList.add( 'l-result__card-vertical' ) );

            newCard.appendChild(newCardImg);
            resultBox.appendChild(newCard);

            resultCardsList.appendChild( resultBox );

        };

        this.restart = function () {
            domElem.cards.each( function () {
                $( this ).addClass( 'hidden' );
                $( this ).removeClass( 'card-selected' );

            });

            var resultCardsList = document.getElementById( 'resultCardsList' );

            while (resultCardsList.lastChild) {
                resultCardsList.removeChild(resultCardsList.lastChild);
            }


            domElem.cards.off( 'click' );
            domElem.restartButton.off( 'click' );

            currentCardsSel = 0;

            game.init();
        }
    }

    window.game = new Game();
    game.init();

});