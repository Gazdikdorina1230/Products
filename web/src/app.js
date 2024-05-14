const doc = {
    empBody: document.querySelector('#empBody')
}

const state = {
    getProducts: []
}

function getProducts() {
    const url = 'http://localhost:8000/products';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.productsList = result
        // console.log(state.productsList)  
        renderTable();
    });
}

function renderTable() {
    console.log('renderelés...');
    state.productsList.forEach( emp => {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.description}</td>
            <td>${emp.price}</td>
            <td>${emp.unit}</td>
        `;
        doc.empBody.append(tr);
    })
}

getProducts();