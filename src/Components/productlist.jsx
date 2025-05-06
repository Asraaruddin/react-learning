import { useFetchexample } from "./usefetchexample";

export function ProductList() {
  const { data, loading, error } = useFetchexample("https://fakestoreapi.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
