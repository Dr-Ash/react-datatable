import React from 'react';
import style from '../style';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function TableHeader(props){
    if(props.config.show_length_menu == true
        || props.config.show_filter == true
        || props.config.button.excel == true
        || props.config.button.csv == true
        || props.config.button.print == true){
        return (
            <div className="row table-head asrt-table-head" id={(props.id) ? props.id + "-table-head" : ""}>
                <Grid container>
                    <Grid item xs={6}>
                        {(props.config.show_filter) ? (
                            <div className="table_filter" style={style.table_filter}>
                                <TextField
                                    type="search"
                                    className="form-control"
                                    placeholder={props.config.language.filter}
                                    onChange={props.filterRecords}
                                    variant="outlined" size="small"
                                />
                            </div>
                        ) : null}
                    </Grid>
                    <Grid item xs={6}>

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
                    </Grid>

                </Grid>

            </div>
        );
    } else {
        return null;
    }
}