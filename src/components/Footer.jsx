import React from 'react'

function Footer() {
  return (
    <>
      <footer className='grid gap-3 p-3 py-5 md:grid-cols-4'>
      <section className="tickitz-footer">
        <img src="src/assets/footer/tickitz-blue.svg" alt="tickitz-blue"/>
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
            <img src="src/assets/footer/ebuid.svg" alt="ebuid" />
          </li>
          <li>
            <img src="src/assets/footer/cineone.svg" alt="cineone" />
          </li>
          <li>
            <img src="src/assets/footer/hiflix.svg" alt="hiflix" />
          </li>
        </div>
      </ul>
      <ul className="follow-footer">
        <h5>Follow Us</h5>
        <div className='flex gap-3 flex-wrap'>
          <li className='flex gap-1'>
            <img src="src/assets/footer/facebook-tickitz.svg" alt="facebook" />
            <span className='hidden md:block text-title-info-first'>Tickitz Cinema id</span>
          </li>
          <li className='flex gap-1'>
            <img src="src/assets/footer/instagram-tickitz.svg" alt="instagram" />
            <span className='hidden md:block text-title-info-first'>tickitz.id</span>
          </li>
          <li className='flex gap-1'>
            <img src="src/assets/footer/twitter-tickitz.svg" alt="twitter" />
            <span className='hidden md:block text-title-info-first'>tickitz.id</span>
          </li>
          <li className='flex gap-1'>
            <img src="src/assets/footer/youtube-tickitz.svg" alt="" />
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