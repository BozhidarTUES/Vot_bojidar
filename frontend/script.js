const backendUrl = 'http://backend-service:5000';

const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');


async function loadData() {
    const response = await fetch(`${backendUrl}/items`);
    const data = await response.json();
    list.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        list.appendChild(li);
    });
}


addBtn.addEventListener('click', async () => {
    const value = input.value.trim();
    if (!value) return;

    await fetch(`${backendUrl}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: value })
    });

    input.value = '';
    loadData();
});


loadData();
