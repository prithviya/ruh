import React from 'react';
import About from '../img/about.png';
import SEO from '../img/seo.png';
import SMM from '../img/smm.png';
import SEM from '../img/sem.png';
import WEB from '../img/website.png';
import Geetha from '../img/profile/geetha.png'
// import 'react-carousel-responsive/dist/styles.css';
import Vino from '../img/profile/vino.png';
import Mehala from '../img/profile/meghala.png';
import Gowtham from '../img/profile/gowtham-bala.png';
import Saran from '../img/profile/saranya.png';
import Raj from '../img/profile/raj.png';
import AIC from '../img/New/aic.png';
import Anglo from '../img/New/anglofone.png';
import fluid from '../img/New/pumps.png';
function Home() {
  return (
    <div>
        <div className='custom-banner'>
            <div className='container'>
                <div className="row p-2">
                    <div className="col-md-7 col-sm-12 mt-5 mb-5">
                        <h1 className='text-uppercase custom-title'>About us</h1>
                        <p className='text-light custom-para mt-4'>Digital marketing is a huge platform that connect potential customers using digital communication and other forms. We also focus <i>on advertising a product, person, Content marketing , Influencer Marketing , Campaign Marketing , e- commerce Marketing , Social Media Marketing , Display advertising etc..</i></p>
                        <p className='text-light custom-para mt-4'>Digital Marketing is also called as “Online Marketing”.It leads the world to the next level of marketing .We have boundless system of channels while modern marketers just onboard their brands advertising online in order to achieve the vast of Digital Marketing.</p>
                    </div>
                    <div className="col-md-5 custom-align-center mt-3 d-none d-md-block d-lg-block d-xl-block">
                        <img src={ About } alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* services */}
        <div className='custom-service-banner' >
            <h1 className='custom-title text-uppercase text-center pt-5 pb-5'>Project</h1>
            <div className="container">
                <div class="row">
                    <div class = "col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12 pb-5">
                        <div class="card">
                            <div class="card-body">
                            
                            <div class="card-image">
                                <img src={WEB} alt="" width="100px" height="100px"/>
                            </div>
                            <h4 class="card-title">WEBSITE DEVELOPEMENT</h4>
                            </div>
                        </div>
                    </div>
                    <div class = "col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12 pb-5">
                        <div class="card">
                            <div class="card-body">
                            
                            <div class="card-image">
                                <img src={SEM} alt=""width="100px" height="100px" />
                            </div>
                            <h4 class="card-title text-uppercase">Search Engine Marketing</h4>
                            </div>
                        </div>
                    </div>
                    <div class = "col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12 pb-5">
                        <div class="card">
                            <div class="card-body">
                            
                            <div class="card-image">
                                <img src={SMM} alt="" width="100px" height='100px' />
                            </div>
                            <h4 class="card-title text-uppercase">Social Media Marketing</h4>
                            </div>
                        </div>
                    </div>
                    <div class = "col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12 pb-5">
                        <div class="card">
                            <div class="card-body">
                            
                            <div class="card-image">
                                <img src={SEO} alt="" width="100px" height="100px" />
                            </div>
                            <h4 class="card-title text-uppercase">Search Engine Optimization</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        {/* team */}
        <div className='custom-team-banner'>
            <div className='pt-5 pb-5'>
                <h1 className='custom-title text-uppercase text-center'>Our Team</h1>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Mehala</h2>
                                        <h4>DM Manager</h4>
                                    </div>
                                    <p class="text">
                                    monitoring the entire team that oversees a variety of digital marketing programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Vinothini</h2>
                                        <h4>DM Specialist</h4>
                                    </div>
                                    <p class="text">
                                    She who delivers marketing campaigns to assist the company's expansion and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Bala Murugan</h2>
                                        <h4>SEO Analyst</h4>
                                    </div>
                                    <p class="text">
                                    A Guy who oversees the Search Engine Optimization (SEO) activities and expert in google search. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Saranya</h2>
                                        <h4>DM Trainee</h4>
                                    </div>
                                    <p class="text">
                                    Maintains our social media presence and Collaborates with internal teams.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Raju</h2>
                                        <h4>Sr Web Developer</h4>
                                    </div>
                                    <p class="text">
                                    Prioritizing software projects, setting timelines and assigning tasks to team members.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="custom-team-card">
                                {/* <div class="img">
                                <img src={Geetha}/>
                                </div> */}
                                <div class="infos">
                                    <div class="name">
                                        <h2>Geetha</h2>
                                        <h4>Jr Web Developer</h4>
                                    </div>
                                    <p class="text">
                                    Creation of websites and updating existing web applications using scripting languages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* testimonal */}
        <div>
        <section class="testimonial text-center">
            <div class="container">

                <div class="heading white-heading">
                    
                    <h1 className='custom-title text-uppercase text-center'>Testimonial</h1>
                </div>
                <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
                
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="testimonial4_slide">
                                <img src={ AIC } className="img-circle img-responsive" />
                                <p>It felt like having an experienced team on our side which helped us develop our idea and our first investment .   </p>
                                <h4>AIC Raise</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimonial4_slide">
                                <img src={ Anglo } className="img-circle img-responsive" />
                                <p>We developed a great partnership with rankuhigher and their dedication to our websites evident in all aspects of our site.</p>
                                <h4>Anglofone</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="testimonial4_slide">
                                <img src={fluid} className="img-circle img-responsive" />
                                <p>Thanks to upflow, we are able to gain real- time visibility into our customer debt and follow up on unpaid invoices if necessary.</p>
                                <h4>Fluid Pumps</h4>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </section>
        </div>

    </div>
  )
}

export default Home