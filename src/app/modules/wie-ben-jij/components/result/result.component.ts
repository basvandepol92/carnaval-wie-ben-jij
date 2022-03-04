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

    if(!(this.selectedPerson && this.selectedPerson.id)) {
      this.setUnselectedPerson();
      return;
    }

    switch (this.selectedPerson.id) {
      case 20:
      case 27:
      case 1:
      case 7:
      case 15:
      case 6:
        this.carnavalsArtist = { name: 'Team Johnny Purple', url: '/assets/johnnypurple.jpg' }
        break;
      case 21:
      case 28:
      case 2:
      case 8:
      case 17:
      case 25:
        this.carnavalsArtist = { name: 'Team Veul Gère', url: '/assets/veulgere.jpeg' }
        break;
      case 22:
      case 29:
      case 3:
      case 11:
      case 18:
      case 33:
        this.carnavalsArtist = { name: 'Team Snollebollekes', url: '/assets/snollebollekes.jpg' }
        break;
      case 23:
      case 30:
      case 4:
      case 12:
      case 19:
        this.carnavalsArtist = { name: 'Team Peter Selie', url: '/assets/peterselie.jpeg' }
        break;
      case 24:
      case 31:
      case 5:
      case 13:
      case 14:
        this.carnavalsArtist = { name: 'Team Vieze Jack', url: '/assets/viezejack.jpg' }
        break;
      default:
        this.setUnselectedPerson();
    }
  }

  setUnselectedPerson() {
    this.carnavalsArtist = { name: 'Team Vieze Jack', url: '/assets/viezejack.jpg' }
  }
}
