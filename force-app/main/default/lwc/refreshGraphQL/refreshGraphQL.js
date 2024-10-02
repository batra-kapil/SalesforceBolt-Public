import { LightningElement,wire } from 'lwc';
import { gql, graphql, refreshGraphQL } from 'lightning/uiGraphQLApi';

export default class RefreshGraphQL extends LightningElement {
  results;
    errors;
    graphqlData;

  @wire(graphql, {
    query: gql`
      query AccountWithName {
        uiapi {
          query {
            Account(first: 5) {
              edges {
                node {
                  Id
                  Name {
                    value
                  }
                }
              }
            }
          }
        }
    }`,
  })
  graphqlQueryResult(result) {
      const { data, errors } = result;
    
    if (data) {
      this.results = data.uiapi.query.Account.edges.map((edge) => edge.node);
    }
      this.errors = errors;
      this.graphqlData = result;
  }
    
    async handleRefresh() { 
        return refreshGraphQL(this.graphqlData);
    }
}