import { Question } from '../../constants/question';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  @Input() question: Question;
  @Input() className: string;

  groupName = `name_${Math.random()}`
}
