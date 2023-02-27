import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      Responsive Card Grid with Angular, CSS & CDK Layout
    </mat-toolbar>
    <div class="container">
      <mat-card *ngFor="let card of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]">
        <mat-card-header>
          <mat-card-title>Card {{ card }} </mat-card-title>
          <mat-card-subtitle></mat-card-subtitle>
        </mat-card-header>
        <br />
        <img mat-card-image src="./assets/valley.JPG" />
        <mat-card-content>
          <br />
          <p>
            Usho is known for its beautiful cloudy and rainy forest. Tourist
            attraction Mahodand lake is located 27 kilometers (17 mi) from
            there.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 24px;
      }

      img {
        width: 100%;
      }
    `,
  ],
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class AppComponent {}
