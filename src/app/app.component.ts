import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary"> Responsive Card Grid </mat-toolbar>
    <div class="container responsive-grid">
      <mat-card *ngFor="let card of cards">
        <mat-card-header>
          <mat-card-title>{{ card.title }} </mat-card-title>
          <mat-card-subtitle></mat-card-subtitle>
        </mat-card-header>
        <br />
        <img mat-card-image [src]="card.imageUrl" />
        <mat-card-content>
          <br />
          <p>
            {{ card.description }}
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
        height: 200px;
        object-fit: cover;
      }

      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 24px;
      }
    `,
  ],
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule],
})
export class AppComponent {
  cards: CardContent[] = [];

  images = [
    'kr9HOdBFjuk',
    'ifjEbN18R44',
    'urMbGaBBjbg',
    '05_yqWFbc2E',
    'O2hktlhRAyg',
    'Jd3Ai-1f9H0',
    'SWbCLJBDVnA',
    'x7peUIju0u0',
    'vH0UeskIkD8',
    'sm-LdPd-ILc',
  ];

  constructor() {
    for (let i = 0; i < this.images.length; i++) {
      this.cards.push({
        title: `Card ${i + 1}`,
        description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. `,
        imageUrl: `https://source.unsplash.com/${this.images[i]}/300X300`,
      });
    }
  }
}
