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
      setCurrentFavorite: this.setCurrentFavorite,
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    this.setState({prices});
  }

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++){
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'EUR');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Error fetching price: ', e);
      }
    }
    return returnData;
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
    let currentFavorite = this.state.favorites[0];

    this.setState({
      firstVisit: false,
      page: 'dashboard',
      currentFavorite,
    }, () => {
      this.fetchPrices();
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
      currentFavorite,
    }));
  }

  setCurrentFavorite = currentFavorite => {
    this.setState({currentFavorite});
    localStorage.setItem('cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')),
      currentFavorite,
    }));
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return {page: 'settings', firstVisit: true};
    }
    let {favorites, currentFavorite} = cryptoDashData;
    return {favorites, currentFavorite};
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
