//----------------------calculadora hipotenusa-----------------------
function calcularHipotenusa() {
    const cateto1 = parseFloat(document.getElementById('cateto1').value);
    const cateto2 = parseFloat(document.getElementById('cateto2').value);

    if (isNaN(cateto1) || isNaN(cateto2) || cateto1 <= 0 || cateto2 <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos e positivos para os catetos.';
        return;
    }

    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    document.getElementById('resultado').textContent = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
}

//----------------------calculadora area/perimetro-----------------------
const figuraSel = document.getElementById('figura');
const campos = document.getElementById('campos-figura');
const btnCalc = document.getElementById('calcular-area');
const res = document.getElementById('res-figura');

function mostrarCampos(tipo) {
    campos.innerHTML = '';
    if (tipo === 'quadrado') {
        campos.innerHTML = `<label>Lado (a): <input id="a" type="number"  min="0" step="any"></label>`;
    } else if (tipo === 'retangulo') {
        campos.innerHTML = `<label>Largura (b): <input id="b" type="number"  min="0" step="any"></label>
                        <label>Altura (h): <input id="h"  min="0" type="number" step="any"></label>`;
    } else if (tipo === 'triangulo') {
        campos.innerHTML = `<label>Base (b): <input id="b" type="number"  min="0" step="any"></label>
                        <label>Altura (h): <input id="h"  min="0" type="number" step="any"></label>`;
    } else if (tipo === 'circulo') {
        campos.innerHTML = `<label>Raio (r): <input id="r" type="number" min="0" step="any"></label>`;
    }
}

figuraSel.addEventListener('change', () => mostrarCampos(figuraSel.value));
mostrarCampos(figuraSel.value); // inicial

btnCalc.addEventListener('click', () => {
    const tipo = figuraSel.value;
    let texto = '';
    if (tipo === 'quadrado') {
        const a = parseFloat(document.getElementById('a').value) || 0;
        const area = a * a;
        const per = 4 * a;
        texto = `Área = ${area.toFixed(2)} · Perímetro = ${per.toFixed(2)} (fórmula: A = a², P = 4a)`;
    } else if (tipo === 'retangulo') {
        const b = parseFloat(document.getElementById('b').value) || 0;
        const h = parseFloat(document.getElementById('h').value) || 0;
        const area = b * h;
        const per = 2 * (b + h);
        texto = `Área = ${area.toFixed(2)} · Perímetro = ${per.toFixed(2)} (A = b·h, P = 2(b+h))`;
    } else if (tipo === 'triangulo') {
        const b = parseFloat(document.getElementById('b').value) || 0;
        const h = parseFloat(document.getElementById('h').value) || 0;
        const area = b * h / 2;
        texto = `Área = ${area.toFixed(2)} (fórmula: A = b·h/2). Perímetro depende dos lados (não fornecidos).`;
    } else if (tipo === 'circulo') {
        const r = parseFloat(document.getElementById('r').value) || 0;
        const area = Math.PI * r * r;
        const per = 2 * Math.PI * r;
        texto = `Área = ${area.toFixed(2)} · Perímetro = ${per.toFixed(2)} (use π ≈ ${Math.PI.toFixed(3)})`;
    }
    res.textContent = texto;
});

//----------------------conversor de unidades-----------------------
const coef = { mm: 0.001, cm: 0.01, m: 1, km: 1000 }; // todas em metros
document.getElementById('btn-conv').addEventListener('click', () => {
    const v = parseFloat(document.getElementById('valorConv').value) || 0;
    const de = document.getElementById('un-de').value;
    const para = document.getElementById('un-para').value;
    const inMeters = v * coef[de];
    const out = inMeters / coef[para];
    document.getElementById('res-conv').textContent = `${v} ${de} = ${out} ${para}`;
})