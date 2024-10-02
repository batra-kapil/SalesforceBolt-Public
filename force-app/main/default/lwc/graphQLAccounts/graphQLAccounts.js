import { LightningElement,wire } from 'lwc';
import {gql,graphql} from 'lightning/uiGraphQLApi';

export default class GraphQLAccounts extends LightningElement {
  results;
  errors;

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
                  Contacts{
                    edges{
                      node{
                        LastName{ value }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }`,
  })
  graphqlQueryResult({ data, errors }) {
    if (data) {
      this.results = data.uiapi.query.Account.edges.map((edge) => edge.node);
      console.log("🚀 ~ this.results:", JSON.stringify(this.results));
    }
    this.errors = errors;
  }
}