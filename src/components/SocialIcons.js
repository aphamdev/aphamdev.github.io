const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/aphamdev">
        <i className="fa-brands fa-github" aria-hidden="true" title="Anthony Pham GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://gitlab.com/apham.dev">
        <i className="fa-brands fa-gitlab" aria-hidden="true" title="Anthony Pham GitLab Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/anthonypham15/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Anthony Pham LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
