import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineLogin } from "react-icons/hi";
import { MdLogin, MdPadding } from "react-icons/md";
import {
  FiVideo,
  FiMessageCircle,
  FiMonitor,
  FiLock,
  FiClock 
} from "react-icons/fi";

const features = [
  {
    icon: <FiVideo />,
    title: "HD Video Calls",
    desc: "Crystal clear video quality for better face-to-face meetings."
  },
  {
    icon: <FiMessageCircle />,
    title: "Real-time Chat",
    desc: "Instant messaging to keep everyone in the loop."
  },
  {
    icon: <FiMonitor />,
    title: "Screen Sharing",
    desc: "Share your screen and present with ease."
  },
  {
    icon: <FiClock />,
    title: "Meeting History",
    desc: "Access your past meetings and keep track of your conversations."
  }
];




export default function LandingPage() {

    const router = useNavigate();

  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
                <h2>QuickMeet</h2>
            </div>
            <div className='navlist'>
                <p className='navLink' onClick={() => {
                        router("/2027")
                    }}>Join as Guest</p>
                
                <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                    <p className='navLink login'>
                        <MdLogin  />
                        Sign In
                    </p>
                </div>
                <p className='navLink register' onClick={() => {
                        router("/auth")

                    }}>Sign Up
                </p>
            </div>
        </nav>
        <div className='landingMainContainer'>
            <div>
                <h1>Distance Means Nothing When You're Connected.</h1>
                <p>Experience real-time conversations with <span className='quickmeet'>QuickMeet</span></p>
                <div role='button'>
                    <Link to={"/auth"}>Connect Now</Link>
                </div>
                
            </div>
            <div className='commImg'> 
                <img src="/CommunicationNew.png"  alt="" />
            </div>
        </div>

        <div className="featureSection">
        {
            features.map((item, index) => (
                <div className="featureCard" key={index}>

                    <div className="featureIcon">
                        {item.icon}
                    </div>

                    <div className="featureText">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>

                </div>
            ))
        }
        </div>

        <footer className="footer">
                <p>© 2026 Rahul Tak | All Rights Reserved.</p>
        </footer>
    </div>    
  )
}
