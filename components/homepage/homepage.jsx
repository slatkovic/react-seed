import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/demoActions';
import styles from './homepage.scss';

class Homepage extends Component {

  render() {

    const { items, onFetchItemsClicked } = this.props;

    const listItems = items.map((item, index) => <li key={index}>{item}</li>);

    return (
      <div className={styles.container}>
        <button onClick={onFetchItemsClicked}>Fetch items</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
  items: PropTypes.array.isRequired,
  onFetchItemsClicked: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.demo.items
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onFetchItemsClicked: () => dispatch(fetchItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
