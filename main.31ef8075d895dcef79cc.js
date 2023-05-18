/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/chooseButtons.js":
/*!**************************************!*\
  !*** ./src/modules/chooseButtons.js ***!
  \**************************************/
/***/ (() => {

var choose = document.querySelectorAll('.Cart__choose');
var choosePayment = document.querySelectorAll('.Cart__choosePayment');
choose.forEach(function (element, index) {
  element.addEventListener('click', switchButton);
});
function switchButton(event) {
  var targetElement = event.target;
  choose.forEach(function (element, index) {
    element.classList.remove('Cart__activeButton');
  });
  targetElement.classList.add('Cart__activeButton');
}
choosePayment.forEach(function (element, index) {
  element.addEventListener('click', switchButtonPayment);
});
function switchButtonPayment(event) {
  var targetElement = event.target;
  choosePayment.forEach(function (element, index) {
    element.classList.remove('Cart__activeButton');
  });
  targetElement.classList.add('Cart__activeButton');
}

/***/ }),

/***/ "./src/modules/modalHeader.js":
/*!************************************!*\
  !*** ./src/modules/modalHeader.js ***!
  \************************************/
/***/ (() => {

// Найти кнопку, которая будет открывать модальное окно
var btn = document.getElementById("modalOpenBtn");
// Найти модальное окно
var modal = document.getElementById("modalHeader");
// Найти кнопку закрытия модального окна
var span = document.getElementById("modalCloseBtn");
// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
  btn.style.display = "none";
  span.style.display = "block";
}
// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
  btn.style.display = "block";
  span.style.display = "none";
}
btn.onclick = openModal;
span.onclick = closeModal;
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
var btnCart = document.getElementById("ModalCartOpen");
var modalCart = document.getElementById("ModalCart");
function openModalCart() {
  modalCart.style.display = "block";
}
function closeModalCart() {
  modalCart.style.display = "none";
}
if (btnCart !== null) {
  btnCart.onclick = openModalCart;
}
window.onclick = function (event) {
  if (event.target == modalCart) {
    closeModalCart();
  }
};

/***/ }),

/***/ "./src/modules/switchTabs.js":
/*!***********************************!*\
  !*** ./src/modules/switchTabs.js ***!
  \***********************************/
/***/ (() => {

var tabs = document.querySelectorAll('.Card__tab');
var tabContents = document.querySelectorAll('.Card__content');
var tabHrs = document.querySelectorAll('.Card__Hr');

// Обработчик клика по табу
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    // Удаляем класс active у всех табов и контента
    tabs.forEach(function (tab) {
      return tab.classList.remove('active');
    });
    tabContents.forEach(function (content) {
      return content.classList.remove('active');
    });
    tabHrs.forEach(function (content) {
      return content.classList.remove('active');
    });
    // Добавляем класс active только текущему табу и соответствующему контенту
    tab.classList.add('active');
    var tabContent = document.querySelector(".Card__content[data-tab=\"".concat(tab.dataset.tab, "\"]"));
    tabContent.classList.add('active');
    var tabHr = document.querySelector(".Card__Hr[data-tab=\"".concat(tab.dataset.tab, "\"]"));
    tabHr.classList.add('active');
  });
});

/***/ }),

/***/ "./src/modules/telephoneInput.js":
/*!***************************************!*\
  !*** ./src/modules/telephoneInput.js ***!
  \***************************************/
/***/ (() => {

var input = document.getElementById("telephoneInput");
var inp = document.querySelector('#tel');

// Проверяем фокус
if (inp !== null) {
  inp.addEventListener('focus', function (_) {
    // Если там ничего нет или есть, но левое
    if (!/^\+\d*$/.test(inp.value))
      // То вставляем знак плюса как значение
      inp.value = '+7';
  });
  inp.addEventListener('keypress', function (e) {
    // Отменяем ввод не цифр
    if (!/\d/.test(e.key)) e.preventDefault();
  });
}

/***/ }),

