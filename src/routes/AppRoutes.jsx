import { Footer, Header } from "../components/index";
import { About, Blog, Contact, Home, News, Services } from "../pages/index";
import "../styles/normalize.css";
import "../styles/style.css";
import "../styles/about.css";
import "../styles/services.css";
import "../styles/blog.css";
import "../styles/contact.css";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/latest-news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
