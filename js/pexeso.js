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


    // tlacitko pro inicializaci nove hry
    // zobrazeni modal okna
    $('#new-game').click(function(){
        location.reload(); 
    });

    // tlacitko pro znovu spusteni hry
    $('#renew-game').click(function(){
        location.reload(); 
    });


    // tlacitko pro spusteni nove hry 
    // vygenerovani hraciho pole
    $('#game-start').click(function() {

        // vychozi hodnoty
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
        $('#game').children().each(function() {

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

    });

   
    // zamichani balicku karet
    var shuffle = function shuffle() {
        return Math.round(Math.random() * 2) - 1;
    };


    var selectCardClosure = function selectCardClosure(actualCard, cardsAll) {
        return function () {
            selectCard(actualCard, cardsAll);   
        };
    };


    // vyber karty
    var selectCard = function selectCard(actualCard, cardsAll) {
        var cardClicks = parseInt($('#clicks').html());

        // pokud jsou otocene dve karty, neprovadi se zadna dalsi akce
        if ($('.card-flipped').size() > 1) {
            return;
        }

        actualCard.addClass('card-flipped');

        if ($('.card-flipped').size() == 1) {
            cardClicks += 1;
            $('#clicks').html(cardClicks);
        }

        if ($('.card-flipped').size() == 2) {
            cardClicks += 1;
            $('#clicks').html(cardClicks);
            setTimeout(checkPatternClosure(cardsAll), 900);
        }
    };


    var checkPatternClosure = function checkPatternClosure(cardsAll) {
        return function () {
            checkPattern(cardsAll);   
        };
    };


    // kontrola, zda jsou otocene karty shodne
    // inkrementace ukazatele poctu nalezenych schodnych dvojic
    var checkPattern = function checkPattern(cardsAll) {
        var cardPairs = parseInt($('#pairs').html());
        var cardClicks = parseInt($('#clicks').html());

        if (isMatchPattern()) {
            cardPairs += 1;
            $('#pairs').html(cardPairs);

            $('.card-flipped').removeClass('card-flipped').addClass('card-removed');
            //$('.card-removed').bind('webkitTransitionEnd', removeTookCards);


            // zjisteni konce hry - nalezeni a otoceni vsech dvoji karet
            if(cardPairs == cardsAll) {
                
                $('#pexeso-end').modal({
                    show: true,
                    backdrop: false,
                    keyboard: false
                });
                
                cardClicks = $('#clicks').html();
                cardPairs = $('#pairs').html();
                // uspesnost reseni pexesa v %
                var success = Math.round((cardPairs / Math.round(cardClicks / 2)) * 100);

                $('#clicks').html(cardClicks);
                $('#pairs').html(cardPairs);
                $('#success').html(success + '%');
            }


        } else {
            $('.card-flipped').removeClass('card-flipped');
        }
    };


    // testovani shodnosty dvou otocenych karet pomoci HTML5 atributu data-pattern
    var isMatchPattern = function isMatchPattern() {
        var cards = $('.card-flipped');
        var pattern = $(cards[0]).data('pattern');  // pattern prvni otocene karty
        var anotherPattern = $(cards[1]).data('pattern');   // pattern druhe otocene karty
        return (pattern == anotherPattern);
    };

}(jQuery));