/***/ "./src/slick/slick.min.js":
/*!********************************!*\
  !*** ./src/slick/slick.min.js ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (i) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
      s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
      t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
      t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
      e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
      t,
      o = this;
    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
      e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");
        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = !1,
      d = r.$slider.width(),
      a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
      s,
      n,
      r = this,
      l = i(e.currentTarget);
    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;
      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }
      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
      e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
      t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
      e = 0,
      t = 0,
      o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
      t,
      o,
      s,
      n = this,
      r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
      e = this,
      t = 0,
      o = 0,
      s = [];
    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
      t,
      o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
      t = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function (i) {
        return i >= 0 && i < e.slideCount;
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
          t = i(this).attr("data-lazy"),
          o = i(this).attr("data-srcset"),
          s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }
    var t,
      o,
      s,
      n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      o,
      s,
      n,
      r,
      l = this,
      d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
      o,
      s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
      t,
      o,
      s = this,
      n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }
      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
      t,
      o = this,
      s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
      t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;
    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
      t,
      o,
      s,
      n,
      r = this,
      l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
      e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
      t,
      o,
      s,
      n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
      t,
      o,
      s = this;
    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
      o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
      s,
      n,
      r,
      l,
      d = null,
      a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
      e,
      t,
      o,
      s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
      t,
      o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;
      case "move":
        e.swipeMove(i);
        break;
      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
      t,
      o,
      s,
      n,
      r,
      l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
      t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
      t,
      o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (i = 0; i < r; i++) if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    return o;
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PTSans-Bold.woff */ "./src/fonts/PTSans-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PTSans-Bold.woff2 */ "./src/fonts/PTSans-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PTSans-Regular.woff */ "./src/fonts/PTSans-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PTSans-Regular.woff2 */ "./src/fonts/PTSans-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Srbija-Sans.woff */ "./src/fonts/Srbija-Sans.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Srbija-Sans.woff2 */ "./src/fonts/Srbija-Sans.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./slick/ajax-loader.gif */ "./src/slick/ajax-loader.gif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./slick/fonts/slick.eot */ "./src/slick/fonts/slick.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./slick/fonts/slick.woff */ "./src/slick/fonts/slick.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./slick/fonts/slick.ttf */ "./src/slick/fonts/slick.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./slick/fonts/slick.svg */ "./src/slick/fonts/slick.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ServiceBg.png */ "./src/img/ServiceBg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Benefit.png */ "./src/img/Benefit.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/subBannerBg.png */ "./src/img/subBannerBg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cartBg.png */ "./src/img/cartBg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___, { hash: "#slick" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"PTSans-Bold\";\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"PTSans-Regular\";\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"Srbija-Sans\";\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\");\n}\nbody {\n  font-family: \"PTSans-Bold\";\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\np {\n  font-family: \"PTSans-Regular\";\n  color: #373737;\n  font-size: 16px;\n  margin: 0;\n}\n\nh1 {\n  font-family: \"Srbija-Sans\";\n  margin: 0;\n  font-size: 32px;\n  color: #373737;\n}\n\nh2 {\n  font-family: \"Srbija-Sans\";\n  font-size: 40px;\n  margin: 0;\n}\n\nh3 {\n  font-family: \"PTSans-Bold\";\n  color: #373737;\n  margin: 0;\n}\n\nhr {\n  margin: 0;\n}\n\ninput {\n  padding: 0;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1260px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.empty {\n  width: 100%;\n  height: 110px;\n}\n\n.active {\n  display: block !important;\n}\n.headerUp {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n}\n.headerUp h3 {\n  font-size: 24px;\n}\n.headerUp__phoneNumber {\n  cursor: pointer;\n}\n.headerUp__menu {\n  display: flex;\n  justify-content: space-between;\n  width: 35.5%;\n  gap: 10px;\n  font-size: 16px;\n}\n.headerUp__menu p {\n  cursor: pointer;\n}\n.headerUp__button {\n  background-color: #69AEFF;\n  color: #FFFFFF;\n  padding: 8.5px 17px;\n  border-radius: 7px;\n  font-size: 16px;\n  font-family: \"PTSans-Bold\";\n}\n\n.headerCenter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  height: 100px;\n}\n.headerCenter__burger {\n  display: none;\n}\n.headerCenter__close {\n  display: none;\n  margin-right: 2px;\n}\n.headerCenter__rightMenu {\n  display: none;\n}\n.headerCenter__logo {\n  width: 14.2%;\n}\n.headerCenter__logo img {\n  width: 100%;\n}\n.headerCenter__center {\n  position: relative;\n  display: flex;\n  height: 54px;\n  width: 57%;\n}\n.headerCenter__input {\n  outline: none;\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  font-family: \"PTSans-Regular\";\n  width: 100%;\n  padding-left: 170px;\n  background-color: #F6FAFF;\n  color: #373737;\n}\n.headerCenter__input::-webkit-input-placeholder {\n  color: #B6B6B6;\n}\n.headerCenter__input::placeholder {\n  color: #B6B6B6;\n}\n.headerCenter__category {\n  position: absolute;\n  z-index: 1;\n  left: 20px;\n  top: 17.8px;\n  display: flex;\n  gap: 3px;\n}\n.headerCenter hr {\n  position: absolute;\n  z-index: 1;\n  left: 137px;\n  top: 28px;\n  width: 34px;\n  padding: 0;\n  height: 0;\n  border: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  border-top: 1px solid #B6B6B6;\n}\n.headerCenter__search {\n  padding: 11px 4%;\n  background-color: #69AEFF;\n  border-radius: 0px 10px 10px 0px;\n}\n.headerCenter__menu {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 23.5%;\n}\n.headerCenter__item {\n  cursor: pointer;\n  position: relative;\n}\n.headerCenter__item img {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 9px;\n}\n.headerCenter__item svg {\n  display: block;\n  margin: 0 auto;\n  fill: #E3EBEF;\n}\n.headerCenter__item svg:hover {\n  fill: #69AEFF;\n  stroke: #69AEFF;\n}\n.headerCenter__description {\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n}\n.headerCenter__cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -8px;\n  left: 29.5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #F04438;\n}\n.headerCenter__cart p {\n  margin-top: 1px;\n  margin-right: 1px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-family: \"PTSans-Bold\";\n  font-size: 11px;\n  color: #FFFFFF;\n}\n.headerCenter__img {\n  display: block;\n  margin: 0 auto;\n}\n\n.headerCenterBg {\n  width: 100vw;\n  height: 100px;\n  position: absolute;\n  left: 0;\n  top: 60px;\n  z-index: 0;\n  box-shadow: 0px 10px 20px rgba(9, 60, 83, 0.05);\n}\n\n.headerBottom {\n  height: 54px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 810px;\n  margin: 0 auto;\n}\n.headerBottom__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background-color: #F6FAFF;\n}\n\n.headerBottomBg {\n  width: 100vw;\n  height: 54px;\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 160px;\n  background-color: #F6FAFF;\n}\n\n.Modal {\n  display: none;\n  z-index: 5;\n}\n.Modal__input {\n  display: flex !important;\n}\n.Modal__block {\n  display: block !important;\n}\n.Modal__block {\n  position: relative;\n  width: 100%;\n  height: 243px;\n  background-color: #FFFFFF;\n  padding: 30px 24px;\n  display: flex;\n  z-index: 6;\n}\n.Modal input {\n  height: 100%;\n}\n.Modal__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.Modal__menuLeft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 104px;\n}\n.Modal__center {\n  display: flex;\n  justify-content: space-between;\n  height: 24px;\n  text-align: center;\n}\n.Modal__center p {\n  margin: auto 0;\n}\n.Modal__right {\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Modal__right h3 {\n  margin: auto 0;\n}\n.Modal__phone {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  height: 24px;\n}\n.Modal__phnBtn {\n  display: none;\n}\n.Banners {\n  margin-top: 90px;\n  color: #FFFFFF;\n}\n.Banners h2 {\n  font-size: 40px;\n}\n.Banners__grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(2, 0.5fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 32px;\n}\n.Banners__small {\n  position: relative;\n  max-width: 176px;\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n}\n.Banners__large {\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n}\n.Banners__medium {\n  position: relative;\n  max-width: 384px;\n  width: 100%;\n  height: 190px;\n  border-radius: 17px;\n  z-index: -3;\n}\n.Banners__elipseM {\n  width: 100%;\n  height: 190px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -2;\n}\n.Banners__elipseS {\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.Banners__elipseL {\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.Banners__first {\n  text-align: center;\n  background-color: #373737;\n  grid-area: 1/1/2/3;\n}\n.Banners__first h2 {\n  margin-top: 130px;\n}\n.Banners__first img {\n  position: absolute;\n  left: 32px;\n  bottom: 64px;\n  max-width: 100%;\n}\n.Banners__second {\n  background-color: #69AEFF;\n  grid-area: 1/3/2/5;\n}\n.Banners__second h2 {\n  position: absolute;\n  right: 40px;\n  bottom: 20px;\n  z-index: 3;\n}\n.Banners__second__air {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  max-width: 100%;\n}\n.Banners__second__elipseL {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  left: -60px;\n  top: 50px;\n  z-index: 0;\n}\n.Banners__second__elipseR {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  left: 200px;\n  top: -155px;\n  z-index: 0;\n}\n.Banners__third {\n  background-color: #69AEFF;\n  z-index: 1;\n  grid-area: 1/5/2/7;\n}\n.Banners__third h2 {\n  position: absolute;\n  right: 40px;\n  bottom: 20px;\n}\n.Banners__third__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  z-index: -1;\n  left: -21px;\n  top: 56px;\n}\n.Banners__pipe {\n  z-index: -1;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n}\n.Banners__freon {\n  z-index: 0;\n  position: absolute;\n  bottom: 0;\n  left: -50px;\n}\n.Banners__four {\n  background-color: #C894C4;\n  z-index: 1;\n  text-align: center;\n  grid-area: 2/1/3/2;\n}\n.Banners__four h2 {\n  font-size: 20px;\n  margin-top: 12px;\n}\n.Banners__four img {\n  margin-top: 60px;\n}\n.Banners__four__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  position: absolute;\n  left: -113px;\n  top: 77px;\n  z-index: -1;\n  background-color: #BD89B9;\n}\n.Banners__five {\n  background-color: #82D42B;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  grid-area: 2/2/3/3;\n}\n.Banners__five img {\n  margin-top: 44px;\n}\n.Banners__five h2 {\n  font-size: 20px;\n  margin-top: 12px;\n}\n.Banners__five__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  position: absolute;\n  left: -34px;\n  top: -151px;\n  z-index: -1;\n  background-color: #70B428;\n}\n.Banners__six {\n  background-color: #373737;\n  z-index: 1;\n  overflow: hidden;\n  grid-area: 2/3/3/7;\n}\n.Banners__six img {\n  position: absolute;\n  top: 25px;\n  right: 77px;\n  max-width: 100%;\n}\n.Banners__six h2 {\n  width: 524px;\n  padding: 53px 37px;\n  z-index: 4;\n  position: relative;\n}\n.Banners__six span {\n  color: #69AEFF;\n}\n.Banners__six__elipse {\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background-color: #4E4E4E;\n  position: absolute;\n  top: 27px;\n  right: -20px;\n}\n.Banners__mobile {\n  display: none;\n}\n.subHeader {\n  margin-top: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.subHeader__seeAll {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.subHeader__seeAll img {\n  width: 16.68px;\n  height: 8.36px;\n}\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  color: black !important;\n}\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 53px;\n  width: 53px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  padding: 0;\n  border: none;\n  outline: none;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  color: #69AEFF;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 40px;\n  line-height: 1;\n  color: #69AEFF;\n  opacity: #69AEFF;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  right: 53px;\n  bottom: -60px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: 0px;\n  bottom: -60px;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.Service {\n  max-width: 1260px;\n  margin: 0 auto;\n  padding: 0 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  width: 100%;\n  height: 610px;\n  margin-top: 140px;\n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.Service__option {\n  width: 48%;\n  height: 390px;\n  margin-top: 160px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  text-align: center;\n}\n.Service__option img {\n  width: 330px;\n  height: 330px;\n}\n.Service__mobile {\n  display: none;\n}\n.Manafacture {\n  padding-top: 85px;\n  max-width: 1260px;\n  margin: 0 auto;\n}\n.Benefits {\n  margin-top: 200px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 32px;\n  align-items: center;\n  justify-content: center;\n}\n.Benefits__option {\n  max-width: 280px;\n  width: 100%;\n  height: 220px;\n  border-radius: 25px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  text-align: center;\n  align-self: center;\n  justify-self: center;\n}\n.Benefits__option h1 {\n  margin-top: 165px;\n}\n.subBanner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  background-size: 200%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 561px;\n  width: 100vw;\n  margin-top: 60px;\n}\n.subBanner__content {\n  display: flex;\n  gap: 32px;\n}\n.subBanner__banner {\n  width: 592px;\n  height: 457px;\n  margin-top: 24px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  background-color: #FFFFFF;\n}\n.subBanner__left {\n  padding: 80px 56px 20px 56px;\n}\n.subBanner__left h3 {\n  font-size: 16px;\n}\n.subBanner hr {\n  margin: 34px 0;\n  width: 100%;\n  height: 3px;\n  background-color: #69AEFF;\n  border-radius: 6px;\n  border: none;\n}\n.subBanner__description {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  cursor: pointer;\n}\n.subBanner__right {\n  padding: 48px 56px;\n}\n.subBanner__right p {\n  font-size: 12px;\n}\n.subBanner__right input {\n  width: 100%;\n  outline: none;\n  border: none;\n  border-radius: 7px;\n  background-color: #F6FAFF;\n}\n.subBanner__right input::-webkit-input-placeholder {\n  color: #E3EBEF;\n  height: -webkit-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n.subBanner__right input::placeholder {\n  color: #E3EBEF;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.subBanner__email {\n  color: #E3EBEF;\n  margin-top: 20px;\n}\n.subBanner__email span {\n  color: #F04438;\n}\n.subBanner__emailInput {\n  height: 42px;\n  padding: 13px 0px 13px 22px;\n  margin-top: 5px;\n}\n.subBanner__messageInput {\n  height: 100px;\n  padding: 13px 0px 67px 22px;\n  margin-top: 20px;\n}\n.subBanner__button {\n  width: 100%;\n  height: 73px;\n  border-radius: 10px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  margin-top: 10px;\n  font-size: 24px;\n  font-family: \"PTSans-Bold\";\n}\n.subBanner__term {\n  color: #B6B6B6;\n  margin-top: 20px;\n}\n.subBanner__term span {\n  color: #373737;\n}\n.Footer {\n  height: 410px;\n  background-color: #F2FBFF;\n}\n.Footer h3 {\n  font-size: 16px;\n}\n.Footer__content {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n.Footer__left {\n  display: flex;\n  gap: 55px;\n  margin-top: 45px;\n}\n.Footer__center {\n  margin-top: 45px;\n  text-align: center;\n}\n.Footer__email {\n  margin-top: 33px;\n  margin-bottom: 22px;\n}\n.Footer__right {\n  display: flex;\n  text-align: right;\n  gap: 83px;\n  margin-top: 45px;\n}\n.Footer__col {\n  display: flex;\n  flex-direction: column;\n  gap: 42px;\n}\n.Footer__contacts {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 38px;\n  margin-top: 24px;\n}\n.Footer__catalog {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 22px;\n}\n.Footer hr {\n  width: 100%;\n  margin-top: 20px;\n  background-color: #373737;\n}\n.Footer__law {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 45px;\n}\n.Popular {\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n  width: 100%;\n  max-width: 1260px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n.Popular p {\n  font-size: 12px;\n}\n.Popular h3 {\n  font-size: 12px;\n}\n.Popular__item {\n  width: 280px !important;\n}\n.Popular__item {\n  padding: 10px;\n  border-radius: 10px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));\n  background-color: #FFFFFF;\n}\n.Popular__sale {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background-color: rgba(240, 68, 56, 0.89);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 13px;\n  left: 13px;\n}\n.Popular__sale h3 {\n  color: #FFFFFF;\n  font-size: 16px;\n}\n.Popular__img {\n  width: 166px;\n  height: 160px;\n  display: block;\n  margin: 0 auto;\n}\n.Popular__stars {\n  display: flex;\n  gap: 3px;\n  margin-top: 14px;\n}\n.Popular__price {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 8px;\n  position: relative;\n}\n.Popular h4 {\n  margin-top: 8px;\n}\n.Popular h4 span {\n  font-family: \"PTSans-Bold\";\n}\n.Popular__oldprice {\n  font-size: 20px;\n  height: 20px;\n}\n.Popular h6 {\n  margin-top: 4px;\n}\n.Popular__newprice {\n  position: absolute;\n  color: #B6B6B6;\n  font-size: 14px;\n  text-decoration: line-through;\n  top: -7px;\n  left: 44px;\n}\n.Popular__menu {\n  display: flex;\n  gap: 20px;\n}\n.Popular__button {\n  color: #FFFFFF;\n  width: 260px;\n  height: 73px;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n  margin-top: 14px;\n}\n.Popular__character {\n  width: 100%;\n}\n.Popular__character::after {\n  content: \"..................................................................................................................................................................................................................................................................................................\";\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n}\n.Popular__character p span:first-of-type {\n  float: left;\n  margin-right: 3px;\n}\n.Popular__character p span:last-of-type {\n  float: right;\n  margin-left: 3px;\n}\n.Cart {\n  position: relative;\n}\n.Cart__background {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "), linear-gradient(270deg, #6978FF 0%, rgba(88, 121, 207, 0.995104) 48.96%, rgba(180, 105, 255, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.Cart__content {\n  position: relative;\n  z-index: 1;\n}\n.Cart h2 {\n  color: #FFFFFF;\n  padding-top: 58px;\n}\n.Cart__back {\n  color: #FFFFFF;\n}\n.Cart__backLink {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 17px;\n}\n.Cart__rotate {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.Cart__character {\n  width: 100%;\n  height: 465px;\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 50px 56px;\n}\n.Cart__items {\n  max-width: 528px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n}\n.Cart__itemFlex {\n  display: flex;\n  max-width: 528px;\n  gap: 9px;\n}\n.Cart__itemFlex img {\n  width: 130px;\n  height: 100px;\n}\n.Cart__itemFlex h4 {\n  margin-top: 9px;\n  font-size: 12px;\n  font-family: \"PTSans-Regular\";\n}\n.Cart__itemFlex h6 {\n  font-size: 12px;\n  font-family: \"PTSans-Bold\";\n}\n.Cart__description {\n  width: 100%;\n}\n.Cart__row {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 11px;\n}\n.Cart__montage {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.Cart__montage input {\n  cursor: pointer;\n  background-color: #F6FAFF;\n  width: 23px;\n  height: 23px;\n  border-radius: 5px;\n  color: #F6FAFF;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.Cart__montage input:checked {\n  z-index: 1;\n  background-color: #69AEFF;\n}\n.Cart__montage label {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"PTSans-regular\";\n  font-size: 16px;\n}\n.Cart__count {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.Cart__count button {\n  background-color: #FFFFFF;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Cart__count button img {\n  width: 7px;\n  height: 7px;\n}\n.Cart__delete {\n  margin-top: 11px;\n  text-align: right;\n  color: #B6B6B6;\n}\n.Cart__price {\n  width: 460px;\n}\n.Cart__price h6 {\n  margin-top: 30px;\n}\n.Cart__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Cart__head img {\n  width: 27px;\n  height: 29px;\n}\n.Cart__sum {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Cart__sum h3 {\n  font-size: 24px;\n  margin-top: 4px;\n}\n.Cart__sum p {\n  margin-top: 8px;\n}\n.Cart__sum span {\n  color: #82D42B;\n  margin-top: 8px;\n}\n.Cart__input {\n  position: relative;\n  margin-top: 32px;\n}\n.Cart__input input {\n  width: 100%;\n  height: 51px;\n  border-radius: 10px;\n  background-color: #F6FAFF;\n  outline: none;\n  border: none;\n  padding-left: 22px;\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n}\n.Cart__input input::-webkit-input-placeholder {\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n  color: #B6B6B6;\n}\n.Cart__input input::placeholder {\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n  color: #B6B6B6;\n}\n.Cart__input button {\n  color: #69AEFF;\n  border-radius: none;\n  background-color: #F6FAFF;\n  position: absolute;\n  top: 18px;\n  right: 22px;\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n}\n.Cart__button {\n  margin-top: 12px;\n  width: 100%;\n  height: 73px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-bold\";\n  font-size: 24px;\n}\n.Cart__popup {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  z-index: 7;\n  width: 100vw;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n}\n.Cart__popupContent {\n  position: absolute;\n  top: 20%;\n  left: calc(50% - 325px);\n  max-width: 650px;\n  height: auto;\n  padding: 50px 56px;\n  background: #FFFFFF;\n  border-radius: 25px;\n  text-align: center;\n}\n.Cart__popupContent h1 {\n  margin-top: 26px;\n}\n.Cart__popupContent p {\n  margin-top: 10px;\n}\n.Cart__details {\n  font-family: \"PTSans-Bold\";\n}\n.Cart__closePopup {\n  width: 100%;\n  height: 60px;\n  margin-top: 26px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  font-size: 16px;\n  background: #69AEFF;\n  border-radius: 10px;\n}\n.Cart__Mobile {\n  display: none;\n}\n.Favorite {\n  position: relative;\n}\n.Favorite__background {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "), linear-gradient(270deg, #7E69FF 0%, rgba(207, 88, 160, 0.995104) 48.96%, rgba(255, 105, 159, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.Favorite__content {\n  position: relative;\n  z-index: 1;\n}\n.Favorite h2 {\n  color: #FFFFFF;\n  padding-top: 58px;\n}\n.Favorite__back {\n  color: #FFFFFF;\n}\n.Favorite__backLink {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 17px;\n}\n.Favorite svg {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.Favorite__character {\n  width: 100%;\n  height: 435px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 0 47px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Favorite__character h2 {\n  color: #E3EBEF;\n  padding: 0;\n}\n.Cart__characterActive {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 50px 56px;\n}\n.Cart__itemsActive {\n  max-width: 528px;\n  width: 100%;\n}\n.Cart__itemsActive p {\n  font-size: 12px;\n  color: #B6B6B6;\n}\n.Cart__itemsActive p span {\n  color: #F04438;\n}\n.Cart__name {\n  margin-top: 30px;\n}\n.Cart__email {\n  margin-top: 20px;\n}\n.Cart__nameInput {\n  width: 100%;\n  height: 42px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 12px 22px;\n}\n.Cart__nameInput::-webkit-input-placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__nameInput::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__nameInput:focus {\n  border: 1px solid #373737;\n}\n.Cart__flexInput {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.Cart__flexInput input {\n  width: 100%;\n  height: 42px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 12px 22px;\n}\n.Cart__flexInput input::-webkit-input-placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__flexInput input::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__flexInput input:focus {\n  border: 1px solid #373737;\n}\n.Cart__chooseHeader {\n  margin-top: 40px;\n}\n.Cart__flexButton {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  max-width: 455px;\n  width: 100%;\n  margin-top: 30px;\n}\n.Cart__choose {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\n  background-color: #FFFFFF;\n  border-radius: 7px;\n  width: 100%;\n  height: 38px;\n}\n.Cart__full {\n  width: 100%;\n}\n.Cart__nameFirst {\n  margin-top: 27px;\n}\n.Cart__nameSecond {\n  margin-top: 6px;\n}\n.Cart textarea {\n  resize: none;\n  width: 100%;\n  height: 82px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  color: #373737;\n  margin-top: 5px;\n  padding: 5px 22px;\n}\n.Cart textarea:focus {\n  border: 1px solid #373737;\n}\n.Cart__payment {\n  margin-top: 50px;\n}\n.Cart__choosePayment {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\n  background-color: #FFFFFF;\n  border-radius: 7px;\n  width: 100%;\n  height: 38px;\n}\n.Cart__gridButton {\n  max-width: 400px;\n  width: 100%;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 8px;\n  grid-row-gap: 10px;\n}\n.Cart__activeButton {\n  background-color: #69AEFF;\n  color: #FFFFFF;\n}\n.Cart__priceActive {\n  max-width: 464px;\n  width: 100%;\n}\n.Cart__privacy {\n  margin-top: 12px;\n  color: #B6B6B6;\n  max-width: 390px;\n  width: 100%;\n}\n.Cart__privacy span {\n  color: #373737;\n}\n\n.emptyCartActive {\n  height: 40px;\n}\n.Card {\n  position: relative;\n}\n.Card__background {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "), linear-gradient(270deg, #69AEFF 0%, rgba(182, 88, 207, 0.995104) 48.96%, rgba(255, 159, 105, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.Card__flex {\n  display: flex;\n  gap: 15px;\n  padding-top: 60px;\n}\n.Card__flex a {\n  color: #FFFFFF;\n  font-family: \"PTSans-Regular\";\n}\n.Card__flex p {\n  color: #FFFFFF;\n}\n.Card__header {\n  color: #FFFFFF;\n  margin-top: 60px;\n}\n.Card__subheader {\n  margin-top: 6px;\n  color: #FFFFFF;\n}\n.Card__card {\n  width: 100%;\n  height: 435px;\n  background-color: #FFFFFF;\n  border-radius: 25px;\n  margin-top: 32px;\n  padding: 51px 56px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  display: flex;\n  justify-content: space-between;\n}\n.Card__left {\n  display: flex;\n  justify-content: space-between;\n  max-width: 496px;\n  width: 100%;\n}\n.Card__subImg {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 10px;\n}\n.Card__subImg img {\n  width: 110px;\n  height: 100px;\n}\n.Card__mainImg {\n  width: 348px;\n  height: 334px;\n}\n.Card__right {\n  max-width: 496px;\n  width: 100%;\n}\n.Card__variants {\n  display: flex;\n  justify-content: space-between;\n  max-width: 213px;\n  width: 100%;\n  margin-top: 23px;\n}\n.Card__variant {\n  position: relative;\n}\n.Card__variant input {\n  width: 35px;\n  height: 35px;\n  border-radius: 7px;\n  background-color: #F6FAFF;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.Card__variant input:checked {\n  border: 1px solid #373737;\n}\n.Card__variant label {\n  position: absolute;\n  top: 7.5px;\n  left: 8.5px;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n}\n.Card__characters {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 18px;\n}\n.Card__character {\n  width: 100%;\n}\n.Card__character::after {\n  content: \"..................................................................................................................................................................................................................................................................................................\";\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"PTSans-Regular\";\n}\n.Card__character p span:first-of-type {\n  float: left;\n  margin-right: 3px;\n}\n.Card__character p span:last-of-type {\n  float: right;\n  margin-left: 3px;\n}\n.Card__price {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.Card__discount {\n  text-decoration: line-through;\n  font-size: 24px;\n  color: #E3EBEF;\n}\n.Card__priceFlexLeft {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.Card__priceFlexRight {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.Card__cartButton {\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  width: 100%;\n  height: 72px;\n}\n.Card__service {\n  width: 100%;\n  background-color: #FFFFFF;\n  height: 230px;\n  padding: 50px 56px;\n  border-radius: 25px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 20px;\n}\n.Card__services {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-top: 20px;\n}\n.Card__options {\n  display: flex;\n  gap: 10px;\n}\n.Card__checkbox {\n  position: relative;\n}\n.Card__checkbox input {\n  display: none;\n}\n.Card__checkbox input:checked + label {\n  color: #FFFFFF;\n  background-color: #69AEFF;\n}\n.Card__checkbox input:checked + label span {\n  background-color: rgba(255, 255, 255, 0.56);\n}\n.Card__checkbox label {\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n  padding: 6px 10px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 6px rgba(63, 104, 153, 0.13);\n  border-radius: 6px;\n}\n.Card__checkbox label span {\n  background-color: #E3EBEF;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.06);\n  border-radius: 3px;\n  font-family: \"PTSans-Bold\";\n  padding: 0 5px;\n}\n.Card__tabs {\n  max-width: 870px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n.Card__tab {\n  cursor: pointer;\n}\n.Card__tab hr {\n  display: none;\n  margin: 0 auto;\n  margin-top: 6px;\n  max-width: 44px;\n  border: 2px solid #69AEFF;\n  border-radius: 8px;\n}\n.Card__content {\n  display: none;\n}\n\n.Card__description {\n  display: none;\n  margin-top: 32px;\n  margin-bottom: 40px;\n  width: 100%;\n  min-height: 555px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 88px 62px;\n  line-height: 21px;\n}\n\n.Card__feature {\n  width: 100%;\n  min-height: 230px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 50px 56px;\n  margin-top: 32px;\n}\n.Card__featureMargin {\n  margin-top: 60px !important;\n}\n.Card__descr {\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.Card__featureLast {\n  margin-bottom: 40px;\n}\n\n.Card__sendFeedback {\n  margin-top: 32px;\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n}\n.Card__feedback {\n  width: 100%;\n  height: auto;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 50px 56px 68px 56px;\n  margin-top: 40px;\n}\n.Card__user {\n  display: flex;\n  align-items: center;\n  gap: 19px;\n}\n.Card__userPhoto {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  background-color: #D9D9D9;\n}\n.Card__userInfo {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.Card__userRate {\n  display: flex;\n  gap: 3px;\n  margin-top: 18px;\n}\n.Card__feedbackContent {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.Card__feedbackContent p {\n  margin-top: 14px;\n}\n\n.Card__userQuestion {\n  margin-top: 14px;\n}\n.Card__response {\n  font-size: 12px;\n  color: #B6B6B6;\n  margin-top: 14px;\n}\n.Card__userResponse {\n  padding-left: 38px;\n  margin-top: 20px;\n}\n.Card__userName span {\n  color: #B6B6B6;\n}\n.Card textarea {\n  resize: none;\n  width: 100%;\n  height: 117px;\n  background-color: #F6FAFF;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n.Card textarea:focus {\n  border: 1px solid #373737;\n}\n.Card textarea::-webkit-input-placeholder {\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #B6B6B6;\n}\n.Card textarea::placeholder {\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #B6B6B6;\n}\n.Card__sendButtons {\n  margin-top: 26px;\n  display: flex;\n  justify-content: space-between;\n  max-width: 556px;\n  margin-left: auto;\n}\n.Card__cancel {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  border: 2px solid #B6B6B6;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  font-family: \"PTSans-Regular\";\n  font-size: 24px;\n  color: #B6B6B6;\n}\n.Card__send {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-Regular\";\n  font-size: 24px;\n  color: #FFFFFF;\n}\n\n.Card__docs {\n  width: 100%;\n  height: auto;\n  padding: 50px 56px;\n  margin-top: 60px;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 34px;\n}\n.Card__docElement {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.Card__docElement img {\n  width: 48px;\n  height: 48px;\n}\n\n.Review__flex {\n  display: flex;\n  gap: 15px;\n  padding-top: 60px;\n}\n.Review__flex a {\n  color: #373737;\n  font-family: \"PTSans-Regular\";\n}\n.Review__flex p {\n  color: #373737;\n}\n.Review h2 {\n  color: #373737;\n}\n.Review__header {\n  margin-top: 60px;\n}\n.Review__character {\n  width: 100%;\n  height: auto;\n  padding: 50px 56px;\n  margin-top: 60px;\n  margin-bottom: 40px;\n  background: #FFFFFF;\n  border-radius: 25px;\n  -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n          filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n}\n.Review__content {\n  margin-top: 88px;\n  display: flex;\n  flex-direction: column;\n  gap: 27px;\n}\n.Review input {\n  width: 100%;\n  height: 62px;\n  background-color: #F6FAFF;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  margin-top: 26px;\n  padding: 20px;\n}\n.Review input::-webkit-input-placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 16px;\n}\n.Review input::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 16px;\n}\n.Review input:focus {\n  border: 1px solid #373737;\n}\n.Review textarea {\n  resize: none;\n  width: 100%;\n  height: 170px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  color: #373737;\n  margin-top: 26px;\n  padding: 20px;\n}\n.Review textarea:focus {\n  border: 1px solid #373737;\n}\n.Review__add {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  font-size: 24px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  background-color: #69AEFF;\n  border-radius: 10px;\n  margin-top: 50px;\n}\n.Review__policy {\n  color: #B6B6B6;\n  margin-top: 26px;\n}\n.Review__policy span {\n  color: #373737;\n}\n@media screen and (max-width: 900px){\n  .empty {\n    height: 35px;\n  }\n  .Cart__background {\n    height: 208px;\n  }\n  .Cart h2 {\n    padding-top: 20px;\n    font-size: 24px;\n  }\n  .Cart__backLink {\n    margin-top: 7px;\n  }\n  .Cart__character {\n    padding: 0;\n    margin-top: 18px;\n    flex-direction: column;\n    gap: 25px;\n    height: auto;\n    -webkit-filter: none;\n            filter: none;\n    background: none;\n  }\n  .Cart__items {\n    background-color: #FFFFFF;\n    max-width: 100%;\n    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    padding: 40px 96px;\n  }\n  .Cart__itemFlex {\n    max-width: 100%;\n  }\n  .Cart__price {\n    background-color: #FFFFFF;\n    max-width: 100%;\n    width: 100%;\n    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    padding: 45px 96px 40px 96px;\n  }\n  .Cart__price h1 {\n    font-size: 24px;\n  }\n  .Cart__price h3 {\n    font-size: 20px;\n  }\n  .Cart__characterActive {\n    flex-direction: column;\n    background: none;\n    -webkit-filter: none;\n            filter: none;\n    padding: 0;\n  }\n  .Cart__itemsActive {\n    background-color: #FFFFFF;\n    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    max-width: 100%;\n    width: 100%;\n    padding: 40px 96px;\n  }\n  .Cart__itemsActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive {\n    background-color: #FFFFFF;\n    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    max-width: 100%;\n    width: 100%;\n    padding: 40px 96px;\n  }\n  .Cart__priceActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive h6 {\n    margin-top: 30px;\n  }\n  .Cart__priceActive button {\n    margin-top: 30px;\n  }\n  .Cart__privacy {\n    max-width: 100%;\n    margin-top: 10px;\n  }\n  .emptyCartActive {\n    height: 25px;\n  }\n}\n@media screen and (max-width: 1140px){\n  .headerCenter__menu {\n    gap: 5px;\n  }\n}\n@media screen and (max-width: 960px){\n  .headerUp h5 {\n    font-size: 18px;\n  }\n  .headerCenter__center {\n    width: 50%;\n  }\n  .headerCenter__input {\n    padding-left: 150px;\n  }\n  .headerCenter hr {\n    left: 122px;\n  }\n  .headerCenter__menu {\n    width: 220px;\n  }\n  .Banners__freon {\n    max-width: 190px;\n  }\n  .Banners__pipe {\n    max-width: 140px;\n  }\n  .Service h1 {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 800px){\n  .headerUp__menu {\n    width: 37%;\n  }\n}\n@media screen and (max-width: 768px){\n  .headerUp {\n    display: none;\n  }\n  .headerCenter__center {\n    display: none;\n    width: 100%;\n  }\n  .headerCenter__menu {\n    display: none;\n  }\n  .headerCenter__burger {\n    display: block;\n  }\n  .headerCenter__rightMenu {\n    display: block;\n    display: flex;\n    gap: 32px;\n  }\n  .headerCenter__cart {\n    left: 17.5px;\n  }\n  .headerCenter__logo {\n    width: 172px;\n  }\n  .headerCenter__item {\n    display: flex;\n    gap: 25px;\n    align-items: center;\n  }\n  .headerCenter__item a {\n    font-size: 16px;\n  }\n  .headerCenter__img img {\n    margin: auto 0;\n  }\n  .headerUp__menu {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    height: 104px;\n    width: 29.5%;\n  }\n  .headerCenterBg {\n    top: 0;\n  }\n  .headerBottomBg {\n    top: 100px;\n  }\n  .subHeader {\n    margin-top: 40px;\n  }\n  .subHeader h1 {\n    font-size: 24px;\n  }\n  .subHeader p {\n    font-size: 16px;\n  }\n  .Service {\n    margin-top: 40px;\n    height: 360px;\n    gap: 6px;\n  }\n  .Service h1 {\n    font-size: 24px;\n    margin-top: -18px;\n  }\n  .Service__option {\n    margin-top: 96px;\n    height: 230px;\n  }\n  .Service__option img {\n    width: 210px;\n    height: 210px;\n  }\n  .Manafacture {\n    padding-top: 10px;\n  }\n  .Footer p {\n    font-size: 12px;\n  }\n  .Footer__left {\n    flex-direction: column;\n    gap: 17px;\n  }\n  .Footer__right {\n    flex-direction: column;\n    gap: 17px;\n  }\n  .Footer__col {\n    gap: 17px;\n    text-align: center;\n  }\n  .Footer__content {\n    max-width: 511px;\n  }\n  .Footer__email {\n    margin-top: 28px;\n    margin-bottom: 16px;\n  }\n  .Footer__contacts {\n    margin-top: -13px;\n  }\n  .Footer__catalog {\n    margin-top: 30px;\n    gap: 3px;\n    max-width: 715px;\n    justify-content: space-between;\n  }\n  .Footer hr {\n    margin: 0 auto;\n    margin-top: 15px;\n    max-width: 481px;\n  }\n  .Footer__law {\n    margin: 0 auto;\n    max-width: 570px;\n    margin-top: 47px;\n  }\n  .Favorite__background {\n    height: 208px;\n  }\n  .Favorite__backLink {\n    margin-top: 7px;\n  }\n  .Favorite h2 {\n    padding-top: 20px;\n    font-size: 24px;\n  }\n  .Favorite__character {\n    height: 253px;\n    margin-top: 18px;\n  }\n  .Favorite__character h2 {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 640px){\n  .Modal__block {\n    padding: 0;\n    padding-top: 29px;\n  }\n  .headerUp__menu {\n    width: 155px;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 530px){\n  .headerBottom p {\n    font-size: 12px;\n  }\n  .headerBottom__item {\n    gap: 8px;\n  }\n  .Modal p {\n    font-size: 12px;\n  }\n  .Modal a {\n    font-size: 12px;\n  }\n  .Modal h3 {\n    font-size: 16px;\n  }\n  .headerCenter__center {\n    height: 41px;\n  }\n  .headerCenter__center input {\n    padding-left: 130px;\n  }\n  .headerCenter__center input::-webkit-input-placeholder {\n    font-size: 12px;\n  }\n  .headerCenter__center input::placeholder {\n    font-size: 12px;\n  }\n  .headerCenter__category {\n    top: 13.8px;\n  }\n  .headerCenter hr {\n    width: 25px;\n    top: 20px;\n    left: 107px;\n  }\n  .headerCenter__search {\n    padding: 0 4%;\n  }\n  .headerCenter__search img {\n    width: 23px;\n    height: 23px;\n  }\n  .headerUp__menu {\n    width: 27%;\n  }\n}\n@media screen and (max-width: 480px){\n  .Modal__right {\n    display: none;\n  }\n  .Modal__phnBtn {\n    display: block;\n    margin-top: 16px;\n  }\n  .Modal__phone {\n    justify-content: center;\n  }\n  .headerUp__button {\n    margin-top: 20px;\n    width: 100%;\n    height: 46px;\n  }\n  .headerUp__menu {\n    width: 55%;\n  }\n  .headerCenter__rightMenu {\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 360px){\n  .headerCenter__logo {\n    width: 129px;\n    height: 40.45px;\n  }\n  .headerBottom {\n    height: 65px;\n  }\n  .headerBottom__item {\n    flex-direction: column;\n  }\n  .headerBottomBg {\n    height: 65px;\n  }\n  .Modal__block {\n    padding-top: 10px;\n  }\n  .Modal__bottom {\n    margin-top: 25px;\n  }\n  .Modal__menuLeft {\n    height: 82px;\n  }\n  .headerUp__menu {\n    height: 82px;\n  }\n  .Manafacture {\n    padding-top: 18px;\n  }\n  .Favorite h2 {\n    font-size: 20px;\n    padding-top: 25px;\n  }\n  .Favorite__background {\n    height: 258px;\n  }\n  .Favorite__character {\n    margin-top: 15px;\n  }\n}\n@media screen and (max-width: 1160px){\n  .Banners__six img {\n    right: 3%;\n  }\n  .Banners__six__elipse {\n    right: -10%;\n  }\n}\n@media screen and (max-width: 1030px){\n  .Banners__first img {\n    left: 10px;\n  }\n  .Banners__six img {\n    right: 3%;\n  }\n  .Banners__six__elipse {\n    right: -10%;\n  }\n  .Banners h2 {\n    font-size: 32px;\n  }\n  .Banners__four h2 {\n    font-size: 18px;\n  }\n  .Banners__five h2 {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 850px){\n  .Banners {\n    margin-top: 60px;\n  }\n  .Banners__grid {\n    grid-row-gap: 16px;\n  }\n  .Banners__small {\n    height: 144px;\n    max-width: 120px;\n  }\n  .Banners__medium {\n    height: 115px;\n  }\n  .Banners__large {\n    height: 144px;\n  }\n  .Banners h2 {\n    font-size: 24px;\n  }\n  .Banners__first img {\n    left: 20px;\n    bottom: 38px;\n  }\n  .Banners__first h2 {\n    margin-top: 72px;\n  }\n  .Banners__elipseM {\n    height: 115px;\n  }\n  .Banners__second__elipseL {\n    width: 146px;\n    height: 146px;\n    left: -35px;\n    top: 25px;\n  }\n  .Banners__second__elipseR {\n    width: 146px;\n    height: 146px;\n    left: 118px;\n    top: -80px;\n  }\n  .Banners__second h2 {\n    right: 22px;\n    bottom: 12px;\n  }\n  .Banners__third__elipse {\n    width: 146px;\n    height: 146px;\n    left: -13px;\n    top: 33px;\n  }\n  .Banners__third h2 {\n    bottom: 12px;\n    right: 20px;\n  }\n  .Banners__freon {\n    max-width: 140px;\n    left: -15px;\n  }\n  .Banners__pipe {\n    max-width: 120px;\n  }\n  .Banners__four img {\n    margin-top: 36px;\n    max-width: 55px;\n  }\n  .Banners__four h2 {\n    font-size: 12px;\n  }\n  .Banners__four__elipse {\n    width: 140px;\n    height: 140px;\n    top: 46px;\n    left: -58px;\n  }\n  .Banners__elipseS {\n    height: 144px;\n  }\n  .Banners__five img {\n    margin-top: 30px;\n    max-width: 63px;\n  }\n  .Banners__five h2 {\n    font-size: 12px;\n    max-width: 80px;\n    margin: 0 auto;\n    margin-top: 2px;\n  }\n  .Banners__five__elipse {\n    width: 140px;\n    height: 140px;\n    top: -80px;\n    left: -14px;\n  }\n  .Banners__six img {\n    max-width: 140px;\n    top: 5px;\n    right: 30px;\n  }\n  .Banners__six h2 {\n    max-width: 300px;\n    padding: 0;\n    padding-top: 31px;\n    padding-left: 22px;\n  }\n  .Banners__six__elipse {\n    width: 188px;\n    height: 188px;\n    top: 16px;\n    right: -12px;\n  }\n  .Banners__elipseL {\n    height: 144px;\n  }\n}\n@media screen and (max-width: 685px){\n  .Banners__freon {\n    left: -35px;\n  }\n  .Banners__pipe {\n    max-width: 120px;\n    left: 0;\n  }\n  .Banners__six img {\n    right: 10px;\n  }\n  .Banners__six__elipse {\n    right: -32px;\n  }\n}\n@media screen and (max-width: 600px){\n  .Banners__grid {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 13px;\n    grid-row-gap: 16px;\n  }\n  .Banners__small {\n    height: 115px;\n  }\n  .Banners__large {\n    height: 115px;\n  }\n  .Banners__first {\n    grid-area: 1/1/2/3;\n  }\n  .Banners__second {\n    grid-area: 1/3/2/5;\n  }\n  .Banners__third {\n    grid-area: 2/2/3/4;\n  }\n  .Banners__four {\n    grid-area: 2/1/3/2;\n  }\n  .Banners__five {\n    grid-area: 2/4/3/5;\n  }\n  .Banners__six {\n    grid-area: 3/1/4/5;\n  }\n  .Banners__freon {\n    max-width: 120px;\n    left: -20px;\n  }\n  .Banners__pipe {\n    max-width: 110px;\n    left: 6px;\n  }\n  .Banners__four img {\n    margin-top: 20px;\n    max-width: 40px;\n  }\n  .Banners__five img {\n    margin-top: 12px;\n    max-width: 50px;\n  }\n  .Banners__five h2 {\n    margin-top: 4px;\n  }\n  .Banners__elipseS {\n    height: 100%;\n  }\n  .Banners__six img {\n    max-width: 120px;\n    top: 5px;\n    right: 40px;\n  }\n  .Banners__six h2 {\n    padding-top: 16px;\n    padding-left: 22px;\n  }\n  .Banners__six__elipse {\n    top: 10px;\n  }\n  .Banners__elipseL {\n    height: 100%;\n  }\n  .Favorite__character {\n    height: 282px;\n  }\n  .Favorite__character h2 {\n    font-size: 24px;\n  }\n  .Cart__itemsActive {\n    padding: 40px;\n  }\n  .Cart__priceActive {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 450px){\n  .Banners {\n    margin-top: 43px;\n  }\n  .Banners__small {\n    height: 78px;\n  }\n  .Banners__medium {\n    height: 78px;\n  }\n  .Banners__large {\n    height: 78px;\n  }\n  .Banners h2 {\n    font-size: 16px;\n  }\n  .Banners__first img {\n    left: 13px;\n    bottom: 25px;\n  }\n  .Banners__first h2 {\n    margin-top: 50px;\n  }\n  .Banners__elipseM {\n    height: 100%;\n  }\n  .Banners__second__elipseL {\n    width: 100px;\n    height: 100px;\n    left: -10px;\n    top: 15px;\n  }\n  .Banners__second__elipseR {\n    width: 100px;\n    height: 100px;\n    left: 80px;\n    top: -60px;\n  }\n  .Banners__second h2 {\n    right: 15px;\n    bottom: 8px;\n  }\n  .Banners__third__elipse {\n    width: 100px;\n    height: 100px;\n    left: -9px;\n    top: 22px;\n  }\n  .Banners__third h2 {\n    bottom: 8px;\n    right: 15px;\n  }\n  .Banners__freon {\n    max-width: 90px;\n    left: -15px;\n  }\n  .Banners__pipe {\n    max-width: 80px;\n  }\n  .Banners__four img {\n    margin-top: 10px;\n    max-width: 38px;\n  }\n  .Banners__four h2 {\n    font-size: 8px;\n    margin-top: 2px;\n  }\n  .Banners__four__elipse {\n    width: 100px;\n    height: 100px;\n    top: 12px;\n    left: -40px;\n  }\n  .Banners__five img {\n    margin-top: 6px;\n    max-width: 38px;\n  }\n  .Banners__five h2 {\n    font-size: 8px;\n    max-width: 45px;\n    margin-top: 0px;\n  }\n  .Banners__five__elipse {\n    width: 100px;\n    height: 100px;\n    top: -80px;\n    left: -10px;\n  }\n  .Banners__six img {\n    max-width: 80px;\n    top: 0px;\n    right: 31px;\n  }\n  .Banners__six h2 {\n    max-width: 190px;\n    padding-top: 14px;\n    padding-left: 15px;\n  }\n  .Banners__six__elipse {\n    width: 130px;\n    height: 130px;\n    top: 5px;\n    right: -7px;\n  }\n  .Banners__elipseL {\n    height: 144px;\n  }\n  .Footer__left p {\n    text-align: left;\n  }\n  .Footer__center {\n    margin-top: 60px !important;\n  }\n  .Footer__center img {\n    width: 108px;\n    height: 34px;\n  }\n  .Footer__center h3 {\n    font-size: 12px;\n  }\n  .Footer__email {\n    margin-top: 16px;\n  }\n  .Footer__right p {\n    text-align: right;\n  }\n  .Footer__contacts {\n    gap: 12px;\n  }\n}\n@media screen and (max-width: 380px){\n  .subHeader {\n    margin-top: 20px;\n  }\n  .subHeader h1 {\n    font-size: 20px;\n  }\n  .subHeader p {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 720px){\n  .Service h1 {\n    font-size: 19px;\n  }\n}\n@media screen and (max-width: 580px){\n  .Service {\n    padding: 0;\n    margin-top: 135px;\n    flex-direction: column;\n    width: 100%;\n    height: 250px;\n    justify-content: center;\n    align-items: center;\n    gap: 18px;\n    margin-bottom: 150px;\n  }\n  .Service__desctop {\n    display: none;\n  }\n  .Service__mobile {\n    display: block;\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n  }\n  .Service__option {\n    margin-top: 0;\n    width: 328px;\n    height: 220px;\n  }\n  .Service__option img {\n    width: 190px;\n    height: 190px;\n  }\n  .Service__option1 {\n    order: 2;\n  }\n  .Service__option2 {\n    order: 1;\n  }\n  .Service h1 {\n    margin-top: -5px;\n    padding-bottom: 15px;\n  }\n}\n@media screen and (max-width: 1080px){\n  .Benefits {\n    margin-top: 90px;\n    grid-template-columns: 0.25fr 0.25fr;\n    grid-row-gap: 65px;\n  }\n  .Benefits__option {\n    width: 280px;\n  }\n}\n@media screen and (max-width: 728px){\n  .Benefits {\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 610px){\n  .Benefits {\n    margin-top: 20px;\n    grid-template-columns: 0.25fr;\n    grid-row-gap: 20px;\n  }\n}\n@media screen and (max-width: 1260px){\n  .subBanner h2 {\n    font-size: 32px;\n  }\n  .subBanner p {\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1050px){\n  .subBanner h2 {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 930px){\n  .subBanner {\n    background-size: 230%;\n    height: 1058px;\n    background-position: center -700px;\n  }\n  .subBanner__banner {\n    max-width: 720px;\n    width: 100%;\n  }\n  .subBanner__left {\n    margin-top: 51px;\n  }\n  .subBanner__description {\n    justify-content: center;\n  }\n  .subBanner h2 {\n    font-size: 40px;\n  }\n  .subBanner p {\n    font-size: 12px;\n  }\n  .subBanner__content {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 820px){\n  .subBanner {\n    background-size: 230%;\n    height: 1058px;\n    background-position: center -500px;\n    margin-top: 40px;\n  }\n  .subBanner__description {\n    justify-content: center;\n  }\n  .subBanner h2 {\n    font-size: 40px;\n  }\n  .subBanner p {\n    font-size: 12px;\n  }\n  .subBanner__content {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 680px){\n  .subBanner {\n    background-size: 270%;\n  }\n}\n@media screen and (max-width: 630px){\n  .subBanner {\n    background-size: 300%;\n  }\n  .subBanner h2 {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 540px){\n  .subBanner {\n    background-size: 380%;\n    margin-top: 130px;\n    margin-bottom: 160px;\n    height: 720px;\n  }\n  .subBanner__left {\n    margin-top: -110px;\n    padding: 48px 54px;\n  }\n  .subBanner__right {\n    padding: 56px 26px;\n  }\n  .subBanner h2 {\n    font-size: 20px;\n    text-align: center;\n  }\n  .subBanner__content {\n    gap: 25px;\n  }\n}\n@media screen and (max-width: 970px){\n  .Footer__catalog p {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 860px){\n  .Footer__catalog p {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 700px){\n  .Footer__catalog {\n    display: none;\n  }\n  .Footer__law {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 570px){\n  .Footer {\n    height: 330px;\n  }\n  .Footer__law {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n  }\n  .Footer__left {\n    margin-top: 24px;\n  }\n  .Footer__center {\n    margin-top: 24px;\n  }\n  .Footer__right {\n    margin-top: 24px;\n  }\n}\n@media screen and (max-width: 1261px){\n  .Popular {\n    max-width: 940px;\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 636px){\n  .Cart__items {\n    padding: 40px;\n  }\n  .Cart__price {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 510px){\n  .Cart__background {\n    height: 258px;\n  }\n  .Cart h2 {\n    padding-top: 20px;\n  }\n  .Cart__character {\n    margin-top: 15px;\n  }\n  .Cart__items {\n    -webkit-filter: none;\n            filter: none;\n    background: none;\n    padding: 0;\n    gap: 15px;\n  }\n  .Cart__item {\n    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    background-color: #FFFFFF;\n    border-radius: 15px;\n    padding: 18px 26px;\n  }\n  .Cart__itemFlex h4 {\n    margin-top: 5px;\n  }\n  .Cart__tablet {\n    display: none;\n  }\n  .Cart__Mobile {\n    display: flex;\n  }\n  .Cart__delete {\n    margin-top: 0;\n    font-size: 12px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n  .Cart__MobilePrice {\n    font-family: \"PTSans-Bold\";\n    color: #373737;\n    font-size: 24px;\n    margin-top: 16px;\n  }\n  .Cart__row {\n    margin-top: 24px;\n    align-items: center;\n  }\n  .Cart__count {\n    font-size: 12px;\n  }\n  .Cart__price {\n    padding: 18px 26px;\n  }\n  .Cart__button {\n    font-size: 16px;\n    height: 55px;\n  }\n  .Cart__input {\n    margin-top: 15px;\n  }\n}\n@media screen and (max-width: 490px){\n  .Cart__itemsActive {\n    padding: 15px 26px;\n  }\n  .Cart__priceActive {\n    padding: 15px 26px;\n  }\n  .Cart__name {\n    margin-top: 10px;\n  }\n  .Cart__flexInput {\n    flex-direction: column;\n    gap: 0;\n  }\n  .Cart__chooseHeader {\n    margin-top: 15px;\n  }\n  .Cart__flexButton {\n    margin-top: 10px;\n    flex-direction: column;\n  }\n  .Cart__nameFirst {\n    margin-top: 15px;\n  }\n  .Cart__payment {\n    margin-top: 15px;\n  }\n  .Cart__gridButton {\n    margin-top: 10px;\n    grid-template-columns: 1fr;\n  }\n  .Cart__privacy {\n    margin-top: 15px;\n    font-size: 12px;\n  }\n  .Cart__priceActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive h6 {\n    margin-top: 15px;\n  }\n  .Cart__priceActive button {\n    margin-top: 15px;\n  }\n}", "",{"version":3,"sources":["webpack://./../../%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/repo-name-master/src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/style/_header.scss","webpack://./src/style/_Banners.scss","webpack://./src/style/_subHeader.scss","webpack://./src/slick/slick.scss","webpack://./src/slick/slick-theme.scss","webpack://./src/style/_Service.scss","webpack://./src/style/_Manafacture.scss","webpack://./src/style/_Benefits.scss","webpack://./src/style/_subBanner.scss","webpack://./src/style/_Footer.scss","webpack://./src/style/_Popular.scss","webpack://./src/style/cart/_Cart.scss","webpack://./src/style/favorite/_Favorite.scss","webpack://./src/style/cart/_Cart_active.scss","webpack://./src/style/cardDescription/_CardDescription.scss","webpack://./src/style/cardDescription/_CardDepiction.scss","webpack://./src/style/cardDescription/_CardFeature.scss","webpack://./src/style/cardDescription/_CardFeedback.scss","webpack://./src/style/cardDescription/_CardQuest.scss","webpack://./src/style/cardDescription/_CardDocumantation.scss","webpack://./src/style/cardDescription/_CardReview.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import '~normalize.css';\n@font-face {\n  font-family: \"PTSans-Bold\";\n  font-weight: 700;\n  src: url(\"../fonts/PTSans-Bold.woff\") format(\"woff\"), url(\"../fonts/PTSans-Bold.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"PTSans-Regular\";\n  font-weight: 700;\n  src: url(\"../fonts/PTSans-Regular.woff\") format(\"woff\"), url(\"../fonts/PTSans-Regular.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"Srbija-Sans\";\n  font-weight: 700;\n  src: url(\"../fonts/Srbija-Sans.woff\") format(\"woff\"), url(\"../fonts/Srbija-Sans.woff2\") format(\"woff2\");\n}\nbody {\n  font-family: \"PTSans-Bold\";\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\np {\n  font-family: \"PTSans-Regular\";\n  color: #373737;\n  font-size: 16px;\n  margin: 0;\n}\n\nh1 {\n  font-family: \"Srbija-Sans\";\n  margin: 0;\n  font-size: 32px;\n  color: #373737;\n}\n\nh2 {\n  font-family: \"Srbija-Sans\";\n  font-size: 40px;\n  margin: 0;\n}\n\nh3 {\n  font-family: \"PTSans-Bold\";\n  color: #373737;\n  margin: 0;\n}\n\nhr {\n  margin: 0;\n}\n\ninput {\n  padding: 0;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1260px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.empty {\n  width: 100%;\n  height: 110px;\n}\n\n.active {\n  display: block !important;\n}\n\n@media screen and (max-width: 900px) {\n  .empty {\n    height: 35px;\n  }\n}\n.headerUp {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n}\n.headerUp h3 {\n  font-size: 24px;\n}\n.headerUp__phoneNumber {\n  cursor: pointer;\n}\n.headerUp__menu {\n  display: flex;\n  justify-content: space-between;\n  width: 35.5%;\n  gap: 10px;\n  font-size: 16px;\n}\n.headerUp__menu p {\n  cursor: pointer;\n}\n.headerUp__button {\n  background-color: #69AEFF;\n  color: #FFFFFF;\n  padding: 8.5px 17px;\n  border-radius: 7px;\n  font-size: 16px;\n  font-family: \"PTSans-Bold\";\n}\n\n.headerCenter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  height: 100px;\n}\n.headerCenter__burger {\n  display: none;\n}\n.headerCenter__close {\n  display: none;\n  margin-right: 2px;\n}\n.headerCenter__rightMenu {\n  display: none;\n}\n.headerCenter__logo {\n  width: 14.2%;\n}\n.headerCenter__logo img {\n  width: 100%;\n}\n.headerCenter__center {\n  position: relative;\n  display: flex;\n  height: 54px;\n  width: 57%;\n}\n.headerCenter__input {\n  outline: none;\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n  font-family: \"PTSans-Regular\";\n  width: 100%;\n  padding-left: 170px;\n  background-color: #F6FAFF;\n  color: #373737;\n}\n.headerCenter__input::placeholder {\n  color: #B6B6B6;\n}\n.headerCenter__category {\n  position: absolute;\n  z-index: 1;\n  left: 20px;\n  top: 17.8px;\n  display: flex;\n  gap: 3px;\n}\n.headerCenter hr {\n  position: absolute;\n  z-index: 1;\n  left: 137px;\n  top: 28px;\n  width: 34px;\n  padding: 0;\n  height: 0;\n  border: none;\n  transform: rotate(90deg);\n  border-top: 1px solid #B6B6B6;\n}\n.headerCenter__search {\n  padding: 11px 4%;\n  background-color: #69AEFF;\n  border-radius: 0px 10px 10px 0px;\n}\n.headerCenter__menu {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 23.5%;\n}\n.headerCenter__item {\n  cursor: pointer;\n  position: relative;\n}\n.headerCenter__item img {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 9px;\n}\n.headerCenter__item svg {\n  display: block;\n  margin: 0 auto;\n  fill: #E3EBEF;\n}\n.headerCenter__item svg:hover {\n  fill: #69AEFF;\n  stroke: #69AEFF;\n}\n.headerCenter__description {\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n}\n.headerCenter__cart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -8px;\n  left: 29.5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #F04438;\n}\n.headerCenter__cart p {\n  margin-top: 1px;\n  margin-right: 1px;\n  width: fit-content;\n  font-family: \"PTSans-Bold\";\n  font-size: 11px;\n  color: #FFFFFF;\n}\n.headerCenter__img {\n  display: block;\n  margin: 0 auto;\n}\n\n.headerCenterBg {\n  width: 100vw;\n  height: 100px;\n  position: absolute;\n  left: 0;\n  top: 60px;\n  z-index: 0;\n  box-shadow: 0px 10px 20px rgba(9, 60, 83, 0.05);\n}\n\n.headerBottom {\n  height: 54px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 810px;\n  margin: 0 auto;\n}\n.headerBottom__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  background-color: #F6FAFF;\n}\n\n.headerBottomBg {\n  width: 100vw;\n  height: 54px;\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 160px;\n  background-color: #F6FAFF;\n}\n\n.Modal {\n  display: none;\n  z-index: 5;\n}\n.Modal__input {\n  display: flex !important;\n}\n.Modal__block {\n  position: relative;\n  width: 100%;\n  height: 243px;\n  background-color: #FFFFFF;\n  padding: 30px 24px;\n  display: block !important;\n  display: flex;\n  z-index: 6;\n}\n.Modal input {\n  height: 100%;\n}\n.Modal__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.Modal__menuLeft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 104px;\n}\n.Modal__center {\n  display: flex;\n  justify-content: space-between;\n  height: 24px;\n  text-align: center;\n}\n.Modal__center p {\n  margin: auto 0;\n}\n.Modal__right {\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.Modal__right h3 {\n  margin: auto 0;\n}\n.Modal__phone {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  height: 24px;\n}\n.Modal__phnBtn {\n  display: none;\n}\n\n@media screen and (max-width: 1140px) {\n  .headerCenter__menu {\n    gap: 5px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .headerUp h5 {\n    font-size: 18px;\n  }\n  .headerCenter__center {\n    width: 50%;\n  }\n  .headerCenter__input {\n    padding-left: 150px;\n  }\n  .headerCenter hr {\n    left: 122px;\n  }\n  .headerCenter__menu {\n    width: 220px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .headerUp__menu {\n    width: 37%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .headerUp {\n    display: none;\n  }\n  .headerCenter__center {\n    display: none;\n    width: 100%;\n  }\n  .headerCenter__menu {\n    display: none;\n  }\n  .headerCenter__burger {\n    display: block;\n  }\n  .headerCenter__rightMenu {\n    display: block;\n    display: flex;\n    gap: 32px;\n  }\n  .headerCenter__cart {\n    left: 17.5px;\n  }\n  .headerCenter__logo {\n    width: 172px;\n  }\n  .headerCenter__item {\n    display: flex;\n    gap: 25px;\n    align-items: center;\n  }\n  .headerCenter__item a {\n    font-size: 16px;\n  }\n  .headerCenter__img img {\n    margin: auto 0;\n  }\n  .headerUp__menu {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    height: 104px;\n    width: 29.5%;\n  }\n  .headerCenterBg {\n    top: 0;\n  }\n  .headerBottomBg {\n    top: 100px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .Modal__block {\n    padding: 0;\n    padding-top: 29px;\n  }\n  .headerUp__menu {\n    width: 155px;\n    gap: 10px;\n  }\n}\n@media screen and (max-width: 530px) {\n  .headerBottom p {\n    font-size: 12px;\n  }\n  .headerBottom__item {\n    gap: 8px;\n  }\n  .Modal p {\n    font-size: 12px;\n  }\n  .Modal a {\n    font-size: 12px;\n  }\n  .Modal h3 {\n    font-size: 16px;\n  }\n  .headerCenter__center {\n    height: 41px;\n  }\n  .headerCenter__center input {\n    padding-left: 130px;\n  }\n  .headerCenter__center input::placeholder {\n    font-size: 12px;\n  }\n  .headerCenter__category {\n    top: 13.8px;\n  }\n  .headerCenter hr {\n    width: 25px;\n    top: 20px;\n    left: 107px;\n  }\n  .headerCenter__search {\n    padding: 0 4%;\n  }\n  .headerCenter__search img {\n    width: 23px;\n    height: 23px;\n  }\n  .headerUp__menu {\n    width: 27%;\n  }\n}\n@media screen and (max-width: 480px) {\n  .Modal__right {\n    display: none;\n  }\n  .Modal__phnBtn {\n    display: block;\n    margin-top: 16px;\n  }\n  .Modal__phone {\n    justify-content: center;\n  }\n  .headerUp__button {\n    margin-top: 20px;\n    width: 100%;\n    height: 46px;\n  }\n  .headerUp__menu {\n    width: 55%;\n  }\n  .headerCenter__rightMenu {\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .headerCenter__logo {\n    width: 129px;\n    height: 40.45px;\n  }\n  .headerBottom {\n    height: 65px;\n  }\n  .headerBottom__item {\n    flex-direction: column;\n  }\n  .headerBottomBg {\n    height: 65px;\n  }\n  .Modal__block {\n    padding-top: 10px;\n  }\n  .Modal__bottom {\n    margin-top: 25px;\n  }\n  .Modal__menuLeft {\n    height: 82px;\n  }\n  .headerUp__menu {\n    height: 82px;\n  }\n}\n.Banners {\n  margin-top: 90px;\n  color: #FFFFFF;\n}\n.Banners h2 {\n  font-size: 40px;\n}\n.Banners__grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(2, 0.5fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 32px;\n}\n.Banners__small {\n  position: relative;\n  max-width: 176px;\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n}\n.Banners__large {\n  position: relative;\n  max-width: 800px;\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n}\n.Banners__medium {\n  position: relative;\n  max-width: 384px;\n  width: 100%;\n  height: 190px;\n  border-radius: 17px;\n  z-index: -3;\n}\n.Banners__elipseM {\n  width: 100%;\n  height: 190px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -2;\n}\n.Banners__elipseS {\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.Banners__elipseL {\n  width: 100%;\n  height: 240px;\n  border-radius: 17px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -1;\n}\n.Banners__first {\n  text-align: center;\n  background-color: #373737;\n  grid-area: 1/1/2/3;\n}\n.Banners__first h2 {\n  margin-top: 130px;\n}\n.Banners__first img {\n  position: absolute;\n  left: 32px;\n  bottom: 64px;\n  max-width: 100%;\n}\n.Banners__second {\n  background-color: #69AEFF;\n  grid-area: 1/3/2/5;\n}\n.Banners__second h2 {\n  position: absolute;\n  right: 40px;\n  bottom: 20px;\n  z-index: 3;\n}\n.Banners__second__air {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  max-width: 100%;\n}\n.Banners__second__elipseL {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  left: -60px;\n  top: 50px;\n  z-index: 0;\n}\n.Banners__second__elipseR {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  left: 200px;\n  top: -155px;\n  z-index: 0;\n}\n.Banners__third {\n  background-color: #69AEFF;\n  z-index: 1;\n  grid-area: 1/5/2/7;\n}\n.Banners__third h2 {\n  position: absolute;\n  right: 40px;\n  bottom: 20px;\n}\n.Banners__third__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  background-color: #D3EAFF;\n  position: absolute;\n  z-index: -1;\n  left: -21px;\n  top: 56px;\n}\n.Banners__pipe {\n  z-index: -1;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n}\n.Banners__freon {\n  z-index: 0;\n  position: absolute;\n  bottom: 0;\n  left: -50px;\n}\n.Banners__four {\n  background-color: #C894C4;\n  z-index: 1;\n  text-align: center;\n  grid-area: 2/1/3/2;\n}\n.Banners__four h2 {\n  font-size: 20px;\n  margin-top: 12px;\n}\n.Banners__four img {\n  margin-top: 60px;\n}\n.Banners__four__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  position: absolute;\n  left: -113px;\n  top: 77px;\n  z-index: -1;\n  background-color: #BD89B9;\n}\n.Banners__five {\n  background-color: #82D42B;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  grid-area: 2/2/3/3;\n}\n.Banners__five img {\n  margin-top: 44px;\n}\n.Banners__five h2 {\n  font-size: 20px;\n  margin-top: 12px;\n}\n.Banners__five__elipse {\n  width: 245px;\n  height: 245px;\n  border-radius: 50%;\n  position: absolute;\n  left: -34px;\n  top: -151px;\n  z-index: -1;\n  background-color: #70B428;\n}\n.Banners__six {\n  background-color: #373737;\n  z-index: 1;\n  overflow: hidden;\n  grid-area: 2/3/3/7;\n}\n.Banners__six img {\n  position: absolute;\n  top: 25px;\n  right: 77px;\n  max-width: 100%;\n}\n.Banners__six h2 {\n  width: 524px;\n  padding: 53px 37px;\n  z-index: 4;\n  position: relative;\n}\n.Banners__six span {\n  color: #69AEFF;\n}\n.Banners__six__elipse {\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background-color: #4E4E4E;\n  position: absolute;\n  top: 27px;\n  right: -20px;\n}\n.Banners__mobile {\n  display: none;\n}\n\n@media screen and (max-width: 1160px) {\n  .Banners__six img {\n    right: 3%;\n  }\n  .Banners__six__elipse {\n    right: -10%;\n  }\n}\n@media screen and (max-width: 1030px) {\n  .Banners__first img {\n    left: 10px;\n  }\n  .Banners__six img {\n    right: 3%;\n  }\n  .Banners__six__elipse {\n    right: -10%;\n  }\n  .Banners h2 {\n    font-size: 32px;\n  }\n  .Banners__four h2 {\n    font-size: 18px;\n  }\n  .Banners__five h2 {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .Banners__freon {\n    max-width: 190px;\n  }\n  .Banners__pipe {\n    max-width: 140px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .Banners {\n    margin-top: 60px;\n  }\n  .Banners__grid {\n    grid-row-gap: 16px;\n  }\n  .Banners__small {\n    height: 144px;\n    max-width: 120px;\n  }\n  .Banners__medium {\n    height: 115px;\n  }\n  .Banners__large {\n    height: 144px;\n  }\n  .Banners h2 {\n    font-size: 24px;\n  }\n  .Banners__first img {\n    left: 20px;\n    bottom: 38px;\n  }\n  .Banners__first h2 {\n    margin-top: 72px;\n  }\n  .Banners__elipseM {\n    height: 115px;\n  }\n  .Banners__second__elipseL {\n    width: 146px;\n    height: 146px;\n    left: -35px;\n    top: 25px;\n  }\n  .Banners__second__elipseR {\n    width: 146px;\n    height: 146px;\n    left: 118px;\n    top: -80px;\n  }\n  .Banners__second h2 {\n    right: 22px;\n    bottom: 12px;\n  }\n  .Banners__third__elipse {\n    width: 146px;\n    height: 146px;\n    left: -13px;\n    top: 33px;\n  }\n  .Banners__third h2 {\n    bottom: 12px;\n    right: 20px;\n  }\n  .Banners__freon {\n    max-width: 140px;\n    left: -15px;\n  }\n  .Banners__pipe {\n    max-width: 120px;\n  }\n  .Banners__four img {\n    margin-top: 36px;\n    max-width: 55px;\n  }\n  .Banners__four h2 {\n    font-size: 12px;\n  }\n  .Banners__four__elipse {\n    width: 140px;\n    height: 140px;\n    top: 46px;\n    left: -58px;\n  }\n  .Banners__elipseS {\n    height: 144px;\n  }\n  .Banners__five img {\n    margin-top: 30px;\n    max-width: 63px;\n  }\n  .Banners__five h2 {\n    font-size: 12px;\n    max-width: 80px;\n    margin: 0 auto;\n    margin-top: 2px;\n  }\n  .Banners__five__elipse {\n    width: 140px;\n    height: 140px;\n    top: -80px;\n    left: -14px;\n  }\n  .Banners__six img {\n    max-width: 140px;\n    top: 5px;\n    right: 30px;\n  }\n  .Banners__six h2 {\n    max-width: 300px;\n    padding: 0;\n    padding-top: 31px;\n    padding-left: 22px;\n  }\n  .Banners__six__elipse {\n    width: 188px;\n    height: 188px;\n    top: 16px;\n    right: -12px;\n  }\n  .Banners__elipseL {\n    height: 144px;\n  }\n}\n@media screen and (max-width: 685px) {\n  .Banners__freon {\n    left: -35px;\n  }\n  .Banners__pipe {\n    max-width: 120px;\n    left: 0;\n  }\n  .Banners__six img {\n    right: 10px;\n  }\n  .Banners__six__elipse {\n    right: -32px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .Banners__grid {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 13px;\n    grid-row-gap: 16px;\n  }\n  .Banners__small {\n    height: 115px;\n  }\n  .Banners__large {\n    height: 115px;\n  }\n  .Banners__first {\n    grid-area: 1/1/2/3;\n  }\n  .Banners__second {\n    grid-area: 1/3/2/5;\n  }\n  .Banners__third {\n    grid-area: 2/2/3/4;\n  }\n  .Banners__four {\n    grid-area: 2/1/3/2;\n  }\n  .Banners__five {\n    grid-area: 2/4/3/5;\n  }\n  .Banners__six {\n    grid-area: 3/1/4/5;\n  }\n  .Banners__freon {\n    max-width: 120px;\n    left: -20px;\n  }\n  .Banners__pipe {\n    max-width: 110px;\n    left: 6px;\n  }\n  .Banners__four img {\n    margin-top: 20px;\n    max-width: 40px;\n  }\n  .Banners__five img {\n    margin-top: 12px;\n    max-width: 50px;\n  }\n  .Banners__five h2 {\n    margin-top: 4px;\n  }\n  .Banners__elipseS {\n    height: 100%;\n  }\n  .Banners__six img {\n    max-width: 120px;\n    top: 5px;\n    right: 40px;\n  }\n  .Banners__six h2 {\n    padding-top: 16px;\n    padding-left: 22px;\n  }\n  .Banners__six__elipse {\n    top: 10px;\n  }\n  .Banners__elipseL {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 450px) {\n  .Banners {\n    margin-top: 43px;\n  }\n  .Banners__small {\n    height: 78px;\n  }\n  .Banners__medium {\n    height: 78px;\n  }\n  .Banners__large {\n    height: 78px;\n  }\n  .Banners h2 {\n    font-size: 16px;\n  }\n  .Banners__first img {\n    left: 13px;\n    bottom: 25px;\n  }\n  .Banners__first h2 {\n    margin-top: 50px;\n  }\n  .Banners__elipseM {\n    height: 100%;\n  }\n  .Banners__second__elipseL {\n    width: 100px;\n    height: 100px;\n    left: -10px;\n    top: 15px;\n  }\n  .Banners__second__elipseR {\n    width: 100px;\n    height: 100px;\n    left: 80px;\n    top: -60px;\n  }\n  .Banners__second h2 {\n    right: 15px;\n    bottom: 8px;\n  }\n  .Banners__third__elipse {\n    width: 100px;\n    height: 100px;\n    left: -9px;\n    top: 22px;\n  }\n  .Banners__third h2 {\n    bottom: 8px;\n    right: 15px;\n  }\n  .Banners__freon {\n    max-width: 90px;\n    left: -15px;\n  }\n  .Banners__pipe {\n    max-width: 80px;\n  }\n  .Banners__four img {\n    margin-top: 10px;\n    max-width: 38px;\n  }\n  .Banners__four h2 {\n    font-size: 8px;\n    margin-top: 2px;\n  }\n  .Banners__four__elipse {\n    width: 100px;\n    height: 100px;\n    top: 12px;\n    left: -40px;\n  }\n  .Banners__five img {\n    margin-top: 6px;\n    max-width: 38px;\n  }\n  .Banners__five h2 {\n    font-size: 8px;\n    max-width: 45px;\n    margin-top: 0px;\n  }\n  .Banners__five__elipse {\n    width: 100px;\n    height: 100px;\n    top: -80px;\n    left: -10px;\n  }\n  .Banners__six img {\n    max-width: 80px;\n    top: 0px;\n    right: 31px;\n  }\n  .Banners__six h2 {\n    max-width: 190px;\n    padding-top: 14px;\n    padding-left: 15px;\n  }\n  .Banners__six__elipse {\n    width: 130px;\n    height: 130px;\n    top: 5px;\n    right: -7px;\n  }\n  .Banners__elipseL {\n    height: 144px;\n  }\n}\n.subHeader {\n  margin-top: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.subHeader__seeAll {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n  height: fit-content;\n}\n.subHeader__seeAll img {\n  width: 16.68px;\n  height: 8.36px;\n}\n\n@media screen and (max-width: 768px) {\n  .subHeader {\n    margin-top: 40px;\n  }\n  .subHeader h1 {\n    font-size: 24px;\n  }\n  .subHeader p {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 380px) {\n  .subHeader {\n    margin-top: 20px;\n  }\n  .subHeader h1 {\n    font-size: 20px;\n  }\n  .subHeader p {\n    font-size: 16px;\n  }\n}\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n\n.slick-arrow.slick-hidden {\n  display: none;\n}\n\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url(\"./ajax-loader.gif\") center center no-repeat;\n}\n\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url(\"./fonts/slick.eot\");\n  src: url(\"./fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/slick.woff\") format(\"woff\"), url(\"./fonts/slick.ttf\") format(\"truetype\"), url(\"./fonts/slick.svg#slick\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 53px;\n  width: 53px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  padding: 0;\n  border: none;\n  outline: none;\n  color: black !important;\n}\n.slick-prev:hover, .slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  outline: none;\n  color: #69AEFF;\n}\n.slick-prev:hover:before, .slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.slick-prev:before,\n.slick-next:before {\n  font-family: \"slick\";\n  font-size: 40px;\n  line-height: 1;\n  color: #69AEFF;\n  opacity: #69AEFF;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  right: 53px;\n  bottom: -60px;\n}\n.slick-prev:before {\n  content: \"←\";\n}\n[dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\n\n.slick-next {\n  right: 0px;\n  bottom: -60px;\n}\n.slick-next:before {\n  content: \"→\";\n}\n[dir=rtl] .slick-next:before {\n  content: \"←\";\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots li button {\n  border: 0;\n  background: transparent;\n  display: block;\n  height: 20px;\n  width: 20px;\n  outline: none;\n  line-height: 0px;\n  font-size: 0px;\n  color: transparent;\n  padding: 5px;\n  cursor: pointer;\n}\n.slick-dots li button:hover, .slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"•\";\n  width: 20px;\n  height: 20px;\n  font-family: \"slick\";\n  font-size: 6px;\n  line-height: 20px;\n  text-align: center;\n  color: black;\n  opacity: 0.25;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  color: black;\n  opacity: 0.75;\n}\n\n.Service {\n  max-width: 1260px;\n  margin: 0 auto;\n  padding: 0 20px;\n  background-image: url(../img/ServiceBg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  width: 100%;\n  height: 610px;\n  margin-top: 140px;\n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.Service__option {\n  width: 48%;\n  height: 390px;\n  margin-top: 160px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  text-align: center;\n}\n.Service__option img {\n  width: 330px;\n  height: 330px;\n}\n.Service__mobile {\n  display: none;\n}\n\n@media screen and (max-width: 960px) {\n  .Service h1 {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Service {\n    margin-top: 40px;\n    height: 360px;\n    gap: 6px;\n  }\n  .Service h1 {\n    font-size: 24px;\n    margin-top: -18px;\n  }\n  .Service__option {\n    margin-top: 96px;\n    height: 230px;\n  }\n  .Service__option img {\n    width: 210px;\n    height: 210px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .Service h1 {\n    font-size: 19px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .Service {\n    padding: 0;\n    margin-top: 135px;\n    flex-direction: column;\n    width: 100%;\n    height: 250px;\n    justify-content: center;\n    align-items: center;\n    gap: 18px;\n    margin-bottom: 150px;\n  }\n  .Service__desctop {\n    display: none;\n  }\n  .Service__mobile {\n    display: block;\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n  }\n  .Service__option {\n    margin-top: 0;\n    width: 328px;\n    height: 220px;\n  }\n  .Service__option img {\n    width: 190px;\n    height: 190px;\n  }\n  .Service__option1 {\n    order: 2;\n  }\n  .Service__option2 {\n    order: 1;\n  }\n  .Service h1 {\n    margin-top: -5px;\n    padding-bottom: 15px;\n  }\n}\n.Manafacture {\n  padding-top: 85px;\n  max-width: 1260px;\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 768px) {\n  .Manafacture {\n    padding-top: 10px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .Manafacture {\n    padding-top: 18px;\n  }\n}\n.Benefits {\n  margin-top: 200px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 32px;\n  align-items: center;\n  justify-content: center;\n}\n.Benefits__option {\n  max-width: 280px;\n  width: 100%;\n  height: 220px;\n  border-radius: 25px;\n  background-image: url(\"../img/Benefit.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  text-align: center;\n  align-self: center;\n  justify-self: center;\n}\n.Benefits__option h1 {\n  margin-top: 165px;\n}\n\n@media screen and (max-width: 1080px) {\n  .Benefits {\n    margin-top: 90px;\n    grid-template-columns: 0.25fr 0.25fr;\n    grid-row-gap: 65px;\n  }\n  .Benefits__option {\n    width: 280px;\n  }\n}\n@media screen and (max-width: 728px) {\n  .Benefits {\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 610px) {\n  .Benefits {\n    margin-top: 20px;\n    grid-template-columns: 0.25fr;\n    grid-row-gap: 20px;\n  }\n}\n.subBanner {\n  background-image: url(\"../img/subBannerBg.png\");\n  background-size: 200%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 561px;\n  width: 100vw;\n  margin-top: 60px;\n}\n.subBanner__content {\n  display: flex;\n  gap: 32px;\n}\n.subBanner__banner {\n  width: 592px;\n  height: 457px;\n  margin-top: 24px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 25px;\n  background-color: #FFFFFF;\n}\n.subBanner__left {\n  padding: 80px 56px 20px 56px;\n}\n.subBanner__left h3 {\n  font-size: 16px;\n}\n.subBanner hr {\n  margin: 34px 0;\n  width: 100%;\n  height: 3px;\n  background-color: #69AEFF;\n  border-radius: 6px;\n  border: none;\n}\n.subBanner__description {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  cursor: pointer;\n}\n.subBanner__right {\n  padding: 48px 56px;\n}\n.subBanner__right p {\n  font-size: 12px;\n}\n.subBanner__right input {\n  width: 100%;\n  outline: none;\n  border: none;\n  border-radius: 7px;\n  background-color: #F6FAFF;\n}\n.subBanner__right input::placeholder {\n  color: #E3EBEF;\n  height: fit-content;\n  width: fit-content;\n}\n.subBanner__email {\n  color: #E3EBEF;\n  margin-top: 20px;\n}\n.subBanner__email span {\n  color: #F04438;\n}\n.subBanner__emailInput {\n  height: 42px;\n  padding: 13px 0px 13px 22px;\n  margin-top: 5px;\n}\n.subBanner__messageInput {\n  height: 100px;\n  padding: 13px 0px 67px 22px;\n  margin-top: 20px;\n}\n.subBanner__button {\n  width: 100%;\n  height: 73px;\n  border-radius: 10px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  margin-top: 10px;\n  font-size: 24px;\n  font-family: \"PTSans-Bold\";\n}\n.subBanner__term {\n  color: #B6B6B6;\n  margin-top: 20px;\n}\n.subBanner__term span {\n  color: #373737;\n}\n\n@media screen and (max-width: 1260px) {\n  .subBanner h2 {\n    font-size: 32px;\n  }\n  .subBanner p {\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .subBanner h2 {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 930px) {\n  .subBanner {\n    background-size: 230%;\n    height: 1058px;\n    background-position: center -700px;\n  }\n  .subBanner__banner {\n    max-width: 720px;\n    width: 100%;\n  }\n  .subBanner__left {\n    margin-top: 51px;\n  }\n  .subBanner__description {\n    justify-content: center;\n  }\n  .subBanner h2 {\n    font-size: 40px;\n  }\n  .subBanner p {\n    font-size: 12px;\n  }\n  .subBanner__content {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 820px) {\n  .subBanner {\n    background-size: 230%;\n    height: 1058px;\n    background-position: center -500px;\n    margin-top: 40px;\n  }\n  .subBanner__description {\n    justify-content: center;\n  }\n  .subBanner h2 {\n    font-size: 40px;\n  }\n  .subBanner p {\n    font-size: 12px;\n  }\n  .subBanner__content {\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n}\n@media screen and (max-width: 680px) {\n  .subBanner {\n    background-size: 270%;\n  }\n}\n@media screen and (max-width: 630px) {\n  .subBanner {\n    background-size: 300%;\n  }\n  .subBanner h2 {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 540px) {\n  .subBanner {\n    background-size: 380%;\n    margin-top: 130px;\n    margin-bottom: 160px;\n    height: 720px;\n  }\n  .subBanner__left {\n    margin-top: -110px;\n    padding: 48px 54px;\n  }\n  .subBanner__right {\n    padding: 56px 26px;\n  }\n  .subBanner h2 {\n    font-size: 20px;\n    text-align: center;\n  }\n  .subBanner__content {\n    gap: 25px;\n  }\n}\n.Footer {\n  height: 410px;\n  background-color: #F2FBFF;\n}\n.Footer h3 {\n  font-size: 16px;\n}\n.Footer__content {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n.Footer__left {\n  display: flex;\n  gap: 55px;\n  margin-top: 45px;\n}\n.Footer__center {\n  margin-top: 45px;\n  text-align: center;\n}\n.Footer__email {\n  margin-top: 33px;\n  margin-bottom: 22px;\n}\n.Footer__right {\n  display: flex;\n  text-align: right;\n  gap: 83px;\n  margin-top: 45px;\n}\n.Footer__col {\n  display: flex;\n  flex-direction: column;\n  gap: 42px;\n}\n.Footer__contacts {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 38px;\n  margin-top: 24px;\n}\n.Footer__catalog {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 22px;\n}\n.Footer hr {\n  width: 100%;\n  margin-top: 20px;\n  background-color: #373737;\n}\n.Footer__law {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 45px;\n}\n\n@media screen and (max-width: 970px) {\n  .Footer__catalog p {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 860px) {\n  .Footer__catalog p {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Footer p {\n    font-size: 12px;\n  }\n  .Footer__left {\n    flex-direction: column;\n    gap: 17px;\n  }\n  .Footer__right {\n    flex-direction: column;\n    gap: 17px;\n  }\n  .Footer__col {\n    gap: 17px;\n    text-align: center;\n  }\n  .Footer__content {\n    max-width: 511px;\n  }\n  .Footer__email {\n    margin-top: 28px;\n    margin-bottom: 16px;\n  }\n  .Footer__contacts {\n    margin-top: -13px;\n  }\n  .Footer__catalog {\n    margin-top: 30px;\n    gap: 3px;\n    max-width: 715px;\n    justify-content: space-between;\n  }\n  .Footer hr {\n    margin: 0 auto;\n    margin-top: 15px;\n    max-width: 481px;\n  }\n  .Footer__law {\n    margin: 0 auto;\n    max-width: 570px;\n    margin-top: 47px;\n  }\n}\n@media screen and (max-width: 700px) {\n  .Footer__catalog {\n    display: none;\n  }\n  .Footer__law {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 570px) {\n  .Footer {\n    height: 330px;\n  }\n  .Footer__law {\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n  }\n  .Footer__left {\n    margin-top: 24px;\n  }\n  .Footer__center {\n    margin-top: 24px;\n  }\n  .Footer__right {\n    margin-top: 24px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .Footer__left p {\n    text-align: left;\n  }\n  .Footer__center {\n    margin-top: 60px !important;\n  }\n  .Footer__center img {\n    width: 108px;\n    height: 34px;\n  }\n  .Footer__center h3 {\n    font-size: 12px;\n  }\n  .Footer__email {\n    margin-top: 16px;\n  }\n  .Footer__right p {\n    text-align: right;\n  }\n  .Footer__contacts {\n    gap: 12px;\n  }\n}\n.Popular {\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n  width: 100%;\n  max-width: 1260px;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n.Popular p {\n  font-size: 12px;\n}\n.Popular h3 {\n  font-size: 12px;\n}\n.Popular__item {\n  width: 280px !important;\n  padding: 10px;\n  border-radius: 10px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));\n  background-color: #FFFFFF;\n}\n.Popular__sale {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background-color: rgba(240, 68, 56, 0.89);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 13px;\n  left: 13px;\n}\n.Popular__sale h3 {\n  color: #FFFFFF;\n  font-size: 16px;\n}\n.Popular__img {\n  width: 166px;\n  height: 160px;\n  display: block;\n  margin: 0 auto;\n}\n.Popular__stars {\n  display: flex;\n  gap: 3px;\n  margin-top: 14px;\n}\n.Popular__price {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: 8px;\n  position: relative;\n}\n.Popular h4 {\n  margin-top: 8px;\n}\n.Popular h4 span {\n  font-family: \"PTSans-Bold\";\n}\n.Popular__oldprice {\n  font-size: 20px;\n  height: 20px;\n}\n.Popular h6 {\n  margin-top: 4px;\n}\n.Popular__newprice {\n  position: absolute;\n  color: #B6B6B6;\n  font-size: 14px;\n  text-decoration: line-through;\n  top: -7px;\n  left: 44px;\n}\n.Popular__menu {\n  display: flex;\n  gap: 20px;\n}\n.Popular__button {\n  color: #FFFFFF;\n  width: 260px;\n  height: 73px;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n  margin-top: 14px;\n}\n.Popular__character {\n  width: 100%;\n}\n.Popular__character::after {\n  content: \"..................................................................................................................................................................................................................................................................................................\";\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n}\n.Popular__character p span:first-of-type {\n  float: left;\n  margin-right: 3px;\n}\n.Popular__character p span:last-of-type {\n  float: right;\n  margin-left: 3px;\n}\n\n@media screen and (max-width: 1261px) {\n  .Popular {\n    max-width: 940px;\n    margin: 0 auto;\n  }\n}\n.Cart {\n  position: relative;\n}\n.Cart__background {\n  background: url(\"../../img/cartBg.png\"), linear-gradient(270deg, #6978FF 0%, rgba(88, 121, 207, 0.995104) 48.96%, rgba(180, 105, 255, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.Cart__content {\n  position: relative;\n  z-index: 1;\n}\n.Cart h2 {\n  color: #FFFFFF;\n  padding-top: 58px;\n}\n.Cart__back {\n  color: #FFFFFF;\n}\n.Cart__backLink {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 17px;\n}\n.Cart__rotate {\n  transform: rotate(180deg);\n}\n.Cart__character {\n  width: 100%;\n  height: 465px;\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 50px 56px;\n}\n.Cart__items {\n  max-width: 528px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n}\n.Cart__itemFlex {\n  display: flex;\n  max-width: 528px;\n  gap: 9px;\n}\n.Cart__itemFlex img {\n  width: 130px;\n  height: 100px;\n}\n.Cart__itemFlex h4 {\n  margin-top: 9px;\n  font-size: 12px;\n  font-family: \"PTSans-Regular\";\n}\n.Cart__itemFlex h6 {\n  font-size: 12px;\n  font-family: \"PTSans-Bold\";\n}\n.Cart__description {\n  width: 100%;\n}\n.Cart__row {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 11px;\n}\n.Cart__montage {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.Cart__montage input {\n  cursor: pointer;\n  background-color: #F6FAFF;\n  width: 23px;\n  height: 23px;\n  border-radius: 5px;\n  color: #F6FAFF;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.Cart__montage input:checked {\n  z-index: 1;\n  background-color: #69AEFF;\n}\n.Cart__montage label {\n  height: fit-content;\n  font-family: \"PTSans-regular\";\n  font-size: 16px;\n}\n.Cart__count {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.Cart__count button {\n  background-color: #FFFFFF;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Cart__count button img {\n  width: 7px;\n  height: 7px;\n}\n.Cart__delete {\n  margin-top: 11px;\n  text-align: right;\n  color: #B6B6B6;\n}\n.Cart__price {\n  width: 460px;\n}\n.Cart__price h6 {\n  margin-top: 30px;\n}\n.Cart__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Cart__head img {\n  width: 27px;\n  height: 29px;\n}\n.Cart__sum {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Cart__sum h3 {\n  font-size: 24px;\n  margin-top: 4px;\n}\n.Cart__sum p {\n  margin-top: 8px;\n}\n.Cart__sum span {\n  color: #82D42B;\n  margin-top: 8px;\n}\n.Cart__input {\n  position: relative;\n  margin-top: 32px;\n}\n.Cart__input input {\n  width: 100%;\n  height: 51px;\n  border-radius: 10px;\n  background-color: #F6FAFF;\n  outline: none;\n  border: none;\n  padding-left: 22px;\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n}\n.Cart__input input::placeholder {\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n  color: #B6B6B6;\n}\n.Cart__input button {\n  color: #69AEFF;\n  border-radius: none;\n  background-color: #F6FAFF;\n  position: absolute;\n  top: 18px;\n  right: 22px;\n  font-family: \"PTSans-regular\";\n  font-size: 12px;\n}\n.Cart__button {\n  margin-top: 12px;\n  width: 100%;\n  height: 73px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-bold\";\n  font-size: 24px;\n}\n.Cart__popup {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: fit-content;\n  z-index: 7;\n  width: 100vw;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n}\n.Cart__popupContent {\n  position: absolute;\n  top: 20%;\n  left: calc(50% - 325px);\n  max-width: 650px;\n  height: auto;\n  padding: 50px 56px;\n  background: #FFFFFF;\n  border-radius: 25px;\n  text-align: center;\n}\n.Cart__popupContent h1 {\n  margin-top: 26px;\n}\n.Cart__popupContent p {\n  margin-top: 10px;\n}\n.Cart__details {\n  font-family: \"PTSans-Bold\";\n}\n.Cart__closePopup {\n  width: 100%;\n  height: 60px;\n  margin-top: 26px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  font-size: 16px;\n  background: #69AEFF;\n  border-radius: 10px;\n}\n.Cart__Mobile {\n  display: none;\n}\n\n@media screen and (max-width: 900px) {\n  .Cart__background {\n    height: 208px;\n  }\n  .Cart h2 {\n    padding-top: 20px;\n    font-size: 24px;\n  }\n  .Cart__backLink {\n    margin-top: 7px;\n  }\n  .Cart__character {\n    padding: 0;\n    margin-top: 18px;\n    flex-direction: column;\n    gap: 25px;\n    height: auto;\n    filter: none;\n    background: none;\n  }\n  .Cart__items {\n    background-color: #FFFFFF;\n    max-width: 100%;\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    padding: 40px 96px;\n  }\n  .Cart__itemFlex {\n    max-width: 100%;\n  }\n  .Cart__price {\n    background-color: #FFFFFF;\n    max-width: 100%;\n    width: 100%;\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    padding: 45px 96px 40px 96px;\n  }\n  .Cart__price h1 {\n    font-size: 24px;\n  }\n  .Cart__price h3 {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 636px) {\n  .Cart__items {\n    padding: 40px;\n  }\n  .Cart__price {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .Cart__background {\n    height: 258px;\n  }\n  .Cart h2 {\n    padding-top: 20px;\n  }\n  .Cart__character {\n    margin-top: 15px;\n  }\n  .Cart__items {\n    filter: none;\n    background: none;\n    padding: 0;\n    gap: 15px;\n  }\n  .Cart__item {\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    background-color: #FFFFFF;\n    border-radius: 15px;\n    padding: 18px 26px;\n  }\n  .Cart__itemFlex h4 {\n    margin-top: 5px;\n  }\n  .Cart__tablet {\n    display: none;\n  }\n  .Cart__Mobile {\n    display: flex;\n  }\n  .Cart__delete {\n    margin-top: 0;\n    font-size: 12px;\n    height: fit-content;\n  }\n  .Cart__MobilePrice {\n    font-family: \"PTSans-Bold\";\n    color: #373737;\n    font-size: 24px;\n    margin-top: 16px;\n  }\n  .Cart__row {\n    margin-top: 24px;\n    align-items: center;\n  }\n  .Cart__count {\n    font-size: 12px;\n  }\n  .Cart__price {\n    padding: 18px 26px;\n  }\n  .Cart__button {\n    font-size: 16px;\n    height: 55px;\n  }\n  .Cart__input {\n    margin-top: 15px;\n  }\n}\n.Favorite {\n  position: relative;\n}\n.Favorite__background {\n  background: url(\"../../img/cartBg.png\"), linear-gradient(270deg, #7E69FF 0%, rgba(207, 88, 160, 0.995104) 48.96%, rgba(255, 105, 159, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.Favorite__content {\n  position: relative;\n  z-index: 1;\n}\n.Favorite h2 {\n  color: #FFFFFF;\n  padding-top: 58px;\n}\n.Favorite__back {\n  color: #FFFFFF;\n}\n.Favorite__backLink {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 17px;\n}\n.Favorite svg {\n  transform: rotate(180deg);\n}\n.Favorite__character {\n  width: 100%;\n  height: 435px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 0 47px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Favorite__character h2 {\n  color: #E3EBEF;\n  padding: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .Favorite__background {\n    height: 208px;\n  }\n  .Favorite__backLink {\n    margin-top: 7px;\n  }\n  .Favorite h2 {\n    padding-top: 20px;\n    font-size: 24px;\n  }\n  .Favorite__character {\n    height: 253px;\n    margin-top: 18px;\n  }\n  .Favorite__character h2 {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .Favorite__character {\n    height: 282px;\n  }\n  .Favorite__character h2 {\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .Favorite h2 {\n    font-size: 20px;\n    padding-top: 25px;\n  }\n  .Favorite__background {\n    height: 258px;\n  }\n  .Favorite__character {\n    margin-top: 15px;\n  }\n}\n.Cart__characterActive {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 22px;\n  padding: 50px 56px;\n}\n.Cart__itemsActive {\n  max-width: 528px;\n  width: 100%;\n}\n.Cart__itemsActive p {\n  font-size: 12px;\n  color: #B6B6B6;\n}\n.Cart__itemsActive p span {\n  color: #F04438;\n}\n.Cart__name {\n  margin-top: 30px;\n}\n.Cart__email {\n  margin-top: 20px;\n}\n.Cart__nameInput {\n  width: 100%;\n  height: 42px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 12px 22px;\n}\n.Cart__nameInput::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__nameInput:focus {\n  border: 1px solid #373737;\n}\n.Cart__flexInput {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.Cart__flexInput input {\n  width: 100%;\n  height: 42px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 12px 22px;\n}\n.Cart__flexInput input::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n}\n.Cart__flexInput input:focus {\n  border: 1px solid #373737;\n}\n.Cart__chooseHeader {\n  margin-top: 40px;\n}\n.Cart__flexButton {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  max-width: 455px;\n  width: 100%;\n  margin-top: 30px;\n}\n.Cart__choose {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\n  background-color: #FFFFFF;\n  border-radius: 7px;\n  width: 100%;\n  height: 38px;\n}\n.Cart__full {\n  width: 100%;\n}\n.Cart__nameFirst {\n  margin-top: 27px;\n}\n.Cart__nameSecond {\n  margin-top: 6px;\n}\n.Cart textarea {\n  resize: none;\n  width: 100%;\n  height: 82px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  color: #373737;\n  margin-top: 5px;\n  padding: 5px 22px;\n}\n.Cart textarea:focus {\n  border: 1px solid #373737;\n}\n.Cart__payment {\n  margin-top: 50px;\n}\n.Cart__choosePayment {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\n  background-color: #FFFFFF;\n  border-radius: 7px;\n  width: 100%;\n  height: 38px;\n}\n.Cart__gridButton {\n  max-width: 400px;\n  width: 100%;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 8px;\n  grid-row-gap: 10px;\n}\n.Cart__activeButton {\n  background-color: #69AEFF;\n  color: #FFFFFF;\n}\n.Cart__priceActive {\n  max-width: 464px;\n  width: 100%;\n}\n.Cart__privacy {\n  margin-top: 12px;\n  color: #B6B6B6;\n  max-width: 390px;\n  width: 100%;\n}\n.Cart__privacy span {\n  color: #373737;\n}\n\n.emptyCartActive {\n  height: 40px;\n}\n\n@media screen and (max-width: 900px) {\n  .Cart__characterActive {\n    flex-direction: column;\n    background: none;\n    filter: none;\n    padding: 0;\n  }\n  .Cart__itemsActive {\n    background-color: #FFFFFF;\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    max-width: 100%;\n    width: 100%;\n    padding: 40px 96px;\n  }\n  .Cart__itemsActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive {\n    background-color: #FFFFFF;\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n    border-radius: 25px;\n    max-width: 100%;\n    width: 100%;\n    padding: 40px 96px;\n  }\n  .Cart__priceActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive h6 {\n    margin-top: 30px;\n  }\n  .Cart__priceActive button {\n    margin-top: 30px;\n  }\n  .Cart__privacy {\n    max-width: 100%;\n    margin-top: 10px;\n  }\n  .emptyCartActive {\n    height: 25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .Cart__itemsActive {\n    padding: 40px;\n  }\n  .Cart__priceActive {\n    padding: 40px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .Cart__itemsActive {\n    padding: 15px 26px;\n  }\n  .Cart__priceActive {\n    padding: 15px 26px;\n  }\n  .Cart__name {\n    margin-top: 10px;\n  }\n  .Cart__flexInput {\n    flex-direction: column;\n    gap: 0;\n  }\n  .Cart__chooseHeader {\n    margin-top: 15px;\n  }\n  .Cart__flexButton {\n    margin-top: 10px;\n    flex-direction: column;\n  }\n  .Cart__nameFirst {\n    margin-top: 15px;\n  }\n  .Cart__payment {\n    margin-top: 15px;\n  }\n  .Cart__gridButton {\n    margin-top: 10px;\n    grid-template-columns: 1fr;\n  }\n  .Cart__privacy {\n    margin-top: 15px;\n    font-size: 12px;\n  }\n  .Cart__priceActive h1 {\n    font-size: 24px;\n  }\n  .Cart__priceActive h6 {\n    margin-top: 15px;\n  }\n  .Cart__priceActive button {\n    margin-top: 15px;\n  }\n}\n.Card {\n  position: relative;\n}\n.Card__background {\n  background: url(\"../../img/cartBg.png\"), linear-gradient(270deg, #69AEFF 0%, rgba(182, 88, 207, 0.995104) 48.96%, rgba(255, 159, 105, 0.99) 100%), #69AEFF;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n  width: 100vw;\n  height: 380px;\n  background-blend-mode: overlay, normal, normal;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.Card__flex {\n  display: flex;\n  gap: 15px;\n  padding-top: 60px;\n}\n.Card__flex a {\n  color: #FFFFFF;\n  font-family: \"PTSans-Regular\";\n}\n.Card__flex p {\n  color: #FFFFFF;\n}\n.Card__header {\n  color: #FFFFFF;\n  margin-top: 60px;\n}\n.Card__subheader {\n  margin-top: 6px;\n  color: #FFFFFF;\n}\n.Card__card {\n  width: 100%;\n  height: 435px;\n  background-color: #FFFFFF;\n  border-radius: 25px;\n  margin-top: 32px;\n  padding: 51px 56px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  display: flex;\n  justify-content: space-between;\n}\n.Card__left {\n  display: flex;\n  justify-content: space-between;\n  max-width: 496px;\n  width: 100%;\n}\n.Card__subImg {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 10px;\n}\n.Card__subImg img {\n  width: 110px;\n  height: 100px;\n}\n.Card__mainImg {\n  width: 348px;\n  height: 334px;\n}\n.Card__right {\n  max-width: 496px;\n  width: 100%;\n}\n.Card__variants {\n  display: flex;\n  justify-content: space-between;\n  max-width: 213px;\n  width: 100%;\n  margin-top: 23px;\n}\n.Card__variant {\n  position: relative;\n}\n.Card__variant input {\n  width: 35px;\n  height: 35px;\n  border-radius: 7px;\n  background-color: #F6FAFF;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.Card__variant input:checked {\n  border: 1px solid #373737;\n}\n.Card__variant label {\n  position: absolute;\n  top: 7.5px;\n  left: 8.5px;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n}\n.Card__characters {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 18px;\n}\n.Card__character {\n  width: 100%;\n}\n.Card__character::after {\n  content: \"..................................................................................................................................................................................................................................................................................................\";\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"PTSans-Regular\";\n}\n.Card__character p span:first-of-type {\n  float: left;\n  margin-right: 3px;\n}\n.Card__character p span:last-of-type {\n  float: right;\n  margin-left: 3px;\n}\n.Card__price {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.Card__discount {\n  text-decoration: line-through;\n  font-size: 24px;\n  color: #E3EBEF;\n}\n.Card__priceFlexLeft {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.Card__priceFlexRight {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.Card__cartButton {\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n  color: #FFFFFF;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  width: 100%;\n  height: 72px;\n}\n.Card__service {\n  width: 100%;\n  background-color: #FFFFFF;\n  height: 230px;\n  padding: 50px 56px;\n  border-radius: 25px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n  margin-top: 20px;\n}\n.Card__services {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-top: 20px;\n}\n.Card__options {\n  display: flex;\n  gap: 10px;\n}\n.Card__checkbox {\n  position: relative;\n}\n.Card__checkbox input {\n  display: none;\n}\n.Card__checkbox input:checked + label {\n  color: #FFFFFF;\n  background-color: #69AEFF;\n}\n.Card__checkbox input:checked + label span {\n  background-color: rgba(255, 255, 255, 0.56);\n}\n.Card__checkbox label {\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n  padding: 6px 10px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 6px rgba(63, 104, 153, 0.13);\n  border-radius: 6px;\n}\n.Card__checkbox label span {\n  background-color: #E3EBEF;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.06);\n  border-radius: 3px;\n  font-family: \"PTSans-Bold\";\n  padding: 0 5px;\n}\n.Card__tabs {\n  max-width: 870px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  margin-top: 40px;\n}\n.Card__tab {\n  cursor: pointer;\n}\n.Card__tab hr {\n  display: none;\n  margin: 0 auto;\n  margin-top: 6px;\n  max-width: 44px;\n  border: 2px solid #69AEFF;\n  border-radius: 8px;\n}\n.Card__content {\n  display: none;\n}\n\n.Card__description {\n  display: none;\n  margin-top: 32px;\n  margin-bottom: 40px;\n  width: 100%;\n  min-height: 555px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 88px 62px;\n  line-height: 21px;\n}\n\n.Card__feature {\n  width: 100%;\n  min-height: 230px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 50px 56px;\n  margin-top: 32px;\n}\n.Card__featureMargin {\n  margin-top: 60px !important;\n}\n.Card__descr {\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.Card__featureLast {\n  margin-bottom: 40px;\n}\n\n.Card__sendFeedback {\n  margin-top: 32px;\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  font-size: 24px;\n}\n.Card__feedback {\n  width: 100%;\n  height: auto;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  padding: 50px 56px 68px 56px;\n  margin-top: 40px;\n}\n.Card__user {\n  display: flex;\n  align-items: center;\n  gap: 19px;\n}\n.Card__userPhoto {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  background-color: #D9D9D9;\n}\n.Card__userInfo {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.Card__userRate {\n  display: flex;\n  gap: 3px;\n  margin-top: 18px;\n}\n.Card__feedbackContent {\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.Card__feedbackContent p {\n  margin-top: 14px;\n}\n\n.Card__userQuestion {\n  margin-top: 14px;\n}\n.Card__response {\n  font-size: 12px;\n  color: #B6B6B6;\n  margin-top: 14px;\n}\n.Card__userResponse {\n  padding-left: 38px;\n  margin-top: 20px;\n}\n.Card__userName span {\n  color: #B6B6B6;\n}\n.Card textarea {\n  resize: none;\n  width: 100%;\n  height: 117px;\n  background-color: #F6FAFF;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #373737;\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n.Card textarea:focus {\n  border: 1px solid #373737;\n}\n.Card textarea::placeholder {\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  color: #B6B6B6;\n}\n.Card__sendButtons {\n  margin-top: 26px;\n  display: flex;\n  justify-content: space-between;\n  max-width: 556px;\n  margin-left: auto;\n}\n.Card__cancel {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  border: 2px solid #B6B6B6;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  font-family: \"PTSans-Regular\";\n  font-size: 24px;\n  color: #B6B6B6;\n}\n.Card__send {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  background-color: #69AEFF;\n  border-radius: 10px;\n  font-family: \"PTSans-Regular\";\n  font-size: 24px;\n  color: #FFFFFF;\n}\n\n.Card__docs {\n  width: 100%;\n  height: auto;\n  padding: 50px 56px;\n  margin-top: 60px;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 34px;\n}\n.Card__docElement {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.Card__docElement img {\n  width: 48px;\n  height: 48px;\n}\n\n.Review__flex {\n  display: flex;\n  gap: 15px;\n  padding-top: 60px;\n}\n.Review__flex a {\n  color: #373737;\n  font-family: \"PTSans-Regular\";\n}\n.Review__flex p {\n  color: #373737;\n}\n.Review h2 {\n  color: #373737;\n}\n.Review__header {\n  margin-top: 60px;\n}\n.Review__character {\n  width: 100%;\n  height: auto;\n  padding: 50px 56px;\n  margin-top: 60px;\n  margin-bottom: 40px;\n  background: #FFFFFF;\n  border-radius: 25px;\n  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\n}\n.Review__content {\n  margin-top: 88px;\n  display: flex;\n  flex-direction: column;\n  gap: 27px;\n}\n.Review input {\n  width: 100%;\n  height: 62px;\n  background-color: #F6FAFF;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 16px;\n  margin-top: 26px;\n  padding: 20px;\n}\n.Review input::placeholder {\n  font-family: \"PTSans-Regular\";\n  color: #B6B6B6;\n  font-size: 16px;\n}\n.Review input:focus {\n  border: 1px solid #373737;\n}\n.Review textarea {\n  resize: none;\n  width: 100%;\n  height: 170px;\n  background-color: #F6FAFF;\n  border-radius: 7px;\n  border: none;\n  outline: none;\n  font-family: \"PTSans-Regular\";\n  font-size: 12px;\n  color: #373737;\n  margin-top: 26px;\n  padding: 20px;\n}\n.Review textarea:focus {\n  border: 1px solid #373737;\n}\n.Review__add {\n  max-width: 260px;\n  width: 100%;\n  height: 74px;\n  font-size: 24px;\n  color: #FFFFFF;\n  font-family: \"PTSans-Bold\";\n  background-color: #69AEFF;\n  border-radius: 10px;\n  margin-top: 50px;\n}\n.Review__policy {\n  color: #B6B6B6;\n  margin-top: 26px;\n}\n.Review__policy span {\n  color: #373737;\n}","@font-face {\n  font-family: 'PTSans-Bold';\n  font-weight: 700;\n  src: url('../fonts/PTSans-Bold.woff') format('woff'),\n    url('../fonts/PTSans-Bold.woff2') format('woff2');\n}\n@font-face {\n  font-family: 'PTSans-Regular';\n  font-weight: 700;\n  src: url('../fonts/PTSans-Regular.woff') format('woff'),\n    url('../fonts/PTSans-Regular.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'Srbija-Sans';\n  font-weight: 700;\n  src: url('../fonts/Srbija-Sans.woff') format('woff'),\n    url('../fonts/Srbija-Sans.woff2') format('woff2');\n}\n","body {\n  font-family: 'PTSans-Bold';\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\np {\n  font-family: 'PTSans-Regular';\n  color: #373737;\n  font-size: 16px;\n  margin: 0;\n}\n\nh1 {\n  font-family: 'Srbija-Sans';\n  margin: 0;\n  font-size: 32px;\n  color: #373737;\n}\n\nh2 {\n  font-family: 'Srbija-Sans';\n  font-size: 40px;\n  margin: 0;\n}\n\nh3 {\n  font-family: 'PTSans-Bold';\n  color: #373737;\n  margin: 0;\n}\n\nhr {\n  margin: 0;\n}\n\ninput {\n  padding: 0;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1260px;\n  margin: 0 auto;\n\n  padding: 0 20px;\n}\n\n.empty {\n  width: 100%;\n  height: 110px;\n}\n\n.active {\n  display: block !important;\n}\n\n@media screen and (max-width: 900px) {\n  .empty {\n    height: 35px;\n  }\n}",".headerUp {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    height: 60px;\r\n\r\n    h3 {\r\n        font-size: 24px;\r\n    }\r\n\r\n    &__phoneNumber {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__menu {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        width: 35.5%;\r\n        gap: 10px;\r\n\r\n        font-size: 16px;\r\n\r\n        p {\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        background-color: #69AEFF;\r\n        color: #FFFFFF;\r\n        \r\n        padding: 8.5px 17px;\r\n        border-radius: 7px;\r\n\r\n        font-size: 16px;\r\n        font-family: 'PTSans-Bold';\r\n    }\r\n}\r\n\r\n.headerCenter {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    &__burger {\r\n        display: none;\r\n    }\r\n\r\n    &__close {\r\n        display: none;\r\n        margin-right: 2px;\r\n    }\r\n\r\n    &__rightMenu {\r\n        display: none;\r\n    }\r\n\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    height: 100px;\r\n\r\n    &__logo {\r\n        width: 14.2%;\r\n        img {\r\n            width: 100%;\r\n        }\r\n    }\r\n    \r\n    &__center {\r\n        position: relative;\r\n        display: flex;\r\n\r\n        height: 54px;\r\n        width: 57%;\r\n    }\r\n\r\n    &__input {\r\n        outline: none;\r\n        border: none;\r\n        border-radius: 10px 0px 0px 10px;\r\n        font-family: 'PTSans-Regular';\r\n\r\n        width: 100%;\r\n        padding-left: 170px;\r\n        \r\n        background-color: #F6FAFF;\r\n        color: #373737;\r\n\r\n        &::placeholder {\r\n            color: #B6B6B6;\r\n        }\r\n    }\r\n\r\n    &__category {\r\n        position: absolute;\r\n        z-index: 1;\r\n\r\n        left: 20px;\r\n        top: 17.8px;\r\n\r\n        display: flex;\r\n        gap: 3px;\r\n    }\r\n\r\n    hr {\r\n        position: absolute;\r\n        z-index: 1;\r\n\r\n        left: 137px;\r\n        top: 28px;\r\n\r\n        width: 34px;\r\n        padding: 0;\r\n        height: 0;\r\n        border: none;\r\n        transform: rotate(90deg);\r\n\r\n        border-top: 1px solid #B6B6B6;\r\n    }\r\n\r\n    &__search {\r\n        padding: 11px 4%;\r\n\r\n        background-color: #69AEFF;\r\n        border-radius: 0px 10px 10px 0px;\r\n    }\r\n\r\n    &__menu {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        gap: 10px;\r\n\r\n        width: 23.5%;\r\n    }\r\n\r\n    &__item {\r\n        cursor: pointer;\r\n        position: relative;\r\n\r\n        img {\r\n            display: block;\r\n            margin: 0 auto;\r\n\r\n            margin-bottom: 9px;\r\n        }\r\n\r\n        svg {\r\n            display: block;\r\n            margin: 0 auto;\r\n\r\n            \r\n\r\n            fill: #E3EBEF;\r\n\r\n            &:hover {\r\n                fill: #69AEFF;\r\n                stroke: #69AEFF;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__description {\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 12px;\r\n    }\r\n\r\n    &__cart {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        position: absolute;\r\n        top: -8px;\r\n        left: 29.5px;\r\n\r\n        width: 16px;\r\n        height: 16px;\r\n        border-radius: 50%;\r\n\r\n        background-color: #F04438;\r\n        \r\n        p {\r\n            margin-top: 1px;\r\n            margin-right: 1px;\r\n\r\n            width: fit-content;\r\n            font-family: 'PTSans-Bold';\r\n            font-size: 11px;\r\n            color: #FFFFFF;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        display: block;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n.headerCenterBg {\r\n    width: 100vw;\r\n    height: 100px;\r\n\r\n    position: absolute;\r\n    left: 0;\r\n    top: 60px;\r\n    z-index: 0;\r\n\r\n    box-shadow: 0px 10px 20px rgba(9, 60, 83, 0.05);\r\n}\r\n\r\n.headerBottom {\r\n    height: 54px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    max-width: 810px;\r\n    margin: 0 auto;\r\n\r\n    &__item {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 12px;\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 0;\r\n\r\n        background-color: #F6FAFF;\r\n    }\r\n}\r\n\r\n.headerBottomBg {\r\n    width: 100vw;\r\n    height: 54px;\r\n\r\n    z-index: -1;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 160px;\r\n    background-color: #F6FAFF;\r\n}\r\n\r\n.Modal {\r\n    display: none;\r\n\r\n    z-index: 5;\r\n\r\n    &__input {\r\n        display: flex !important;\r\n    }\r\n\r\n    &__block {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 243px;\r\n        background-color: #FFFFFF;\r\n        padding: 30px 24px;\r\n        display: block !important;\r\n\r\n        display: flex;\r\n        z-index: 6;\r\n    }\r\n\r\n    input {\r\n        height: 100%;\r\n    }\r\n\r\n    &__bottom {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin-top: 30px;\r\n    }\r\n\r\n    &__menuLeft {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        height: 104px;\r\n    }\r\n\r\n    &__center {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        height: 24px;\r\n        text-align: center;\r\n        \r\n        p {\r\n            margin: auto 0;\r\n        }\r\n    }\r\n\r\n    &__right {\r\n        height: 110px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n\r\n        h3 {\r\n            margin: auto 0;\r\n        }\r\n    }\r\n\r\n    &__phone {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: right;\r\n        height: 24px;\r\n    }\r\n\r\n    &__phnBtn {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1140px) {\r\n    .headerCenter {\r\n        &__menu {\r\n            gap: 5px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    .headerUp {\r\n        h5 {\r\n            font-size: 18px;\r\n        }\r\n    }\r\n    .headerCenter {\r\n        &__center {\r\n            width: 50%;\r\n        }\r\n\r\n        &__input {\r\n            padding-left: 150px;\r\n        }\r\n\r\n        hr {\r\n            left: 122px;\r\n        }\r\n\r\n        &__menu {\r\n            width: 220px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .headerUp {\r\n        &__menu {\r\n            width: 37%;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .headerUp {\r\n        display: none;\r\n    }\r\n\r\n    .headerCenter {\r\n        \r\n        &__center {\r\n            display: none;\r\n            width: 100%;\r\n        }\r\n\r\n        &__menu {\r\n            display: none;\r\n        }\r\n\r\n        &__burger {\r\n            display: block;\r\n        }\r\n\r\n        &__rightMenu {\r\n            display: block;\r\n            display: flex;\r\n            gap: 32px;\r\n        }\r\n\r\n        &__cart {\r\n            left: 17.5px;\r\n        }\r\n\r\n        &__logo {\r\n            width: 172px;\r\n        }\r\n\r\n        &__item {\r\n            display: flex;\r\n            gap: 25px;\r\n            align-items: center;\r\n\r\n            a {\r\n                font-size: 16px;\r\n            }\r\n        }\r\n\r\n        &__img {\r\n            img {\r\n                margin: auto 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    .headerUp {\r\n        &__menu {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            flex-direction: column;\r\n            height: 104px;\r\n            width: 29.5%;\r\n        }\r\n    }\r\n\r\n    .headerCenterBg {\r\n        top: 0;\r\n    }\r\n\r\n    .headerBottomBg {\r\n        top: 100px;\r\n    }\r\n}\r\n\r\n// @media screen and (max-width: 640px) {\r\n\r\n// }\r\n@media screen and (max-width: 640px) {\r\n    .Modal {\r\n\r\n        &__block {\r\n            padding: 0;\r\n            padding-top: 29px;\r\n        }\r\n    }\r\n    .headerUp {\r\n        &__menu {\r\n            width: 155px;\r\n            gap: 10px;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n    .headerBottom {\r\n        p {\r\n            font-size: 12px;\r\n        }\r\n\r\n        &__item {\r\n            gap: 8px;\r\n        }\r\n    }\r\n\r\n    .Modal {\r\n        p {\r\n            font-size: 12px;\r\n        }\r\n\r\n        a {\r\n            font-size: 12px;\r\n        }\r\n\r\n        h3 {\r\n            font-size: 16px;\r\n        }\r\n    }\r\n\r\n    .headerCenter {\r\n        &__center {\r\n            height: 41px;\r\n\r\n            input {\r\n                padding-left: 130px;\r\n                &::placeholder {\r\n                    font-size: 12px;\r\n                }\r\n            }\r\n        }\r\n\r\n        &__category {\r\n            top: 13.8px;\r\n        }\r\n\r\n        hr {\r\n            width: 25px;\r\n            top: 20px;\r\n            left: 107px;\r\n        }\r\n\r\n        &__search {\r\n\r\n            padding: 0 4%;\r\n            \r\n            img {\r\n                width: 23px;\r\n                height: 23px;\r\n            }\r\n        }\r\n    }\r\n\r\n    .headerUp {\r\n        &__menu {\r\n            width: 27%;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n\r\n    .Modal {\r\n        &__right {\r\n            display: none;\r\n        }\r\n\r\n        &__phnBtn {\r\n            display: block;\r\n            margin-top: 16px;\r\n        }\r\n\r\n        &__phone {\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n    .headerUp {\r\n        &__button {\r\n            margin-top: 20px;\r\n            width: 100%;\r\n            height: 46px;\r\n        }\r\n\r\n        &__menu {\r\n            width: 55%;\r\n        }\r\n    }\r\n\r\n    .headerCenter {\r\n        &__rightMenu {\r\n            gap: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n    .headerCenter {\r\n        &__logo {\r\n            width: 129px;\r\n            height: 40.45px;\r\n        }\r\n    }\r\n\r\n    .headerBottom {\r\n        height: 65px;\r\n        &__item {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    .headerBottomBg {\r\n        height: 65px;\r\n    }\r\n\r\n    .Modal {\r\n        &__block {\r\n            padding-top: 10px;\r\n        }\r\n\r\n        &__bottom {\r\n            margin-top: 25px;\r\n        }\r\n\r\n        &__menuLeft {\r\n            height: 82px;\r\n        }\r\n    }\r\n\r\n    .headerUp {\r\n        &__menu {\r\n            height: 82px;\r\n        }\r\n    }\r\n}\r\n\r\n",".Banners {\r\n    margin-top: 90px;\r\n    color: #FFFFFF;\r\n\r\n    h2 {\r\n        font-size: 40px;\r\n    }\r\n    \r\n    &__grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(6, 1fr);\r\n        grid-template-rows: repeat(2, 0.5fr);\r\n        grid-column-gap: 16px;\r\n        grid-row-gap: 32px;\r\n    }\r\n\r\n    &__small {\r\n        position: relative;\r\n        \r\n        max-width: 176px;\r\n        width: 100%;\r\n        height: 240px;\r\n\r\n        border-radius: 17px; \r\n    }\r\n\r\n    &__large {\r\n        position: relative;\r\n        \r\n        max-width: 800px;\r\n        width: 100%;\r\n        height: 240px;\r\n\r\n        border-radius: 17px; \r\n    }\r\n\r\n    &__medium {\r\n        position: relative;\r\n        \r\n        max-width: 384px;\r\n        width: 100%;\r\n        height: 190px;\r\n\r\n        border-radius: 17px; \r\n\r\n        z-index: -3;\r\n    }\r\n\r\n    &__elipseM {\r\n        width: 100%;\r\n        height: 190px;\r\n\r\n        border-radius: 17px; \r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        overflow: hidden;\r\n        z-index: -2;\r\n    }\r\n\r\n    &__elipseS {\r\n        width: 100%;\r\n        height: 240px;\r\n\r\n        border-radius: 17px; \r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        overflow: hidden;\r\n    }\r\n\r\n    &__elipseL {\r\n        width: 100%;\r\n        height: 240px;\r\n\r\n        border-radius: 17px; \r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        overflow: hidden;\r\n        z-index: -1;\r\n    }\r\n\r\n    &__first {\r\n        text-align: center;\r\n\r\n        background-color: #373737; \r\n        \r\n        grid-area: 1 / 1 / 2 / 3;\r\n        h2 {\r\n            margin-top: 130px;\r\n        }\r\n\r\n        img {\r\n            position: absolute;\r\n\r\n            left: 32px;\r\n            bottom: 64px;\r\n\r\n            max-width: 100%;\r\n        }\r\n    }\r\n\r\n    &__second {\r\n        background-color: #69AEFF;\r\n\r\n        grid-area: 1 / 3 / 2 / 5;\r\n        \r\n        h2 {\r\n            position: absolute;\r\n            right: 40px;\r\n            bottom: 20px;\r\n            z-index: 3;\r\n        }\r\n\r\n        &__air {\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: 0;\r\n            z-index: 1;\r\n\r\n            max-width: 100%;\r\n        }\r\n\r\n        &__elipseL {\r\n            width: 245px;\r\n            height: 245px;\r\n            border-radius: 50%;\r\n\r\n            background-color: #D3EAFF;\r\n\r\n            position: absolute;\r\n            left: -60px;\r\n            top: 50px;\r\n            z-index: 0;\r\n        }\r\n\r\n        &__elipseR {\r\n            width: 245px;\r\n            height: 245px;\r\n            border-radius: 50%;\r\n\r\n            background-color: #D3EAFF;\r\n\r\n            position: absolute;\r\n            left: 200px;\r\n            top: -155px;\r\n            z-index: 0;\r\n        }\r\n    }\r\n\r\n    &__third {\r\n        background-color: #69AEFF;\r\n        z-index: 1;\r\n\r\n        grid-area: 1 / 5 / 2 / 7;\r\n\r\n        h2 {\r\n            position: absolute;\r\n            right: 40px;\r\n            bottom: 20px;\r\n        }\r\n\r\n        &__elipse {\r\n            width: 245px;\r\n            height: 245px;\r\n            border-radius: 50%;\r\n\r\n            background-color: #D3EAFF;\r\n\r\n            position: absolute;\r\n            z-index: -1;\r\n            left: -21px;\r\n            top: 56px;\r\n        }\r\n    }\r\n\r\n    &__pipe {\r\n        z-index: -1;\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 15px;\r\n    }\r\n\r\n    &__freon {\r\n        z-index: 0;\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: -50px;\r\n    }\r\n\r\n    &__four {\r\n        background-color: #C894C4;\r\n        z-index: 1;\r\n\r\n        text-align: center;\r\n\r\n        grid-area: 2 / 1 / 3 / 2;\r\n\r\n        h2 {\r\n            font-size: 20px;\r\n            margin-top: 12px;\r\n        }\r\n\r\n        img {\r\n            margin-top: 60px;\r\n        }\r\n\r\n        &__elipse {\r\n            width: 245px;\r\n            height: 245px;\r\n            border-radius: 50%;\r\n\r\n            position: absolute;\r\n            left: -113px;\r\n            top: 77px;\r\n            z-index: -1;\r\n            background-color: #BD89B9;\r\n        }\r\n    }\r\n\r\n    &__five {\r\n        background-color: #82D42B;\r\n        z-index: 1;\r\n        overflow: hidden;\r\n\r\n        text-align: center;\r\n\r\n        grid-area: 2 / 2 / 3 / 3;\r\n\r\n        img {\r\n            margin-top: 44px;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 20px;\r\n            margin-top: 12px;\r\n        }\r\n\r\n        &__elipse {\r\n            width: 245px;\r\n            height: 245px;\r\n            border-radius: 50%;\r\n\r\n            position: absolute;\r\n            left: -34px;\r\n            top: -151px;\r\n            z-index: -1;\r\n            background-color: #70B428;\r\n        }\r\n    }\r\n\r\n    &__six {\r\n        background-color: #373737;\r\n        z-index: 1;\r\n        overflow: hidden;\r\n\r\n        grid-area: 2 / 3 / 3 / 7;\r\n        img {\r\n            position: absolute;\r\n            top: 25px;\r\n            right: 77px;\r\n\r\n            max-width: 100%;\r\n        }\r\n\r\n        h2 {\r\n            width: 524px;\r\n            padding: 53px 37px;\r\n            z-index: 4;\r\n\r\n            position: relative;\r\n        }\r\n        span {\r\n            color: #69AEFF;\r\n        }\r\n\r\n\r\n        &__elipse {\r\n            width: 320px;\r\n            height: 320px;\r\n\r\n            border-radius: 50%;\r\n\r\n            background-color: #4E4E4E;\r\n\r\n            position: absolute;\r\n            top: 27px;\r\n            right: -20px;\r\n        }\r\n    }\r\n\r\n    &__mobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1160px) {\r\n    .Banners {\r\n\r\n\r\n        &__six {\r\n\r\n            img {\r\n                right: 3%;\r\n            }\r\n            &__elipse {\r\n                right: -10%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 1030px) {\r\n    .Banners {\r\n        &__first {\r\n            img {\r\n                left: 10px;\r\n            }\r\n        }\r\n\r\n        &__six {\r\n\r\n            img {\r\n                right: 3%;\r\n            }\r\n            &__elipse {\r\n                right: -10%;\r\n            }\r\n        }\r\n\r\n        h2 {\r\n            font-size: 32px;\r\n        }\r\n\r\n        &__four {\r\n            h2 {\r\n                font-size: 18px\r\n            }\r\n        }\r\n        &__five {\r\n            h2 {\r\n                font-size: 18px\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    .Banners {\r\n        &__freon {\r\n            max-width: 190px;\r\n        }\r\n\r\n        &__pipe {\r\n            max-width: 140px;\r\n        }\r\n        \r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    .Banners {\r\n        margin-top: 60px;\r\n\r\n        &__grid {\r\n            grid-row-gap: 16px;\r\n        }\r\n\r\n        &__small {\r\n            height: 144px;\r\n            max-width: 120px;\r\n        }\r\n\r\n        &__medium {\r\n            height: 115px;\r\n        }\r\n\r\n        &__large {\r\n            height: 144px;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 24px;\r\n        }\r\n\r\n        &__first {\r\n            img {\r\n                left: 20px;\r\n                bottom: 38px;\r\n            }\r\n\r\n            h2 {\r\n                margin-top: 72px;\r\n            }\r\n        }\r\n\r\n        &__elipseM {\r\n            height: 115px;\r\n        }\r\n\r\n        &__second {\r\n            &__elipseL {\r\n                width: 146px;\r\n                height: 146px;\r\n\r\n                left: -35px;\r\n                top: 25px;\r\n            }\r\n\r\n            &__elipseR {\r\n                width: 146px;\r\n                height: 146px;\r\n\r\n                left: 118px;\r\n                top: -80px;\r\n            }\r\n\r\n            h2 {\r\n                right: 22px;\r\n                bottom: 12px;\r\n            }\r\n        }\r\n        &__third {\r\n            &__elipse {\r\n                width: 146px;\r\n                height: 146px;\r\n\r\n                left: -13px;\r\n                top: 33px;\r\n            }\r\n\r\n            h2 {\r\n                bottom: 12px;\r\n                right: 20px;\r\n            }\r\n        }\r\n\r\n        &__freon {\r\n            max-width: 140px;\r\n\r\n            left: -15px;\r\n        }\r\n\r\n        &__pipe {\r\n            max-width: 120px;\r\n        }\r\n\r\n        &__four {\r\n            img {\r\n                margin-top: 36px;\r\n                max-width: 55px;\r\n            }\r\n\r\n            h2 {\r\n                font-size: 12px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 140px;\r\n                height: 140px;\r\n\r\n                top: 46px;\r\n                left: -58px;\r\n            }\r\n        }\r\n\r\n        &__elipseS {\r\n            height: 144px;\r\n        }\r\n\r\n        &__five {\r\n            img {\r\n                margin-top: 30px;\r\n                max-width: 63px;\r\n            }\r\n\r\n            h2 {\r\n                font-size: 12px;\r\n                max-width: 80px;\r\n\r\n                margin: 0 auto;\r\n                margin-top: 2px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 140px;\r\n                height: 140px;\r\n\r\n                top: -80px;\r\n                left: -14px;\r\n            }\r\n        }\r\n\r\n        &__six {\r\n            img {\r\n                max-width: 140px;\r\n\r\n                top: 5px;\r\n                right: 30px;\r\n            }\r\n\r\n            h2 {\r\n                max-width: 300px;\r\n\r\n                padding: 0;\r\n\r\n                padding-top: 31px;\r\n                padding-left: 22px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 188px;\r\n                height: 188px;\r\n\r\n                top: 16px;\r\n                right: -12px;\r\n            }\r\n        }\r\n\r\n        &__elipseL {\r\n            height: 144px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 685px) {\r\n    .Banners {\r\n        &__freon {\r\n            left: -35px;\r\n        }\r\n    \r\n        &__pipe {\r\n            max-width: 120px;\r\n\r\n            left: 0;\r\n        }\r\n\r\n        &__six {\r\n            img {\r\n                right: 10px;\r\n            }\r\n\r\n            &__elipse {\r\n                right: -32px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .Banners {\r\n        &__grid {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            grid-template-rows: repeat(3, 1fr);\r\n            grid-column-gap: 13px;\r\n            grid-row-gap: 16px;\r\n        }\r\n\r\n        &__small {\r\n            height: 115px;\r\n        }\r\n\r\n        &__large {\r\n            height: 115px;\r\n        }\r\n\r\n        &__first {\r\n            grid-area: 1 / 1 / 2 / 3;\r\n        }\r\n\r\n        &__second {\r\n            grid-area: 1 / 3 / 2 / 5;\r\n        }\r\n\r\n        &__third {\r\n            grid-area: 2 / 2 / 3 / 4;\r\n        }\r\n\r\n        &__four {\r\n            grid-area: 2 / 1 / 3 / 2;\r\n        }\r\n\r\n        &__five {\r\n            grid-area: 2 / 4 / 3 / 5;\r\n        }\r\n\r\n        &__six {\r\n            grid-area: 3 / 1 / 4 / 5;\r\n        }\r\n\r\n        &__freon {\r\n            max-width: 120px;\r\n\r\n            left: -20px;\r\n        }\r\n\r\n        &__pipe {\r\n            max-width: 110px;\r\n            left: 6px;\r\n        }\r\n\r\n        &__four {\r\n            img {\r\n                margin-top: 20px;\r\n                max-width: 40px;\r\n            }\r\n        }\r\n\r\n        &__five {\r\n            img {\r\n                margin-top: 12px;\r\n                max-width: 50px;\r\n            }\r\n\r\n            h2{\r\n                margin-top: 4px;\r\n            }\r\n        }\r\n\r\n        &__elipseS {\r\n            height: 100%;\r\n        }\r\n\r\n        &__six {\r\n            img {\r\n                max-width: 120px;\r\n\r\n                top: 5px;\r\n                right: 40px;\r\n            }\r\n\r\n            h2 {\r\n                padding-top: 16px;\r\n                padding-left: 22px;\r\n            }\r\n\r\n            &__elipse {\r\n                top: 10px;\r\n            }\r\n        }\r\n\r\n        &__elipseL {\r\n            height: 100%;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .Banners {\r\n        margin-top: 43px;\r\n\r\n        &__small {\r\n            height: 78px;\r\n        }\r\n\r\n        &__medium {\r\n            height: 78px;\r\n        }\r\n\r\n        &__large {\r\n            height: 78px;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 16px;\r\n        }\r\n\r\n        &__first {\r\n            img {\r\n                left: 13px;\r\n                bottom: 25px;\r\n            }\r\n\r\n            h2 {\r\n                margin-top: 50px;\r\n            }\r\n        }\r\n\r\n        &__elipseM {\r\n            height: 100%;\r\n        }\r\n\r\n        &__second {\r\n            &__elipseL {\r\n                width: 100px;\r\n                height: 100px;\r\n\r\n                left: -10px;\r\n                top: 15px;\r\n            }\r\n\r\n            &__elipseR {\r\n                width: 100px;\r\n                height: 100px;\r\n\r\n                left: 80px;\r\n                top: -60px;\r\n            }\r\n\r\n            h2 {\r\n                right: 15px;\r\n                bottom: 8px;\r\n            }\r\n        }\r\n        &__third {\r\n            &__elipse {\r\n                width: 100px;\r\n                height: 100px;\r\n\r\n                left: -9px;\r\n                top: 22px;\r\n            }\r\n\r\n            h2 {\r\n                bottom: 8px;\r\n                right: 15px;\r\n            }\r\n        }\r\n\r\n        &__freon {\r\n            max-width: 90px;\r\n\r\n            left: -15px;\r\n        }\r\n\r\n        &__pipe {\r\n            max-width: 80px;\r\n        }\r\n\r\n        &__four {\r\n            img {\r\n                margin-top: 10px;\r\n                max-width: 38px;\r\n            }\r\n\r\n            h2 {\r\n                font-size: 8px;\r\n\r\n                margin-top: 2px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 100px;\r\n                height: 100px;\r\n\r\n                top: 12px;\r\n                left: -40px;\r\n            }\r\n        }\r\n\r\n     \r\n\r\n        &__five {\r\n            img {\r\n                margin-top: 6px;\r\n                max-width: 38px;\r\n            }\r\n\r\n            h2 {\r\n                font-size: 8px;\r\n\r\n                max-width: 45px;\r\n                margin-top: 0px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 100px;\r\n                height: 100px;\r\n\r\n                top: -80px;\r\n                left: -10px;\r\n            }\r\n        }\r\n\r\n        &__six {\r\n            img {\r\n                max-width: 80px;\r\n\r\n                top: 0px;\r\n                right: 31px;\r\n            }\r\n\r\n            h2 {\r\n                max-width: 190px;\r\n\r\n                padding-top: 14px;\r\n                padding-left: 15px;\r\n            }\r\n\r\n            &__elipse {\r\n                width: 130px;\r\n                height: 130px;\r\n\r\n                top: 5px;\r\n                right: -7px;\r\n            }\r\n        }\r\n\r\n        &__elipseL {\r\n            height: 144px;\r\n        }\r\n    }\r\n}",".subHeader {\r\n    margin-top: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    &__seeAll {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 7px;\r\n        height: fit-content;\r\n\r\n        img {\r\n            width: 16.68px;\r\n            height: 8.36px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .subHeader {\r\n        margin-top: 40px;\r\n\r\n        h1 {\r\n            font-size: 24px;\r\n        }\r\n\r\n        p {\r\n            font-size: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .subHeader {\r\n        margin-top: 20px;\r\n\r\n        h1 {\r\n            font-size: 20px;\r\n        }\r\n\r\n        p {\r\n            font-size: 16px;\r\n        }\r\n    }\r\n}","/* Slider */\n\n.slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n    position: relative;\n    overflow: hidden;\n    display: block;\n    margin: 0;\n    padding: 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    &.dragging {\n        cursor: pointer;\n        cursor: hand;\n    }\n}\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    left: 0;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    gap: 32px;\n\n\n    &:before,\n    &:after {\n        content: \"\";\n        display: table;\n    }\n\n    &:after {\n        clear: both;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n}\n.slick-slide {\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    [dir=\"rtl\"] & {\n        float: right;\n    }\n    img {\n        display: block;\n    }\n    &.slick-loading img {\n        display: none;\n    }\n\n    display: none;\n\n    &.dragging img {\n        pointer-events: none;\n    }\n\n    .slick-initialized & {\n        display: block;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n\n    .slick-vertical & {\n        display: block;\n        height: auto;\n        border: 1px solid transparent;\n    }\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n","@charset \"UTF-8\";\n\n// Default Variables\n\n// Slick icon entity codes outputs the following\n// \"\\2190\" outputs ascii character \"←\"\n// \"\\2192\" outputs ascii character \"→\"\n// \"\\2022\" outputs ascii character \"•\"\n\n$slick-font-path: \"./fonts/\" !default;\n$slick-font-family: \"slick\" !default;\n$slick-loader-path: \"./\" !default;\n$slick-arrow-color: white !default;\n$slick-dot-color: black !default;\n$slick-dot-color-active: $slick-dot-color !default;\n$slick-prev-character: \"\\2190\" !default;\n$slick-next-character: \"\\2192\" !default;\n$slick-dot-character: \"\\2022\" !default;\n$slick-dot-size: 6px !default;\n$slick-opacity-default: 0.75 !default;\n$slick-opacity-on-hover: 1 !default;\n$slick-opacity-not-active: 0.25 !default;\n\n@function slick-image-url($url) {\n    @if function-exists(image-url) {\n        @return image-url($url);\n    }\n    @else {\n        @return url($slick-loader-path + $url);\n    }\n}\n\n@function slick-font-url($url) {\n    @if function-exists(font-url) {\n        @return font-url($url);\n    }\n    @else {\n        @return url($slick-font-path + $url);\n    }\n}\n\n/* Slider */\n\n.slick-list {\n    .slick-loading & {\n        background: #fff slick-image-url(\"ajax-loader.gif\") center center no-repeat;\n    }\n}\n\n/* Icons */\n@if $slick-font-family == \"slick\" {\n    @font-face {\n        font-family: \"slick\";\n        src: slick-font-url(\"slick.eot\");\n        src: slick-font-url(\"slick.eot?#iefix\") format(\"embedded-opentype\"), slick-font-url(\"slick.woff\") format(\"woff\"), slick-font-url(\"slick.ttf\") format(\"truetype\"), slick-font-url(\"slick.svg#slick\") format(\"svg\");\n        font-weight: normal;\n        font-style: normal;\n    }\n}\n\n/* Arrows */\n\n.slick-prev,\n.slick-next {\n    position: absolute;\n    display: block;\n    height: 53px;\n    width: 53px;\n    line-height: 0px;\n    font-size: 0px;\n    cursor: pointer;\n    background: transparent;\n    color: transparent;\n\n    padding: 0;\n    border: none;\n    outline: none;\n    color: black !important;\n    \n    &:hover, &:focus {\n        outline: none;\n        color: #69AEFF;\n        &:before {\n            opacity: $slick-opacity-on-hover;\n        }\n    }\n    &.slick-disabled:before {\n        opacity: $slick-opacity-not-active;\n    }\n    &:before {\n        font-family: $slick-font-family;\n        font-size: 40px;\n        line-height: 1;\n        color: #69AEFF;\n        opacity: #69AEFF;\n        // color: $slick-arrow-color;\n        // opacity: $slick-opacity-default;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n}\n\n.slick-prev {\n    right: 53px;\n    bottom: -60px;\n    &:before {\n        content: $slick-prev-character;\n        [dir=\"rtl\"] & {\n            content: $slick-next-character;\n        }\n    }\n}\n\n.slick-next {\n    right: 0px;\n    bottom: -60px;\n    &:before {\n        content: $slick-next-character;\n        [dir=\"rtl\"] & {\n            content: $slick-prev-character;\n        }\n    }\n}\n\n/* Dots */\n\n.slick-dotted.slick-slider {\n    margin-bottom: 30px;\n}\n\n.slick-dots {\n    position: absolute;\n    bottom: -25px;\n    list-style: none;\n    display: block;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    li {\n        position: relative;\n        display: inline-block;\n        height: 20px;\n        width: 20px;\n        margin: 0 5px;\n        padding: 0;\n        cursor: pointer;\n        button {\n            border: 0;\n            background: transparent;\n            display: block;\n            height: 20px;\n            width: 20px;\n            outline: none;\n            line-height: 0px;\n            font-size: 0px;\n            color: transparent;\n            padding: 5px;\n            cursor: pointer;\n            &:hover, &:focus {\n                outline: none;\n                &:before {\n                    opacity: $slick-opacity-on-hover;\n                }\n            }\n            &:before {\n                position: absolute;\n                top: 0;\n                left: 0;\n                content: $slick-dot-character;\n                width: 20px;\n                height: 20px;\n                font-family: $slick-font-family;\n                font-size: $slick-dot-size;\n                line-height: 20px;\n                text-align: center;\n                color: $slick-dot-color;\n                opacity: $slick-opacity-not-active;\n                -webkit-font-smoothing: antialiased;\n                -moz-osx-font-smoothing: grayscale;\n            }\n        }\n        &.slick-active button:before {\n            color: $slick-dot-color-active;\n            opacity: $slick-opacity-default;\n        }\n    }\n}\n",".Service {\r\n    max-width: 1260px;\r\n    margin: 0 auto;\r\n  \r\n    padding: 0 20px;\r\n\r\n    background-image: url(../img/ServiceBg.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    width: 100%;\r\n    height: 610px;\r\n    \r\n    margin-top: 140px;\r\n\r\n    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\r\n    border-radius: 25px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n\r\n    &__option {\r\n        width: 48%;\r\n        height: 390px;\r\n\r\n        margin-top: 160px;\r\n\r\n        background-color: #FFFFFF;\r\n\r\n        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);\r\n        border-radius: 25px;\r\n\r\n        text-align: center;\r\n        img {\r\n            width: 330px;\r\n            height: 330px;\r\n        }\r\n    }\r\n\r\n    &__mobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    .Service {\r\n        h1 {\r\n            font-size: 26px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .Service {\r\n        margin-top: 40px;\r\n        height: 360px;\r\n        gap: 6px;\r\n\r\n        h1 {\r\n            font-size: 24px;\r\n\r\n            margin-top: -18px;\r\n        }\r\n\r\n        &__option {\r\n            margin-top: 96px;\r\n\r\n            height: 230px;\r\n\r\n\r\n            img {\r\n                width: 210px;\r\n                height: 210px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .Service {\r\n        h1 {\r\n            font-size: 19px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n    .Service {\r\n        padding: 0;\r\n        margin-top: 135px;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        height: 250px;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 18px;\r\n        margin-bottom: 150px;\r\n\r\n        &__desctop {\r\n            display: none;\r\n        }\r\n\r\n        &__mobile {\r\n            display: block;\r\n            margin: 0 auto;\r\n\r\n            width: 200px;\r\n            height: 200px;\r\n        }\r\n\r\n        &__option {\r\n            margin-top: 0;\r\n            width: 328px;\r\n\r\n            height: 220px;\r\n\r\n            img {\r\n                width: 190px;\r\n                height: 190px;\r\n            }\r\n        }\r\n\r\n        &__option1 {\r\n            order: 2;\r\n        }\r\n\r\n        &__option2 {\r\n            order: 1;\r\n        }\r\n\r\n        h1 {\r\n            margin-top: -5px;\r\n            padding-bottom: 15px;\r\n        }\r\n    }\r\n}",".Manafacture {\r\n    padding-top: 85px;\r\n\r\n    max-width: 1260px;\r\n    margin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .Manafacture {\r\n        padding-top: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n    .Manafacture {\r\n        padding-top: 18px;\r\n    }\r\n}",".Benefits {\r\n    margin-top: 200px;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-column-gap: 32px;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &__option {\r\n        max-width: 280px;\r\n        width: 100%;\r\n        height: 220px;\r\n        border-radius: 25px;\r\n\r\n        background-image: url('../img/Benefit.png');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center center;\r\n\r\n        text-align: center;\r\n\r\n        align-self: center;\r\n        justify-self: center;\r\n\r\n\r\n        h1 {\r\n            margin-top: 165px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    .Benefits {\r\n        margin-top: 90px;\r\n\r\n        grid-template-columns: 0.25fr 0.25fr;\r\n        grid-row-gap: 65px;\r\n\r\n        &__option {\r\n            width: 280px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 728px) {\r\n    .Benefits {\r\n        margin-top: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 610px) {\r\n    .Benefits {\r\n        margin-top: 20px;\r\n\r\n        grid-template-columns: 0.25fr;\r\n        grid-row-gap: 20px;\r\n    }\r\n}",".subBanner {\r\n    background-image: url('../img/subBannerBg.png');\r\n    background-size: 200%;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n\r\n    height: 561px;\r\n    width: 100vw;\r\n\r\n    margin-top: 60px;\r\n\r\n    &__content {\r\n        display: flex;\r\n        gap: 32px;\r\n    }\r\n\r\n    &__banner {\r\n        width: 592px;\r\n        height: 457px;\r\n\r\n        margin-top: 24px;\r\n\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);\r\n        border-radius: 25px;\r\n\r\n        background-color: #FFFFFF;\r\n    }\r\n\r\n    &__left {\r\n        padding: 80px 56px 20px 56px;\r\n\r\n        h3 {\r\n            font-size: 16px;\r\n        }\r\n    }\r\n\r\n    hr {\r\n        margin: 34px 0;\r\n\r\n        width: 100%;\r\n        height: 3px;\r\n\r\n        background-color: #69AEFF;\r\n        border-radius: 6px;\r\n\r\n        border: none;\r\n    }\r\n\r\n    &__description {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        gap: 13px;\r\n\r\n        cursor: pointer;\r\n    }\r\n\r\n\r\n    &__right {\r\n        padding: 48px 56px;\r\n\r\n        p {\r\n            font-size: 12px;\r\n        }\r\n\r\n        input {\r\n            width: 100%;\r\n\r\n            outline: none;\r\n            border: none;\r\n            border-radius: 7px;\r\n\r\n            background-color: #F6FAFF;\r\n\r\n            &::placeholder {\r\n                color: #E3EBEF;\r\n                height: fit-content;\r\n                width: fit-content;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__email {\r\n        color: #E3EBEF;\r\n        \r\n        margin-top: 20px;\r\n\r\n        span {\r\n            color: #F04438;\r\n        }\r\n    }\r\n    \r\n\r\n    &__emailInput {\r\n        height: 42px;\r\n\r\n        padding: 13px 0px 13px 22px;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    &__messageInput {\r\n        height: 100px;\r\n\r\n        padding: 13px 0px 67px 22px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__button {\r\n        width: 100%;\r\n        height: 73px;\r\n        border-radius: 10px;\r\n\r\n        color: #FFFFFF;\r\n        background-color: #69AEFF;\r\n\r\n        margin-top: 10px;\r\n\r\n        font-size: 24px;\r\n        font-family: 'PTSans-Bold';\r\n    }\r\n\r\n    &__term {\r\n        color: #B6B6B6;\r\n\r\n        margin-top: 20px;\r\n\r\n        span {\r\n            color: #373737;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1260px) {\r\n    .subBanner {\r\n        h2 {\r\n            font-size: 32px;\r\n        }\r\n\r\n        p {\r\n            font-size: 10px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n    .subBanner {\r\n        h2 {\r\n            font-size: 26px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 930px) {\r\n    .subBanner {\r\n        background-size: 230%;\r\n        height: 1058px;\r\n        background-position: center -700px;\r\n\r\n        &__banner {\r\n            max-width: 720px;\r\n            width: 100%;\r\n        }\r\n\r\n        &__left {\r\n            margin-top: 51px;\r\n        }\r\n\r\n        &__description {\r\n            justify-content: center;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 40px;\r\n        }\r\n\r\n        p {\r\n            font-size: 12px;\r\n        }\r\n\r\n        &__content {\r\n            flex-direction: column;\r\n            align-items: center;\r\n            gap: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 820px){\r\n    .subBanner {\r\n        background-size: 230%;\r\n        height: 1058px;\r\n        background-position: center -500px;\r\n        margin-top: 40px;\r\n    \r\n        &__description {\r\n            justify-content: center;\r\n        }\r\n    \r\n        h2 {\r\n            font-size: 40px;\r\n        }\r\n    \r\n        p {\r\n            font-size: 12px;\r\n        }\r\n    \r\n        &__content {\r\n            flex-direction: column;\r\n            align-items: center;\r\n            gap: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 680px) {\r\n    .subBanner {\r\n        background-size: 270%;       \r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 630px) {\r\n    .subBanner {\r\n        background-size: 300%;   \r\n        h2 {\r\n            font-size: 32px;\r\n        }     \r\n    }\r\n}\r\n\r\n@media screen and (max-width: 540px) {\r\n    .subBanner {\r\n        background-size: 380%;   \r\n        margin-top: 130px;\r\n        margin-bottom: 160px;\r\n        height: 720px;\r\n\r\n        &__left {\r\n            margin-top: -110px;\r\n            padding: 48px 54px;\r\n        }\r\n\r\n        &__right {\r\n            padding: 56px 26px;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 20px;\r\n            text-align: center;\r\n        }\r\n\r\n        &__content {\r\n            gap: 25px;\r\n        }  \r\n    }\r\n}\r\n",".Footer {\r\n    height: 410px;\r\n\r\n    background-color: #F2FBFF;\r\n\r\n    h3 {\r\n        font-size: 16px;\r\n    }\r\n\r\n    &__content {\r\n        margin: 0 auto;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__left {\r\n        display: flex;\r\n\r\n        gap: 55px;\r\n\r\n        margin-top: 45px;\r\n    }\r\n\r\n    &__center {\r\n        margin-top: 45px;\r\n\r\n        text-align: center;\r\n    }\r\n\r\n    &__email {\r\n        margin-top: 33px;\r\n        margin-bottom: 22px;\r\n    }\r\n\r\n    &__right {\r\n        display: flex;\r\n\r\n        text-align: right;\r\n\r\n        gap: 83px;\r\n\r\n        margin-top: 45px;\r\n    }\r\n\r\n    &__col {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 42px;\r\n    }\r\n\r\n    &__contacts {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        gap: 38px;\r\n\r\n        margin-top: 24px;\r\n    }\r\n\r\n    &__catalog {\r\n        display: flex;\r\n        justify-content: center;\r\n        gap: 15px;\r\n\r\n        margin-top: 22px;\r\n    }\r\n\r\n    hr {\r\n        width: 100%;\r\n\r\n        margin-top: 20px;\r\n\r\n        background-color: #373737;\r\n    }\r\n\r\n    &__law {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        margin-top: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 970px) {\r\n    .Footer {\r\n        &__catalog {\r\n            p {\r\n                font-size: 14px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 860px) {\r\n    .Footer {\r\n        &__catalog {\r\n            p {\r\n                font-size: 12px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .Footer {\r\n        p {\r\n            font-size: 12px;\r\n        }  \r\n\r\n        &__left {\r\n            flex-direction: column;\r\n            gap: 17px;\r\n        }\r\n        \r\n        &__right {\r\n            flex-direction: column;\r\n            gap: 17px;\r\n        }\r\n\r\n        &__col {\r\n            gap: 17px;\r\n            text-align: center; \r\n        }\r\n\r\n        &__content {\r\n            max-width: 511px;\r\n        }\r\n\r\n        &__email {\r\n            margin-top: 28px;\r\n            margin-bottom: 16px;\r\n        }\r\n        \r\n        &__contacts {\r\n            margin-top: -13px;\r\n            svg {\r\n                \r\n            }\r\n        }\r\n\r\n        &__catalog {\r\n            margin-top: 30px;\r\n            gap: 3px;\r\n            max-width: 715px;\r\n            justify-content: space-between;\r\n        }\r\n\r\n        hr {\r\n            margin: 0 auto;\r\n            margin-top: 15px;\r\n            max-width: 481px;\r\n        }\r\n\r\n        &__law {\r\n            margin: 0 auto;\r\n            max-width: 570px;\r\n            margin-top: 47px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .Footer {\r\n        &__catalog {\r\n            display: none;\r\n        }\r\n\r\n        &__law {\r\n            margin-top: 20px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 570px) {\r\n    .Footer {\r\n        height: 330px;\r\n        &__law {\r\n            flex-direction: column;\r\n            gap: 10px;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        &__left {\r\n            margin-top: 24px;\r\n        }\r\n\r\n        &__center {\r\n            margin-top: 24px;\r\n        }\r\n\r\n        &__right {\r\n            margin-top: 24px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .Footer {\r\n        \r\n        \r\n\r\n        &__left {\r\n            p {\r\n                text-align: left;\r\n            }\r\n        }\r\n\r\n        &__center {\r\n            margin-top: 60px !important;\r\n            img {\r\n                width: 108px;\r\n                height: 34px;\r\n            }\r\n\r\n            h3 {\r\n                font-size: 12px;\r\n            }\r\n        }\r\n\r\n        &__email {\r\n            margin-top: 16px;\r\n        }\r\n\r\n        &__right {\r\n            p {\r\n                text-align: right;\r\n            }\r\n        }\r\n\r\n        &__contacts {\r\n            gap: 12px;\r\n        }\r\n    }\r\n}",".Popular {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 32px;\r\n    width: 100%;\r\n    max-width: 1260px;\r\n    margin: 0 auto;\r\n    margin-top: 40px;\r\n\r\n    p {\r\n        font-size: 12px;\r\n    }\r\n    \r\n    h3 {\r\n        font-size: 12px;\r\n    }\r\n    &__item {\r\n        width: 280px !important;\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));\r\n        background-color: #FFFFFF;\r\n    }\r\n\r\n    &__sale {\r\n        width: 42px;\r\n        height: 42px;\r\n\r\n        border-radius: 50%;\r\n\r\n        background-color: rgba(240, 68, 56, 0.89);\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        h3 {\r\n            color: #FFFFFF;\r\n            font-size: 16px;\r\n        }\r\n\r\n        position: absolute;\r\n        top: 13px;\r\n        left: 13px;\r\n    }\r\n\r\n    &__img {\r\n        width: 166px;\r\n        height: 160px;\r\n        display: block;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    &__stars {\r\n        display: flex;\r\n        gap: 3px;\r\n        margin-top: 14px;\r\n    }\r\n\r\n    &__price {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: flex-end;\r\n        margin-top: 8px;\r\n\r\n        position: relative;\r\n    }\r\n\r\n    h4 {\r\n        margin-top: 8px;\r\n\r\n        span {\r\n            font-family: 'PTSans-Bold';\r\n        }\r\n    }\r\n\r\n    &__oldprice {\r\n        font-size: 20px;\r\n        height: 20px;\r\n    }\r\n\r\n    h6 {\r\n        margin-top: 4px;\r\n    }\r\n\r\n    &__newprice {\r\n        position: absolute;\r\n        color: #B6B6B6;\r\n        font-size: 14px;\r\n\r\n        text-decoration: line-through;\r\n        top: -7px;\r\n        left: 44px;\r\n    }\r\n\r\n    &__menu {\r\n        display: flex;\r\n        gap: 20px;\r\n    }\r\n\r\n    &__button {\r\n        color: #FFFFFF;\r\n        width: 260px;\r\n        height: 73px;\r\n        background-color: #69AEFF;\r\n        border-radius: 10px;\r\n\r\n        font-family: 'PTSans-Bold';\r\n        font-size: 24px;\r\n\r\n        margin-top: 14px;\r\n    }\r\n\r\n    &__character {\r\n        width: 100%;\r\n        &::after {\r\n            content: '..................................................................................................................................................................................................................................................................................................';\r\n            display: block;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            font-family: 'PTSans-Regular';\r\n            font-size: 12px;\r\n        }\r\n\r\n        p span:first-of-type {\r\n            float:left;\r\n            margin-right: 3px;\r\n        }\r\n        p span:last-of-type {\r\n            float:right;\r\n            margin-left: 3px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1261px) {\r\n    .Popular {\r\n        max-width: 940px;\r\n        margin: 0 auto;\r\n    }\r\n}",".Cart {\r\n    position: relative;\r\n\r\n    &__background {\r\n        background: url('../../img/cartBg.png'), linear-gradient(270deg, #6978FF 0%, rgba(88, 121, 207, 0.995104) 48.96%, rgba(180, 105, 255, 0.99) 100%), #69AEFF;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center top;\r\n        width: 100vw;\r\n        height: 380px;\r\n        \r\n        background-blend-mode: overlay, normal, normal;\r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n\r\n        z-index: 0;\r\n    }\r\n\r\n    &__content {\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n    h2 {\r\n        color: #FFFFFF;\r\n\r\n        padding-top: 58px;\r\n    }\r\n\r\n    &__back {\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n    &__backLink {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 7px;\r\n\r\n        margin-top: 17px;\r\n    }\r\n\r\n    &__rotate {\r\n        transform: rotate(180deg);\r\n    }\r\n\r\n    &__character {\r\n        width: 100%;\r\n        height: 465px;\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 40px;\r\n\r\n        background-color: #FFFFFF;\r\n        border-radius: 15px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n\r\n        margin-top: 22px;\r\n\r\n        padding: 50px 56px;\r\n    }\r\n\r\n    &__items {\r\n        max-width: 528px;\r\n        width: 100%;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 17px;\r\n    }\r\n\r\n    &__itemFlex {\r\n        display: flex;\r\n        max-width: 528px;\r\n        gap: 9px;\r\n\r\n        img {\r\n            width: 130px;\r\n            height: 100px;\r\n        }\r\n\r\n        h4 {\r\n            margin-top: 9px;\r\n            font-size: 12px;\r\n            font-family: 'PTSans-Regular'\r\n        }\r\n\r\n        h6 {\r\n            font-size: 12px;\r\n            font-family: 'PTSans-Bold';\r\n        }\r\n    }\r\n\r\n    &__description {\r\n        width: 100%;\r\n    }\r\n\r\n    &__row {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        margin-top: 11px;\r\n    }\r\n\r\n    &__montage {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 6px;\r\n        input {\r\n            cursor: pointer;\r\n            background-color: #F6FAFF;\r\n            width: 23px;\r\n            height: 23px;\r\n            border-radius: 5px;\r\n\r\n            color: #F6FAFF;\r\n            border: none;\r\n            outline: none;\r\n\r\n            -webkit-appearance: none;\r\n            appearance: none;\r\n\r\n            &:checked {\r\n                z-index: 1;\r\n                background-color: #69AEFF;\r\n            }\r\n        }\r\n\r\n        label {\r\n            height: fit-content;\r\n            font-family: 'PTSans-regular';\r\n            font-size: 16px;\r\n        }\r\n    }\r\n\r\n    &__count {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        button {\r\n            background-color: #FFFFFF;\r\n            height: fit-content;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            img {\r\n                width: 7px;\r\n                height: 7px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__delete {\r\n        margin-top: 11px;\r\n        text-align: right;\r\n        color: #B6B6B6;\r\n    }\r\n\r\n    &__price {\r\n        width: 460px;\r\n\r\n        h6 {\r\n            margin-top: 30px;\r\n        }\r\n    }\r\n\r\n    &__head {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n\r\n        img {\r\n            width: 27px;\r\n            height: 29px;\r\n        }\r\n    }\r\n\r\n    &__sum {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n\r\n        h3 {\r\n            font-size: 24px;\r\n\r\n            margin-top: 4px;\r\n        }\r\n\r\n        p {\r\n            margin-top: 8px;\r\n        }\r\n\r\n        span {\r\n            color: #82D42B;\r\n\r\n            margin-top: 8px;\r\n        }\r\n    }\r\n\r\n    &__input {\r\n        position: relative;\r\n\r\n        margin-top: 32px;\r\n        input {\r\n            width: 100%;\r\n            height: 51px;\r\n\r\n            border-radius: 10px;\r\n            background-color: #F6FAFF;\r\n\r\n            outline: none;\r\n            border: none;\r\n\r\n            padding-left: 22px;\r\n\r\n            font-family: 'PTSans-regular';\r\n            font-size: 12px;\r\n\r\n            &::placeholder {\r\n                font-family: 'PTSans-regular';\r\n                font-size: 12px;\r\n                color: #B6B6B6;\r\n            }\r\n        }\r\n\r\n        button {\r\n            color: #69AEFF;\r\n            border-radius: none;\r\n\r\n            background-color: #F6FAFF;\r\n\r\n            position: absolute;\r\n            top: 18px;\r\n            right: 22px;\r\n\r\n            font-family: 'PTSans-regular';\r\n            font-size: 12px;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        margin-top: 12px;\r\n\r\n        width: 100%;\r\n        height: 73px;\r\n\r\n        color: #FFFFFF;\r\n        background-color: #69AEFF;\r\n\r\n        border-radius: 10px;\r\n\r\n        font-family: 'PTSans-bold';\r\n        font-size: 24px;\r\n    }\r\n\r\n    &__popup {\r\n        display: none;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: fit-content;\r\n        z-index: 7;\r\n\r\n        width: 100vw;\r\n        height: 100%;\r\n\r\n        background:rgba(0, 0, 0, 0.3);\r\n    }\r\n\r\n    &__popupContent {\r\n        position: absolute;\r\n        top: 20%;\r\n        left: calc(50% - 325px);\r\n        max-width: 650px;\r\n        height: auto;\r\n\r\n        padding: 50px 56px;\r\n\r\n        background: #FFFFFF;\r\n\r\n        border-radius: 25px;\r\n\r\n        text-align: center;\r\n\r\n        h1 {\r\n            margin-top: 26px;\r\n        }\r\n\r\n        p {\r\n            margin-top: 10px;\r\n        }\r\n    }\r\n\r\n    &__details {\r\n        font-family: \"PTSans-Bold\";\r\n    }\r\n\r\n    &__closePopup {\r\n        width: 100%;\r\n        height: 60px;\r\n\r\n        margin-top: 26px;\r\n\r\n        color: #FFFFFF;\r\n        font-family: \"PTSans-Bold\";\r\n        font-size: 16px;\r\n\r\n        background: #69AEFF;\r\n        border-radius: 10px;\r\n    }\r\n\r\n    &__Mobile {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .Cart {\r\n\r\n        &__background {\r\n            height: 208px;\r\n        }\r\n\r\n        h2 {\r\n            padding-top: 20px;\r\n            font-size: 24px;\r\n        }\r\n\r\n        &__backLink {\r\n            margin-top: 7px;\r\n        }\r\n\r\n        &__character {\r\n            padding: 0;\r\n            margin-top: 18px;\r\n            flex-direction: column;\r\n            gap: 25px;\r\n            height: auto;\r\n            filter: none;\r\n            background: none;\r\n        }\r\n\r\n        &__items {\r\n            background-color: #FFFFFF;\r\n            max-width: 100%;\r\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n            border-radius: 25px;\r\n            padding: 40px 96px;\r\n        }\r\n\r\n        &__itemFlex {\r\n            max-width: 100%;\r\n        }\r\n\r\n        &__price {\r\n            background-color: #FFFFFF;\r\n            max-width: 100%;\r\n            width: 100%;\r\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n            border-radius: 25px;\r\n            padding: 45px 96px 40px 96px;\r\n\r\n            h1 {\r\n                font-size: 24px;\r\n            }\r\n\r\n            h3 {\r\n                font-size: 20px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 636px) {\r\n    .Cart {\r\n        &__items {\r\n            padding: 40px;\r\n        }\r\n\r\n        &__price {\r\n            padding: 40px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 510px) {\r\n    .Cart {\r\n        &__background {\r\n            height: 258px;\r\n        }\r\n\r\n        h2 {\r\n            padding-top: 20px;\r\n        }\r\n\r\n        &__character {\r\n            margin-top: 15px;\r\n        }\r\n\r\n        &__items {\r\n            filter: none;\r\n            background: none;\r\n            padding: 0;\r\n\r\n            gap: 15px;\r\n        }\r\n\r\n        &__item {\r\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n            background-color: #FFFFFF;\r\n            border-radius: 15px;\r\n\r\n            padding: 18px 26px;\r\n        }\r\n\r\n        &__itemFlex {\r\n            h4 {\r\n                margin-top: 5px;\r\n            }\r\n        }\r\n\r\n        &__tablet {\r\n            display: none;\r\n        }\r\n\r\n        &__Mobile {\r\n            display: flex;\r\n        }\r\n\r\n        &__delete {\r\n            margin-top: 0;\r\n            font-size: 12px;\r\n            height: fit-content;\r\n        }\r\n\r\n        &__MobilePrice {\r\n            font-family: 'PTSans-Bold';\r\n            color: #373737;\r\n            font-size: 24px;\r\n            margin-top: 16px;\r\n        }\r\n\r\n        &__row {\r\n            margin-top: 24px;\r\n            align-items: center;\r\n        }\r\n\r\n        &__count {\r\n            font-size: 12px;\r\n        }\r\n\r\n        &__price {\r\n            padding: 18px 26px;\r\n        }\r\n\r\n        &__button {\r\n            font-size: 16px;\r\n            height: 55px;\r\n        }\r\n\r\n        &__input {\r\n            margin-top: 15px;\r\n        }\r\n    }\r\n}\r\n",".Favorite {\r\n    position: relative;\r\n    &__background {\r\n        background: url('../../img/cartBg.png'), linear-gradient(270deg, #7E69FF 0%, rgba(207, 88, 160, 0.995104) 48.96%, rgba(255, 105, 159, 0.99) 100%), #69AEFF;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center top;\r\n        width: 100vw;\r\n        height: 380px;\r\n        \r\n        background-blend-mode: overlay, normal, normal;\r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n\r\n        z-index: 0;\r\n    }\r\n\r\n    &__content {\r\n        position: relative;\r\n        z-index: 1;\r\n    }\r\n\r\n    h2 {\r\n        color: #FFFFFF;\r\n\r\n        padding-top: 58px;\r\n    }\r\n\r\n    &__back {\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n    &__backLink {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 7px;\r\n\r\n        margin-top: 17px;\r\n    }\r\n\r\n    svg {\r\n        transform: rotate(180deg);\r\n    }\r\n\r\n    &__character {\r\n        width: 100%;\r\n        height: 435px;\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        background-color: #FFFFFF;\r\n        border-radius: 15px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n\r\n        margin-top: 22px;\r\n        padding: 0 47px;\r\n        text-align: center;\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        \r\n        h2 {\r\n            color: #E3EBEF;\r\n            padding: 0;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .Favorite {\r\n\r\n        &__background {\r\n            height: 208px;\r\n        }\r\n\r\n        &__backLink {\r\n            margin-top: 7px;\r\n        }\r\n\r\n        h2 {\r\n            padding-top: 20px;\r\n            font-size: 24px;\r\n        }\r\n\r\n        &__character {\r\n            height: 253px;\r\n            margin-top: 18px;\r\n\r\n            h2 {\r\n                font-size: 32px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .Favorite {\r\n        &__character {\r\n            height: 282px;\r\n\r\n            h2 {\r\n                font-size: 24px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n    .Favorite {\r\n        h2 {\r\n            font-size: 20px;\r\n            padding-top: 25px;\r\n        }\r\n\r\n        &__background {\r\n            height: 258px;\r\n        }\r\n\r\n        &__character {\r\n            margin-top: 15px;\r\n        }\r\n    }\r\n}",".Cart {\r\n\r\n    &__characterActive {\r\n        width: 100%;\r\n        height: auto;\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 40px;\r\n\r\n        background-color: #FFFFFF;\r\n        border-radius: 15px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n\r\n        margin-top: 22px;\r\n\r\n        padding: 50px 56px;\r\n    }\r\n\r\n    &__itemsActive {\r\n        max-width: 528px;\r\n        width: 100%;\r\n        p {\r\n            font-size: 12px;\r\n            color: #B6B6B6;\r\n\r\n            span {\r\n                color: #F04438;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__name {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    &__email {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__nameInput {\r\n        width: 100%;\r\n        height: 42px;\r\n\r\n        background-color: #F6FAFF;\r\n        border-radius: 7px;\r\n        border: none;\r\n        outline: none;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 12px;\r\n\r\n        margin-top: 5px;\r\n        padding: 12px 22px;\r\n\r\n        &::placeholder {\r\n            font-family: 'PTSans-Regular';\r\n            color: #B6B6B6;\r\n            font-size: 12px;\r\n        }\r\n\r\n        &:focus {\r\n            border: 1px solid #373737;\r\n        }\r\n    }\r\n    \r\n\r\n    &__flexInput {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 8px;\r\n\r\n        input {\r\n            width: 100%;\r\n            height: 42px;\r\n    \r\n            background-color: #F6FAFF;\r\n            border-radius: 7px;\r\n            border: none;\r\n            outline: none;\r\n    \r\n            font-family: 'PTSans-Regular';\r\n            font-size: 12px;\r\n    \r\n            margin-top: 5px;\r\n            padding: 12px 22px;\r\n    \r\n            &::placeholder {\r\n                font-family: 'PTSans-Regular';\r\n                color: #B6B6B6;\r\n                font-size: 12px;\r\n            }\r\n    \r\n            &:focus {\r\n                border: 1px solid #373737;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__chooseHeader {\r\n        margin-top: 40px;\r\n    }\r\n\r\n    &__flexButton {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        gap: 8px;\r\n\r\n        max-width: 455px;\r\n        width: 100%;\r\n\r\n        margin-top: 30px;\r\n    }\r\n    \r\n    &__choose {\r\n        font-family: 'PTSans-Regular';\r\n        color: #B6B6B6;\r\n        font-size: 12px;\r\n\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\r\n        background-color: #FFFFFF;\r\n        border-radius: 7px;\r\n\r\n        width: 100%;\r\n        height: 38px;\r\n    }\r\n\r\n    &__full {\r\n        width: 100%;\r\n    }\r\n\r\n    &__nameFirst {\r\n        margin-top: 27px;\r\n    }\r\n\r\n    &__nameSecond {\r\n        margin-top: 6px;\r\n    }\r\n\r\n    textarea {\r\n        resize: none;\r\n\r\n        width: 100%;\r\n        height: 82px;\r\n\r\n        background-color: #F6FAFF;\r\n        border-radius: 7px;\r\n        border: none;\r\n        outline: none;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 12px;\r\n        color: #373737;\r\n\r\n        margin-top: 5px;\r\n        padding: 5px 22px;\r\n\r\n        &:focus {\r\n            border: 1px solid #373737;\r\n        }\r\n    }\r\n    \r\n    &__payment {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    &__choosePayment {\r\n        font-family: 'PTSans-Regular';\r\n        color: #B6B6B6;\r\n        font-size: 12px;\r\n\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);\r\n        background-color: #FFFFFF;\r\n        border-radius: 7px;\r\n\r\n        width: 100%;\r\n        height: 38px;\r\n    }\r\n\r\n    &__gridButton {\r\n        max-width: 400px;\r\n        width: 100%;\r\n\r\n        margin-top: 30px;\r\n\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 8px;\r\n        grid-row-gap: 10px;\r\n    }\r\n\r\n    &__activeButton {\r\n        background-color: #69AEFF;\r\n        color: #FFFFFF;\r\n    }\r\n\r\n    &__priceActive {\r\n        max-width: 464px;\r\n        width: 100%;\r\n    }\r\n\r\n    &__privacy {\r\n        margin-top: 12px;\r\n        color: #B6B6B6;\r\n        \r\n        max-width: 390px;\r\n        width: 100%;\r\n\r\n        span {\r\n            color: #373737;\r\n        }\r\n    }\r\n}\r\n\r\n.emptyCartActive {\r\n    height: 40px;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .Cart {\r\n        &__characterActive {\r\n            flex-direction: column;\r\n            background: none;\r\n            filter: none;\r\n            padding: 0;\r\n        }\r\n\r\n        &__itemsActive {\r\n            background-color: #FFFFFF;\r\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n            border-radius: 25px;\r\n\r\n            max-width: 100%;\r\n            width: 100%;\r\n\r\n            padding: 40px 96px;\r\n\r\n            h1 {\r\n                font-size: 24px;\r\n            }\r\n        }\r\n\r\n        &__priceActive {\r\n            background-color: #FFFFFF;\r\n            filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n            border-radius: 25px;\r\n\r\n            max-width: 100%;\r\n            width: 100%;\r\n\r\n            padding: 40px 96px;\r\n\r\n            h1 {\r\n                font-size: 24px;\r\n            }\r\n\r\n            h6 {\r\n                margin-top: 30px;\r\n            }\r\n\r\n            button {\r\n                margin-top: 30px;\r\n            }\r\n        }\r\n\r\n        &__privacy {\r\n            max-width: 100%;\r\n            margin-top: 10px;\r\n        }\r\n    }\r\n    .emptyCartActive {\r\n        height: 25px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .Cart {\r\n        &__itemsActive {\r\n            padding: 40px;\r\n        }\r\n\r\n        &__priceActive {\r\n            padding: 40px;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 490px) {\r\n    .Cart {\r\n        &__itemsActive {\r\n            padding: 15px 26px;\r\n        }\r\n\r\n        &__priceActive {\r\n            padding: 15px 26px;\r\n        }\r\n\r\n        &__name {\r\n            margin-top: 10px;\r\n        }\r\n\r\n        &__flexInput {\r\n            flex-direction: column;\r\n            gap: 0;\r\n        }\r\n\r\n        &__chooseHeader {\r\n            margin-top: 15px;\r\n        }\r\n\r\n        &__flexButton {\r\n            margin-top: 10px;\r\n            flex-direction: column;\r\n        }\r\n\r\n        &__nameFirst {\r\n            margin-top: 15px;\r\n        }\r\n\r\n        &__payment {\r\n            margin-top: 15px;\r\n        }\r\n\r\n        &__gridButton {\r\n            margin-top: 10px;\r\n            grid-template-columns: 1fr;\r\n        }\r\n\r\n        &__privacy {\r\n            margin-top: 15px;\r\n            font-size: 12px;\r\n        }\r\n\r\n        &__priceActive {\r\n\r\n            h1 {\r\n                font-size: 24px;\r\n            }\r\n\r\n            h6 {\r\n                margin-top: 15px;\r\n            }\r\n\r\n            button {\r\n                margin-top: 15px;\r\n            }\r\n        }\r\n    }\r\n}",".Card {\r\n    position: relative;\r\n\r\n    &__background {\r\n        background: url('../../img/cartBg.png'), linear-gradient(270deg, #69AEFF 0%, rgba(182, 88, 207, 0.995104) 48.96%, rgba(255, 159, 105, 0.99) 100%), #69AEFF;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center top;\r\n        width: 100vw;\r\n        height: 380px;\r\n        \r\n        background-blend-mode: overlay, normal, normal;\r\n\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n\r\n        z-index: -1;\r\n    }\r\n\r\n    &__flex {\r\n        display: flex;\r\n        gap: 15px;\r\n        padding-top: 60px;\r\n        a {\r\n            color: #FFFFFF;\r\n            font-family: 'PTSans-Regular';\r\n        }\r\n\r\n        p {\r\n            color: #FFFFFF;\r\n        }\r\n    }\r\n\r\n    \r\n\r\n    &__header {\r\n        color: #FFFFFF;\r\n\r\n        margin-top: 60px;\r\n    }\r\n\r\n    &__subheader {\r\n        margin-top: 6px;\r\n        color: #FFFFFF;\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 435px;\r\n\r\n        background-color: #FFFFFF;\r\n        border-radius: 25px;\r\n\r\n        margin-top: 32px;\r\n        padding: 51px 56px;\r\n\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__left {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        max-width: 496px;\r\n        width: 100%;\r\n    }\r\n\r\n    &__subImg {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 16px;\r\n        padding: 0 10px;\r\n        img {\r\n            width: 110px;\r\n            height: 100px;\r\n        }\r\n    }\r\n\r\n    &__mainImg {\r\n        width: 348px;\r\n        height: 334px;\r\n    }\r\n\r\n    &__right {\r\n        max-width: 496px;\r\n        width: 100%;\r\n    }\r\n\r\n    &__variants {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        max-width: 213px;\r\n        width: 100%;\r\n        margin-top: 23px;\r\n    }\r\n\r\n    &__variant {\r\n        position: relative;\r\n        \r\n        input {\r\n            width: 35px;\r\n            height: 35px;\r\n\r\n            border-radius: 7px;\r\n            background-color: #F6FAFF;\r\n            \r\n            -webkit-appearance: none;\r\n            appearance: none;\r\n\r\n            &:checked {\r\n                border: 1px solid #373737;\r\n            }\r\n        }\r\n\r\n        label {\r\n            position: absolute;\r\n            top: 7.5px;\r\n            left: 8.5px;\r\n\r\n            font-family: 'PTSans-Regular';\r\n            font-size: 16px;\r\n            color: #373737;\r\n        }\r\n    }\r\n\r\n    &__characters {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 16px;\r\n\r\n        margin-top: 18px;\r\n    }\r\n\r\n    &__character {\r\n        width: 100%;\r\n        &::after {\r\n            content: '..................................................................................................................................................................................................................................................................................................';\r\n            display: block;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            font-family: 'PTSans-Regular';\r\n        }\r\n\r\n        p span:first-of-type {\r\n            float:left;\r\n            margin-right: 3px;\r\n        }\r\n        p span:last-of-type {\r\n            float:right;\r\n            margin-left: 3px;\r\n        }\r\n    }\r\n\r\n    &__price {\r\n        width: 100%;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__discount {\r\n        text-decoration: line-through;\r\n        font-size: 24px;\r\n        color: #E3EBEF;\r\n    }\r\n\r\n    &__priceFlexLeft {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 20px;\r\n    }\r\n\r\n    &__priceFlexRight {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 30px;\r\n    }\r\n\r\n    &__cartButton {\r\n        font-family: 'PTSans-Bold';\r\n        font-size: 24px;\r\n        color: #FFFFFF;\r\n\r\n        background-color: #69AEFF;\r\n        border-radius: 10px;\r\n\r\n        width: 100%;\r\n        height: 72px;\r\n    }\r\n\r\n    &__service {\r\n        width: 100%;\r\n        background-color: #FFFFFF;\r\n        height: 230px;\r\n\r\n        padding: 50px 56px;\r\n\r\n        border-radius: 25px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__services {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 25px;\r\n\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__options {\r\n        display: flex;\r\n        gap: 10px;\r\n    }\r\n\r\n    &__checkbox {\r\n        position: relative;\r\n\r\n        input {\r\n            display: none;\r\n\r\n            &:checked + label {\r\n                color: #FFFFFF;\r\n\r\n                background-color: #69AEFF;\r\n\r\n                span {\r\n                    background-color: rgba(255, 255, 255, 0.56);\r\n                }\r\n            }\r\n        }\r\n\r\n        label {\r\n            font-family: 'PTSans-Regular';\r\n            font-size: 16px;\r\n            color: #373737;\r\n\r\n            padding: 6px 10px;\r\n\r\n            background-color: #FFFFFF;\r\n            box-shadow: 0px 0px 6px rgba(63, 104, 153, 0.13);\r\n            border-radius: 6px;\r\n\r\n            span {\r\n                background-color: #E3EBEF;\r\n                box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.06);\r\n                border-radius: 3px;\r\n\r\n                font-family: 'PTSans-Bold';\r\n\r\n                padding: 0 5px;\r\n            }\r\n        }\r\n    } \r\n\r\n    &__tabs {\r\n        max-width: 870px;\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        margin: 0 auto;\r\n        margin-top: 40px;\r\n    }\r\n\r\n    &__tab {\r\n        cursor: pointer;\r\n        hr {\r\n            display: none;\r\n\r\n            margin: 0 auto;\r\n            margin-top: 6px;\r\n            max-width: 44px;\r\n\r\n            border: 2px solid #69AEFF;\r\n            border-radius: 8px;\r\n        }\r\n    }\r\n\r\n    &__content {\r\n        display: none;\r\n    }\r\n}\r\n",".Card {\r\n    &__description {\r\n        display: none;\r\n        margin-top: 32px;\r\n        margin-bottom: 40px;\r\n\r\n        width: 100%;\r\n        min-height: 555px;\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\r\n        border-radius: 25px;\r\n\r\n        padding: 88px 62px;\r\n        line-height: 21px;\r\n    }\r\n}",".Card {\r\n    &__feature {\r\n        width: 100%;\r\n        min-height: 230px;\r\n\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\r\n        border-radius: 25px;\r\n\r\n        padding: 50px 56px;\r\n\r\n        margin-top: 32px;\r\n    }\r\n\r\n    &__featureMargin {\r\n        margin-top: 60px !important;\r\n    }\r\n\r\n    &__descr {\r\n        margin-top: 40px;\r\n        \r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 16px;\r\n    }\r\n\r\n    &__featureLast {\r\n        margin-bottom: 40px;\r\n    }\r\n}",".Card {\r\n\r\n    &__sendFeedback {\r\n        margin-top: 32px;\r\n\r\n        max-width: 260px;\r\n        width: 100%;\r\n        height: 74px;\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        \r\n        background-color: #69AEFF;\r\n        border-radius: 10px;\r\n\r\n        color: #FFFFFF;\r\n        font-family: 'PTSans-Bold';\r\n        font-size: 24px;\r\n    }\r\n\r\n    &__feedback {\r\n        width: 100%;\r\n        height: auto;\r\n\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\r\n        border-radius: 25px;\r\n\r\n        padding: 50px 56px 68px 56px;\r\n        margin-top: 40px;\r\n    }\r\n\r\n    &__user {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 19px;\r\n    }\r\n\r\n    &__userPhoto {\r\n        width: 75px;\r\n        height: 75px;\r\n\r\n        border-radius: 50%;\r\n\r\n        background-color: #D9D9D9;\r\n    }\r\n\r\n    &__userInfo {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 12px;\r\n    }\r\n\r\n    &__userRate {\r\n        display: flex;\r\n        gap: 3px;\r\n\r\n        margin-top: 18px;\r\n    }\r\n\r\n    &__feedbackContent {\r\n        margin-top: 24px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 40px;\r\n\r\n        p {\r\n            margin-top: 14px;\r\n        }\r\n    }\r\n}",".Card {\r\n    &__userQuestion {\r\n        margin-top: 14px;\r\n    }\r\n\r\n    &__response {\r\n        font-size: 12px;\r\n        color: #B6B6B6;\r\n        margin-top: 14px;\r\n    }\r\n\r\n    &__userResponse {\r\n        padding-left: 38px;\r\n\r\n        margin-top: 20px;\r\n    }\r\n\r\n    &__userName {\r\n        span {\r\n            color: #B6B6B6;\r\n        }\r\n    }\r\n\r\n    textarea {\r\n        resize: none;\r\n\r\n        width: 100%;\r\n        height: 117px;\r\n\r\n        background-color: #F6FAFF;\r\n        border-radius: 10px;\r\n        border: none;\r\n        outline: none;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 16px;\r\n        color: #373737;\r\n\r\n        margin-top: 20px;\r\n        padding-left: 20px;\r\n        padding-top: 20px;\r\n\r\n        &:focus {\r\n            border: 1px solid #373737;\r\n        }\r\n\r\n        &::placeholder {\r\n            font-family: 'PTSans-Regular';\r\n            font-size: 16px;\r\n            color: #B6B6B6;\r\n        }\r\n    }\r\n\r\n    &__sendButtons {\r\n        margin-top: 26px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        max-width: 556px;\r\n        margin-left: auto;\r\n    }\r\n\r\n    &__cancel {\r\n        max-width: 260px;\r\n        width: 100%;\r\n        height: 74px;\r\n\r\n        border: 2px solid #B6B6B6;\r\n        border-radius: 10px;\r\n        background-color: #FFFFFF;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 24px;\r\n        color: #B6B6B6;\r\n    }\r\n\r\n    &__send {\r\n        max-width: 260px;\r\n        width: 100%;\r\n        height: 74px;\r\n\r\n        background-color: #69AEFF;\r\n        border-radius: 10px;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 24px;\r\n        color: #FFFFFF;\r\n    }\r\n    \r\n}",".Card {\r\n    &__docs {\r\n        width: 100%;\r\n        height: auto;\r\n\r\n        padding: 50px 56px;\r\n        margin-top: 60px;\r\n\r\n        background: #FFFFFF;\r\n        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\r\n        border-radius: 25px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 34px;\r\n    }\r\n\r\n    &__docElement {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 18px;\r\n\r\n        img {\r\n            width: 48px;\r\n            height: 48px;\r\n        }\r\n    }\r\n}",".Review {\r\n    &__flex {\r\n        display: flex;\r\n        gap: 15px;\r\n        padding-top: 60px;\r\n        a {\r\n            color: #373737;\r\n            font-family: 'PTSans-Regular';\r\n        }\r\n\r\n        p {\r\n            color: #373737;\r\n        }\r\n    }\r\n\r\n    h2 {\r\n        color: #373737;\r\n    }\r\n    \r\n    &__header {\r\n        margin-top: 60px;\r\n    }\r\n\r\n    &__character {\r\n        width: 100%;\r\n        height: auto;\r\n\r\n        padding: 50px 56px;\r\n        margin-top: 60px;\r\n        margin-bottom: 40px;\r\n\r\n        background: #FFFFFF;\r\n        border-radius: 25px;\r\n        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));\r\n    }\r\n\r\n    &__content {\r\n        margin-top: 88px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 27px;\r\n    }\r\n\r\n    input {\r\n        width: 100%;\r\n        height: 62px;\r\n\r\n        background-color: #F6FAFF;\r\n        border-radius: 10px;\r\n        border: none;\r\n        outline: none;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 16px;\r\n\r\n        margin-top: 26px;\r\n        padding: 20px;\r\n\r\n        &::placeholder {\r\n            font-family: 'PTSans-Regular';\r\n            color: #B6B6B6;\r\n            font-size: 16px;\r\n        }\r\n\r\n        &:focus {\r\n            border: 1px solid #373737;\r\n        }\r\n    }\r\n\r\n    textarea {\r\n        resize: none;\r\n\r\n        width: 100%;\r\n        height: 170px;\r\n\r\n        background-color: #F6FAFF;\r\n        border-radius: 7px;\r\n        border: none;\r\n        outline: none;\r\n\r\n        font-family: 'PTSans-Regular';\r\n        font-size: 12px;\r\n        color: #373737;\r\n\r\n        margin-top: 26px;\r\n        padding: 20px;\r\n\r\n        &:focus {\r\n            border: 1px solid #373737;\r\n        }\r\n    }\r\n\r\n    &__add {\r\n        max-width: 260px;\r\n        width: 100%;\r\n        height: 74px;\r\n\r\n        font-size: 24px;\r\n        color: #FFFFFF;\r\n        font-family: 'PTSans-Bold';\r\n\r\n        background-color: #69AEFF;\r\n        border-radius: 10px;\r\n\r\n        margin-top: 50px;\r\n    }\r\n\r\n    &__policy {\r\n        color: #B6B6B6;\r\n        margin-top: 26px;\r\n\r\n        span {\r\n            color: #373737;\r\n        }\r\n    }\r\n}",null,"@import '~normalize.css';\n@import 'style/fonts';\n@import 'style/style';\n@import 'style/header';\n@import 'style/Banners';\n@import 'style/subHeader';\n@import 'slick/slick.scss';\n@import 'slick/slick-theme.scss';\n@import 'style/Service';\n@import 'style/Manafacture';\n@import 'style/Benefits';\n@import 'style/subBanner';\n@import 'style/Footer';\n@import 'style/Popular';\n@import 'style/cart/Cart';\n@import 'style/favorite/Favorite';\n@import 'style/cart/Cart_active';\n@import 'style/cardDescription/CardDescription';\n@import 'style/cardDescription/CardDepiction';\n@import 'style/cardDescription/CardFeature';\n@import 'style/cardDescription/CardFeedback';\n@import 'style/cardDescription/CardQuest';\n@import 'style/cardDescription/CardDocumantation';\n@import 'style/cardDescription/CardReview';"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./src/img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/close.svg */ "./src/img/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Logo.svg */ "./src/img/Logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./src/img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/triangle.svg */ "./src/img/triangle.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./src/img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/condition.svg */ "./src/img/condition.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/air.svg */ "./src/img/air.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/accessory.svg */ "./src/img/accessory.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/comparison.svg */ "./src/img/comparison.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/like.svg */ "./src/img/like.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/condition.png */ "./src/img/condition.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/air.png */ "./src/img/air.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/freon.png */ "./src/img/freon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pipe.png */ "./src/img/pipe.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/condition_icon.svg */ "./src/img/condition_icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Calculator.svg */ "./src/img/Calculator.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/guy.png */ "./src/img/guy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow.svg */ "./src/img/arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/popular.png */ "./src/img/popular.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/star_full.svg */ "./src/img/star_full.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/star_empty.svg */ "./src/img/star_empty.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/montage.png */ "./src/img/montage.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/montageMobile.png */ "./src/img/montageMobile.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tech.png */ "./src/img/tech.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/techMobile.png */ "./src/img/techMobile.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/manafactureOption1.png */ "./src/img/manafactureOption1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/manafactureOption2.png */ "./src/img/manafactureOption2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./img/manufactureOption3.png */ "./src/img/manufactureOption3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./img/manafactureOption4.png */ "./src/img/manafactureOption4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./img/telegram.svg */ "./src/img/telegram.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./img/instagram.svg */ "./src/img/instagram.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mail.svg */ "./src/img/mail.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./img/phone.svg */ "./src/img/phone.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Paritsa</title>\n</head>\n<body>\n  <header class=\"container\">\n    <div class=\"headerUp\">\n      <div>\n        <h3 id=\"phoneNumber\" class=\"headerUp__phoneNumber\">+7(499) 394-34-16</h3>\n      </div>\n      <div class=\"headerUp__menu\">\n        <p>Акции</p>\n        <p>О нас</p>\n        <p>Монтаж</p>\n        <p>Наши проекты</p>\n      </div>\n      <button class=\"headerUp__button\">Вызвать специалиста</button>\n    </div>\n    <div class=\"headerCenter\">\n      <div id=\"modalOpenBtn\" class=\"headerCenter__burger\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n      </div>\n      <div id=\"modalCloseBtn\" class=\"headerCenter__close\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n      </div>\n      <div class=\"headerCenter__logo\">\n        <a href=\"./index.html\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></a>\n      </div>\n      <div class=\"headerCenter__rightMenu\">\n        <div class=\"headerCenter__item\">\n          <div class=\"headerCenter__img\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"headerCenter__item\">\n          <div class=\"headerCenter__img\">\n            <svg width=\"23\" height=\"24\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5 30C8.675 30 7.969 29.7065 7.382 29.1195C6.794 28.5315 6.5 27.825 6.5 27C6.5 26.175 6.794 25.4685 7.382 24.8805C7.969 24.2935 8.675 24 9.5 24C10.325 24 11.031 24.2935 11.618 24.8805C12.206 25.4685 12.5 26.175 12.5 27C12.5 27.825 12.206 28.5315 11.618 29.1195C11.031 29.7065 10.325 30 9.5 30ZM24.5 30C23.675 30 22.969 29.7065 22.382 29.1195C21.794 28.5315 21.5 27.825 21.5 27C21.5 26.175 21.794 25.4685 22.382 24.8805C22.969 24.2935 23.675 24 24.5 24C25.325 24 26.0315 24.2935 26.6195 24.8805C27.2065 25.4685 27.5 26.175 27.5 27C27.5 27.825 27.2065 28.5315 26.6195 29.1195C26.0315 29.7065 25.325 30 24.5 30ZM8.225 6L11.825 13.5H22.325L26.45 6H8.225ZM9.5 22.5C8.375 22.5 7.525 22.006 6.95 21.018C6.375 20.031 6.35 19.05 6.875 18.075L8.9 14.4L3.5 3H1.9625C1.5375 3 1.1875 2.856 0.9125 2.568C0.6375 2.281 0.5 1.925 0.5 1.5C0.5 1.075 0.644 0.7185 0.932 0.4305C1.219 0.1435 1.575 0 2 0H4.4375C4.7125 0 4.975 0.0750001 5.225 0.225C5.475 0.375 5.6625 0.5875 5.7875 0.8625L6.8 3H28.925C29.6 3 30.0625 3.25 30.3125 3.75C30.5625 4.25 30.55 4.775 30.275 5.325L24.95 14.925C24.675 15.425 24.3125 15.8125 23.8625 16.0875C23.4125 16.3625 22.9 16.5 22.325 16.5H11.15L9.5 19.5H26.0375C26.4625 19.5 26.8125 19.6435 27.0875 19.9305C27.3625 20.2185 27.5 20.575 27.5 21C27.5 21.425 27.356 21.781 27.068 22.068C26.781 22.356 26.425 22.5 26 22.5H9.5ZM11.825 13.5H22.325H11.825Z\" fill=\"#E3EBEF\"/></svg>\n          </div>\n          <div class=\"headerCenter__cart\">\n            <p>3</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"headerCenter__center\">\n        <div class=\"headerCenter__category\">\n          <p>Все категории</p>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n        </div>\n        <hr>\n        <input type=\"text\" placeholder=\"Поиск по каталогу\" class=\"headerCenter__input\">\n        <button class=\"headerCenter__search\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n        </button>\n      </div>\n      <div class=\"headerCenter__menu\">\n        <a href=\"\">\n          <div class=\"headerCenter__item\">\n            <div class=\"headerCenter__img\">\n              <svg width=\"29\" height=\"24\" viewBox=\"0 0 36 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.95312 27C1.95312 27.8284 2.6247 28.5 3.45312 28.5H8.36222C9.19064 28.5 9.86222 27.8284 9.86222 27V10.5C9.86222 9.67157 9.19064 9 8.36222 9H3.45312C2.6247 9 1.95312 9.67157 1.95312 10.5V27ZM14.044 27C14.044 27.8284 14.7156 28.5 15.544 28.5H20.4531C21.2816 28.5 21.9531 27.8284 21.9531 27V3C21.9531 2.17157 21.2816 1.5 20.4531 1.5H15.544C14.7156 1.5 14.044 2.17157 14.044 3V27ZM26.1349 27C26.1349 27.8284 26.8065 28.5 27.6349 28.5H32.544C33.3725 28.5 34.044 27.8284 34.044 27V16.5C34.044 15.6716 33.3725 15 32.544 15H27.6349C26.8065 15 26.1349 15.6716 26.1349 16.5V27Z\" stroke=\"\" stroke-width=\"3\" stroke-linejoin=\"round\"/></svg>                \n            </div>\n            <a class=\"headerCenter__description\">Сравнение</a>\n          </div>\n        </a>\n        <a href=\"./favorite.html\">\n          <div class=\"headerCenter__item\">\n            <div class=\"headerCenter__img\">\n              <svg width=\"27\" height=\"24\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.15 23.825L15 23.975L14.835 23.825C7.71 17.36 3 13.085 3 8.75C3 5.75 5.25 3.5 8.25 3.5C10.56 3.5 12.81 5 13.605 7.04H16.395C17.19 5 19.44 3.5 21.75 3.5C24.75 3.5 27 5.75 27 8.75C27 13.085 22.29 17.36 15.15 23.825ZM21.75 0.5C19.14 0.5 16.635 1.715 15 3.62C13.365 1.715 10.86 0.5 8.25 0.5C3.63 0.5 0 4.115 0 8.75C0 14.405 5.1 19.04 12.825 26.045L15 28.025L17.175 26.045C24.9 19.04 30 14.405 30 8.75C30 4.115 26.37 0.5 21.75 0.5Z\" fill=\"\"/></svg>                \n            </div>\n            <a class=\"headerCenter__description\">Избранное</a>\n          </div>\n        </a>\n        <a href=\"./cart.html\">\n          <div class=\"headerCenter__item\">\n            <div class=\"headerCenter__img\">\n              <svg width=\"23\" height=\"24\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5 30C8.675 30 7.969 29.7065 7.382 29.1195C6.794 28.5315 6.5 27.825 6.5 27C6.5 26.175 6.794 25.4685 7.382 24.8805C7.969 24.2935 8.675 24 9.5 24C10.325 24 11.031 24.2935 11.618 24.8805C12.206 25.4685 12.5 26.175 12.5 27C12.5 27.825 12.206 28.5315 11.618 29.1195C11.031 29.7065 10.325 30 9.5 30ZM24.5 30C23.675 30 22.969 29.7065 22.382 29.1195C21.794 28.5315 21.5 27.825 21.5 27C21.5 26.175 21.794 25.4685 22.382 24.8805C22.969 24.2935 23.675 24 24.5 24C25.325 24 26.0315 24.2935 26.6195 24.8805C27.2065 25.4685 27.5 26.175 27.5 27C27.5 27.825 27.2065 28.5315 26.6195 29.1195C26.0315 29.7065 25.325 30 24.5 30ZM8.225 6L11.825 13.5H22.325L26.45 6H8.225ZM9.5 22.5C8.375 22.5 7.525 22.006 6.95 21.018C6.375 20.031 6.35 19.05 6.875 18.075L8.9 14.4L3.5 3H1.9625C1.5375 3 1.1875 2.856 0.9125 2.568C0.6375 2.281 0.5 1.925 0.5 1.5C0.5 1.075 0.644 0.7185 0.932 0.4305C1.219 0.1435 1.575 0 2 0H4.4375C4.7125 0 4.975 0.0750001 5.225 0.225C5.475 0.375 5.6625 0.5875 5.7875 0.8625L6.8 3H28.925C29.6 3 30.0625 3.25 30.3125 3.75C30.5625 4.25 30.55 4.775 30.275 5.325L24.95 14.925C24.675 15.425 24.3125 15.8125 23.8625 16.0875C23.4125 16.3625 22.9 16.5 22.325 16.5H11.15L9.5 19.5H26.0375C26.4625 19.5 26.8125 19.6435 27.0875 19.9305C27.3625 20.2185 27.5 20.575 27.5 21C27.5 21.425 27.356 21.781 27.068 22.068C26.781 22.356 26.425 22.5 26 22.5H9.5ZM11.825 13.5H22.325H11.825Z\" fill=\"\"/></svg>\n            </div>\n            <a class=\"headerCenter__description\">Корзина</a>\n            <div class=\"headerCenter__cart\">\n              <p>3</p>\n            </div>\n          </div>\n        </a>\n        <a href=\"\">\n          <div class=\"headerCenter__item\">\n            <div class=\"headerCenter__img\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6C9 6.79565 9.31607 7.55871 9.87868 8.12132C10.4413 8.68393 11.2044 9 12 9C12.7956 9 13.5587 8.68393 14.1213 8.12132C14.6839 7.55871 15 6.79565 15 6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3ZM12 13.5C16.005 13.5 24 15.495 24 19.5V24H0V19.5C0 15.495 7.995 13.5 12 13.5ZM12 16.35C7.545 16.35 2.85 18.54 2.85 19.5V21.15H21.15V19.5C21.15 18.54 16.455 16.35 12 16.35Z\" fill=\"\"/></svg>                \n            </div>\n            <a class=\"headerCenter__description\">Войти</a>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"headerCenterBg\"></div>\n    <div class=\"headerBottom\">\n      <button class=\"headerBottom__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n        <p>Кондиционеры</p>\n      </button>\n      <button class=\"headerBottom__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n        <p>Воздух</p>\n      </button>\n      <button class=\"headerBottom__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\n        <p>Аксессуары</p>\n      </button>\n    </div>\n    <div class=\"headerBottomBg\"></div>\n    <div id=\"modalHeader\" class=\"Modal headerCenter\">\n      <div class=\"Modal__block\">\n        <div class=\"headerCenter__center Modal__input\">\n          <div class=\"headerCenter__category\">\n            <p>Все категории</p>\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n          </div>\n          <hr>\n          <input type=\"text\" placeholder=\"Поиск по каталогу\" class=\"headerCenter__input\">\n          <button class=\"headerCenter__search\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n          </button>\n        </div>\n        <div class=\"Modal__bottom\">\n          <div class=\"Modal__menuLeft\">\n            <div class=\"headerCenter__item\">\n              <div class=\"headerCenter__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n              </div>\n              <a class=\"headerCenter__description\">Сравнение</a>\n            </div>\n            <div class=\"headerCenter__item\">\n              <div class=\"headerCenter__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n              </div>\n              <a class=\"headerCenter__description\">Избранное</a>\n            </div>\n          </div>\n          <div class=\"headerUp__menu\">\n            <div class=\"Modal__center\">\n              <p>Наши проекты</p>\n              <p>Акции</p>\n            </div>\n            <div class=\"Modal__center\">\n              <p>Монтаж</p>\n              <p>О нас</p>\n            </div>\n          </div>\n          <div class=\"Modal__right\">\n            <div class=\"Modal__phone\">\n              <h3 id=\"phoneNumber\" class=\"headerUp__phoneNumber\">+7(499) 394-34-16</h3>\n            </div>\n            <button class=\"headerUp__button\">Вызвать специалиста</button>\n          </div>\n        </div>\n        <div class=\"Modal__phnBtn\">\n          <div class=\"Modal__phone\">\n            <h3 id=\"phoneNumber\" class=\"headerUp__phoneNumber\">+7(499) 394-34-16</h3>\n          </div>\n          <button class=\"headerUp__button\">Вызвать специалиста</button>\n        </div>\n      </div>\n    </div>  <!-- Modal window -->\n  </header>\n\n\n  <section class=\"container Banners\">\n    <div class=\"Banners__grid\">\n      <div class=\"Banners__medium Banners__first\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"Banners__condition\">\n        <h2>Кондиционеры</h2>\n      </div>\n      <div class=\"Banners__medium Banners__second\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"Banners__second__air\">\n        <h2>Воздух</h2>\n        <div class=\"Banners__elipseM\"><div class=\"Banners__second__elipseL\"></div></div>\n        <div class=\"Banners__elipseM\"><div class=\"Banners__second__elipseR\"></div></div>\n      </div>\n      <div class=\"Banners__medium Banners__third\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"Banners__freon\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"Banners__pipe\">\n        <h2>Аксессуары</h2>\n        <div class=\"Banners__elipseM\"><div class=\"Banners__third__elipse\"></div></div>\n      </div>\n      <div class=\"Banners__small Banners__four\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\n        <h2>Подобрать оборудование</h2>\n        <div class=\"Banners__elipseS\"><div class=\"Banners__four__elipse\"></div></div>\n      </div>\n      <div class=\"Banners__small Banners__five\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\">\n        <h2>Рассчитать  монтаж</h2>\n        <div class=\"Banners__elipseS\"><div class=\"Banners__five__elipse\"></div></div>\n      </div>\n      <div class=\"Banners__large Banners__six\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\">\n        <h2>УСТАНОВКА РЕМОНТ <span>ОБСЛУЖИВАНИЕ КОНДИЦИОНЕРОВ</span></h2>\n        <div class=\"Banners__elipseL\"><div class=\"Banners__six__elipse\"></div></div>\n      </div>\n    </div>\n  </section>\n\n\n  <section>\n    <div class=\"subHeader container\">\n      <h1>Хиты продаж</h1>\n      <div class=\"subHeader__seeAll\">\n        <p>Посмотреть все</p>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"multiple-items Popular\">\n      <div class=\"Popular__item\">\n        <div class=\"Popular__sale\"><h3>%</h3></div>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"Popular__img\">\n        <p>Настенные сплит-системы</p>\n        <h3>Axioma ASX07J1/ASB07J1</h3>\n        <div class=\"Popular__rows\">\n          <div class=\"Popular__character\">\n            <p><span>Площадь</span><span>20 Кв.м</span></p>\n          </div>\n          <div class=\"Popular__character\">\n            <p><span>Площадь</span><span>20 Кв.м</span></p>\n          </div>\n          <div class=\"Popular__character\">\n            <p><span>Площадь</span><span>20 Кв.м</span></p>\n          </div>\n        </div>\n        <div class=\"Popular__stars\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n        <div class=\"Popular__price\">\n          <h2 class=\"Popular__newprice\">24 999 ₽</h2>\n          <h2 class=\"Popular__oldprice\">20 999 ₽</h2>\n          <div class=\"Popular__menu\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n          </div>\n        </div>\n        <button class=\"Popular__button\">В корзину</button>\n      </div>  \n\n      \n      <div class=\"Popular__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"Popular__img\">\n        <p>Настенные сплит-системы</p>\n        <h3>Axioma ASX07J1/ASB07J1</h3>\n        <div class=\"Popular__rows\">\n          <p>Площадь ................................................<span>20 кв.м</span></p>\n          <p>Инвертор .....................................................<span>Нет</span></p>\n          <p>Уровень шума ..........................................<span>24 ДБ</span></p>\n        </div>\n        <div class=\"Popular__stars\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n        <div class=\"Popular__price\">\n          <h2 class=\"Popular__oldprice\">20 999 ₽</h2>\n          <div class=\"Popular__menu\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n          </div>\n        </div>\n        <button class=\"Popular__button\">В корзину</button>\n      </div>  \n\n\n      <div class=\"Popular__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"Popular__img\">\n        <p>Настенные сплит-системы</p>\n        <h3>Axioma ASX07J1/ASB07J1</h3>\n        <div class=\"Popular__rows\">\n          <p>Площадь ................................................<span>20 кв.м</span></p>\n          <p>Инвертор .....................................................<span>Нет</span></p>\n          <p>Уровень шума ..........................................<span>24 ДБ</span></p>\n        </div>\n        <div class=\"Popular__stars\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n        <div class=\"Popular__price\">\n          <h2 class=\"Popular__oldprice\">20 999 ₽</h2>\n          <div class=\"Popular__menu\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n          </div>\n        </div>\n        <button class=\"Popular__button\">В корзину</button>\n      </div>\n\n\n      <div class=\"Popular__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"Popular__img\">\n        <p>Настенные сплит-системы</p>\n        <h3>Axioma ASX07J1/ASB07J1</h3>\n        <div class=\"Popular__rows\">\n          <p>Площадь ................................................<span>20 кв.м</span></p>\n          <p>Инвертор .....................................................<span>Нет</span></p>\n          <p>Уровень шума ..........................................<span>24 ДБ</span></p>\n        </div>\n        <div class=\"Popular__stars\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n        <div class=\"Popular__price\">\n          <h2 class=\"Popular__oldprice\">20 999 ₽</h2>\n          <div class=\"Popular__menu\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n          </div>\n        </div>\n        <button class=\"Popular__button\">В корзину</button>\n      </div>\n\n      \n      <div class=\"Popular__item\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"Popular__img\">\n        <p>Настенные сплит-системы</p>\n        <h3>Axioma ASX07J1/ASB07J1</h3>\n        <div class=\"Popular__rows\">\n          <p>Площадь ................................................<span>20 кв.м</span></p>\n          <p>Инвертор .....................................................<span>Нет</span></p>\n          <p>Уровень шума ..........................................<span>24 ДБ</span></p>\n        </div>\n        <div class=\"Popular__stars\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\">\n        </div>\n        <div class=\"Popular__price\">\n          <h2 class=\"Popular__oldprice\">20 999 ₽</h2>\n          <div class=\"Popular__menu\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\n          </div>\n        </div>\n        <button class=\"Popular__button\">В корзину</button>\n      </div>\n    </div>\n  </section>\n\n\n  <section>\n    <div class=\"Service\">\n      <div class=\"Service__option Service__option1\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" class=\"Service__desctop\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\" class=\"Service__mobile\">\n        <h1>Монтаж любой сложности</h1>\n      </div>\n      <div class=\"Service__option Service__option2\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\" class=\"Service__desctop\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" alt=\"\" class=\"Service__mobile\">\n        <h1>Надежное оборудование</h1>\n      </div>\n    </div>\n  </section>\n    <section>\n      <div class=\"subHeader container\">\n        <h1>Производители</h1>\n        <div class=\"subHeader__seeAll\">\n          <p>Посмотреть все</p>\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"multiple-items Manafacture\">\n        <img class=\"Manafacture__item\" src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" alt=\"\">\n        <img class=\"Manafacture__item\" src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\" alt=\"\">\n        <img class=\"Manafacture__item\" src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\">\n        <img class=\"Manafacture__item\" src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\" alt=\"\">\n        <img class=\"Manafacture__item\" src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\">\n        <img class=\"Manafacture__item \" src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\" alt=\"\">\n      </div>\n    </section>\n\n\n    <section class=\"container\">\n      <div class=\"Benefits\">\n        <div class=\"Benefits__option\">\n          <h1>Преимущества</h1>\n        </div>\n        <div class=\"Benefits__option\">\n          <h1>Преимущества</h1>\n        </div>\n        <div class=\"Benefits__option\">\n          <h1>Преимущества</h1>\n        </div>\n        <div class=\"Benefits__option\">\n          <h1>Преимущества</h1>\n        </div>\n      </div>\n    </section>\n\n\n    <section class=\"subBanner\">\n      <div class=\"container subBanner__content\">\n        <div class=\"subBanner__banner subBanner__left\">\n          <div class=\"subBanner__description\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\" alt=\"\">\n            <h3>ParistaNews</h3>\n          </div>\n          <hr>\n          <div class=\"subBanner__description\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\" alt=\"\">\n            <h3>ParistaGallery</h3>\n          </div>\n          <hr>\n          <div class=\"subBanner__description\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\" alt=\"\">\n            <h3>Support@parista.shop</h3>\n          </div>\n          <hr>\n          <div class=\"subBanner__description\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\" alt=\"\">\n            <h3 id=\"phoneNumber\">+7(499) 394-34-16</h3>\n          </div>\n        </div>\n        <div class=\"subBanner__banner subBanner__right\">\n          <h2>Связь с руководителем</h2>\n          <div>\n            <p class=\"subBanner__email\">E-mail <span>*</span></p>\n            <input type=\"text\" placeholder=\"Ваша почта\" class=\"subBanner__emailInput\">\n          </div>\n          <input type=\"text\" placeholder=\"Сообщение\" class=\"subBanner__messageInput\">\n          <button class=\"subBanner__button\">Написать</button>\n          <p class=\"subBanner__term\">Нажимая на кнопку, вы соглашаетесь с <span>политикой конфиденциальности</span></p>\n        </div>\n      </div>\n    </section>\n\n\n    <footer class=\"Footer\">\n      <div class=\"container\">\n        <div class=\"Footer__content\">\n          <div class=\"Footer__left\">\n            <div class=\"Footer__col\">\n              <p>Сертификаты</p>\n              <p>Отзывы</p>\n              <p>Акции</p>\n            </div>\n            <div class=\"Footer__col\">\n              <p>Гарантия</p>\n              <p>Оплата</p>\n              <p>Наши проекты</p>\n            </div>\n          </div>\n          <div class=\"Footer__center\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\n            <h3 class=\"Footer__email\">Support@parista.shop</h3>\n            <h3>+7(499) 394-34-16</h3>\n          </div>\n          <div class=\"Footer__right\">\n            <div class=\"Footer__col\">\n              <p>Вакансии</p>\n              <p>О нас</p>\n              <p>Производители</p>\n            </div>\n            <div class=\"Footer__col\">\n              <p>Доставка</p>\n              <p>Монтаж</p>\n              <p>Контакты</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"Footer__contacts\">\n          <svg width=\"24\" height=\"24\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.01 5.19C22.654 5.19 22.306 5.29557 22.01 5.49335C21.714 5.69114 21.4833 5.97226 21.347 6.30117C21.2108 6.63008 21.1751 6.992 21.2446 7.34116C21.314 7.69033 21.4855 8.01106 21.7372 8.26279C21.9889 8.51453 22.3097 8.68596 22.6588 8.75541C23.008 8.82487 23.3699 8.78922 23.6988 8.65298C24.0277 8.51675 24.3089 8.28604 24.5066 7.99003C24.7044 7.69402 24.81 7.34601 24.81 6.99C24.81 6.51261 24.6204 6.05477 24.2828 5.71721C23.9452 5.37964 23.4874 5.19 23.01 5.19ZM29.91 8.82C29.8808 7.57545 29.6477 6.3441 29.22 5.175C28.8386 4.1747 28.245 3.26892 27.48 2.52C26.7372 1.75114 25.8293 1.16126 24.825 0.795C23.659 0.354241 22.4263 0.115815 21.18 0.0899999C19.59 -8.3819e-08 19.08 0 15 0C10.92 0 10.41 -8.3819e-08 8.82 0.0899999C7.57373 0.115815 6.34101 0.354241 5.175 0.795C4.17251 1.16497 3.2654 1.75434 2.52 2.52C1.75114 3.26277 1.16126 4.17066 0.795 5.175C0.354241 6.34101 0.115815 7.57373 0.0899999 8.82C-8.3819e-08 10.41 0 10.92 0 15C0 19.08 -8.3819e-08 19.59 0.0899999 21.18C0.115815 22.4263 0.354241 23.659 0.795 24.825C1.16126 25.8293 1.75114 26.7372 2.52 27.48C3.2654 28.2457 4.17251 28.835 5.175 29.205C6.34101 29.6458 7.57373 29.8842 8.82 29.91C10.41 30 10.92 30 15 30C19.08 30 19.59 30 21.18 29.91C22.4263 29.8842 23.659 29.6458 24.825 29.205C25.8293 28.8387 26.7372 28.2489 27.48 27.48C28.2484 26.7339 28.8425 25.8273 29.22 24.825C29.6477 23.6559 29.8808 22.4246 29.91 21.18C29.91 19.59 30 19.08 30 15C30 10.92 30 10.41 29.91 8.82ZM27.21 21C27.1991 21.9522 27.0266 22.8956 26.7 23.79C26.4605 24.4428 26.0758 25.0326 25.575 25.515C25.0885 26.0108 24.4998 26.3946 23.85 26.64C22.9556 26.9666 22.0122 27.1391 21.06 27.15C19.56 27.225 19.005 27.24 15.06 27.24C11.115 27.24 10.56 27.24 9.06 27.15C8.07134 27.1685 7.08689 27.0163 6.15 26.7C5.52867 26.4421 4.96703 26.0592 4.5 25.575C4.00213 25.0931 3.62226 24.5028 3.39 23.85C3.02378 22.9427 2.82067 21.9779 2.79 21C2.79 19.5 2.7 18.945 2.7 15C2.7 11.055 2.7 10.5 2.79 9C2.79672 8.02658 2.97443 7.06192 3.315 6.15C3.57907 5.51687 3.9844 4.95249 4.5 4.5C4.95572 3.98425 5.51893 3.57464 6.15 3.3C7.06433 2.97007 8.028 2.79762 9 2.79C10.5 2.79 11.055 2.7 15 2.7C18.945 2.7 19.5 2.7 21 2.79C21.9522 2.80092 22.8956 2.97337 23.79 3.3C24.4716 3.55298 25.0834 3.96427 25.575 4.5C26.0666 4.96077 26.4506 5.5241 26.7 6.15C27.0334 7.0634 27.2059 8.02767 27.21 9C27.285 10.5 27.3 11.055 27.3 15C27.3 18.945 27.285 19.5 27.21 21ZM15 7.305C13.4787 7.30797 11.9924 7.76179 10.729 8.60913C9.46552 9.45646 8.48157 10.6593 7.90145 12.0656C7.32133 13.472 7.17109 15.0187 7.46969 16.5104C7.7683 18.0021 8.50235 19.3718 9.57911 20.4465C10.6559 21.5211 12.027 22.2525 13.5193 22.5482C15.0116 22.8439 16.558 22.6907 17.9632 22.1078C19.3684 21.525 20.5693 20.5387 21.4142 19.2736C22.2591 18.0084 22.71 16.5213 22.71 15C22.712 13.9877 22.5138 12.9849 22.1269 12.0494C21.7399 11.114 21.1718 10.2642 20.4553 9.54908C19.7388 8.83394 18.8879 8.26752 17.9517 7.88239C17.0155 7.49727 16.0123 7.30104 15 7.305ZM15 19.995C14.0121 19.995 13.0464 19.702 12.2249 19.1532C11.4035 18.6043 10.7633 17.8242 10.3852 16.9115C10.0072 15.9988 9.90824 14.9945 10.101 14.0255C10.2937 13.0566 10.7694 12.1666 11.468 11.468C12.1666 10.7694 13.0566 10.2937 14.0255 10.101C14.9945 9.90824 15.9988 10.0072 16.9115 10.3852C17.8242 10.7633 18.6043 11.4035 19.1532 12.2249C19.702 13.0464 19.995 14.0121 19.995 15C19.995 15.656 19.8658 16.3055 19.6148 16.9115C19.3638 17.5175 18.9958 18.0682 18.532 18.532C18.0682 18.9958 17.5175 19.3638 16.9115 19.6148C16.3055 19.8658 15.656 19.995 15 19.995Z\" fill=\"#373737\"/></svg>\n          <svg width=\"25.83\" height=\"19.33\" viewBox=\"0 0 30 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 3C30 1.35 28.65 0 27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3ZM27 3L15 10.5L3 3H27ZM27 21H3V6L15 13.5L27 6V21Z\" fill=\"#373737\"/></svg>\n          <svg width=\"22.35\" height=\"18.75\" viewBox=\"0 0 34 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M29.6227 2.10938C29.6026 2.10938 29.5824 2.10986 29.5623 2.11083C29.1986 2.12842 28.8417 2.21504 28.5107 2.36591L3.97284 11.8306L3.95935 11.8359C3.45922 12.0355 3.00716 12.2843 2.6519 12.5966C2.30582 12.9007 1.95056 13.3584 1.88666 13.9693C1.81743 14.6313 2.11862 15.1724 2.5009 15.528C2.8561 15.8583 3.30725 16.0644 3.75088 16.1952L9.87212 18.131C10.0959 18.2044 10.3332 18.2273 10.5671 18.1981C10.8031 18.1686 11.0295 18.0866 11.2298 17.9583L17.061 14.2794L13.4942 17.5005C13.3293 17.6352 13.1937 17.8028 13.0961 17.9928L13.0961 17.9928C12.9837 18.2118 12.9251 18.4545 12.9251 18.7006C12.9251 18.9468 12.9837 19.1894 13.0961 19.4084C13.2067 19.6239 13.3662 19.8104 13.5618 19.953L23.5401 27.3224C23.5828 27.3539 23.6275 27.3827 23.6739 27.4086C24.4059 27.8168 25.3591 28.0991 26.2809 27.6831C27.2064 27.2654 27.6343 26.3552 27.8158 25.4872C27.816 25.4863 27.8162 25.4855 27.8164 25.4846L31.9965 5.78271C32.2149 4.88222 32.1662 3.97962 31.7117 3.24873C31.2355 2.48271 30.4365 2.10938 29.6227 2.10938Z\" stroke=\"#373737\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </div>\n        <div class=\"Footer__catalog\">\n          <p>Мультизональные системы</p>\n          <p>Мульти сплит системы</p>\n          <p>Бытовые</p>\n          <p>Полупромышленные</p>\n          <p>Вентиляция</p>\n          <p>Очистка воздуха</p>\n          <p>Аксессуары</p>\n        </div>\n        <hr>\n        <div class=\"Footer__law\">\n          <p>© Parista 2023. Все права защищены</p>\n          <p>Политика конфиденциальности</p>\n          <p>Пользовательское соглашение</p>\n        </div>\n      </div>\n    </footer>\n\n  <" + "script type=\"text/javascript\" src=\"//code.jquery.com/jquery-1.11.0.min.js\"><" + "/script>\n  <" + "script type=\"text/javascript\" src=\"//code.jquery.com/jquery-migrate-1.2.1.min.js\"><" + "/script>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.10
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2023-02-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
	// Make sure the the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {

			// Support: IE <9 only
			// IE doesn't have `contains` on `document` so we need to check for
			// `documentElement` presence.
			// We need to fall back to `a` when `documentElement` is missing
			// as `ownerDocument` of elements within `<template/>` may have
			// a null one - a default behavior of all modern browsers.
			var adown = a.nodeType === 9 && a.documentElement || a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/PTSans-Bold.woff":
