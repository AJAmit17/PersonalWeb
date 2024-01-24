// eslint-disable-next-line react/prop-types
const ServiceLayout = ({ children }) => {
  return (
    <div>
      <section className="pt-24 flex flex-col gap-24" id="services">
        {children}
      </section>
    </div>
  );
};

export default ServiceLayout;
