
document.getElementById('input-btn').addEventListener('click', function (event) {
    const inputFiled = document.getElementById('input-value');

    const tr =document.createAttribute('tr');
    tr.innerHTML+=`
    <th scope="row"></th>
    <td>Mark</td>
    <td>Otto</td>
    `
    console.log(tr);
})