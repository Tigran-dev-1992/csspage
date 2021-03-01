import React, { useState } from 'react'
import './css/index.css'
import './css/burger.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import logo from './image/logo.gif'
import tabImage from './image/tab__image.gif'



function App() {
  let [navShow, setNavShow] = useState(false)
  navShow ? document.body.classList.add("stop-scrolling") : document.body.classList.remove("stop-scrolling")
  return (
    <div className={`app ${navShow ? "active" : ""} `} >
      <div className="header">
        <header>
          <div className="navbar__col"></div>
          <div className="header__menu">
            <div className="sideContainer d-flex justify-content-between">
              <div className="header__logo"><img src={logo} alt="" /></div>
              <div className={`header__burger ${navShow ? "active" : ""}`} onClick={() => setNavShow(!navShow)}><span></span></div>
              <div className="header__nav  d-flex align-items-center">
                <nav className={`nav__menu ${navShow ? "active" : ""}`}>
                  <ul className="nav__items d-flex  justify-content-between">
                    <li className="nav__item">featueres</li>
                    <li className="nav__item">about</li>
                    <li className="nav__item">pricing</li>
                    <li className="nav__item">reviews</li>
                    <li className="nav__item">contact</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="header__content ">
          <div className="sideContainer">
            <div className="header__title">
              Insert your picture here
          </div>
            <div className="header__body d-flex justify-content-between ">
              <div className="header__block block1">
                <div className="block1__logo"><img src={logo} alt="" /></div>
                <div className="block1__title">
                  modern axure template for beautiful prototypes
              </div>
                <div className="block1__someText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro temporibus magnam saepe quas rem dolor dolore maiores soluta quibusdam vero illum, ipsa possimus dolorum quisquam!
              </div>
                <div className="block1__btn">
                  <button>download</button>
                </div>
              </div>
              <div className="header__block block2">
                <div className="block2__title">
                  try your <span>free</span> trial today
              </div>
                <div className="block2__form text-center">
                  <form >
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <button>get started</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__footer ">
          <div className="sideContainer footer d-flex justify-content-between">
            <div className="footer__info">
              <div className="footer__title">social media</div>
              <div className="footer__someText">
                Lorem ipsum dolor sit amet consectetur adipisicing adipisicing. Delectus eius ipsum ad?
             </div>
            </div>
            <div className="footer__icons d-flex justify-content-between">
              <i className="fa fa-facebook " aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-google-plus" aria-hidden="true"></i>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              <i className="fa fa-camera-retro" aria-hidden="true"></i>
              <i className="fa fa-rss" aria-hidden="true"></i>
              <i className="fa fa-vimeo" aria-hidden="true"></i>

            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__tab tab bg-light">
          <div className="sideContainer d-flex justify-content-between align-items-center">
            <div className="content__tab__block1">
              <div className="content__tab__yellow">tab1</div>
              <div className="content__tab__black">tab2</div>
              <div className="content__tab__black">tab3</div>
            </div>
            <div className="content__tab__block2 block2">
              <div className="block2__info">Tabs width soft transitioning efect.</div>
              <div className="block2__someText">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, dicta. Quis illum praesentium odio culpa aspernatur tempore
                est rerum nostrum distinctio minima, excepturi eveniet cupiditate,
                at laboriosam, possimus sed ea expedita.
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae velit corporis natus sed!</span>
              </div>
              <div className="block2__btn">
                <button>download</button>
              </div>
            </div>
            <div className="content__tab__block3"><img src={tabImage} alt="" /></div>
          </div>
        </div>
        <div className="content__sublist ">
          <div className="sideContainer d-flex justify-content-between align-items-center">
            <div className="content__sublist__block1">
              <img src="https://i.pinimg.com/originals/37/1d/b8/371db84b01a8b6ecc9add7131abba6dd.gif" alt="noImage" />
            </div>
            <div className="content__sublist__block2 sublist__block2">
              <div className="sublist__block2__title"
              >Sub list section
            </div>
              <div className="sublist__block2__describtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt similique soluta nesciunt similique soluta deserunt dolorum.
            </div>
              <div className="sublist__block2__body">
                <div className="sublist__block2__block d-flex ">
                  <div className="sublist__block2__icon">
                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  </div>
                  <div className="sublist__block2__block__body">
                    <div className="sublist__block2__block__name">Title</div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam est possimus eaque!
                  </div>
                </div>
                <div className="sublist__block2__block d-flex ">
                  <div className="sublist__block2__icon">
                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  </div>
                  <div className="sublist__block2__block__body">
                    <div className="sublist__block2__block__name">Title</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem enim itaque praesentium,
                    libero facere nobis labore.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content__standart standart bg-light">
          <div className="sideContainer d-flex justify-content-between ">
            <div className="standart__block1">
              <div className="standart__title">standart picture section</div>
              <div className="standart__info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis tempora, libero vero deleniti voluptatibus iusto sint
                error fugiat est consequatur commodi aspernatur ipsa saepe incidunt.
           <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque tenetur veniam.
           </span>
              </div>
            </div>
            <div className="standart__block2 text-right">
              <img src="https://i.pinimg.com/originals/91/6b/1c/916b1c0b9788ad87b9ccdfc71bbdadf3.gif" alt="picture" />
            </div>
          </div>
        </div>
        <div className="content__awesome awesome">
          <div className="sideContainer text-center">
            <div className="awesome__title">
              why this is awesome
            </div>
            <div className="awesome__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            <div className="awesome__body d-flex justify-content-between">
              <div className="awesome__body__block">
                <div className="awesome__block__icon">
                  <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                </div>
                <div className="awesome__block__title">
                  thoghtful design
                </div>
                <div className="awesome__block__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam aut porro recusandae sequi vel a sapiente!
                </div>
              </div>
              <div className="awesome__body__block">
                <div className="awesome__block__icon">
                  <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                </div>
                <div className="awesome__block__title">
                  well crafted
                </div>
                <div className="awesome__block__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam aut porro recusandae sequi vel a sapiente!
                </div>
              </div>
              <div className="awesome__body__block">
                <div className="awesome__block__icon">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                </div>
                <div className="awesome__block__title">
                  ease to costumize
                </div>
                <div className="awesome__block__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam aut porro recusandae sequi vel a sapiente!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content__prise prise text-center bg-light">
          <div className="sideContainer">
            <div className="prise__title">
              pricing options
          </div>
            <div className="prise__info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
            <div className="prise__body d-flex justify-content-between align-items-center">
              <div className="prise__body__block">
                <div className="prise__block__title">basic</div>
                <div className="prise__block__body ">
                  <div className="prise__block__info d-flex justify-content-center align-items-center">
                    <span className="dollar">$</span>
                    <span className="number__small">0</span>
                    <span className="number__big"></span>
                  </div>
                  <div className="prise__block__describtion">free for life</div>
                </div>
                <div className="prise__block__pop"></div>
                <div className="prise__block__footer">
                  <span>1 gb of prise</span>
                  <span>50 gb of bandwidth</span>
                  <span>12 websites</span>
                  <span>advenced costumisation</span>
                  <span>wordpress integration</span>
                  <span>emeil suport</span>
                </div>
              </div>
              <div className="prise__body__block ">
                <div className="prise__block__title">professional</div>
                <div className="prise__block__body">
                  <div className="prise__block__info d-flex justify-content-center">
                    <span className="dollar ">$</span>
                    <span className="number__small">1</span>
                    <span className="number__big">9</span>
                  </div>
                  <div className="prise__block__describtion">montely payment</div>
                </div>
                <div className="prise__block__pop">
                  our most popular
              </div>
                <div className="prise__block__footer">
                  <span>1 gb of prise</span>
                  <span>50 gb of bandwidth</span>
                  <span>12 websites</span>
                  <span>advenced costumisation</span>
                  <span>wordpress integration</span>
                  <span>emeil suport</span>
                </div>
              </div>
              <div className="prise__body__block">
                <div className="prise__block__title">enterprise</div>
                <div className="prise__block__body ">
                  <div className="prise__block__info d-flex justify-content-center">
                    <span className="dollar">$</span>
                    <span className="number__big">7</span>
                    <span className="number__small">0</span>
                  </div>
                  <div className="prise__block__describtion">montely payment</div>
                </div>
                <div className="prise__block__pop"></div>
                <div className="prise__block__footer">
                  <span>1 gb of prise</span>
                  <span>50 gb of bandwidth</span>
                  <span>12 websites</span>
                  <span>advenced costumisation</span>
                  <span>wordpress integration</span>
                  <span>emeil suport</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* costumers////////////////////// */}
        <div className="content__costumers costumers">
          <div className="sideContainer text-center">
            <div className="costumers__title">
              what our costumers are saying
            </div>
            <div className="costumers__info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div className="costumers__body d-flex justify-content-between">
              <div className="costumers__body__block">
                <div className="costumers__comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur porro
                  minima earum quisquam quibusdam magnam et recusandae fugit, enim error laboriosam.
                </div>
                <div className="costumers__user d-flex align-items-center justify-content-start">
                  <div className="costumers__photo">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <div className="costumers__data ">
                    <span>jeremi h.</span>
                      freelancer
                    </div>
                </div>
              </div>
              <div className="costumers__body__block">
                <div className="costumers__comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur porro
                  minima earum quisquam quibusdam magnam et recusandae fugit, enim error laboriosam.
                </div>
                <div className="costumers__user d-flex align-items-center justify-content-start">
                  <div className="costumers__photo">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <div className="costumers__data ">
                    <span>jhon s.</span>
                      manager
                    </div>
                </div>
              </div>
              <div className="costumers__body__block">
                <div className="costumers__comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur porro
                  minima earum quisquam quibusdam magnam et recusandae fugit, enim error laboriosam.
                </div>
                <div className="costumers__user d-flex align-items-center justify-content-start">
                  <div className="costumers__photo">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <div className="costumers__data ">
                    <span>susan g.</span>
                      photographer
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* costumers////////////////////// */}
        {/* design///////////////////////// */}
        <div className="content__design design text-center">
          <div className="sideContainer">
            <div className="design__title">stylish acture design</div>
            <div className="design__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores sunt corrupti odio illo vitae odit suscipit?</div>
            <div className="design__button">
              <button>download</button>
            </div>
            <div className="design__text">
              insert your picture here
          </div>
          </div>
        </div>
        {/* design///////////////////////// */}
        {/* contact/////////// */}
        <div className="content__contact contact">
          <div className="sideContainer text-center">
            <div className="contact__title">
              cuntact us
            </div>
            <div className="contact__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="contact__body">
              <div className="contact__form">
                <form action="">
                  <div className="contact__data d-flex justify-content-between ">
                    <div className="contact__inputs">
                      <input placeholder="name" type="text" />
                      <input placeholder="email" type="text" />
                      <input placeholder="subject" type="text" />
                    </div>
                    <div className="contact__message">
                      <textarea placeholder="message" />
                    </div>
                  </div>
                  <button>send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* contact/////////// */}
      </div>
      <footer className="text-center">
        <div className="social__icons">
          <i className="fa fa-facebook " aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          <i className="fa fa-camera-retro" aria-hidden="true"></i>
          <i className="fa fa-rss" aria-hidden="true"></i>
          <i className="fa fa-vimeo" aria-hidden="true"></i>
        </div>
        <div className="some__text">
          2015 axure themes
          </div>
      </footer>
    </div>
  );
}

export default App;
