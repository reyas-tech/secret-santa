import { QuestionnaireComponent } from './questionnaire.component';
import { render, RenderResult } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let component: RenderResult<QuestionnaireComponent>;

const initComponent = async () => ({
  user: userEvent.setup(),
  ...render(QuestionnaireComponent, {
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [],
    providers: []
  })
});

beforeEach(async () => {
  component = await initComponent();
})

describe('Given the user opens the questionnaire', () => {
  it('should display all questions with proper accessibility', () => {
    const questions = component.fixture.componentInstance.questions;
    let input: HTMLElement;
    questions.forEach(q => {
      input = component.getByLabelText(q);
      expect(input).toBeVisible();
    })
  });

  describe('when the user fills out the questionnaire', () => {
    it('should', () => {});

    describe('when the user submits the questionnaire', () => {
      it('should', () => {});
    });
  });
});