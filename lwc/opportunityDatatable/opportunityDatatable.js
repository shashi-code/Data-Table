import { LightningElement, track, api, wire } from 'lwc';
import getProductList from '@salesforce/apex/OpportunityHelper.getProductList';

export default class OpportunityDatatable extends LightningElement {
    @api recordId;
    isShow = false;
    @track columns = [{
        label: 'Product Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Oppotunity Id',
        fieldName: 'OpportunityId',
        type: 'text',
        sortable: true
    },
    {
        label: 'Quantity',
        fieldName: 'Quantity',
        type: 'number',
        sortable: true
    },
    {
        label: 'Sales Price',
        fieldName: 'UnitPrice',
        type: 'Currency',
        sortable: true
    }
];

@track error;
@track oppList ;
@wire(getProductList, { oppId : '$recordId'})
wiredProducts({
    error,
    data
}) {
    if (data) {
        this.oppList = data;
    } else if (error) {
        this.error = error;
    }
}

handleClick() {
    this.isShow = true;
}

handleClickHide() {
    this.isShow = false;
}
}