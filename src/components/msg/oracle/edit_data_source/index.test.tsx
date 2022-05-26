import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgEditDataSource } from '@models';
import EditDataSource from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/EditDataSource', () => {
  it('matches snapshot', () => {
    const message = new MsgEditDataSource({
      type: 'MsgEditDataSource',
      name: 'name',
      sender: 'name',
    });
    const component = renderer.create(
      <MockTheme>
        <EditDataSource
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
