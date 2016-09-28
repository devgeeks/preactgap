import { h, Component } from 'preact';
import animateView from 'react-animated-views';
import { Button } from 'phonegap-topcoat-react';

import './index.less';

class PageTwo extends Component {
  goBack(e) {
    const { pop } = this.props;
    e.preventDefault();
    e.stopPropagation();
    pop();
  }

  render() {
    const { style } = this.props;
    return (
      <div style={ style } className="page pagetwo">
        <Button
          onTouchEnd={ e => this.goBack(e) }
          clickHandler={ e => this.goBack(e) }
          full
        >
          &laquo; Go Back!
        </Button>
      </div>
    );
  }
}

export default animateView(PageTwo);
