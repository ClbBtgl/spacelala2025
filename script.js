window.onload = function () {
    // let credits = document.querySelector('.credits');
    // let duration = (3 * 60 * 1000) + (30 * 1000); 
    // let remainingTime = duration / 1000; 
    const backgroundMusic = document.getElementById('backgroundMusic');
    const backgroundMusicW = document.getElementById('backgroundMusicw');
    
    const container = document.getElementById('main');
    const iframe = document.getElementById('iframeIntroActive');

    window.addEventListener('message', (event) => {
        if (event.data.type == 'activeLoadFrame') {
            if (event.data.identificatorOption === 'options') {
               const backElement = document.getElementById('Back');
                // Crea una nueva regla de estilo para el pseudo-elemento ::before
                const styleSheet = document.styleSheets[0]; // Usa la primera hoja de estilos
                styleSheet.insertRule(`#Back::before {background: url('assets/bulletwithmynameonit.gif') center center / cover no-repeat !important;}`, styleSheet.cssRules.length);
                setTimeout(() => {
                    backgroundMusicW.play();
                }, 500);
            }else{
                setTimeout(() => {
                    backgroundMusic.play();
    
                }, 500);
            }
            container.classList.remove("hidden-page");
            container.classList.add("show-page");
            iframe.classList.add("hidden-page");
            
        }
    })

    $(function () {

        var quotes = [{
            quote: 'Java is to JavaScript what Car is to Carpet.',
            author: 'Chris Heilmann',
            link: '#'
        }, {
            quote: 'It\'s hard enough to find an error in your code when you\'re looking for it, it\'s even harder when you\'ve assumed your code is error-free.',
            author: 'Steve McConnell',
            link: 'https://en.wikipedia.org/wiki/Steve_McConnell'
        }, {
            quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
            author: 'Edsger Dijkstra',
            link: 'https://en.wikipedia.org/wiki/Edsger_W._Dijkstra'
        }, {
            quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
            author: 'Edward V Berard',
            link: 'https://en.wikiquote.org/wiki/Edward_V._Berard'
        }, {
            quote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
            author: 'Brian Kernighan',
            link: 'https://en.wikipedia.org/wiki/Brian_Kernighan'
        }, {
            quote: 'It\'s not at all important to get it right the first time. It\'s vitally important to get it right the last time.',
            author: 'David Thomas',
            link: 'https://en.wikipedia.org/wiki/Dave_Thomas_(programmer)'
        }, {
            quote: 'Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.',
            author: 'Stan Kelly-Bootle',
            link: 'https://en.wikipedia.org/wiki/Stan_Kelly-Bootle'
        }, {
            quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
            author: 'Rick Osborne',
            link: '#'
        }, {
            quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            author: 'Martin Fowler',
            link: 'https://en.wikipedia.org/wiki/Martin_Fowler'
        }, {
            quote: 'Software sucks because users demand it to.',
            author: 'Nathan Myhrvold',
            link: 'https://en.wikipedia.org/wiki/Nathan_Myhrvold'
        }, {
            quote: 'Linux is only free if your time has no value. ',
            author: 'Jamie Zawinski',
            link: 'https://en.wikipedia.org/wiki/Jamie_Zawinski'
        }, {
            quote: 'The first 90p of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.',
            author: 'Tom Cargill',
            link: 'https://en.wikipedia.org/wiki/Ninety-ninety_rule'
        }, {
            quote: 'Programming can be fun, so can cryptography, however they should not be combined.',
            author: 'Ben Shneiderman',
            link: 'https://en.wikipedia.org/wiki/Ben_Shneiderman'
        }, {
            quote: 'Copy and paste is a design error.',
            author: 'David Parnas',
            link: 'https://en.wikipedia.org/wiki/David_Parnas'
        }, {
            quote: 'Before software can be reusable it first has to be usable.',
            author: 'Ralph Johnson',
            link: 'https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)'
        }, {
            quote: 'When someone says \'I want a programming language in which I need only say what I want done\' give him a lollipop.',
            author: 'Alan Perlis',
            link: 'https://en.wikipedia.org/wiki/Alan_Perlis'
        }, {
            quote: 'Computers are good at following instructions, but not at reading your mind.',
            author: 'Donald Knuth',
            link: 'https://en.wikipedia.org/wiki/Donald_Knuth'
        }, {
            quote: 'Any code of your own that you haven\'t looked at for six or more months might as well have been written by someone else.',
            author: 'Eagleson\'s law',
            link: '#'
        }];

        // vars
        var i = 0;
        var x = 0;
        var result = [];
        var $element = $('#quote');
        var $tweet = $('#tweet-wrapper');
        var htmlOutput;
        // IIFE - get array of random numbers
        (function () {

            var minNum = 0;
            var maxNum = quotes.length;
            var randomNum = 0;

            while (result.length < maxNum) {
                randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
                // if random number doesnt exists in array push it to array
                if (result.indexOf(randomNum) > -1) continue;
                result.push(randomNum);
            }
        })();


        function output() {
            // x iterates quotes obj
            if (x < quotes.length) {
                var num = result[x];

                if (quotes[num].link == '#') {
                    htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="#" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
                } else {
                    htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="' + quotes[num].link + '" target="_blank" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
                }
                $('#' + num).addClass('opened');
                $tweet.html('<a href="https://twitter.com/intent/tweet?text=' + quotes[num].quote + '-' + quotes[num].author + '" class="btn" target="_blank">Tweet Quote</a>');
            } else {
                htmlOutput = '<div class="warning"><span>WARNING</span><p> No more new quotes <span class="cursor blink">&#9646;</span></p></div>';
            }
            //$element.html(htmlOutput);
            x++;
            return render();
        };

        output();


        var isTag, char, text;

        function render() {
            //console.log('i',i);

            text = htmlOutput.slice(0, i++);

            if (text === htmlOutput) return i = 0;

            $element.html(text + '&#9646;');

            char = text.slice(-1);

            if (char === '<') isTag = true;
            if (char === '>') isTag = false;

            if (isTag) return render();

            return setTimeout(render, 20);
        };

        $('#newQuoteBtn').on('click', function () {

            output();

        });


    });

    //Author Lala || ShatteredDoll
};