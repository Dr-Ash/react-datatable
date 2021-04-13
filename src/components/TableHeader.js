import React from 'react';
import style from '../style';

export default function TableHeader(props){
    if(props.config.show_length_menu == true 
        || props.config.show_filter == true
        || props.config.button.excel == true
        || props.config.button.csv == true
        || props.config.button.print == true){
      return (
        <div className="row table-head asrt-table-head" id={(props.id) ? props.id + "-table-head" : ""}>
          <div className="col-md-6">

          </div>
          <div className="col-md-6 float-right text-right">
            {(props.config.show_filter) ? (
              <div className="table_filter" style={style.table_filter}>
                <input
                  type="search"
                  className="form-control"
                  placeholder={props.config.language.filter}
                  onChange={props.filterRecords} />
              </div>
            ) : null}
            <div className="table_tools" style={style.table_tool}>
              {(props.config.button.excel) ? (
                <button className="btn btn-primary buttons-excel"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to Excel"
                  style={style.table_tool_btn}
                  onClick={props.exportToExcel}>
                  <span>
                    <i className="fa fa-file-excel-o" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {(props.config.button.csv) ? (
                <button className="btn btn-primary buttons-csv"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to CSV"
                  style={style.table_tool_btn}
                  onClick={props.exportToCSV}>
                  <span>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {(props.config.button.print) ? (
                <button className="btn btn-primary buttons-pdf"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to PDF"
                  style={style.table_tool_btn}
                  onClick={props.exportToPDF}>
                  <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {(props.config.button.extra==true) ? (
                props.extraButtons.map((elem,index)=>{
                    elem.clickCount=0;
                    elem.singleClickTimer='';
                    return (
                        <button className={elem.className ? elem.className : "btn btn-primary buttons-pdf"}
                          tabIndex="0"
                          aria-controls="configuration_tbl"
                          title={elem.title?elem.title:"Export to PDF"}
                          style={style.table_tool_btn}
                          onClick={(event)=>{
                            elem.onClick(event);
                          }}
                          key={index}>
                            {elem.children}
                        </button>
                    )
                })
              ) : null}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
}