import styles from './Projects.module.css';

const iframeStyle = {
  height: '100%',
  width: '100%'
};

export default () => {
  return (
    <div className={styles.Projects}>
      <iframe
        src="https://ea31337.github.io/EA31337"
        style={iframeStyle}
        title="EA's Validator Projects"
      />
    </div>
  );
};
