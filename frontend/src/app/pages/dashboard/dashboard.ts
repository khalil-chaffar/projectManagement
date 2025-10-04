import { Component } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Sidebar } from '../../shared/layout/sidebar/sidebar';
import { Footer } from '../../shared/layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Sidebar, Footer, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
