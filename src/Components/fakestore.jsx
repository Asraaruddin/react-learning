import axios from "axios";
import { useEffect, useState } from "react";

export function Fakestore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartitems, setCartitems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function LoadCategories() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                response.data.unshift("all");
                setCategories(response.data);
            });
    }

    function LoadProducts(url) {
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            });
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    }, []);

    useEffect(() => {
        setCartCount(cartitems.length);
    }, [cartitems]);

    function handleCategoryChange(e) {
        if (e.target.value === "all") {
            LoadProducts("https://fakestoreapi.com/products");
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddToCartClick(product) {
        setCartitems([...cartitems, product]);
        alert(`${product.title}\nAdded to Cart`);
    }

    return (
        <div className="container-fluid">
            <header className="d-flex bg-light justify-content-between p-2 mt-3">
                <div className="h3">Fakestore.</div>
                <nav>
                    <a href="#">Home</a>
                    <span className="mx-4"><a href="#">Electronics</a></span>
                    <a href="#">Jewelery</a>
                </nav>
                <div>
                    <button data-bs-toggle="modal" data-bs-target="#cart" className="btn bi bi-cart4 position-relative">
                        <span className="badge bg-danger position-absolute rounded rounded-circle">{cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Your Cart Items</h3>
                                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartitems.map(item =>
                                                    <tr key={item.id}>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img width="50" height="50" src={item.image} alt="item" />
                                                        </td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category =>
                                    <option value={category} key={category}>
                                        {category.toUpperCase()}
                                    </option>)
                            }
                        </select>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: '450px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                                <img src={product.image} className="card-img-top" height="120" alt={product.title} />
                                <div className="card-header" style={{ height: '100px' }}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>${product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating?.rate} <span className="bi bi-star-fill text-success"></span></dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => handleAddToCartClick(product)} className="btn btn-warning bi bi-cart4 w-100">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    );
}
