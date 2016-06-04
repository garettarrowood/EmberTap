import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      { id: '1', type: 'round' },
      { id: '2', type: 'square' },
      { id: '3', type: 'oval' }
    ]
  }
});
