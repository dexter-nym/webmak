import React from "react";
import "./SeventhSection.css";
import { useIntersection } from "@/hooks/useIntersection";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from 'react';
function SeventhSection() {
  useIntersection();
  useIntersection("fadeup");
  const swiperRef = useRef(null);

  // Functions to go to the next/previous slide
  const goToPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const goToNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <section id="reviews" className="section_testimonial">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large padding-bottom-testimonial">
            <div className="testimonail_heading">
              <div className="fadeup">
                <h2 className="section-info_primary-text">
                  What our clients think
                  <span className="heading-text-italic"> about</span>
                  our work
                </h2>
              </div>
            </div>
            <div className="fadeup">
              <div className="swiper-container">
                <Swiper
                  ref={swiperRef}
                  loop={true}
                  spaceBetween={50}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="testimonial_card">
                      <div className="testimonial_content">
                        <div className="testimonial_text w-richtext">
                          <p>
                            “Flowtrix blew away past Webflow devs. Fast,
                            meticulous, and top-notch quality. Our search ends
                            here! Highly recommended. 10/10🚀”
                          </p>
                        </div>
                        <div className="testimonial-details">
                          <div>
                            <p className="testimonial_client-name">
                              Barny Dillarstone
                            </p>
                            <div>
                              <p className="testimonial_designation">Founder</p>
                              <p className="testimonial_designation">, </p>
                              <p className="testimonial_designation">twio</p>
                            </div>
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/6639325af171809218bbf122_Vector.svg"
                            loading="lazy"
                            alt="Company Logo"
                            className="testimonial_company-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Add more SwiperSlide components for more testimonials */}
                  <SwiperSlide>
                    <div className="testimonial_card">
                      <div className="testimonial_content">
                        <div className="testimonial_text w-richtext">
                          <p>
                            “Incredible service! The team was efficient, and we
                            saw results in no time. Will definitely work
                            together again. Highly recommend.”
                          </p>
                        </div>
                        <div className="testimonial-details">
                          <div>
                            <p className="testimonial_client-name">Jane Doe</p>
                            <div>
                              <p className="testimonial_designation">CEO</p>
                              <p className="testimonial_designation">, </p>
                              <p className="testimonial_designation">
                                TechCorp
                              </p>
                            </div>
                          </div>
                          <img
                            src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/6639325af171809218bbf122_Vector.svg"
                            loading="lazy"
                            alt="Company Logo"
                            className="testimonial_company-logo"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="swiper-button-left" onClick={goToPrev}>
                  &lt; Prev
                </button>
                <button className="swiper-button-right" onClick={goToNext}>
                  Next &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fadeup">
        <div className="result-wraperr">
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-move-left"></div>
        </div>
      </div>
    </section>
  );
}
export default SeventhSection;
