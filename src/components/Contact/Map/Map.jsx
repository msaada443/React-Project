import Iframe from "react-iframe";
const Map = () => {
  return (
    <div className="map">
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18965.13015231077!2d34.45108417212436!3d31.514337614517004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1689142838290!5m2!1sar!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
      />
    </div>
  );
};

export default Map;
