import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class SearchBar extends React.Component {
    render(){
        return(
          <div class="input-group">
          <div class="form-outline">
            <input id="search-focus" type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">Search</label>
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
        )
    }
}


