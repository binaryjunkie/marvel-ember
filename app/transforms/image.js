import Ember from 'ember';
import DS from 'ember-data';

const Image = Ember.Object.extend({
  generateUrl(shape='standard',size='xlarge'){
    return `${this.get('path')}/${shape}_${size}.${this.get('extension')}`;
  },
  url: function(){
    return this.generateUrl('standard','small');
  }.property(),
  cardMedium: function(){
    return this.generateUrl('portrait','incredible');
  }.property(),
  cardLarge: function(){
    return this.generateUrl('portrait','uncanny');
  }.property(),
})

export default DS.Transform.extend({
  deserialize(serialized) {
    return Image.create(serialized);
  },

  // serialize(deserialized) {
  //   return deserialized;
  // }
});
