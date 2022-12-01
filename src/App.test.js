import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store"
import { GoogleOAuthProvider } from '@react-oauth/google';

describe('With React Testing Library', () => {
  let root = document.createElement('div');
  let clientId = '468227137198-dutfsgqd0rnv383oe38ca1thgi6r1mbg.apps.googleusercontent.com';
  document.body.appendChild(root);

  it('Shows "Champions", "LogIn With Google" and "Champions Board"', () => {
      const { getByText } = render(
        <GoogleOAuthProvider clientId={ clientId }>
          <Provider store={ store }>
              <App />
          </Provider>
        </GoogleOAuthProvider>
      );

      expect(getByText('Champions')).not.toBeNull();
      expect(getByText('LogIn With Google')).not.toBeNull();
      expect(getByText('Champions Board')).not.toBeNull();
      expect(getByText).toMatchSnapshot();
  });
});
