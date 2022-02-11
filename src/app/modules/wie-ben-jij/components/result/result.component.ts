import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarnavalArtist } from 'src/app/modules/wie-ben-jij/constants/carnavalArtist';
import { PivoGroup } from 'src/app/modules/wie-ben-jij/constants/pivoGroup.enum';
import { RowanGroup } from 'src/app/modules/wie-ben-jij/constants/rowanGroup.enum';
import { SherpaGroup } from 'src/app/modules/wie-ben-jij/constants/sherpaGroup.enum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  persons = [...RowanGroup, ...SherpaGroup, ...PivoGroup];
  selectedPerson;
  carnavalsArtist: CarnavalArtist;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedPerson = this.persons.find((person) => person.id === parseInt(this._activatedRoute.snapshot.params.id))

    switch (this.selectedPerson.id) {
      case 9:
      case 3:
      case 16:
      case 20:
      case 26:
      case 32:
        this.carnavalsArtist = { name: 'Team Johnny Purple', url: '/assets/johnnypurple.jpg' }
        break;
      case 10:
      case 4:
      case 17:
      case 21:
      case 27:
      case 33:
        this.carnavalsArtist = { name: 'Team Veul Gère', url: '/assets/veulgere.jpeg' }
        break;
      case 11:
      case 5:
      case 18:
      case 12:
      case 22:
      case 28:
        this.carnavalsArtist = { name: 'Team Snollebollekes', url: '/assets/snollebollekes.jpg' }
        break;
      case 6:
      case 19:
      case 13:
      case 23:
      case 29:
        this.carnavalsArtist = { name: 'Team Peter Selie', url: '/assets/peterselie.jpeg' }
        break;
      case 7:
      case 1:
      case 14:
      case 24:
      case 30:
        this.carnavalsArtist = { name: 'Team Vieze Jack', url: '/assets/viezejack.jpg' }
        break;
      case 8:
      case 2:
      case 15:
      case 25:
      case 31:
        this.carnavalsArtist = {name: 'Team De Alpenzusjes', url: '/assets/alpenzusjes.jpeg' }
        break;
      default:
        this.carnavalsArtist = {name: 'Team De Alpenzusjes', url: '/assets/alpenzusjes.jpeg' }
    }
  }
}
