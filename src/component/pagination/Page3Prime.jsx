import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function PaginatorBasicDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Dummy data creation
        const dummyCustomers = [
            { name: 'John Doe', country: { name: 'USA' }, company: 'ABC Inc.', representative: { name: 'Alice' } },
            { name: 'Jane Smith', country: { name: 'Canada' }, company: 'XYZ Corp.', representative: { name: 'Bob' } },
            { name: 'Michael Johnson', country: { name: 'UK' }, company: 'DEF Ltd.', representative: { name: 'Charlie' } },
            { name: 'Emily Davis', country: { name: 'Australia' }, company: 'GHI Co.', representative: { name: 'David' } },
            { name: 'William Wilson', country: { name: 'Germany' }, company: 'JKL GmbH', representative: { name: 'Emma' } },
            { name: 'Olivia Martin', country: { name: 'France' }, company: 'MNO SA', representative: { name: 'Frank' } },
            { name: 'Daniel Rodriguez', country: { name: 'Spain' }, company: 'PQR SL', representative: { name: 'Grace' } },
            { name: 'Sophia Lee', country: { name: 'Japan' }, company: 'STU Co.', representative: { name: 'Harry' } },
            { name: 'Benjamin Thompson', country: { name: 'Brazil' }, company: 'VWX Ltda.', representative: { name: 'Isabella' } },
            { name: 'Mia Garcia', country: { name: 'Italy' }, company: 'YZ AB', representative: { name: 'Jack' } },
            { name: 'Ethan Hernandez', country: { name: 'China' }, company: '123 Inc.', representative: { name: 'Lily' } },
            { name: 'Amelia Martinez', country: { name: 'Russia' }, company: '456 Ltd.', representative: { name: 'Kevin' } },
            { name: 'Harper Lopez', country: { name: 'India' }, company: '789 Pvt. Ltd.', representative: { name: 'Mia' } },
            { name: 'Sebastian Moore', country: { name: 'South Africa' }, company: '101112 SA', representative: { name: 'Noah' } },
            { name: 'Ava Clark', country: { name: 'Mexico' }, company: '131415 S de RL', representative: { name: 'Oliver' } },
            { name: 'Evelyn Perez', country: { name: 'Argentina' }, company: '161718 SAC', representative: { name: 'Sophia' } },
            { name: 'Liam Turner', country: { name: 'Netherlands' }, company: '192021 BV', representative: { name: 'William' } },
            { name: 'Charlotte Ward', country: { name: 'Switzerland' }, company: '222324 AG', representative: { name: 'Zoe' } },
            { name: 'Alexander Young', country: { name: 'Sweden' }, company: '252627 AB', representative: { name: 'Lucas' } },
            { name: 'Emma Hill', country: { name: 'Norway' }, company: '282930 AS', representative: { name: 'Ava' } }
        ];

        setCustomers(dummyCustomers);
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                <Column header="Actions" style={{ width: '25%' }} body={(rowData) => (
    <div>
        <button >Edit</button>
        <button >Delete</button>
    </div>
)} />
            </DataTable>
        </div>
    );
}
