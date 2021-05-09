import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SearchBar extends React.Component {
  
  state = {
    movie: ""
  }

  handleChange = (e) => {
    e.preventDefault()
    let new_movie  = this.state.movie + e.nativeEvent.data
    this.setState({
      movie: new_movie
    })
  }

  render() {
    return (
      <div class="row mb-5" style={{ padding: 0, margin: 0 }}>
        <div class="col-lg-12 mx-auto" style={{ padding: 0, margin: 0 }}>
          <div class="p-5 " style={{ padding: 0, margin: 0 }}>
            <form action="" onSubmit={this.props.onSubmit}>
              <div
                class="p-1 rounded rounded-pill mb-4"
                style={{ padding: 0, margin: 0 }}
              >
                <div class="input-group" style={{ padding: 0, margin: 0 }}>
                  <input
                    type="search"
                    placeholder="Search Movie"
                    aria-describedby="button-addon1"
                    class="form-control border-0 bg-light"
                    value={this.state.value} onChange={this.handleChange}
                  ></input>
                  <input type="submit" value="Find" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



