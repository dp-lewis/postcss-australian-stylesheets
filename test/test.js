var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        expect(result.css).to.eql(output);
        done();
    });
};

describe('postcss-australian-stylesheets', function() {

    // color to colour
    it('converts colour to color', function(done) {
        test('a{ colour: white; }', 'a{ color: white; }', {}, done);
    });

    it('converts background-colour to color', function(done) {
        test('a{ background-colour: white; }', 'a{ background-color: white; }', {}, done);
    });

    it('converts border-colour to color', function(done) {
        test('a{ border-colour: white; }', 'a{ border-color: white; }', {}, done);
    });

    // zed-index to z-index
    it('converts zed-index to z-index', function(done) {
        test('a{ zed-index: 100; }', 'a{ z-index: 100; }', {}, done);
    });

    // centre to center
    it('converts centre to center', function(done) {
        test('a{ text-align: centre; }', 'a{ text-align: center; }', {}, done);
    });

    // true-blue to #0581C1
    it('converts true-blue to #0581C1', function(done) {
        test('a{ color: true-blue; }', 'a{ color: #0581C1; }', {}, done);
    });

    // vegemite to #461B00
    it('converts vegemite to #461B00', function(done) {
        test('a{ color: vegemite; }', 'a{ color: #461B00; }', {}, done);
    });

    // vb-green to #2D8249
    it('converts vb-green to #2D8249', function(done) {
        test('a{ color: vb-green; }', 'a{ color: #2D8249; }', {}, done);
    });

    // kangaroo to #E6924A
    it('converts kangaroo to #E6924A', function(done) {
        test('a{ color: kangaroo; }', 'a{ color: #E6924A; }', {}, done);
    });

    // koala to #B6B7BC
    it('converts koala to #B6B7BC', function(done) {
        test('a{ color: koala; }', 'a{ color: #B6B7BC; }', {}, done);
    });

    // yeah-nah to none
    it('converts yeah-nah to none', function(done) {
        test('a{ border: yeah-nah; }', 'a{ border: none; }', {}, done);
    });

    // fair-dinkum to border-box
    it('converts fair-dinkum to border-box', function(done) {
        test('a{ box-sizing: fair-dinkum; }', 'a{ box-sizing: border-box; }', {}, done);
    });

    // rack-off to hidden
    it('converts rack-off to hidden', function(done) {
        test('a{ visibility: rack-off; }', 'a{ visibility: hidden; }', {}, done);
    });

    // woop-woop to -9999px
    it('converts woop-woop to -9999px', function(done) {
        test('a{ text-indent: woop-woop; }', 'a{ text-indent: -9999px; }', {}, done);
    });

    // !bloody-oath to !important
    it('converts !bloody-oath to !important', function(done) {
        test('a{ color: gray !bloody-oath; }', 'a{ color: gray !important; }', {}, done);
    });
});
