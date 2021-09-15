import Layout from "../components/layout";
import UtilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <div className={UtilStyles.center}>
        <h1 className={UtilStyles.headingXl}>404 Not found</h1>
      </div>
    </Layout>
  );
}