/*!************************************!*\
  !*** ./src/fonts/PTSans-Bold.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/PTSans-Bold.woff";

/***/ }),

/***/ "./src/fonts/PTSans-Bold.woff2":
/*!*************************************!*\
  !*** ./src/fonts/PTSans-Bold.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/PTSans-Bold.woff2";

/***/ }),

/***/ "./src/fonts/PTSans-Regular.woff":
/*!***************************************!*\
  !*** ./src/fonts/PTSans-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/PTSans-Regular.woff";

/***/ }),

/***/ "./src/fonts/PTSans-Regular.woff2":
/*!****************************************!*\
  !*** ./src/fonts/PTSans-Regular.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/PTSans-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Srbija-Sans.woff":
/*!************************************!*\
  !*** ./src/fonts/Srbija-Sans.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Srbija-Sans.woff";

/***/ }),

/***/ "./src/fonts/Srbija-Sans.woff2":
/*!*************************************!*\
  !*** ./src/fonts/Srbija-Sans.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Srbija-Sans.woff2";

/***/ }),

/***/ "./src/img/Benefit.png":
/*!*****************************!*\
  !*** ./src/img/Benefit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Benefit.png";

/***/ }),

/***/ "./src/img/Calculator.svg":
/*!********************************!*\
  !*** ./src/img/Calculator.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Calculator.svg";

/***/ }),

