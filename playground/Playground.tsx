import * as React from 'react';
import {Page} from '@shopify/polaris';

interface State {}

export default class Playground extends React.Component<never, State> {
  render() {
    return (
      <Page title="Playground">{/* Add the code you want to test here */}</Page>
    );
  }
}
