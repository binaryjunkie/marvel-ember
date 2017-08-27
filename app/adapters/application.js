import DS from 'ember-data';
import md5 from 'ember-md5';

export default DS.RESTAdapter.extend({
    host: 'http://gateway.marvel.com',
    namespace: 'v1/public',
    buildURL: function(record, suffix) {
        return this._super(record, suffix) + this.generateKeyParams();
    },
    generateKeyParams: () => {
        const ts = new Date().valueOf();
        const publicKey = '8293afca01caccf61f57abefd07fb87b';
        const privateKey = '5510574edc0eac3fdd24bd9ed8393b3231852f17';
        const hash = md5(ts + privateKey + publicKey);
        return `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    }
});
