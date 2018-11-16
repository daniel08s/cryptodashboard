import React from 'react';

const cc = require('cryptocompare');

const MAX_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      favorites: ['BTC', 'LTC', 'DOGE', 'DASH', 'ETH'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      isFavoriteListMaxed: this.isFavoriteListMaxed,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins,
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if(!this.isFavoriteListMaxed() && !this.isInFavorites(key)) {
      favorites.push(key);
      this.setState({favorites});
    }
  }

  removeCoin = key => {
    this.setState({
      favorites: this.state.favorites.filter(favorite => favorite !== key)
    });
  }

  isInFavorites = key => ~this.state.favorites.indexOf(key);

  isFavoriteListMaxed = () => this.state.favorites.length >= MAX_FAVORITES;

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard',
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
    }));
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return {page: 'settings', firstVisit: true};
    }
    let {favorites} = cryptoDashData;
    return {favorites};
  }

  setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

  setPage = page => this.setState({page});

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
};
