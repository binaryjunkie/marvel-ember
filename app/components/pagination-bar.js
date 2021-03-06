import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['disabled'],
    limit: null,
    offset: null,
    total: null,
    disabled: false,

    currentPage: Ember.computed('limit','offset', function(){
        return (this.get('offset')/this.get('limit')) + 1;
    }),
    totalPages: Ember.computed('limit','total', function(){
        return Math.ceil(this.get('total')/this.get('limit'));
    }),
    isNext: Ember.computed('limit', 'offset', 'total', function(){
        return (this.get('offset') + this.get('limit')) < this.get('total'); 
    }),
    isPrevious: Ember.computed('limit', 'offset', 'total', function(){
        return (this.get('offset') > 0); 
    }),
    nextOffset: Ember.computed('offset','limit', function(){
        return this.get('offset') + this.get('limit');
    }),
    prevOffset: Ember.computed('offset','limit', function(){
        return this.get('offset') - this.get('limit');
    }),
});
