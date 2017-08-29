import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['loading-dialog'],
    classNameBindings: ['active:active'],

    active: false,
});
