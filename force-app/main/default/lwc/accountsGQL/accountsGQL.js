import { LightningElement, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class AccountsGQL extends LightningElement {
  records;
  errors;

  minAmount = "1000";

  minAmounts = [
    { label: "All", value: "0" },
    { label: "1000", value: "1000" },
    { label: "2000", value: "2000" },
    { label: "3000", value: "3000" },
  ];

  @wire(graphql, {
    query: gql`
      query bigAccounts($minAmount: Currency) {
        uiapi {
          query {
            Account(where: { AnnualRevenue: { eq: $minAmount } }) {
              edges {
                node {
                  Id
                  Name {
                    value
                  }
                  AnnualRevenue {
                    displayValue
                  }
                }
              }
          }
        }
      }
    }`,
    // Use a getter function (see get variables() below)
    // to make the variables reactive.
    variables: "$variables",
  })
  graphqlQueryResult({ data, errors }) {
    if (data) {
      this.records = data.uiapi.query.Account.edges.map((edge) => edge.node);
    }
    this.errors = errors;
  }

  get variables() {
    return {
      minAmount: this.minAmount,
    };
  }

  handleMinAmountChange(event) {
    this.minAmount = event.detail.value;
  }
}