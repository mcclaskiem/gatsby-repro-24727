export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = (menuIsOpen = false) => ({
  type: TOGGLE_MENU,
  menuIsOpen
});