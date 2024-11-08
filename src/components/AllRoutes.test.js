import AllRoutes from './AllRoutes';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe(AllRoutes, () => {
    it("renders without crashing", () => {
        render(<MemoryRouter>
            <AllRoutes />
        </MemoryRouter>);
    });
    it("matches snapshot", () => {
        const { asFragment } = render(<MemoryRouter>
            <AllRoutes />
        </MemoryRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});