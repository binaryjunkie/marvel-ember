import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const results = this._super(store, primaryModelClass, {comics: payload.data.results}, id, requestType);;
        results.meta = {
            total: payload.data.total,
            offset: payload.data.offset,
            limit: payload.data.limit,
            count: payload.data.count
        };
        return results;
    },
});