import Button from "@components/Button";

const Home = () => {
  return (
    <>
      <Button
        variant="primary"
        size="xl"
        disabled={false}
        onClick={() => alert("wow a button")}
      >
        Primary
      </Button>

      <Button
        variant="info"
        size="lg"
        disabled={false}
        onClick={() => alert("wow a button")}
      >
        Primary
      </Button>

      <Button
        variant="primary"
        size="md"
        disabled={false}
        onClick={() => alert("wow a button")}
      >
        Primary
      </Button>
      <Button
        variant="primary"
        size="sm"
        disabled={false}
        onClick={() => alert("wow a button")}
      >
        Primary
      </Button>
    </>
  );
};

export default Home;
