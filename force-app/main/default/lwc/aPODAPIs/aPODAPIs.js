import { LightningElement } from "lwc";
import apiKey from "@salesforce/label/c.NASA_APOD_APIS";

export default class APODAPIs extends LightningElement {
  imageURL;
  apodDate;
  connectedCallback() {
    this.apodDate = "2024-09-14";
    console.log("🚀 ~ this.apodDate:", this.apodDate);
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        apiKey +
        "&date=" +
        this.apodDate,
      {
        method: "GET"
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 ~ data:", data);
        this.imageURL = data.hdurl;
      });
  }
}
