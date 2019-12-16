import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Footer.css';
function Footer() {
    return (
        <footer class="page-footer font-small footerclass">
            <div class="footer-copyright text-right py-3 textalignfoot">Contact Us:&nbsp;
                <a href="mailto:anant@email.com">anant@email.com</a>
            &nbsp;&nbsp;
            Phone:&nbsp;
                <a href="">18001800</a>
            </div>       
        </footer>
    );
}
export default Footer;