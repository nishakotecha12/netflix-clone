import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utilis/firebase-config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          
          </div>
        </div>
      </div>

      
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    display: grid;
    grid-template-rows: 15vh 85vh;

    .header {
      display: flex;
      align-items: center;
      padding: 0 2rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      background-color: #1a1a1a;
    }

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 30vw;
        max-width: 400px;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: white;

        .container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;

          input {
            padding: 0.7rem 1rem;
            width: 100%;
            border: none;
            border-radius: 0.3rem;
            background-color: #333;
            color: white;
            font-size: 1rem;
            outline: none;
          }

          button {
            padding: 0.7rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.3rem;
            font-weight: bold;
            font-size: 1.1rem;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: #b00610;
            }
          }
        }
      }
    }
  }
`;
