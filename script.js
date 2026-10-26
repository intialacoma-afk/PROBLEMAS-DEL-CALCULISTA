// Ejercicio 12: Ecuación Cuadrática
function calcularRaices() {
    let a = parseFloat(document.getElementById('valA').value);
    let b = parseFloat(document.getElementById('valB').value);
    let c = parseFloat(document.getElementById('valC').value);
    let divRes = document.getElementById('resultado12');
    divRes.style.display = "block";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        divRes.innerHTML = "Por favor, completa todos los campos con números válidos.";
        return;
    }
    if (a === 0) {
        divRes.innerHTML = "El valor de 'a' no puede ser 0 en una ecuación cuadrática.";
        return;
    }

    let D = (b * b) - (4 * a * c);
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        divRes.innerHTML = `<b>La ecuación tiene dos raíces reales.</b><br><b>x1:</b> ${x1}<br><b>x2:</b> ${x2}`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        divRes.innerHTML = `<b>La ecuación tiene una raíz real.</b><br><b>x:</b> ${x}`;
    } else {
        divRes.innerHTML = "<b>La ecuación no tiene raíces reales.</b>";
    }
}

// Ejercicio 13: Estimación de Pi
function estimarPi() {
    let n = parseInt(document.getElementById('valorN').value);
    let divRes = document.getElementById('resultado13');
    divRes.style.display = "block";

    if (isNaN(n) || n <= 0) {
        divRes.innerHTML = "Por favor, ingresa un número entero mayor a 0.";
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 1 / (i * i);
    }

    let piEstimado = Math.sqrt(6 * suma);
    let piReal = Math.PI;
    let diferencia = Math.abs(piReal - piEstimado);

    divRes.innerHTML = `
        <b>Para n = ${n.toLocaleString()}:</b><br>
        • Pi estimado: ${piEstimado}<br>
        • Pi real (Math.PI): ${piReal}<br>
        • Diferencia: ${diferencia}
    `;
}

// Problema 1: Los 35 Camellos
function resolverCamellos() {
    let camellosIniciales = parseInt(document.getElementById('numCamellos').value);
    let divRes = document.getElementById('resultadoCamellos');
    divRes.style.display = "block";

    if (isNaN(camellosIniciales) || camellosIniciales <= 0) {
        divRes.innerHTML = "Por favor, ingresa un número válido de camellos mayor a 0.";
        return;
    }

    // 1. Se añade 1 camello prestado
    let totalConPrestado = camellosIniciales + 1;

    // 2. Se divide y se corta el decimal con Math.floor (redondeo hacia abajo)
    let h1 = Math.floor(totalConPrestado / 2);
    let h2 = Math.floor(totalConPrestado / 3);
    let h3 = Math.floor(totalConPrestado / 9);

    let totalRepartido = h1 + h2 + h3;
    let sobran = totalConPrestado - totalRepartido;

    divRes.innerHTML = `
        <b>Resultado:</b><br>
        • Camellos iniciales = ${camellosIniciales}<br>
        • Total con el camello prestado (+1) = ${totalConPrestado}<br>
        • Hermano 1 (1/2): ${h1} camellos<br>
        • Hermano 2 (1/3): ${h2} camellos<br>
        • Hermano 3 (1/9): ${h3} camellos<br>
        • Total repartido = ${totalRepartido} camellos<br>
        • Sobran: ${sobran} (1 para devolver el prestado y la ganancia del calculista).
    `;
}

// Problema 2: El Reparto de los Panes
function resolverPanes() {
    let p1 = parseInt(document.getElementById('panes1').value);
    let p2 = parseInt(document.getElementById('panes2').value);
    let divRes = document.getElementById('resultadoPanes');
    divRes.style.display = "block";

    let totalPanes = p1 + p2;
    let totalPorciones = totalPanes * 3;
    let consumoPorPersona = totalPorciones / 3;

    let aporteNeto1 = (p1 * 3) - consumoPorPersona;
    let aporteNeto2 = (p2 * 3) - consumoPorPersona;

    divRes.innerHTML = `
        <b>Resultado:</b><br>
        • Total de panes: ${totalPanes} (${totalPorciones} porciones)<br>
        • Aporte neto Viajero 1: ${aporteNeto1} porciones -> <b>7 monedas de plata</b><br>
        • Aporte neto Viajero 2: ${aporteNeto2} porción -> <b>1 moneda de plata</b>
    `;
}