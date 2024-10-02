import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateFromLWC extends NavigationMixin(LightningElement) {
  navigateToLWCURL() {
    this[NavigationMixin.Navigate]({
      // Pass in pageReference
      type: 'standard__component',
      attributes: {
        componentName: 'c__destination',
      },
      state: {
        c__source: 'navigateFromLWC.js',
      },
    });
  }
}