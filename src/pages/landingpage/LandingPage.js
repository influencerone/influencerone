import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style/Style.module.css";
import {
  header_img,influencer_img, brand_img,influencer_img2, influencer_img3,
  categories_img1, categories_img2,categories_img3, categories_img4,categories_img5,categories_img6,
   user_check_icon,trello_icon,compass_icon, send_icon, saly_img,mark_davidson_img, hanna_wilson_img, emily_img,
   thumb_icon,heart_icon,smiling_blogger_girl_img,
} from "../../asstes";

const testimonials = [
  {
    name: "Mark Davidson",
    position: "Marketing Executives",
    image: mark_davidson_img,
    iconImage: thumb_icon,
    animation: "fade-up",
    delay: "100",
    duration: "1000",
    easing: "linear",
  },
  {
    name: "Hanna Wilson",
    position: "Digital Marketer",
    image: hanna_wilson_img,
    iconImage: heart_icon,
    animation: "fade-up",
    delay: "200",
    duration: "2000",
    easing: "ease-in-sine",
  },
  {
    name: "Emily",
    position: "Digital Entrepreneur",
    image: emily_img,
    iconImage: thumb_icon,
    animation: "fade-up",
    delay: "300",
    duration: "3000",
    easing: "ease-in-back",
  },
];

const howItWorks = [
  {
    title: "Create account",
    bgColor: "blue",
    image: user_check_icon,
    iconImage: thumb_icon,
    animation: "fade-up",
  },
  {
    title: "Complete profile",
    image: trello_icon,
    iconImage: heart_icon,
    animation: "fade-up",
  },
  {
    title: "Find Brand",
    image: compass_icon,
    iconImage: thumb_icon,
    animation: "fade-down",
  },
  {
    title: "Collaborate",
    bgColor: "blue",
    image: send_icon,
    iconImage: thumb_icon,
    animation: "fade-down",
  },
];

const LandingPage = () => {
 

 

  return (
    <>
    

      <header>
        <Container>
          <Row data-aos="fade-up" data-aos-delay="300" data-aos-duration="3000">
            <Col md={6}>
              <h1>
                Find the perfect <b className={style.bold_text}>INFLUENCER </b>
                for your next campaign.
              </h1>
              <p>
  Discover and connect with talented influencers across
  various categories and niches to create powerful campaigns that
  drive engagement and sales.
</p>
              <a href="/FindInfluencerPage" 
                className={`${style.nav_login_btn} text-decoration-none text-light`}
                to="/FindInfluencerPage"
              >
                Find Your Influencer
              </a>
            </Col>
            <Col md={6}>
              <div className={style.header_img}>
                <img src={header_img} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* end Header Section */}

      {/* start social media Section */}

      <section className={style.social_media}>
       
      </section>

      {/* end social media Section */}

      {/* start discover Section */}

      <section className="my-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                {" "}
                <b className={style.bold_text}>Discover</b> and connect with
                desired influencer and agencies
              </h2>
              <div
                className="row  py-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="3000"
              >
                <div className={`${style.discover_sec} col-md-6  p-3 mb-5`}>
                  <img src={influencer_img} alt="#" />
                  <h5 className="pt-4">Unlease your influence</h5>
                  <p>
  "Join a curated network of brands and agencies seeking your
  unique perspective."
</p>
                  <button className={`${style.influencer_btn} mt-4`}>
                    Join as Influencer
                  </button>
                </div>
                <div className={`${style.brand_sec} col-md-6 p-3`}>
                  <img src={brand_img} alt="#" />
                  <h5 className="pt-4">collaborate with ease</h5>
                  <p>
  "Discover and connect with the best influencers and agencies
  to amplify your message."
</p>
                  <button className={`${style.brand_btn} mt-4`}>
                    Join as Brand
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className={style.discover_sec_img}
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="3000"
              >
                <img src={influencer_img2} alt="#" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* end discover Section */}

      {/* start unleash power Section */}

      <section className={`${style.unleash_power} my-5 py-5`}>
        <Container>
          <Row>
            <Col md={6}>
              <div
                className={`${style.unleash_power_img}`}
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="3000"
              >
                <img src={influencer_img3} alt="#" />
              </div>
            </Col>
            <Col md={6}>
              <div
                className={`${style.unleash_power_info} pt-5`}
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="3000"
              >
                <h2>
                  Unleash the power of influencer marketing with seamless 
                  connections.
                </h2>
                <p>
  One platform for influencers, agencies, and brands to discover
  like-minded partners and achieve measurable success.
