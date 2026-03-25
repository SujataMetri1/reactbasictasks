import React, { useState } from 'react';
import styles from './UserCard.module.css';

function UserCard() {
    let[name,setName]=useState('');
    let [submittedName,setSubmittedName]=useState('');
    let [isActive,setIsActive]=useState(true);
    const [isDarkTheme, setIsDarkTheme]=useState(false)

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = () => {
    if (name.trim() !== '') {
      setSubmittedName(name.trim());
    }
  };

  const toggleActive = () => setIsActive(!isActive);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    const containerStyle = {
    backgroundColor: isDarkTheme ? '#222' : '#f9f9f9',
    color: isDarkTheme ? '#f9f9f900' : '#222',
    transition: 'all 0.3s ease',
  };

  // Badge class based on active/inactive
  const badgeClass = isActive ? styles.active : styles.inactive;

  // Optional: badge color change based on theme (override badge background inline)
  const badgeStyle = {
    backgroundColor: isDarkTheme
      ? (isActive ? '#00cc44' : '#cc4444')
      : undefined, // use CSS module color in light mode
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
      {submittedName && (
        <div style={{ marginTop: '20px' }}>
          <h3>
            Welcome, {submittedName}!
            <span className={`${styles.badge} ${badgeClass}`} style={badgeStyle}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </h3>

          <button onClick={toggleActive} style={{ marginRight: '60px' }}>
            Toggle Active
          </button>

          <button onClick={toggleTheme}>
            Toggle {isDarkTheme ? 'Light' : 'Dark'} Theme
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCard;