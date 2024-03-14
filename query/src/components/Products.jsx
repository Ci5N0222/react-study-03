import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
    const [checked, setChecked] = useState(false);
    const {isLoading, error, data: products} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            console.log('fetching...');
            const response = await fetch(`data/products.json`);
            return response.json();
        }
    })

    const handleChange = () => setChecked((prev) => !prev);

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <>
            <label>
                <input type='checkbox' checked={checked} onChange={handleChange} />
                Show Only 🔥 Sale
            </label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}