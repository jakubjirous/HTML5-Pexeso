/* jshint devel: true */
'use strict';

var matchingGame = {};

// pole karet reprezentovane ikonami font-awesome
matchingGame.deck = [
    'fa fa-google-wallet', 'fa fa-google-wallet',
    'fa fa-ils', 'fa fa-ils',
    'fa fa-ioxhost', 'fa fa-ioxhost',
    'fa fa-lastfm', 'fa fa-lastfm',
    'fa fa-paint-brush', 'fa fa-paint-brush',
    'fa fa-pie-chart', 'fa fa-pie-chart',
    'fa fa-plug', 'fa fa-plug',
    'fa fa-slideshare', 'fa fa-slideshare',
    'fa fa-trash', 'fa fa-trash',
    'fa fa-tty', 'fa fa-tty',

    'fa fa-wifi', 'fa fa-wifi',
    'fa fa-yelp', 'fa fa-yelp',
    'fa fa-adjust', 'fa fa-adjust',
    'fa fa-archive', 'fa fa-archive',
    'fa fa-arrows', 'fa fa-arrows',
    'fa fa-automobile', 'fa fa-automobile',
    'fa fa-ban', 'fa fa-ban',
    'fa fa-bank', 'fa fa-bank',
    'fa fa-beer', 'fa fa-beer',
    'fa fa-bell', 'fa fa-bell',

    'fa fa-angellist', 'fa fa-angellist',
    'fa fa-at', 'fa fa-at',
    'fa fa-bicycle', 'fa fa-bicycle',
    'fa fa-binoculars', 'fa fa-binoculars',
    'fa fa-birthday-cake', 'fa fa-birthday-cake',
    'fa fa-bus', 'fa fa-bus',
    'fa fa-calculator', 'fa fa-calculator',
    'fa fa-copyright', 'fa fa-copyright',
    'fa fa-eyedropper', 'fa fa-eyedropper',
    'fa fa-futbol-o', 'fa fa-futbol-o',

    'fa fa-bolt', 'fa fa-bolt',
    'fa fa-bomb', 'fa fa-bomb',
    'fa fa-book', 'fa fa-book',
    'fa fa-bookmark', 'fa fa-bookmark',
    'fa fa-briefcase', 'fa fa-briefcase',
    'fa fa-bug', 'fa fa-bug',
    'fa fa-building', 'fa fa-building',
    'fa fa-bullhorn', 'fa fa-bullhorn',
    'fa fa-bullseye', 'fa fa-bullseye',
    'fa fa-cab', 'fa fa-cab',

    'fa fa-comment', 'fa fa-comment',
    'fa fa-compass', 'fa fa-compass',
    'fa fa-crop', 'fa fa-crop',
    'fa fa-crosshairs', 'fa fa-crosshairs',
    'fa fa-cube', 'fa fa-cube',
    'fa fa-cutlery', 'fa fa-cutlery',
    'fa fa-dashboard', 'fa fa-dashboard',
    'fa fa-database', 'fa fa-database',
    'fa fa-desktop', 'fa fa-desktop',
    'fa fa-download', 'fa fa-download',

    'fa fa-calendar', 'fa fa-calendar',
    'fa fa-camera', 'fa fa-camera',
    'fa fa-camera-retro', 'fa fa-camera-retro',
    'fa fa-car', 'fa fa-car',
    'fa fa-certificate', 'fa fa-certificate',
    'fa fa-check', 'fa fa-check',
    'fa fa-check-circle', 'fa fa-check-circle',
    'fa fa-check-circle-o', 'fa fa-check-circle-o',
    'fa fa-check-square', 'fa fa-check-square',
    'fa fa-check-square-o', 'fa fa-check-square-o',

    'fa fa-child', 'fa fa-child',
    'fa fa-circle', 'fa fa-circle',
    'fa fa-clock-o', 'fa fa-clock-o',
    'fa fa-close', 'fa fa-close',
    'fa fa-cloud', 'fa fa-cloud',
    'fa fa-code', 'fa fa-code',
    'fa fa-code-fork', 'fa fa-code-fork',
    'fa fa-coffee', 'fa fa-coffee',
    'fa fa-cog', 'fa fa-cog',
    'fa fa-cogs', 'fa fa-cogs',

    'fa fa-envelope', 'fa fa-envelope',
    'fa fa-eraser', 'fa fa-eraser',
    'fa fa-exchange', 'fa fa-exchange',
    'fa fa-exclamation', 'fa fa-exclamation',
    'fa fa-exclamation-triangle', 'fa fa-exclamation-triangle',
    'fa fa-external-link', 'fa fa-external-link',
    'fa fa-eye', 'fa fa-eye',
    'fa fa-fax', 'fa fa-fax',
    'fa fa-female', 'fa fa-female',
    'fa fa-fighter-jet', 'fa fa-fighter-jet',

    'fa fa-filter', 'fa fa-filter',
    'fa fa-fire', 'fa fa-fire',
    'fa fa-fire-extinguisher', 'fa fa-fire-extinguisher',
    'fa fa-flag', 'fa fa-flag',
    'fa fa-flask', 'fa fa-flask',
    'fa fa-folder', 'fa fa-folder',
    'fa fa-gamepad', 'fa fa-gamepad',
    'fa fa-gavel', 'fa fa-gavel',
    'fa fa-gear', 'fa fa-gear',
    'fa fa-gift', 'fa fa-gift',

    'fa fa-glass', 'fa fa-glass',
    'fa fa-globe', 'fa fa-globe',
    'fa fa-headphones', 'fa fa-headphones',
    'fa fa-heart', 'fa fa-heart',
    'fa fa-home', 'fa fa-home',
    'fa fa-key', 'fa fa-key',
    'fa fa-laptop', 'fa fa-laptop',
    'fa fa-male', 'fa fa-male',
    'fa fa-microphone', 'fa fa-microphone',
    'fa fa-music', 'fa fa-music'
];

