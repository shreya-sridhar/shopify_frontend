import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class Alert extends React.Component {
    render() {
        debugger
        return ( 
        <div class="container" style={{zIndex:100,marginTop:150,position:"sticky"}}>
            <div class="alert alert-success alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true" onClick={()=> this.props.closeAlert()}>&times;</button>
           You can only submit 5 nominations! Delete a nomination from your existing nominations before adding a new one.
            </div>
        </div>
        )
   }
}



