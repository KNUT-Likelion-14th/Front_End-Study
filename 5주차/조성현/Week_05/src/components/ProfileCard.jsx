export default function ProfileCard({ lion }) {
  return (
    <div className="card">
      <div className="image_wrapper">
        <img src={lion.img || ''} alt="profile" />
        <span className="overlay_badge">14th</span>
      </div>
      <h2 className="card_name">{lion.name}</h2>
      <p className="card_part">{lion.part}</p>
      <p className="card_intro">{lion.comment}</p>
    </div>
  );
}
