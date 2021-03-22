import React from 'react';
import Styles from './Modal.css';

class ZoomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: `url(${props.src})`,

      // For positioning the background image, initially it has no change
      backgroundPosition: '0% 0%',
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  // Change the position of the background image based on mouse movement
  handleMouseMove(event) {
    const {
      left, top, width, height,
    } = event.target.getBoundingClientRect();
    const newX = (event.pageX - left) / width * 100;
    const newY = (event.pageY - top) / height * 100;
    this.setState({ backgroundPosition: `${newX}% ${newY}%` });
  }

  render() {
    return (
      <figure
        onMouseMove={this.handleMouseMove}
        style={this.state}
        id={Styles.ZoomImageFigure}
      >
        <img
          src={this.props.src}
          id={Styles.ZoomImage}
          alt="Zoom in product picture"
        />
      </figure>
    );
  }
}

export default ZoomImage;
