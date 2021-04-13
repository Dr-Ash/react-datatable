'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TableFooter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _ADPagination = require('./ADPagination');

var _ADPagination2 = _interopRequireDefault(_ADPagination);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableFooter(props) {
    if (props.config.show_info == true || props.config.show_pagination == true) {
        return _react2.default.createElement(
            'div',
            { className: 'table-foot asrt-table-foot', id: props.id ? props.id + "-table-foot" : "" },
            _react2.default.createElement(
                _Grid2.default,
                { container: true },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 6 },
                    props.config.show_info ? props.paginationInfo : null,
                    props.config.show_length_menu ? _react2.default.createElement(
                        'div',
                        { className: 'input-group asrt-page-length' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group-addon input-group-prepend' },
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-text', style: _style2.default.table_size },
                                props.lengthMenuText[0] ? props.lengthMenuText[0] : ''
                            )
                        ),
                        (0, _includes2.default)(props.config.language.length_menu, '_MENU_') ? _react2.default.createElement(
                            'select',
                            { type: 'text', className: 'form-control', style: _style2.default.table_size_dropdown,
                                onChange: props.changePageSize },
                            props.config.length_menu.map(function (value, key) {
                                return _react2.default.createElement(
                                    'option',
                                    { key: value },
                                    value
                                );
                            }),
                            _react2.default.createElement(
                                'option',
                                { value: props.recordLength },
                                'All'
                            )
                        ) : null,
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group-addon input-group-prepend' },
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-text', style: _style2.default.table_size },
                                props.lengthMenuText[1] ? props.lengthMenuText[1] : ''
                            )
                        )
                    ) : null
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 6 },
                    props.config.show_pagination ? _react2.default.createElement(
                        'nav',
                        { 'aria-label': 'Page navigation', className: 'pull-right' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'pagination justify-content-end asrt-pagination' },
                            props.config.pagination == "basic" ? _react2.default.createElement(_Pagination2.default, {
                                config: props.config,
                                isFirst: props.isFirst,
                                isLast: props.isLast,
                                pages: props.pages,
                                page_number: props.page_number,
                                is_temp_page: props.is_temp_page,
                                temp_page_number: props.temp_page_number,
                                previousPage: props.previousPage,
                                firstPage: props.firstPage,
                                nextPage: props.nextPage,
                                lastPage: props.lastPage,
                                goToPage: props.goToPage,
                                onPageChange: props.onPageChange,
                                onPageBlur: props.onPageBlur }) : _react2.default.createElement(_ADPagination2.default, {
                                language: props.config.language,
                                isFirst: props.isFirst,
                                isLast: props.isLast,
                                pages: props.pages,
                                page_number: props.page_number,
                                previousPage: props.previousPage,
                                nextPage: props.nextPage,
                                goToPage: props.goToPage })
                        )
                    ) : null
                )
            )
        );
    } else {
        return null;
    }
}