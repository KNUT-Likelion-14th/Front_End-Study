import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import './styles/App.css';
import { lions } from './data/lions';

function App() {
  return (
    <>
      <Header />

      <div className="grid_container">
        {lions.map((lion, index) => (
          <ProfileCard key={`card-${index}-${lion.createdAt}`} lion={lion} />
        ))}
      </div>
      
      <div className="babylion_info_container">
        {lions.map((lion, index) => {
          const techArray = lion.tech ? lion.tech.split(',').map(t => t.trim()) : [];
          return (
            <div className="info_container" key={`info-${index}-${lion.createdAt}`}>
              <div className="info_header">
                <h2 className="f-title">{lion.name}</h2>
                <p className="f-highlight">{lion.part}</p>
                <p className="f-body">멋쟁이사자처럼</p>
              </div>

              <div className="info_contact">
                <ul>
                  <li className="f-body"><strong>Email:</strong> {lion.email}</li>
                  <li className="f-body"><strong>Website:</strong> <a href={lion.website} target="_blank" rel="noreferrer">{lion.website}</a></li>
                  <li className="f-body"><strong>Phone:</strong> {lion.phone}</li>
                </ul>
              </div>

              <div className="info_section">
                <h3 className="f-section">관심 기술</h3>
                <ul className="tech_list">
                  {techArray.map((tech, tIndex) => (
                    <li className="f-body" key={tIndex}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="info_section">
                <h3 className="f-section">자기소개</h3>
                <p className="f-body">{lion.intro}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
