import React from "react";
import "./Profile.css";
import background from "../assests/background.jpg";
import person from "../assests/person.jpg";
import { AiOutlineEdit } from "react-icons/ai";

const Profile = (props) => {
  return (
    <div className="profile_container">
      <div className="image">
        <img src={background} alt="" />
      </div>
      <div className="info_header">
        <img src={person} alt="" />
        <div className="details">
          <h5>Rahul Prajapati</h5>
          <span>abc@gmail.com</span>
        </div>
      </div>
      <div className="main_info_container">
        <div className="profile_info_form">
          <div className="profile_info_form_header">
            <h4>Profile Information</h4>
            <AiOutlineEdit className="profile_info_form_header_edit" />
          </div>
          <div className="main_form">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="totalExperience">Total Experience</label>
            <input type="email" name="totalExperience" />
            <label htmlFor="Role">Role</label>
            <input type="email" name="Role" />
            <label htmlFor="currentProject">Current Project</label>
            <input type="email" name="currentProject" />
          </div>
        </div>
        <div className="skill_set_info">
          <div className="skill_set_info_header">
            <h4>Skill Set</h4>
            <AiOutlineEdit className="skill_set_info_header_edit" />
          </div>
          <div className="skill_set_info_main_form">
            <div>
              <label htmlFor="skill">Skill</label>
              <input type="text" name="skill" />
            </div>
            <div>
              <label htmlFor="experience">Experience</label>
              <div className="experience">
                <input type="text" name="months" />
                <input type="text" name="days" />
              </div>
            </div>
            <div>
              <label htmlFor="github_link">GitHub Link</label>
              <input type="text" name="github_link" />
            </div>
          </div>
          <span className="add_skill">+ Add Skill</span>
        </div>
      </div>
      <div className="button_container">
        <button className="btn_save">SAVE</button>
        <button className="btn_cancel">CANCEL</button>
      </div>
    </div>
  );
};

export default Profile;