/***/ "./src/img/Logo.svg":
/*!**************************!*\
  !*** ./src/img/Logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Logo.svg";

/***/ }),

/***/ "./src/img/ServiceBg.png":
/*!*******************************!*\
  !*** ./src/img/ServiceBg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ServiceBg.png";

/***/ }),

/***/ "./src/img/accessory.svg":
/*!*******************************!*\
  !*** ./src/img/accessory.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/accessory.svg";

/***/ }),

/***/ "./src/img/air.png":
/*!*************************!*\
  !*** ./src/img/air.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/air.png";

/***/ }),

/***/ "./src/img/air.svg":
/*!*************************!*\
  !*** ./src/img/air.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/air.svg";

/***/ }),

/***/ "./src/img/arrow.svg":
/*!***************************!*\
  !*** ./src/img/arrow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/arrow.svg";

/***/ }),

/***/ "./src/img/burger.svg":
/*!****************************!*\
  !*** ./src/img/burger.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/burger.svg";

/***/ }),

/***/ "./src/img/cartBg.png":
/*!****************************!*\
  !*** ./src/img/cartBg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cartBg.png";

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/close.svg";

/***/ }),

/***/ "./src/img/comparison.svg":
/*!********************************!*\
  !*** ./src/img/comparison.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/comparison.svg";

/***/ }),

