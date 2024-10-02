import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import timeElements from '@salesforce/resourceUrl/timeElements';

export default class TimeComponent extends LightningElement {
    isCmpInitialized = false;
    date;
    renderedCallback() {
        if (this.isCmpInitialized) { 
            return;
        }
        this.isCmpInitialized = true;
        loadScript(this, timeElements)
            .then(() => {
                this.initializeComponent();
                console.log('###Loading');
            })
            .catch((error) => {
                console.log('###Error');
            });
    }

    initializeComponent() {
        this.date = new Date();
        console.log("🚀 ~ this.date:", this.date);
    }
}