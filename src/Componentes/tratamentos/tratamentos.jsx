import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import "./tratamentos.css"




import ImgTrt1 from "../../Imagens/imgtrt1.jpg";
import ImgTrt2 from "../../Imagens/imgtrt2.jpg";
import ImgTrt3 from "../../Imagens/imgtrt3.jpg";
import ImgTrt4 from "../../Imagens/imgtrt4.jpg";
import ImgCta1 from "../../Imagens/imgcta1.jpg"
import {motion} from 'framer-motion';

import Header from '../Comp_Reut/Header/header';
import Footer from "../Comp_Reut/Footer/footer";

function Tratamentos() {

    const variantsTTD = {
        initial: {
            y: -55,
            opacity: 0
            },
            animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.1
            }
        }
    }

    const variantsLTR = {
        initial: {
        x: -300,
        opacity: 0
        },
        animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
      }
    }


    const Mov2 = useRef();

    return (
        <div>
            <Header className='nav-link S2 active'/>

            <motion.section initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="heroS">
                <div className="heroS-Cont">
                    <h1 className='heroS-Title'>Nossos Tratamentos Visam Elevar Seus Dentes ao Seu Potencial Máximo! </h1>
                    <p className='heroS-P'>Aqui Nossos Trabalhos são Conduzidos com Extremo Cuidado e Profissionalismo, para Garantir que Todas as Técnicas Empregadas por Nós Deixem a Sua Saúde Bucal da Melhor Forma Possível Para que Assim O Brilho, A Beleza, A Utilidade ou Quaisquer Objetivos que Você Tenha ao se Juntar a Nós, Sejam Alcançados!</p>
                    <button className="btn btn-A3">
                        <Link className="C-Link "to="/Contato">Contate-Nos</Link>
                    </button>
                </div>
            </motion.section>

            <section className='treatments'>
                <div className="trt-cont">
                    <motion.h2 initial={{ opacity: 0, y: 250 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 2 }} className='trt-title'>Tratamentos Oferecidos</motion.h2>
                    <motion.h3 initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='trt-Subtitle'>Tratamento Bucal</motion.h3>
                    <motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="trt-div">
                        <div className="trt-image-div">
                            <img src={ImgTrt1} alt='Mulher Fazendo Tratamento Bucal'/>
                        </div>
                        <div className="trt-text-box">
                            <p>Nosso Tratamento Bucal é feito através de Práticas Especializadas, Adquiridas Através de Estudos e Trabalhos que Realizamos Durante toda nossa História que nos Levaram a Entender que ela deve ser realizada através do Tratamento de Gengivas para evitar Problemas como: Gengivite, Remoção de Dentes Quebrados, Restauração de Dentes Danificados para Evitar Cáries e Tártaros e Aconselhamentos para uma Melhor Escovação, Higiene com Fio Dental e Uso de Enxaguantes Bucais. Tudo Isso Voltado para Fazer o Melhor Cuidado da Saúde Bucal Possível</p>
                        </div>
                    </motion.div>

                    <hr className="hr"></hr>

                    <motion.h3 initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='trt-Subtitle'>Limpeza nos Dentes</motion.h3>
                    <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="trt-div2">
                        <div className="trt-text-box2">
                            <p>A Limpeza nos Dentes feita por nós visa a Elimnação Total de Qualquer tipo de Maleficios que Seus Dentes possam conter, sejam Eles Tártaros, Cáries Entre outros, sendo elas feitas pela Recomendação de Boas Técnicas de Limpeza, Com a Utilização de Equipamentos Precisos como Curetas Manuais para Raspagem de resíduos perto das Gengivas, Escovas de Robinson para Polimentos e Aparelhos de Limpeza a Laser, Para Garantir assim a sua Evolução Bucal</p>
                        </div>

                        <div className="trt-image-div">
                            <img src={ImgTrt2} alt='Mulher Fazendo Limpeza nos Dentes'/>
                        </div>
                    </motion.div>

                    <hr className="hr"></hr>

                    <motion.h3 initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='trt-Subtitle'>Clareamento Dental</motion.h3>
                    <motion.div initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="trt-div">
                        <div className="trt-image-div">
                            <img src={ImgTrt3} alt='Mulher Fazendo Clareamento Dental'/>
                        </div>
                        <div className="trt-text-box">
                            <p>O Clareamento Dental Conosco tem por Objetivo Retirar toda a Aparência "Amarela" que seus Dentes podem Conter e Retornar com sua Coloração Original, Através de Máquinas a Laser ou Led que Realizam esse processo ao Potencializar a Ação de Géis Clareadores em Seus Dentes, Tendo por Finalidade Tudo Isso o Retorno da Beleza Natural de seu Sorriso!</p>
                        </div>
                    </motion.div>

                    <hr className="hr"></hr>

                    <motion.h3 initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className='trt-Subtitle'>Implante Dentário</motion.h3> 
                    <motion.div initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 2 }} className="trt-div2">
                        <div className="trt-text-box2">
                            <p>A Clássica Aplicação de Implantes Dentários Com a Gente é Feita de Forma Tecnológica, Segura e com um Grande Ponto sendo focado, A Redução das Dores Durante esse Processo, Para que Ele Seja Realizado da Forma mais Indolor Possível e que Consiga Atingir a Meta de Trazer a sua Capacidade Mastigatória de Volta Além da sua Felicidade em Sorrir Novamente!</p>
                        </div>

                        <div className="trt-image-div">
                            <img src={ImgTrt4} alt='Dentista Mostrando Implante Dentário'/>
                        </div>
                    </motion.div>

                    <hr className="hr"></hr>
                </div>
            </section>

            <motion.section variants={variantsTTD} initial="initial" whileInView="animate" className="cta-section">
                <div className='cta-row d-flex'>
                    <div className='center-cta'>
                    <img src={ImgCta1} className='img-cta' alt='Dentista no Escritório'/>
                        <h2 className="Cta-Text2 mt-3">Contate-Nos, Valorize o Seu Sorriso!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Contato">Venha com a Gente!</Link></button>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
  }

export default Tratamentos;