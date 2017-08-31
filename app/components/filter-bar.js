import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setCardSize(size) {
            console.log('COMPONENT ACTION')
            this.sendAction('setSize', size);
        }
    }
});
