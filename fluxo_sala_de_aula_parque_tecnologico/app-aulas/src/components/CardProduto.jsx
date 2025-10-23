function CardProduto({ nome, preco }) {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "180px" }}>
            <h3>{nome}</h3>
            <p>{preco}</p>
            <button>Ver mais</button>
        </div>
    );
}

export default CardProduto;