</p>
{true && (
  <div>  {/* Use <div> or another appropriate element */}
    <p>
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a
      type specimen book.
    </p>
  </div>
)}

                <button
                  className={`${style.brand_btn} mt-4`}
                  onClick={() => true}
                >
                  {true ? "Back" : "Learn More"}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* end unleash power Section */}

      {/* start categories Section */}

      <section className={`${style.categories} my-5`}>
        <Container>
          <Row>
            <h2>Explore Categories</h2>
            <Col md={6}>
              <Row>
                <div
                  className={style.categories_img_sec1}
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-back"
                >
                  <img className="img" src={categories_img1} alt="#" />
                  <a href="/FindInfluencerPage"  alt='img'>Travel & Adventure</a>
                </div>
              </Row>

              <Row>
                <div className={style.categories_img_sec2}>
                  <div
                    className={style.categories_img_sec2_1}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-back"
                  >
                    <img className="" src={categories_img2} alt="#" />
                    <a href="/FindInfluencerPage"  alt='img'>Music & Dance</a>
                  </div>
                  <div
                    className={style.categories_img_sec2_2}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-back"
                  >
                    <img className="" src={categories_img3} alt="#" />
                    <a href="/FindInfluencerPage"  alt='img'>Food & Lifestyle</a>
                  </div>
                </div>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <div className={style.categories_img_sec2}>
                  <div
                    className={style.categories_img_sec2_1}
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-back"
                  >
                    <img className="" src={categories_img4} alt="#" />
                    <a href="/FindInfluencerPage"  alt='img'>Beauty & fashion</a>
                  </div>
                  <div
                    className={style.categories_img_sec2_2}
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-back"
                  >
                    <img className="" src={categories_img5} alt="#" />
                    <a href="/FindInfluencerPage"  alt='img'>fitness & Wellness</a>
                  </div>
                </div>
              </Row>

              <Row>
                <div
                  className={style.categories_img_sec1}
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-back"
                >
                  <img className="img" src={categories_img6} alt="#" />
                  <a href="/FindInfluencerPage"  alt='img'>Tech & Gaming</a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* end categories Section */}

      {/* start how It Work Section */}

      <section className="">
        <Container>
          <Row>
            <h2 className="shadow-sm mb-5 py-2 ">How It Works?</h2>
          </Row>
          <Row>
            <Col md={8}>
              <div className={style.howItWork_info}>
                {howItWorks.map((howItWork, index) => (
                  <div key={index}>
                    {howItWork.bgColor === "blue" ? (
                      <div
                        className={`${style.howItWork_info_box} border p-4`}
                        data-aos={howItWork.animation}
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        data-aos-easing="linear"
                      >
                        <img className="" src={howItWork.image} alt="#" />
                        <h5 className="py-4">{howItWork.title} </h5>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque{" "}
                        </p>
                      </div>
                    ) : (
                      <div
                        className={`${style.howItWork_info_box} border p-4`}
                        data-aos={howItWork.animation}
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        data-aos-easing="linear"
                      >
                        <img className="" src={howItWork.image} alt="#" />
                        <h5 className="py-4">{howItWork.title} </h5>

                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque{" "}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>
            <Col md={4}>
              <div className={style.howItWork_sec_2}>
                <div className="mx-auto w-100">
                  <img className="p-4" src={saly_img} alt="#" />
                </div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritat Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritat
                </p>
                {true && (
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                )}
                <button
                  className={style.show_btn}
                
                >
                  {true ? "Back " : "Show More"}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* end how It Work Section */}

      {/* start testimonial Section */}

      <section className={style.testimonial}>
        <Container>
          <Row>
            <div className="text-center py-5">
              <h2>We care about your opinion</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam{" "}
              </p>
            </div>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={4} key={index}>
                <div
                  className={`${style.testimonial_card} mt-3`}
                  data-aos={testimonial.animation}
                  data-aos-delay={testimonial.delay}
                  data-aos-duration={testimonial.duration}
                  data-aos-easing={testimonial.easing}
                >
                  <div className={style.testimonial_info}>
                    <div>
                      <img className="" src={testimonial.image} alt="#" />
                    </div>
                    <div className="px-2">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.position}</span>
                    </div>
                    <div>
                      <img className="" src={testimonial.iconImage} alt="#" />
                    </div>
                  </div>

                  <div>
                    <p className="pt-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque Sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem{" "}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* end testimonial Section */}

      {/* start footer Section */}

      <footer>
        <Container fluid>
          <Row className={style.footer_sec}>
            <Col md={4}>
              <div className={style.footer_img}>
                <img src={smiling_blogger_girl_img} alt="#" />
              </div>
            </Col>
            <Col md={4}>
              <ul className="p-5">
                <li>
                  <a href="/FindInfluencerPage" >Home</a>
                </li>
                <li>
                  <a href="/About">About Us</a>
                </li>
                <li>
                  <a href="/Blog">Blog</a>
                </li>
                <li>
                  <a href="/Brand">Brand </a>
                </li>
                <li>
                  <a href="/Influencer">Influencer</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className={`${style.footer_form} p-5`}>
                <h4>Newsletter</h4>
                <p>Subscribe our newsletter & get all latest news.</p>

                <form>
                  <input type="email" placeholder=" Your Mail" />
                  <button>Subscribe</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* end footer Section */}
    </>
  );
};

export default LandingPage;
