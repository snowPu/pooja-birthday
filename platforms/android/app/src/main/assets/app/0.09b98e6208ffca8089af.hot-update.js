webpackHotUpdate(0,{

/***/ "./home/bottomBar/bottomBar.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout height=\"60\" verticalAlignment=\"bottom\">\r\n\t<GridLayout columns=\"*, *, *, *\" height=\"60\" backgroundColor=\"#0D0D12\">\r\n\t\t<GridLayout #tabHighlight col=\"0\" backgroundColor=\"#F8A200\"></GridLayout>\r\n\t\t<GridLayout col=\"0\" (tap)=\"selectTab(0)\">\r\n\t\t\t<Image #image1 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"30\" width=\"30\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"1\" (tap)=\"selectTab(1)\">\r\n\t\t\t<Image #image2 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"30\" width=\"30\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"2\" (tap)=\"selectTab(2)\">\r\n\t\t\t<Image #image3 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"30\" width=\"30\"></Image>\r\n\t\t</GridLayout>\r\n\t\t<GridLayout col=\"3\" (tap)=\"selectTab(3)\">\r\n\t\t\t<Image #image4 src=\"{{ '~/assets/images/birthday.png' }}\" height=\"30\" width=\"30\"></Image>\r\n\t\t</GridLayout>\r\n\t</GridLayout>\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1VUFBdVUsa0NBQWtDLGlKQUFpSixrQ0FBa0MsaUpBQWlKLGtDQUFrQyxpSkFBaUosa0NBQWtDLG9HIiwiZmlsZSI6IjAuMDliOThlNjIwOGZmY2E4MDg5YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBoZWlnaHQ9XFxcIjYwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXHJcXG5cXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqLCAqLCAqXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMwRDBEMTJcXFwiPlxcclxcblxcdFxcdDxHcmlkTGF5b3V0ICN0YWJIaWdobGlnaHQgY29sPVxcXCIwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGOEEyMDBcXFwiPjwvR3JpZExheW91dD5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiICh0YXApPVxcXCJzZWxlY3RUYWIoMClcXFwiPlxcclxcblxcdFxcdFxcdDxJbWFnZSAjaW1hZ2UxIHNyYz1cXFwie3sgJ34vYXNzZXRzL2ltYWdlcy9iaXJ0aGRheS5wbmcnIH19XFxcIiBoZWlnaHQ9XFxcIjMwXFxcIiB3aWR0aD1cXFwiMzBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdFxcdDxHcmlkTGF5b3V0IGNvbD1cXFwiMVxcXCIgKHRhcCk9XFxcInNlbGVjdFRhYigxKVxcXCI+XFxyXFxuXFx0XFx0XFx0PEltYWdlICNpbWFnZTIgc3JjPVxcXCJ7eyAnfi9hc3NldHMvaW1hZ2VzL2JpcnRoZGF5LnBuZycgfX1cXFwiIGhlaWdodD1cXFwiMzBcXFwiIHdpZHRoPVxcXCIzMFxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFx0XFx0PEdyaWRMYXlvdXQgY29sPVxcXCIyXFxcIiAodGFwKT1cXFwic2VsZWN0VGFiKDIpXFxcIj5cXHJcXG5cXHRcXHRcXHQ8SW1hZ2UgI2ltYWdlMyBzcmM9XFxcInt7ICd+L2Fzc2V0cy9pbWFnZXMvYmlydGhkYXkucG5nJyB9fVxcXCIgaGVpZ2h0PVxcXCIzMFxcXCIgd2lkdGg9XFxcIjMwXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdDwvR3JpZExheW91dD5cXHJcXG5cXHRcXHQ8R3JpZExheW91dCBjb2w9XFxcIjNcXFwiICh0YXApPVxcXCJzZWxlY3RUYWIoMylcXFwiPlxcclxcblxcdFxcdFxcdDxJbWFnZSAjaW1hZ2U0IHNyYz1cXFwie3sgJ34vYXNzZXRzL2ltYWdlcy9iaXJ0aGRheS5wbmcnIH19XFxcIiBoZWlnaHQ9XFxcIjMwXFxcIiB3aWR0aD1cXFwiMzBcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0PC9HcmlkTGF5b3V0PlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9