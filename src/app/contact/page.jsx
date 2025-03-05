"use client";

import React, { useEffect } from "react";
import "./page.css";

function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (function (C, A, L) {
        let p = function (a, ar) {
          a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "project-enquiry", { origin: "https://cal.com" });

      Cal.ns["project-enquiry"]("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "himanshusahu/project-enquiry",
        layout: "month_view",
      });

      Cal.ns["project-enquiry"]("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#08CD77" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // MutationObserver to hide dynamically loaded watermark
      const observer = new MutationObserver(() => {
        const watermark = document.querySelector(".mb-6.mt-auto.pt-6");
        if (watermark) {
          watermark.style.display = "none";
          observer.disconnect(); // Stop observing once the watermark is hidden
        }
      });

      // Start observing the body for changes
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, []); // 👈 Runs only after the component mounts

  return (
    <div className="section_contact">
      <div className="casestudy_wrapper">
        <div className="container-large">
          <div className="hero-bg">
            <img
              src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light.webp"
              loading="lazy"
              sizes="(max-width: 1195px) 100vw, 1195px"
              srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light.webp 1195w"
              alt=""
              className="hero-bg_gradient-lines animation"
            />
            <img
              src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile.webp"
              loading="lazy"
              sizes="100vw"
              srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile.webp 1213w"
              alt=""
              className="hero-bg_gradient-lines-mobile animation"
            />
            <img
              src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/678a9767de8c2771331bb83f_Frame%202147223231%20(1).png"
              loading="lazy"
              sizes="100vw"
              srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/678a9767de8c2771331bb83f_Frame%202147223231%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/678a9767de8c2771331bb83f_Frame%202147223231%20(1).png 1440w"
              alt=""
              className="contact_desktop-bg"
            />
          </div>
          <h2 className="heading-style-h2 is-contact-page-hero-heading">
            Ready to jump into <br />
            your project?
            <br />
          </h2>
          <div className="contact_sub-title-wrapper">
            <div split-text="" className="contact_sub-title-one">
              Let's bring your vision to life with expert design and development
            </div>
            <div className="contact_sub-title-two-wrapper">
              <div className="contact_sub-title-two is-green">
                100+ Success Stories
              </div>
              <div className="contact_sub-title-two">and Counting!</div>
            </div>
          </div>
          <div className="contact_brands-wrapper">
            <div className="contact_brand-wrap"></div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0f68431bc8ed21d6390_Skuad.svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/67895d08454d1432c144e801_logoSaral.svg"
                loading="lazy"
                width="Auto"
                alt=""
                className="contact_brand crux"
              />
            </div>
            <div className="contact_brand-wrap"></div>
          </div>
        </div>
      </div>
      <div className="works-brands_wrapper contact">
        <div className="works-brands_inner-wrapper">
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ad2bad33ba54db7116_3Fundle.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ad2bad33ba54db7116_3Fundle.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ae737d6e84f6252073_1S1aral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ae737d6e84f6252073_1S1aral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45b1cd34867d86d425_Crux.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45b1cd34867d86d425_Crux.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper hide-desktop">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section_layout508">
        <div className="padding-global">
          <div className="container-large">
            <div
              data-duration-in="400"
              data-duration-out="200"
              data-current="Tab 2"
              data-easing="ease"
              className="layout508_tabs w-tabs"
            >
              <div
                id="w-node-ec71896f-483f-519b-aa5e-8892de7d020c-dd6fb6e0"
                className="layout508_tabs-menu w-tab-menu"
                role="tablist"
              >
                <a
                  data-w-tab="Tab 1"
                  className="layout508_tab-link w-inline-block w-tab-link"
                  tabindex="-1"
                  id="w-tabs-0-data-w-tab-0"
                  href="#w-tabs-0-data-w-pane-0"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-0"
                  aria-selected="false"
                >
                  <div>Request Quote</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon-1x1-xmedium mobile"
                  >
                    <path
                      d="M8 8H16M16 8V16M16 8L8 16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                      stroke="white"
                      stroke-opacity="0.8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="layout508_tab-link w-inline-block w-tab-link w--current"
                  id="w-tabs-0-data-w-tab-1"
                  href="#w-tabs-0-data-w-pane-1"
                  role="tab"
                  aria-controls="w-tabs-0-data-w-pane-1"
                  aria-selected="true"
                >
                  <div>Schedule a call</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon-1x1-xmedium mobile"
                  >
                    <path
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 6.6001V12.0001L15.6 13.8001"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="layout508_tabs-content w-tab-content">
                <div
                  data-w-tab="Tab 1"
                  className="layout508_tab-pane w-tab-pane"
                  id="w-tabs-0-data-w-pane-0"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-0"
                >
                  <div className="layout508_card">
                    <div className="casestudy_form contact">
                      <div className="casestudy_form-block w-form">
                        <form
                          id="wf-form-contact-form-new"
                          name="wf-form-contact-form-new"
                          data-name="contact-form-new"
                          method="get"
                          className="form"
                          data-wf-page-id="6639615d7b832acadd6fb6e0"
                          data-wf-element-id="ec71896f-483f-519b-aa5e-8892de7d021d"
                          data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                          aria-label="contact-form-new"
                        >
                          <div className="casestudy_form-group-row is_grid">
                            <div className="casestudy_form-group">
                              <label
                                for="Name-3"
                                className="casestudy_form-label"
                              >
                                Full name*
                              </label>
                              <input
                                className="casestudy_form-input w-input"
                                autofocus="true"
                                maxlength="256"
                                name="Name"
                                data-name="Name"
                                placeholder=""
                                type="text"
                                id="Name-3"
                                required=""
                              />
                            </div>
                            <div className="casestudy_form-group">
                              <label
                                for="Email-3"
                                className="casestudy_form-label"
                              >
                                Business Email*
                              </label>
                              <input
                                className="casestudy_form-input w-input"
                                maxlength="256"
                                name="Email"
                                data-name="Email"
                                placeholder=""
                                type="email"
                                id="Email-3"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="casestudy_form-group">
                            <label
                              for="Project-Brief-3"
                              className="casestudy_form-label"
                            >
                              Tell us about your project
                            </label>
                            <textarea
                              id="Project-Brief-3"
                              name="Project-Brief"
                              maxlength="5000"
                              data-name="Project Brief"
                              placeholder=""
                              className="casestudy_form-input is_textarea w-input"
                            ></textarea>
                          </div>
                          <div className="casestudy_form-group">
                            <label
                              for="Website-Link-3"
                              className="casestudy_form-label"
                            >
                              Enter website link
                            </label>
                            <input
                              className="casestudy_form-input w-input"
                              maxlength="256"
                              name="Website-Link"
                              data-name="Website Link"
                              placeholder=""
                              type="text"
                              id="Website-Link-3"
                            />
                          </div>
                          <div className="casestudy_form-group">
                            <label for="field" className="casestudy_form-label">
                              Your budget*
                            </label>
                            <div className="fs_selectcustom-1_component">
                              <div
                                data-delay="0"
                                data-hover="false"
                                fs-selectcustom-element="dropdown"
                                className="fs_selectcustom-1_dropdown w-dropdown"
                              >
                                <div
                                  className="fs_selectcustom-1_toggle w-dropdown-toggle"
                                  id="w-dropdown-toggle-0"
                                  aria-controls="w-dropdown-list-0"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  role="button"
                                  tabindex="0"
                                >
                                  <div className="fs_selectcustom-1_text">
                                    Select your budget
                                  </div>
                                  <div className="dropdown-form-arrow w-embed">
                                    <svg
                                      width="100%"
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        opacity="0.8"
                                        d="M6 9.5L12 15.5L18 9.5"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <nav
                                  className="fs_selectcustom-1_list w-dropdown-list"
                                  id="w-dropdown-list-0"
                                  aria-labelledby="w-dropdown-toggle-0"
                                  role="listbox"
                                  aria-multiselectable="false"
                                >
                                  <div className="dropdown-list">
                                    <a
                                      href="#"
                                      className="fs_selectcustom-1_link w-dropdown-link w--current"
                                      tabindex="0"
                                      role="option"
                                      aria-selected="true"
                                    >
                                      Select your budget
                                    </a>
                                    <a
                                      href="#"
                                      className="fs_selectcustom-1_link w-dropdown-link"
                                      tabindex="-1"
                                      role="option"
                                      aria-selected="false"
                                    >
                                      $5k - 10k
                                    </a>
                                    <a
                                      href="#"
                                      className="fs_selectcustom-1_link w-dropdown-link"
                                      tabindex="-1"
                                      role="option"
                                      aria-selected="false"
                                    >
                                      $10k - 20k
                                    </a>
                                    <a
                                      href="#"
                                      className="fs_selectcustom-1_link w-dropdown-link"
                                      tabindex="-1"
                                      role="option"
                                      aria-selected="false"
                                    >
                                      $20k - 50k
                                    </a>
                                    <a
                                      href="#"
                                      className="fs_selectcustom-1_link w-dropdown-link"
                                      tabindex="-1"
                                      role="option"
                                      aria-selected="false"
                                    >
                                      $100k+
                                    </a>
                                  </div>
                                  <select
                                    id="Budget-3"
                                    name="Budget"
                                    data-name="Budget"
                                    required=""
                                    className="fs_selectcustom-1_field w-select"
                                  >
                                    <option value="">Select your budget</option>
                                    <option value="$5k - 10k">$5k - 10k</option>
                                    <option value="$10k - 20k">
                                      $10k - 20k
                                    </option>
                                    <option value="$20k - 50k">
                                      $20k - 50k
                                    </option>
                                    <option value="$100k+">$100k+</option>
                                  </select>
                                </nav>
                              </div>
                            </div>
                          </div>
                          <div className="casestudy_form-group">
                            <label
                              for="email-3"
                              className="casestudy_form-label"
                            >
                              What services are you interested in?*
                            </label>
                            <div
                              superform-checkbox-max="3"
                              superform-validate="checkbox"
                              superform-checkbox-min="1"
                              className="form-checkbox-pill-wrapper"
                            >
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="Product-Design"
                                  id="Product-Design"
                                  data-name="Product Design"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="Product-Design"
                                >
                                  Web Design
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="Design-and-Development"
                                  id="Design-and-Development"
                                  data-name="Design and Development"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="Design-and-Development"
                                >
                                  Webflow Development
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="Website-Transformation"
                                  id="Website-Transformation"
                                  data-name="Website Transformation"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="Website-Transformation"
                                >
                                  Website Revamp
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="Branding"
                                  id="Branding"
                                  data-name="Branding"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="Branding"
                                >
                                  Branding
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="Migration"
                                  id="Migration"
                                  data-name="Migration"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="Migration"
                                >
                                  Migration
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="WebApps"
                                  id="WebApps"
                                  data-name="WebApps"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="WebApps"
                                >
                                  WebApps
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="WebApps-2"
                                  id="WebApps-2"
                                  data-name="Web Apps 2"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="WebApps-2"
                                >
                                  Product Demo Video
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="WebApps-2"
                                  id="WebApps-2"
                                  data-name="Web Apps 2"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="WebApps-2"
                                >
                                  Motion Design
                                </span>
                              </label>
                              <label className="w-checkbox form-checkbox-wrapper">
                                <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                                <input
                                  type="checkbox"
                                  name="WebApps-2"
                                  id="WebApps-2"
                                  data-name="Web Apps 2"
                                />
                                <span
                                  className="text-weight-semibold w-form-label"
                                  for="WebApps-2"
                                >
                                  Copywriting/Messaging
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="line-divider is-dark-green"></div>
                          <div className="layout508_button-wrapper">
                            <div>
                              <div className="button-link">
                                <div className="hide w-embed"></div>
                                <button>
                                  <div className="primary-button-pressed-overlay"></div>
                                  <div className="primary-button-hover-overlay"></div>
                                  <div className="primary-btn-text">
                                    Send Quote
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
                              </div>
                            </div>
                            <div className="layout507_disclaimer-wrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="icon-embed-xsmall"
                              >
                                <g clip-path="url(#clip0_10440_34130)">
                                  <path
                                    d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8 5.3335V8.00016"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M8 10.667H8.00667"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_10440_34130">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <div>
                                Complete the form, and a member of our team will
                                reach out to you within 24hrs.
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <input
                                type="hidden"
                                name="cf-turnstile-response"
                                id="cf-chl-widget-uk4ml_response"
                                value="0.zqZYnwdRe20V6ruBj-42XIPmq0YAO_vrA4wycjPzKPcTQkT7_lWWMoiZ1iuG9jN5q_eN9ofXFsHD_DzX4Zf7-5vZAmBlaqqOieymMOFRc5zuRiLRIRwEb-H0sKJQ66Djw96PfhjBrD-VbooIja_rZ7nhxOMfizxL7ZjOsdQG4mDzjQqrRA4Zc05-Eh1lIa8opJqOgnNfgBXRNEBmeouFsmWq5xkDarBsV4n5iMsIvAn8hu95LOKecAfAbp_UUvlFnxHSTMVeeKYX5gwMVHZpvgM3F35O85PEH2vO8dI9S-mPS4RO3eOGwhv61RPmpwatS2pWeOCPatW_pHOoy8y4wyVEc7C0YBTec6IuLJJSY-T1n9tWoDXur3TYEYvNOGhcrbV9_tLn4IXeG4CziTMytW010KI8FUzYUVFjwI2_J1alsl6iuLk3W2llmraVP9VEnaO128UHr04Y_BRm6JMB4BElypIYRu4l824jxdVG9SZ_aQBuZdy7nL3zcLkeuhOd2EHYcRAEfLHmEVedmWl3y1XKzC96bNSFsj-oSkPF0vFx_11VE7sBdADJa3vQTJ-N9Cr96M15oevdtVjg50qC6TAkhZHgBqCg-7sX8YZohyzmEx2gQadVacRS6mje72MS5S7EWRZqv0hfJQkpCtWmnIGoGaIK6YZVlWri8Byx_2ask49M8GFOFdA3JHo1cMSfd1dln3Fi5U94-tTKiY076R79lyBF_2vd4lpGMKo7tn-S6X0gJsLwpXGYSVOovDNCG92m5rmlVegIq2XNhGmZUVbeyVDUDNdN7MsTgaPYQX3bhWNOWbZSWY9dxQ9pIPYBt8P4mzxG5ObU_w6yeaD3mhOP9MOYF_upULYg0ITvsJC_Hgqj-4kl12GcFmF2TX7r._N7wgW4VsCTZjNkb3Ht0zA.d8afd1ae50e00a2017fe308c965e6990a59da888f0b00ece0500e4eec5928f20"
                              />
                            </div>
                          </div>
                        </form>
                        <div
                          className="success w-form-done"
                          tabindex="-1"
                          role="region"
                          aria-label="contact-form-new success"
                        >
                          <div className="success-container">
                            <div className="check-icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--bx"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm-1.999 14.413l-3.713-3.705L7.7 11.292l2.299 2.295l5.294-5.294l1.414 1.414l-6.706 6.706z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              Thankyou! Your form submission has been
                              submitted.&nbsp;
                              <br />
                              We will reach out to you within{" "}
                              <strong>
                                24hrs.
                                <br />
                                <br />
                                or <br />
                              </strong>
                              <br />
                              Just book a call directly{" "}
                              <a
                                href="https://cal.com/himanshusahu/project-enquiry"
                                target="_blank"
                              >
                                <span className="text-weight-bold text-color-green underline">
                                  Cal.com↗
                                </span>
                              </a>
                              <br />
                              <br />
                            </div>
                          </div>
                        </div>
                        <div
                          className="error-message w-form-fail"
                          tabindex="-1"
                          role="region"
                          aria-label="contact-form-new failure"
                        >
                          <div>
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-tab="Tab 2"
                  className="layout508_tab-pane w-tab-pane w--tab-active"
                  id="w-tabs-0-data-w-pane-1"
                  role="tabpanel"
                  aria-labelledby="w-tabs-0-data-w-tab-1"
                >
                  <div className="layout508_card">
                    <div className="contact_calender w-embed w-script">
                      <div id="my-cal-inline" className="cal-inline-container">
                        <cal-inline loading="done">
                          <iframe
                            className="cal-embed"
                            name="cal-embed=project-enquiry"
                            title="Book a call"
                            src="https://app.cal.com/himanshusahu/project-enquiry/embed?embed=project-enquiry&amp;embedType=inline"
                          ></iframe>
                        </cal-inline>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_endorsement-wrapper">
              <div className="contact_endorsement-top-wrapper">
                <div className="contact_endorsement-top-line is-left"></div>
                <div className="contact_endorsement-top-text">
                  Endorsed by Leading Brands and Partners
                </div>
                <div className="contact_endorsement-top-line is-right"></div>
              </div>
              <div className="contact_endorsement-partners-wrapper">
                <a
                  href="https://webflow.com/@flowtrix"
                  target="blank"
                  className="contact_endorsement-partner webflow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="auto"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="webflow-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 0.845703L13.6181 13.1533H7.62397L10.2946 8.05253H10.1749C7.97152 10.8743 4.6842 12.7318 0 13.1533V8.12315C0 8.12315 2.99641 7.94845 4.75794 6.12137H0V0.845796H5.34766V5.18493L5.46746 5.18438L7.65293 0.845796H11.6972V5.15735L11.817 5.15717L14.0842 0.845703H20Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="badge-text">Premium Partner</div>
                </a>
                <div className="contact_endorsement-partner xano">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="auto"
                    viewBox="0 0 67 15"
                    fill="none"
                    className="xano-icon"
                  >
                    <path
                      d="M29.1534 1.33358C28.994 1.05001 28.78 0.800777 28.5238 0.600243C28.2242 0.376777 27.8584 0.25983 27.4847 0.267977C27.1121 0.261079 26.7474 0.375701 26.4457 0.59451C26.1849 0.791331 25.9674 1.03979 25.8069 1.32438L19.5845 11.699L22.2237 14.2288L27.4007 5.44704L29.613 9.16424H26.3063L24.8066 11.7594L31.1533 11.7728L32.9285 14.7508H37.2282L29.1534 1.33358Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M44.9723 0.340093V8.88436L36.9723 0.946226C36.778 0.744057 36.5496 0.577731 36.2976 0.454893C36.0578 0.343471 35.7966 0.28577 35.5323 0.285826C35.2762 0.278698 35.0218 0.328541 34.7874 0.431752C34.553 0.534963 34.3444 0.688965 34.1768 0.882626C33.8512 1.285 33.6831 1.79209 33.7039 2.30929V7.70196L37.204 13.5608V6.22343L45.1688 14.2342C45.6192 14.6837 46.126 14.912 46.6779 14.912C46.9268 14.9166 47.1737 14.8666 47.4012 14.7654C47.6287 14.6642 47.8312 14.5143 47.9944 14.3264C48.3117 13.964 48.4725 13.4788 48.4725 12.8864V0.340093H44.9723Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M65.5761 4.64106C65.2541 3.80284 64.7596 3.04162 64.1247 2.40673C63.4897 1.77184 62.7284 1.27745 61.8901 0.955594C60.9896 0.607945 60.0314 0.434253 59.0661 0.443727H55.9131C54.9723 0.435759 54.0386 0.605955 53.1612 0.945327C52.3328 1.26942 51.578 1.75682 50.9417 2.37853C50.3002 3.01306 49.7984 3.77468 49.4685 4.61453C49.1125 5.52248 48.9343 6.49038 48.9435 7.46559C48.9362 8.44506 49.1119 9.41727 49.4615 10.3323C49.7908 11.1934 50.2873 11.9807 50.9224 12.6491C51.5532 13.3042 52.307 13.8285 53.1408 14.1919C54.0165 14.5726 54.9624 14.7651 55.9172 14.7569H59.0683C60.4753 14.7791 61.8548 14.3662 63.0183 13.5748C64.1819 12.7834 65.0727 11.6521 65.5691 10.3353C65.9189 9.42042 66.0946 8.44815 66.0871 7.46866C66.0978 6.50224 65.9244 5.54261 65.5761 4.64106ZM59.0681 11.1449H55.9131C55.4506 11.1495 54.9922 11.0587 54.5664 10.8783C54.1685 10.7094 53.8094 10.461 53.5109 10.1484C53.2059 9.82298 52.9686 9.44018 52.8128 9.02226C52.638 8.5584 52.5505 8.06621 52.5548 7.57053C52.5481 7.07618 52.6349 6.58503 52.8107 6.12293C52.9681 5.71446 53.2046 5.34113 53.5068 5.02439C53.8056 4.71647 54.164 4.47263 54.5601 4.30773C54.9895 4.13413 55.4494 4.04849 55.9125 4.05586H59.0677C59.5413 4.05056 60.0112 4.13953 60.4501 4.31759C60.8562 4.47969 61.2237 4.72518 61.529 5.0382C61.8342 5.35121 62.0704 5.72479 62.2223 6.13479C62.3976 6.59442 62.4851 7.08288 62.4803 7.57479C62.4845 8.07048 62.3971 8.56267 62.2223 9.02653C62.0655 9.44338 61.8263 9.82431 61.5189 10.1465C61.2134 10.4605 60.8478 10.7099 60.444 10.8799C60.0082 11.0609 59.54 11.151 59.0681 11.1449Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.7758 7.18158L21.895 0.445312H15.6378L11.6472 4.22185L14.7523 7.15891L14.7758 7.18158Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.7523 8.03621L11.6472 10.9743L15.6378 14.7499H21.895L14.7758 8.01367L14.7523 8.03621Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.77746 0.445312H0.520264L8.07853 7.59825L0.520264 14.7501H6.77746L14.3375 7.59825L6.77746 0.445312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="badge-text">Official Partner</div>
                </div>
                <div className="contact_endorsement-partner wized">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="auto"
                    viewBox="0 0 19 20"
                    fill="none"
                    className="wized-icon"
                  >
                    <path
                      d="M6.81474 15.8333H9.2636L11.3199 8.17584L13.345 15.8333H15.9352L18.6667 4.75H16.3119L14.491 12.4541L12.4973 4.75H10.3311L8.41589 12.4076L6.65762 4.75H4.08325L6.81474 15.8333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 19.3327H5.24996V17.3567H2.62501V2.64204H5.24996V0.666016H0V19.3327Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="badge-text">Wized Expert</div>
                </div>
                <a
                  href="https://www.awwwards.com/sites/flowtrix-web-design-agency"
                  target="blank"
                  className="contact_endorsement-partner wized"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="auto"
                    height="auto"
                    viewBox="0 0 89 14"
                    fill="none"
                    className="awwards-icon"
                  >
                    <g clip-path="url(#clip0_3469_27316)">
                      <path
                        d="M0.376682 6.59241C0.690583 4.96012 2.13453 3.83008 4.1435 3.83008C6.46637 3.83008 8.287 4.83456 8.287 7.97358V13.8121H6.27803L6.02691 12.5565C5.33632 13.4355 4.39462 14.0005 3.01345 14.0005C1.31839 14.0005 0 12.9332 0 10.987C0 9.04084 1.75785 7.78523 4.20628 7.78523H5.83857V7.34577C5.83857 6.21573 5.02242 5.90183 4.08072 5.90183C3.39014 5.90183 2.69955 6.15295 2.38565 7.03187L0.376682 6.59241ZM3.57848 11.9287C4.70852 11.9287 5.83857 11.1754 5.83857 9.91976V9.73142H4.26906C3.20179 9.66864 2.57399 10.1081 2.57399 10.987C2.57399 11.4265 2.95067 11.9287 3.57848 11.9287Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M47.7131 6.59241C48.027 4.96012 49.471 3.83008 51.4799 3.83008C53.8028 3.83008 55.6234 4.83456 55.6234 7.97358V13.8121H53.6145L53.3633 12.5565C52.6727 13.4355 51.731 14.0005 50.3499 14.0005C48.6548 14.0005 47.3364 12.9332 47.3364 10.987C47.3364 9.04084 49.0943 7.78523 51.5427 7.78523H53.175V7.34577C53.175 6.21573 52.3588 5.90183 51.4171 5.90183C50.7266 5.90183 50.036 6.15295 49.7221 7.03187L47.7131 6.59241ZM50.9149 11.9287C52.0449 11.9287 53.175 11.1754 53.175 9.91976V9.73142H51.5427C50.4754 9.73142 49.8476 10.1081 49.8476 10.987C49.9104 11.4265 50.2871 11.9287 50.9149 11.9287Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M57.8206 13.8749V3.95564H60.269V5.58793C60.9596 4.3951 62.0896 3.83008 63.1569 3.83008C63.5963 3.83008 63.973 3.89286 64.3497 4.01842L63.9102 6.27851C63.5963 6.09017 63.2824 5.96461 62.9058 5.96461C61.4618 5.96461 60.269 7.15743 60.269 10.2964V13.8121L57.8206 13.8749Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M69.5604 3.8296C70.5649 3.8296 71.5066 4.33184 71.9461 4.89686V0H74.3945V13.8744H71.9461V12.87C71.6322 13.3722 70.7533 14.0628 69.5604 14.0628C66.6098 14.0628 65.103 11.991 65.103 8.97758C65.103 5.96413 66.6098 3.8296 69.5604 3.8296ZM69.9371 11.9283C71.1927 11.9283 72.1972 10.861 72.1972 8.9148C72.1972 6.96861 71.1927 5.90135 69.9371 5.90135C68.6815 5.90135 67.677 6.96861 67.677 8.9148C67.677 10.861 68.6815 11.9283 69.9371 11.9283Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M83.1839 5.39819L81.74 6.71658C81.3005 6.08878 80.6099 5.83765 80.1077 5.83765C79.6054 5.83765 79.166 6.15156 79.166 6.6538C79.166 7.09326 79.5426 7.40716 80.1077 7.5955C81.4888 8.09774 83.6862 8.53721 83.6862 10.609C83.6862 12.4296 82.305 13.8735 80.1705 13.8735C78.0987 13.8735 76.7175 12.4296 76.2781 11.2368L78.2243 10.1695C78.6009 11.1112 79.2288 11.8018 80.2332 11.8018C80.9866 11.8018 81.4888 11.4251 81.4888 10.7345C81.4888 9.91837 80.2332 9.73003 79.0404 9.22779C77.9731 8.78833 77.0314 8.09774 77.0314 6.59102C77.0314 5.08429 78.287 3.70312 80.1705 3.70312C81.4261 3.76591 82.6189 4.45649 83.1839 5.39819Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.583 3.95508L30.8251 10.7981L29.13 3.95508H26.87L25.2377 10.7981L23.8565 6.84297L23.6682 7.28243L22.9148 9.85642L24.1704 13.8744H26.3049L28 7.47077L29.6951 13.8744H31.8924L35.0314 3.95508H32.583Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M44.323 3.95508L42.5651 10.7981L40.8701 3.95508H38.61L36.9777 10.7981L35.5965 6.84297L35.4082 7.28243L34.592 9.85642L35.9104 13.8744H38.045L39.74 7.47077L41.4351 13.8744H43.5696L46.7714 3.95508H44.323Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M23.2915 3.95508L20.1525 13.8116H18.0179L16.3229 7.47077L14.6278 13.8744H12.4933L9.35425 4.01786H11.8027L13.5605 10.7981L15.2556 4.01786H17.5157L19.2108 10.7981L20.9686 4.01786L23.2915 3.95508Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M86.8879 10.6719C87.8296 10.6719 88.5202 11.3625 88.5202 12.3042C88.5202 13.2459 87.8296 13.9364 86.8879 13.9364C85.9462 13.9364 85.2556 13.2459 85.2556 12.3042C85.2556 11.3625 85.9462 10.6719 86.8879 10.6719Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3469_27316">
                        <rect
                          width="88.5202"
                          height="14"
                          fill="currentColor"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="badge-text">Honors</div>
                </a>
              </div>
              <div className="contact_email-wrapper">
                <div>Prefer Email? Reach us at</div>
                <a
                  href="mailto:hello@flowtrix.co?subject=Project%20Inquiry%20-"
                  className="contact_endorsement-cta-wrapper w-inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 20 21"
                    fill="none"
                    className="contact_endorsement-cta-icon"
                  >
                    <g id="mail">
                      <path
                        id="Vector"
                        d="M18.3332 5.37565C18.3332 4.45898 17.5832 3.70898 16.6665 3.70898H3.33317C2.4165 3.70898 1.6665 4.45898 1.6665 5.37565M18.3332 5.37565V15.3757C18.3332 16.2923 17.5832 17.0423 16.6665 17.0423H3.33317C2.4165 17.0423 1.6665 16.2923 1.6665 15.3757V5.37565M18.3332 5.37565L9.99984 11.209L1.6665 5.37565"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <div className="contact_endorsement-cta-text">
                    hello@flowtrix.co
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_trust">
        <div className="container-large">
          <div className="process_wrapper-header-top is_contact is_mobile-space">
            <div className="fade-up">
              <h2 className="heading-style-h2 is_cae-study">
                Trusted by 20+
                <br />
                Industry leaders
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="fade-in">
          <div className="leader-wrapper">
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">48%</h4>
                        <p className="learder_pr">Increase in event signups</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">25%</h4>
                        <p className="learder_pr">Growth in enterprise leads</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">34%</h4>
                        <p className="learder_pr">Growth in conversions</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">20%</h4>
                        <p className="learder_pr">Increase in agency leads</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a
                    href="https://flowtrix.co/case-studies/saral"
                    target="_blank"
                  ></a>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      target="_blank"
                    >
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">41%</h4>
                        <p className="learder_pr">
                          Increase in conversion rate
                        </p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Read case study</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">45%</h4>
                        <p className="learder_pr">Increase in demo requests</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">48%</h4>
                      <p className="learder_pr">Increase in event signups</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">25%</h4>
                      <p className="learder_pr">Growth in enterprise leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">34%</h4>
                      <p className="learder_pr">Growth in conversions</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">20%</h4>
                      <p className="learder_pr">Increase in agency leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">41%</h4>
                      <p className="learder_pr">Increase in conversion rate</p>
                    </div>
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      className="leader_link w-inline-block"
                    >
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">45%</h4>
                      <p className="learder_pr">Increase in demo requests</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">48%</h4>
                      <p className="learder_pr">Increase in event signups</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">25%</h4>
                      <p className="learder_pr">Growth in enterprise leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">34%</h4>
                      <p className="learder_pr">Growth in conversions</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">20%</h4>
                      <p className="learder_pr">Increase in agency leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">41%</h4>
                      <p className="learder_pr">Increase in conversion rate</p>
                    </div>
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      className="leader_link w-inline-block"
                    >
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">45%</h4>
                      <p className="learder_pr">Increase in demo requests</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
