"use strict";
function e(e, i, t, n) {
  return new (t || (t = Promise))(function (r, o) {
    function s(e) {
      try {
        c(n.next(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      try {
        c(n.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      var i;
      e.done
        ? r(e.value)
        : ((i = e.value),
          i instanceof t
            ? i
            : new t(function (e) {
                e(i);
              })).then(s, a);
    }
    c((n = n.apply(e, i || [])).next());
  });
}
Object.defineProperty(exports, "__esModule", { value: !0 });
const i = (e, i, t = !1) => {
    const { touches: n } = e,
      { clientX: r, clientY: o } = e;
    if (!i) return;
    const { left: s, top: a } = i.getBoundingClientRect();
    let c = { x: 0, y: 0 };
    if (t) {
      if (t && void 0 !== n && Object.keys(n).length > 0) {
        const { clientX: e, clientY: i } = n[0];
        c = { x: e - s, y: i - a };
      }
    } else c = { x: r - s, y: o - a };
    return 0 !== Object.keys(c).length || c.constructor !== Object ? c : void 0;
  },
  t = (e, i) => !!e && e.classList.contains(i),
  n = (e, i) => {
    if (!e)
      return { hour: "12", minutes: "00", type: "24h" === i ? void 0 : "PM" };
    const { value: t } = e;
    if ("" === t || !t)
      return { hour: "12", minutes: "00", type: "24h" === i ? void 0 : "PM" };
    const [n, r] = t.split(" "),
      [o, s] = n.split(":");
    if (/[a-z]/i.test(n))
      return { error: "The input contains invalid letters or whitespace." };
    if (t.includes(" ")) {
      if (!r)
        return {
          error: `The input contains invalid letters or whitespace.\n        Problem is with input length (max 5), currentLength: ${t.length}.`,
          currentLength: t.length,
        };
      if (t.length > 8 || ("AM" !== r && "PM" !== r))
        return {
          error: `The input contains invalid letters or whitespace.\n        Problem is with input length (max 8), currentLength: ${t.length} or invalid type (PM or AM), currentType: ${r}.`,
          currentLength: t.length,
          currentType: r,
        };
    }
    let a = Number(s);
    const c = Number(o);
    return (
      a < 10 ? (a = `0${a}`) : 0 === a && (a = "00"),
      "12h" === i
        ? c > 12 || a > 59 || a < 0 || 0 === c || ("AM" !== r && "PM" !== r)
          ? {
              error: `The input contains invalid letters or numbers. Problem is with hour which should be less than 13 and higher or equal 0, currentHour: ${c}. Minutes should be less than 60 and higher or equal 0, currentMinutes: ${Number(
                a
              )} or invalid type (PM or AM), currentType: ${r}.`,
              currentHour: c,
              currentMin: a,
              currentType: r,
            }
          : {
              hour: c < 10 ? `0${c}` : c.toString(),
              minutes: a.toString(),
              type: r,
            }
        : c < 0 || c > 23 || a > 59
        ? {
            error: `The input contains invalid numbers. Problem is with hour which should be less than 24 and higher or equal 0, currentHour: ${c}. Minutes should be less than 60 and higher or equal 0, currentMinutes: ${Number(
              a
            )}`,
            currentHour: c,
            currentMin: a,
          }
        : { hour: c < 10 ? `0${c}` : c.toString(), minutes: a.toString() }
    );
  },
  r = (e, i, t) => {
    const n = new CustomEvent(i, { detail: t });
    e.dispatchEvent(n);
  },
  o = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
  s = (e, i, t) => ((e, i) => Math.round(e / i) * i)(e, i * t);
function a(e, i) {
  void 0 === i && (i = {});
  var t = i.insertAt;
  if (e && "undefined" != typeof document) {
    var n = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    (r.type = "text/css"),
      "top" === t && n.firstChild
        ? n.insertBefore(r, n.firstChild)
        : n.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e));
  }
}
a(
  ":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear; }\n\n.timepicker-ui * {\n  box-sizing: border-box !important; }\n\n.timepicker-ui-modal {\n  font-family: 'Roboto', sans-serif;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(156, 155, 155, 0.6);\n  z-index: 5000; }\n  .timepicker-ui-modal.removed {\n    top: auto;\n    bottom: auto;\n    left: auto;\n    right: auto;\n    background-color: transparent; }\n\n.timepicker-ui-measure {\n  position: absolute;\n  top: -9999px;\n  width: 3.125rem;\n  height: 3.125rem;\n  overflow: scroll; }\n\n.timepicker-ui-wrapper, .timepicker-ui-wrapper.mobile {\n  position: fixed;\n  z-index: 5001;\n  width: 328px;\n  height: 500px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper {\n    flex-direction: row;\n    height: 360px;\n    width: 584px; } }\n\n@media screen and (max-width: 330px) and (orientation: portrait) {\n  .timepicker-ui-wrapper {\n    width: 315px; } }\n\n.timepicker-ui-wrapper.mobile {\n  height: 218px; }\n  @media screen and (max-width: 330px) {\n    .timepicker-ui-wrapper.mobile {\n      width: 315px; } }\n\n.timepicker-ui-header, .timepicker-ui-header.mobile {\n  padding-top: 52px;\n  padding-bottom: 36px;\n  padding-right: 24px;\n  padding-left: 24px;\n  height: 104px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 100%; }\n\n.timepicker-ui-header.mobile {\n  padding-bottom: 0;\n  padding-top: 35px; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-header {\n    height: auto;\n    flex-direction: column; } }\n\n.timepicker-ui-select-time, .timepicker-ui-select-time.mobile {\n  text-transform: uppercase;\n  position: absolute;\n  top: calc(28px - 12px);\n  left: 24px;\n  font-size: 12px;\n  color: #a9a9a9; }\n\n.timepicker-ui-body {\n  height: 256px;\n  width: 256px;\n  margin: 0 auto;\n  position: relative;\n  border-radius: 100%; }\n  @media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n    .timepicker-ui-body {\n      padding-right: 0;\n      padding-left: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-top: 23px; } }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-landspace {\n    display: flex;\n    flex-direction: column;\n    width: 100%; } }\n\n.timepicker-ui-footer, .timepicker-ui-footer-mobile {\n  height: 76px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-footer {\n    justify-content: flex-end; } }\n\n.timepicker-ui-footer.mobile {\n  align-items: flex-start; }\n\n.timepicker-ui-clock-face {\n  background-color: #e0e0e0;\n  height: 100%;\n  width: 100%;\n  border-radius: 100%;\n  position: relative; }\n  @media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n    .timepicker-ui-clock-face {\n      height: 256px;\n      width: 256px;\n      top: 15px; } }\n\n.timepicker-ui-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  user-select: none;\n  touch-action: none;\n  transform: translate(-50%, -50%);\n  background-color: #6200ee;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%; }\n\n.timepicker-ui-tips-wrapper {\n  height: 100%;\n  width: 100%; }\n\n.timepicker-ui-tips-wrapper-24h {\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  z-index: 0;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  border-radius: 50%; }\n  .timepicker-ui-tips-wrapper-24h-disabled {\n    pointer-events: none;\n    touch-action: none;\n    user-select: none; }\n\n.timepicker-ui-hour-time-12, .timepicker-ui-minutes-time, .timepicker-ui-hour-time-24 {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  cursor: pointer;\n  font-size: 17.6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  touch-action: none;\n  user-select: none; }\n  .timepicker-ui-hour-time-12 span, .timepicker-ui-minutes-time span, .timepicker-ui-hour-time-24 span {\n    touch-action: none;\n    user-select: none; }\n\n.timepicker-ui-hour-time-12 {\n  display: block;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.timepicker-ui-wrapper-time, .timepicker-ui-wrapper-time.mobile {\n  display: flex;\n  margin-right: 10px;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-time {\n    margin-right: 0;\n    height: auto; } }\n\n.timepicker-ui-wrapper-time-24h {\n  margin-right: 0px; }\n\n.timepicker-ui-wrapper-time.mobile {\n  position: relative; }\n\n.timepicker-ui-hour, .timepicker-ui-minutes, .timepicker-ui-hour.mobile, .timepicker-ui-minutes.mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 51.2px;\n  background-color: #e4e4e4;\n  border-radius: 7px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n  border: 2px solid transparent;\n  padding: 10px;\n  width: 96px; }\n  .timepicker-ui-hour:hover, .timepicker-ui-hour.active, .timepicker-ui-minutes:hover, .timepicker-ui-minutes.active, .timepicker-ui-hour.mobile:hover, .timepicker-ui-hour.mobile.active, .timepicker-ui-minutes.mobile:hover, .timepicker-ui-minutes.mobile.active {\n    color: #6200ee;\n    background-color: #ece0fd; }\n\n.timepicker-ui-hour.mobile, .timepicker-ui-minutes.mobile {\n  height: 70px; }\n  .timepicker-ui-hour.mobile[contenteditable='true']:focus, .timepicker-ui-hour.mobile[contenteditable='true']:active, .timepicker-ui-minutes.mobile[contenteditable='true']:focus, .timepicker-ui-minutes.mobile[contenteditable='true']:active {\n    border: 2px solid #6200ee;\n    outline-color: #6200ee;\n    user-select: all; }\n\n.timepicker-ui-dots, .timepicker-ui-dots.mobile {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 57.6px;\n  user-select: none;\n  touch-action: none; }\n\n.timepicker-ui-wrapper-type-time, .timepicker-ui-wrapper-type-time.mobile {\n  display: flex;\n  flex-direction: column;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  color: #787878; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-wrapper-type-time {\n    flex-direction: row;\n    width: 100%; } }\n\n.timepicker-ui-wrapper-type-time.mobile {\n  height: 70px; }\n\n.timepicker-ui-am, .timepicker-ui-pm, .timepicker-ui-am.mobile, .timepicker-ui-pm.mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #d6d6d6;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  width: 100%;\n  height: 100%; }\n  .timepicker-ui-am:hover, .timepicker-ui-am.active, .timepicker-ui-pm:hover, .timepicker-ui-pm.active, .timepicker-ui-am.mobile:hover, .timepicker-ui-am.mobile.active, .timepicker-ui-pm.mobile:hover, .timepicker-ui-pm.mobile.active {\n    color: #6200ee;\n    background-color: #ece0fd; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-am, .timepicker-ui-pm {\n    width: 50%;\n    height: 44px; } }\n\n.timepicker-ui-am, .timepicker-ui-am.mobile {\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  border-bottom-width: calc(0.7504px / 2); }\n\n.timepicker-ui-am.mobile {\n  border-bottom-left-radius: 0; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-am {\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n    border-top-right-radius: 0;\n    border-top-width: 1.5008px;\n    border-right-width: calc(0.7504px / 2); } }\n\n.timepicker-ui-pm, .timepicker-ui-pm.mobile {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  border-top-width: calc(0.7504px / 2);\n  width: 54px; }\n\n.timepicker-ui-pm.mobile {\n  border-top-right-radius: 0; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-pm {\n    border-bottom-right-radius: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 0;\n    border-bottom-width: 1.5008px;\n    border-left-width: calc(0.7504px / 2);\n    width: 50%;\n    height: 44px; } }\n\n.timepicker-ui-cancel-btn, .timepicker-ui-ok-btn, .timepicker-ui-cancel-btn.mobile, .timepicker-ui-ok.btn-mobile {\n  color: #6200ee;\n  text-transform: uppercase;\n  border-radius: 7px;\n  background-color: transparent;\n  text-align: center;\n  font-size: 15.2px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  outline: none; }\n  .timepicker-ui-cancel-btn:hover, .timepicker-ui-ok-btn:hover, .timepicker-ui-cancel-btn.mobile:hover, .timepicker-ui-ok.btn-mobile:hover {\n    background-color: #d6d6d6; }\n\n.timepicker-ui-cancel-btn, .timepicker-ui-cancel-btn.mobile {\n  width: 72px;\n  margin-right: 4px; }\n\n.timepicker-ui-ok-btn, .timepicker-ui-ok-btn.mobile {\n  width: 64px;\n  margin-left: 4px; }\n\n.timepicker-ui-wrapper-btn, .timepicker-ui-keyboard-icon, .timepicker-ui-wrapper-btn-mobile, .timepicker-ui-keyboard-icon-mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none; }\n\n.timepicker-ui-keyboard-icon-wrapper, .timepicker-ui-keyboard-icon-wrapper.mobile {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  bottom: -26px;\n  left: 12px;\n  transition: all 0.3s ease; }\n  .timepicker-ui-keyboard-icon-wrapper:hover .timepicker-ui-keyboard-icon,\n  .timepicker-ui-keyboard-icon-wrapper:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile:hover .timepicker-ui-keyboard-icon,\n  .timepicker-ui-keyboard-icon-wrapper.mobile:hover .timepicker-ui-keyboard-icon.mobile {\n    background-color: #d6d6d6;\n    border-radius: 7px; }\n\n.timepicker-ui-keyboard-icon-wrapper.mobile {\n  bottom: -5px; }\n\n.timepicker-ui-keyboard-icon, .timepicker-ui-keyboard-icon.mobile {\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #4e545a;\n  height: 44px;\n  width: 44px; }\n  .timepicker-ui-keyboard-icon:hover, .timepicker-ui-keyboard-icon.mobile:hover {\n    color: #6200ee; }\n\n@media screen and (min-width: 320px) and (max-width: 825px) and (orientation: landscape) {\n  .timepicker-ui-keyboard-icon-wrapper, .timepicker-ui-keyboard-icon-wrapper.mobile {\n    position: absolute;\n    bottom: 8px; } }\n\n.timepicker-ui-wrapper-btn, .timepicker-ui-wrapper-btn.mobile {\n  margin-right: 8px;\n  position: relative;\n  bottom: -14px; }\n\n.timepicker-ui-hour-text, .timepicker-ui-minute-text, .timepicker-ui-hour-text.mobile, .timepicker-ui-minute-text.mobile {\n  position: absolute;\n  bottom: 6px;\n  font-size: 12.8px;\n  color: #a9a9a9;\n  left: 0; }\n\n.timepicker-ui-minute-text, .timepicker-ui-minute-text.mobile {\n  left: 120px; }\n\n.timepicker-ui-clock-hand {\n  position: absolute;\n  background-color: #6200ee;\n  bottom: 50%;\n  height: 40%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom 0;\n  width: 2px; }\n\n.timepicker-ui-clock-hand-24h {\n  height: 23%; }\n\n.timepicker-ui-circle-hand {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  height: 46px;\n  width: 46px;\n  box-sizing: border-box !important;\n  background-color: #6200ee; }\n  .timepicker-ui-circle-hand.small-circle {\n    height: 36px;\n    width: 36px;\n    box-sizing: border-box !important; }\n\n.timepicker-ui-circle-hand-24h {\n  height: 32px;\n  width: 32px;\n  top: 4px;\n  left: 1px; }\n\n.timepicker-ui-value-tips, .timepicker-ui-value-tips-24h {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none; }\n  .timepicker-ui-value-tips.active, .timepicker-ui-value-tips-24h.active {\n    color: #fff; }\n\n.timepicker-ui-clock-animation {\n  animation: clockanimation 350ms linear; }\n\n.timepicker-ui-open-element.disabled {\n  pointer-events: none;\n  touch-action: none;\n  user-select: none; }\n\n.timepicker-ui-tips-animation {\n  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }\n\n.opacity {\n  transition: opacity 0.15s linear; }\n  .opacity.show {\n    opacity: 1; }\n\n.invalid-value {\n  border-color: #d50000 !important;\n  color: #d50000 !important; }\n  .invalid-value:hover, .invalid-value:focus, .invalid-value:active {\n    border-color: #d50000 !important;\n    color: #d50000 !important; }\n\n@keyframes clockanimation {\n  0% {\n    opacity: 0;\n    transform: scale(0.8); }\n  to {\n    opacity: 1;\n    transform: scale(1); } }\n\n.timepicker-ui-invalid-format {\n  border: 2px solid red;\n  color: red; }\n\n.timepicker-ui-invalid-text {\n  color: red; }\n"
);
a(
  ":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear; }\n\n.timepicker-ui-wrapper.crane-straight, .timepicker-ui-wrapper.mobile.crane-straight {\n  border-radius: 0;\n  background-color: #4e0d3a;\n  color: #fff; }\n  .timepicker-ui-wrapper.crane-straight.radius, .timepicker-ui-wrapper.mobile.crane-straight.radius {\n    border-radius: 1.25rem; }\n\n.timepicker-ui-select-time.crane-straight, .timepicker-ui-select-time.mobile.crane-straight {\n  color: #e5e5e5; }\n\n.timepicker-ui-clock-face.crane-straight, .timepicker-ui-clock-face.mobile.crane-straight {\n  background-color: #71135c; }\n\n.timepicker-ui-dot.crane-straight, .timepicker-ui-dot.mobile.crane-straight {\n  background-color: #f7363e; }\n\n.timepicker-ui-hour.crane-straight, .timepicker-ui-minutes.crane-straight, .timepicker-ui-hour.mobile.crane-straight, .timepicker-ui-minutes.mobile.crane-straight {\n  background-color: #71135c;\n  border-radius: 0;\n  color: #fff; }\n  .timepicker-ui-hour.crane-straight.radius, .timepicker-ui-minutes.crane-straight.radius, .timepicker-ui-hour.mobile.crane-straight.radius, .timepicker-ui-minutes.mobile.crane-straight.radius {\n    border-radius: 1.25rem; }\n  .timepicker-ui-hour.crane-straight:hover, .timepicker-ui-hour.crane-straight.active, .timepicker-ui-minutes.crane-straight:hover, .timepicker-ui-minutes.crane-straight.active, .timepicker-ui-hour.mobile.crane-straight:hover, .timepicker-ui-hour.mobile.crane-straight.active, .timepicker-ui-minutes.mobile.crane-straight:hover, .timepicker-ui-minutes.mobile.crane-straight.active {\n    background-color: #f7363e; }\n\n.timepicker-ui-hour.mobile.crane-straight[contenteditable='true']:focus, .timepicker-ui-hour.mobile.crane-straight[contenteditable='true']:active, .timepicker-ui-minutes.mobile.crane-straight[contenteditable='true']:focus, .timepicker-ui-minutes.mobile.crane-straight[contenteditable='true']:active {\n  border-color: #fff;\n  outline-color: #fff; }\n\n.timepicker-ui-dots.crane-straight, .timepicker-ui-dots.mobile.crane-straight {\n  color: #fff; }\n\n.timepicker-ui-wrapper-type-time.crane-straight, .timepicker-ui-wrapper-type-time.mobile.crane-straight {\n  color: #fff; }\n\n.timepicker-ui-am.crane-straight, .timepicker-ui-pm.crane-straight, .timepicker-ui-am.mobile.crane-straight, .timepicker-ui-pm.mobile.crane-straight {\n  border: 0.125rem solid transparent;\n  border-radius: 0;\n  background-color: #71135c; }\n\n.timepicker-ui-am:hover.crane-straight, .timepicker-ui-am.active.crane-straight, .timepicker-ui-pm:hover.crane-straight, .timepicker-ui-pm.active.crane-straight, .timepicker-ui-am.mobile:hover.crane-straight, .timepicker-ui-am.mobile.active.crane-straight, .timepicker-ui-pm.mobile:hover.crane-straight, .timepicker-ui-pm.mobile.active.crane-straight {\n  color: #fff;\n  background-color: #f7363e; }\n\n.timepicker-ui-am.crane-straight.radius {\n  border-top-left-radius: 1.25rem;\n  border-top-right-radius: 1.25rem; }\n\n.timepicker-ui-pm.crane-straight.radius {\n  border-bottom-left-radius: 1.25rem;\n  border-bottom-right-radius: 1.25rem; }\n\n@media screen and (min-width: 20rem) and (max-width: 47.9375rem) and (orientation: landscape) {\n  .timepicker-ui-am.crane-straight.radius {\n    border-bottom-left-radius: 1.25rem;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; } }\n\n@media screen and (min-width: 20rem) and (max-width: 47.9375rem) and (orientation: landscape) {\n  .timepicker-ui-pm.crane-straight.radius {\n    border-bottom-right-radius: 1.25rem;\n    border-top-right-radius: 1.25rem;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; } }\n\n@media screen and (min-width: 20rem) and (max-width: 47.9375rem) and (orientation: landscape) {\n  .timepicker-ui-am.mobile.crane-straight.radius {\n    border-bottom-left-radius: 0rem;\n    border-bottom-right-radius: 0rem; } }\n\n@media screen and (min-width: 20rem) and (max-width: 47.9375rem) and (orientation: landscape) {\n  .timepicker-ui-pm.mobile.crane-straight.radius {\n    border-top-left-radius: 0rem;\n    border-top-right-radius: 0rem; } }\n\n.timepicker-ui-cancel-btn.crane-straight, .timepicker-ui-ok-btn.crane-straight, .timepicker-ui-cancel-btn.mobile.crane-straight, .timepicker-ui-ok-btn.mobile.crane-straight {\n  color: #fff;\n  border-radius: 0rem; }\n  .timepicker-ui-cancel-btn.crane-straight.radius, .timepicker-ui-ok-btn.crane-straight.radius, .timepicker-ui-cancel-btn.mobile.crane-straight.radius, .timepicker-ui-ok-btn.mobile.crane-straight.radius {\n    border-radius: 0.8125rem; }\n\n.timepicker-ui-cancel-btn:hover.crane-straight, .timepicker-ui-ok-btn:hover.crane-straight, .timepicker-ui-cancel-btn.mobile:hover.crane-straight, .timepicker-ui-ok-btn.mobile:hover.crane-straight {\n  background-color: #f7363e; }\n\n.timepicker-ui-keyboard-icon-wrapper.crane-straight, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight {\n  color: #fff; }\n  .timepicker-ui-keyboard-icon-wrapper.crane-straight.radius, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius {\n    border-radius: 1.25rem; }\n\n.timepicker-ui-keyboard-icon-wrapper.crane-straight:hover .timepicker-ui-keyboard-icon,\n.timepicker-ui-keyboard-icon-wrapper.crane-straight:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight:hover .timepicker-ui-keyboard-icon,\n.timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight:hover .timepicker-ui-keyboard-icon.mobile {\n  background-color: #f7363e;\n  color: #fff;\n  border-radius: 0; }\n\n.timepicker-ui-keyboard-icon-wrapper.crane-straight.radius:hover .timepicker-ui-keyboard-icon,\n.timepicker-ui-keyboard-icon-wrapper.crane-straight.radius:hover .timepicker-ui-keyboard-icon.mobile, .timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius:hover .timepicker-ui-keyboard-icon,\n.timepicker-ui-keyboard-icon-wrapper.mobile.crane-straight.radius:hover .timepicker-ui-keyboard-icon.mobile {\n  border-radius: 0.875rem; }\n\n.timepicker-ui-keyboard-icon.crane-straight:hover, .timepicker-ui-keyboard-icon.mobile.crane-straight:hover {\n  color: #fff; }\n  .timepicker-ui-keyboard-icon.crane-straight:hover.radius, .timepicker-ui-keyboard-icon.mobile.crane-straight:hover.radius {\n    border-radius: 1.25rem; }\n\n.timepicker-ui-clock-hand.crane-straight {\n  background-color: #f7363e; }\n\n.timepicker-ui-circle-hand.crane-straight {\n  border-color: #f7363e;\n  background-color: #f7363e; }\n\n.timepicker-ui-value-tips.crane-straight {\n  color: #fff; }\n"
);
var c =
  ":export {\n  cranepurple800: #5c1349;\n  cranepurple900: #4e0d3a;\n  cranepurple700: #71135c;\n  cranered400: #f7363e;\n  white: #fff;\n  purple: #6200ee;\n  opacity: opacity 0.15s linear; }\n";
a(c);
const l = {
    amLabel: "AM",
    animation: !0,
    appendModalSelector: "",
    backdrop: !0,
    cancelLabel: "CANCEL",
    editable: !1,
    enableScrollbar: !1,
    enableSwitchIcon: !1,
    mobileTimeLabel: "Enter Time",
    focusInputAfterCloseModal: !1,
    hourMobileLabel: "Hour",
    iconTemplate:
      '<i class="material-icons timepicker-ui-keyboard-icon">keyboard</i>',
    iconTemplateMobile:
      '<i class="material-icons timepicker-ui-keyboard-icon">schedule</i>',
    incrementHours: 1,
    incrementMinutes: 1,
    minuteMobileLabel: "Minute",
    mobile: !1,
    okLabel: "OK",
    pmLabel: "PM",
    timeLabel: "Select Time",
    switchToMinutesAfterSelectHour: !1,
    theme: "basic",
    preventDefault: !0,
    clockType: "12h",
    disabledTime: "",
  },
  u = "mousedown mouseup mousemove mouseleave mouseover".concat(
    " touchstart touchmove touchend"
  ),
  p = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  d = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  h = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
class m {
  constructor(e) {
    (this.create = () => {
      const e = (this.clockFace.offsetWidth - 32) / 2,
        i = (this.clockFace.offsetHeight - 32) / 2,
        t = e - 9;
      (this.tipsWrapper.innerHTML = ""),
        this.array.forEach((n, r) => {
          const o = r * (360 / this.array.length) * (Math.PI / 180);
          const s = document.createElement("span"),
            a = document.createElement("span");
          (a.innerHTML = n),
            "24h" === this.clockType
              ? a.classList.add("timepicker-ui-value-tips-24h")
              : a.classList.add("timepicker-ui-value-tips"),
            s.classList.add(this.classToAdd),
            "crane-straight" === this.theme &&
              (s.classList.add("crane-straight"),
              a.classList.add("crane-straight")),
            (s.style.left = e + Math.sin(o) * t - s.offsetWidth + "px"),
            (s.style.bottom = i + Math.cos(o) * t - s.offsetHeight + "px"),
            s.appendChild(a),
            this.tipsWrapper.appendChild(s);
        });
    }),
      (this.array = e.array),
      (this.classToAdd = e.classToAdd),
      (this.clockFace = e.clockFace),
      (this.tipsWrapper = e.tipsWrapper),
      (this.theme = e.theme),
      (this.clockType = e.clockType);
  }
}
exports.TimepickerUI = class {
  constructor(a, k) {
    var b, v, g;
    (this.create = () => {
      this._setTimepickerClassToElement(),
        this._setInputClassToInputElement(),
        this._setDataOpenToInputIfDosentExistInWrapper(),
        this._setClassTopOpenElement(),
        this._handleOpenOnClick(),
        this._checkDisableOptions();
    }),
      (this.open = () => {
        this.create(), this._eventsBundle();
      }),
      (this.close = () => {
        (this._isTouchMouseMove = !1),
          u
            .split(" ")
            .map((e) =>
              document.removeEventListener(e, this.mutliEventsMoveHandler, !1)
            ),
          document.removeEventListener(
            "mousedown",
            this.eventsClickMobileHandler
          ),
          document.removeEventListener(
            "touchstart",
            this.eventsClickMobileHandler
          ),
          this._options.enableSwitchIcon &&
            (this.keyboardClockIcon.removeEventListener(
              "touchstart",
              this.handlerViewChange
            ),
            this.keyboardClockIcon.removeEventListener(
              "mousedown",
              this.handlerViewChange
            )),
          this._removeAnimationToClose(),
          this.openElement.forEach((e) =>
            null == e ? void 0 : e.classList.remove("disabled")
          ),
          setTimeout(() => {
            (document.body.style.overflowY = ""),
              (document.body.style.paddingRight = "");
          }, 400),
          setTimeout(() => {
            var e;
            this.openElement.forEach((e) =>
              null == e ? void 0 : e.classList.remove("disabled")
            ),
              this._options.focusInputAfterCloseModal &&
                (null === (e = this.input) || void 0 === e || e.focus()),
              null !== this.modalElement && this.modalElement.remove();
          }, 300);
      }),
      (this.destroy = () => {
        u
          .split(" ")
          .map((e) =>
            document.removeEventListener(e, this.mutliEventsMoveHandler, !1)
          ),
          document.removeEventListener(
            "mousedown",
            this.eventsClickMobileHandler
          ),
          document.removeEventListener(
            "touchstart",
            this.eventsClickMobileHandler
          ),
          this._options.enableSwitchIcon &&
            this.keyboardClockIcon &&
            (this.keyboardClockIcon.removeEventListener(
              "touchstart",
              this.handlerViewChange
            ),
            this.keyboardClockIcon.removeEventListener(
              "mousedown",
              this.handlerViewChange
            )),
          (this._element = null),
          (this._options = null),
          (this._isTouchMouseMove = null),
          (this._degreesHours = null),
          (this._degreesMinutes = null),
          (this._isMobileView = null),
          (this.mutliEventsMoveHandler = null),
          (this.eventsClickMobileHandler = null);
      }),
      (this._setTheme = () => {
        const e = this.modalElement.querySelectorAll("div"),
          { theme: i } = this._options;
        "crane-straight" === i
          ? e.forEach((e) => e.classList.add("crane-straight"))
          : "crane-radius" === i &&
            e.forEach((e) => e.classList.add("crane-straight", "radius"));
      }),
      (this._setInputClassToInputElement = () => {
        var e;
        t(this.input, "timepicker-ui-input") ||
          null === (e = this.input) ||
          void 0 === e ||
          e.classList.add("timepicker-ui-input");
      }),
      (this._setDataOpenToInputIfDosentExistInWrapper = () => {
        var e;
        null === this.openElementData &&
          (null === (e = this.input) ||
            void 0 === e ||
            e.setAttribute("data-open", "timepicker-ui-input"));
      }),
      (this._setClassTopOpenElement = () => {
        this.openElement.forEach((e) =>
          null == e ? void 0 : e.classList.add("timepicker-ui-open-element")
        );
      }),
      (this._removeBackdrop = () => {
        this._options.backdrop ||
          (this.modalElement.classList.add("removed"),
          this.openElement.forEach((e) =>
            null == e ? void 0 : e.classList.add("disabled")
          ));
      }),
      (this._setNormalizeClass = () => {
        const e = this.modalElement.querySelectorAll("div");
        this.modalElement.classList.add("timepicker-ui-normalize"),
          e.forEach((e) => e.classList.add("timepicker-ui-normalize"));
      }),
      (this._setFlexEndToFooterIfNoKeyboardIcon = () => {
        this._options.enableSwitchIcon ||
          (this.footer.style.justifyContent = "flex-end");
      }),
      (this._eventsBundle = () => {
        var e;
        if (
          (this.setErrorHandler(),
          this.removeErrorHandler(),
          this.openElement.forEach((e) =>
            null == e ? void 0 : e.classList.add("disabled")
          ),
          null === (e = this.input) || void 0 === e || e.blur(),
          this._setScrollbarOrNot(),
          this._setModalTemplate(),
          this._setNormalizeClass(),
          this._removeBackdrop(),
          this._setBgColorToCirleWithHourTips(),
          this._setOnStartCSSClassesIfClockType24h(),
          this._setClassActiveToHourOnOpen(),
          null !== this.clockFace)
        ) {
          if (
            (new m({
              array: d,
              classToAdd: "timepicker-ui-hour-time-12",
              clockFace: this.clockFace,
              tipsWrapper: this.tipsWrapper,
              theme: this._options.theme,
            }).create(),
            "24h" === this._options.clockType)
          ) {
            new m({
              array: p,
              classToAdd: "timepicker-ui-hour-time-24",
              clockFace: this.tipsWrapperFor24h,
              tipsWrapper: this.tipsWrapperFor24h,
              theme: this._options.theme,
              clockType: "24h",
            }).create();
          }
        }
        this._setFlexEndToFooterIfNoKeyboardIcon(),
          setTimeout(() => {
            this._setTheme();
          }, 0),
          this._setAnimationToOpen(),
          this._getInputValueOnOpenAndSet(),
          this._toggleClassActiveToValueTips(this.hour.textContent),
          this._isMobileView ||
            (this._setTransformToCircleWithSwitchesHour(this.hour.textContent),
            this._handleAnimationClock()),
          this._handleMinutesClick(),
          this._handleHourClick(),
          "24h" !== this._options.clockType &&
            (this._handleAmClick(), this._handlePmClick()),
          this._handleMoveHand(),
          this._handleCancelButton(),
          this._handleOkButton(),
          this._handleBackdropClick(),
          this._handleIconChangeView(),
          this._handleClickOnHourMobile();
      }),
      (this._handleOpenOnClick = () =>
        this.openElement.forEach((e) =>
          this._clickTouchEvents.map((i) =>
            null == e
              ? void 0
              : e.addEventListener(i, () => this._eventsBundle())
          )
        )),
      (this._getInputValueOnOpenAndSet = () => {
        var e, i;
        const t = n(this.input, this._options.clockType);
        if (void 0 === t)
          return (
            (this.hour.innerText = "12"),
            (this.minutes.innerText = "00"),
            r(this._element, "show", {
              hour: this.hour.textContent,
              minutes: this.minutes.textContent,
              type:
                null === (e = this.activeTypeMode) || void 0 === e
                  ? void 0
                  : e.dataset.type,
              degreesHours: this._degreesHours,
              degreesMinutes: this._degreesMinutes,
            }),
            void (
              "24h" !== this._options.clockType &&
              this.AM.classList.add("active")
            )
          );
        const { hour: o, minutes: s, type: a } = t;
        (this.hour.innerText = o), (this.minutes.innerText = s);
        const c = document.querySelector(`[data-type="${a}"]`);
        "24h" !== this._options.clockType && c && c.classList.add("active"),
          r(
            this._element,
            "show",
            Object.assign(Object.assign({}, t), {
              type:
                null === (i = this.activeTypeMode) || void 0 === i
                  ? void 0
                  : i.dataset.type,
              degreesHours: this._degreesHours,
              degreesMinutes: this._degreesMinutes,
            })
          );
      }),
      (this._handleCancelButton = () => {
        this._clickTouchEvents.map((e) => {
          this.cancelButton.addEventListener(e, () => {
            var e;
            const i = n(this.input, this._options.clockType);
            r(
              this._element,
              "cancel",
              Object.assign(Object.assign({}, i), {
                hourNotAccepted: this.hour.textContent,
                minutesNotAccepted: this.minutes.textContent,
                type:
                  null === (e = this.activeTypeMode) || void 0 === e
                    ? void 0
                    : e.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              })
            ),
              this.close();
          });
        });
      }),
      (this._handleOkButton = () => {
        this._clickTouchEvents.map((e) => {
          this.okButton.addEventListener(e, () => {
            var e, i;
            const t = this._handleValueAndCheck(this.hour.textContent, "hour"),
              n = this._handleValueAndCheck(
                this.minutes.textContent,
                "minutes"
              );
            !1 !== t && !1 !== n
              ? ((this.input.value = `${this.hour.textContent}:${
                  this.minutes.textContent
                } ${
                  "24h" === this._options.clockType
                    ? ""
                    : null === (e = this.activeTypeMode) || void 0 === e
                    ? void 0
                    : e.dataset.type
                }`.trimEnd()),
                r(this._element, "accept", {
                  hour: this.hour.textContent,
                  minutes: this.minutes.textContent,
                  type:
                    null === (i = this.activeTypeMode) || void 0 === i
                      ? void 0
                      : i.dataset.type,
                  degreesHours: this._degreesHours,
                  degreesMinutes: this._degreesMinutes,
                }),
                this.close())
              : n || this.minutes.classList.add("invalid-value");
          });
        });
      }),
      (this._handleBackdropClick = () => {
        this._clickTouchEvents.map((e) => {
          this.modalElement.addEventListener(e, (e) => {
            var i;
            const o = e.target;
            if (!t(o, "timepicker-ui-modal")) return;
            const s = n(this.input, this._options.clockType);
            r(
              this._element,
              "cancel",
              Object.assign(Object.assign({}, s), {
                hourNotAccepted: this.hour.textContent,
                minutesNotAccepted: this.minutes.textContent,
                type:
                  null === (i = this.activeTypeMode) || void 0 === i
                    ? void 0
                    : i.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              })
            ),
              this.close();
          });
        });
      }),
      (this._setBgColorToCirleWithHourTips = () => {
        const { mobile: e, theme: i } = this._options;
        e ||
          null === this.circle ||
          (this.circle.style.backgroundColor =
            "crane-straight" === i || "crane-radius" === i
              ? c.cranered400
              : c.purple);
      }),
      (this._setBgColorToCircleWithMinutesTips = () => {
        const { theme: e } = this._options;
        this.minutes.textContent &&
          h.includes(this.minutes.textContent) &&
          ((this.circle.style.backgroundColor =
            "crane-straight" === e || "crane-radius" === e
              ? c.cranered400
              : c.purple),
          this.circle.classList.remove("small-circle"));
      }),
      (this._removeBgColorToCirleWithMinutesTips = () => {
        (this.minutes.textContent && h.includes(this.minutes.textContent)) ||
          ((this.circle.style.backgroundColor = ""),
          this.circle.classList.add("small-circle"));
      }),
      (this._setTimepickerClassToElement = () => {
        var e;
        null === (e = this._element) ||
          void 0 === e ||
          e.classList.add("timepicker-ui");
      }),
      (this._setClassActiveToHourOnOpen = () => {
        this._options.mobile ||
          this._isMobileView ||
          this.hour.classList.add("active");
      }),
      (this._setMinutesToClock = (e) => {
        null !== this.clockFace &&
          this._setTransformToCircleWithSwitchesMinutes(e),
          this._removeBgColorToCirleWithMinutesTips(),
          new m({
            array: h,
            classToAdd: "timepicker-ui-minutes-time",
            clockFace: this.clockFace,
            tipsWrapper: this.tipsWrapper,
            theme: this._options.theme,
          }).create(),
          this._toggleClassActiveToValueTips(e),
          "24h" === this._options.clockType &&
            (this.tipsWrapperFor24h.innerHTML = "");
      }),
      (this._setHoursToClock = (e) => {
        null !== this.clockFace &&
          (this._setTransformToCircleWithSwitchesHour(e),
          this._setBgColorToCirleWithHourTips(),
          new m({
            array: d,
            classToAdd: "timepicker-ui-hour-time-12",
            clockFace: this.clockFace,
            tipsWrapper: this.tipsWrapper,
            theme: this._options.theme,
          }).create(),
          "24h" === this._options.clockType &&
            new m({
              array: p,
              classToAdd: "timepicker-ui-hour-time-24",
              clockFace: this.tipsWrapperFor24h,
              tipsWrapper: this.tipsWrapperFor24h,
              theme: this._options.theme,
              clockType: "24h",
            }).create(),
          this._toggleClassActiveToValueTips(e));
      }),
      (this._setTransformToCircleWithSwitchesHour = (e) => {
        const i = Number(e);
        let t = i > 12 ? 30 * i - 360 : 30 * i;
        360 === t && (t = 0),
          t > 360 || (this.clockHand.style.transform = `rotateZ(${t}deg)`);
      }),
      (this._setTransformToCircleWithSwitchesMinutes = (e) => {
        const i = 6 * Number(e);
        i > 360 || (this.clockHand.style.transform = `rotateZ(${i}deg)`);
      }),
      (this._handleAmClick = () => {
        this._clickTouchEvents.map((e) => {
          this.AM.addEventListener(e, (e) => {
            var i;
            e.target.classList.add("active"),
              this.PM.classList.remove("active"),
              r(this._element, "selectamtypemode", {
                hour: this.hour.textContent,
                minutes: this.minutes.textContent,
                type:
                  null === (i = this.activeTypeMode) || void 0 === i
                    ? void 0
                    : i.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              });
          });
        });
      }),
      (this._handlePmClick = () => {
        this._clickTouchEvents.map((e) => {
          this.PM.addEventListener(e, (e) => {
            var i;
            e.target.classList.add("active"),
              this.AM.classList.remove("active"),
              r(this._element, "selectpmtypemode", {
                hour: this.hour.textContent,
                minutes: this.minutes.textContent,
                type:
                  null === (i = this.activeTypeMode) || void 0 === i
                    ? void 0
                    : i.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              });
          });
        });
      }),
      (this._handleAnimationClock = () => {
        this._options.animation &&
          setTimeout(() => {
            this.clockFace.classList.add("timepicker-ui-clock-animation"),
              setTimeout(() => {
                this.clockFace.classList.remove(
                  "timepicker-ui-clock-animation"
                );
              }, 600);
          }, 150);
      }),
      (this._handleAnimationSwitchTipsMode = () => {
        this.clockHand.classList.add("timepicker-ui-tips-animation"),
          setTimeout(() => {
            var e;
            null === (e = this.clockHand) ||
              void 0 === e ||
              e.classList.remove("timepicker-ui-tips-animation");
          }, 401);
      }),
      (this._handleHourClick = () => {
        this._clickTouchEvents.map((e) => {
          this.hour.addEventListener(e, (e) => {
            var i, t;
            const n = e.target;
            null !== this.clockFace && this._handleAnimationSwitchTipsMode(),
              "24h" === this._options.clockType &&
                ((Number(n.textContent) > 12 || "00" === n.textContent) &&
                  this.setCircleClockClasses24h(),
                this._options.mobile ||
                  null === (i = this.tipsWrapperFor24h) ||
                  void 0 === i ||
                  i.classList.remove(
                    "timepicker-ui-tips-wrapper-24h-disabled"
                  )),
              this._setHoursToClock(n.textContent),
              n.classList.add("active"),
              this.minutes.classList.remove("active"),
              r(this._element, "selecthourmode", {
                hour: this.hour.textContent,
                minutes: this.minutes.textContent,
                type:
                  null === (t = this.activeTypeMode) || void 0 === t
                    ? void 0
                    : t.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              }),
              null !== this.clockFace &&
                this.circle.classList.remove("small-circle");
          });
        });
      }),
      (this._handleMinutesClick = () => {
        this._clickTouchEvents.map((e) => {
          this.minutes.addEventListener(e, (e) => {
            var i, t;
            const n = e.target;
            null !== this.clockFace &&
              (this._handleAnimationSwitchTipsMode(),
              this._setMinutesToClock(n.textContent)),
              "24h" === this._options.clockType &&
                (this.removeCircleClockClasses24h(),
                this._options.mobile ||
                  null === (i = this.tipsWrapperFor24h) ||
                  void 0 === i ||
                  i.classList.add("timepicker-ui-tips-wrapper-24h-disabled")),
              n.classList.add("active"),
              this.hour.classList.remove("active"),
              r(this._element, "selectminutemode", {
                hour: this.hour.textContent,
                minutes: this.minutes.textContent,
                type:
                  null === (t = this.activeTypeMode) || void 0 === t
                    ? void 0
                    : t.dataset.type,
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
              });
          });
        });
      }),
      (this._handleEventToMoveHand = (e) => {
        var a, c;
        this._options.preventDefault && e.preventDefault();
        const { target: l, type: u, touches: p } = e,
          d = l,
          {
            incrementMinutes: h,
            incrementHours: m,
            switchToMinutesAfterSelectHour: k,
          } = this._options;
        if (!i(e, this.clockFace)) return;
        const b = i(e, this.clockFace),
          v = this.clockFace.offsetWidth / 2;
        let g = b && Math.atan2(b.y - v, b.x - v);
        if (o()) {
          const t = i(e, this.clockFace, !0);
          if (!t) return;
          g = Math.atan2(t.y - v, t.x - v);
        }
        if ("mouseup" === u || "touchend" === u)
          return (
            (this._isTouchMouseMove = !1),
            void (
              k &&
              (t(d, "timepicker-ui-value-tips") ||
                t(d, "timepicker-ui-value-tips-24h") ||
                t(d, "timepicker-ui-tips-wrapper")) &&
              this.minutes.click()
            )
          );
        if (
          (("mousedown" !== u &&
            "mousemove" !== u &&
            "touchmove" !== u &&
            "touchstart" !== u) ||
            ("mousedown" !== u && "touchstart" !== u && "touchmove" !== u) ||
            (t(d, "timepicker-ui-clock-face") ||
            t(d, "timepicker-ui-circle-hand") ||
            t(d, "timepicker-ui-hour-time-12") ||
            t(d, "timepicker-ui-minutes-time") ||
            t(d, "timepicker-ui-clock-hand") ||
            t(d, "timepicker-ui-value-tips") ||
            t(d, "timepicker-ui-value-tips-24h") ||
            t(d, "timepicker-ui-tips-wrapper") ||
            t(d, "timepicker-ui-tips-wrapper-24h")
              ? (this._isTouchMouseMove = !0)
              : (this._isTouchMouseMove = !1)),
          !this._isTouchMouseMove)
        )
          return;
        if (null !== this.minutesTips) {
          this.minutes.classList.add("active");
          let e,
            i = g && s(Math.trunc((180 * g) / Math.PI) + 90, h, 6);
          if (void 0 === i) return;
          i < 0
            ? ((e = Math.round(360 + i / 6) % 60),
              (i = 360 + 6 * Math.round(i / 6)))
            : ((e = Math.round(i / 6) % 60), (i = 6 * Math.round(i / 6))),
            (this.minutes.innerText = e >= 10 ? `${e}` : `0${e}`),
            (this.clockHand.style.transform = `rotateZ(${i}deg)`),
            (this._degreesMinutes = i),
            this._toggleClassActiveToValueTips(this.minutes.textContent),
            this._removeBgColorToCirleWithMinutesTips(),
            this._setBgColorToCircleWithMinutesTips(),
            r(
              this._element,
              "update",
              Object.assign(
                Object.assign({}, n(this.input, this._options.clockType)),
                {
                  degreesHours: this._degreesHours,
                  degreesMinutes: this._degreesMinutes,
                  eventType: u,
                  type:
                    null === (a = this.activeTypeMode) || void 0 === a
                      ? void 0
                      : a.dataset.type,
                }
              )
            );
        }
        const y = p ? p[0] : void 0,
          f = p && y ? document.elementFromPoint(y.clientX, y.clientY) : null;
        if (null !== this.hourTips) {
          if (
            (this.hour.classList.add("active"),
            !t(f || d, "timepicker-ui-value-tips-24h") ||
              t(f || d, "timepicker-ui-value-tips") ||
              t(f || d, "timepicker-ui-tips-wrapper"))
          ) {
            this.removeCircleClockClasses24h();
            let e,
              i = g && s(Math.trunc((180 * g) / Math.PI) + 90, m, 30);
            if (
              ((this.clockHand.style.transform = `rotateZ(${i}deg)`),
              (this._degreesHours = i),
              void 0 === i)
            )
              return;
            i < 0
              ? ((e = Math.round(360 + i / 30) % 12), (i = 360 + i))
              : ((e = Math.round(i / 30) % 12),
                (0 === e || e > 12) && (e = 12)),
              (this.hour.innerText = e > 9 ? `${e}` : `0${e}`),
              this._toggleClassActiveToValueTips(e);
          }
          if (
            t(f || d, "timepicker-ui-value-tips-24h") ||
            t(f || d, "timepicker-ui-tips-wrapper-24h")
          ) {
            this.setCircleClockClasses24h();
            let e,
              i = g && s(Math.trunc((180 * g) / Math.PI) + 90, m, 30);
            if (
              ((this.clockHand.style.transform = `rotateZ(${i}deg)`),
              (this._degreesHours = i),
              void 0 === i)
            )
              return;
            i < 0
              ? ((e = Math.round(360 + i / 30) % 24), (i = 360 + i))
              : ((e = Math.round(i / 30) + 12), 12 === e && (e = "00")),
              (this.hour.innerText = `${e}`),
              this._toggleClassActiveToValueTips(e);
          }
          r(
            this._element,
            "update",
            Object.assign(
              Object.assign({}, n(this.input, this._options.clockType)),
              {
                degreesHours: this._degreesHours,
                degreesMinutes: this._degreesMinutes,
                eventType: u,
                type:
                  null === (c = this.activeTypeMode) || void 0 === c
                    ? void 0
                    : c.dataset.type,
              }
            )
          );
        }
      }),
      (this._toggleClassActiveToValueTips = (e) => {
        const i = this.allValueTips.find(
          (i) => Number(i.innerText) === Number(e)
        );
        this.allValueTips.map((e) => e.classList.remove("active")),
          void 0 !== i && i.classList.add("active");
      }),
      (this._handleMoveHand = () => {
        this._options.mobile ||
          this._isMobileView ||
          u.split(" ").map((e) => {
            "touchstart" === e || "touchmove" === e || "touchend" === e
              ? document.addEventListener(e, this.mutliEventsMoveHandler, {
                  passive: !1,
                })
              : document.addEventListener(e, this.mutliEventsMoveHandler, !1);
          });
      }),
      (this._setModalTemplate = () => {
        const { appendModalSelector: e } = this._options;
        if ("" !== e && e) {
          const i =
            null === document || void 0 === document
              ? void 0
              : document.querySelector(e);
          null == i || i.insertAdjacentHTML("beforeend", this.modalTemplate);
        } else document.body.insertAdjacentHTML("afterend", this.modalTemplate);
      }),
      (this._setScrollbarOrNot = () => {
        const { enableScrollbar: e } = this._options;
        e
          ? setTimeout(() => {
              (document.body.style.overflowY = ""),
                (document.body.style.paddingRight = "");
            }, 400)
          : ((document.body.style.paddingRight = `${(() => {
              const e = document.createElement("div");
              (e.className = "timepicker-ui-measure"),
                document.body.appendChild(e);
              const i = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), i;
            })()}px`),
            (document.body.style.overflowY = "hidden"));
      }),
      (this._setAnimationToOpen = () => {
        this.modalElement.classList.add("opacity"),
          this._options.animation
            ? setTimeout(() => {
                this.modalElement.classList.add("show");
              }, 150)
            : this.modalElement.classList.add("show");
      }),
      (this._removeAnimationToClose = () => {
        this.modalElement &&
          (this._options.animation
            ? setTimeout(() => {
                var e;
                null === (e = this.modalElement) ||
                  void 0 === e ||
                  e.classList.remove("show");
              }, 150)
            : this.modalElement.classList.remove("show"));
      }),
      (this.handlerViewChange = () =>
        e(this, void 0, void 0, function* () {
          var e, i;
          if (t(this.modalElement, "mobile")) {
            const e = this._handleValueAndCheck(this.hour.textContent, "hour"),
              t = this._handleValueAndCheck(
                this.minutes.textContent,
                "minutes"
              );
            if (!1 === e || !1 === t)
              return (
                t || this.minutes.classList.add("invalid-value"),
                void (e || this.hour.classList.add("invalid-value"))
              );
            !0 === e &&
              !0 === t &&
              (t && this.minutes.classList.remove("invalid-value"),
              e && this.hour.classList.remove("invalid-value")),
              this.close(),
              (this._isMobileView = !1),
              (this._options.mobile = !1);
            const n = this.hour.textContent,
              r = this.minutes.textContent,
              o =
                null === (i = this.activeTypeMode) || void 0 === i
                  ? void 0
                  : i.dataset.type;
            setTimeout(() => {
              this._eventsBundle(),
                (Number(n) > 12 || 0 === Number(n)) &&
                  this.setCircleClockClasses24h(),
                (this._isMobileView = !0),
                (this._options.mobile = !0),
                (this.hour.textContent = n),
                (this.minutes.textContent = r);
              const e = [
                ...document.querySelectorAll(".timepicker-ui-type-mode"),
              ];
              null == e || e.map((e) => e.classList.remove("active"));
              const i = e.find((e) => e.textContent === o);
              null == i || i.classList.add("active"),
                this._setTransformToCircleWithSwitchesHour(
                  this.hour.textContent
                ),
                this._toggleClassActiveToValueTips(this.hour.textContent);
            }, 300);
          } else {
            this.close(),
              (this._isMobileView = !0),
              (this._options.mobile = !0);
            const i = this.hour.textContent,
              t = this.minutes.textContent,
              n =
                null === (e = this.activeTypeMode) || void 0 === e
                  ? void 0
                  : e.dataset.type;
            setTimeout(() => {
              this._eventsBundle(),
                (this._isMobileView = !1),
                (this._options.mobile = !1),
                (this.hour.textContent = i),
                (this.minutes.textContent = t);
              const e = [
                ...document.querySelectorAll(".timepicker-ui-type-mode"),
              ];
              null == e || e.map((e) => e.classList.remove("active"));
              const r = e.find((e) => e.textContent === n);
              null == r || r.classList.add("active");
            }, 300);
          }
        })),
      (this._handleIconChangeView = () =>
        e(this, void 0, void 0, function* () {
          this._options.enableSwitchIcon &&
            (o()
              ? this.keyboardClockIcon.addEventListener(
                  "touchstart",
                  this.handlerViewChange
                )
              : this.keyboardClockIcon.addEventListener(
                  "click",
                  this.handlerViewChange
                ));
        })),
      (this._handlerClickHourMinutes = (i) =>
        e(this, void 0, void 0, function* () {
          if (!this.modalElement) return;
          const e = i.target,
            n = this.modalElement.querySelectorAll("[contenteditable]"),
            r = this._handleValueAndCheck(this.hour.textContent, "hour"),
            o = this._handleValueAndCheck(this.minutes.textContent, "minutes");
          if (this._options.editable)
            if (t(e, "timepicker-ui-hour") || t(e, "timepicker-ui-minutes"))
              (!1 !== r && !1 !== o) ||
                (o || this.minutes.classList.add("invalid-value"),
                r || this.hour.classList.add("invalid-value")),
                (e.contentEditable = "true");
            else {
              Array.from(n).map((e) => {
                const i = e;
                (i.contentEditable = "false"), i.classList.remove("active");
              }),
                !0 === r &&
                  !0 === o &&
                  (o && this.minutes.classList.remove("invalid-value"),
                  r && this.hour.classList.remove("invalid-value")),
                this.minutesTips
                  ? this._setMinutesToClock(this.minutes.textContent)
                  : this.hourTips &&
                    this._setHoursToClock(this.hour.textContent);
            }
        })),
      (this._handleClickOnHourMobile = () => {
        document.addEventListener("mousedown", this.eventsClickMobileHandler),
          document.addEventListener(
            "touchstart",
            this.eventsClickMobileHandler
          );
      }),
      (this._element = a),
      (this._options = ((e, i) => Object.assign(Object.assign({}, i), e))(
        Object.assign(
          Object.assign({}, k),
          ((e) => {
            if (!e) return;
            const i = JSON.parse(JSON.stringify(e)),
              t = Object.keys(i);
            return Object.values(i).reduce(
              (e, i, n) => (
                Number(i)
                  ? (e[t[n]] = Number(i))
                  : (e[t[n]] =
                      "true" === i || "false" === i ? JSON.parse(i) : i),
                e
              ),
              {}
            );
          })(null === (b = this._element) || void 0 === b ? void 0 : b.dataset)
        ),
        l
      )),
      (this._isTouchMouseMove = !1),
      (this._degreesHours =
        30 *
        Number(
          n(
            null === (v = this._element) || void 0 === v
              ? void 0
              : v.querySelector("input"),
            this._options.clockType
          ).hour
        )),
      (this._degreesMinutes =
        6 *
        Number(
          n(
            null === (g = this._element) || void 0 === g
              ? void 0
              : g.querySelector("input"),
            this._options.clockType
          ).minutes
        )),
      (this._isMobileView = !1),
      (this.mutliEventsMove = (e) => this._handleEventToMoveHand(e)),
      (this.mutliEventsMoveHandler = this.mutliEventsMove.bind(this)),
      (this.eventsClickMobile = (e) => this._handlerClickHourMinutes(e)),
      (this.eventsClickMobileHandler = this.eventsClickMobile.bind(this)),
      this._options.mobile &&
        ((this._isMobileView = !0), (this._options.editable = !0)),
      (this._clickTouchEvents = ["click", "touchstart"]),
      (this.isMinutesClick = !0);
  }
  get modalTemplate() {
    return this._options.mobile && this._isMobileView
      ? ((e) => {
          const {
            mobileTimeLabel: i,
            amLabel: t,
            pmLabel: n,
            cancelLabel: r,
            okLabel: o,
            iconTemplateMobile: s,
            minuteMobileLabel: a,
            hourMobileLabel: c,
            enableSwitchIcon: l,
            animation: u,
            clockType: p,
          } = e;
          return `\n  <div class="timepicker-ui-modal normalize mobile" role="dialog" style='transition:${
            u ? "opacity 0.15s linear" : "none"
          }'>\n    <div class="timepicker-ui-wrapper mobile">\n      <div class="timepicker-ui-header mobile">\n        <div class="timepicker-ui-select-time mobile">${i}</div>\n        <div class="timepicker-ui-wrapper-time mobile">\n          <div class="timepicker-ui-hour mobile" contenteditable="false">12</div>  \n          <div class="timepicker-ui-hour-text mobile">${c}</div>\n          <div class="timepicker-ui-dots mobile">:</div>  \n          <div class="timepicker-ui-minute-text mobile">${a}</div>\n          <div class="timepicker-ui-minutes mobile" contenteditable="false">00</div>   \n        </div>\n  ${
            "24h" !== p
              ? `<div class="timepicker-ui-wrapper-type-time mobile">\n          <div class="timepicker-ui-type-mode timepicker-ui-am mobile" data-type="AM">${t}</div>    \n          <div class="timepicker-ui-type-mode timepicker-ui-pm mobile" data-type="PM">${n}</div>    \n        </div>`
              : ""
          }\n      </div>\n      <div class="timepicker-ui-footer mobile" data-view="mobile">\n      ${
            l
              ? `\n      <div class="timepicker-ui-keyboard-icon-wrapper mobile" role="button" aria-pressed="false" data-view="desktop">\n      ${s}\n      </div>`
              : ""
          }\n      <div class="timepicker-ui-wrapper-btn mobile">\n        <div class="timepicker-ui-cancel-btn mobile" role="button" aria-pressed="false">${r}</div>\n        <div class="timepicker-ui-ok-btn mobile" role="button" aria-pressed="false">${o}</div>\n      </div>\n      </div>\n    </div>  \n  </div>`;
        })(this._options)
      : ((e) => {
          const {
            iconTemplate: i,
            timeLabel: t,
            amLabel: n,
            pmLabel: r,
            cancelLabel: o,
            okLabel: s,
            enableSwitchIcon: a,
            animation: c,
            editable: l,
            clockType: u,
          } = e;
          return `\n  <div class="timepicker-ui-modal normalize" role="dialog" style='transition:${
            c ? "opacity 0.15s linear" : "none"
          }'>\n    <div class="timepicker-ui-wrapper ">\n      <div class="timepicker-ui-header">\n        <div class="timepicker-ui-select-time">${t}</div>\n        <div class="timepicker-ui-wrapper-time ${
            "24h" === u ? "timepicker-ui-wrapper-time-24h" : ""
          }">\n          <div class="timepicker-ui-hour" role="button" contenteditable="${!!l}">05</div>  \n          <div class="timepicker-ui-dots">:</div>    \n          <div class="timepicker-ui-minutes" role="button" contenteditable="${!!l}">00</div>   \n        </div>\n      ${
            "24h" !== u
              ? `\n      <div class="timepicker-ui-wrapper-type-time">\n        <div class="timepicker-ui-type-mode timepicker-ui-am" role="button" data-type="AM">${n}</div>    \n        <div class="timepicker-ui-type-mode timepicker-ui-pm" role="button" data-type="PM">${r}</div>    \n      </div>\n      `
              : ""
          }\n      </div>\n      <div class="timepicker-ui-wrapper-landspace">\n        <div class="timepicker-ui-body">\n          <div class="timepicker-ui-clock-face">\n            <div class="timepicker-ui-dot"></div>\n            <div class="timepicker-ui-clock-hand">\n              <div class="timepicker-ui-circle-hand"></div>\n            </div>\n            <div class="timepicker-ui-tips-wrapper"></div>\n            ${
            "24h" === u
              ? '<div class="timepicker-ui-tips-wrapper-24h"></div>'
              : ""
          }\n          </div>\n        </div>\n        <div class="timepicker-ui-footer">\n        ${
            a
              ? `\n      <div class="timepicker-ui-keyboard-icon-wrapper" role="button" aria-pressed="false" data-view="desktop">\n        ${i}\n      </div>`
              : ""
          }\n        <div class="timepicker-ui-wrapper-btn">\n          <div class="timepicker-ui-cancel-btn" role="button" aria-pressed="false">${o}</div>\n          <div class="timepicker-ui-ok-btn" role="button" aria-pressed="false">${s}</div>\n        </div>\n        </div>\n      </div>\n    </div>  \n  </div>`;
        })(this._options);
  }
  get modalElement() {
    return document.querySelector(".timepicker-ui-modal");
  }
  get clockFace() {
    return document.querySelector(".timepicker-ui-clock-face");
  }
  get input() {
    var e;
    return null === (e = this._element) || void 0 === e
      ? void 0
      : e.querySelector("input");
  }
  get clockHand() {
    return document.querySelector(".timepicker-ui-clock-hand");
  }
  get circle() {
    return document.querySelector(".timepicker-ui-circle-hand");
  }
  get tipsWrapper() {
    return document.querySelector(".timepicker-ui-tips-wrapper");
  }
  get tipsWrapperFor24h() {
    return document.querySelector(".timepicker-ui-tips-wrapper-24h");
  }
  get minutes() {
    return document.querySelector(".timepicker-ui-minutes");
  }
  get hour() {
    return document.querySelector(".timepicker-ui-hour");
  }
  get AM() {
    return document.querySelector(".timepicker-ui-am");
  }
  get PM() {
    return document.querySelector(".timepicker-ui-pm");
  }
  get minutesTips() {
    return document.querySelector(".timepicker-ui-minutes-time");
  }
  get hourTips() {
    return document.querySelector(".timepicker-ui-hour-time-12");
  }
  get allValueTips() {
    return [
      ...document.querySelectorAll(".timepicker-ui-value-tips"),
      ...document.querySelectorAll(".timepicker-ui-value-tips-24h"),
    ];
  }
  get openElementData() {
    var e;
    const i =
      null === (e = this._element) || void 0 === e
        ? void 0
        : e.querySelectorAll("[data-open]");
    if ((null == i ? void 0 : i.length) > 0) {
      const e = [];
      return (
        i.forEach(({ dataset: i }) => {
          var t;
          return e.push(null !== (t = i.open) && void 0 !== t ? t : "");
        }),
        [...new Set(e)]
      );
    }
    return null;
  }
  get openElement() {
    var e, i;
    return null === this.openElementData
      ? (null === (e = this.input) ||
          void 0 === e ||
          e.setAttribute("data-open", "timepicker-ui-input"),
        [this.input])
      : null !==
          (i = this.openElementData.map((e) => {
            var i;
            return null === (i = this._element) || void 0 === i
              ? void 0
              : i.querySelectorAll(`[data-open='${e}']`);
          })[0]) && void 0 !== i
      ? i
      : "";
  }
  get cancelButton() {
    return document.querySelector(".timepicker-ui-cancel-btn");
  }
  get okButton() {
    return document.querySelector(".timepicker-ui-ok-btn");
  }
  get activeTypeMode() {
    return document.querySelector(".timepicker-ui-type-mode.active");
  }
  get keyboardClockIcon() {
    return document.querySelector(".timepicker-ui-keyboard-icon-wrapper");
  }
  get footer() {
    return document.querySelector(".timepicker-ui-footer");
  }
  _checkDisableOptions() {
    const { disabledTime: e } = this._options;
    e && "string" == typeof e && console.log(e);
  }
  removeCircleClockClasses24h() {
    var e, i;
    null === (e = this.circle) ||
      void 0 === e ||
      e.classList.remove("timepicker-ui-circle-hand-24h"),
      null === (i = this.clockHand) ||
        void 0 === i ||
        i.classList.remove("timepicker-ui-clock-hand-24h");
  }
  setCircleClockClasses24h() {
    this.circle.classList.add("timepicker-ui-circle-hand-24h"),
      this.clockHand.classList.add("timepicker-ui-clock-hand-24h");
  }
  setErrorHandler() {
    var e, i, t, o;
    const {
      error: s,
      currentHour: a,
      currentMin: c,
      currentType: l,
      currentLength: u,
    } = n(this.input, this._options.clockType);
    if (s) {
      const n = document.createElement("div");
      throw (
        (null === (e = this.input) ||
          void 0 === e ||
          e.classList.add("timepicker-ui-invalid-format"),
        n.classList.add("timepicker-ui-invalid-text"),
        (n.innerHTML = "<b>Invalid Time Format</b>"),
        (null === (i = this.input) || void 0 === i
          ? void 0
          : i.parentElement) &&
          null ===
            (null === (t = this.input) || void 0 === t
              ? void 0
              : t.parentElement.querySelector(".timepicker-ui-invalid-text")) &&
          (null === (o = this.input) || void 0 === o || o.after(n)),
        r(this._element, "geterror", {
          error: s,
          currentHour: a,
          currentMin: c,
          currentType: l,
          currentLength: u,
        }),
        new Error(`Invalid Time Format: ${s}`))
      );
    }
  }
  removeErrorHandler() {
    var e, i;
    null === (e = this.input) ||
      void 0 === e ||
      e.classList.remove("timepicker-ui-invalid-format");
    const t =
      null === (i = this._element) || void 0 === i
        ? void 0
        : i.querySelector(".timepicker-ui-invalid-text");
    t && t.remove();
  }
  _setOnStartCSSClassesIfClockType24h() {
    if ("24h" === this._options.clockType) {
      const { hour: e } = n(this.input, this._options.clockType);
      (Number(e) > 12 || 0 === Number(e)) && this.setCircleClockClasses24h();
    }
  }
  _handleValueAndCheck(e, i) {
    const t = Number(e);
    return "hour" === i
      ? "24h" !== this._options.clockType
        ? t > 0 && t <= 12
        : t >= 0 && t <= 23
      : "minutes" === i
      ? t >= 0 && t <= 59
      : void 0;
  }
};
