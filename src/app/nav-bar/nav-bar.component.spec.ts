import { NavBarComponent } from './nav-bar.component';
import { render, RenderResult } from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CommonModule } from '@angular/common';

let component: RenderResult<NavBarComponent>;
let user: UserEvent;

const initComponent = async () => {
    user = userEvent.setup();
    return render(NavBarComponent, {
        imports: [CommonModule],
        declarations: [],
        providers: [],
    });
};

describe('given a user opens the site', () => {
    it('should display the navigation menu', async () => {
        component = await initComponent();
        // expect(component.getByAltText('Gift Box Icon')).toBeVisible();
        expect(component.getByText('Questionnaire')).toBeVisible();
        expect(component.getByText('404')).toBeVisible();
    });
});
