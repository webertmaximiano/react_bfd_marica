function Contato() {
    return (
        <section>
            <h2>Fale Conosco</h2>
            <form style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                <label>Nome:</label>
                <input type="text" placeholder="Seu nome" />

                <label>E-mail:</label>
                <input type="email" placeholder="seuemail@exemplo.com" />

                <label>Mensagem:</label>
                <textarea placeholder="Digite sua mensagem..." rows="4" />

                <button type="submit">Enviar</button>
            </form>

            <p style={{ marginTop: "20px" }}>
                hricoficial@gmail.com <br />
                (21) 99724-8557
            </p>
        </section>
    );
}

export default Contato;