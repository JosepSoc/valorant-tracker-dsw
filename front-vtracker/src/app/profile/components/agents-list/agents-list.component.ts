import { Component, Input } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';

@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.scss']
})
export class AgentsListComponent {
  @Input()
  matchs!: Matchs[];
  wins = 0;
  losses = 0;
  porcentaje: number = 0;

  ngOnInit(): void {
    this.getTotals();
  }

  getTotals() {
    for (let i = 0; i < this.agents.length; i++) {
      this.wins += this.agents[i].wins;
      this.losses += this.agents[i].losses;
    }
    this.porcentaje = Math.round(this.wins * 100 / (this.wins + this.losses));
  }

  agents = [
    {
      image: 'https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png',
      wins: 25,
      losses: 10,
      porcentaje: 71
    },
    {
      image: 'https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png',
      wins: 5,
      losses: 3,
      porcentaje: 62.5
    },
    {
      image: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      wins: 3,
      losses: 6,
      porcentaje: 33.3
    }
  ]

}
