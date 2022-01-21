"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CustomLabel_1 = require("../../components/CustomLabel");
exports.default = {
    title: 'UI/CustomLabel',
    component: CustomLabel_1.CustomLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        customFontColor: { control: 'color' }
    }
};
var Template = function (args) {
    return (0, jsx_runtime_1.jsx)(CustomLabel_1.CustomLabel, __assign({}, args), void 0);
};
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    customFontColor: '#5517ac',
    size: 'h1'
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    backgroundColor: '#000000',
    customFontColor: '#fcfcfc',
    size: 'h1'
};
