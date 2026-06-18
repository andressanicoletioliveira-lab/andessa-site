function mostrarMensagem() {

    const frases = [
        "🏐 Não importa sua altura, mas até onde você consegue saltar!",
        "🔥 O talento floresce, mas o esforço dá frutos.",
        "🧡 Continue avançando, mesmo quando parecer impossível.",
        "⚡ A determinação é a verdadeira força de um campeão.",
        "🏆 Voe mais alto, como os Corvos da Karasuno!"
    ];

    const aleatoria =
        frases[Math.floor(Math.random() * frases.length)];

    document.getElementById("mensagem").innerText = aleatoria;
}