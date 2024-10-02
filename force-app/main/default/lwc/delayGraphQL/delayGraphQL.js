import { LightningElement, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class DelayGraphQL extends LightningElement {
    selectedRecordId = '';
    contacts;
    errors;
    
   handleChange(event) {
        this.selectedRecordId = event.detail.recordId;
        console.log("🚀 ~ this.selectedRecordId:", this.selectedRecordId);
   }
    
    @wire(graphql, {
        query: "$accountQuery",
        variables: "$accountData",
    })
        
  graphqlQueryResult({ data, errors }) {
        if (data) {
        this.contacts = data.uiapi.query.Contact.edges.map((edge) => edge.node);
        }
        if (errors) {
            this.errors = errors;
        }
    }
    
    get accountQuery() {
        if (!this.selectedRecordId) return undefined;    
        return gql`
        query contactsOnAccount($recordId: ID!) {
            uiapi {
            query {
                Contact(where: { AccountId: { eq: $recordId } }) {
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
        }`;
    }
    get accountData() {
        return {
          recordId: this.selectedRecordId,  
        };
    }
}