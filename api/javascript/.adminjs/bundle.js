(function (React, styledComponents, designSystem, adminjs) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var Dashboard = function Dashboard() {
      var _useTranslation2 = adminjs.useTranslation();
        _useTranslation2.translateMessage;
        _useTranslation2.translateButton;
      return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, /*#__PURE__*/React__default["default"].createElement("section", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "32px"
        }
      }, /*#__PURE__*/React__default["default"].createElement("p", {
        style: {
          // fontSize: "3rem",
        }
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        style: {
          fontSize: "3rem",
          fontWeight: "700"
        }
      }, "OneStop"), /*#__PURE__*/React__default["default"].createElement("span", {
        style: {
          fontSize: "3rem",
          fontWeight: "normal",
          color: "#282828"
        }
      }, " ", "Admin"))));
    };

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React, styled, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbl9wYW5lbC91aS9wYWdlcy9kYXNoYm9hcmQuanN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICAgIEJveCxcbiAgICBIMixcbiAgICBINSxcbiAgICBINCxcbiAgICBUZXh0LFxuICAgIElsbHVzdHJhdGlvbixcbiAgICBJbGx1c3RyYXRpb25Qcm9wcyxcbiAgICBCdXR0b24sXG59IGZyb20gXCJAYWRtaW5qcy9kZXNpZ24tc3lzdGVtXCI7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcImFkbWluanNcIjtcblxuY29uc3QgcGFnZUhlYWRlckhlaWdodCA9IDI4NDtcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWSA9IDc0O1xuY29uc3QgcGFnZUhlYWRlclBhZGRpbmdYID0gMjUwO1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IG10PVwiMjBweFwiIHB4PVwiMjBweFwiPlxuICAgICAgICAgICAgPEgyPldlbGNvbWUsIEFkbWluPC9IMj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOlwiMzJweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udFNpemU6IFwiM3JlbVwiLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6XCI3MDBcIlxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBPbmVTdG9wIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0Olwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcIiMyODI4MjhcIlxuICAgICAgICAgICAgICAgICAgICB9fT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIEFkbWluXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2FkbWluX3BhbmVsL3VpL3BhZ2VzL2Rhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsIl91c2VUcmFuc2xhdGlvbjIiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0ZU1lc3NhZ2UiLCJ0cmFuc2xhdGVCdXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQTRCTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsR0FBUztJQUMzQixFQUFBLElBQUFDLGdCQUFBLEdBQThDQyxzQkFBYyxFQUFFLENBQUE7UUFBdENELGdCQUFBLENBQWhCRSxnQkFBZ0IsQ0FBQTtRQUFpQkYsZ0JBQUEsQ0FBZkcsZ0JBQWU7TUFDekMsb0JBQ0lDLHlCQUFBLENBQUFDLGFBQUEsQ0FBQ0MsZ0JBQUcsRUFDSUYsSUFBQUEsZUFBQUEseUJBQUEsQ0FBQUMsYUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBRSxJQUFBQSxLQUFLLEVBQUU7SUFDSEMsTUFBQUEsT0FBTyxFQUFDLE1BQU07SUFDZEMsTUFBQUEsY0FBYyxFQUFDLFFBQVE7SUFDdkJDLE1BQUFBLFVBQVUsRUFBQyxRQUFRO0lBQ25CQyxNQUFBQSxTQUFTLEVBQUMsTUFBQTtJQUNkLEtBQUE7T0FDQVAsZUFBQUEseUJBQUEsQ0FBQUMsYUFBQSxDQUFBLEdBQUEsRUFBQTtJQUFHRSxJQUFBQSxLQUFLLEVBQUU7SUFDTjtJQUFBLEtBQUE7T0FFQUgsZUFBQUEseUJBQUEsQ0FBQUMsYUFBQSxDQUFBLE1BQUEsRUFBQTtJQUFNRSxJQUFBQSxLQUFLLEVBQUU7SUFDYkssTUFBQUEsUUFBUSxFQUFFLE1BQU07SUFDaEJDLE1BQUFBLFVBQVUsRUFBQyxLQUFBO0lBQ2YsS0FBQTtJQUFFLEdBQUEsRUFBQyxTQUVPLENBQUMsZUFDUFQseUJBQUEsQ0FBQUMsYUFBQSxDQUFBLE1BQUEsRUFBQTtJQUFNRSxJQUFBQSxLQUFLLEVBQUU7SUFDVEssTUFBQUEsUUFBUSxFQUFFLE1BQU07SUFDaEJDLE1BQUFBLFVBQVUsRUFBQyxRQUFRO0lBQ25CQyxNQUFBQSxLQUFLLEVBQUMsU0FBQTtJQUNWLEtBQUE7SUFBRSxHQUFBLEVBQUUsR0FBRyxFQUFDLE9BRUYsQ0FDSCxDQUNFLENBRVosQ0FBQyxDQUFBO0lBRWQsQ0FBQzs7SUM1RERDLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtJQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNqQixTQUFTLEdBQUdBLFNBQVM7Ozs7OzsifQ==
