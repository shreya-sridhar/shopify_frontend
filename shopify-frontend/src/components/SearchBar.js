import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class SearchBar extends React.Component {
    render(){
        return(
            <div class="row mb-5">
            <div class="col-lg-12 mx-auto">
              <div class="bg-white p-5 rounded shadow">
                <form action="">
                  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div class="input-group">
                      <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light">
                          </input>
                      <div class="input-group-append">
                        <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}


