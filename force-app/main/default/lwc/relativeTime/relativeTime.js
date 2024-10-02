import { LightningElement } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import jbdateinput from '@salesforce/resourceUrl/jbdateinput';
import timeElements from "@salesforce/resourceUrl/timeElements";
import diceroller from '@salesforce/resourceUrl/diceroller';
import timecounter from '@salesforce/resourceUrl/timecounter';



export default class RelativeTime extends LightningElement {

  isCmpInitialized = false;
  error;
  date;
  dice;
  total;
  modifier;
  bonusdie;
  difficulty;
  size;
  emojiType;

  renderedCallback() {
    if (this.isCmpInitialized) {
      return;
    }
    this.isCmpInitialized = true;

    loadScript(this, timeElements)
        .then(() => {
          console.log('@@@Loading@@@');
        this.initializeComponent();
      })
      .catch((error) => {
        this.error = error;
      });
  }
  initializeComponent() {
    this.date = new Date();
    // this.dice = "2";
    // this.total = "sum";
    // this.modifier = "0";
    // this.bonusdie = "0";
    // this.difficulty = "0";
    // this.size = "2";
    // this.emojiType = 'smile';
    // console.log("🚀 ~ this.emojiType:", this.emojiType);
    // // this.refs.dicerollerpbta.click();
    // console.log("🚀 ~ size:00", this.size);
    console.log("🚀 ~ this.date000", this.date);
  }
}