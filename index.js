(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : factory((global["dollar-street-icons"] = {}));
})(this, function(exports) {
  "use strict";

  var prefix = "ds";
  var dsArrowRight = {
    prefix: "ds",
    iconName: "arrow-right",
    icon: [
      16,
      15,
      [],
      "e001",
      "M9.28,0.3C8.89-0.09,8.26-0.1,7.86,0.28C7.86,0.29,7.85,0.3,7.85,0.3c-0.4,0.4-0.4,1.04,0,1.44l4.71,4.74H1.02C0.45,6.48,0,6.94,0,7.51c0,0.56,0.46,1.01,1.02,1.02h11.54l-4.71,4.73c-0.4,0.4-0.4,1.04,0,1.44c0.38,0.39,1,0.41,1.39,0.03c0.01-0.01,0.02-0.02,0.03-0.03l6.43-6.47c0.4-0.4,0.41-1.05,0.01-1.45L9.28,0.3z"
    ]
  };
  var dsBike = {
    prefix: "ds",
    iconName: "bike",
    icon: [
      87.5,
      53,
      [],
      "e001",
      "M51.2,0h4.2c3.6,0,6.7,1.7,8,5.6l4.5,13.2c0.6-0.1,1.6-0.2,2.4-0.2c9.5,0,17.2,7.7,17.2,17.2c0,9.6-7.7,17.2-17.2,17.2S53,45.3,53,35.8c0-7,4.3-12.8,9.3-15.3L61.6,18l-15,17.6c-1.9,2.1-3.5,3-5.9,3h-6.3C32.9,46.8,26.2,53,17.3,53C7.7,53,0,45.4,0,35.8s7.7-17.3,17.3-17.3c2,0,3.9,0.3,5.4,0.8l4.9-9l-1-2.8h-3c-1.4,0-2.5-1.2-2.5-2.5c0-1.4,1.2-2.5,2.5-2.5h12.3c1.4,0,2.5,1.2,2.5,2.5c0,1.4-1.2,2.5-2.5,2.5h-3.7l0.4,1.4h25.9L58,7.6c-0.5-1.2-1.5-1.7-2.5-1.7h-4.2c-1.7,0-2.9-1.3-2.9-2.9C48.2,1.3,49.5,0,51.2,0 M17.3,47.7c5.6,0,10.3-3.9,11.6-9.2H17.2c-1.6,0-2.8-1.3-2.8-2.8c0-0.5,0.2-1.1,0.5-1.6l5.5-10c-1.1-0.3-2.1-0.4-3-0.4c-6.6,0-12,5.4-12,12C5.3,42.4,10.6,47.7,17.3,47.7 M21.3,32.8h7.5c-0.7-2.8-2.3-5.1-4.2-6.5L21.3,32.8z M35.4,32.8l-5.6-16.4l-2.7,5c4.2,3,6.3,6.6,7.2,11.4H35.4z M41,32.8c0.7,0,1.2-0.6,1.8-1.3l15-17.3H34.5L41,32.8z M63.9,25.5c-3.4,2.2-5.7,6.1-5.7,10.2c0,6.6,5.4,12,12,12c6.5,0,12-5.4,12-12s-5.5-12-12-12l-1,0.1l3.5,10.4c0.1,0.3,0.3,0.8,0.3,1.5c0,1.6-1.3,2.8-2.8,2.8c-1.7,0-2.4-0.9-2.9-2.2L63.9,25.5z"
    ]
  };
  var dsCCCircle = {
    prefix: "ds",
    iconName: "cc-circle",
    icon: [
      66,
      66,
      [],
      "e001",
      "M33,66C14.8,66,0,51.2,0,33S14.8,0,33,0s33,14.8,33,33S51.2,66,33,66z M33,6C18.11,6,6,18.11,6,33s12.11,27,27,27s27-12.11,27-27S47.89,6,33,6z M31.99,29.72l-4.33,0.78c-0.15-0.86-0.48-1.52-0.99-1.95s-1.19-0.66-2.01-0.66c-1.09,0-1.97,0.38-2.62,1.13c-0.65,0.76-0.98,2.02-0.98,3.79c0,1.97,0.33,3.36,0.99,4.17c0.66,0.81,1.55,1.22,2.66,1.22c0.83,0,1.52-0.24,2.05-0.71c0.53-0.47,0.91-1.29,1.12-2.45l4.31,0.73c-0.45,1.98-1.31,3.47-2.58,4.48c-1.27,1.01-2.97,1.52-5.11,1.52c-2.43,0-4.36-0.77-5.8-2.3c-1.44-1.53-2.16-3.65-2.16-6.36c0-2.74,0.72-4.87,2.17-6.4c1.45-1.53,3.41-2.29,5.88-2.29c2.02,0,3.63,0.44,4.82,1.3C30.62,26.61,31.47,27.94,31.99,29.72z M49.79,29.72l-4.33,0.78c-0.15-0.86-0.48-1.52-0.99-1.95s-1.19-0.66-2.01-0.66c-1.09,0-1.97,0.38-2.62,1.13c-0.65,0.76-0.98,2.02-0.98,3.79c0,1.97,0.33,3.36,0.99,4.17c0.66,0.81,1.55,1.22,2.66,1.22c0.83,0,1.52-0.24,2.05-0.71c0.53-0.47,0.91-1.29,1.12-2.45l4.31,0.73c-0.45,1.98-1.31,3.47-2.58,4.48c-1.27,1.01-2.97,1.52-5.11,1.52c-2.43,0-4.36-0.77-5.8-2.3c-1.44-1.53-2.16-3.65-2.16-6.36c0-2.74,0.72-4.87,2.17-6.4c1.45-1.53,3.41-2.29,5.88-2.29c2.02,0,3.63,0.44,4.82,1.3C48.41,26.61,49.27,27.94,49.79,29.72z"
    ]
  };
  var dsCheckCircle = {
    prefix: "ds",
    iconName: "check-circle",
    icon: [
      24,
      24,
      [],
      "e001",
      "M7.06,11.29c-0.34-0.32-0.88-0.31-1.2,0.03c-0.31,0.33-0.31,0.84,0,1.17l3.91,3.91c0.16,0.16,0.38,0.25,0.6,0.24h0.05c0.24-0.02,0.46-0.13,0.62-0.31l9.79-11.71c0.3-0.36,0.26-0.9-0.11-1.2c-0.36-0.3-0.9-0.26-1.2,0.11l-9.2,11.01L7.06,11.29z M18.36,1.83C12.74-1.69,5.34,0.02,1.83,5.64c-3.51,5.62-1.81,13.02,3.81,16.54c5.62,3.51,13.02,1.81,16.54-3.81c2.44-3.9,2.43-8.84-0.01-12.74c-0.25-0.39-0.77-0.52-1.16-0.27s-0.52,0.77-0.27,1.16l0,0c2.59,4.06,1.99,9.38-1.44,12.77C15.27,23.3,8.74,23.3,4.72,19.27C0.7,15.25,0.7,8.72,4.73,4.7c3.39-3.39,8.68-3.99,12.75-1.45c0.39,0.25,0.91,0.13,1.16-0.27C18.88,2.59,18.76,2.07,18.36,1.83L18.36,1.83L18.36,1.83z"
    ]
  };
  var dsChevronRight = {
    prefix: "ds",
    iconName: "chevron-right",
    icon: [
      14,
      26,
      [],
      "e001",
      "M1.57,0.27c-0.36-0.36-0.94-0.36-1.31,0c-0.36,0.36-0.36,0.94,0,1.3c0,0,0,0,0,0L11.75,13L0.27,24.42c-0.35,0.37-0.34,0.95,0.03,1.3c0.36,0.34,0.92,0.34,1.28,0l12.16-12.08c0.36-0.36,0.36-0.94,0-1.3c0,0,0,0,0,0L1.57,0.27z"
    ]
  };
  var dsDrinkingWater = {
    prefix: "ds",
    iconName: "drinking-water",
    icon: [
      85,
      96.01,
      [],
      "e001",
      "M83.53,17.37H55.76c-1.04-1.87-2.81-3.33-4.78-4.16l0.1-5.72h2.29c0.83,1.87,2.7,3.12,4.78,3.12c2.91,0,5.31-2.39,5.31-5.31S61.07,0,58.15,0c-2.18,0-4.06,1.35-4.78,3.12h-3.22c-0.62-0.73-1.66-1.25-2.7-1.25c-1.04,0-2.08,0.42-2.7,1.25H41.3C40.47,1.25,38.6,0,36.52,0c-2.91,0-5.31,2.39-5.31,5.31s2.39,5.31,5.31,5.31c2.18,0,4.06-1.35,4.78-3.12h2.5l0.1,5.83c-1.98,0.83-3.54,2.29-4.58,4.06h-3.43c-10.19,0-18.52,8.32-18.52,18.52v2.29c0,0.83,0.73,1.56,1.56,1.56h6.97c0.83,0,1.56-0.73,1.56-1.56v-2.29c0-4.58,3.74-8.32,8.32-8.32h3.74c1.77,2.5,4.58,4.16,7.91,4.16c3.33,0,6.24-1.66,7.91-4.16h28.09c0.83,0,1.56-0.73,1.56-1.56v-7.07C85.09,18.1,84.37,17.37,83.53,17.37z M37.45,48.79c-1.87-0.1-3.54,1.25-3.74,3.12l-0.94,10.61c-0.31,0.21-0.73,0.21-1.04,0.21c-2.08,0-4.06-3.95-5.72-5.31l0,0c-1.66,1.35-3.64,5.31-5.72,5.31s-4.06-3.95-5.72-5.31l0,0c-1.66,1.35-3.64,5.31-5.72,5.31c-0.31,0-0.62-0.1-0.83-0.21L6.87,50.97C6.66,49.1,5,47.64,3.13,47.85c-1.87,0.21-3.22,1.87-3.12,3.74l4.37,44.42h32.25l3.95-43.69C40.78,50.66,39.33,48.99,37.45,48.79z M10.62,89.35L8.64,69.38c0.1,0,0.1,0,0.21,0c2.08,0,4.06-3.22,5.72-4.58l0,0c1.66,1.35,3.64,4.58,5.72,4.58s4.06-3.22,5.72-4.58l0,0c1.66,1.35,3.64,4.58,5.72,4.58c0.1,0,0.31,0,0.42,0l-1.77,20.08H10.62V89.35z M25.91,50.55c0-2.39-1.66-4.06-3.02-7.28c-0.1-0.21-0.21-0.52-0.52-0.52c-0.31,0-0.42,0.31-0.52,0.52c-1.25,3.22-3.02,4.89-3.02,7.28c0,2.81,1.35,4.16,3.54,4.16S25.91,53.36,25.91,50.55z"
    ]
  };
  var dsFamily = {
    prefix: "ds",
    iconName: "family",
    icon: [
      68,
      70.02,
      [],
      "e001",
      "M4.37,11.73C4.38,4.28,8.37-0.01,16.3,0c7.95,0.02,11.9,4.32,11.89,11.77s-4,11.9-11.94,11.89v0C8.32,23.65,4.36,19.17,4.37,11.73z M51.74,28.19L51.74,28.19c7.94-0.02,11.9-4.49,11.89-11.94s-4-11.74-11.93-11.73c-7.95,0.02-11.9,4.33-11.89,11.77S43.8,28.2,51.74,28.19z M68,46.8v23.22l-14.95,0V62.2c0-2.65-2.71-4.92-4.91-4.92h-6.86c-0.06,0-0.12,0.04-0.18,0.04c-0.74,0.03-1.47,0.24-2.12,0.61c-0.92,0.49-1.67,1.26-2.12,2.2c-0.32,0.64-0.48,1.35-0.49,2.06v7.83l-4.24,0V62.2c0.02-0.9,0.16-1.79,0.43-2.64c0.52-1.7,1.52-3.21,2.88-4.35c0.41-0.34,0.84-0.64,1.29-0.91c-0.49-0.46-0.92-0.97-1.29-1.52c-0.83-1.24-1.38-2.65-1.64-4.12c-0.39-0.23-0.81-0.42-1.24-0.56c-0.42-0.13-0.85-0.21-1.29-0.22h-7.52c-3.08,0-5.58,2.5-5.59,5.58v16.57L0,70.02V37.27c0.01-6.04,4.91-10.94,10.95-10.94h8.32c2.02-1.68,4.77-2.61,8.23-2.61h0.04c7.64,0.02,12.02,4.36,12.01,11.92c0,0.06-0.01,0.13-0.02,0.2c0.17-0.07,0.31-0.17,0.48-0.22c3.01-3.09,7.14-4.84,11.45-4.84h0.52C60.83,30.78,68,37.95,68,46.8z M35.3,35.63c0.01-5.15-2.53-7.66-7.78-7.67h-0.04c-0.17,0-0.29,0.06-0.45,0.06c-4.88,0.16-7.31,2.61-7.32,7.58c-0.01,5.24,2.54,7.8,7.78,7.81h0.03c1.77,0.08,3.53-0.38,5.03-1.31c0.31-0.19,0.59-0.42,0.85-0.67v0C34.66,40.15,35.29,38.2,35.3,35.63z M51.63,45.93c0.01-2.26-0.55-3.98-1.64-5.09c-1.12-1.14-2.89-1.71-5.26-1.72h-0.04c-2.36,0-4.12,0.57-5.24,1.7c-1.09,1.11-1.65,2.82-1.66,5.09c0,0.18,0.06,0.3,0.06,0.47c0.11,2.8,1.15,4.63,3.08,5.6c1.17,0.58,2.46,0.88,3.77,0.87h0.03c2.34,0,4.1-0.59,5.23-1.75C51.06,49.97,51.62,48.23,51.63,45.93z"
    ]
  };
  var dsHand = {
    prefix: "ds",
    iconName: "hand",
    icon: [
      16,
      24,
      [],
      "e001",
      "1.05c0.57,0.03,1.01,0.51,1,1.08v2.87v0.11v0.35c0,0.28,0.22,0.5,0.5,0.5S4,14.6,4,14.32V5.13C3.96,4.58,4.38,4.1,4.93,4.07c0.02,0,0.05,0,0.07,0c0.55,0,1,0.45,1,1c0,0.02,0,0.05,0,0.07v7.44c0,0.28,0.22,0.5,0.5,0.5S7,12.85,7,12.57V2.11c0-0.55,0.45-1,1-1s1,0.45,1,1v10.38c0,0.28,0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5V3.56c0.02-0.55,0.48-0.98,1.03-0.96c0.55,0.02,0.98,0.48,0.97,1.03v9c0,0.28,0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5v-6.1c0-0.55,0.45-1,1-1s1,0.45,1,1v10.43C15,20.56,12.13,23.06,8,23.06 M0,12.06v4.9c0,4.18,3.28,7.1,8,7.1s8-2.92,8-7.1V6.56c0-1.1-0.9-2-2-2c-0.35,0.01-0.7,0.11-1,0.29V3.63c0.03-1.1-0.84-2.03-1.94-2.06c-0.02,0-0.04,0-0.06,0c-0.36,0.01-0.7,0.12-1,0.31C9.93,0.78,8.99-0.06,7.88,0S5.93,1.02,6,2.12v1.25c-0.3-0.19-0.64-0.3-1-0.31c-1.1,0-2,0.89-2,2c0,0.02,0,0.05,0,0.07v4.11c-0.3-0.19-0.65-0.3-1-0.31c-1.1,0-2,0.89-2,2c0,0.02,0,0.04,0,0.06v1V12.06z"
    ]
  };
  var dsHouse = {
    prefix: "ds",
    iconName: "house",
    icon: [
      48,
      48,
      [],
      "e001",
      "M48,23.15L23.99,0L0,23.15h6.22V48h35.54V23.15H48z"
    ]
  };
  var dsInfoCircle = {
    prefix: "ds",
    iconName: "info-circle",
    icon: [
      36,
      36,
      [],
      "e001",
      "M18,0C8.06,0,0,8.06,0,18s8.06,18,18,18s18-8.06,18-18S27.94,0,18,0z M17.24,26.5c-0.63,0.04-1.26-0.13-1.78-0.5c-0.41-0.38-0.63-0.92-0.59-1.47c0.07-0.69,0.23-1.36,0.49-2.01l1.53-4.38c0.08-0.21,0.14-0.43,0.17-0.66c0.01-0.03,0.01-0.06,0-0.09c-0.02-0.14-0.15-0.23-0.29-0.21c-0.43,0-0.94,0.55-1.52,1.65h-1.22c1.09-2.36,2.63-3.54,4.62-3.54c0.59-0.04,1.18,0.15,1.64,0.51c0.4,0.36,0.61,0.88,0.58,1.41c-0.06,0.72-0.24,1.43-0.52,2.09l-1.47,4.01c-0.15,0.34-0.26,0.7-0.32,1.07c0,0.08,0.03,0.16,0.08,0.22c0.07,0.05,0.15,0.08,0.24,0.08c0.34-0.08,0.64-0.28,0.84-0.57h0c0.31-0.32,0.57-0.69,0.78-1.09h1.29C20.7,25.35,19.19,26.5,17.24,26.5z M22.08,11.87c-0.75,0.77-1.99,0.79-2.76,0.03c-0.77-0.75-0.79-1.99-0.03-2.76c0.75-0.77,1.99-0.79,2.76-0.03c0.38,0.36,0.6,0.87,0.59,1.4C22.64,11.02,22.44,11.51,22.08,11.87z"
    ]
  };
  var dsKitchen = {
    prefix: "ds",
    iconName: "kitchen",
    icon: [
      74.4,
      68.1,
      [],
      "e001",
      "M7.6,24.4h7.7c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9H7.6c-1,0-1.9,0.8-1.9,1.9C5.7,23.5,6.5,24.4,7.6,24.4z M22.7,24.4h7.7c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9h-7.7c-1,0-1.9,0.8-1.9,1.9C20.9,23.5,21.7,24.4,22.7,24.4z M59.8,23.4v-4.2l1.3-0.9c0.1,0.4,0.4,0.8,0.9,1c0.8,0.3,1.6-0.1,1.9-0.9c0.3-0.8-0.1-1.6-0.9-1.9c-0.1-0.1-0.3-0.1-0.5-0.1v-0.1l0,0c0.3-0.8-0.1-1.6-0.9-1.9c-0.8-0.3-1.6,0.1-1.9,0.9c-0.2,0.5-0.1,1.1,0.3,1.5L58.1,18h-0.4V7.3c0,0,0.4-4.3,3.4-4.3c2.9,0,3.3,3.2,3.3,5.2h3.1c0-6.1-3.3-8.2-6.4-8.2c-4.6,0-6.2,4.7-6.4,7.2V18h-0.2l-1.9-1.2c0.3-0.4,0.5-1,0.3-1.5c-0.3-0.8-1.1-1.2-1.9-0.9c-0.8,0.3-1.2,1.1-0.9,1.9l0,0v0.1c-0.2,0-0.3,0-0.5,0.1c-0.8,0.3-1.2,1.1-0.9,1.9c0.3,0.8,1.1,1.2,1.9,0.9c0.5-0.2,0.8-0.6,0.9-1l1.2,0.8v4.3H40.3v44.7h34.1V23.4H59.8z M52.8,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3C55.1,33.1,54,34.2,52.8,34.2z M60.9,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3C63.2,33.1,62.2,34.2,60.9,34.2z M32.7,26.2H5.3c-2.9,0-5.3,2.4-5.3,5.3v6.8h38v-6.8C38,28.5,35.6,26.2,32.7,26.2z M6.8,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3C9.1,33.1,8.1,34.2,6.8,34.2z M14.9,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3C17.2,33.1,16.2,34.2,14.9,34.2z M23,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3C25.4,33.1,24.3,34.2,23,34.2z M31.2,34.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3C33.5,33.1,32.4,34.2,31.2,34.2z M0,62.8c0,2.9,2.4,5.3,5.3,5.3h27.4c2.9,0,5.3-2.4,5.3-5.3V40.5H0C0,40.5,0,62.8,0,62.8z M7.8,44.7h22.3c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8H7.8c-1,0-1.8-0.8-1.8-1.8C6,45.5,6.8,44.7,7.8,44.7z"
    ]
  };
  var dsLogotype = {
    prefix: "ds",
    iconName: "logotype",
    icon: [
      42,
      42,
      [],
      "e001",
      "M21,5.1h1.2v4.5H21V5.1z M21,17.63c0.32,0.09,0.65,0.17,1,0.27c0.07,0.02,0.13,0.03,0.2,0.05V14H21V17.63z M42,21	c0,11.6-9.4,21-21,21S0,32.6,0,21S9.4,0,21,0S42,9.4,42,21z M25.5,13.1c0.5,0.5,0.9,1.2,1.2,2c0.1,0.3,0.1,0.7,0.2,1.1h5.3	c0-0.8-0.2-1.6-0.4-2.4c-1.2-3.1-3.3-5.1-6.3-6V13.1z M17.7,28.9c-1.2-0.8-2-1.9-2.3-3.3c-0.1-0.3-0.2-0.7-0.2-1.1H9.6v0.1	c0,0.7,0.1,1.4,0.2,2c1,3.8,3.8,6.5,7.9,7.4V28.9z M24.5,25.3c-0.6-0.3-0.9-0.5-2.2-0.8l-0.1,3H21v-3.2c-0.5-0.1-0.5-0.2-0.9-0.3	c-0.4-0.1-0.9-0.2-1.3-0.3v14.5h5.7V25.3z M32.4,26.3c0-2.3-0.8-4.1-2.4-5.4c-1.61-1.34-3.54-1.88-5.5-2.41V3.7h-5.7v0.1v13.09	c-1.02-0.48-1.6-1.11-1.6-2.29c0-0.6,0.2-1.2,0.6-1.7V7.7c-4.1,1.1-6.6,3.9-6.6,7.7c0,1.8,0.7,3.4,1.9,4.5c1.9,1.8,4,2.3,6.5,2.9	l1.5,0.4c3.3,0.8,5.2,1.3,5.2,3.6c0,0.7-0.3,1.4-0.8,1.9V34C29.8,32.9,32.4,29.9,32.4,26.3z M21,36.4h1.2V32H21V36.4z"
    ]
  };
  var dsMapMarker = {
    prefix: "ds",
    iconName: "map-marker",
    icon: [
      15,
      24,
      [],
      "e001",
      "M7.5,0L7.5,0C3.36,0,0,3.56,0,7.94c0,1.76,1.06,4.64,3.25,8.78c1.55,2.93,3.07,5.39,3.14,5.48L7.5,24l1.11-1.79c0.06-0.1,1.58-2.55,3.14-5.48C13.94,12.58,15,9.7,15,7.94C15,3.56,11.64,0,7.5,0z M7.5,11.94c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S9.71,11.94,7.5,11.94z"
    ]
  };
  var dsMotorcycle = {
    prefix: "ds",
    iconName: "motorcycle",
    icon: [
      85.2,
      55.1,
      [],
      "e001",
      "M85.2,43.7c0,7.5-4.2,11.4-11.2,11.4s-11.3-3.9-11.3-11.4c0-3.5,1.1-6.4,3-8.3l-3.9-7v4.4c0,6.3-5.4,11.3-11.7,11.3H31.6c-0.1,7.2-4.3,11-11.1,11c-6.9,0-11.2-3.8-11.3-11H3.9c-2.2,0-3.9-1.7-3.9-4c0-2.2,1.8-4,3.9-4c1.8-7.6,6.3-13.3,14.9-13.3h16.5c2.6,0,4.5,2.1,4.5,4.5c0,1.6-0.1,2.9-1,4.4l-2.3,4.4H50c2.2,0,3.9-1.1,3.9-3.3V20.6c0-1.5,0.7-2.8,1.9-3.5l-1.6-2.8c-0.2-0.4-0.3-0.9-0.3-1.3c0-1.3,1.1-2.7,2.7-2.7c1,0,1.8,0.5,2.3,1.4l11.5,21.1c1.2-0.3,2.3-0.5,3.8-0.5C80.9,32.5,85.2,36.3,85.2,43.7 M15.2,21.1c-2.4,0-4.1-2-4.1-4.1v-1.9c0-2.4,1.8-4.2,4.1-4.2h22.9c2.4,0,4.1,1.9,4.1,4.2V17c0,2.2-1.8,4.1-4.1,4.1H15.2z M16,44.1c0.1,2.7,1.7,4.1,4.5,4.1c2.6,0,4.1-1.5,4.3-4.1H16z M66.7,10.5c0,0.9-0.7,1.6-1.6,1.6c-0.3,0-0.6-0.1-1-0.3l-6.8-3.1h-5.1c-0.6,0-1.1-0.5-1.1-1.1V4.5c0-0.6,0.5-1.1,1.1-1.1h5.1l6.8-3.1c0.4-0.2,0.7-0.3,1-0.3c0.9,0,1.6,0.7,1.6,1.6V10.5z M69.5,43.7c0,3.1,1.8,4.5,4.5,4.5s4.4-1.5,4.4-4.5s-1.8-4.5-4.4-4.5C71.2,39.2,69.5,40.8,69.5,43.7"
    ]
  };
  var dsPet = {
    prefix: "ds",
    iconName: "pet",
    icon: [
      60,
      61,
      [],
      "e001",
      "M31.23,27.22L31.23,27.22c-4.96,0.03-16.92,0.08-20.82-0.2c-1.26-0.09-2.36,0.15-3.31,0.61c-2.43-0.74-6.74-5.07-6.74-5.07C-1.15,27,2.6,30.65,3.63,31.54c-0.5,1.17-0.8,2.43-0.85,3.63c-0.06,1.31,0.12,3.03,0.39,4.75c-0.75,4.69-1.78,12.72-1.15,18.21c0.19,1.66,1.6,2.88,3.24,2.88c0.13,0,0.25,0,0.38-0.02c1.79-0.21,3.07-1.83,2.86-3.62c-0.42-3.6,0.04-8.73,0.6-12.9c0.75-1.11,1.89-1.96,3.61-1.68c4.25,0.71,8.69,6.21,13.3,6.56c2.29,0.18,3.93,0.09,5.43-0.39v8.73c0,1.8,1.46,3.26,3.26,3.26s3.26-1.46,3.26-3.26V44.4c2.44-2.62,4.71-6.31,6.14-9.6l-12.84-7.58L31.23,27.22z M46.7,20.38c-0.81,0-1.47-0.66-1.47-1.47c0-0.81,0.66-1.46,1.47-1.46c0.81,0,1.47,0.66,1.47,1.46C48.17,19.73,47.51,20.38,46.7,20.38 M51.55,16.38c0,0-3.88-2.46-7.84-2.57l-0.5-3.43c-0.22-1.55-1.67-2.63-3.22-2.4c-1.55,0.23-2.62,1.67-2.4,3.22l0.69,4.71c-2.09,2.13-3.37,5.57-4.08,8.1l0.01,0.01L34.21,24l0.02,0.04l11.69,6.9c1.67-2.3,3.99-2.43,5.98-2.85c2.48-0.53,5.03-0.53,6.44-3.19c1.42-2.66,1.66-8.39,1.66-8.39L51.55,16.38z M30.83,25.84c0.35,0.23,0.7,0.45,1.05,0.68l1.7-1.84c-0.51-0.32-1-0.64-1.49-0.97C16.83,13.56,8.35,0.14,8.26,0L6.16,1.3C6.53,1.9,15.06,15.41,30.83,25.84"
    ]
  };
  var dsPlay = {
    prefix: "ds",
    iconName: "play",
    icon: [
      180,
      179,
      [],
      "e001",
      "M84.84,125.25c-3.88,0-7.3,1.37-9.81,3.88c-5.93,5.93-8.21,14.82-5.47,20.53c0,0.23,0.23,0.23,0.23,0.46c3.65,11.17,11.63,15.96,18.02,16.65c7.53,0.91,12.32-1.37,14.82-6.84c3.88-9.12,0-23.26-6.39-30.1C93.5,126.85,89.17,125.25,84.84,125.25z M138.66,141.67c-0.91,0-1.82,0-2.74,0.23c-9.35,2.05-20.98,12.32-22.35,22.12c-0.68,5.47,2.05,9.81,8.44,13.23c2.51,1.37,5.47,2.05,8.67,2.05c5.25,0,10.72-2.05,15.51-5.7c0.23,0,0.23-0.23,0.46-0.23c5.47-3.19,8.67-11.63,7.07-19.84C152.34,146,145.05,141.67,138.66,141.67z M163.29,92.87c7.3,0,13.91-4.79,15.96-12.09c2.74-9.12-2.28-18.47-11.4-21.44c-3.88-1.14-7.75-0.91-11.17,0.46c-3.65-3.65-7.98-6.61-13.23-8.21c-5.25-1.6-10.49-1.82-15.51-0.68c-2.05-2.96-5.25-5.25-8.89-6.39c-8.89-2.74-18.47,2.28-21.44,11.4c-2.28,7.07,0.46,14.6,6.39,18.93c-1.14,5.47-0.91,10.72,0.68,15.74L84.84,84.2c-2.05-0.68-4.11-0.68-5.93-0.23c0-1.37-0.46-2.74-0.91-3.88c-2.51-6.84-15.74-8.44-21.89-20.3c-1.82-3.42-4.56-7.3-3.19-13.46c2.96,0.68,3.65,0.91,6.39,1.14c4.56,0.23,8.67-0.68,13.23-2.05c7.53-2.51,13.46-10.03,14.82-18.02c1.82-10.03-2.28-19.84-11.17-24.63C66.82-2.23,53.82-0.41,47.44,7.8c-5.02,6.84-5.25,14.14-8.67,21.67c-1.37,2.96-6.84,3.19-9.35,5.47c-2.96,3.19-5.93,5.7-8.44,9.35c-6.39,8.44-13,16.65-17.33,26.23C0.91,76.67,0,82.83,0,89.44c0,0,0,3.88,1.37,7.53v63.17c0,5.93,4.79,10.95,10.95,10.95c5.93,0,10.95-4.79,10.95-10.95v-30.1l6.84,29.42c1.14,5.02,5.7,8.44,10.49,8.44c0.91,0,1.6,0,2.51-0.23c5.93-1.37,9.35-7.3,7.98-13L36.95,93.78c0-0.68,0-1.14,0-1.82c0-3.42,2.96-10.95,5.47-13.23c2.28,3.65,5.7,5.7,9.12,8.44c3.19,2.51,9.58,5.93,13.46,6.84c1.14,0.23,2.74,0.46,4.56,0.46c-0.68,5.7,2.74,11.4,8.44,13.23l13.91,4.33c-1.37,2.05-2.51,4.11-3.42,6.61c5.02,0.68,9.81,3.19,13,6.61c5.7,6.16,9.81,16.65,9.81,26.45c5.47-8.21,14.82-14.6,23.03-16.42c4.56-0.91,9.81-0.23,14.37,2.05c0.46-2.51,0.91-5.02,0.91-7.53l13.68,4.11c1.14,0.46,2.28,0.46,3.65,0.46c5.25,0,10.03-3.42,11.63-8.67c2.05-6.39-1.6-13.23-7.98-15.28l-16.42-5.02C158.04,102.22,161.24,97.88,163.29,92.87z M174.46,73.48c1.82,7.98-10.72,10.03-10.72,10.03c0.91-7.75-3.65-16.65-3.65-16.65C164.2,65.27,172.64,65.5,174.46,73.48z M109.47,68.01c0,0-10.03-6.39-3.42-13.46c5.7-6.39,13.68-2.96,16.42,0.68C122.47,55.01,113.57,59.34,109.47,68.01z M147.33,96.06c-2.74,8.89-12.32,12.09-21.21,9.35c-8.89-2.74-14.14-10.49-11.4-19.38c2.74-8.89,12.32-14.14,21.44-11.17C145.05,77.59,150.06,87.16,147.33,96.06z M133.64,82.15c-2.28-0.46-5.7-1.14-7.75,0.23c-2.28,1.6-2.51,4.33-1.14,6.39c1.37,2.51,4.11,3.65,6.84,4.56s5.93,1.6,7.98,0s2.05-4.79,0.68-7.07C138.89,83.97,136.15,82.83,133.64,82.15z"
    ]
  };
  var dsSearch = {
    prefix: "ds",
    iconName: "search",
    icon: [
      17,
      17,
      [],
      "e001",
      "M16.8,15.82l-4.08-4.08c2.52-3.06,2.08-7.59-0.98-10.11S4.16-0.45,1.64,2.62c-2.52,3.06-2.08,7.59,0.98,10.11c2.64,2.18,6.45,2.18,9.1,0.02l4.09,4.07c0.28,0.27,0.73,0.26,1-0.02C17.06,16.53,17.06,16.1,16.8,15.82L16.8,15.82z M7.19,12.93c-3.16,0-5.73-2.57-5.73-5.73c0-3.16,2.57-5.73,5.73-5.72c3.16,0,5.73,2.57,5.73,5.73l0,0C12.91,10.37,10.35,12.93,7.19,12.93L7.19,12.93z"
    ]
  };
  var dsZoomIn = {
    prefix: "ds",
    iconName: "zoom-in",
    icon: [
      17,
      17,
      [],
      "e001",
      "M16.8,15.82l-4.08-4.08c2.52-3.06,2.08-7.59-0.98-10.11S4.16-0.45,1.64,2.62c-2.52,3.06-2.08,7.59,0.98,10.11c2.64,2.18,6.45,2.18,9.1,0.02l4.09,4.07c0.28,0.27,0.73,0.26,1-0.02C17.06,16.53,17.06,16.1,16.8,15.82L16.8,15.82z M7.19,12.93c-3.16,0-5.73-2.57-5.73-5.73c0-3.16,2.57-5.73,5.73-5.72c3.16,0,5.73,2.57,5.73,5.73l0,0C12.91,10.37,10.35,12.93,7.19,12.93L7.19,12.93z M10.14,6.91c-0.01-0.16-0.14-0.29-0.3-0.3H7.78V4.55c0-0.16-0.13-0.29-0.29-0.3H6.89c-0.16,0-0.29,0.13-0.29,0.3v2.06H4.53c-0.16,0-0.29,0.13-0.29,0.3V7.5c0,0.16,0.13,0.29,0.29,0.3h2.07v2.07c0.01,0.16,0.13,0.29,0.29,0.3h0.59c0.16-0.01,0.29-0.13,0.29-0.3V7.79h2.07c0.16,0,0.3-0.13,0.3-0.3L10.14,6.91L10.14,6.91z"
    ]
  };
  var dsZoomOut = {
    prefix: "ds",
    iconName: "zoom-out",
    icon: [
      17,
      17,
      [],
      "e001",
      "M16.8,15.82l-4.08-4.08c2.52-3.06,2.08-7.59-0.98-10.11S4.16-0.45,1.64,2.62c-2.52,3.06-2.08,7.59,0.98,10.11c2.64,2.18,6.45,2.18,9.1,0.02l4.09,4.07c0.28,0.27,0.73,0.26,1-0.02C17.06,16.53,17.06,16.1,16.8,15.82L16.8,15.82z M7.19,12.93c-3.16,0-5.73-2.57-5.73-5.73c0-3.16,2.57-5.73,5.73-5.72c3.16,0,5.73,2.57,5.73,5.73l0,0C12.91,10.37,10.35,12.93,7.19,12.93L7.19,12.93z M9.84,7.79c0.16,0,0.3-0.13,0.3-0.3V6.91h0c-0.01-0.16-0.14-0.29-0.3-0.3H4.53c-0.16,0-0.29,0.13-0.29,0.3V7.5c0,0.16,0.13,0.29,0.29,0.3H9.84z"
    ]
  };
  var _iconsCache = {
    dsArrowRight: dsArrowRight,
    dsBike: dsBike,
    dsCCCircle: dsCCCircle,
    dsCheckCircle: dsCheckCircle,
    dsChevronRight: dsChevronRight,
    dsDrinkingWater: dsDrinkingWater,
    dsFamily: dsFamily,
    dsHand: dsHand,
    dsHouse: dsHouse,
    dsInfoCircle: dsInfoCircle,
    dsKitchen: dsKitchen,
    dsLogotype: dsLogotype,
    dsMapMarker: dsMapMarker,
    dsMotorcycle: dsMotorcycle,
    dsPet: dsPet,
    dsPlay: dsPlay,
    dsSearch: dsSearch,
    dsZoomIn: dsZoomIn,
    dsZoomOut: dsZoomOut
  };
  exports.ds = _iconsCache;
  exports.prefix = prefix;
  exports.dsArrowRight = dsArrowRight;
  exports.dsBike = dsBike;
  exports.dsCCCircle = dsCCCircle;
  exports.dsCheckCircle = dsCheckCircle;
  exports.dsChevronRight = dsChevronRight;
  exports.dsDrinkingWater = dsDrinkingWater;
  exports.dsFamily = dsFamily;
  exports.dsHand = dsHand;
  exports.dsHouse = dsHouse;
  exports.dsInfoCircle = dsInfoCircle;
  exports.dsKitchen = dsKitchen;
  exports.dsLogotype = dsLogotype;
  exports.dsMapMarker = dsMapMarker;
  exports.dsMotorcycle = dsMotorcycle;
  exports.dsPet = dsPet;
  exports.dsPlay = dsPlay;
  exports.dsSearch = dsSearch;
  exports.dsZoomIn = dsZoomIn;
  exports.dsZoomOut = dsZoomOut;
  Object.defineProperty(exports, "__esModule", { value: true });
});
