import React from "react";
import GitHubSvg from "./github.svg";
export default function Footer() {
  return (
    <footer id="footer">
      <p>DHARMESHV05</p>
      <a target="_blank" rel="noreferrer" href="https://github.com/">
        <img id="footer-img" alt="gitgub svg for ref" src={GitHubSvg} />
      </a>
    </footer>
  );
}