/***/ "./src/img/condition.png":
/*!*******************************!*\
  !*** ./src/img/condition.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/condition.png";

/***/ }),

/***/ "./src/img/condition.svg":
/*!*******************************!*\
  !*** ./src/img/condition.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/condition.svg";

/***/ }),

/***/ "./src/img/condition_icon.svg":
/*!************************************!*\
  !*** ./src/img/condition_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/condition_icon.svg";

/***/ }),

/***/ "./src/img/freon.png":
/*!***************************!*\
  !*** ./src/img/freon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/freon.png";

/***/ }),

/***/ "./src/img/guy.png":
/*!*************************!*\
  !*** ./src/img/guy.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/guy.png";

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/instagram.svg";

/***/ }),

/***/ "./src/img/like.svg":
/*!**************************!*\
  !*** ./src/img/like.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/like.svg";

/***/ }),

/***/ "./src/img/mail.svg":
/*!**************************!*\
  !*** ./src/img/mail.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mail.svg";

/***/ }),

/***/ "./src/img/manafactureOption1.png":
/*!****************************************!*\
  !*** ./src/img/manafactureOption1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manafactureOption1.png";

/***/ }),

/***/ "./src/img/manafactureOption2.png":
/*!****************************************!*\
  !*** ./src/img/manafactureOption2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manafactureOption2.png";

/***/ }),

