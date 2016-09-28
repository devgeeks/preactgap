import { h, Component } from 'preact';
import { Button } from 'phonegap-topcoat-react';
import animateView from 'react-animated-views';

import './index.less';

class PageOne extends Component {
  clickHandler(e) {
    const { push } = this.props;
    e.preventDefault();
    e.stopPropagation();
    push('/two', 'slideLeft');
  }

  render() {
    const { style } = this.props;
    return (
      <div style={ style } className="page pageone">
        <Button
          onTouchEnd={ e => this.clickHandler(e) }
          clickHandler={ e => this.clickHandler(e) }
          full
          cta
        >
          To PageTwo &raquo;
        </Button>
      </div>
    );
  }
}

export default animateView(PageOne);
