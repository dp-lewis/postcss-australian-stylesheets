var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ass', function(opts) {
    opts = opts || {};

    return function(css) {

        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('colour', 'color');
            decl.prop = decl.prop.replace('zed-index', 'z-index');
            decl.value = decl.value.replace('centre', 'center');
            decl.value = decl.value.replace('true-blue', '#0581C1');
            decl.value = decl.value.replace('vegemite', '#461B00');
            decl.value = decl.value.replace('vb-green', '#2D8249');
            decl.value = decl.value.replace('yeah-nah', 'none');
            decl.value = decl.value.replace('fair-dinkum', 'border-box');
            decl.value = decl.value.replace('rack-off', 'hidden');
            decl.value = decl.value.replace('woop-woop', '-9999px');

            if (decl.value.indexOf('!bloody-oath') >= 0) {
                decl.value = decl.value.replace(/\s*!bloody-oath\s*/, '');
                decl.important = true;
            }
        });

    };
});
