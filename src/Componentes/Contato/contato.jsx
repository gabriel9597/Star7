import React from 'react'
import "./contato.css"
import ImgContactForm from '../../Imagens/ImgContactform.jpg'
import {FaUser} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitSharp } from "react-icons/io5";

import {motion} from 'framer-motion';

import Header from '../Comp_Reut/Header/header';
import Footer from '../Comp_Reut/Footer/footer';

function Contato() {
    return (
           <div>
                 <Header />

                 <motion.section initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="heroS">
                    <div className="heroS-Cont">
                        <h1 className='heroS-Title'>Conte Conosco e Traga a sua Felicidade de Sorrir de Volta! </h1>
                        <p className='heroS-P'>Com os Melhores Profissionais, Equipamentos e Técnicas Disponíveis, Estamos Preparados para Garantir com Eficiência e Qualidade tudo o que Prometemos e Muito Mais para que a Beleza, Integridade e Utilidade de seus Dentes Retornem!</p>
                    </div>
                </motion.section>

                 <motion.section initial={{ opacity: 0, x: 250 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="contact-section">
                  <div className="contact-cont">
                    <div className="contact-form">
                        <form>
                            <h1>Contate-Nos</h1>
                            <div className="input-box">
                                <input type="text" name="Nome" required/>
                                <label for="">Nome</label>
                                <FaUser className='icon-form'/>              
                            </div>
                            <div className="input-box">
                                <input type="email" name="Email" required/>
                                <label for="">Email</label>
                                <MdEmail className='icon-form' />
                            </div>
                            <div className="input-box">
                                <input type="tel" name="Número para Contato" required/>
                                <label for="">Número</label>
                                <IoPhonePortraitSharp className='icon-form'/>
                            </div>

                            <button type="submit" className='ct-btn'>Enviar</button>
                        </form>
                    </div>

                    <div className="toggle-box">
                        <div className="toggle-panel">
                            <img src={ImgContactForm} className="tgp-img" alt="Dentistas Sorrindo"/>
                            <h1>Deixe em Nossas Mãos</h1>
                            <p>O Cuidado do seu Sorriso!</p>
                        </div>
                    </div>
                  </div>
                </motion.section>

                <Footer />
                
            </div>
    )
}


export default Contato