import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import search from 'yelpapp/gql/queries/search';

export default Route.extend({
    apollo: queryManager(),

    queryParams:{
        term: {
            refreshModel: true
        },
        location: {
            refreshmodel: true /**/
        }
    },

    model(params){
        if(params.term){
            const inputs = {term: params.term, loc:params.location };
            return this.apollo.watchQuery({ query: search, variables: inputs }, 'search');
        } /**/
    }
});