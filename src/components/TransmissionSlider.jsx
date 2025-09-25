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
    img: "https://www.mrunalinirao.com/cdn/shop/files/MR_417.jpg?v=1742968881",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr1",
    name: "Tarun",
    href: "",
    img: "https://www.mrunalinirao.com/cdn/shop/files/MR_419.jpg?v=1742968881",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr2",
    name: "Samantha",
    href: "",
    img: "https://www.mrunalinirao.com/cdn/shop/files/MR__406.jpg?v=1743139657",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr3",
    name: "Shraddha",
    href: "",
    img: "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:1000)/Manish_1/HT_Show_18_styles_27.03.25/MM-PR-SK-72156-CR_C-XS/MM-PR-SK-72156-CR_C-XS-1.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr4",
    name: "Janhvi",
    href: "",
    img: "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:1000)/Manish_1/HT_Show_18_styles_27.03.25/MM-PR-SK-72156-CR_C-XS/MM-PR-SK-72156-CR_C-XS-3.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr5",
    name: "Neha",
    href: "",
    img: "https://cdn.pixelbin.io/v2/black-bread-289bfa/t.resize(w:1000)/Manish_1/HT_Show_18_styles_27.03.25/MM-PR-SK-72156-CR_C-XS/MM-PR-SK-72156-CR_C-XS-2.jpg",
    school: "Osaka_Institute_of_Fashion",
    tags: ["Shape", "Sustainability"],
  },
  {
    id: "pr8",
    name: "Tarun",
    href: "",
    img: "https://www.cdnensemble.xyz/pub/media/catalog/product/cache/391a5e1abf666a8c41861a6cd6227bf9/7/1/71223tt19-1.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: [],
  },
  {
    id: "pr6",
    name: "Tarun",
    href: "",
    img: "https://www.cdnensemble.xyz/pub/media/catalog/product/cache/391a5e1abf666a8c41861a6cd6227bf9/7/1/71223tt19-2.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Material", "Craftsmanship"],
  },
  {
    id: "pr7",
    name: "Tarun",
    href: "",
    img: "https://www.cdnensemble.xyz/pub/media/catalog/product/cache/391a5e1abf666a8c41861a6cd6227bf9/7/1/71223tt19-3.jpg",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr9",
    name: "Iswarya",
    href: "",
    img: "https://www.rohitandrahul.com/cdn/shop/files/RG_RK3528.jpg?v=1750744997&width=1946",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr10",
    name: "Mrunal",
    href: "",
    img: "https://www.rohitandrahul.com/cdn/shop/files/TP44000_SKT12712_FRONT.jpg?v=1751866324&width=1946",
    school: "Shenkar_College_of_Engineering,_Design_and_Arts",
    tags: ["Tailoring"],
  },
  {
    id: "pr7",
    name: "Shiny",
    href: "",
    img: "https://www.rohitandrahul.com/cdn/shop/files/LNGA-49.jpg?v=1691764839&width=1946",
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
