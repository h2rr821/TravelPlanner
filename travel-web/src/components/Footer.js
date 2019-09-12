import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer bg-dark d-flex justify-content-center">
                <session className="layout-social py-3">

                    <a className="text-light px-2 mt-2 mb-2" href="https://twitter.com">
                        <i className="layout-icon fab fa-twitter"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://facebook.com">
                        <i className="layout-icon fab fa-facebook"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://linkedin.com">
                        <i className="layout-icon fab fa-linkedin"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://github.com">
                        <i className="layout-icon fab fa-github"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://plus.google.com">
                        <i className="layout-icon fab fa-google-plus"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://dribbble.com">
                        <i className="layout-icon fab fa-dribbble"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://www.flickr.com">
                        <i className="layout-icon fab fa-flickr"></i>
                    </a>
                    <a className="text-light px-2 mt-2 mb-2" href="https://www.youtube.com">
                        <i className="layout-icon fab fa-youtube"></i>
                    </a>

                </session>
            </footer>
        );
    }
}

export default Footer;