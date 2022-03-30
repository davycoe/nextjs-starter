import Button from "@components/Button";

const Home = () => {
  return (
    <>
      <Button variant="primary" size="xl" disabled={false}>
        Primary
      </Button>

      <Button variant="info" size="lg" disabled={false}>
        Primary
      </Button>

      <Button variant="primary" size="md" disabled={false}>
        Primary
      </Button>
      <Button variant="primary" size="sm" disabled={false}>
        Primary
      </Button>
    </>
  );
};

export default Home;
