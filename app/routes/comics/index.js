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
            return this.get('store').query('comic', {titleStartsWith: params.search, offset: params.offset});
        } else {
            return this.get('store').query('comic', {offset: params.offset});
        }
    },
    actions: {
        loading(transition, originRoute) {
          let controller = this.controllerFor('comics.index');
          controller.set('isLoading', true);
          transition.promise.finally(function() {
            Ember.run.later((function() {
                controller.set('isLoading', false);
            }), 250);
          });
        }
      }
});
