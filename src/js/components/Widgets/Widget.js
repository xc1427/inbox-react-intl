import React, { Component, PropTypes } from 'react';
import styles from './Widgets.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Widget extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }

  render() {
    const { header, body } = this.props;

    return (
      <div className={ cx('widget-item-container') }>
        <div className={ cx('widget-header') }>
          {header}
        </div>
        <div className={ cx('widget-body') }>
          {body}
        </div>
      </div>
    );
  }
}

export default Widget;
