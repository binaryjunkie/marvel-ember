import Ember from 'ember';

export default Ember.Component.extend({
    // portrait_small	50x75px
    // portrait_medium	100x150px
    // portrait_xlarge	150x225px
    // portrait_fantastic	168x252px
    // portrait_uncanny	300x450px
    // portrait_incredible	216x324px
    sizes: {
        xsmall: 'xsmall',
        small: 'medium',
        medium: 'fantastic',
        large: 'incredible',
        xlarge: 'uncanny',
    },
    shapes: {
        portrait: 'portrait',
        square: 'standard',
        landscape: 'landscape',
    },
    tagName: 'img',
    size: 'medium',
    shape: 'square',
    path: null,
    extension: null,
    attributeBindings: ['imgSrc:src'],
    imgSrc: Ember.computed('path','size','shape', function(){
        const size = this.get('size');
        const shape = this.get('shape');
        const path = this.get('path');
        const extension = this.get('extension');
        return `${path}/${this.get('shapes')[shape]}_${this.get('sizes')[size]}.${extension}`;
    }),
});
