import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        save(){
            alert('Saved to favorites');
            const newFavorite = this.store.createRecord('favorites',{
                name: this.get('model.business.name'),
                yelpid: this.get('model.business.id')
            });
            newFavorite.save();
        },
        unsave() {
            this.get('model.favorites')
            .destroyRecord()
            .then(() => {
                this.set('model.favorites', undefined);
            });
        }
    }
});