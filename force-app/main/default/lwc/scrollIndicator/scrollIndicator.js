import { LightningElement } from 'lwc';

export default class ScrollIndicator extends LightningElement {

    renderedCallback() {
        this.template
        .querySelector('[data-id="containerDiv"]')
        .addEventListener("scroll", this.myFunction);
    }
    disconnectedCallback() {
        this.template
        .querySelector('[data-id="containerDiv"]')
        .removeEventListener("scroll", this.myFunction);
    }
    myFunction = () => {
        let divObj = this.template.querySelector('[data-id="containerDiv"]');
        let clientScrollMinValue = divObj.scrollTop - 5;
        console.log("🚀 ~ clientScrollMinValue:", clientScrollMinValue);
        let clientScrollMaxValue = divObj.scrollTop + 5;
        console.log("🚀 ~ clientScrollMaxValue:", clientScrollMaxValue);
        let targetValue = divObj.scrollHeight - divObj.clientHeight;
        console.log("🚀 ~ targetValue:", targetValue);

        let myBar = this.template.querySelector('[data-id="myBar"]');
        let scrolled = (clientScrollMinValue / targetValue) * 100;
        if (scrolled > 97) { 
            scrolled = 100;
        }
        else if (scrolled < 1) {
            scrolled = 0;
        }
        myBar.style.width = scrolled + "%";
       
    };
}