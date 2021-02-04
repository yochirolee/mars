import "./SliderInfo.css";
export default function SliderInfo({ activeSlide }) {
  return (
    <div className="main-info">
      <h3>{activeSlide.title}</h3>
      <p>{activeSlide.info}</p>
      <button className="btn">{activeSlide.btnText}</button>
    </div>
  );
}
