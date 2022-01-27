import styles from './Projects.module.css';

const iframeStyle = {
  height: '100%',
  width: '100%'
};

export default () => {
  return (
    <div className={styles.Projects}>
      <iframe
        src="https://ea31337.github.io/"
        style={iframeStyle}
        title="EA31337 Projects"
      />
    </div>
  );
};
