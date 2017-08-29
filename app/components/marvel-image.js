import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'img',
    size: 'xlarge',
    shape: 'portrait',
    path: null,
    extension: null,
    attributeBindings: ['imgSrc:src'],
    imgSrc: Ember.computed('path','size','shape', function(){
        const size = this.get('size');
        const shape = this.get('shape');
        const path = this.get('path');
        const extension = this.get('extension')
        return `${path}/${shape}_${size}.${extension}`;
    }).property(),
});
