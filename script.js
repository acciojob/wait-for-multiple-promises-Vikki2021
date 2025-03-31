//your JS code here. If required.
// document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');

    // Display Loading row 
    output.innerHTML = '<tr id="loading"><td colspan="2" class="text-center">Loading...</td></tr>';

    function createPromise(name) {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ name, time: (delay / 1000).toFixed(3) });
            }, delay);
        });
    }

    const promises = [
        createPromise('Promise 1'), 
        createPromise('Promise 2'),
        createPromise('Promise 3')
    ];

    Promise.all(promises).then(results => {
        output.innerHTML = '';   

        results.forEach(result => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = result.name;

            const timeCell = document.createElement('td');
            timeCell.textContent = result.time;

            row.appendChild(nameCell);
            row.appendChild(timeCell);

            output.appendChild(row);
        });

        // const totalTime = Math.max(...results.map(r => parseFloat(r.time)));
		const totalTime = Math.max(parseFloat(results[0].time),
        Math.max(parseFloat(results[1].time), parseFloat(results[2].time))
    );
		
		const totalRow = document.createElement('tr');
        totalRow.classList.add('table-success');

        const totalNameCell = document.createElement('td');
        totalNameCell.textContent = 'Total';

        const totalTimeCell = document.createElement('td');
        totalTimeCell.textContent = totalTime.toFixed(3);

        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);

        output.appendChild(totalRow);
    });
// });