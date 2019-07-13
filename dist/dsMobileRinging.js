"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = "ds";
var iconName = "mobile-ringing";
var width = 512;
var height = 512;
var ligatures = [];
var unicode = "e001";
var svgPathData =
  "M351.2,119.6l-22.6-5.9l13.1-47.6c2.4-8.3-2.4-15.5-10.7-17.8c-8.3-2.4-15.5,2.4-17.8,10.7l-13.1,47.6L189.4,76.8  c-13.1-3.6-26.2,3.6-29.7,16.7l-94,343.8c-3.6,13.1,3.6,26.2,16.7,29.7l161.8,44c13.1,3.6,26.2-3.6,29.7-16.7l94-345  C372.6,136.3,364.3,123.2,351.2,119.6z M131.1,323.1l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4c8.3,2.4,13.1,10.7,10.7,19  l-3.6,11.9c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4C133.5,339.8,128.7,331.4,131.1,323.1z M146.6,424.2l-3.6,11.9  c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4  C144.2,407.6,149,415.9,146.6,424.2z M138.2,395.7l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7  l10.7,2.4c8.3,2.4,13.1,10.7,10.7,19l-3.6,11.9C154.9,393.3,146.6,398.1,138.2,395.7z M198.9,438.5l-3.6,11.9  c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4  C196.5,421.9,201.3,430.2,198.9,438.5z M190.6,410l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7  l10.7,2.4c8.3,2.4,13.1,10.7,10.7,19l-3.6,11.9C208.4,407.6,198.9,412.3,190.6,410z M183.5,337.4l3.6-11.9  c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4c8.3,2.4,13.1,10.7,10.7,19l-3.6,11.9c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4  C185.8,354,181.1,345.7,183.5,337.4z M251.3,452.8l-3.6,11.9c-2.4,8.3-10.7,13.1-19,10.7L218,473c-8.3-2.4-13.1-10.7-10.7-19  l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4C248.9,436.1,253.7,444.5,251.3,452.8z M265.6,401.6l-3.6,11.9  c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4  C263.2,385,267.9,393.3,265.6,401.6z M279.8,350.5l-3.6,11.9c-2.4,8.3-10.7,13.1-19,10.7l-10.7-2.4c-8.3-2.4-13.1-10.7-10.7-19  l3.6-11.9c2.4-8.3,10.7-13.1,19-10.7l10.7,2.4C277.4,332.6,282.2,342.1,279.8,350.5z M332.2,162.5l-35.7,130.9  c-2.4,7.1-9.5,10.7-15.5,9.5l-122.5-33.3c-7.1-2.4-10.7-9.5-9.5-15.5l35.7-130.9c2.4-7.1,9.5-10.7,15.5-9.5L322.7,147  C329.8,148.2,334.6,155.3,332.2,162.5z M91.8,35.2c8.3-1.2,14.3-9.5,13.1-17.8C103.7,9,95.4,3.1,87.1,4.2  C31.2,12.6-8.1,66.1,1.4,122c1.2,8.3,8.3,13.1,15.5,13.1c1.2,0,1.2,0,2.4,0c8.3-1.2,14.3-9.5,13.1-17.8C25.2,78,52.6,41.1,91.8,35.2  z M78.8,135.1c1.2,0,1.2,0,2.4,0c8.3-1.2,14.3-9.5,13.1-17.8c-1.2-7.1,0-13.1,4.8-19c3.6-5.9,9.5-9.5,16.7-10.7  c8.3-1.2,14.3-9.5,13.1-17.8c-1.2-8.3-9.5-14.3-17.8-13.1C79.9,61.4,58.5,91.1,63.3,122C64.5,129.2,71.6,135.1,78.8,135.1z   M477.3,78c-5.9-5.9-16.7-4.8-22.6,1.2c-5.9,5.9-4.8,16.7,1.2,22.6c29.7,26.2,32.1,71.4,5.9,101.1c-5.9,5.9-4.8,16.7,1.2,22.6  c3.6,2.4,7.1,3.6,10.7,3.6c4.8,0,8.3-1.2,11.9-4.8C523.7,181.5,520.2,116.1,477.3,78z M429.7,108.9c-5.9-5.9-16.7-4.8-22.6,1.2  c-5.9,5.9-4.8,16.7,1.2,22.6c10.7,9.5,11.9,26.2,2.4,36.9c-5.9,5.9-4.8,16.7,1.2,22.6c3.6,2.4,7.1,3.6,10.7,3.6  c4.8,0,8.3-1.2,11.9-4.8C454.7,166.1,452.3,130.4,429.7,108.9z";

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};

exports.dsMobileRinging = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
