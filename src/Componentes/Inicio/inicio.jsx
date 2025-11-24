import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import "./inicio.css"


import MainImg from '../../Imagens/star7imghero1.png';

import ConsultoryImg1 from "../../Imagens/imgoffice1.jpg";
import ConsultoryImg2 from "../../Imagens/imgoffice2.png";
import ConsultoryImg3 from "../../Imagens/imgoffice3.jpg";
import ConsultoryImg4 from "../../Imagens/imgoffice4.jpg";
import ConsultoryImg5 from "../../Imagens/imgoffice5.png";
import ImgService1 from "../../Imagens/imgservice1.png";
import ImgService2 from "../../Imagens/imgservice2.jpg";
import ImgService3 from "../../Imagens/imgservice3.png";
import ImgService4 from "../../Imagens/imgservice4.png";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa6";
import { IoPlayBack } from "react-icons/io5";
import {
    IoIosArrowBack,
    IoIosArrowForward
} from "react-icons/io";
import { BiHappyAlt } from "react-icons/bi";
import { RiShining2Fill } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { LuSquareArrowLeft, LuSquareArrowRight } from "react-icons/lu";
import TestImg1 from "../../Imagens/testimg1.jpg";
import TestImg2 from "../../Imagens/testimg2.jpg";
import TestImg3 from "../../Imagens/testimg3.jpg";
import TestImg4 from "../../Imagens/testimg4.jpg";

import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';

import Header from '../Comp_Reut/Header/header';
import Footer from '../Comp_Reut/Footer/footer';