/***/ "./src/img/manafactureOption4.png":
/*!****************************************!*\
  !*** ./src/img/manafactureOption4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manafactureOption4.png";

/***/ }),

/***/ "./src/img/manufactureOption3.png":
/*!****************************************!*\
  !*** ./src/img/manufactureOption3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manufactureOption3.png";

/***/ }),

/***/ "./src/img/montage.png":
/*!*****************************!*\
  !*** ./src/img/montage.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/montage.png";

/***/ }),

/***/ "./src/img/montageMobile.png":
/*!***********************************!*\
  !*** ./src/img/montageMobile.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/montageMobile.png";

/***/ }),

/***/ "./src/img/phone.svg":
/*!***************************!*\
  !*** ./src/img/phone.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/phone.svg";

/***/ }),

/***/ "./src/img/pipe.png":
/*!**************************!*\
  !*** ./src/img/pipe.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pipe.png";

/***/ }),

/***/ "./src/img/popular.png":
/*!*****************************!*\
  !*** ./src/img/popular.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/popular.png";

/***/ }),

/***/ "./src/img/profile.svg":
/*!*****************************!*\
  !*** ./src/img/profile.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/profile.svg";

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ "./src/img/star_empty.svg":
/*!********************************!*\
  !*** ./src/img/star_empty.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star_empty.svg";

/***/ }),

