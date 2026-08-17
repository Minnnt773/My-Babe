import { useRef, useState } from "react";
import "./App.css";

// สร้างหัวใจครั้งเดียว
const hearts = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 5 + Math.random() * 6,
  size: 15 + Math.random() * 30,
}));

function App() {
  const [showLove, setShowLove] = useState(false);

  // ตำแหน่งปุ่ม "ไม่รัก"
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  // ตัวควบคุมเพลง
  const audioRef = useRef(null);

  // กดปุ่ม "รัก"
  const handleLoveClick = () => {
    setShowLove(true);

    // เริ่มเล่นเพลง
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => {
          console.log("ไม่สามารถเล่นเพลงได้:", error);
        });
    }
  };

  // กดปุ่ม "ไม่รัก"
  const handleNoClick = () => {
    // สุ่มตำแหน่งใหม่ทุกครั้ง
    const newX = Math.random() * 180 - 90;
    const newY = Math.random() * 160 - 80;

    setNoPosition({
      x: newX,
      y: newY,
    });
  };

  return (
    <div className="app">

      {/* =================================
          เพลงพื้นหลัง
          ================================= */}

      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
      />


      {/* =================================
          หัวใจพื้นหลัง
          ================================= */}

      <div className="hearts">

        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </span>
        ))}

      </div>


      {/* =================================
          Popup
          ================================= */}

      <div className="popup">

        {!showLove ? (

          <>
            {/* หัวใจตรงกลาง */}

            <div className="big-heart">
              ❤️
            </div>


            {/* คำถาม */}

            <h1>
              รักเค้าไหม
            </h1>

            <p>
              เลือกคำตอบสิ 💕
            </p>


            {/* ปุ่ม */}

            <div className="buttons">

              {/* ปุ่มรัก */}

              <button
                className="yes-button"
                onClick={handleLoveClick}
              >
                รัก
              </button>


              {/* ปุ่มไม่รัก */}

              <button
                className="no-button"
                onClick={handleNoClick}
                style={{
                  transform: `
                    translate(
                      ${noPosition.x}px,
                      ${noPosition.y}px
                    )
                  `,
                }}
              >
                ไม่รัก
              </button>

            </div>

          </>

        ) : (

          /* =================================
             หลังจากกดรัก
             ================================= */

          <div className="love-message">

            <div className="big-heart">
              💗
            </div>

            <h1>
              รักเบบี้เหมือนกัน 💕
            </h1>

            <p>
              เค้ารักเบบี้ที่สุดเลยนะ 🥰
            </p>

            <div className="music-playing">
              🎵 เพลงกำลังเล่น...
            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;