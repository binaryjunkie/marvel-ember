import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        search: {
            refreshModel: true
        }
    },
    model(params) {
        if (params.search != null && params.search != "") {
            return this.get('store').query('comic', {titleStartsWith: params.search});
        } else {
            return this.get('store').findAll('comic');
        }
    }
});
