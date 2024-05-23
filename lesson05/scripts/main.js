const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            if (confirm("Are you sure you want to permanently delete this entry?")) {
                list.removeChild(li);
                input.focus();
            };    
        });

        input.focus();
        input.value = '';

    } else {
        document.getElementById('favchap').placeholder = "Please insert your favorite scripture.";
    }
})
