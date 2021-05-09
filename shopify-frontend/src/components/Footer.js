import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends React.Component {
    render() {
        return ( 
            <footer className="footer-99382" style={{backgroundColor:"#008060",padding:0}}>
            <div className="container">
            <div className="row">
            <div className="col-md-4 pr-md-5">
            <a href="#" className="footer-site-logo d-block mb-4">Colorlib</a>
            <p style={{fontSize:15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
            </div>
            <div className="col-md">
            <h5>Discover</h5>
            <ul className="list-unstyled nav-links" style={{fontSize:20}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <div className="col-md" style={{fontSize:20}}>
            <h5>About</h5>
            <ul className="list-unstyled nav-links">
            <li><a href="#">Clients</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Journal</a></li>
            </ul>
            </div>
            <div className="col-md" style={{fontSize:20}}>
            <h5>Help</h5>
            <ul className="list-unstyled nav-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Partners</a></li>
            </ul>
            </div>
            <div className="col-md">
            <h5>Follow Us</h5>
            <ul className="social list-unstyled">
            <li><a href="#" className="pl-0"><span className="icon-instagram"></span></a></li>
            <li><a href="#"><span className="icon-twitter"></span></a></li>
            <li><a href="#"><span className="icon-facebook"></span></a></li>
            <li><a href="#"><span className="icon-pinterest"></span></a></li>
            <li><a href="#"><span className="icon-dribbble"></span></a></li>
            </ul>
            </div>
            </div>
            <div className="row ">
            <div className="col-12 text-center">
            <div className="copyright mt-5 pt-5">
            <p><small>&copy; 2019&mdash;2020 All Rights Reserved.</small></p>
            </div>
            </div>
            </div>
            </div>
            </footer>
        )
    }
}





