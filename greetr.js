(function(global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLangs = ['en', 'es', 'in'];

    var greeting = {
        en: 'Hello', 
        es: 'Hola', 
        in: 'Namaste'
    };

    var formalGreeting = {
        en: 'Greeting',
        es: 'Saludos',
        in: 'Namaste'
    }

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
        in: 'Upbhokta'
    }

    Greetr.prototype = {

        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Error: Language not supported!";
            }
        },

        greeting: function() {
            return greeting[this.language] + ' ' + this.firstname;
        },

        formalGreeting: function() {
            return formalGreeting[this.language] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ' ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw "Error: jQuery not loaded!";
            }

            if(!selector) {
                throw "Error: Missing jQuery selector!"
            }

            var msg;
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = Greetr;
    global.G$ = Greetr;XMLDocument

}(window, jQuery));