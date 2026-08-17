import { useState } from "react";
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

  // ตำแหน่งปุ่มไม่รัก
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  // กด "ไม่รัก"
  // ปุ่มจะย้ายตำแหน่ง แต่หัวใจจะไม่ถูก Reset
  const handleNoClick = () => {
    const newX = Math.random() * 180 - 90;
    const newY = Math.random() * 160 - 80;

    setNoPosition({
      x: newX,
      y: newY,
    });
  };

  return (
    <div className="app">

      {/* =========================
          หัวใจพื้นหลัง
          จะลอยต่อเนื่องตลอดเวลา
      ========================= */}

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

      {/* =========================
          Popup
      ========================= */}

      <div className="popup">

        {!showLove ? (
          <>
            <div className="big-heart">
              ❤️
            </div>

            <h1>รักเค้าไหม</h1>

            <p>
              เลือกคำตอบสิ 💕
            </p>

            <div className="buttons">

              {/* รัก */}
              <button
                className="yes-button"
                onClick={() => setShowLove(true)}
              >
                รัก
              </button>

              {/* ไม่รัก */}
              <button
                className="no-button"
                onClick={handleNoClick}
                style={{
                  transform: `translate(
                    ${noPosition.x}px,
                    ${noPosition.y}px
                  )`,
                }}
              >
                ไม่รัก
              </button>

            </div>
          </>
        ) : (

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

          </div>

        )}

      </div>

    </div>
  );
}

export default App;