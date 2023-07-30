    const formAdd = document.getElementById("form-add");
    let linhas = '';

formAdd.addEventListener('submit', function (e) {
    e.preventDefault();

    const inpName = document.getElementById('nome')
    const inpTel = document.getElementById('tel')

    let lin = '<tr>'
        lin += `<td>${inpName.value}</td>`
        lin += `<td>${inpTel.value}</td>`
        lin += '</tr>'

    linhas += lin
        
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
    
});

