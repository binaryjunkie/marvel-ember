import Ember from 'ember';

export default Ember.Mixin.create({
    queryParams: ['page', 'size'],
    limit: 20,
    offset: 0,
});
 