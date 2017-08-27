import Ember from 'ember';
import DS from 'ember-data';

const Image = Ember.Object.extend({
  url: function(){
    return `${this.get('path')}/standard_small.${this.get('extension')}`;
  }.property()
})

export default DS.Transform.extend({
  deserialize(serialized) {
    return Image.create(serialized);
  },

  // serialize(deserialized) {
  //   return deserialized;
  // }
});
