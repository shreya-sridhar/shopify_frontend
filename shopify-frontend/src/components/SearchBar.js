import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SearchBar extends React.Component {
  
  state = {
    movie: ""
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="row mb-5" style={{ padding: 0 }}>
        <h6 style={{fontWeight:"lighter",zIndex:90,top:250, position:"relative"}}>Nominate Now!</h6>
        <div className="col-lg-12 mx-auto" style={{ padding: 0, margin: 0 }}>
          <div className="p-5 " style={{ padding: 0, margin: 0 }}>
            <form action="" id="search-movie" onSubmit={this.onSubmit}>
              <div
                className="p-1 rounded rounded-pill mb-4"
                style={{ padding: 0, top:200, position:"relative" }}
              >
                <div className="input-group" style={{ padding: 0, margin: 0 }}>
                  <input
                    type="search"
                    placeholder="Search movie"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                    value={this.state.value} onChange={(e) => this.props.handleChange(e)}
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



