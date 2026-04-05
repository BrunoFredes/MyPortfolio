import React from 'react'
import './mainPageComponent.css'
import profilePic from '../../assets/Profile_Pic.png'

const MainPageComponent: React.FC = () => {
  return (
    <div className='main-page'>
      

      <div className="izquierda  titulo">
        <h1>Welcome to my Portfolio!</h1> 
        <p>Hi, I'm Bruno, a passionate software developer with a love for creating innovative solutions. With a strong background in programming and a keen eye for detail, I specialize in building efficient and scalable applications. My portfolio showcases a diverse range of projects that highlight my skills in web development, mobile app development, and software engineering. I am dedicated to continuous learning and growth in the ever-evolving tech industry, and I am excited to share my work with you.</p>
      </div>
      <div className="derecha">
        <img src={profilePic} alt="Your Name" />
      </div>
      
    </div>
    
  )
}

export default MainPageComponent