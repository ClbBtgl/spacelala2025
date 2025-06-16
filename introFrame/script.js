(function() {
    var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble, $animate2;
    let count = 0;
    let readyToSubmit = false; // 🔸 Bandera para saber cuándo aceptar Enter
    let continueShow = document.getElementById("animate");
    let continueShow2 = document.getElementById("animate2");
    MESSAGES = [];

    MESSAGES.push({ delay: 0, text: "Eat Sh!t..." });
    MESSAGES.push({ delay: 1200, text: ">2025" });
    MESSAGES.push({ delay: 2200, text: "=-=-=--=-=-" });
    MESSAGES.push({ delay: 3600, text: "Drop dead..." });
    MESSAGES.push({ delay: 5200, text: "=-=-=--=-=-" });

    $container = $("#container");
    $message = $("#message");
    $animate = $("#animate");
    $animate2 = $("#animate2");
    $paragraph = null;

    scramble = function(element, text, options) {
        var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts,
            glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches,
            i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;

        defaults = {
            probability: 0.2,
            glitches: '-|/\\',
            blank: '',
            duration: text.length * 40,
            ease: 'easeInOutQuad',
            delay: 0.0
        };

        $element = $(element);
        settings = $.extend(defaults, options);

        shuffle = () => Math.random() < 0.5 ? 1 : -1;
        wrap = (text, classes) => `<span class="${classes}">${text}</span>`;

        glitchText = settings.glitches;
        glitchCharacters = glitchText.split('');
        glitchLength = glitchCharacters.length;
        glitchProbability = settings.probability;

        glitches = glitchCharacters.map(letter => wrap(letter, 'glitch'));

        ghostText = $element.text();
        ghostCharacters = ghostText.split('');
        ghostLength = ghostCharacters.length;

        ghosts = ghostCharacters.map(letter => wrap(letter, 'ghost'));

        textCharacters = text.split('');
        textLength = textCharacters.length;

        order = Array.from({ length: textLength }, (_, i) => i).sort(shuffle);
        output = [];

        for (i = j = 0, ref = textLength; j < ref; i = ++j) {
            glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
            glitchCharacter = glitches[glitchIndex];
            ghostCharacter = ghosts[i] || settings.blank;
            addGlitch = Math.random() < glitchProbability;
            character = addGlitch ? glitchCharacter : ghostCharacter;
            output.push(character);
        }

        object = { value: 0 };
        target = { value: 1 };

        parameters = {
            duration: settings.duration,
            ease: settings.ease,
            step: function() {
                var index, k, progress, ref1;
                progress = Math.floor(object.value * (textLength - 1));
                for (i = k = 0, ref1 = progress; k <= ref1; i = ++k) {
                    index = order[i];
                    output[index] = textCharacters[index];
                }
                return $element.html(output.join(''));
            },
            complete: function() {
                count++;
                if (count === 5) {
                    continueShow.classList.remove("hidden");
                    continueShow.classList.add("show");
                    continueShow2.classList.remove("hidden");
                    continueShow2.classList.add("show");

                    // 🔸 Ahora se puede usar Enter
                    readyToSubmit = true;
                }
                return $element.html(text);
            }
        };

        return $(object).delay(settings.delay).animate(target, parameters);
    };

    setPostMessage = (identificator) => {
        window.parent.postMessage({ type: 'activeLoadFrame', identificatorOption: identificator }, '*');
    };

    animate = function() {
        var data, element, index, j, len, options;
        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
            data = MESSAGES[index];
            element = $paragraph.get(index);
            element.innerText = '';
            options = { delay: data.delay };
            scramble(element, data.text, options);
        }
    };

    initialise = function() {
        var index, j, len, text;
        $animate.click(() => setPostMessage(''));
        $animate2.click(() => setPostMessage(''));

        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
            text = MESSAGES[index];
            $message.append(`<p class="linked-animation">`);
        }

        $paragraph = $container.find("p");
        animate();
    };

    initialise();

    // 🔸 Escucha la tecla Enter cuando readyToSubmit sea true
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && readyToSubmit) {
            setPostMessage('');
        }
    });

}).call(this);

//Author Lala || ShatteredDoll   
//Author Lala || ShatteredDoll    
//Author Lala || ShatteredDoll    
//Author Lala || ShatteredDoll    
//Author Lala || ShatteredDoll    
//Author Lala || ShatteredDoll