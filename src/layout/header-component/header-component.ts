import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
  standalone:true
})
export class HeaderComponent {

}
