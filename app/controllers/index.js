import Controller from '@ember/controller';
import { throttle } from '@ember/runloop';

export default Controller.extend({
  queryParams: ['term', 'location', 'price'], /*queryParams:['term', 'loc'],*/ 
  term: null, 
  location: "New York",
  price: null,
  actions: {
    updateTerm() {
      throttle(() => {
        this.set('term');
      }, 1000);
    },
    updateLoc() {
      throttle(() => {
        this.set('loc');
      }, 1000);
    },
    updatePrice() {
      throttle(() => {
        this.set('precio');
      }, 1000);
    }
  }
});