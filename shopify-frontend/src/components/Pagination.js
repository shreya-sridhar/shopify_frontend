import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Pagination extends React.Component {
  render() {
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="google.com" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="google.com">1</a></li>
          <li className="page-item"><a className="page-link" href="google.com">2</a></li>
          <li className="page-item"><a className="page-link" href="google.com">3</a></li>
          <li className="page-item">
            <a className="page-link" href="google.com" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
