import react from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer"> 
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h2>LoanAptech</h2>
                    <p>Your trusted partner in loan applications.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/loan">loan products</a></li>
                        <li><a href="/apply">Apply Now </a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Contact Us</h3>
                    <p>123 Finance Street, Business District</p>
                    <p>Email: lamidiabdulhameedolawale@gmail.com</p>
                    <p>Phone: (234)9137632195</p>
                </div>
            </div>
            <div className="footer-contact">
                <h3>Support</h3>
                    <p><a href="/contact">Contact Us</a></p>
                    <p><a href="/privacy">Privacy Policy</a></p >
                    <p><a href="/terms">Terms of Service</a></p>            
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 Loan Application. All rights reserved.</p>
            <p>licensed by relevant financial authorities.</p>
        </div>
    </footer>
    );
}

export default Footer;