import { LightningElement, api, track } from 'lwc';
import getFiles from '@salesforce/apex/DownloadZip.getFiles';
import { NavigationMixin } from "lightning/navigation";


export default class DownloadZipQuickAction extends NavigationMixin(LightningElement) {
  
    @api recordId;
    @track fileIds = '';
    @api invoke() {
        console.log('### I am here!');

        getFiles({
            recordId:this.recordId
        })
            .then(result => { 
                let fileList = JSON.parse(JSON.stringify(result));
                if (fileList != '') { 
                    for (let i in fileList) { 
                        this.fileIds += fileList[i] + '/';
                    }
                }
                
                if (this.fileIds.length > 0) { 
                    this.fileIds = this.fileIds.replace(/.$/, "?");
                }

                const config = {
                    type: 'standard__webPage',
                    attributes: {
                        url: '/sfc/servlet.shepherd/version/download/' + this.fileIds
                    }
                };
                this[NavigationMixin.Navigate](config);

            })
            .catch(error => {
                console.log('### Error: ' + JSON.stringify(error));
             })
    }
}