import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        search: {
            refreshModel: true
        },
        offset: {
            refreshModel: true
        },
    },
    model(params) {
        if (params.search != null && params.search != "") {
            return this.get('store').query('character', {nameStartsWith: params.search, offset: params.offset});
        } else {
            return this.get('store').query('character', {offset: params.offset});
        }
    },
    actions: {
        loading(transition, originRoute) {
          let controller = this.controllerFor('characters.index');
          controller.set('isLoading', true);
          transition.promise.finally(function() {
            Ember.run.later((function() {
                controller.set('isLoading', false);
            }), 250);
          });
        }
      }
});
