import { Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  ngAfterViewInit() {
    feather.replace();
  }
}
