import NavigationBar from './NavigationBar';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(NavigationBar, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <NavigationBar />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <NavigationBar />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});