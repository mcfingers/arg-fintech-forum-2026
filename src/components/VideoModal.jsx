import { createPortal } from "react-dom";
import styles from "./VideoModal.module.css";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.buttonClose}>
          X
        </button>
        <div className={styles.iframeContainer}>
          <iframe
            src={videoUrl}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>,
    document.getElementById("modalWrapper"),
  );
}
