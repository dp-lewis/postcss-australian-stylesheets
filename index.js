var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function(opts) {
    opts = opts || {};

    return function(css) {

        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('colour', 'color');
            decl.value = decl.value.replace('true-blue', 'blue');
            decl.value = decl.value.replace('yeah-nah', 'none');

            if (decl.value.indexOf('!bloody-oath') >= 0) {
                decl.value = decl.value.replace(/\s*!bloody-oath\s*/, '');
                decl.important = true;
            }
        });

    };
});
