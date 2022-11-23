type Props = {};

const status = "Available for hire";

const Status = ({}: Props) => {
  return (
    <section className="mb-8">
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">
        Status
      </h3>
      <p>{status}</p>
    </section>
  );
};

export default Status;
