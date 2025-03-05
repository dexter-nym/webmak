import React from "react";
import "./SecondSection.css";
import WhiteArrowButton from "@/components/WhiteArrowButton/WhiteArrowButton";

function SecondSection() {
  return (
    <div className="section_home-case-studies">
      <img
        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fd0f285e3796a5b0452d6d_Background%20pattern.webp"
        loading="lazy"
        srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fd0f285e3796a5b0452d6d_Background%20pattern-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fd0f285e3796a5b0452d6d_Background%20pattern-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fd0f285e3796a5b0452d6d_Background%20pattern-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fd0f285e3796a5b0452d6d_Background%20pattern.webp 1440w"
        className="home-case-studies_dots"
      ></img>
      <div className="padding-global relative">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="max-width-case-study center">
              <div className="section-info-wrap case-study">
                <div className="fade-up bro">
                  <h2 className="section-info_primary-text">
                    Unveiling success{" "}
                    <span className="heading-text-italic">stories</span> 50+
                    brands thriving
                  </h2>
                </div>
                <div className="fade-in">
                  <p split-text="true" className="sub-title">
                    &nbsp;Explore our curated portfolio of diverse industries
                    from B2B Enterprises to D2C brands
                  </p>
                </div>
              </div>
            </div>
            <div
              className="fade-up"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;",
              }}
            >
              <div className="home-case-studies_tab-wrapper">
                <div
                  data-current=""
                  data-easing="ease"
                  data-duration-in="0"
                  data-duration-out="0"
                  className="home-case-studies_tabs w-tabs"
                >
                  <div className="home-case-studies_tabs-content w-tab-content">
                    <div
                      data-w-tab="Tab 1"
                      className="home-case-studies_tab-pane-wrap w-tab-pane"
                      id="w-tabs-0-data-w-pane-0"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-0"
                    >
                      <div
                        data-w-id="f759f6df-f0df-c5b0-875d-69dd22663e2b"
                        className="home-case_studies_tab-pane"
                      >
                        <video
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1%2F665090cb956a483503481d6e_richpanel-vid-transcode.mp4"
                          autoplay="true"
                          playsinline="true"
                          loop=""
                          muted=""
                          object-fit="cover"
                          id="video"
                          className="home-case_studies_image video-copy"
                          style={{ objectFit: "cover" }}
                        ></video>
                        <div
                          className="home-case-studies_overlay"
                          style={{ opacity: 0 }}
                        ></div>
                        <div
                          className="home-case-studies_detail-row"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="home-case-studies_detail-left">
                            <h3 className="home-case-studies_title">
                              Richpanel
                            </h3>
                            <div className="home-case-studies_detail-tag-wrapper">
                              <div className="home-case-studies_detail-tag">
                                Visual Design
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Webflow Development
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Revamp
                              </div>
                            </div>
                          </div>
                          <div className="home-case-studies_button">
                            <a href="#" className="button-link w-inline-block">
                              <div className="hide w-embed"></div>
                              <button
                                style={{ padding: "0.75rem 1.5rem" }}
                                type=""
                                className="secondary-button"
                              >
                                <div className="secondary-btn-text">
                                  Case Study coming soon
                                </div>
                                <div className="secondary-btn_wrap">
                                  <div className="secondary-btn_icon-wrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 2"
                      className="home-case-studies_tab-pane-wrap w-tab-pane"
                      id="w-tabs-0-data-w-pane-1"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-1"
                    >
                      <div
                        data-w-id="f759f6df-f0df-c5b0-875d-69dd22663e2b"
                        className="home-case_studies_tab-pane"
                      >
                        <video
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1%2F664e3eb5b90b01d1de412ccd_Saral%20Compressed%20Website_NoAudio-transcode.mp4"
                          autoplay="true"
                          playsinline="true"
                          loop=""
                          muted=""
                          object-fit="cover"
                          id="video"
                          className="home-case_studies_image video-copy"
                        ></video>
                        <div
                          className="home-case-studies_overlay"
                          style={{ opacity: "0" }}
                        ></div>
                        <div
                          className="home-case-studies_detail-row"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="home-case-studies_detail-left">
                            <h3 className="home-case-studies_title">SARAL</h3>
                            <div className="home-case-studies_detail-tag-wrapper">
                              <div className="home-case-studies_detail-tag">
                                Visual Design
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Webflow Development
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Revamp
                              </div>
                            </div>
                          </div>
                          <div className="home-case-studies_button">
                            <a
                              href="https://flowtrix.co/case-studies/saral"
                              target="_blank"
                              className="button-link w-inline-block"
                            >
                              <div className="hide w-embed"></div>
                              <button
                                style={{ padding: "0.75rem 1.5rem" }}
                                type=""
                                className="secondary-button"
                              >
                                <div className="secondary-btn-text">
                                  Read Case Study
                                </div>
                                <div className="secondary-btn_wrap">
                                  <div className="secondary-btn_icon-wrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 3"
                      className="home-case-studies_tab-pane-wrap w-tab-pane"
                      id="w-tabs-0-data-w-pane-2"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-2"
                    >
                      <div
                        data-w-id="f759f6df-f0df-c5b0-875d-69dd22663e2b"
                        className="home-case_studies_tab-pane"
                      >
                        <video
                          src="https://s3.amazonaws.com/webflow-prod-assets/65fb34308fabd933e87cbcb1/663d42d955701d51ad759f9a_Hyperverge-Flowtrix-promo.mp4"
                          autoplay="true"
                          playsinline="true"
                          loop=""
                          muted=""
                          object-fit="cover"
                          id="video"
                          className="home-case_studies_image video-copy"
                        ></video>
                        <div
                          className="home-case-studies_overlay"
                          style={{ opacity: 0 }}
                        ></div>
                        <div
                          className="home-case-studies_detail-row"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="home-case-studies_detail-left">
                            <h3 className="home-case-studies_title">
                              Hyperverge
                            </h3>
                            <div className="home-case-studies_detail-tag-wrapper">
                              <div className="home-case-studies_detail-tag">
                                Visual Design
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Webflow Development
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Revamp
                              </div>
                            </div>
                          </div>
                          <div className="home-case-studies_button">
                            <a href="#" className="button-link w-inline-block">
                              <div className="hide w-embed"></div>
                              <button
                                style={{ padding: "0.75rem 1.5rem" }}
                                type=""
                                className="secondary-button"
                              >
                                <div className="secondary-btn-text">
                                  Case Study coming soon
                                </div>
                                <div className="secondary-btn_wrap">
                                  <div className="secondary-btn_icon-wrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 4"
                      className="home-case-studies_tab-pane-wrap w-tab-pane"
                      id="w-tabs-0-data-w-pane-3"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-3"
                    >
                      <div
                        data-w-id="f759f6df-f0df-c5b0-875d-69dd22663e2b"
                        className="home-case_studies_tab-pane"
                      >
                        <video
                          src="https://s3.amazonaws.com/webflow-prod-assets/65fb34308fabd933e87cbcb1/663d481dc33beeb559ff6b6e_crux-flowtrix%20.mp4"
                          autoplay="true"
                          playsinline="true"
                          loop=""
                          muted=""
                          object-fit="cover"
                          id="video"
                          className="home-case_studies_image video-copy"
                        ></video>
                        <div
                          className="home-case-studies_overlay"
                          style={{ opacity: 0 }}
                        ></div>
                        <div
                          className="home-case-studies_detail-row"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="home-case-studies_detail-left">
                            <h3 className="home-case-studies_title">Crux</h3>
                            <div className="home-case-studies_detail-tag-wrapper">
                              <div className="home-case-studies_detail-tag">
                                Visual Design
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Webflow Development
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Revamp
                              </div>
                            </div>
                          </div>
                          <div className="home-case-studies_button">
                            <a href="#" className="button-link w-inline-block">
                              <div className="hide w-embed"></div>
                              <button
                                style={{ padding: "0.75rem 1.5rem" }}
                                type=""
                                className="secondary-button"
                              >
                                <div className="secondary-btn-text">
                                  Case Study coming soon
                                </div>
                                <div className="secondary-btn_wrap">
                                  <div className="secondary-btn_icon-wrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 5"
                      className="home-case-studies_tab-pane-wrap w-tab-pane w--tab-active"
                      id="w-tabs-0-data-w-pane-4"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-4"
                    >
                      <div
                        data-w-id="f759f6df-f0df-c5b0-875d-69dd22663e2b"
                        className="home-case_studies_tab-pane"
                      >
                        <video
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1%2F664df93e432027dfa3ac67c3_1_Zuddl__Zuddl-transcode.mp4"
                          autoplay="true"
                          playsinline="true"
                          loop=""
                          muted=""
                          object-fit="cover"
                          id="video"
                          className="home-case_studies_image video-copy"
                        ></video>
                        <div
                          className="home-case-studies_overlay"
                          style={{ opacity: 0 }}
                        ></div>
                        <div
                          className="home-case-studies_detail-row"
                          style={{
                            opacity: 0,
                            transform:
                              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="home-case-studies_detail-left">
                            <h3 className="home-case-studies_title">Zuddl</h3>
                            <div className="home-case-studies_detail-tag-wrapper">
                              <div className="home-case-studies_detail-tag">
                                Visual Design
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Webflow Development
                              </div>
                              <div className="home-case-studies_detail-tag">
                                Event Campaign
                              </div>
                            </div>
                          </div>
                          <div className="home-case-studies_button">
                            <a href="#" className="button-link w-inline-block">
                              <div className="hide w-embed"></div>
                              <button
                                style={{ padding: "0.75rem 1.5rem" }}
                                type=""
                                className="secondary-button"
                              >
                                <div className="secondary-btn-text">
                                  Case Study coming soon
                                </div>
                                <div className="secondary-btn_wrap">
                                  <div className="secondary-btn_icon-wrap">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      viewBox="0 0 20 12"
                                      fill="none"
                                      className="secondary-btn_icon"
                                    >
                                      <path
                                        d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="home-case-studies_tabs-menu w-tab-menu"
                    role="tablist"
                  >
                    <a
                      data-w-tab="Tab 1"
                      className="home-case-studies-tab w-inline-block w-tab-link"
                      id="w-tabs-0-data-w-tab-0"
                      href="#w-tabs-0-data-w-pane-0"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-0"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      <img
                        width="121"
                        height="24"
                        alt=""
                        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e456b73aeac5ef84af1_Richpanel_logo%201.svg"
                        loading="lazy"
                        className="home-case-studies_tab-image"
                      />
                    </a>
                    <a
                      data-w-tab="Tab 2"
                      className="home-case-studies-tab w-inline-block w-tab-link"
                      id="w-tabs-0-data-w-tab-1"
                      href="#w-tabs-0-data-w-pane-1"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-1"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      <img
                        width="121"
                        height="24"
                        alt="client-logo"
                        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                        loading="lazy"
                        className="home-case-studies_tab-image"
                      />
                    </a>
                    <a
                      data-w-tab="Tab 3"
                      className="home-case-studies-tab w-inline-block w-tab-link"
                      id="w-tabs-0-data-w-tab-2"
                      href="#w-tabs-0-data-w-pane-2"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-2"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      <img
                        width="128"
                        height="24"
                        alt=""
                        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                        loading="lazy"
                        className="home-case-studies_tab-image"
                      />
                    </a>
                    <a
                      data-w-tab="Tab 4"
                      className="home-case-studies-tab w-inline-block w-tab-link"
                      id="w-tabs-0-data-w-tab-3"
                      href="#w-tabs-0-data-w-pane-3"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-3"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      <img
                        width="121"
                        height="24"
                        alt=""
                        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45b1cd34867d86d425_Crux.svg"
                        loading="lazy"
                        className="home-case-studies_tab-image"
                      />
                    </a>
                    <a
                      data-w-tab="Tab 5"
                      className="home-case-studies-tab w-inline-block w-tab-link w--current"
                      id="w-tabs-0-data-w-tab-4"
                      href="#w-tabs-0-data-w-pane-4"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-4"
                      aria-selected="true"
                    >
                      <img
                        width="121"
                        height="24"
                        alt=""
                        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663d234deb1fc10989ff3018_Zuddl.svg"
                        loading="lazy"
                        className="home-case-studies_tab-image"
                      />
                    </a>
                  </div>
                  <div className="home-case-study_progress-bar-wrap">
                    <div className="home-case-study_progress-bar-back">
                      <div
                        className="home-case-study_progress-bar-color"
                        style={{
                          width: "11.959%",
                          height: "100px",
                          willChange: "width, height",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="fade-up"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            />
            <div className="home-case-studies-card-wrapper">
              <div className="home-case-studies_collection-wrap w-dyn-list">
                <div className="home-case-studies_grid grid w-dyn-items">
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="home-case-studies_item fade-up w-dyn-item">
                    <a
                      href="https://www.pepsales.ai/"
                      target="_blank"
                      className="home-case-studies_link"
                    >
                      <div className="project_card">
                        <div className="project_image-wrapper">
                          <div className="project_inner-image-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif"
                              alt="Screenshot of Website Hero"
                              className="project_image"
                            />
                          </div>
                        </div>
                        <div className="project_content">
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="project_tags w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Visual Design</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>Webflow</div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="collection-item w-dyn-item"
                              >
                                <div className="project_tag">
                                  <div>B2B</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project_bottom-wrap">
                            <h3 className="heading-style-h3 project-title">
                              Pepsales
                            </h3>
                            <div className="wrap-content">
                              <p className="text-size-medium problem_grid-content-pr">
                                $1.1M raised in seed funding
                              </p>
                              <div className="project_round-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 46 46"
                                  fill="none"
                                  className="project_icon"
                                >
                                  <path
                                    d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="home-case-studies_button-wrap">
                <a href="/case-studies" className="button-link w-inline-block">
                  <button className="white-button">
                    <div className="white-btn-wrap">
                      <div className="white-btn-text">
                        Read more case studies
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