function Inicio() {

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

    const variantsDTP = {
      hidden: { opacity: 0, y: 70 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1}
        }
    }

    const variantsLTR = {
        hidden: { opacity: 0, x: -150 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2}
        }
    }

    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 820) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    });

    const variantsLTRGPT = {
        initial: { x: -300, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        exit: { x: -300, opacity: 0, transition: { duration: 0.5 } }
    };

    const variantsRTLGPT = {
         initial: { x: 300, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        exit: { x: 300, opacity: 0, transition: { duration: 0.5 } }
    };

    useEffect(() => {
    const consulImgControlsCont = document.querySelector(".Consultory-Imgs-Controls");

    if (!consulImgControlsCont) {
        console.error("Consultory-Imgs-Controls not found!");
        return;
    }

    const previousBtn = consulImgControlsCont.querySelector(".Consultory-Imgs-Controls-Previous");
    const nextBtn = consulImgControlsCont.querySelector(".Consultory-Imgs-Controls-Next");

    if (!previousBtn || !nextBtn) {
        console.error("Navigation buttons not found!");
        return;
    }

    const consulImgContainer = document.querySelector(".Consultory-Imgs-Cont");
    const imgconsul = document.querySelectorAll(".img-consul");

    // Carousel Class Logic
    class Carousel {
        constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        }

        updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove(
            'img-consul-1',
            'img-consul-2',
            'img-consul-3',
            'img-consul-4',
            'img-consul-5'
            );
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`img-consul-${i + 1}`);
        });
        }

        setCurrentState(direction) {
        if (direction.classList.contains('Consultory-Imgs-Controls-Previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction.classList.contains('Consultory-Imgs-Controls-Next')) {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
        }

        useControls() {
        previousBtn.addEventListener("click", e => {
            e.preventDefault();
            this.setCurrentState(previousBtn);
        });

        nextBtn.addEventListener("click", e => {
            e.preventDefault();
            this.setCurrentState(nextBtn);
        });
      }
    }

    const exampleCarousel = new Carousel(consulImgContainer, imgconsul);
    exampleCarousel.updateGallery();
    exampleCarousel.useControls();

    }, []);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };


    const [activeService, setActiveService] = useState(1);

  return (
        <div className='overflow-y-hidden'>
            <Header />

            <section className="Hero d-flex align-items-center overflow-hidden">
                <motion.div
                    variants={variantsLTR}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className='Hero-Col-Left'
                >
                    <h1 className='overflow-y-hidden'>Seja Bem Vindo a Star7</h1>
                    <h3>Em Nosso Consultório nos Dedicaremos Para: </h3>
                    <p>Cuidarmos de seus Dentes e Mostrar ao Mundo O Quão Bonito seu Sorriso pode Ser!</p>

                    <div className="HBtn-Section">
                        <button className='btn btn-lg btn-A1'>
                            <Link className='S-Link' to="/Tratamentos">Veja nossos Serviços</Link>
                        </button>

                        <button className='btn btn-lg btn-A2'>
                            <Link className='C-Link' to="/Contato">Contate-Nos</Link>
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={variantsDTP}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className='Hero-Col-Right'
                >
                    <img
                        className="Main-Img overflow-hidden"
                        src={MainImg}
                        alt="Imagem do Banner Principal: de uma Dentista Feminina"
                    />
                </motion.div>
            </section>

            <motion.section variants={variantsDTP} initial="initial" whileInView="animate" className="Examples-Section">
                <div className="content-exps">
                    <div className="head-exps overflow-hidden text-center">
                        <h2 className='overflow-hidden'>Em Nosso Consultório Você Obterá:</h2>
                    </div>

                    <div className="CardEx-Items d-flex overflow-hidden">
                        <div className="Card d-flex"><IoPlayBack className='dt-card-icons'/><span className="Titles-Ex">Seu Sorriso de Volta</span></div>
                        <div className="Card d-flex"><RiShining2Fill className='dt-card-icons'/><span className="Titles-Ex">Dentes Branquinhos</span></div>
                        <div className="Card d-flex"><FaTooth className='dt-card-icons'/><span className="Titles-Ex">Zero Cáries e Tártaros</span></div>
                        <div className="Card d-flex"><BiHappyAlt className='dt-card-icons'/><span className="Titles-Ex">Alinhamento Dentário</span></div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={variantsTTD} initial="initial" whileInView="animate" className='Consultory-Imgs'>
                <div className="Consultory-Imgs-Controls">
                    <div className="Consultory-Imgs-Controls-Previous">
                        <LuSquareArrowLeft className='Consul-Img-Controls-left-icon'/>
                    </div>
                    <div className="Consultory-Imgs-Controls-Next">
                        <LuSquareArrowRight className='Consul-Img-Controls-right-icon'/>
                    </div>
                </div>
                <div className='Consultory-Imgs-Cont'>
                        <img src={ConsultoryImg4} alt="Imagem da Fachada da Clínica" className="img-consul img-consul-4" />
                        <img src={ConsultoryImg5} alt="Imagem da Seção de Espera" className="img-consul img-consul-5" />
                        <img src={ConsultoryImg1} alt="Imagem dos Corredores" className="img-consul img-consul-1" />
                        <img src={ConsultoryImg2} alt="Imagem de uma das Salas de Operações" className="img-consul img-consul-2" />            
                        <img src={ConsultoryImg3} alt="Imagem de uma das Salas de Operações" className="img-consul img-consul-3" /> 
                </div>
            </motion.section>

           <motion.section initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="services-exibition">
                <div className="S-Ex-Container">
                    <h2>Conheça Alguns de Nossos Serviços!</h2>
                    <div className="S-Ex-Content">
                    <div className="ops-Cont">
                      <div className="ops-Row">
                         <div className="ops-group">
                            <div className="ops-Wrapper wr-1">
                                <div className="ops-item">
                                    <button className="ops-button ops-b1" onClick={() => setActiveService(1)}>
                                    Tratamento Bucal
                                    </button>
                                </div>
                            </div>

                            <div className="ops-Wrapper wr-2">
                                <div className="ops-item">
                                    <button className="ops-button ops-b2" onClick={() => setActiveService(2)}>
                                    Limpeza nos Dentes
                                    </button>
                                </div>
                            </div>

                            <div className="ops-Wrapper wr-3">
                                <div className="ops-item">
                                    <button className="ops-button ops-b3" onClick={() => setActiveService(3)}>
                                    Clareamento Dental
                                    </button>
                                </div>
                            </div>

                            <div className="ops-Wrapper wr-4">
                                <div className="ops-item">
                                    <button className="ops-button ops-b4" onClick={() => setActiveService(4)}>
                                    Implante Dentário
                                    </button>
                                </div>
                            </div>

                            <div className="services-dropdown">
                                <div className="Option-Dropdown">
                                    <button className={`dropdown ${
                                            isActive ? "active" : "dropdown"
                                        }`}
                                        onClick={handleClick}>
                                            {activeService === 1 && (
                                                    <div className='d-flex'>
                                                        <h4 onClick={() => setActiveService(1)} className='items-active'>Tratamento Bucal</h4>
                                                        <span className="left-icon"></span>
                                                        <span className="right-icon"></span>
                                                    </div>
                                            )}

                                            {activeService === 2 && (
                                                    <div className='d-flex'>
                                                        <h4 onClick={() => setActiveService(2)} className='items-active2'>Limpeza nos Dentes</h4>
                                                        <span className="left-icon2"></span>
                                                        <span className="right-icon2"></span>
                                                    </div>
                                            )}

                                            {activeService === 3 && (
                                                    <div className='d-flex'>
                                                        <h4 onClick={() => setActiveService(3)} className='items-active3'>Clareamento Dental</h4>
                                                        <span className="left-icon3"></span>
                                                        <span className="right-icon3"></span>
                                                    </div>
                                            )}

                                            {activeService === 4 && (
                                                    <div className='d-flex'>
                                                        <h4 onClick={() => setActiveService(4)} className='items-active4'>Implante Dentário</h4>
                                                        <span className="left-icon4"></span>
                                                        <span className="right-icon4"></span>
                                                    </div>
                                            )}

                                            <div className="Services-Items">

                                                <div className={`items-av1 ${
                                                    activeService === 1 ? 'd-none' : "items-av1"
                                                }`}>
                                                    <h4 onClick={() => setActiveService(1)}>Tratamento Bucal</h4>
                                                </div>

                                                <div className={`items-av2 ${
                                                    activeService === 2 ? 'd-none' : "items-av2"
                                                }`}>
                                                    <h4 onClick={() => setActiveService(2)}>Limpeza nos Dentes</h4>
                                                </div>

                                                <div className={`items-av3 ${
                                                    activeService === 3 ? 'd-none' : "items-av3"
                                                }`}>
                                                    <h4 onClick={() => setActiveService(3)}>Clareamento Dental</h4>
                                                </div>

                                                <div className={`items-av4 ${
                                                    activeService === 4 ? 'd-none' : "items-av4"
                                                }`}>
                                                    <h4 onClick={() => setActiveService(4)}>Implante Dentário</h4>
                                                </div>
                                            </div>
                                     </button>
                                 </div>
                             </div>
                         </div>
                      </div>

                        {/* Conteúdo animado */}
                        <div className="ops-content-container">
                        <AnimatePresence mode="wait">
                            {activeService === 1 && (
                            <motion.div
                                key="service1"
                                className="service-item si-1"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <motion.div variants={variantsLTRGPT} className="Service-Left-Side">
                                <h3>Tratamento Bucal</h3>
                                <p>
                                    Aqui Conosco, seu Tratamento Bucal é Feito com Extremo Cuidado, Visando Garantir a Integridade
                                    de Seus Dentes e Gengivas, Tendo Junto com isso claro a Manutenção Correta de um de Seus Grandes Atributos: Seu Lindo
                                    Sorriso!
                                </p>
                                <button><Link className='SP-Link' to="/Tratamentos">Veja Mais!</Link></button>
                                </motion.div>
                                <motion.div variants={variantsRTLGPT} className="Service-Right-Side">
                                <img src={ImgService1} alt="Mulher Realizando Tratamento Bucal com uma Dentista" />
                                </motion.div>
                            </motion.div>
                            )}

                            {activeService === 2 && (
                            <motion.div
                                key="service2"
                                className="service-item si-2"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <motion.div variants={variantsLTRGPT} className="Service-Left-Side">
                                <h3>Limpeza nos Dentes</h3>
                                <p>
                                    Na Star7, A Limpeza de seus Dentes é feita com Equipamentos de Qualidade que Buscam Eliminar
                                    todo tipo de malefício que possam existir em seus dentes como: Cáries ou Tártaros, Para que você
                                    possa Voltar a ter Dentes Fortes, Saudáveis e Plenos em todas as suas Diversas Funções!
                                </p>
                                <button><Link className='SP-Link' to="/Tratamentos">Descubra!</Link></button>
                                </motion.div>
                                <motion.div variants={variantsRTLGPT} className="Service-Right-Side">
                                <img src={ImgService2} alt="Mulher Realizando Limpeza nos Dentes com um Dentista" />
                                </motion.div>
                            </motion.div>
                            )}

                            {activeService === 3 && (
                            <motion.div
                                key="service3"
                                className="service-item si-3"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <motion.div variants={variantsLTRGPT} className="Service-Left-Side">
                                <h3>Clareamento Dental</h3>
                                <p>
                                    Essa Nossa Especialidade é Adequada Para Todas as Idades e Para Todas as Pessoas que Almejam
                                    Melhorar a sua Aparência pois visa Trazer o Brilho Natural de seus Belos Dentes e a sua Vontade
                                    de Sorrir Novamente! Tudo isso Claro, Com um Preço que cabe no seu Bolso!
                                </p>
                                <button><Link className='SP-Link' to="/Tratamentos">Explore!</Link></button>
                                </motion.div>
                                <motion.div variants={variantsRTLGPT} className="Service-Right-Side">
                                <img src={ImgService3} alt="Homem Realizando Clareamento Dental com um Aparelho" />
                                </motion.div>
                            </motion.div>
                            )}

                            {activeService === 4 && (
                            <motion.div
                                key="service4"
                                className="service-item si-4"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <motion.div variants={variantsLTRGPT} className="Service-Left-Side">
                                <h3>Implante Dentário</h3>
                                <p>
                                    Está com Saudade de Saborear uma Boa Comida, Sorrir Abertamente e poder dar Risada junto com
                                    seus Familiares e Amigos? Então Venha até nós, aqui você Poderá colocar um Implante Dentário e
                                    Resolver todos esses Problemas de Forma Rápida, Prática e Ainda por Cima: Barata!
                                </p>
                                <button><Link className='SP-Link' to="/Tratamentos">Saiba Mais!</Link></button>
                                </motion.div>
                                <motion.div variants={variantsRTLGPT} className="Service-Right-Side">
                                <img src={ImgService4} alt="Homem Segurando e Analisando opções de Implantes Dentário" />
                                </motion.div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    </div>
                    </div>
                </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: 250 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className='Testimonials'>
                <div className='container mt-n5 pb-5 Testimonials-Slider overflow-hidden' id='H-Testimonials' style={{opacity: 1, transform: "none"}}>
                    <div className='Lines'>
                        <div id='T-Testimonials'>Depoimentos</div>
                    </div>

                    <div id='CarouselCaption' className='carousel slide'>
                        <div className='total'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="0" className='active' aria-current="true" aria-label='Slide 1'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="1" aria-label='Slide 2'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="2" aria-label='Slide 3'></button>
                                <button type="button" data-bs-target="#CarouselCaption" data-bs-slide-to="3" aria-label='Slide 4'></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">                                     
                                        <div className="thumbnail">
                                            <img src={TestImg1} alt='Imagem da Primeira Testemunha do nosso Trabalho: Rafaela Amorim'/>
                                        </div>

                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                A Clínica Odontológica da Star7 foi Muito Boa pra Mim, Pois foi lá Junto com Seus Bons Profissionais que Consegui Realizar o Meu Tratamento Bucal e Assim Começar a Curar Minha Gengiva que estava Precisando Mesmo Disso, Obrigado Star7 pela Ajuda em Resolver esse Problema!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            <div className="name">
                                                <h4>Alberto Rodrigues</h4>
                                                <p>Serviço Prestado: Tratamento Bucal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg2} alt='Imagem da Segunda Testemunha do nosso Trabalho: Nikolas Almeida'/>
                                        </div>

                                        <div className="aside">
                                            <p> 
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Essa Limpeza que os Dentistas da Star7 Fizeram foi Incrível, Pois me Ajudou a Eliminar Completamente Minhas Cáries, Retirou alguns Tártaros, Além de me Darem Conselhos sobre o que Fazer para eles não Retornarem! Estou Grata por isso, Recomendo!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Tatiana Barros</h4>
                                                <p>Serviço Prestado: Limpeza nos Dentes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg3} alt='Imagem da Terceira Testemunha do nosso Trabalho: Fernando Cruz' />
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Gostei Bastante de como os Profissionais da Star7 me Trataram e do Jeito que Fizeram meu Clareamento Dental, Buscando o Fazê-lo de Forma Técnica, Rápida e Higiênica, Além de todo o Procedimento ter Cabido no Meu Bolso, Agradeço a Eles por esse Serviço!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Leonardo Damasceno</h4>
                                                <p>Serviço Prestado: Clareamento Dental</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="wrapper d-flex align-itens-center overflow-hidden">
                                        <div className="thumbnail">
                                            <img src={TestImg4} alt='Imagem da Quarta Testemunha do nosso Trabalho: Priscila Almeida'/>
                                        </div>
                                        <div className="aside">
                                            <p>
                                                <FaQuoteLeft className='Testimonial-Icon'/>
                                                Por Causa da Star7 Finalmente Consegui Colocar Meu Implante Dentário, de Forma Super Fácil, Além de ter Sido Bastante Aconselhada sobre os Cuidados que Devo ter com Eles, Agora Meu Sorriso ficou Melhor Ainda, Resultado Aprovado!
                                                <FaQuoteRight className='Testimonial-Icon2'/>
                                            </p>
                                            
                                            
                                            <div className="name">
                                                <h4>Sayuma Nakato</h4>
                                                <p className='Esp'>Serviço Prestado: Implante Dentário</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Control-Prev-T">
                                <button className='carousel-control-prev' type='button' data-bs-target="#CarouselCaption" data-bs-slide="prev">
                                    <span role='button'>
                                        <IoIosArrowBack className='Testimonial-Icon-Left' aria-hidden="true"/>
                                    </span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                            </div>

                            <div className="Control-Next-T">
                                <button className='carousel-control-next' type='button' data-bs-target="#CarouselCaption"  data-bs-slide="next">
                                    <span role='button'>
                                        <IoIosArrowForward className='active Testimonial-Icon-Right' aria-hidden="true"/>
                                    </span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={variantsTTD} initial="initial" whileInView="animate" className="cta-section">
                <div className='cta-row d-flex'>
                    <div className='center-cta'>
                        <h2 className="Cta-Text">Veja Agora Mais Formas de como Podemos Melhorar o seu Lindo Sorriso ou Trazê-lo de Volta ao Ápice!</h2>
                        <button className='btn btn-lg btn-A2 d-flex mt-3 mx-auto'><Link className='C-Link' to="/Tratamentos">Conheça Nossos Serviços!</Link></button>
                    </div>
                </div>
            </motion.section>

            <Footer />

        </div>
  )
}

export default Inicio