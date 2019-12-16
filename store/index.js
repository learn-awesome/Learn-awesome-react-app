import React from 'react';

// Creating a Context Store for our App

const { Provider, Consumer } = React.createContext();

// **************************************** //

class StoreProvider extends React.Component {
  state = {
    //  Theme toggle variable
    isDarkThemeActive: false,
  };

  // ******************************************** //

  // ******************************************** //

  render() {
    return (
      <Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
