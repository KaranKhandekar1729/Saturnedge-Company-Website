import React from 'react';
import '../styles/products.css';
import stayebee from '../assets/stayebee.png';
import datingapp from '../assets/tinder.jpg';
import fileapp from '../assets/file-manager.png';
import vlc from '../assets/vlc.png';
import vpn from '../assets/vpn.png';
import cleaner from '../assets/cleaner.png';


const Products = () => {
    return (
        <div className='product-section'>
            <p>Our Products</p>
            <div className='cards'>
                <div className='card'>
                    <img src={stayebee} alt="stayebee app" />
                    <p>Stayebee</p>
                </div>
                <div className='card'>
                    <img src={fileapp} alt="file manager app icon" />
                    <p>File Manager App</p>
                </div>
                <div className='card'>
                    <img src={vlc} alt="video player app icon" />
                    <p>Video Player App</p>
                </div>
                <div className='card'>
                    <img src={vpn} alt="vpn app icon" />
                    <p>VPN App</p>
                </div>
                <div className='card'>
                    <img src={datingapp} alt="dating app icon" />
                    <p>Dating App</p>
                </div>
                <div className='card'>
                    <img src={cleaner} alt="cleaner app icon" />
                    <p>Cleaner App</p>
                </div>
                <p>And more...</p>
            </div>
        </div>
    )
}

export default Products