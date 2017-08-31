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
            return this.get('store').query('event', {nameStartsWith: params.search, offset: params.offset});
        } else {
            return this.get('store').query('event', {offset: params.offset});
        }
    },
    actions: {
        loading(transition) {
          let controller = this.controllerFor('events.index');
          controller.set('isLoading', true);
          transition.promise.finally(function() {
            Ember.run.later((function() {
                controller.set('isLoading', false);
            }), 250);
          });
        }
      },
});
