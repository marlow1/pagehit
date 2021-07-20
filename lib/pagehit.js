/*jshint esversion: 6 */
const httpReferrer = require('./httpreferrer');

module.exports = class {

    //constructor
    constructor(){
        this.counter = {};
    }

    //url counter
    count(req){
        let hash = httpReferrer(req);
        if (!hash) return null;

        this.counter[hash] = this.counter[hash] || 0;
        return ++this.counter[hash];
    }
};
