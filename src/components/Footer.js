import React from "react"
 function Footer(){
    return(
        <>
        <footer>
        <div className="container">
            
            <div className="row">
                <div className="col-4">
                    <div className="footerhead">Social</div>
                    <a href="#">Facebook</a><br/>
                    <a href="#">Twitter</a><br/>
                    <a href="#">Youtube</a>
                </div>
                <div className="col-4">
                    <div className="footerhead">Help</div>
                    <a href="#">Payments</a><br/>
                    <a href="#">Shipping</a><br/>
                    <a href="#">Cancellation & returns</a>

                </div>
                <div className="col-4">
                    <div className="footerhead">About</div>
                    <a href="#">About Us</a><br/>
                    <a href="#">Contact Us</a><br/>
                    <a href="#">Careers</a>
                </div>

            </div>          
        </div>
        </footer>
        </>
    )
}

export default Footer