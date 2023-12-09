import { Component } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
import { MatchsHistoryService } from 'src/app/services/matchs-history.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  matchs!: Matchs[];

  constructor(private api: MatchsHistoryService) { }

  ngOnInit(): void {
    this.matchs = localStorage.getItem('matchs') != null ? JSON.parse(localStorage.getItem('matchs') || '{}') : [];

    if (this.matchs.length === 0) {
      const match: Matchs = { name: 'D0V3S', tag: 'MOCHA', region: 'na' };
      this.api.getMatchs(match).subscribe({
        next: (data: Matchs[]) => {
          this.matchs = data;
          localStorage.setItem('matchs', JSON.stringify(this.matchs));
        },
        error: (error: any) => {
          console.error('Error fetching match history:', error);
        }
      });
    }
  }

}
