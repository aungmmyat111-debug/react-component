import { useState } from "react";

const hobbiesList = [
  { value: "music", name: "Music" },
  { value: "movie", name: "Movies" },
  { value: "plastic-model", name: "Plastic Model" },
];

const genders = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "others", name: "Others" },
];

// Data structure for dynamic dependent dropdowns
const departmentJobs = {
  Accounting: ["Accountant", "Senior Accountant", "Payroll Officer"],
  IT: ["Developer", "System Analyst", "IT Support"],
  HR: ["HR Manager", "Recruiter"],
};

const initialFormState = {
  username: "",
  firstname: "",
  lastname: "",
  gender: "",
  hobbies: [],
  department: "",
  jobPosition: "",
};

function UserRegistration() {
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle standard text, select, and radio inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "department") {
      // If department changes, update it and clear the previous job position
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        jobPosition: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle multiple checkbox selections for hobbies
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    
    setFormData((prev) => {
      let updatedHobbies = [...prev.hobbies];
      if (checked) {
        updatedHobbies.push(value);
      } else {
        updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
      }
      return { ...prev, hobbies: updatedHobbies };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialFormState);
    setSubmittedData(null); // Hide submitted data on reset
  };

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "sans-serif", border: "1px solid #ccc" }}>
      <div style={{ padding: "10px 20px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #ccc" }}>
        <h3 style={{ margin: 0, color: "#5c6270" }}>User Registration</h3>
      </div>
      
      <form onSubmit={handleSubmit} onReset={handleReset} style={{ padding: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "15px", alignItems: "center" }}>
          
          <label htmlFor="username" style={{ color: "#555" }}>Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={{ padding: "4px", width: "200px" }} />

          <label htmlFor="firstname" style={{ color: "#555" }}>Firstname</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} style={{ padding: "4px", width: "200px" }} />

          <label htmlFor="lastname" style={{ color: "#555" }}>Lastname</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} style={{ padding: "4px", width: "200px" }} />

          <label style={{ color: "#555" }}>Gender</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {genders.map((g) => (
              <label key={g.value} style={{ color: "#555", fontSize: "0.9em" }}>
                <input
                  type="radio"
                  name="gender"
                  value={g.value}
                  checked={formData.gender === g.value}
                  onChange={handleChange}
                  style={{ marginRight: "4px" }}
                />
                {g.name}
              </label>
            ))}
          </div>

          <label style={{ color: "#555" }}>Hobbies</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {hobbiesList.map((h) => (
              <label key={h.value} style={{ color: "#555", fontSize: "0.9em" }}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value={h.value}
                  checked={formData.hobbies.includes(h.value)}
                  onChange={handleHobbyChange}
                  style={{ marginRight: "4px" }}
                />
                {h.name}
              </label>
            ))}
          </div>

          <label htmlFor="department" style={{ color: "#555" }}>Department</label>
          <select id="department" name="department" value={formData.department} onChange={handleChange} style={{ padding: "4px", width: "150px" }}>
            <option value="">-</option>
            {Object.keys(departmentJobs).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <label htmlFor="jobPosition" style={{ color: "#555" }}>Job Position</label>
          <select id="jobPosition" name="jobPosition" value={formData.jobPosition} onChange={handleChange} disabled={!formData.department} style={{ padding: "4px", width: "150px" }}>
            <option value="">-</option>
            {formData.department &&
              departmentJobs[formData.department].map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
          </select>
        </div>

        <hr style={{ margin: "30px -20px 20px -20px", border: "none", borderTop: "1px solid #ccc" }} />
        
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button type="reset" style={{ padding: "6px 16px", cursor: "pointer", border: "1px solid #999", borderRadius: "4px" }}>
            Reset
          </button>
          <button type="submit" style={{ padding: "6px 16px", cursor: "pointer", backgroundColor: "blue", color: "white", border: "1px solid blue", borderRadius: "4px" }}>
            Submit
          </button>
        </div>
      </form>

      {/* Submitted Data Display */}
      {submittedData && (
        <div style={{ padding: "20px", borderTop: "1px solid #ccc", backgroundColor: "#fff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "5px", color: "#555" }}>
            <span>Username</span>
            <span>{submittedData.username}</span>
            
            <span>Firstname</span>
            <span>{submittedData.firstname}</span>
            
            <span>Lastname</span>
            <span>{submittedData.lastname}</span>
            
            <span>Hobbies</span>
            <span>{submittedData.hobbies.join(",")}</span>
            
            <span>Gender</span>
            <span>{submittedData.gender}</span>
            
            <span>Job</span>
            <span>{submittedData.jobPosition}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;