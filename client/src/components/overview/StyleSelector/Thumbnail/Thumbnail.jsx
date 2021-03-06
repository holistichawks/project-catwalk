import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Thumbnail.css';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.updateStyleId(this.props.styleId, this.props.index);
  }

  render() {
    return (
      <img
        src={this.props.url ? this.props.url : 'icons/no-image.png'}
        className={this.props.styleId === this.props.currentStyle ? Styles.selected : Styles.thumbnail}
        alt={this.props.alt}
        onClick={this.onClick}
      />
    );
  }
}

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;
