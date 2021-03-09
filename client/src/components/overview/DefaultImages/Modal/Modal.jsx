import React from 'react';
import Styles from './Modal.css';
import LeftArrow from '../Arrows/LeftArrow.jsx';
import RightArrow from '../Arrows/RightArrow.jsx';

const Modal = ({
  handleClose, show, currIndex, updateIndex, photos,
}) => {
  const showHideClassName = show ? Styles.displayBlock : Styles.displayNone;

  return (
    <div className={showHideClassName}>
      <section className={Styles.modalMain}>

        <img
          src="icons/close.svg"
          alt="close button"
          className={Styles.close}
          onClick={() => handleClose(false)}
        />

        <LeftArrow
          currIndex={currIndex}
          updateIndex={updateIndex}
          length={photos.length}
        />

        <img
            className={Styles.image}
            src={photos[currIndex].url}
            alt="expandedDefaultImage"
        />

        <RightArrow
          currIndex={currIndex}
          updateIndex={updateIndex}
          length={photos.length}
        />

      </section>
    </div>
  );
};

export default Modal;