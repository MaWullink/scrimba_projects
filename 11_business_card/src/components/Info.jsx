import profilePic from "../assets/profile_picture.jpg";
import emailIcon from "../assets/Mail.svg";
import linkedinIcon from "../assets/linkedin.svg";

export default function Info() {
  return (
    <header>
      <img src={profilePic} alt="profile picture" className="profile-picture" />
      <h1>Malene Wullink</h1>
      <p>Frontend Developer</p>
      <div className="contact-links">
        <a className="btn email">
          <img src={emailIcon} className="icon" alt="" />
          <span>Email</span>
        </a>
        <a className="btn linkedin">
          <img src={linkedinIcon} className="icon" alt="" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}
