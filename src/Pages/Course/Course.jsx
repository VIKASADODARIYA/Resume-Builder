import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDarkMode } from "../../DarkModeContext";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards.jsx";
import "./Course.css";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Course() {
  const [authUser] = useAuth(); // Get authUser from the Auth context
  const { isDarkMode } = useDarkMode();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5002/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className={`main ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="container">
          <div className="sub-container">
            <div className="heading">
              We're delighted to have you <span>Here! :)</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                assumenda? Repellendus, iste corrupti? Tempore laudantium
                repellendus accusamus accusantium sed architecto odio, nisi
                expedita quas quidem nesciunt debitis dolore non aspernatur
                praesentium assumenda sint quibusdam, perspiciatis, explicabo
                sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt
                quis sed magnam consequatur!
              </p>
              <div className="back-btn">
                <a href="/">Back</a>
              </div>
            </div>
            <br />
            <hr />
            {authUser ? (
              <div className="content">
                {book.map((item) => (
                  <Cards key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="content">
                <p>Please log in to read the books.</p>
              </div>
            )}
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
