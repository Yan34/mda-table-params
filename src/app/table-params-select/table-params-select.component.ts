import { Component } from '@angular/core';

@Component({
  selector: 'app-table-params-select',
  templateUrl: './table-params-select.component.html',
  styleUrls: ['./table-params-select.component.css']
})
export class TableParamsSelectComponent {

  switchToggle = false;
  checkedOptionColor = '#B2895A';
  uncheckedOptionColor = '#C4C4C4';
  readonly qrLink = 'https://i.ibb.co/1JbS5Jn/qr.png';
  readonly searchImgLink = 'https://i.ibb.co/mBkRkcs/search.jpg';

  switchToggled(): void {
    this.switchToggle = !this.switchToggle;
  }

}
