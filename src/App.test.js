import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './routers/AppRouter';
import firebase from 'firebase'
import configForTest from './config.fb.test'
import TestRenderer from 'react-test-renderer'



it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<AppRouter />);
  const testInstance = testRenderer.root;

  expect(testInstance).toBe('bar');
});

// it('Tests with firebase', async () => {
//   const fb = await firebase.initializeApp(configForTest);
//   var database = firebase.database.ref('/condominios/');
//   console.log(fb.name)
//   expect(database).toEqual('')

// })
