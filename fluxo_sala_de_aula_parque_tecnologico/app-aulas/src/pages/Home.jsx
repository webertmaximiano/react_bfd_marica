import CardProduto from "../components/CardProduto";

function Home() {
    return (
        <section>
            <h2>Bem-vindo(a) ao site da HRIC Software!</h2>
            <p>Explore nossos serviços e produtos abaixo:</p>

            <div style={{ display: "flex", gap: "10px" }}>
                <CardProduto nome="Sistema ERP" preco="R$ 500,00" />
                <CardProduto nome="Portal de Transparência" preco="R$ 900,00" />
                <CardProduto nome="Desolara RPG" preco="R$ 59,90" />
            </div>
        </section>
    );
}

export default Home;