import { RowanGroup, Rowans } from '../../constants/rowanGroup.enum';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/modules/wie-ben-jij/constants/question';
import { Sherpa, SherpaGroup } from 'src/app/modules/wie-ben-jij/constants/sherpaGroup.enum';
import { Pivo, PivoGroup } from 'src/app/modules/wie-ben-jij/constants/pivoGroup.enum';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent {
  private rowanGroup = RowanGroup;
  private sherpaGroup = SherpaGroup;
  private pivoGroup = PivoGroup;
  groups = [{name: Rowans, group: this.rowanGroup}, {name: Sherpa, group: this.sherpaGroup}, {name: Pivo, group: this.pivoGroup}];

  selectedGroup = [];
  selectedPerson: number = 0;

  question_1: Question = { question: 'Welke snack eet jij met carnaval?', answer_1: 'Frikandel maar wel een speciale' , answer_2: 'Balletjes van de koningin', answer_3: 'Falafel in mn waffel', answer_4: 'Heel veel bruine boterhammen' };
  question_2: Question = { question: 'Wie is je favoriete artiest?', answer_1: 'Lamme Frans', answer_2: 'Vieze Jack', answer_3: 'Jettie Trompettie', answer_4: 'Het Feestteam' };
  question_3: Question = { question: 'Hoe ga jij verkleed?', answer_1: 'In mn scoutingblouse', answer_2: 'Als the voice of holland coach', answer_3: 'Als piloot', answer_4: 'Ik ga niet verkleed' };
  question_4: Question = { question: 'Wat is jouw favoriete carnavals nummer?', answer_1: 'Zak es lekker door', answer_2: 'Er staat een paard in de gang', answer_3: 'Bloemetjesgordijn', answer_4: 'Potentie' };
  question_5: Question = { question: 'Wat doe jij het liefste met carnaval?', answer_1: 'Naar dn opstoet kijken natuurlijk!', answer_2: 'Bier drinken, wa dan?', answer_3: 'Thuis blijven, mij niet gezien!', answer_4: 'Wintersporteuhhh' };
  question_6: Question = { question: 'Bij welke carnavalsvereniging zou jij zitten?', answer_1: 'CV de padvinders', answer_2: 'CV de blauw wit uilen', answer_3: 'CV weg er mee', answer_4: 'CV experience' };
  question_7: Question = { question: 'Hoelaat ga jij naar bed met carnaval?', answer_1: 'Niet! Slapen is voor apen', answer_2: 'Net zo laat als normaal', answer_3: 'Ik doe het licht uit in de kroeg', answer_4: 'Zodra ik moe ben natuurlijk' };
  question_8: Question = { question: 'In welke stad vier jij carnaval?', answer_1: 'Ballefruttersgat', answer_2: 'Kruikenstad', answer_3: 'Oeteldonk', answer_4: 'Kraaiengat' };
  question_9: Question = { question: 'In welke kroeg vier jij carnaval?', answer_1: 'Café t mandje', answer_2: 'Kelderke', answer_3: 'Brands', answer_4: 'Op straat' };
  question_10: Question = { question: 'Hoeveel tijd zou jij steken in het bouwen van een wagen?', answer_1: 'Niets, mij niet gezien', answer_2: 'Kan zo af en toe wel helpen', answer_3: 'Zovaak als ik kan', answer_4: 'Elke avond en dag'  };

  changeSelectedGroup() {
    this.selectedPerson = 0;
  }
  get disableButton() {
    return this.selectedPerson === 0;
  }
}
