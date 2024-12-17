export interface IGlobalState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  exitModal: () => void;
}
