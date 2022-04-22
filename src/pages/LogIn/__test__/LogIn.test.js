import { render, screen } from '@testing-library/react';
import LogIn from '..';
import { Provider } from 'react-redux';
import store from '../../../utilities/redux/store';

test('renders login prompt and button', () => {
    render(
      <Provider store={store}>
        <LogIn/>
      </Provider>
    );
    const PromtText = screen.getByText(/Not Logged In/i);
    expect(PromtText).toBeInTheDocument();
    const Button = screen.getByRole('button');
    expect(Button).toBeInTheDocument();
});

test('renders Create Playlist Page when button clicked', () => {
    render(
      <Provider store={store}>
        <LogIn/>
      </Provider>
    );
    const Button = screen.getByRole('button');
    Button.click();
    const CreatePlaylistButton = screen.getByRole('button');
    expect(CreatePlaylistButton).toBeInTheDocument();
});