import profileImage from "./images/profile.jpg";

function App() {
  let greeting = "SIVANI.M";
  let description="A calm, hardworking, and determined person who always tries their best. They enjoy learning new skills, thinking creatively, and overcoming challenges. Though they sometimes overthink situations, their dedication and positive attitude help them keep moving forward toward their goals.";
  let cardStyle = {
  border: "2px solid #333",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  textAlign: "center",
  };
  return (
    <div style={cardStyle}>
        <div className="container vh-100 d-flex justify-content-center align-items-center"></div>
      <h1>{greeting}</h1>
      <p>{description}</p>
       <img
        src={profileImage}
        alt="Internal"
        width="150"
        height="150"
        className="mb-3"
      />
        <h4>External Image</h4>
     <img 
     src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=300"
      alt="External"
     width="150"
      height="150"
    />
       
    </div>
  );
}
export default App;