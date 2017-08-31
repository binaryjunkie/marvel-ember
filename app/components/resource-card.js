import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'article',
    classNames: ['resource-card'],
    classNameBindings: ['cardSize', 'cardShape'],
    cardSize: 'xlarge',
    cardShape: 'portrait'
});
