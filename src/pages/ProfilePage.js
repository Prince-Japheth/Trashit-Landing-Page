import React, { useState } from "react";
import { Edit2, Copy } from "iconsax-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(
    require("../assets/default-profile.jpg")
  );
  const [referralLinkCopied, setReferralLinkCopied] = useState(false);
  const referredUsers = [
    { name: "John Smith", email: "john.smith@gmail.com" },
    { name: "Emily White", email: "emily.white@gmail.com" },
  ];

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const copyReferralLink = () => {
    const referralLink = "https://example.com/referral/12345"; // Replace with actual referral link
    navigator.clipboard.writeText(referralLink).then(() => {
      setReferralLinkCopied(true);
      setTimeout(() => setReferralLinkCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      className="py-4"
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="card p-4 ms-md-5"
        style={{
          maxWidth: "800px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "#fff",
        }}
      >
        {/* Profile Picture and Edit */}
        <div className="d-flex align-items-center mb-4">
          <div className="me-4 position-relative">
            <label
              htmlFor="upload-photo"
              style={{ cursor: isEditing ? "pointer" : "default" }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  opacity: isEditing ? 0.8 : 1,
                }}
              />
            </label>
            {isEditing && (
              <>
                <input
                  type="file"
                  id="upload-photo"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleProfilePicChange}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: "0",
                    right: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <Edit2
                    name="edit" // Using Edit2 pencil icon
                    size="20"
                    color="#fff"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </>
            )}
          </div>
          <div>
            <h3 style={{ fontWeight: "700", color: "#51b42b", margin: 0 }}>
              Jane Doe
            </h3>
            <p style={{ color: "#777", margin: 0, fontSize: "0.9rem" }}>
              Non-Estate Member
            </p>
          </div>
          <button
            className="btn ms-auto"
            onClick={toggleEdit}
            style={{
              backgroundColor: "#51b42b",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Details */}
        <div className="row g-3">
          {/* Personal Details */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value="Jane Doe"
              readOnly={!isEditing}
              style={{
                backgroundColor: isEditing ? "#fff" : "transparent",
                border: isEditing ? "1px solid #ddd" : "none",
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value="jane.doe@gmail.com"
              readOnly={!isEditing}
              style={{
                backgroundColor: isEditing ? "#fff" : "transparent",
                border: isEditing ? "1px solid #ddd" : "none",
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              value="+23456959696"
              readOnly={!isEditing}
              style={{
                backgroundColor: isEditing ? "#fff" : "transparent",
                border: isEditing ? "1px solid #ddd" : "none",
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              rows="2"
              value="SpringField elm 11 street, north carolina"
              readOnly={!isEditing}
              style={{
                resize: "none",
                backgroundColor: isEditing ? "#fff" : "transparent",
                border: isEditing ? "1px solid #ddd" : "none",
              }}
            ></textarea>
          </div>

          {/* Stats */}
          <div className="col-md-4">
            <label className="form-label">Successful Pickups</label>
            <p
              className="form-control text-center fw-bold"
              style={{
                backgroundColor: "#f7f7f7",
                border: "1px solid #ddd",
                color: "#51b42b",
              }}
            >
              10
            </p>
          </div>
          <div className="col-md-4">
            <label className="form-label">Rejected Pickups</label>
            <p
              className="form-control text-center fw-bold"
              style={{
                backgroundColor: "#f7f7f7",
                border: "1px solid #ddd",
                color: "#ff5a5a",
              }}
            >
              5
            </p>
          </div>
          <div className="col-md-4">
            <label className="form-label">Pending Pickups</label>
            <p
              className="form-control text-center fw-bold"
              style={{
                backgroundColor: "#f7f7f7",
                border: "1px solid #ddd",
                color: "#f0ad4e",
              }}
            >
              2
            </p>
          </div>
        </div>

        {/* Referral Section */}
        <div className="mt-4">
          <h5 className="fw-bold" style={{ color: "#51b42b" }}>
            Referred Users
          </h5>
          <ul className="list-group">
            {referredUsers.length > 0 ? (
              referredUsers.map((user, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{
                    backgroundColor: "#f7f7f7",
                    border: "1px solid #ddd",
                  }}
                >
                  <span>
                    <strong>{user.name}</strong> <br />
                    <small style={{ color: "#777" }}>{user.email}</small>
                  </span>
                </li>
              ))
            ) : (
              <p>No referred users yet.</p>
            )}
          </ul>
          {/* Referral Link */}
          <div className="d-flex align-items-center mt-3">
            <input
              type="text"
              className="form-control"
              value="https://example.com/referral/12345" // Replace with actual referral link
              readOnly
              style={{
                backgroundColor: "#f7f7f7",
                border: "1px solid #ddd",
                color: "#333",
                width: '80%',
              }}
            />
            <button
              className="btn ms-2 d-flex align-items-center ms-auto gap-2"
              onClick={copyReferralLink}
              style={{
                backgroundColor: "#51b42b",
                color: "#fff",
              }}
            >
              <Copy size="20" color="#fff" />
              {referralLinkCopied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