(function($) {

    // zobrazeni modal okna pro inicializaci pexesa pred samotnym spustenim
    // nastaveni velikosti hrani plochy
    $('#pexeso-init').modal({
        show: true,
        backdrop: false,
        keyboard: false
    });

    // tlacitko pro znovu spusteni hry
    var renewGame = document.getElementById('renew-game');

    // zachyceni kliknuti na tlacitko pro znovu spusteni hry
    if (document.addEventListener) { // W3C
        renewGame.addEventListener('click', reload, false);
    } else if (document.attachEvent) { // IE
        renewGame.attachEvent('onclick', reload);
    } else { // last resort
        renewGame.onclick = reload;
    }



    // tlacitko pro inicializaci nove hry
    // zobrazeni modal okna
    var newGame = document.getElementById('new-game');

    // zachyceni kliknuti na tlacitko pro spusteni hry
    if (document.addEventListener) {    // W3C
        newGame.addEventListener('click', reload, false);

    } else if (document.attachEvent) {  // IE
        newGame.attachEvent('onclick', reload);

    } else { 
        newGame.onclick = reload;
    }


    // tlacitko pro spusteni nove hry 
    // vygenerovani hraciho pole
    var gameStart = document.getElementById('game-start');

    if (document.addEventListener) {    // W3C
        gameStart.addEventListener('click', myHandler, false);

    } else if (document.attachEvent) {  // IE
        gameStart.attachEvent('onclick', myHandler);

    } else { 
        gameStart.onclick = myHandler;
    }


    function reload() {
        location.reload();
    }


    function myHandler() {
        // vychozi hodnoty
        var cardsCount = 20;
        var cardsCount, cardsAll;

        // ziskani velikosti hraciho pole
        cardsCount = document.getElementById('cards-count').value;

        // nastaveni velikosti hracimu poli
        cardsAll = cardsCount / 2;

        // zmenseni vychoziho balicku karet na pozadovany pocet
        matchingGame.deck.splice(cardsCount, Number.MAX_VALUE);

        // zamichani balicku s kartami
        matchingGame.deck.sort(shuffle);

        // vytvoreni vsech karet do hraciho pole
        for (var i = 1; i < cardsCount; i++) {
            $('.card:first-child').clone().appendTo('#game');
        }

        // nastavení pozice karet
        $('#game').children().each(function(index) {

            // ziskani obrazku karty ze zamichaneho balicku
            var pattern = matchingGame.deck.pop();

            // nastaveni ikony na zadni strane karty
            $(this).find('.back').find('i').addClass(pattern);
            

            // ulozeni informaci o ikone karty do HTML5 elementu  data-pattern 
            $(this).attr('data-pattern', pattern);

            // zachyceni kliknuti na kartu - jeji otoceni
            var actualCard = $(this);
            $(this).click(selectCardClosure(actualCard, cardsAll));

        });
    }


    // zamichani balicku karet
    function shuffle() {
        return Math.round(Math.random() * 2) - 1;
    }


    function selectCardClosure(actualCard, cardsAll) {
        return function () {
            selectCard(actualCard, cardsAll);   
        };
    }


    // vyber karty
    function selectCard(actualCard, cardsAll) {
        var cardClicks = parseInt(document.getElementById('clicks').innerHTML);

        // pokud jsou otocene dve karty, neprovadi se zadna dalsi akce
        if ($('.card-flipped').size() > 1) {
            return;
        }

        actualCard.addClass('card-flipped');

        if ($('.card-flipped').size() == 1) {
            cardClicks += 1;
            document.getElementById('clicks').innerHTML = cardClicks;   
        }

        if ($('.card-flipped').size() == 2) {
            cardClicks += 1;
            document.getElementById('clicks').innerHTML = cardClicks;        
            setTimeout(checkPatternClosure(cardsAll), 900);
        }
    }


    function checkPatternClosure(cardsAll) {
        return function () {
            checkPattern(cardsAll);   
        };
    }


    // kontrola, zda jsou otocene karty shodne
    // inkrementace ukazatele poctu nalezenych schodnych dvojic
    function checkPattern(cardsAll) {
        var cardPairs = parseInt(document.getElementById('pairs').innerHTML);
        var cardClicks = parseInt(document.getElementById('clicks').innerHTML);

        if (isMatchPattern()) {
            cardPairs += 1;
            document.getElementById('pairs').innerHTML = cardPairs;

            $('.card-flipped').removeClass('card-flipped').addClass('card-removed');
            //$('.card-removed').bind('webkitTransitionEnd', removeTookCards);


            // zjisteni konce hry - nalezeni a otoceni vsech dvoji karet
            if(cardPairs == cardsAll) {
                
                $('#pexeso-end').modal({
                    show: true,
                    backdrop: false,
                    keyboard: false
                });
                
                var cardClicks = parseInt(document.getElementById('clicks').innerHTML);
                var cardPairs = parseInt(document.getElementById('pairs').innerHTML);
                // uspesnost reseni pexesa v %
                var success = Math.round((cardPairs / Math.round(cardClicks / 2)) * 100);

                document.getElementById('clicksEnd').innerHTML = cardClicks;   
                document.getElementById('pairsEnd').innerHTML = cardPairs;   
                document.getElementById('successEnd').innerHTML = success + '%';   
            }


        } else {
            $('.card-flipped').removeClass('card-flipped');
        }
    }


    // testovani shodnosty dvou otocenych karet pomoci HTML5 atributu data-pattern
    function isMatchPattern() {
        var cards = $('.card-flipped');
        var pattern = $(cards[0]).data('pattern');  // pattern prvni otocene karty
        var anotherPattern = $(cards[1]).data('pattern');   // pattern druhe otocene karty
        return (pattern == anotherPattern);
    }

})(jQuery);