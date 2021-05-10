import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Pagination extends React.Component {
  render() {
    return (
      <nav aria-label="Page navigation example" style={{ marginTop: 90 }}>
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => this.props.changePage("-")}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick = {() => this.props.changePageNum(this.props.startPage)}>
              {this.props.startPage}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick = {() => this.props.changePageNum(this.props.startPage+1)}>
              {this.props.startPage + 1}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick = {() => this.props.changePageNum(this.props.startPage)+2}>
              {this.props.startPage + 2}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => this.props.changePage("+")}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
