import { FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Fashion hub</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaYoutube className=' text-4xl'></FaYoutube>
                    <FaFacebookSquare className=' text-3xl'></FaFacebookSquare>
                    <FaXTwitter className=' text-3xl'></FaXTwitter>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Fashion and Apparel Ltd.</p>
            </aside>
        </footer>
    );
};

export default Footer;