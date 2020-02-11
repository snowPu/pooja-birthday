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
            this.animateCurrentImage(this.getImage(index));
            this.animatePreviousImage(this.getImage(previousTab));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2JvdHRvbUJhci9ib3R0b21CYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEc7QUFDcEU7QUFFUDtBQVFuQztJQWFDO1FBVkEsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFPZCxnQkFBVyxHQUFHLElBQUksMERBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFBQSxpQkFFQztRQURBLHdEQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUN0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsNENBQTRDO1lBQzVDLG9FQUFvRTtZQUNwRSx3REFBd0Q7WUFDeEQsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0YsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ2IsSUFBSSxZQUFZLENBQUM7UUFDakIsUUFBUSxLQUFLLEVBQUU7WUFDZCxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDUCxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDUCxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDUCxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDUDtnQkFDQyxNQUFNO1NBQ1A7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLEdBQVE7UUFDM0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRSx1REFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUc7U0FDYixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaURBQW9CLEdBQXBCLFVBQXFCLEdBQVE7UUFDNUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLEtBQUssRUFBRSx1REFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUc7U0FDYixDQUFDO0lBQ0gsQ0FBQztJQXZFNkM7UUFBN0MsK0RBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQWUsd0RBQVU7NERBQUM7SUFHL0I7UUFBdkMsK0RBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQVMsd0RBQVU7c0RBQUM7SUFDbkI7UUFBdkMsK0RBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQVMsd0RBQVU7c0RBQUM7SUFDbkI7UUFBdkMsK0RBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQVMsd0RBQVU7c0RBQUM7SUFDbkI7UUFBdkMsK0RBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQVMsd0RBQVU7c0RBQUM7SUFFakQ7UUFBVCw0REFBTSxFQUFFOzsyREFBMEM7SUFWdkMsa0JBQWtCO1FBTjlCLCtEQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUVyQixtR0FBeUM7O1NBRXpDLENBQUM7O09BQ1csa0JBQWtCLENBMkU5QjtJQUFELHlCQUFDO0NBQUE7QUEzRThCIiwiZmlsZSI6IjAuM2FkY2JhMWZlNDljM2RjMWY5MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkJvdHRvbUJhclwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ib3R0b21CYXIuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ib3R0b21CYXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRAVmlld0NoaWxkKCd0YWJIaWdobGlnaHQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiSGlnaGxpZ2h0OiBFbGVtZW50UmVmO1xyXG5cdHNlbGVjdGVkVGFiOiBudW1iZXIgPSAwO1xyXG5cclxuXHRAVmlld0NoaWxkKCdpbWFnZTEnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW1hZ2UxOiBFbGVtZW50UmVmO1xyXG5cdEBWaWV3Q2hpbGQoJ2ltYWdlMicsIHsgc3RhdGljOiBmYWxzZSB9KSBpbWFnZTI6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCgnaW1hZ2UzJywgeyBzdGF0aWM6IGZhbHNlIH0pIGltYWdlMzogRWxlbWVudFJlZjtcclxuXHRAVmlld0NoaWxkKCdpbWFnZTQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaW1hZ2U0OiBFbGVtZW50UmVmO1xyXG5cclxuXHRAT3V0cHV0KCkgdGFiU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuaW1hZ2UxKTsgfSwgMTAwKTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcblx0XHRsZXQgcHJldmlvdXNUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xyXG5cdFx0aWYgKGluZGV4ICE9IHRoaXMuc2VsZWN0ZWRUYWIpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFRhYiA9IGluZGV4O1xyXG5cdFx0XHQvLyB0aGlzLnRhYkhpZ2hsaWdodC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xyXG5cdFx0XHQvLyBcdHRyYW5zbGF0ZTogeyB4OiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDUsIHk6IDAgfSxcclxuXHRcdFx0Ly8gXHRjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXHJcblx0XHRcdC8vIFx0ZHVyYXRpb246IDMwMFxyXG5cdFx0XHQvLyB9KVxyXG5cdFx0XHR0aGlzLmFuaW1hdGVDdXJyZW50SW1hZ2UodGhpcy5nZXRJbWFnZShpbmRleCkpO1xyXG5cdFx0XHR0aGlzLmFuaW1hdGVQcmV2aW91c0ltYWdlKHRoaXMuZ2V0SW1hZ2UocHJldmlvdXNUYWIpKTtcclxuXHRcdFx0dGhpcy50YWJTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRUYWIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0SW1hZ2UoaW5kZXgpIHtcclxuXHRcdGxldCBjdXJyZW50SW1hZ2U7XHJcblx0XHRzd2l0Y2ggKGluZGV4KSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0Y3VycmVudEltYWdlID0gdGhpcy5pbWFnZTM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlNDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBjdXJyZW50SW1hZ2U7XHJcblx0fVxyXG5cclxuXHRhbmltYXRlQ3VycmVudEltYWdlKGFyZzogYW55KSB7XHJcblx0XHRhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcclxuXHRcdFx0c2NhbGU6IHsgeDogMS4yLCB5OiAxLjIgfSxcclxuXHRcdFx0Y3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG5cdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFuaW1hdGVQcmV2aW91c0ltYWdlKGFyZzogYW55KSB7XHJcblx0XHRhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcclxuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxyXG5cdFx0XHRjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXHJcblx0XHRcdGR1cmF0aW9uOiAzMDBcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=