/***/ "./src/img/star_full.svg":
/*!*******************************!*\
  !*** ./src/img/star_full.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/star_full.svg";

/***/ }),

/***/ "./src/img/subBannerBg.png":
/*!*********************************!*\
  !*** ./src/img/subBannerBg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/subBannerBg.png";

/***/ }),

/***/ "./src/img/tech.png":
/*!**************************!*\
  !*** ./src/img/tech.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tech.png";

/***/ }),

/***/ "./src/img/techMobile.png":
/*!********************************!*\
  !*** ./src/img/techMobile.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/techMobile.png";

/***/ }),

/***/ "./src/img/telegram.svg":
/*!******************************!*\
  !*** ./src/img/telegram.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/telegram.svg";

/***/ }),

/***/ "./src/img/triangle.svg":
/*!******************************!*\
  !*** ./src/img/triangle.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/triangle.svg";

/***/ }),

/***/ "./src/slick/ajax-loader.gif":
/*!***********************************!*\
  !*** ./src/slick/ajax-loader.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ajax-loader.gif";

/***/ }),

/***/ "./src/slick/fonts/slick.eot":
/*!***********************************!*\
  !*** ./src/slick/fonts/slick.eot ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/slick.eot";

/***/ }),

/***/ "./src/slick/fonts/slick.svg":
/*!***********************************!*\
  !*** ./src/slick/fonts/slick.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/slick.svg";

/***/ }),

