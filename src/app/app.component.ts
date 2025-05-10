import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angulardemo';
  isDarkTheme = false;
  myTheme: string | null = 'light';

  ngOnInit(): void {
    this.myTheme = localStorage.getItem('myTheme');
    if (this.myTheme == null || this.myTheme === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.isDarkTheme = false;
    }
    else if (this.myTheme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      this.isDarkTheme = true;
    }
    console.log(this.myTheme);
  }
  SwitchDarkTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    if(this.isDarkTheme){
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem("myTheme", "dark");
    }
    else  {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem("myTheme", "light");
    }
  }

}
