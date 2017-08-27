import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const results = {};
        results[primaryModelClass.modelName] = payload.data.results;
        return this._super(store, primaryModelClass, results, id, requestType);
    },

    // normalizeSingleResponse(store, primaryModelClass, payload, id) {
    //     const results = {};
    //     results['character'] = payload.characters[0];
    //     return this._super(store, primaryModelClass, results, id);
    // }
});