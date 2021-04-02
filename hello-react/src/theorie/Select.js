import styles from './Select.module.scss';
import { Component, createRef } from "react";
import classNames from 'classnames';

// class Select extends Component {
//   state = {
//     open: true,
//   };
//   handleClick = () => {};
//   render() {
//     const { open } = this.state;
//     const { items } = this.props;

//     let itemsJsx;

//     if (open) {
//       itemsJsx = (
//         <div className="items">
//           <div className="item">Rouge</div>
//           <div className="item">Vert</div>
//           <div className="item">Bleu</div>
//         </div>
//       );
//     }

//     return (
//       <div className="Select">
//         <div className="selected">Vert</div>
//         {itemsJsx}
//       </div>
//     );
//   }
// }

class Select extends Component {
  constructor({ items = [] }) {
    super();
    this.state = {
      open: false,
      selected: items[0],
    };

    this.hostRef = createRef();
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }
  handleDocumentClick = (event) => {
    // si le click a eu lieu dans le composant Select on ne fait rien
    // (handleToggleOpen, handleSelected uniquement)
    if (this.hostRef.current.contains(event.target)) {
      return;
    }

    this.setState({
      open: false,
    });
  };
  handleToggleOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  handleSelected = (selected) => {
    this.setState({
      open: false,
      selected,
    });
  };
  render() {
    const { open, selected } = this.state;
    const { items = [] } = this.props;

    const itemsJsx = items.map((item) => (
      <div className={classNames(styles.item, {[styles.active]: item === selected})} key={item} onClick={() => this.handleSelected(item)}>
        {item}
      </div>
    ));

    return (
      <div className={styles.host} ref={this.hostRef}>
        <div className={styles.selected} onClick={this.handleToggleOpen}>
          {selected}
        </div>
        {open && <div className={styles.items}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
