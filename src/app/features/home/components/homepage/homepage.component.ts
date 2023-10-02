import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  CookieAcceptance: boolean;
  constructor() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    this.CookieAcceptance = cookieConsent === 'true';
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    this.CookieAcceptance = true;
  }
}
