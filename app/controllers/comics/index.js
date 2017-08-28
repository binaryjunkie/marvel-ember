import Ember from 'ember';

export default Ember.Controller.extend({
    search: null,
    q: Ember.computed.oneWay('search'),
   
    onFilter: Ember.observer('q', function() {
      Ember.run.debounce(this, this.updateSearch, 350);
    }),
    updateSearch: function() {
        this.set('search', this.get('q'));
    },   
});
