// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header data-navbar="" className="section_navbar">
//       <div
//         className="navbar_component w-nav"
//         fs-scrolldisable-element="smart-nav"
//         data-easing="ease"
//         data-collapse="medium"
//         data-w-id="d5229618-d2f9-dcdf-f238-806b9aeacf80"
//         role="banner"
//         data-duration="0"
//       >
//         <div className="navbar_container">
//           <a
//             href="/"
//             aria-current="page"
//             className="navbar_logo-link"
//             aria-label="home"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 156 30"
//               className="navbar_logo"
//             >
//               <path
//                 d="M43.4347 14.988H34.6618C33.5144 14.988 32.9407 13.6016 33.7535 12.7888L44.3431 2.1992C45.1559 1.38645 44.5822 0 43.4347 0H33.1559C34.3033 0 34.877 1.38645 34.0642 2.1992L23.4746 12.7888C22.6618 13.6016 23.2355 14.988 24.383 14.988H33.1559C34.3033 14.988 34.877 16.3745 34.0642 17.1873L21.634 29.6175C21.3949 29.8566 21.0602 30 20.7256 30H31.0045C31.3391 30 31.6738 29.8566 31.9128 29.6175L44.3431 17.1873C45.1559 16.3984 44.5822 14.988 43.4347 14.988Z"
//                 fill="currentColor"
//                 className="path-7"
//               ></path>
//               <path
//                 d="M18.8374 17.7605H11.6661C10.7338 17.7605 10.2557 16.6131 10.9251 15.9677L19.5785 7.31431C20.2478 6.64499 19.7697 5.52148 18.8374 5.52148H10.447C11.3793 5.52148 11.8573 6.6689 11.188 7.31431L2.55854 15.9438C1.88921 16.6131 2.3673 17.7366 3.29957 17.7366H10.4709C11.4032 17.7366 11.8812 18.884 11.2119 19.5295L1.05256 29.6888C0.861324 29.88 0.598376 29.9996 0.311523 29.9996H8.70196C8.98881 29.9996 9.25176 29.88 9.443 29.6888L19.5785 19.5534C20.2478 18.884 19.7936 17.7605 18.8374 17.7605Z"
//                 fill="currentColor"
//                 className="path-6"
//               ></path>
//               <path
//                 d="M62.8209 9.40234H52.7246V12.1155H62.8209V9.40234Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M58.4466 26.6509H55.5361V14.088C55.5361 13.5783 55.6512 13.1672 55.8979 12.9041C56.1445 12.6246 56.4899 12.493 56.9338 12.493V12.0326H55.5361V8.57946C55.5361 8.15193 55.5526 7.70796 55.5855 7.24754C55.6183 6.78712 55.717 6.3267 55.865 5.88273C56.013 5.43875 56.2596 5.02767 56.5885 4.66591C56.9832 4.23838 57.4107 3.92595 57.8876 3.72863C58.3644 3.53131 58.8413 3.4162 59.3181 3.38331C59.795 3.35043 60.2554 3.33398 60.6829 3.33398H62.8042V5.73474H60.8309C60.0252 5.73474 59.4332 5.93206 59.0386 6.3267C58.644 6.72135 58.4466 7.31331 58.4466 8.08616V26.6509Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M67.9349 3.34961H65.0244V26.6501H67.9349V3.34961Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M85.3815 13.2003C84.7237 11.8684 83.7865 10.8324 82.5696 10.076C81.3528 9.31961 79.9058 8.94141 78.2286 8.94141C76.5842 8.94141 75.1536 9.31961 73.9368 10.0596C72.72 10.7995 71.7827 11.8355 71.1085 13.1674C70.4343 14.4993 70.1055 16.045 70.1055 17.788C70.1055 19.531 70.4343 21.0603 71.0921 22.3922C71.7498 23.7241 72.6871 24.7601 73.9039 25.5165C75.1207 26.2729 76.5678 26.6511 78.245 26.6511C79.9058 26.6511 81.3364 26.2729 82.5696 25.5329C83.7865 24.7765 84.7237 23.7406 85.3815 22.4086C86.0392 21.0767 86.3681 19.531 86.3681 17.788C86.3517 16.0614 86.0228 14.5322 85.3815 13.2003ZM82.0106 22.1949C81.1719 23.3295 79.9222 23.8886 78.2286 23.8886C76.5678 23.8886 75.3181 23.3295 74.463 22.2278C73.6079 21.126 73.1968 19.6461 73.1968 17.788C73.1968 16.5876 73.3777 15.5353 73.7395 14.6144C74.1012 13.71 74.6603 12.9865 75.4003 12.4768C76.1402 11.967 77.094 11.7039 78.2286 11.7039C79.9058 11.7039 81.1719 12.263 82.0106 13.3647C82.8492 14.4664 83.2767 15.9463 83.2767 17.8045C83.2603 19.5804 82.8492 21.0603 82.0106 22.1949Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M97.4507 15.5851L94.0633 26.668H91.6626L86.5322 9.40234L89.4263 9.41879L92.4848 19.4658C92.6492 19.992 92.7643 20.5017 92.8301 20.9621C92.8959 21.439 92.9287 21.9816 92.9287 22.6065H93.2905C93.2905 21.9981 93.3234 21.4554 93.3892 20.9786C93.4549 20.5017 93.57 20.0084 93.718 19.4658L96.8094 9.41879H99.3417L102.515 19.7124C102.663 20.2057 102.762 20.6661 102.811 21.0772C102.861 21.4883 102.894 21.9981 102.894 22.6229H103.272C103.272 21.9981 103.288 21.4883 103.337 21.0772C103.387 20.6661 103.469 20.2222 103.601 19.7124L106.758 9.41879H109.635L104.505 26.668H102.104L98.7169 15.5851C98.536 15.0425 98.4209 14.5327 98.3715 14.0394C98.3222 13.5461 98.2893 12.9213 98.2893 12.1977H97.9276C97.9276 12.9377 97.8947 13.5461 97.8454 14.0394C97.7631 14.5163 97.6316 15.0425 97.4507 15.5851Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M119.978 9.40234H108.665V11.9511H119.978V9.40234Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M119.978 26.5517C118.959 26.6339 117.956 26.6668 116.969 26.6503C115.982 26.6339 115.111 26.453 114.338 26.1077C113.565 25.7624 112.99 25.2198 112.595 24.4469C112.25 23.7727 112.069 23.0986 112.052 22.4079C112.036 21.7173 112.02 20.928 112.02 20.0565V4.59961H114.93V11.8019H113.532V12.3445C114.075 12.3445 114.453 12.4596 114.65 12.6898C114.848 12.92 114.93 13.3147 114.93 13.9066V19.925C114.93 20.6156 114.93 21.1911 114.946 21.6844C114.963 22.1777 115.062 22.5888 115.259 22.9341C115.637 23.6247 116.229 24.0029 117.035 24.0687C117.841 24.1345 118.827 24.1345 119.962 24.0358V26.5517H119.978Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M125.619 26.6501H122.676V9.40089H125.274V10.1902C125.274 11.2261 125.093 12.3114 124.715 13.446H125.077C125.471 12.1963 125.8 11.3412 126.063 10.8644C126.326 10.3875 126.688 10.0257 127.148 9.74621C127.609 9.48311 128.234 9.35156 129.023 9.35156H131.457V12.0483H128.809C127.707 12.0319 126.902 12.3607 126.392 13.0349C125.849 13.8078 125.586 15.1561 125.619 17.0965V26.6501Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M146.403 21.3074L142.769 26.6516H139.283L145.647 17.7063L139.415 9.40234H142.884L147.752 15.9962L148.031 15.7824C147.9 15.5193 147.85 15.2891 147.85 15.1082C147.85 14.9602 147.883 14.8123 147.949 14.6643C148.015 14.5163 148.13 14.319 148.278 14.1052L151.797 9.41879H155.25L149.018 17.7228L155.398 26.668H151.928L146.814 19.2027L146.551 19.4329C146.732 19.7782 146.814 20.0742 146.814 20.3044C146.831 20.6004 146.683 20.9457 146.403 21.3074Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M137.277 9.40234H134.366V26.6516H137.277V9.40234Z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M137.277 4.83008H134.366V7.39526H137.277V4.83008Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </a>
//           <nav
//             role="navigation"
//             id="w-node-d5229618-d2f9-dcdf-f238-806b9aeacf91-9aeacf7f"
//             className="navbar_menu w-nav-menu"
//           >
//             <div className="navbar_menu-wrap">
//               <div className="navbar_menu-top">
//                 <a
//                   href="/case-studies"
//                   className="navbar_menu-item w-inline-block"
//                 >
//                   <div className="navbar_link">Our Work</div>
//                   <div className="mobile-menu_icon-circle">
//                     <div className="mobile-menu_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 23 23"
//                         fill="none"
//                         className="mobile-menu_arrow-icon"
//                       >
//                         <path
//                           d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href="/#services"
//                   className="navbar_menu-item w-inline-block"
//                 >
//                   <div className="navbar_link">Services</div>
//                   <div className="mobile-menu_icon-circle">
//                     <div className="mobile-menu_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 23 23"
//                         fill="none"
//                         className="mobile-menu_arrow-icon"
//                       >
//                         <path
//                           d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="/#reviews" className="navbar_menu-item w-inline-block">
//                   <div className="navbar_link">Reviews</div>
//                   <div className="mobile-menu_icon-circle">
//                     <div className="mobile-menu_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 23 23"
//                         fill="none"
//                         className="mobile-menu_arrow-icon"
//                       >
//                         <path
//                           d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="/blog" className="navbar_menu-item w-inline-block">
//                   <div className="navbar_link">Blogs</div>
//                   <div className="mobile-menu_icon-circle">
//                     <div className="mobile-menu_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 23 23"
//                         fill="none"
//                         className="mobile-menu_arrow-icon"
//                       >
//                         <path
//                           d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//                 <a href="/schema" className="navbar_menu-item w-inline-block">
//                   <div className="navbar_link">Schema App</div>
//                   <div className="mobile-menu_icon-circle">
//                     <div className="mobile-menu_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 23 23"
//                         fill="none"
//                         className="mobile-menu_arrow-icon"
//                       >
//                         <path
//                           d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               <div className="mobile-menu_bottom-v2">
//                 <a href="/contact" className="button-link w-inline-block">
//                   <div className="hide w-embed"></div>
//                   <button type="" className="secondary-button">
//                     <div className="secondary-btn-text">Contact us</div>
//                     <div className="secondary-btn_wrap">
//                       <div className="secondary-btn_icon-wrap">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="100%"
//                           viewBox="0 0 20 12"
//                           fill="none"
//                           className="secondary-btn_icon"
//                         >
//                           <path
//                             d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
//                             stroke="currentColor"
//                             stroke-width="2"
//                           ></path>
//                         </svg>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="100%"
//                           viewBox="0 0 20 12"
//                           fill="none"
//                           className="secondary-btn_icon"
//                         >
//                           <path
//                             d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
//                             stroke="currentColor"
//                             stroke-width="2"
//                           ></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div
//             id="w-node-d5229618-d2f9-dcdf-f238-806b9aeacf98-9aeacf7f"
//             className="navbar_button-wrapper"
//           >
//             <a
//               data-w-id="d5229618-d2f9-dcdf-f238-806b9aeacfa8"
//               href="/contact"
//               className="navbar-button w-inline-block"
//             >
//               <div className="navbar-btn-content">
//                 <div className="button-bg-1"></div>
//                 <div className="button-bg-2"></div>
//                 <div className="navbar_text">Start Project</div>
//               </div>
//               <div className="navbar-light-wrap">
//                 <div className="navbar-light"></div>
//               </div>
//             </a>
//             <div className="navbar_light-bgtn-wrap">
//               <a
//                 href="/contact"
//                 className="button-link is-navbar-link w-inline-block"
//               >
//                 <div className="hide w-embed"></div>
//                 <button type="" className="button is-navbar">
//                   <div className="secondary-btn-text is-navbar-text">
//                     Start Project
//                   </div>
//                   <div className="secondary-btn_wrap is-navbar-btn-wrap">
//                     <div className="secondary-btn_icon-wrap">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 20 12"
//                         fill="none"
//                         className="secondary-btn_icon is-navbar-icon"
//                       >
//                         <path
//                           d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
//                           stroke="currentColor"
//                           stroke-width="2"
//                         ></path>
//                       </svg>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="100%"
//                         viewBox="0 0 20 12"
//                         fill="none"
//                         className="secondary-btn_icon is-navbar-icon"
//                       >
//                         <path
//                           d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
//                           stroke="currentColor"
//                           stroke-width="2"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </button>
//               </a>
//             </div>
//             <div
//               className="mobile-menu-btn w-nav-button"
//               aria-label="menu"
//               role="button"
//               tabindex="0"
//               aria-controls="w-nav-overlay-0"
//               aria-haspopup="menu"
//               aria-expanded="false"
//             >
//               <div className="navbar-humburger_button-open-v2">
//                 <div className="navbar-menu-content">
//                   <div className="button-bg-1 menu"></div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     className="navbar-menu-btn"
//                   >
//                     <path
//                       d="M2 8H14"
//                       stroke="currentColor"
//                       stroke-width="1.2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                     <path
//                       d="M2 4H14"
//                       stroke="currentColor"
//                       stroke-width="1.2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                     <path
//                       d="M2 12H14"
//                       stroke="currentColor"
//                       stroke-width="1.2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="navbar-humburger_button-close-copy">
//                 <div className="navbar-menu-content">
//                   <div className="button-bg-1 menu"></div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100%"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     className="navbar-menu-btn"
//                   >
//                     <path
//                       d="M3.75732 12.2422L12.2426 3.75691"
//                       stroke="currentColor"
//                       stroke-width="1.2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                     <path
//                       d="M3.94434 3.57812L12.0556 12.4216"
//                       stroke="currentColor"
//                       stroke-width="1.2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                   </svg>
//                   <div className="navbar_text">Close</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="w-nav-overlay"
//           data-wf-ignore=""
//           id="w-nav-overlay-0"
//         ></div>
//       </div>
//     </header>
//   );
// }
// export default Navbar;

"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./Navbar.css";

function Navbar() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const scrollToSection = (e, target) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 1.5, offset: 0 });
    }
  };

  return (
    <header data-navbar="" className="section_navbar">
      <div className="navbar-embed w-embed"></div>
      <div
        data-animation="default"
        className="navbar_component w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="d5229618-d2f9-dcdf-f238-806b9aeacf80"
        role="banner"
        data-duration="0"
      >
        <div className="navbar_container">
          <a
            href="/"
            aria-current="page"
            className="navbar_logo-link w-nav-brand w--current"
            aria-label="home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 156 30"
              fill="none"
              className="navbar_logo"
            >
              <path
                d="M43.4347 14.988H34.6618C33.5144 14.988 32.9407 13.6016 33.7535 12.7888L44.3431 2.1992C45.1559 1.38645 44.5822 0 43.4347 0H33.1559C34.3033 0 34.877 1.38645 34.0642 2.1992L23.4746 12.7888C22.6618 13.6016 23.2355 14.988 24.383 14.988H33.1559C34.3033 14.988 34.877 16.3745 34.0642 17.1873L21.634 29.6175C21.3949 29.8566 21.0602 30 20.7256 30H31.0045C31.3391 30 31.6738 29.8566 31.9128 29.6175L44.3431 17.1873C45.1559 16.3984 44.5822 14.988 43.4347 14.988Z"
                fill="currentColor"
                className="path-7"
              ></path>
              <path
                d="M18.8374 17.7605H11.6661C10.7338 17.7605 10.2557 16.6131 10.9251 15.9677L19.5785 7.31431C20.2478 6.64499 19.7697 5.52148 18.8374 5.52148H10.447C11.3793 5.52148 11.8573 6.6689 11.188 7.31431L2.55854 15.9438C1.88921 16.6131 2.3673 17.7366 3.29957 17.7366H10.4709C11.4032 17.7366 11.8812 18.884 11.2119 19.5295L1.05256 29.6888C0.861324 29.88 0.598376 29.9996 0.311523 29.9996H8.70196C8.98881 29.9996 9.25176 29.88 9.443 29.6888L19.5785 19.5534C20.2478 18.884 19.7936 17.7605 18.8374 17.7605Z"
                fill="currentColor"
                className="path-6"
              ></path>
              <path
                d="M62.8209 9.40234H52.7246V12.1155H62.8209V9.40234Z"
                fill="currentColor"
              ></path>
              <path
                d="M58.4466 26.6509H55.5361V14.088C55.5361 13.5783 55.6512 13.1672 55.8979 12.9041C56.1445 12.6246 56.4899 12.493 56.9338 12.493V12.0326H55.5361V8.57946C55.5361 8.15193 55.5526 7.70796 55.5855 7.24754C55.6183 6.78712 55.717 6.3267 55.865 5.88273C56.013 5.43875 56.2596 5.02767 56.5885 4.66591C56.9832 4.23838 57.4107 3.92595 57.8876 3.72863C58.3644 3.53131 58.8413 3.4162 59.3181 3.38331C59.795 3.35043 60.2554 3.33398 60.6829 3.33398H62.8042V5.73474H60.8309C60.0252 5.73474 59.4332 5.93206 59.0386 6.3267C58.644 6.72135 58.4466 7.31331 58.4466 8.08616V26.6509Z"
                fill="currentColor"
              ></path>
              <path
                d="M67.9349 3.34961H65.0244V26.6501H67.9349V3.34961Z"
                fill="currentColor"
              ></path>
              <path
                d="M85.3815 13.2003C84.7237 11.8684 83.7865 10.8324 82.5696 10.076C81.3528 9.31961 79.9058 8.94141 78.2286 8.94141C76.5842 8.94141 75.1536 9.31961 73.9368 10.0596C72.72 10.7995 71.7827 11.8355 71.1085 13.1674C70.4343 14.4993 70.1055 16.045 70.1055 17.788C70.1055 19.531 70.4343 21.0603 71.0921 22.3922C71.7498 23.7241 72.6871 24.7601 73.9039 25.5165C75.1207 26.2729 76.5678 26.6511 78.245 26.6511C79.9058 26.6511 81.3364 26.2729 82.5696 25.5329C83.7865 24.7765 84.7237 23.7406 85.3815 22.4086C86.0392 21.0767 86.3681 19.531 86.3681 17.788C86.3517 16.0614 86.0228 14.5322 85.3815 13.2003ZM82.0106 22.1949C81.1719 23.3295 79.9222 23.8886 78.2286 23.8886C76.5678 23.8886 75.3181 23.3295 74.463 22.2278C73.6079 21.126 73.1968 19.6461 73.1968 17.788C73.1968 16.5876 73.3777 15.5353 73.7395 14.6144C74.1012 13.71 74.6603 12.9865 75.4003 12.4768C76.1402 11.967 77.094 11.7039 78.2286 11.7039C79.9058 11.7039 81.1719 12.263 82.0106 13.3647C82.8492 14.4664 83.2767 15.9463 83.2767 17.8045C83.2603 19.5804 82.8492 21.0603 82.0106 22.1949Z"
                fill="currentColor"
              ></path>
              <path
                d="M97.4507 15.5851L94.0633 26.668H91.6626L86.5322 9.40234L89.4263 9.41879L92.4848 19.4658C92.6492 19.992 92.7643 20.5017 92.8301 20.9621C92.8959 21.439 92.9287 21.9816 92.9287 22.6065H93.2905C93.2905 21.9981 93.3234 21.4554 93.3892 20.9786C93.4549 20.5017 93.57 20.0084 93.718 19.4658L96.8094 9.41879H99.3417L102.515 19.7124C102.663 20.2057 102.762 20.6661 102.811 21.0772C102.861 21.4883 102.894 21.9981 102.894 22.6229H103.272C103.272 21.9981 103.288 21.4883 103.337 21.0772C103.387 20.6661 103.469 20.2222 103.601 19.7124L106.758 9.41879H109.635L104.505 26.668H102.104L98.7169 15.5851C98.536 15.0425 98.4209 14.5327 98.3715 14.0394C98.3222 13.5461 98.2893 12.9213 98.2893 12.1977H97.9276C97.9276 12.9377 97.8947 13.5461 97.8454 14.0394C97.7631 14.5163 97.6316 15.0425 97.4507 15.5851Z"
                fill="currentColor"
              ></path>
              <path
                d="M119.978 9.40234H108.665V11.9511H119.978V9.40234Z"
                fill="currentColor"
              ></path>
              <path
                d="M119.978 26.5517C118.959 26.6339 117.956 26.6668 116.969 26.6503C115.982 26.6339 115.111 26.453 114.338 26.1077C113.565 25.7624 112.99 25.2198 112.595 24.4469C112.25 23.7727 112.069 23.0986 112.052 22.4079C112.036 21.7173 112.02 20.928 112.02 20.0565V4.59961H114.93V11.8019H113.532V12.3445C114.075 12.3445 114.453 12.4596 114.65 12.6898C114.848 12.92 114.93 13.3147 114.93 13.9066V19.925C114.93 20.6156 114.93 21.1911 114.946 21.6844C114.963 22.1777 115.062 22.5888 115.259 22.9341C115.637 23.6247 116.229 24.0029 117.035 24.0687C117.841 24.1345 118.827 24.1345 119.962 24.0358V26.5517H119.978Z"
                fill="currentColor"
              ></path>
              <path
                d="M125.619 26.6501H122.676V9.40089H125.274V10.1902C125.274 11.2261 125.093 12.3114 124.715 13.446H125.077C125.471 12.1963 125.8 11.3412 126.063 10.8644C126.326 10.3875 126.688 10.0257 127.148 9.74621C127.609 9.48311 128.234 9.35156 129.023 9.35156H131.457V12.0483H128.809C127.707 12.0319 126.902 12.3607 126.392 13.0349C125.849 13.8078 125.586 15.1561 125.619 17.0965V26.6501Z"
                fill="currentColor"
              ></path>
              <path
                d="M146.403 21.3074L142.769 26.6516H139.283L145.647 17.7063L139.415 9.40234H142.884L147.752 15.9962L148.031 15.7824C147.9 15.5193 147.85 15.2891 147.85 15.1082C147.85 14.9602 147.883 14.8123 147.949 14.6643C148.015 14.5163 148.13 14.319 148.278 14.1052L151.797 9.41879H155.25L149.018 17.7228L155.398 26.668H151.928L146.814 19.2027L146.551 19.4329C146.732 19.7782 146.814 20.0742 146.814 20.3044C146.831 20.6004 146.683 20.9457 146.403 21.3074Z"
                fill="currentColor"
              ></path>
              <path
                d="M137.277 9.40234H134.366V26.6516H137.277V9.40234Z"
                fill="currentColor"
              ></path>
              <path
                d="M137.277 4.83008H134.366V7.39526H137.277V4.83008Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <nav
            role="navigation"
            id="w-node-d5229618-d2f9-dcdf-f238-806b9aeacf91-9aeacf7f"
            className="navbar_menu w-nav-menu"
            data-nav-menu-open=""
          >
            <div className="navbar_menu-wrap">
              <div className="navbar_menu-top">
                <a
                  href="/case-studies"
                  className="navbar_menu-item w-inline-block"
                >
                  <div className="navbar_link">Our Work</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="/#services"
                  className="navbar_menu-item w-inline-block"
                >
                  <div className="navbar_link">Services</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a href="/#reviews" className="navbar_menu-item w-inline-block">
                  <div className="navbar_link">Reviews</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a href="/blog" className="navbar_menu-item w-inline-block">
                  <div className="navbar_link">Blogs</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a href="/schema" className="navbar_menu-item w-inline-block">
                  <div className="navbar_link">Schema App</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mobile-menu_bottom-v2">
                <a href="/contact" className="button-link w-inline-block">
                  <div className="hide w-embed"></div>
                  <button type="" className="secondary-button">
                    <div className="secondary-btn-text">Contact us</div>
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
          </nav>
          <div
            id="w-node-d5229618-d2f9-dcdf-f238-806b9aeacf98-9aeacf7f"
            className="navbar_button-wrapper"
          >
            <a
              data-w-id="d5229618-d2f9-dcdf-f238-806b9aeacfa8"
              href="/contact"
              className="navbar-button w-inline-block"
            >
              <div className="navbar-btn-content">
                <div className="button-bg-1"></div>
                <div className="button-bg-2"></div>
                <div className="navbar_text">Start Project</div>
              </div>
              <div className="navbar-light-wrap">
                <div className="navbar-light"></div>
              </div>
            </a>
            <div className="navbar_light-bgtn-wrap">
              <a
                href="/contact"
                className="button-link is-navbar-link w-inline-block"
              >
                <div className="hide w-embed"></div>
                <button type="" className="button is-navbar">
                  <div className="secondary-btn-text is-navbar-text">
                    Start Project
                  </div>
                  <div className="secondary-btn_wrap is-navbar-btn-wrap">
                    <div className="secondary-btn_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 12"
                        fill="none"
                        className="secondary-btn_icon is-navbar-icon"
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
                        className="secondary-btn_icon is-navbar-icon"
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
            <div
              className="mobile-menu-btn w-nav-button w--open"
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="true"
            >
              <div className="navbar-humburger_button-open-v2">
                <div className="navbar-menu-content">
                  <div className="button-bg-1 menu"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="navbar-menu-btn"
                  >
                    <path
                      d="M2 8H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 4H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 12H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-humburger_button-close-copy">
                <div className="navbar-menu-content">
                  <div className="button-bg-1 menu"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="navbar-menu-btn"
                  >
                    <path
                      d="M3.75732 12.2422L12.2426 3.75691"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.94434 3.57812L12.0556 12.4216"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div className="navbar_text">Close</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
        ></div>
      </div>
    </header>
  );
}
export default Navbar;
