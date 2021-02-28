import React from 'react';
import styles from './style.css';

class Overview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Overview </h1>
      </div>
    )
  }
}


export default Overview;