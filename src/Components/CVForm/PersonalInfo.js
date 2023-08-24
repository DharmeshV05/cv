import React from "react";
function PersonalInfo({
  onFirstName,
  onLastName,
  onAddress,
  onEmail,
  onDescription,
  onTitle,
  onPhoneNumber,
}) {
  return (
    <>
      <div id="personal-info">
        <input type="text" placeholder="First Name" required onChange={onFirstName} />
        <input type="text" placeholder="Last Name" required onChange={onLastName} />
        <input type="text" placeholder="Title" required onChange={onTitle} />
        <input type="text" placeholder="Address" required onChange={onAddress} />
        <input
          type="text"
          placeholder="Phone Number" required
          onChange={onPhoneNumber}
        />
        <input type="text" placeholder="Email" required onChange={onEmail} />
        <textarea
          placeholder="Description"
          className="description"
          onChange={onDescription}
        ></textarea>
      </div>
    </>
  );
}

export default PersonalInfo;
