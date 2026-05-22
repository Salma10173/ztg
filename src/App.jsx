import { useState, useRef, useCallback } from "react";
import "./App.css";

const tracks = ["/i%20love%20you%20.opus", "/muah.opus"];

export default function App() {
  const [open, setOpen] = useState(false);
  const [showLove, setShowLove] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [loveAnswered, setLoveAnswered] = useState(false);
  const [noStyle, setNoStyle] = useState({});
  const audioRef = useRef(null);
  const trackIndex = useRef(0);

  const playNext = useCallback(() => {
    const next = trackIndex.current + 1;
    if (next < tracks.length && audioRef.current) {
      trackIndex.current = next;
      audioRef.current.src = tracks[next];
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handleNoHover = () => {
    const x = (Math.random() - 0.5) * 500;
    const y = (Math.random() - 0.5) * 400;
    setNoStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  const handleYes = () => {
    if (audioRef.current) {
      trackIndex.current = 0;
      audioRef.current.src = tracks[0];
      audioRef.current.play().catch((err) => {
        console.warn("Audio play error:", err);
      });
    }
    setLoveAnswered(true);
  };

  return (
    <div className={`container ${loveAnswered ? "romantic" : ""}`}>
      <audio ref={audioRef} onEnded={playNext} />

      <div className="firework fire1"></div>
      <div className="firework fire2"></div>

      <div className="heart h1">❤️</div>
      <div className="heart h2">💖</div>
      <div className="heart h3">💕</div>
      <div className="heart h4">💗</div>
      <div className="heart h5">💝</div>
      <div className="heart h6">🌹</div>

      {!open && !showLove ? (
        <div className="btn-stack">
          <button className="btn" onClick={() => setOpen(true)}>
            اضغط هنا 🎁
          </button>
         
        </div>
      ) : open && !showLove ? (
        <div className="card">
          <h1>✨ عيد مبارك ✨</h1>
          <p className="romance-text1">

  كل عام وأنت بخير يا أجمل وأغلى إنسان في حياتي 💖
  <br />
  الله يجعل أيامك كلها فرح وسعادة وراحة بال ✨
  <br />
  ويدخل عليك هذا العيد بالصحة والهنا
             وتحقيق كل ما تتمنا🌙🤍
  <br />

  يارب يبعد عليك الحزن والتعب，
  <br />
  ويفتح لك أبواب الخير والنجاح
 من حيث لا تحتسب 🌸
  <br />
  ويجعل قلبك دائماً مليئاً
  بالطمأنينة والفرحة 💕
  <br />

  أتمنى لكِ عيداً مليئاً بالحب
  والضحكات الجميلة，
  <br />
  وأن تبقي دائماً تلك الروح الجميلة
  التي تنير حياة من حولك 🌹✨
  <br />
  <strong>
    💫 حفظك الله وأسعد قلبك في كل لحظة，
    <br />
    وجعل كل أيامك أعياد وفرح لا ينتهي 💫
  </strong>

</p>
          <div className="love">❤️ 💕 ❤️ 💕 ❤️</div>
          <button className="btn-love card-btn" onClick={() => setShowLove(true)}>
            😏 Clique ici
          </button>
        </div>
      ) : showLove && !envelopeOpen ? (
        <div className="envelope-wrapper" onClick={() => setEnvelopeOpen(true)}>
          <div className="envelope">
            <div className="env-flap">
              <span className="env-seal">💖</span>
            </div>
            <div className="env-body">
              <div className="env-icon">✉️</div>
              <p className="env-text">Ouvre-moi 💌</p>
            </div>
          </div>
        </div>
      ) : showLove && envelopeOpen && !loveAnswered ? (
        <div className="card question-card">
          <h2 className="question-title">💖 Est-ce que tu m'aimes ?</h2>
          <div className="btn-group">
            <button className="btn-yes" onClick={handleYes}>OUI ✅</button>
            <button
              className="btn-no"
              style={noStyle}
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
            >NON ❌</button>
          </div>
        </div>
      ) : (
        <div className="card romance-card">
          <div className="rose-top">🌹</div>
          <h1 className="romance-title">💖 Je t'aime ! 💖</h1>
          <p className="romance-text">

  Tu es la plus belle chose qui me soit arrivée dans la vie 💖
  <br />

  Depuis que je t’ai rencontrée,
  mon monde est devenu plus beau.
  <br />

  Ton sourire illumine mes journées
  et ton amour fait battre mon cœur ✨

  <br /><br />

  🌹 Peu importe le temps ou la distance,
  je t’aimerai toujours plus fort chaque jour 🌹

  <br /><br />

  <strong>
    💫 Tu es mon bonheur,
    mon cœur et ma plus belle histoire 💫
  </strong>

</p>
          <div className="roses">🌹 💖 🌹 💖 🌹</div>
          <div className="rose-bottom">🌹</div>
        </div>
      )}
    </div>
  );
}
