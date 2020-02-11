webpackHotUpdate(0,{

/***/ "./home/bottomBar/bottomBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarComponent", function() { return BottomBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timer__WEBPACK_IMPORTED_MODULE_2__);



var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent() {
        this.selectedTab = 0;
        this.tabSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BottomBarComponent.prototype.ngOnInit = function () {
    };
    BottomBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(timer__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(function () { _this.animateCurrentImage(_this.image1); }, 100);
    };
    BottomBarComponent.prototype.selectTab = function (index) {
        var previousTab = this.selectedTab;
        if (index != this.selectedTab) {
            this.selectedTab = index;
            // this.tabHighlight.nativeElement.animate({
            // 	translate: { x: index * screen.mainScreen.widthDIPs / 5, y: 0 },
            // 	curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
            // 	duration: 300
            // })
            // this.animateCurrentImage(this.getImage(index));
            // this.animatePreviousImage(this.getImage(previousTab));
            this.tabSelected.emit(this.selectedTab);
        }
    };
    BottomBarComponent.prototype.getImage = function (index) {
        var currentImage;
        switch (index) {
            case 0:
                currentImage = this.image1;
                break;
            case 1:
                currentImage = this.image2;
                break;
            case 2:
                currentImage = this.image3;
                break;
            case 3:
                currentImage = this.image4;
                break;
            default:
                break;
        }
        return currentImage;
    };
    BottomBarComponent.prototype.animateCurrentImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1.2, y: 1.2 },
            curve: ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    BottomBarComponent.prototype.animatePreviousImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1, y: 1 },
            curve: ui_enums__WEBPACK_IMPORTED_MODULE_1__["AnimationCurve"].cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabHighlight', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "tabHighlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image1', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image2', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image3', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image4', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BottomBarComponent.prototype, "image4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BottomBarComponent.prototype, "tabSelected", void 0);
    BottomBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "BottomBar",
            template: __importDefault(__webpack_require__("./home/bottomBar/bottomBar.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/bottomBar/bottomBar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BottomBarComponent);
    return BottomBarComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEc7QUFDcEU7QUFFUDtBQVFuQztJQWFDO1FBVkEsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFPZCxnQkFBVyxHQUFHLElBQUksMERBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFBQSxpQkFFQztRQURBLHdEQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUN0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsNENBQTRDO1lBQzVDLG9FQUFvRTtZQUNwRSx3REFBd0Q7WUFDeEQsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTCxrREFBa0Q7WUFDbEQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztJQUNGLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNiLElBQUksWUFBWSxDQUFDO1FBQ2pCLFFBQVEsS0FBSyxFQUFFO1lBQ2QsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1A7Z0JBQ0MsTUFBTTtTQUNQO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELGdEQUFtQixHQUFuQixVQUFvQixHQUFRO1FBQzNCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixLQUFLLEVBQUUsdURBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixHQUFRO1FBQzVCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNyQixLQUFLLEVBQUUsdURBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2IsQ0FBQztJQUNILENBQUM7SUF2RTZDO1FBQTdDLCtEQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFlLHdEQUFVOzREQUFDO0lBRy9CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBQ25CO1FBQXZDLCtEQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUFTLHdEQUFVO3NEQUFDO0lBRWpEO1FBQVQsNERBQU0sRUFBRTs7MkRBQTBDO0lBVnZDLGtCQUFrQjtRQU45QiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFFckIsbUdBQXlDOztTQUV6QyxDQUFDOztPQUNXLGtCQUFrQixDQTJFOUI7SUFBRCx5QkFBQztDQUFBO0FBM0U4QiIsImZpbGUiOiIwLmQ3YTZhYzI3YzQ2OWZlZDEwOGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSBcInRpbWVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJCb3R0b21CYXJcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tQmFyLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vYm90dG9tQmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm90dG9tQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QFZpZXdDaGlsZCgndGFiSGlnaGxpZ2h0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYkhpZ2hsaWdodDogRWxlbWVudFJlZjtcclxuXHRzZWxlY3RlZFRhYjogbnVtYmVyID0gMDtcclxuXHJcblx0QFZpZXdDaGlsZCgnaW1hZ2UxJywgeyBzdGF0aWM6IGZhbHNlIH0pIGltYWdlMTogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKCdpbWFnZTInLCB7IHN0YXRpYzogZmFsc2UgfSkgaW1hZ2UyOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlMycsIHsgc3RhdGljOiBmYWxzZSB9KSBpbWFnZTM6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCgnaW1hZ2U0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGltYWdlNDogRWxlbWVudFJlZjtcclxuXHJcblx0QE91dHB1dCgpIHRhYlNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYW5pbWF0ZUN1cnJlbnRJbWFnZSh0aGlzLmltYWdlMSk7IH0sIDEwMCk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xyXG5cdFx0bGV0IHByZXZpb3VzVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcclxuXHRcdGlmIChpbmRleCAhPSB0aGlzLnNlbGVjdGVkVGFiKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcclxuXHRcdFx0Ly8gdGhpcy50YWJIaWdobGlnaHQubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcclxuXHRcdFx0Ly8gXHR0cmFuc2xhdGU6IHsgeDogaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyA1LCB5OiAwIH0sXHJcblx0XHRcdC8vIFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG5cdFx0XHQvLyBcdGR1cmF0aW9uOiAzMDBcclxuXHRcdFx0Ly8gfSlcclxuXHRcdFx0Ly8gdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuZ2V0SW1hZ2UoaW5kZXgpKTtcclxuXHRcdFx0Ly8gdGhpcy5hbmltYXRlUHJldmlvdXNJbWFnZSh0aGlzLmdldEltYWdlKHByZXZpb3VzVGFiKSk7XHJcblx0XHRcdHRoaXMudGFiU2VsZWN0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkVGFiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEltYWdlKGluZGV4KSB7XHJcblx0XHRsZXQgY3VycmVudEltYWdlO1xyXG5cdFx0c3dpdGNoIChpbmRleCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Y3VycmVudEltYWdlID0gdGhpcy5pbWFnZTE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UzO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0Y3VycmVudEltYWdlID0gdGhpcy5pbWFnZTQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY3VycmVudEltYWdlO1xyXG5cdH1cclxuXHJcblx0YW5pbWF0ZUN1cnJlbnRJbWFnZShhcmc6IGFueSkge1xyXG5cdFx0YXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XHJcblx0XHRcdHNjYWxlOiB7IHg6IDEuMiwgeTogMS4yIH0sXHJcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcclxuXHRcdFx0ZHVyYXRpb246IDMwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlUHJldmlvdXNJbWFnZShhcmc6IGFueSkge1xyXG5cdFx0YXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XHJcblx0XHRcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcclxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG5cdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9