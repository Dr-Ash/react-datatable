import React from 'react';
import Pagination from './Pagination';
import ADPagination from './ADPagination';
import includes from 'lodash/includes';
import style from "../style";

export default function TableFooter(props){
    if(props.config.show_info==true || props.config.show_pagination==true){
      return (
        <div className="row table-foot asrt-table-foot" id={(props.id) ? props.id + "-table-foot" : ""}>
          <div className="col-md-6">
            {(props.config.show_info) ? props.paginationInfo : null}

              {(props.config.show_length_menu) ? (
                  <div className="input-group asrt-page-length">
                      <div className="input-group-addon input-group-prepend">
                  <span className="input-group-text" style={style.table_size}>
                    {(props.lengthMenuText[0]) ? props.lengthMenuText[0] : ''}
                  </span>
                      </div>
                      {(includes(props.config.language.length_menu, '_MENU_')) ? (
                          <select type="text" className="form-control" style={style.table_size_dropdown}
                                  onChange={props.changePageSize}>
                              {props.config.length_menu.map((value, key) => {
                                  return (<option key={value}>{value}</option>);
                              })}
                              <option value={props.recordLength}>All</option>
                          </select>
                      ) : null}
                      <div className="input-group-addon input-group-prepend">
                  <span className="input-group-text" style={style.table_size}>
                    {(props.lengthMenuText[1]) ? props.lengthMenuText[1] : ''}
                  </span>
                      </div>
                  </div>
              ) : null}
          </div>
          <div className="col-md-6 pull-right text-right">
            {(props.config.show_pagination) ? (
              <nav aria-label="Page navigation" className="pull-right">
                <ul className="pagination justify-content-end asrt-pagination">
                  {props.config.pagination == "basic" ? (
                    <Pagination
                      config={props.config}
                      isFirst={props.isFirst}
                      isLast={props.isLast}
                      pages={props.pages}
                      page_number={props.page_number}
                      is_temp_page={props.is_temp_page}
                      temp_page_number={props.temp_page_number}
                      previousPage={props.previousPage}
                      firstPage={props.firstPage}
                      nextPage={props.nextPage}
                      lastPage={props.lastPage}
                      goToPage={props.goToPage}
                      onPageChange={props.onPageChange}
                      onPageBlur={props.onPageBlur} />
                  ) : (
                  <ADPagination
                    language={props.config.language}
                    isFirst={props.isFirst}
                    isLast={props.isLast}
                    pages={props.pages}
                    page_number={props.page_number}
                    previousPage={props.previousPage}
                    nextPage={props.nextPage}
                    goToPage={props.goToPage}/>
                  )}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }