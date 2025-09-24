import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Draggable from "gsap/dist/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
const projects = [
  {
    id: "pr0",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=XECH5PXVgJPiv-HgXFfflfs6uzc6Ez3dtmuXdGGG2f2AfddBStpf8zrU_UfrXy9uq-ovhcbl6BL66-qww8IGd_N6q-btN3C1rl4qlaUSqBYRK8g8eoi94BfvbtXYWr2ZTZyCfDDaNeOPx7qy8GX5hDUtiWibXBgCmG_6fahlvk2lAs49npZLHR1uJUCrcxsFse1B0duZ_T1VmP_Yh5DGmRl6VlJclp501f_KQQ",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr1",
    name: "Tarun Tahiliani",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=rlxBpB2CmVn3A77qcpMjZ2vnuC121uZKoeKJ3qaig4r6IHFhQYwnV9ScdouYy-qINLbVXIuieaku8EJgNZ6M8FgO4Iswy8ATmay60rHH9QD_hjcntBqoQLVlz6Z-0P4bNaPnRhQ5OQo1ehPjc7zYQPrrl-w9SvLSCl_lhnMV1yWgYwyQ4pWBb9374A01Zg3VrECkCsPb3u4_FygwC2hC6clZliwC2JC5dfBMfw",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr2",
    name: "Samantha Ruth",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=XECH5PXVgJPiv-HgXFfflfs6uzc6Ez3dtmuXdGGG2f2AfddBStpf8zrU_UfrXy9uq-ovhcbl6BL66-qww8IGd_N6q-btN3C1rl4qlaUSqBYRK8g8eoi94BfvbtXYWr2ZTZyCfDDaNeOPx7qy8GX5hDUtiWibXBgCmG_6fahlvk2lAs49npZLHR1uJUCrcxsFse1B0duZ_T1VmP_Yh5DGmRl6VlJclp501f_KQQ",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr3",
    name: "Shraddha Kapoor",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=wltUqILqFNrwhfQj1Zko43q-zO3hvQ5SDl4299DIDeq8zr0SCJ5beNAWGgt6k_bU_4rCLuQfmD0ZZivJxTW95krrSqq2oQfkCZSkFsWTLsDAwHdxRQ2A3nzw-9AX90gCzs1QLYm4CzJTOXBII8DYyYp_pwd6c2dz8PhojiaGSp6oEO0GU0cUqcwUYvzKYcHVV5NPGaHDi6DC9JQphT-DU4wVQAkXqDP9qXOjBhlHH-QcPb0uPc6FGl7f0M8",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr4",
    name: "Janhvi Kapoor",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=kEtrNCbgtUq8gwB9f_QkhkBbnBL8M78gxNTN87OVb-II7YbP8x1-9d5NBXqRGxfhzFs_wfSjG5-fpgUbTq7Wlva-uScTUdOR82YPCakdMSqkkK_kl8Ns7nzMWznFC0tQeLOweFJ8dLkclYRbL_9jBWFGYcdazPRGbdjGtMoukNgGFwed2BTbNWXUZ7xTmDZEGimjU4tCQJabWRlHPDf5dSk_RDFPql-4sbp7ABewu4wDsFfi3uzLB_mKzIQ",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr5",
    name: "Neha Sharma",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=YXMbtXPnTudWWCq0yDcBOoP4vuoIoqLMV8xDZrEgT8pYksuyWp3K_l_FVXgCbyvy2byrDJNObY-VIz0EivHL0U_WYS9w7JXz9cUuvEnDjTAP54jSqd8Tmh2I1cVtyIARlR6wMsWKlRGsDEt5ZDwsXa66W9ISCYFPryu0DPe8E6dNNESuZgU6lelkgVaB7CljtmMIa4JMYebK79VS-HJFuNf3VBxxmYw5CIsjF8z-O6Un3BQBmaMgZyb8DZ4",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
  {
    id: "pr8",
    name: "Krithi",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=CadRW48vqDxSbfTEFhE5e_1PA3ChIfUONEXxUl6nWAMnTRIFsyYVcRFtveMSb6O_nUYJi2haHLDFPZ8dZogUzTo0Dn0bxAgHcPWCFylYMFkoLWdEcaAPB_g_bu3fXAGBfx6RYnTY8mKATwZAX2OCATM_l7ceOAWjStVjHzoL1zq7CG4J-2dfflRhBFkfIEY6wm5npWB6awtwRipkwQK_A_K0fccv2EC31SKj7fHJLwpYb90MoTh33fl2uNA",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr6",
    name: "Kayadu Lohar",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=5t3OcPjWS1U6gyRmhWrzazd7UVdL9doBh_EGtaTvPqU0NN2VZiRxQPOfls8m5r6ER_2e3dlbyCGZ6Webb1iQk8Igy3Sen8tDjZZQZIsG6mcsLNQ9Xzen1191IbboFELqzhoOKhfEDLLuMa75VR3z2s55J1kDnb3lO9xpZ47Q3MzOxZUTOTzc-fQ9LXxsYMUDV7xejwEjD3EIhU3q39q4YItg_mRvH4o9vP5q8qlji4-oUe23XC6TFSqqe20",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr7",
    name: "Pooja Hegde",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=S0rTOa6fB4Myn3dIpKX5ap490iRA8KgGPMj6jFROdIbd3mHWgR66KBJYH3HMcYNnkrCbRXSNk_Awa_6rVMZlwmFhK2ABXnDtOVXXfWCai50dnKW1x_xTQ4x4X4Gne9-nKD0z2jqtSrmnOIp0tb_6Per30u9AmFO6PAX_imPFMFRg6wnkX0Utz38_kgGlH2aS2FRgNov_Q-MydCyH0ItJZ9g3XpOXqbMZYownMrftqY8Utq1ikQP-nV-TigU",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr9",
    name: "Iswarya Menon",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=mufJt5fTKRP67-yDK9sxCikZYiDol0Lmb7wCes4orPum0l7JMTQx3kSjA2OSipSavQXdU3MhL-pJ4S5wjBAn-dzpkcUn7HOQIIU_KyQ1DBY7AlDk6BtyjfWZLDZi5rvLPguKYiWO1pGvljMj8XpzCVWQOoEuRAcHFmosmkParl0g9qWCQZ_ytw-C41RsjgIeDCWL5aipV_2XkIVuQa2FMb3BKNj4Lq1sd27B6Q",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr10",
    name: "Mrunal_Thakur",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=c18wUK1WPPvZTrcIwzow6kc-ofd-JBJbQ7h2pjTM7wPG6U3e_XyrWGwZJDRhX57L9p15WIQ7HhDmC4jXXXqdB3IefXFtqMYQ9qOCHfNDHK-_XiZ9G38X2HsFlAJc33jYgunygUdJRE3TtYSXP1KY259rMS66wDAqKRNmlJqzvGEaL6XrIwG0Gms3wnQfgDL97tO-JdJyelct14mBtk4u2xH8tOSD1zluxcfNj6Ch8sRBw__BoYTXF2mXi0U",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr7",
    name: "Shiny",
    href: "",
    img: "https://is.zobj.net/image-server/v1/images?r=gC8OqmL-HsOzMznE7vTEowOhXmTuaC-zI9V6jMteWY3xqwbpvJTkzgZ9A4eKIWOEmqdhv6LYhqP2AgLJljPCOc3hwJmsKEJrrT5bSGN31w552idcxvHNSZijSl3LIfCxdFfQYwUwr6eOYYFp59YZ6oBx6TiAULdVm6THgKIW42Uw616fArcGGrxPjf1hsD71HFNzPZVXNnuna-NCCy3COXDu6EKIx2xXqOepikf3a8CS8X3HRjgL0kPr-o0",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
];
const TransmissionSlider = () => {
  useEffect(() => {
    let iteration = 0;
    let trigger;
    let playhead = { offset: 0 }; // Actual target offset
    let lerpedOffset = { value: 0 };
    gsap.set(".cards li", {
      xPercent: 210,
      scale: 0.25,
    });

    const cards = gsap.utils.toArray(".cards li");
    const spacing = 0.105;
    const snapTime = gsap.utils.snap(spacing);
    const sp = window.innerWidth > 1024 ? 210 : 180;
    const dr = window.innerWidth > 1024 ? 0.85 : 0.5;

    const animateFunc = (element) => {
      return gsap.timeline().fromTo(
        element,
        { xPercent: 210 },
        {
          xPercent: -210,
          duration: 1,
          ease: "none",
          immediateRender: true,
        },
        0
      );
    };

    const buildSeamlessLoop = (items, spacing, animateFunc) => {
      const rawSequence = gsap.timeline({ paused: true });
      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100);
        },
      });

      const cycleDuration = spacing * items.length;
      let dur;

      items.concat(items, items, items, items).forEach((item, i) => {
        const anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        if (!dur) dur = anim.duration();
      });

      seamlessLoop.fromTo(
        rawSequence,
        { time: cycleDuration + dur / 2 },
        {
          time: `+=${cycleDuration}`,
          duration: cycleDuration,
          ease: "none",
        }
      );

      return seamlessLoop;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate: () => {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: dr,
      ease: "power4.out",
      paused: true,
    });
    var math = {
      lerp: function lerp(a, b, n) {
        return (1 - n) * a + n * b;
      },
      norm: function norm(value, min, max) {
        return (value - min) / (max - min);
      },
    };

    // Define progressToScroll correctly
    const progressToScroll = (progress) => {
      // Example of how you might calculate scroll progress:
      return gsap.utils.clamp(
        1,
        seamlessLoop.duration() - 1,
        gsap.utils.wrap(0, seamlessLoop.duration(), progress) *
          seamlessLoop.duration()
      );
    };

let previousCenterIndex = null;

function smoothLerpRender() {
  // Smoothly interpolate playhead
  lerpedOffset.value = math.lerp(lerpedOffset.value, playhead.offset, 0.05);
  seamlessLoop.time(wrapTime(lerpedOffset.value));

  // Get current center card index
  const rawIndex = Math.round(lerpedOffset.value / spacing);
  const centerIndex = ((rawIndex % cards.length) + cards.length) % cards.length;

  cards.forEach((card, index) => {
    const isCenter = index === centerIndex;

    // Add/remove class for possible styling
    card.classList.toggle("in-center", isCenter);

    // Set z-index
    gsap.set(card, {
      zIndex: isCenter ? 100 : 1,
    });

    // Animate scale only if index changes
    if (isCenter && index !== previousCenterIndex) {
      gsap.to(card, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      previousCenterIndex = index;
    } else if (!isCenter) {
      gsap.to(card, {
        scale: 0.75,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  requestAnimationFrame(smoothLerpRender);
}


    requestAnimationFrame(smoothLerpRender);

    // 👇 Fix: Better drag handling
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = playhead.offset;
        this.startX = this.x;
      },
      onDrag() {
        const sensitivity = window.innerWidth > 1024 ? 0.0015 : 0.003;
        const deltaX = this.x - this.startX;
        const offsetChange = -deltaX * sensitivity;

        playhead.offset = this.startOffset + offsetChange;
      },
      onRelease() {
        const finalOffset = playhead.offset;
        // Delay snap until after some time (e.g., 300ms)
        setTimeout(() => {
          playhead.offset = snapTime(finalOffset);
        }, 300);
      },
    });
    const cursor = document.querySelector(".custom-cursor");
    const carousel = document.querySelector(".project__carousel");

    let mouse = { x: 0, y: 0 };
    let cursorPos = { x: 0, y: 0 };

    // Smooth LERP motion
    function animateCursor() {
      cursorPos.x = math.lerp(cursorPos.x, mouse.x, 0.1);
      cursorPos.y = math.lerp(cursorPos.y, mouse.y, 0.1);
      gsap.set(cursor, {
        x: cursorPos.x,
        y: cursorPos.y,
      });
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseEnter = () => {
      document.body.style.cursor = "none";
      cursor.style.opacity = 1;
    };

    const onMouseLeave = () => {
      document.body.style.cursor = "auto";
      cursor.style.opacity = 0;
    };

    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("mouseenter", onMouseEnter);
    carousel.addEventListener("mouseleave", onMouseLeave);

    // Cleanup
    return () => {
      carousel.removeEventListener("mousemove", onMouseMove);
      carousel.removeEventListener("mouseenter", onMouseEnter);
      carousel.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="project__carousel">
        <div className="custom-cursor">
          <span>Drag</span>
        </div>
        <input type="hidden" id="nTitle" />
        <section className="projects__gallery bw">
          <ul className="cards__container cards">
            {projects.map((project) => (
              <li key={project.id} className="element">
                <div className="thumbnail-scroll">
                  <a
                    className="ajax-link"
                    href={project.href}
                    data-href={project.href}
                    data-type="project__post"
                    data-from="projects"
                  >
                    <div className="inner__name">
                      <span className="pr-name">
                        <span className="pr-name-big">{project.name}</span>
                      </span>
                    </div>
                    <div className="card__img is-portrait">
                      <div className="overlayer tt-ab" />
                      <img src={project.img} alt={`${project.name}-Index`} />
                    </div>
                  </a>
                  <div className="outer__name">
                    <span className="pr-name cb">
                      <span className="pr-name-big">{project.name}</span>
                    </span>
                  </div>
                </div>
                <div className="props">
                  <input
                    type="hidden"
                    name="school"
                    defaultValue={project.school}
                    data-val={project.school}
                  />
                  {project.tags.map((tag, idx) => (
                    <input
                      key={idx}
                      type="hidden"
                      name="tag"
                      defaultValue={tag}
                      data-val={tag}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <div
          className="drag-proxy"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            // cursor: "none",
          }}
        />
      </div>
    </>
  );
};

export default TransmissionSlider;
