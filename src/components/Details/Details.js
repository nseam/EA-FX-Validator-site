import styles from './Details.module.css';

const iframeStyle = {
  height: '100%',
  width: '100%'
};

export default () => {
  return (
    <div className={styles.Details}>
      <iframe
        src="https://explorer.functionx.io/fxcore/validator/fxvaloper1337eaaxxqd7l3jw6hwsrh0rvcjgfzgwqdtfq8x"
        style={iframeStyle}
        title="EA's Validator Details"
      />
    </div>
  );
};
