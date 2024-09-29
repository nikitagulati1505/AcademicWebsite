import React, { useState, useEffect } from 'react'
import '../styles/footer.css'

const Footer = () => {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div className={size > 500 ? "footer" : "smallFooter"}>
            <div className={size > 500 ? "contentFooter" : "smallContentFooter"}>
                Copyright © 2024 IIIT-Delhi. All rights reserved.
            </div>
            <div className="icons">

            </div>
        </div >
    )
}

export default Footer