let count =0;
document.getElementById('input-btn').addEventListener('click', function () {
    count++;
    const inputFiledPrevious=document.getElementById('input-value')
    const inputFiled = inputFiledPrevious.value;
    inputFiledPrevious.value='';
    const setTodo=document.getElementById('content-container')
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
    <td>${count}</th>
    <td>${inputFiled}</td>
    <td>
    <button  class="delete-todo btn btn-danger px-4">Delete</button>
    <button class="complete-todo btn btn-success px-4">Complete</button>
    </td>
    `
    setTodo.appendChild(tr)


    const allClass=document.querySelectorAll('.delete-todo');
    for (const element of allClass) {
        
        element.addEventListener('click', function (event) {
            const removeTr =event.target.parentNode.parentNode.style.display='none';
            
        })
    }

    document.getElementById('clear-btn').addEventListener('click', function () {
        const clearElements =document.getElementById('content-container');

        clearElements.style.display='none';
        
    })

})
