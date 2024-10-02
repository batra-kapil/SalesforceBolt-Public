import { LightningElement } from 'lwc';
import wiredinputs from '@salesforce/resourceUrl/wiredinputs';
import { loadScript } from 'lightning/platformResourceLoader';

export default class Emoji extends LightningElement {
    emojiType;
    inputValue;
    rendered = false;
    renderedCallback() {
        if (this.rendered) {
            return;
        }
        this.rendered = true;
        loadScript(this, wiredinputs).then(() => {
            this.initializeComponent();
            console.log('@@@Loading Script');
         });
    }
    initializeComponent() {
        this.inputValue = '5';
    }
}