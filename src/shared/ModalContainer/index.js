import React, { PureComponent, Fragment } from 'react';

import RootModal from './modals/Modal';

import * as modals from './modals';

class ModalContainer extends PureComponent {

  state = {
    CurrentModal: null
  }

  destroyModal = () => {
    this.setState({
      CurrentModal: null
    });
  }

  showModal = (id, data) => {
    const ModalComponent = modals[id];

    this.setState({
      CurrentModal: () => (
        <RootModal 
          destroyModal={this.destroyModal} 
          data={data}
          ModalComponent={ModalComponent}
        />
      )
    });
  }

  render() {

    const { CurrentModal } = this.state;

    return (
      <Fragment>
        {CurrentModal && CurrentModal()}
      </Fragment>
    );
  }

}

export default ModalContainer;