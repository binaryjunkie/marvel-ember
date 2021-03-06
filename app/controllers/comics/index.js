import Ember from 'ember';
import PaginationControllerMixin from '../../mixins/pagination-controller';

export default Ember.Controller.extend(PaginationControllerMixin, {
    search: null,
    q: Ember.computed.oneWay('search'),
    cardSize: 'xlarge',

    onFilter: Ember.observer('q', function() {
      Ember.run.debounce(this, this.updateSearch, 350);
    }),

    pages: Ember.computed('model.meta.limit', 'model.meta.total', function(){
        const limit = this.get('model.meta.limit')
        const total = this.get('model.meta.total')
        return Math.ceil(total/limit);
    }),

    updateSearch: function() {
        this.set('search', this.get('q'));
        this.set('offset', 0);
    },   
    actions: {
        setSize(size) {
            console.log('SETTING SIZE')
            this.set('cardSize', size);
        }
    },
});
