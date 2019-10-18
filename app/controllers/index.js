import Controller from '@ember/controller';
import { throttle } from '@ember/runloop';

export default Controller.extend({
  queryParams: ['term', 'location'], /*queryParams:['term', 'loc'],*/ 
  term: null, 
  location: null,
  actions: {
    updateTerm() {
      throttle(() => {
        this.set('term');
      }, 1000);
    }/*
    updateLoc() {
      throttle(() => {
        this.set('loc');
      }, 1000);
    }*/
  }
});