import React, {useRef, useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./header.css"

import Logo from '../../../Imagens/Star7Logo.png';
import {FaBars, FaHouseChimney, FaPhone} from "react-icons/fa6";

import { FaTooth } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';



function Header() {

    const variantsLTRLogo2 = {
      hidden: { opacity: 0, x: -70 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2 }
        }
    }

    const variantsRTL2 = {
      hidden: { opacity: 0, x: 270},
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2}
        }
    }

    const variantsRTL2MenuIcon = {
      hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2}
        }
    }

    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    // Detecta scroll para animar
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 100) {
        setIsVisible(true);   // Mostra quando voltar ao topo
        } else {
        setIsVisible(false);  // Esconde quando desce
        }
    });

    const navItems = [
        { to: "/", label: "Início", icon: <FaHouseChimney className="Menu-icons" /> },
        { to: "/Tratamentos", label: "Tratamentos", icon: <FaTooth className="Menu-icons" /> },
        { to: "/Contato", label: "Contato", icon: <FaPhone className="Menu-icons" /> },
    ];


  return (
    <div>
        <header className='header w-100 d-flex align-items-center z-3'>
            <nav className="navbar navbar-expand-lg bg-transparent" aria-label="Offcanvas navbar large">
                <Link to="/" className='Link-Logo me-auto'><motion.img variants={variantsLTRLogo2} initial="hidden" animate={isVisible ? "visible" : "hidden"} className='Logo' src={Logo} alt="Logo"/></Link>
                
                <motion.button variants={variantsRTL2MenuIcon} initial="hidden" animate={isVisible ? "visible" : "hidden"} className='navbar-toggler ms-auto' type='button' data-bs-toggle="offcanvas" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-label="Toggle navigation" id="b-Menu">
                    <span role='button'>
                        <FaBars className='menu-icon' aria-hidden="true"/>
                    </span>
                </motion.button>

                <div className="offcanvas offcanvas-end backg-menu" tabIndex="-1" id="nav-principal" aria-labelledby="nav-principalLabel">
                    <div className="offcanvas-header">
                        <motion.img variants={variantsLTRLogo2} initial="hidden" animate={isVisible ? "visible" : "hidden"} className='M-Logo' src={Logo} alt="Menu-Logo"/>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><RiCloseLargeFill className='close-icon'/></button>
                    </div>

                    <div className="offcanvas-body">
                        {/*<motion.ul variants={variantsRTL2} initial="hidden" animate={isVisible ? "visible" : "hidden"} className="navbar-nav ms-auto">
                            <li className='nav-item'>
                                <Link to="/" className='nav-link I'><FaHouseChimney className='Menu-icons'/> Início</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/Tratamentos" className='nav-link S2'><FaTooth className='Menu-icons'/> Tratamentos</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/Contato" className='nav-link T'><FaPhone className='Menu-icons'/> Contato</Link>
                            </li>
                        </motion.ul>*/}

                        <motion.ul
                            variants={variantsRTL2}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            className="navbar-nav ms-auto"
                            >

                            {navItems.map((item) => (
                                <li key={item.to} className="nav-item">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                    `nav-link ${isActive ? "activeLink" : ""}`
                                    }
                                >
                                    {item.icon} {item.label}
                                </NavLink>
                                </li>
                            ))}

                        </motion.ul>


                        <button className='btn btn-M2'><Link to="/Contato" className="Sm-Link">Fale Conosco!</Link></button>

                        {/*<div className='footer-header'>
                                <h6>Fale Conosco Também por esses Meios:</h6>
                                <div className='fh-icons'>
                                    <a href="https://www.instagram.com/devs7x_institucional/" className='link-Rs'> <FaSquareInstagram className='footer-icons'/> </a>
                                    <a href="https://api.whatsapp.com/send?phone=5511982747281" className='link-Rs'> <FaSquareWhatsapp className='footer-icons'/> </a>
                                    <a href="mailto:gabrieldevs7x@gmail.com" className='link-Rs'><MdOutlineMail className='footer-icons'/></a>
                                </div>
                            </div>*/}
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header;