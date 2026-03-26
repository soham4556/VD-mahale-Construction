import React from 'react';
import { clientsData } from '../../data/clientsData';
import './ClientLogos.css';

const ClientLogos = () => {
  return (
    <section className="clients-section border-y">
      <div className="container">
        <p className="clients-label">Trusted by Government & Private Sector Leaders</p>
        <div className="marquee">
          <div className="marquee-content">
            {clientsData.concat(clientsData).map((client, idx) => (
              <div key={idx} className="client-logo-item">
                <span className="logo-placeholder">{client.name}</span>
                {/* <img src={client.logo} alt={client.name} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .border-y { border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); }
      `}</style>
    </section>
  );
};

export default ClientLogos;
