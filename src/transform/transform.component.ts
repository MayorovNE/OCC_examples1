import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'transform-root',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css'],
})
export class TransformComponent {
    constructor(private router: Router) {
    }
    goNavigation () {       
        this.router.navigate(['/navigation']);
    }       
}