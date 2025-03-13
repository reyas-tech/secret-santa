import { PageNotFoundComponent } from './page-not-found.component';
import { render, RenderResult } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { CommonModule } from '@angular/common';

let component: RenderResult<PageNotFoundComponent>;

const initComponent = async () =>
    render(PageNotFoundComponent, {
        imports: [CommonModule],
        declarations: [],
        providers: [],
    });

describe('given a user navigates to a non-existent page', () => {
    it('should display Page not found', async () => {
        component = await initComponent();
        const message = component.getByText('Page not found');
        expect(message).toBeVisible();
    });
});
