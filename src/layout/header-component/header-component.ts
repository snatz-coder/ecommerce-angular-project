import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
  standalone:true
})
export class HeaderComponent {

}
