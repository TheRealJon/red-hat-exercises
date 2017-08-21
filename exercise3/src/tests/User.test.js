// Link.react-test.js
import React from 'react';
import User from '../components/User';
import UserService from './mock/UserService';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'

test('User renders appropriately.', () => {
  var userService = new UserService(true);
  const component = renderer.create(
    <MemoryRouter initialEntries={['/users/1']}>
      <User service={userService} match={{params:{id: 1}}}/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
