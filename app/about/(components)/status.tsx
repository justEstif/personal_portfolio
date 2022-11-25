type Props = {};

const status = "Available for hire";

const Status = ({}: Props) => {
  return (
    <section className="mb-8">
      <h2 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white">
        Status
      </h2>
      <p>{status}</p>
    </section>
  );
};

export default Status;
