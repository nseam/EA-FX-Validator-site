import styles from './Stats.module.css';

const iframeStyle = {
  height: '100%',
  width: '100%'
};

export default () => {
  return (
    <div className={styles.Stats}>
      <iframe
        src="https://p.datadoghq.eu/sb/9c8633c0-7210-11ec-8e47-da7ad0900005-530b198299b16acddc54e7eb302034b3"
        style={iframeStyle}
        title="EA's Validator Stats"
      />
    </div>
  );
};
