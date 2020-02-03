class Modal {

  modalContainer;

  setModalContainerRef = ref => {
    this.modalContainer = ref;
  }
  
  showModal = (id, props) => {
    this.modalContainer.showModal(id, props);
  }

}

export default new Modal();