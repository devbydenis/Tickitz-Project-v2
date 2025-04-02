import React from 'react'
import tickitz from '../assets/footer/tickitz-blue.svg'
import ebuid from '../assets/footer/ebuid.svg'
import cinenone from '../assets/footer/cineone.svg'
import hiflix from '../assets/footer/hiflix.svg'
import facebook from '../assets/footer/facebook-tickitz.svg'
import instagram from '../assets/footer/instagram-tickitz.svg'
import twitter from '../assets/footer/twitter-tickitz.svg'
import youtube from '../assets/footer/youtube-tickitz.svg'

function Footer() {
  return (
    <>
      <footer className='grid gap-3 p-3 py-5 md:grid-cols-4 md:mx-10'>
      <section className="tickitz-footer">
        <img src={tickitz} alt="tickitz-blue"/>
        <p className='font-normal text-title-info-first'>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </p>
      </section>
      <ul className="explore-footer md:justify-self-center">
        <h5 className='font-semibold text-lg'>Explore</h5>
        <div className='flex gap-x-3 flex-wrap text-title-info-second'>
          <li><a href="#">Cinemas</a></li>
          <li><a href="#">Movie List</a></li>
          <li><a href="#">My Ticket</a></li>
          <li><a href="#">Notification</a></li>
        </div>
      </ul>
      <ul className="sponsor-footer">
        <h5>Our Sponsor</h5>
        <div>
          <li>
            <img src={ebuid} alt="ebuid" />
          </li>
          <li>
            <img src={cinenone} alt="cineone" />
          </li>
          <li>
            <img src={hiflix} alt="hiflix" />
          </li>
        </div>
      </ul>
      <ul className="follow-footer">
        <h5>Follow Us</h5>
        <div className='flex gap-3 flex-wrap'>
          <li className='flex gap-1'>
            <img src={facebook} alt="facebook" />
            <span className='hidden md:block text-title-info-first'>Tickitz Cinema id</span>
          </li>
          <li className='flex gap-1'>
            <img src={instagram} alt="instagram" />
            <span className='hidden md:block text-title-info-first'>tickitz.id</span>
          </li>
          <li className='flex gap-1'>
            <img src={twitter} alt="twitter" />
            <span className='hidden md:block text-title-info-first'>tickitz.id</span>
          </li>
          <li className='flex gap-1'>
            <img src={youtube} alt="" />
            <span className='hidden md:block text-title-info-first'>Tickitz Cinema id</span>
          </li>
        </div>
      </ul>
      <p className="copyright-footer text-secondary sm:col-span-5 justify-self-center">&copy; 2020 Tickitz. All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer