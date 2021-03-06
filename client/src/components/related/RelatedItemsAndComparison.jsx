/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable radix */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Comparison from './Comparison.jsx';
import Section from './Section.jsx';
import styles from './relatedStyle.css';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProduct: {},
      relatedItems: [],
      outfitItems: [],
      showModal: false,
      selectedProduct: {},
    };
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
  }

  componentDidMount() {
    const { productID, styleIndex } = this.props;
    this.loadProduct(productID)
      .then((currentProduct) => {
        this.setState({ currentProduct });
        this.setStyleIndex(styleIndex);
      });
    this.loadRelatedItems(productID);
    this.setState({ outfitItems: JSON.parse(sessionStorage.getItem('outfitItems') || '[]') });
  }

  componentDidUpdate(prevProps) {
    const { productID, styleIndex } = this.props;
    if (prevProps.productID !== productID) {
      this.loadProduct(productID)
        .then((currentProduct) => this.setState({ currentProduct }));
      this.loadRelatedItems(productID);
    }
    if (prevProps.styleIndex !== styleIndex) {
      this.setStyleIndex(styleIndex);
    }
  }

  setStyleIndex(styleIndex) {
    const { currentProduct } = this.state;
    currentProduct.styleIndex = styleIndex;
    this.setState({ currentProduct });
  }

  getAverageRating(ratings) {
    const keys = Object.keys(ratings);
    const total = keys.reduce((acc, curr) => (
      parseInt(acc) + parseInt(curr) * parseInt(ratings[curr])), 0);
    const numRatings = keys.reduce((acc, curr) => (
      parseInt(acc) + parseInt(ratings[curr])), 0);
    return (total / numRatings);
  }

  loadProduct(productID) {
    let product;
    return axios.get(`/api/products/${productID}`)
      .then((resp) => resp.data)
      .then((data) => {
        product = data;
        return axios.get(`/api/products/${productID}/styles`)
          .then((styleResp) => {
            product.styles = styleResp.data.results;
            product.styleIndex = 0;
            return axios.get(`/api/reviews/meta/${productID}`)
              .then((reviewsResp) => {
                product.ratings = reviewsResp.data.ratings;
                product.averageRating = this.getAverageRating(reviewsResp.data.ratings);
                return product;
              });
          });
      })
      .catch((err) => console.log(err));
  }

  loadRelatedItems(productID) {
    axios.get(`/api/products/${productID}/related`)
      .then((resp) => {
        const array = [...new Set(resp.data)];
        return array;
      })
      .then((array) => Promise.all(array.map((itemID) => this.loadProduct(itemID))))
      .then((relatedItems) => {
        this.setState({ relatedItems });
      })
      .catch((err) => console.log(err));
  }

  addToOutfit() {
    const { currentProduct } = this.state;
    let outfitItems = JSON.parse(sessionStorage.getItem('outfitItems'));
    if (outfitItems) {
      const ids = outfitItems.map((item) => item.id);
      if (!ids.includes(currentProduct.id)) {
        outfitItems.push(currentProduct);
      }
    } else {
      outfitItems = [currentProduct];
    }
    sessionStorage.setItem('outfitItems', JSON.stringify(outfitItems));
    this.setState({ outfitItems });
  }

  removeFromOutfit(item) {
    const { outfitItems } = this.state;
    const index = outfitItems.indexOf(item);
    if (index >= 0) {
      outfitItems.splice(index, 1);
      this.setState({ outfitItems });
      sessionStorage.setItem('outfitItems', JSON.stringify(outfitItems));
    }
  }

  toggleModal(selectedProduct) {
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({ showModal });
    if (showModal && selectedProduct) {
      this.setState({ selectedProduct });
    }
  }

  changeCurrentProduct(productID) {
    const { changeCurrentProduct } = this.props;
    changeCurrentProduct(productID);
    this.setState({ productID });
  }

  render() {
    const {
      relatedItems,
      outfitItems,
      showModal,
      currentProduct,
      selectedProduct,
    } = this.state;
    return (
      <div>
        <div className={styles.section}>
          <div className={styles.heading}>RELATED PRODUCTS</div>
          <div className={styles.subSection}>
            <Section
              name="related"
              relatedItems={relatedItems}
              toggleModal={this.toggleModal}
              changeCurrentProduct={this.changeCurrentProduct}
            />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.heading}>YOUR OUTFIT</div>
          <div className={styles.subSection}>
            <Section
              name="outfit"
              outfitItems={outfitItems}
              addToOutfit={this.addToOutfit}
              removeFromOutfit={this.removeFromOutfit}
              changeCurrentProduct={this.changeCurrentProduct}
            />
          </div>
        </div>
        { showModal
          ? (
            <Comparison
              current={currentProduct}
              selected={selectedProduct}
              toggleModal={this.toggleModal}
            />
          ) : null}
      </div>
    );
  }
}
// Related.propTypes = {
//   productID: PropTypes.number.isRequired,
//   styleIndex: PropTypes.number.isRequired,
//   changeCurrentProduct: PropTypes.isRequired,
// };

export default Related;
