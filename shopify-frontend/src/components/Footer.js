import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends React.Component {
    render() {
        return ( 
            <footer className="footer" style={{width:"100vw"}}>
            <div className="container bottom_border">
            <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 className="headin5_amrc col_white_amrc pt2">About Me</h5>
     
            <p className="mb10">Contact:</p>
            <p><i className="fa fa-location-arrow"/> +1-513-291-0841 </p>
            <p><i className="fa fa-phone"/>  +1-513-307-6148  </p>
            <p><i className="fa fa fa-envelope"/> shreyamohak@outlook.com  </p>
            
            
            </div>
            
            
            <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="headin5_amrc col_white_amrc pt2">Shreya Sridhar</h5>
       
            <ul className="footer_ul_amrc">
            <li><a href="https://www.linkedin.com/in/shreyasridhariitb/"> <i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://shreyasridhar1109.medium.com/"> <i className="fab fa-medium"/> Medium</a></li>
            <li><a href="https://github.com/shreya-sridhar"><i className="fab fa-github-square"/> GitHub</a></li>
    
            </ul>
          
            </div>

            </div>
            </div>
            
            </footer>
        )
    }
}





