'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TableHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _core = require('@material-ui/core');

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableHeader(props) {
    if (props.config.show_length_menu == true || props.config.show_filter == true || props.config.button.excel == true || props.config.button.csv == true || props.config.button.print == true) {
        return _react2.default.createElement(
            'div',
            { className: 'row table-head asrt-table-head', id: props.id ? props.id + "-table-head" : "" },
            _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 6 },
                    props.config.show_filter ? _react2.default.createElement(
                        'div',
                        { className: 'table_filter', style: _style2.default.table_filter },
                        _react2.default.createElement(_core.TextField, {
                            type: 'search',
                            className: 'form-control',
                            placeholder: props.config.language.filter,
                            onChange: props.filterRecords,
                            variant: 'outlined', size: 'small'
                        })
                    ) : null
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 6 },
                    props.extraPlusButton,
                    _react2.default.createElement(
                        'div',
                        { className: 'table_tools', style: _style2.default.table_tool },
                        props.config.button.excel ? _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary buttons-excel',
                                tabIndex: '0',
                                'aria-controls': 'configuration_tbl',
                                title: 'Export to Excel',
                                style: _style2.default.table_tool_btn,
                                onClick: props.exportToExcel },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('i', { className: 'fa fa-file-excel-o', 'aria-hidden': 'true' })
                            )
                        ) : null,
                        props.config.button.csv ? _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary buttons-csv',
                                tabIndex: '0',
                                'aria-controls': 'configuration_tbl',
                                title: 'Export to CSV',
                                style: _style2.default.table_tool_btn,
                                onClick: props.exportToCSV },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('i', { className: 'fa fa-file-text-o', 'aria-hidden': 'true' })
                            )
                        ) : null,
                        props.config.button.print ? _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary buttons-pdf',
                                tabIndex: '0',
                                'aria-controls': 'configuration_tbl',
                                title: 'Export to PDF',
                                style: _style2.default.table_tool_btn,
                                onClick: props.exportToPDF },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('i', { className: 'glyphicon glyphicon-print fa fa-print', 'aria-hidden': 'true' })
                            )
                        ) : null,
                        props.config.button.extra == true ? props.extraButtons.map(function (elem, index) {
                            elem.clickCount = 0;
                            elem.singleClickTimer = '';
                            return _react2.default.createElement(
                                'button',
                                { className: elem.className ? elem.className : "btn btn-primary buttons-pdf",
                                    tabIndex: '0',
                                    'aria-controls': 'configuration_tbl',
                                    title: elem.title ? elem.title : "Export to PDF",
                                    style: _style2.default.table_tool_btn,
                                    onClick: function onClick(event) {
                                        elem.onClick(event);
                                    },
                                    key: index },
                                elem.children
                            );
                        }) : null
                    )
                )
            )
        );
    } else {
        return null;
    }
}