/***/ "./src/slick/fonts/slick.ttf":
/*!***********************************!*\
  !*** ./src/slick/fonts/slick.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/slick.ttf";

/***/ }),

/***/ "./src/slick/fonts/slick.woff":
/*!************************************!*\
  !*** ./src/slick/fonts/slick.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/slick.woff";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick/slick.min.js */ "./src/slick/slick.min.js");
/* harmony import */ var _slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_modalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalHeader */ "./src/modules/modalHeader.js");
/* harmony import */ var _modules_modalHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_modalHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_telephoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/telephoneInput */ "./src/modules/telephoneInput.js");
/* harmony import */ var _modules_telephoneInput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_telephoneInput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_chooseButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/chooseButtons */ "./src/modules/chooseButtons.js");
/* harmony import */ var _modules_chooseButtons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_chooseButtons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_switchTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/switchTabs */ "./src/modules/switchTabs.js");
/* harmony import */ var _modules_switchTabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_switchTabs__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







document.getElementById("phoneNumber").addEventListener("click", function () {
  var phoneNumber = this.innerHTML;
  navigator.clipboard.writeText(phoneNumber);
});
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1261,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 769,
    settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 500,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  }]
});
})();

/******/ })()
;
//# sourceMappingURL=main.31ef8075d895dcef79cc.js.map