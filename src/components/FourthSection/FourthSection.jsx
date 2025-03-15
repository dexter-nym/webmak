import React from "react";
import "./FourthSection.css";
import WhiteArrowButton from "@/components/WhiteArrowButton/WhiteArrowButton";
import { useIntersection } from "@/hooks/useIntersection";

export default function FourthSection() {
  useIntersection();
  useIntersection("fadeup");

  return (
    <section id="services" className="section_solutions">
      <div className="solution_bg">
        <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66016f983e1756246a489a82_green-solution.webp"
          loading="lazy"
          sizes="100vw"
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66016f983e1756246a489a82_green-solution-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66016f983e1756246a489a82_green-solution-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66016f983e1756246a489a82_green-solution.webp 1175w"
          alt=""
          className="solution-bg-green"
        />
        <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line.webp"
          loading="lazy"
          sizes="100vw"
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line.webp 654w"
          alt=""
          className="section-curve-line"
        />
      </div>
      <div className="padding-global relative">
        <div className="container-large">
          <div className="padding-section-large relative">
            <div className="solutions_wrap">
              <div split-text="true" className="section-info-wrap">
                <div className="fadeup">
                  <h2 className="section-info_primary-text-light">
                    Tailored <span class="heading-text-italic">solutions</span>
                    for all&nbsp;your business needs
                  </h2>
                </div>
                <div className="fadeup">
                  <p className="sub-title">
                    From landing page design to enterprise-level web-apps
                  </p>
                </div>
              </div>
            </div>
            <div className="solutions_grid grid">
              <div
                data-w-id="c15babbd-3a3b-14e2-8695-d89faad91fcf"
                className="solutions_card-wrap column"
              >
                <div className="solutions_card-holder-wrap scaleup">
                  <div className="solutions_card-holder">
                    <div className="solutions_card">
                      <div className="solutions_card_bg">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600150452db2e4c0887fde8_webflow-lines.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 91vw, (max-width: 767px) 94vw, 100vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600150452db2e4c0887fde8_webflow-lines-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600150452db2e4c0887fde8_webflow-lines-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600150452db2e4c0887fde8_webflow-lines.webp 1136w"
                          alt=""
                          className="webflow-lines"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600143c112ed73f2596b6a7_green-shade-webflow.webp"
                          loading="lazy"
                          sizes="100vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600143c112ed73f2596b6a7_green-shade-webflow-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600143c112ed73f2596b6a7_green-shade-webflow-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600143c112ed73f2596b6a7_green-shade-webflow.webp 1038w"
                          alt=""
                          className="green-shade-webflow"
                        />
                      </div>
                      <div className="solutions_card-content">
                        <div className="solutions_card_top-content">
                          <h4 className="solutions_card_title">
                            Enterprise Webflow <br />
                            Development
                          </h4>
                          <div className="icon-text-wrapper">
                            <div className="icon-text-wrap">
                              <div className="icon-text_icon-wrap">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  className="icon-text_icon-svg"
                                >
                                  <path
                                    d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div className="icon-text_text">
                                Growth-Focused Strategies
                              </div>
                            </div>
                            <div className="icon-text-wrap">
                              <div className="icon-text_icon-wrap">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  className="icon-text_icon-svg"
                                >
                                  <path
                                    d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div className="icon-text_text">
                                Efficient Website Management
                              </div>
                            </div>
                            <div className="icon-text-wrap">
                              <div className="icon-text_icon-wrap">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  className="icon-text_icon-svg"
                                >
                                  <path
                                    d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div className="icon-text_text">
                                Seamless Data Migration Support
                              </div>
                            </div>
                            <div className="icon-text-wrap">
                              <div className="icon-text_icon-wrap">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  className="icon-text_icon-svg"
                                >
                                  <path
                                    d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                              <div className="icon-text_text">
                                Custom API Integration Solutions
                              </div>
                            </div>
                          </div>
                        </div>
                        <WhiteArrowButton txt="Book a call" />
                      </div>
                      <div className="solutions_card-content-image-wrap">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66000f0f58f2d3804787464a_navigator.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 40vw, (max-width: 767px) 38vw, (max-width: 991px) 21vw, 19vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66000f0f58f2d3804787464a_navigator-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66000f0f58f2d3804787464a_navigator.webp 502w"
                          alt=""
                          className="webflow-navigator"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66012032daeca4ae7591f4bb_dashboar-webflow-min.png"
                          loading="lazy"
                          sizes="(max-width: 479px) 91vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, 31vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66012032daeca4ae7591f4bb_dashboar-webflow-min-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66012032daeca4ae7591f4bb_dashboar-webflow-min-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66012032daeca4ae7591f4bb_dashboar-webflow-min.png 1453w"
                          alt=""
                          className="webflow-dashboard"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66000ed52a32edee7a0ac320_custom-attributes-Card.webp"
                          loading="lazy"
                          alt=""
                          className="webflow-attributes"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 110 36"
                          fill="none"
                          className="webflow-tag-svg"
                        >
                          <rect
                            y="0.5"
                            width="109.965"
                            height="34.5957"
                            rx="4.46685"
                            fill="currentColor"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M36 11.5L29.6181 23.8076H23.624L26.2946 18.7068H26.1749C23.9715 21.5285 20.6842 23.3861 16 23.8076V18.7774C16 18.7774 18.9964 18.6028 20.7579 16.7757H16V11.5001H21.3477V15.8392L21.4675 15.8387L23.6529 11.5001H27.6972V15.8116L27.817 15.8115L30.0842 11.5H36Z"
                            fill="currentColor"
                            className="path"
                          ></path>
                          <path
                            d="M42.0645 21.0596H47.4069V19.8506H43.5958V17.4442H46.4973V16.2929H43.5958V14.0362H47.2111V12.8272H42.0645V21.0596ZM48.6732 21.0596H50.0664V17.5133C50.0664 16.5577 50.6996 16.0741 51.4826 16.0741C52.3116 16.0741 52.68 16.4886 52.68 17.3982V21.0596H54.0732V17.2715C54.0732 15.6136 53.2211 14.9112 52.0122 14.9112C51.022 14.9112 50.3542 15.4063 50.0664 15.9935V15.0379H48.6732V21.0596ZM57.7276 21.1632C58.1536 21.1632 58.453 21.0941 58.6718 21.0135V19.9082C58.476 19.9888 58.2688 20.0233 57.9925 20.0233C57.5549 20.0233 57.3016 19.7815 57.3016 19.2519V16.0856H58.6257V15.0379H57.3016V13.7138H55.9085V15.0379H55.1025V16.0856H55.9085V19.3786C55.9085 20.5184 56.5302 21.1632 57.7276 21.1632ZM62.5765 21.1747C64.1194 21.1747 65.1441 20.4839 65.3398 19.2174H63.9927C63.8891 19.8046 63.4516 20.1385 62.611 20.1385C61.5748 20.1385 60.9991 19.4937 60.9531 18.3538H65.3628V17.9508C65.3628 15.7978 64.0157 14.9112 62.5189 14.9112C60.8034 14.9112 59.5254 16.1547 59.5254 18.0199V18.112C59.5254 20.0118 60.8034 21.1747 62.5765 21.1747ZM60.9761 17.4212C61.1143 16.4886 61.6784 15.9244 62.5189 15.9244C63.3825 15.9244 63.9121 16.385 63.9812 17.4212H60.9761ZM66.6072 21.0596H68.0004V17.9278C68.0004 16.6498 68.7373 16.2583 69.9577 16.2468V14.9458C68.9445 14.9573 68.3804 15.4063 68.0004 16.1662V15.0379H66.6072V21.0596ZM71.1836 23.1205H72.5767V20.1154C72.8991 20.7026 73.5899 21.1747 74.5456 21.1747C76.0999 21.1747 77.2168 20.0003 77.2168 18.066V17.9739C77.2168 16.028 76.0539 14.9112 74.5456 14.9112C73.659 14.9112 72.9106 15.4293 72.5767 16.005V15.0379H71.1836V23.1205ZM74.2002 20.0694C73.187 20.0694 72.5307 19.4361 72.5307 18.089V17.9969C72.5307 16.6613 73.2215 16.005 74.1887 16.005C75.0982 16.005 75.7891 16.6613 75.7891 17.9969V18.089C75.7891 19.3786 75.2249 20.0694 74.2002 20.0694ZM78.4696 21.0596H79.8628V17.9278C79.8628 16.6498 80.5996 16.2583 81.8201 16.2468V14.9458C80.8069 14.9573 80.2428 15.4063 79.8628 16.1662V15.0379H78.4696V21.0596ZM83.0807 21.0596H84.4738V15.0379H83.0807V21.0596ZM83.76 14.0477C84.2205 14.0477 84.589 13.7023 84.589 13.2532C84.589 12.7927 84.2205 12.4473 83.76 12.4473C83.2994 12.4473 82.931 12.7927 82.931 13.2532C82.931 13.7023 83.2994 14.0477 83.76 14.0477ZM88.2323 21.1747C89.7751 21.1747 90.6386 20.4724 90.6386 19.2519C90.6386 17.9739 89.7981 17.6285 88.3819 17.4097C87.4263 17.2485 87.1385 17.0758 87.1385 16.6383C87.1385 16.2123 87.4954 15.9244 88.0941 15.9244C88.7389 15.9244 89.0497 16.1777 89.1649 16.7304H90.4544C90.3047 15.3718 89.3261 14.9112 88.0941 14.9112C86.9657 14.9112 85.8374 15.5099 85.8374 16.7189C85.8374 17.8472 86.4246 18.2963 88.0135 18.5496C88.9001 18.6992 89.303 18.8835 89.303 19.3786C89.303 19.8852 88.9691 20.15 88.2207 20.15C87.4033 20.15 87.0924 19.793 87.0233 19.1828H85.7107C85.7683 20.4608 86.6779 21.1747 88.2323 21.1747ZM94.5089 21.1747C96.0518 21.1747 97.0765 20.4839 97.2722 19.2174H95.9251C95.8215 19.8046 95.384 20.1385 94.5435 20.1385C93.5072 20.1385 92.9315 19.4937 92.8855 18.3538H97.2952V17.9508C97.2952 15.7978 95.9481 14.9112 94.4513 14.9112C92.7358 14.9112 91.4578 16.1547 91.4578 18.0199V18.112C91.4578 20.0118 92.7358 21.1747 94.5089 21.1747ZM92.9085 17.4212C93.0467 16.4886 93.6108 15.9244 94.4513 15.9244C95.3149 15.9244 95.8445 16.385 95.9136 17.4212H92.9085Z"
                            fill="currentColor"
                            className="webflow-tag-text"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="solutions-card_ligh-wrap">
                      <div className="solutions-card_light-holder">
                        <div className="solutions-card_gradinet-light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="solutions_card-wrap column span-1">
                <div className="solutions_card-holder-wrap scaleup">
                  <div className="solutions_card-holder">
                    <div className="solutions_card verticle">
                      <div className="solutions_card-content webflow-shopify">
                        <div className="solutions_card_top-content">
                          <h4 className="solutions_card_title">
                            Get your Shopify store launched
                          </h4>
                          <div className="text-color-grey">
                            <p className="solutions_card_description">
                              Custom Shopify stores — We design &amp; build in
                              Webflow and publish in Shopify environment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="webflow-shopify_imp-wrap">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600395bd493d5a53ce5407e_webflow-shopify.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 29vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600395bd493d5a53ce5407e_webflow-shopify-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600395bd493d5a53ce5407e_webflow-shopify.webp 820w"
                          alt=""
                          className="solutions_card_shopify-img"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 94 95"
                          fill="none"
                          className="shopify-svg"
                        >
                          <g
                            filter="url(#filter0_di_2264_7537)"
                            className="webflow-shopify_circle"
                          >
                            <rect
                              x="14.7832"
                              y="3.32422"
                              width="64"
                              height="64"
                              rx="32"
                              fill="currentColor"
                              shape-rendering="crispEdges"
                              className="rect"
                            ></rect>
                            <rect
                              x="14.7832"
                              y="3.32422"
                              width="64"
                              height="64"
                              rx="32"
                              stroke="url(#paint0_linear_2264_7537)"
                              stroke-width="1.4"
                              shape-rendering="crispEdges"
                              className="rect-2"
                            ></rect>
                            <path
                              d="M58.0592 24.787C58.0356 24.6135 57.8854 24.5175 57.7613 24.5069C57.6373 24.4964 55.015 24.2998 55.015 24.2998C55.015 24.2998 53.1937 22.4706 52.9939 22.2681C52.7939 22.0657 52.4032 22.1273 52.2516 22.1725C52.2293 22.1791 51.8537 22.2964 51.2324 22.4909C50.624 20.7198 49.5503 19.0922 47.6614 19.0922C47.6093 19.0922 47.5556 19.0943 47.502 19.0974C46.9648 18.3787 46.2993 18.0664 45.7245 18.0664C41.3244 18.0664 39.2222 23.6313 38.5631 26.4592C36.8533 26.9952 35.6387 27.3763 35.4835 27.4256C34.5292 27.7285 34.499 27.7589 34.3737 28.6687C34.2794 29.3574 31.7822 48.8948 31.7822 48.8948L51.2405 52.5833L61.7836 50.2758C61.7836 50.2758 58.0825 24.9604 58.0592 24.787ZM50.157 22.8274L48.5104 23.343C48.5111 23.2256 48.5116 23.11 48.5116 22.9838C48.5116 21.883 48.3606 20.9968 48.1183 20.2941C49.0916 20.4177 49.7398 21.5381 50.157 22.8274ZM46.9109 20.5124C47.1816 21.1984 47.3575 22.1828 47.3575 23.5112C47.3575 23.5792 47.3569 23.6413 47.3563 23.7041C46.2856 24.0397 45.122 24.404 43.9559 24.7695C44.6107 22.213 45.838 20.9782 46.9109 20.5124ZM45.6037 19.2604C45.7936 19.2604 45.9849 19.3256 46.168 19.4532C44.7578 20.1245 43.2463 21.8153 42.608 25.1918L39.9201 26.0339C40.6677 23.4585 42.4432 19.2604 45.6037 19.2604Z"
                              fill="currentColor"
                              className="path-2"
                            ></path>
                            <path
                              d="M57.761 24.5061C57.6371 24.4957 55.0148 24.299 55.0148 24.299C55.0148 24.299 53.1935 22.4698 52.9937 22.2673C52.9188 22.192 52.8179 22.1534 52.7125 22.1367L51.2412 52.5822L61.7834 50.275C61.7834 50.275 58.0822 24.9597 58.059 24.7862C58.0354 24.6127 57.8851 24.5167 57.761 24.5061Z"
                              fill="currentColor"
                              className="path-3"
                            ></path>
                            <path
                              d="M47.6611 30.4002L46.3611 34.3124C46.3611 34.3124 45.2221 33.6974 43.8259 33.6974C41.779 33.6974 41.676 34.997 41.676 35.3244C41.676 37.1113 46.28 37.7959 46.28 41.9812C46.28 45.274 44.2156 47.3944 41.4321 47.3944C38.0919 47.3944 36.3838 45.2913 36.3838 45.2913L37.2781 42.3018C37.2781 42.3018 39.034 43.8268 40.5156 43.8268C41.4837 43.8268 41.8774 43.0556 41.8774 42.4922C41.8774 40.1615 38.1004 40.0575 38.1004 36.2276C38.1004 33.0041 40.3873 29.8848 45.0036 29.8848C46.7824 29.8848 47.6611 30.4002 47.6611 30.4002Z"
                              fill="currentColor"
                              className="path-4"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_di_2264_7537"
                              x="0.0830078"
                              y="0.625"
                              width="93.4004"
                              height="93.3984"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="12"></feOffset>
                              <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0583333 0 0 0 0 0.0578472 0 0 0 0 0.0578472 0 0 0 0.2 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2264_7537"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2264_7537"
                                result="shape"
                              ></feBlend>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="11"></feOffset>
                              <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0.08 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_2264_7537"
                              ></feBlend>
                            </filter>
                            <linearGradient
                              id="paint0_linear_2264_7537"
                              x1="46.7832"
                              y1="14.7143"
                              x2="46.7832"
                              y2="119.204"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1A2224"></stop>
                              <stop
                                offset="1"
                                stop-color="#1A2224"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 93 93"
                          fill="none"
                          className="webflow-svg"
                        >
                          <g filter="url(#filter0_di_2264_7533)">
                            <rect
                              x="14.5"
                              y="2.22656"
                              width="64"
                              height="64"
                              rx="32"
                              fill="currentColor"
                              shape-rendering="crispEdges"
                              className="rect-3"
                            ></rect>
                            <rect
                              x="15.2"
                              y="2.92656"
                              width="62.6"
                              height="62.6"
                              rx="31.3"
                              stroke="url(#paint0_linear_2264_7533)"
                              stroke-width="1.4"
                              shape-rendering="crispEdges"
                            ></rect>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M62.7501 24.2266L52.3795 44.2266H42.6391L46.9789 35.9377H46.7842C43.2038 40.523 37.8619 43.5416 30.25 44.2266V36.0524C30.25 36.0524 35.1192 35.7687 37.9817 32.7996H30.25V24.2267H38.94V31.2778L39.1346 31.277L42.686 24.2267H49.2581V31.2331L49.4527 31.2328L53.1369 24.2266H62.7501Z"
                              fill="url(#paint1_linear_2264_7533)"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_di_2264_7533"
                              x="0.5"
                              y="0.226562"
                              width="92"
                              height="92"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="12"></feOffset>
                              <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0583333 0 0 0 0 0.0578472 0 0 0 0 0.0578472 0 0 0 0.2 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2264_7533"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2264_7533"
                                result="shape"
                              ></feBlend>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="11"></feOffset>
                              <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0.12 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_2264_7533"
                              ></feBlend>
                            </filter>
                            <linearGradient
                              id="paint0_linear_2264_7533"
                              x1="46.5"
                              y1="13.6166"
                              x2="46.5"
                              y2="118.107"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1A2224"></stop>
                              <stop
                                offset="1"
                                stop-color="#1A2224"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_2264_7533"
                              x1="18.5772"
                              y1="46.5251"
                              x2="93.2907"
                              y2="17.3471"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#EEFFF8"></stop>
                              <stop
                                offset="1"
                                stop-color="#F2FFFA"
                                stop-opacity="0.62"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="solutions-card_ligh-wrap">
                      <div className="solutions-card_light-holder">
                        <div className="solutions-card_gradinet-light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="solutions_card-wrap column span-3">
                <div className="solutions_card-holder-wrap scaleup">
                  <div className="solutions_card-holder">
                    <div className="solutions_card mobile-verticle">
                      <div className="solutions_card_bg">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp.webp"
                          loading="lazy"
                          sizes="100vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp-p-1600.png 1600w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600889f58f2d38047e8345e_green-user-exp.webp 1740w"
                          alt=""
                          class="solutions_user-center_image"
                        />
                      </div>
                      <div className="solutions_card-content user-centric">
                        <div className="solutions_card_top-content">
                          <h4 className="solutions_card_title">
                            Crafting simple &amp; intuitive user-centric Figma
                            design
                          </h4>
                          <div className="text-color-grey">
                            <p className="solutions_card_description">
                              We design that aligns with your brand identity and
                              convert your visitors to paying customers.
                            </p>
                          </div>
                        </div>
                        <div class="icon-text-wrapper">
                          <div className="icon-text-wrap">
                            <div className="icon-text_icon-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 20 20"
                                fill="none"
                                class="icon-text_icon-svg"
                              >
                                <path
                                  d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="icon-text_text">
                              Brand-aligned, compelling design.
                            </div>
                          </div>
                          <div className="icon-text-wrap">
                            <div className="icon-text_icon-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="icon-text_icon-svg"
                              >
                                <path
                                  d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="icon-text_text">
                              Sleek, minimalist design aesthetic.
                            </div>
                          </div>
                          <div className="icon-text-wrap">
                            <div className="icon-text_icon-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="icon-text_icon-svg"
                              >
                                <path
                                  d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="icon-text_text">
                              Enterprise friendly &amp; responsive design.
                            </div>
                          </div>
                          <div className="icon-text-wrap">
                            <div className="icon-text_icon-wrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="icon-text_icon-svg"
                              >
                                <path
                                  d="M16.6932 9.99253H11.2102C10.493 9.99253 10.1345 9.126 10.6424 8.61803L17.261 1.9995C17.7689 1.49153 17.4104 0.625 16.6932 0.625H10.2689C10.9861 0.625 11.3446 1.49153 10.8367 1.9995L4.21813 8.61803C3.71016 9.126 4.06872 9.99253 4.78586 9.99253H10.2689C10.9861 9.99253 11.3446 10.8591 10.8367 11.367L3.06773 19.136C2.91833 19.2854 2.70916 19.375 2.5 19.375H8.9243C9.13347 19.375 9.34263 19.2854 9.49203 19.136L17.261 11.367C17.7689 10.874 17.4104 9.99253 16.6932 9.99253Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div className="icon-text_text">
                              Resonates with target users.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="solutions_card-content-user-centric tab-relative">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008ac8c553278771b4aa7f_color-panel.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_user-center_img color-panel"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008be9179511a669f7f60c_dashboard-panel.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 88vw, (max-width: 991px) 640px, 512px"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008be9179511a669f7f60c_dashboard-panel-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008be9179511a669f7f60c_dashboard-panel-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008be9179511a669f7f60c_dashboard-panel-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008be9179511a669f7f60c_dashboard-panel.webp 1184w"
                          alt=""
                          class="solutions_user-center_img main-dashbaord"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008d5ba7370d500b6f38f7_panel-icons.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_user-center_img icon-panel"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008d9bcabf8b360ca6f182_lottie-icon.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_user-center_img lottie-icons"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008e651d8abdeff9002741_animate.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_user-center_img animate-img"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008e27bfd894b77d2321ef_controls.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 73vw, 208px"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008e27bfd894b77d2321ef_controls-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66008e27bfd894b77d2321ef_controls.webp 665w"
                          alt=""
                          class="solutions_user-center_img controller-panel"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6601121afa335fc226cda859_Large.webp"
                          loading="lazy"
                          alt="figma icon"
                          className="solutions_user-center_img figma"
                        />
                      </div>
                    </div>
                    <div className="solutions-card_ligh-wrap">
                      <div className="solutions-card_light-holder">
                        <div className="solutions-card_gradinet-light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="solutions_card-wrap column span-1">
                <div className="solutions_card-holder-wrap scaleup">
                  <div className="solutions_card-holder">
                    <div className="solutions_card verticle">
                      <div className="solutions_card_bg">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a071caf91db80a7178be_revamp.webp"
                          loading="lazy"
                          sizes="100vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a071caf91db80a7178be_revamp-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a071caf91db80a7178be_revamp.webp 732w"
                          alt=""
                          className="solutions_revamp-blur"
                        />
                      </div>
                      <div className="solutions_card-content revamp">
                        <div className="solutions_card_top-content">
                          <h4 className="solutions_card_title">
                            Revamp to a brand new website!
                          </h4>
                          <div className="text-color-grey">
                            <p className="solutions_card_description">
                              Old wordpress site? — We re-designand build your
                              new site in Webflow
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="solutions_card-content-image-wrap _w-100">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66009ce42a32edee7a7d6a8f_revamp-img.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 29vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66009ce42a32edee7a7d6a8f_revamp-img-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66009ce42a32edee7a7d6a8f_revamp-img-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66009ce42a32edee7a7d6a8f_revamp-img-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66009ce42a32edee7a7d6a8f_revamp-img.webp 1230w"
                          alt=""
                          className="solutions_revamp-image"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 76 76"
                          fill="none"
                          className="wordpress-svg"
                        >
                          <g filter="url(#filter0_di_2338_7840)" class="g">
                            <rect
                              x="14.9434"
                              y="7.19727"
                              width="44"
                              height="44"
                              rx="22"
                              transform="rotate(-3.81135 14.9434 7.19727)"
                              fill="currentColor"
                              shape-rendering="crispEdges"
                              className="rect-4"
                            ></rect>
                            <g opacity="0.6" class="g-2">
                              <path
                                d="M22.6029 28.738C23.0184 34.9742 27.0014 40.122 32.4266 42.3258L23.5398 22.2353C22.7961 24.2529 22.4508 26.4539 22.6029 28.738Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M48.9398 26.1844C48.81 24.2373 48.0208 22.9355 47.3511 21.9259C46.466 20.6813 45.6442 19.6322 45.5578 18.3344C45.4613 16.8861 46.4699 15.4648 48.017 15.3617C48.0869 15.3571 48.1537 15.3614 48.222 15.3607C45.248 12.9795 41.4093 11.6604 37.3077 11.9336C31.8038 12.3003 27.1497 15.4469 24.6176 19.9119C24.988 19.8984 25.3368 19.8829 25.6327 19.8632C27.2806 19.7534 29.8181 19.3836 29.8181 19.3836C30.664 19.2769 30.8472 20.5177 30.0055 20.6746C30.0055 20.6746 29.1588 20.8319 28.2124 20.9449L35.0864 37.6281L37.8452 27.0578L34.9426 20.496C34.091 20.5027 33.2806 20.4558 33.2806 20.4558C32.4283 20.4626 32.4413 19.1579 33.2936 19.1514C33.2936 19.1514 35.9087 19.1781 37.4568 19.0749C39.1043 18.9652 41.6421 18.5953 41.6421 18.5953C42.4886 18.4886 42.6716 19.7293 41.8296 19.8863C41.8296 19.8863 40.981 20.0437 40.0364 20.1566L46.8581 36.7135L48.0796 31.3574C48.6156 29.1329 49.0296 27.5332 48.9398 26.1844Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M38.7249 29.0484L34.9131 43.0992C36.3521 43.4201 37.8598 43.5476 39.4064 43.4445C41.241 43.3223 42.9792 42.8879 44.5786 42.203C44.5318 42.1383 44.4887 42.0692 44.452 41.9934L38.7249 29.0484Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M51.6775 19.2082C51.7787 19.7056 51.853 20.2417 51.8916 20.8212C51.9981 22.42 51.8192 24.2371 51.0696 26.5442L47.1842 40.7788C51.686 37.7354 54.4983 32.451 54.1111 26.6388C53.9289 23.8996 53.0576 21.3705 51.6775 19.2082Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M37.1335 9.32343C27.0073 9.99802 19.3174 18.7853 19.992 28.9118C20.6667 39.0395 29.4543 46.7287 39.5804 46.0541C49.7063 45.3796 57.3974 36.5925 56.7227 26.4648C56.0478 16.3384 47.2593 8.64885 37.1335 9.32343ZM39.5243 45.2123C29.8625 45.856 21.4778 38.5184 20.8341 28.8557C20.1904 19.1936 27.5275 10.8092 37.1896 10.1655C46.8511 9.52189 55.2352 16.8589 55.8788 26.521C56.5226 36.1838 49.1858 44.5687 39.5243 45.2123Z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_di_2338_7840"
                              x="-0.45664"
                              y="-1.12656"
                              width="77.6271"
                              height="77.6262"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="10"></feOffset>
                              <feGaussianBlur stdDeviation="7.7"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0.12 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2338_7840"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2338_7840"
                                result="shape"
                              ></feBlend>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="12"></feOffset>
                              <feGaussianBlur stdDeviation="40"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_2338_7840"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 95 96"
                          fill="none"
                          className="revamp-webflow-svg"
                        >
                          <g filter="url(#filter0_di_2338_7847)" className="g-3">
                            <rect
                              x="17.0693"
                              y="4.86719"
                              width="64"
                              height="64"
                              rx="32"
                              transform="rotate(2.67174 17.0693 4.86719)"
                              fill="currentColor"
                              shape-rendering="crispEdges"
                            ></rect>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M64.2411 29.0931L52.9495 48.5879L43.2197 48.1339L47.9411 40.0563L47.7467 40.0473C43.9565 44.4607 38.4796 47.2269 30.8441 47.5564L31.2251 39.3911C31.2251 39.3911 36.1023 39.3346 39.1001 36.5023L31.3767 36.1419L31.7764 27.5783L40.4569 27.9834L40.1282 35.0268L40.3227 35.0351L44.1989 28.158L50.7638 28.4643L50.4372 35.4631L50.6316 35.4718L54.6384 28.645L64.2411 29.0931Z"
                              fill="currentColor"
                              className="path-5"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_di_2338_7847"
                              x="-1.31406"
                              y="-0.532812"
                              width="97.7141"
                              height="97.7141"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="10"></feOffset>
                              <feGaussianBlur stdDeviation="7.7"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0 0.0375 0 0 0 0.12 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2338_7847"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2338_7847"
                                result="shape"
                              ></feBlend>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              ></feColorMatrix>
                              <feOffset dy="12"></feOffset>
                              <feGaussianBlur stdDeviation="40"></feGaussianBlur>
                              <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0 0.883333 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_2338_7847"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="solutions-card_ligh-wrap">
                      <div className="solutions-card_light-holder">
                        <div className="solutions-card_gradinet-light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="solutions_card-wrap column">
                <div className="solutions_card-holder-wrap scaleup">
                  <div className="solutions_card-holder">
                    <div className="solutions_card verticle">
                      <div className="solutions_card_bg">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a4d07cc100ec6bf2cceb_wized-mask.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 61vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a4d07cc100ec6bf2cceb_wized-mask-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a4d07cc100ec6bf2cceb_wized-mask-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a4d07cc100ec6bf2cceb_wized-mask-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600a4d07cc100ec6bf2cceb_wized-mask.webp 1452w"
                          alt=""
                          className="solutions_wized-blur"
                        />
                      </div>
                      <div className="solutions_card-content padding-bottom-0">
                        <div className="solutions_card_top-content wized">
                          <h4 className="solutions_card_title">
                            Web-apps built with Wized
                          </h4>
                          <div className="text-color-grey">
                            <p className="solutions_card_description">
                              Powerful web apps that scale as your brand grows —
                              all built without code.
                            </p>
                          </div>
                          <div className="spacer-tiny"></div>
                          <WhiteArrowButton txt="Book a call" />
                        </div>
                      </div>
                      <div className="solutions_card-content-image-wrap _w-100">
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 61vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images-p-1600.png 1600w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6600aa28e9c8c82134ccb928_wized-images.webp 1921w"
                          alt=""
                          className="solutions_wized-img"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626c96fe07962dd61ebfe89_Graphics.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 90vw, 100vw"
                          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626c96fe07962dd61ebfe89_Graphics-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626c96fe07962dd61ebfe89_Graphics.webp 659w"
                          alt=""
                          className="solutions_wized-img-mobile"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626ceb6c5321e543cd40558_xano.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_wized-image-icons xano"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626cf06c1e7f32a6aa75b1b_wized.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_wized-image-icons wized"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6626cf47a2a709eb72810302_webflow.webp"
                          loading="lazy"
                          alt=""
                          className="solutions_wized-image-icons webflow"
                        />
                      </div>
                    </div>
                    <div className="solutions-card_ligh-wrap">
                      <div className="solutions-card_light-holder">
                        <div className="solutions-card_gradinet-light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/65fb343...6601caf._solution-bg.webp"
              loading="lazy"
              sizes="100vw"
              srcset="
                https://cdn.prod.website-files.com/65fb343...6601caf._solution-bg-p-500.png 500w, 
                https://cdn.prod.website-files.com/65fb343...6601caf._solution-bg-p-800.png 800w, 
                https://cdn.prod.website-files.com/65fb343...6601caf._solution-bg-p-1080.png 1080w, 
                https://cdn.prod.website-files.com/65fb343...6601caf._solution-bg.webp 1470w"
              alt=""
              className="solution_bg-noise"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
