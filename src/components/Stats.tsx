
import React from "react";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-shakes-blue mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-shakes-blue-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="150+" label="Projects Completed" />
          <Stat value="50+" label="Happy Clients" />
          <Stat value="10+" label="Industries Served" />
          <Stat value="5+" label="East African Countries" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
