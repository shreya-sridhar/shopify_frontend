import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Message extends React.Component {
  render() {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header ftco-degree-bg">
        <button type="button" class="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" class="ion-ios-close"></span>
        </button>
        </div>
        <div class="modal-body pt-md-0 pb-md-5 text-center">
        <h2>You've Got Mail!</h2>
        <div class="icon d-flex align-items-center justify-content-center">
        <img src="images/email.svg" alt="" class="img-fluid"></img>
        </div>
        <h4 class="mb-2">We sent confirmation link to:</h4>
        <h3>johndoe<span>@</span>gmail.com</h3>
        </div>
        </div>
        </div>
        </div>
        )
        }
        }