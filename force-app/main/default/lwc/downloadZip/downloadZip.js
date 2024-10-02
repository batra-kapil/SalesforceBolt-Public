import { LightningElement, api, track } from 'lwc';
import getfileIds from '@salesforce/apex/DownloadZip.getfileIds';


export default class DownloadZip extends LightningElement {
    @api recordId;
    @track fileIds = '';
    @track error = '';
    
    connectedCallback() {
        getfileIds({
            recordId : this.recordId
        })
        .then(result => {
            let fileDataList = JSON.parse(JSON.stringify(result));
            let fileIdsString = '';
            if(fileDataList) {
                for (let i in fileDataList) {
                    fileIdsString += fileDataList[i]+'/';
                }
            }
            if(fileIdsString.length > 0) {
                fileIdsString =fileIdsString.replace(/.$/,"?");
            }
            this.fileIds = fileIdsString;
            this.error = undefined;
        })
        .catch(error => {  console.log('error : '+JSON.stringify(error));
            this.error = error;
        });
    }
    
    get getDownloaLink() {
        return '/sfc/servlet.shepherd/version/download/'+this.fileIds;
    }
}