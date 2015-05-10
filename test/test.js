/*global it, describe*/
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

    // !bloody-oath to !important
    it('converts !bloody-oath to !important', function(done) {
        test('a{ color: gray !bloody-oath; }', 'a{ color: gray !important; }', {}, done);
    });

    // true-blue to blue
    it('converts true-blue to #0581C1', function(done) {
        test('a{ color: true-blue; }', 'a{ color: #0581C1; }', {}, done);
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
});
