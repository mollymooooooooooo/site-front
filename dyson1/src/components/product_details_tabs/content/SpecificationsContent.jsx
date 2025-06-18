import React from 'react';

const SpecificationsContent = () => {
    const specifications = [
        { label: 'Длина шнура', value: '2,2 м' },
        { label: 'Время беспроводной работы', value: '30 минут' },
        { label: 'Время для полного заряда', value: '70 минут' },
        { label: 'Напряжение', value: '10.8-16.8 В' },
        { label: 'Время для зарядки на 90 %', value: '40 минут' },
        { label: 'Вес', value: '1 кг' },
    ];

    return (
        <div className="tab-content specifications-content-wrapper">
            <table className="specifications-table">
                <tbody>
                    {specifications.map((spec, index) => (
                        <tr key={index}>
                            <td>{spec.label}</td>
                            <td>{spec.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SpecificationsContent; 