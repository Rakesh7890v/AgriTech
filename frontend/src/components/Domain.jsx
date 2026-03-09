import React from 'react';

const DomainsContainer = () => {
  return (
    <div className="domains-container">
      <h2 className="domains-title">DOMA<span>INS</span></h2>

      <div className="domains-list">

        <h5 className="domain-item">
          <b>Drones and IoT in Agriculture</b>
          <p> Farmers face difficulty in monitoring large agricultural fields for crop health, pest infestation, irrigation needs, and nutrient deficiencies. Traditional manual inspection is time-consuming, labor-intensive, and often inaccurate, leading to delayed decisions and reduced crop productivity. There is a need for an integrated drone and IoT-based system that can collect real-time data from fields, analyze crop conditions, and provide timely recommendations to farmers for precision agriculture and efficient farm management.</p>        
        </h5>
        <h5 className="domain-item">
          <b>Designing of Farm Implements and Landscaping</b>
          <p> Many small and medium-scale farmers lack access to affordable, efficient, and ergonomic farm implements for land preparation, planting, weeding, and landscaping. Existing machinery is often expensive, fuel-dependent, and unsuitable for small farms or uneven terrains. There is a need to design innovative, low-cost, and energy-efficient farm implements that improve farming efficiency, reduce labor dependency, and support sustainable agricultural landscaping practices.</p>        
        </h5>
        <h5 className="domain-item">
          <b>Water Quality Management in Agriculture</b>
          <p> Poor water quality used in irrigation can negatively affect soil fertility, crop growth, and food safety. Many farmers are unaware of the chemical and biological contaminants present in irrigation water, such as excess salts, heavy metals, pesticides, or harmful microorganisms. There is a need for an efficient system to monitor, analyze, and manage irrigation water quality in real time to ensure safe agricultural practices, protect soil health, and improve crop productivity.</p>        
        </h5>

      </div>
    </div>
  );
};

export default DomainsContainer;