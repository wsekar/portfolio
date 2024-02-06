import React from 'react'

const HeaderSocials = () => {
  return (
 <div className="home__socials">
    <a href="https://www.instagram.com/wskinasih" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://www.github.com/wsekar" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-github"></i>
    </a>

    <a href="https://linkedin.com/in/wibiatisekarkinasih/" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="mailto:wibiatisk@gmail.com" className="home__social-link" target='_blank'>
    <i class="fa-regular fa-envelope"></i>
    </a>
 </div>
  )
}

export default HeaderSocials