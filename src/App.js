import profile from "./images/profile.jpg";

function App() {
  let greeting = "SIVANI.M";
  let description = "A calm, hardworking, and determined person who always tries their best. They enjoy learning new skills, thinking creatively, and overcoming challenges. Though they sometimes overthink situations, their dedication and positive attitude help them keep moving forward toward their goals.";
  let cardStyle = {
    border: "2px solid #333",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    textAlign: "center",
  };
  return (
    <div style={cardStyle}>
      <img src="https://m.media-amazon.com/images/M/MV5BYjFjZGRjMWYtZTA5MS00OTZkLWI1MjctNDQ2NmQzMWM1NzRhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg" />

      <img
        src="https://www.google.com/imgres?q=messi&imgurl=https%3A%2F%2Fassets.goal.com%2Fimages%2Fv3%2Fblt0aba06d6d8d40e8e%2F1-1%2520(5).png%3Fquality%3D60%26auto%3Dwebp%26format%3Dpjpg&imgrefurl=https%3A%2F%2Fwww.goal.com%2Fen-in%2Foriginals%2Flife-after-lionel-messi-argentina-next-no-10%2Fblt8d51511076ead3d7&docid=feMIdQuCeUIGVM&tbnid=DnSb4qQm_vXORM&vet=12ahUKEwjsjNeW16SXAxU0k-EIHbBSGQMQnPAOegQIPRAA..i&w=1200&h=1200&hcb=2&itg=1&ved=2ahUKEwjsjNeW16SXAxU0k-EIHbBSGQMQnPAOegQIPRAA" />
      <img src="https://www.facebook.com/photo/?fbid=122183665670339575&set=gm.2020097332079182&idorvanity=600339640721632&__cft__[0]=AZj34IRCwdfcpwd27U1OJQdwpLoojdGvinoi1P0VJzn9B96wa6LProIm-XIxONgy8d7_i30xQI07ShPEcsmpF5H5pwpfWKWJaFUSZnsaUcDQv8PzUKSkrjCYlJPktmTnTDUgPuvIz31QL8Whqr6N4ztkHHkLG_L2U2xYSxvCTXeyhkaQN8n4hNyfKOVfUwfUUWFO&__tn__=EH-R" />
      <div className="container"> </div>
      <img src={profile} />
      <h1>{greeting}</h1>
      <p>{description}</p>




    </div>

  );
}
export default App;