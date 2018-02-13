(function(global, $) {
    'use strict';

    var Greetr = function(firstname, lastname, language) {
        //returns new object; no need to use 'new'
        return new Greetr.init(firstname, lastname, language);
    };

    var suppportedLanguages = ['en', 'es', 'fr', 'pt'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Salut',
        pt: 'Oi'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fr: 'Bonjour',
        pt: 'Olá'
    };

    Greetr.prototype = {

        //returns full name
        fullname: function() {
            return `${this.firstname} ${this.lastname}`;
        },

        //validates that language is supported
        validateLanguage: function() {
            if (suppportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        //greets informally according to language
        greeting: function() {
            return `${greetings[this.language]}, ${this.firstname}!`;
        },

        //greets formally according to language
        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullname()}!`;
        },

        //returns a formal or informal greeting depending on 'formal' param
        greet: function(formal) {
            return formal === 'formal' ? this.formalGreeting() : this.greeting();
        },

        //sets language
        setLanguage: function(newLanguage) {
            this.language = newLanguage;
            this.validateLanguage();

            //makes it chainable            
            return this;
        },

        //injects greeting in DOM
        htmlGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not found';
            }

            if (!selector) {
                throw 'Missing selector';
            }

            var msg = this.greet(formal);

            $(selector).html(msg);

            //makes it chainable
            return this;
        }

    };

    //the actual object is created here (borrowed from jQuery)
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || 'Default';
        self.lastname = lastname || 'Default';
        self.language = language || 'en';

        self.validateLanguage();
    };

    Greetr.init.prototype = Greetr.prototype;

    //attaches greetr to the global object and aliases it as G$
    global.Greetr = global.G$ = Greetr;

})(window, $);