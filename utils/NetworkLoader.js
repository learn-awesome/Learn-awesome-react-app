import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

// *********************************** //

const override = css`
  display: block;
  position: fixed;
  top: 0;
`;

// *********************************** //

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// *********************************** //

class NetworkLoader extends Component {
  state = { width: undefined };

  // Getting Browser Width ****************** //

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  // ****************************** //

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // Event Listner for getting current browser width //

  updateWindowDimensions = () => this.setState({ width: window.innerWidth });

  // ****************************** //

  render() {
    const { width } = this.state;

    return (
      <Loader>
        <BarLoader
          css={override}
          sizeUnit="px"
          height={6}
          color="#327ff6"
          loading={true}
          width={width ? width : 1920}
        />
      </Loader>
    );
  }
}

export default NetworkLoader;
