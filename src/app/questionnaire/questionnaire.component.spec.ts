import { QuestionnaireComponent } from './questionnaire.component';
import { render, RenderResult } from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { waitFor } from '@testing-library/dom';

let component: RenderResult<QuestionnaireComponent>;
let user: UserEvent;

const initComponent = async () => {
    user = userEvent.setup();
    return render(QuestionnaireComponent, {
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
        ],
        declarations: [],
        providers: [],
    });
};

describe('given user opens questionnaire', () => {
    it('should allow user to submit and reset questionnaire once all questions are answered', async () => {
        component = await initComponent();

        const submit = component.getByRole('button', { name: 'Submit' });
        expect(submit).toHaveAccessibleName();
        
        let input: HTMLElement;
        component.fixture.componentInstance.questions.forEach(
            async (question) => {
                // Submit button should be disabled until all questions are answered
                expect(submit).toBeDisabled();
                // Each question should have a corresponding form input
                input = component.getByLabelText(question);
                expect(input).toBeVisible();
                expect(input).toHaveAccessibleName();
                await user.type(input, 'test');
                expect(input).toHaveValue('test');
            }
        );

        waitFor(() => {
            // Submit button should be enabled once all questions are answered
            expect(submit).toBeEnabled();
        });

        // On submit, should disable submit button and reset form
        await user.click(submit);
        expect(submit).toBeDisabled();
        component.fixture.componentInstance.questions.forEach(
            async (question) => {
                input = component.getByLabelText(question);
                expect(input).toHaveValue('');
            }
        );
    });
});
