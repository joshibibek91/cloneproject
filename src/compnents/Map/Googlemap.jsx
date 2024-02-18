import React from 'react'
import "./stylemap.scss"

function Googlemap() {
    return (
        <>
            <div className="googlemap">
                <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6753507542523!2d85.345937!3d27.6755537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdc5cc71e9%3A0x49297d3a19f098c1!2sShades%20and%20Shadows%20Media%20Technologies!5e0!3m2!1sne!2snp!4v1708232201569!5m2!1sne!2snp"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

        </>
    )
}

export default Googlemap

