import React from 'react';
import certificate1 from '../../../images/certificates/Certificate1.png';
import certificate2 from '../../../images/certificates/Certificate2.png';
import certificate3 from '../../../images/certificates/Certificate3.png';
import certificate4 from '../../../images/certificates/Certificate4.png';

const CertificatesContent = () => {
    const certificateImages = [
        certificate1,
        certificate2,
        certificate3,
        certificate4
    ];

    return (
        <div className="tab-content certificates-content">
            <div className="certificates-grid">
                {certificateImages.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Сертификат ${index + 1}`} 
                        className="certificate-image" 
                    />
                ))}
            </div>
        </div>
    );
};

export default CertificatesContent; 