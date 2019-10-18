import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import query from "yelpapp/gql/queries/business";
import RSVP from 'rsvp';

export default Route.extend({
    apollo: queryManager(),
    model(params){
        const variables = { id: params.id };
        return RSVP.hash({
            business: this.apollo.watchQuery({ query, variables }, "business"),
            favorites: this.store.query('favorites', {filter: {
                    yelpid: params.id
                }
            }).then(favorites =>{
                return favorites.get('firstObject');
            })
        });
    }
});