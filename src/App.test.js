import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase'
import configForTest from './config.fb.test'
import TestRenderer from 'react-test-renderer'



it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('Tests with firebase', async () => {
//   const fb = await firebase.initializeApp(configForTest);
//   var database = firebase.database.ref('/condominios/');
//   console.log(fb.name)
//   expect(database).toEqual('')

// })
