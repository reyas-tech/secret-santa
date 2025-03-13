import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-questionnaire',
    standalone: false,
    templateUrl: './questionnaire.component.html',
    styleUrl: './questionnaire.component.scss',
})
export class QuestionnaireComponent {
    questions = [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
    ];
    questionnaire = new FormGroup({});

    constructor() {
        this.questions.forEach((q, i) => {
            this.questionnaire.addControl(
                i.toString(),
                new FormControl<string>('', Validators.required)
            );
        });
    }

    onSubmit() {
        this.questionnaire.reset();
    }
}
