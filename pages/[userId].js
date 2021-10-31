import App from "../Components/App";

function IndexPage({ props }) {
  return <App props={props} />;
}

export default IndexPage;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://raw.githubusercontent.com/egrigokhan/dummy-data/main/test-room.json`
  );
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      props: { ...data, params: context.params }
    }
  };
}
