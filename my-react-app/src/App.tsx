import { useState } from "react";
import "./App.css";

function App() {
  const [showLove, setShowLove] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const hearts = Array.from({ length: 25 });

  const handleNoClick = () => {
    // ครั้งแรกให้ปุ่ม "ไม่รัก" ขยับ
    // ครั้งต่อไปไม่ขยับ
    if (noPosition.x === 0 && noPosition.y === 0) {
      setNoPosition({
        x: Math.random() * 180 - 90,
        y: Math.random() * 160 - 80,
      });
    }
  };

  return (
    <div className="app">

      {/* หัวใจลอย */}
      <div className="hearts">
        {hearts.map((_, index) => (
          <span
            key={index}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
              fontSize: `${15 + Math.random() * 30}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Popup */}
      <div className="popup">

        {!showLove ? (
          <>
            <div className="big-heart">❤️</div>

            <h1>รักเค้าไหม</h1>

            <p>เลือกคำตอบสิ 💕</p>

            <div className="buttons">

              <button
                className="yes-button"
                onClick={() => setShowLove(true)}
              >
                รัก
              </button>

              <button
                className="no-button"
                onClick={handleNoClick}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                }}
              >
                ไม่รัก
              </button>

            </div>
          </>
        ) : (
          <div className="love-message">
            <div className="big-heart">💗</div>

            <h1>รักเบบี้เหมือนกัน 💕</h1>

            <p>เค้ารักเบบี้ที่สุดเลยนะ 🥰</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;