//Drawer
let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('#drawer').addEventListener('click', () => drawer.open = true);
