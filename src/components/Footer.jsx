import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white rounded-4xl p-10">
      <aside className="uppercase">
    
        <p className="text-[#C5FF41] text-2xl font-bold">
          Devlop.me
          
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Say hello</h6>
        <a className="link link-hover">emonmahmud083@gmail.com</a>
        <h6 className="footer-title">Call</h6>
        <a className="link link-hover">01737103169</a>
      </nav>
      <nav>
        <h6 className="footer-title">Menu</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Portfolio</a>
        <a className="link link-hover">Blogs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
      </nav>
    </footer>
  );
};

export default Footer;
