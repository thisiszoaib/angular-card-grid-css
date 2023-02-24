import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, startWith } from 'rxjs/operators';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      Responsive Card Grid with Angular, CSS & CDK Layout
      <div class="column-selector">
        Columns:
        <mat-slider
          color="accent"
          min="4"
          max="7"
          step="1"
          value="5"
          [discrete]="true"
          [showTickMarks]="true"
        >
          <input matSliderThumb [formControl]="sliderControl" />
        </mat-slider>
      </div>
    </mat-toolbar>
    <div class="container responsive-grid" [style.--columns]="columns$ | async">
      <mat-card
        class="mat-elevation-z5"
        *ngFor="let card of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
      >
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
      :host {
        --columns: 5;
      }

      mat-toolbar {
        justify-content: space-between;
      }

      .container {
        padding: 24px;
      }

      img {
        width: 100%;
      }

      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: 24px;
      }

      .column-selector {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }

      mat-slider {
        transform: scale(0.7);
      }
    `,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  breakpointObserver = inject(BreakpointObserver);

  sliderControl = new FormControl(5);

  columns$ = combineLatest([
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]),
    this.sliderControl.valueChanges.pipe(startWith(5)),
  ]).pipe(
    map(([state, sliderValue]) => {
      if (state.breakpoints[Breakpoints.XSmall]) return 1;
      if (state.breakpoints[Breakpoints.Small]) return 2;
      if (state.breakpoints[Breakpoints.Medium]) return 4;

      return sliderValue;
    })
  );
}
