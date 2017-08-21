// Link.react-test.js
import React from 'react';
import UserList from '../components/UserList';
import UserService from './mock/UserService';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'

test('User list renders appropriately.', () => {
  var userService = new UserService(true);
  const component = renderer.create(
    <MemoryRouter initialEntries={['/users']}>
      <UserList service={userService}/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
