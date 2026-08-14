import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function NumberItem({ number, icon, text }) {
  const counterRef = useRef();
  const itemRef = useRef();

  useGSAP(() => {
    const start = 0;
    const end = Number(number) || 0;
    const obj = { val: start };

    const tween = gsap.to(obj, {
      val: end,
      duration: 4,
      ease: "power1.inOut",
      snap: { val: 1 },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = String(Math.round(obj.val));
        }
      },
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      if (tween) {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      }
    };
  }, [number]);

  return (
    <div className="number-item" ref={itemRef}>
      <img src={icon} alt="" className="number-icon" />
      <h2 className="number-title" ref={counterRef}>
        0
      </h2>
      <p className="number-text">{text}</p>
    </div>
  );
}
