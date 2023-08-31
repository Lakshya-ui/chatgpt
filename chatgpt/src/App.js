import React, { useState } from "react";
import "./App.css";



function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleUpload = () => {
    // Implement your upload logic here
  };

  const handleSearch = () => {
    // Implement your search logic using the 'searchQuery' state
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="App">
      {/* ... */}
      
      <aside className="sidemenu"><h3>COMPANY NAME</h3></aside>
      <section className="chatbox">
        <div className="newfile">
          <span>New File</span>
          <br />
          <br />
          <span>New Project</span>
        </div>
        <div className="signup">
          {isAuthenticated ? (
            uploadedImage ? (
              <button className="upload-b" onClick={handleUpload}>
                UPLOAD
              </button>
            ) : (
              <>
                <label htmlFor="file-input" className="upload-button">
                  Choose File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input"
                  id="file-input"
                  onChange={handleImageChange}
                />
              </>
            )
          ) : (
            <>
              <input
                type="email"
                className="sign"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                className="sign"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login">
                <button className="auth-button" onClick={handleSignUp}>
                  Sign Up
                </button>
                <br />
                <button className="auth-button" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </>
          )}
        </div>

        <div className="inpholder">
      
          {uploadedImage && (
            <div className="uploaded-image">
              <img
                style={{ width: "400px", height: "200px" }}
                src={uploadedImage}
                
              />
           
            </div>
          )}
          <div className="chattext">
           
            <button className="search-button" onClick={handleSearch}>
        
            </button>
            
         
            <input
            
              type="text"
              className="search-bar"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}   
             
            /> 
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default App;
