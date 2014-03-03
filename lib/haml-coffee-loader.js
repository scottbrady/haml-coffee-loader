var CoffeeScript = require('coffee-script'),
    HamlCompiler = require('../node_modules/haml-coffee/src/haml-coffee'),
    fs           = require('fs');

/**
 * Module to automatically compile and cache haml-coffee (.hamlc) files.
 *
 * Example:
 *
 *   require('haml-coffee-loader').register();
 *   var template = require('./template.hamlc');
 *   var html = template({ foo : 42 });
 **/
var HamlCoffeeLoader = {
    /**
     * HamlCoffeeLoader.register(options)
     * - options (Object): HamlCompiler options
     **/
    register : function (options) {
        if (options == null) {
            options = {};
        }

        require.extensions['.hamlc'] = function (module, filename) {
            var source   = fs.readFileSync(filename, 'utf8'),
                compiler = new HamlCompiler(options),
                template,
                compiled;

            compiler.parse(source);

            template = CoffeeScript.compile(
                compiler.precompile(),
                {
                    bare: true
                }
            );

            compiled = "(function() {\n" +
                "module.exports = function(options) {\n" +
                "return (function() {\n" +
                template + "\n" +
                "}).call(options);\n}" +
                ";\n" +
                "}).call(this);";

            module._compile(compiled, filename);
        };
    }
};

module.exports = HamlCoffeeLoader;