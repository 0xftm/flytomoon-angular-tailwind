import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent],
})
export class AppComponent {
  title = 'Angular Tailwind';
  delay: any;
  delay2: any;
  load = false;
  load2 = false;
  
  constructor(public themeService: ThemeService) {}

  
  action2() {
    this.load2 = true;
    if(this.delay2) { clearTimeout(this.delay2); }
    this.delay2 = setTimeout(() => this.load2 = false, 2000);
  }
}
