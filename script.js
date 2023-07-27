const usersData = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    usersData.unshift(userData);

    updateDisplayData();
});

function updateDisplayData() {
    const displayData = document.getElementById('display-Data');
    let output = ' ';

    usersData.forEach(user => {
        output += `
        <div id="displayData">
            <img src="${user.photo}" alt="Image" width="70px">
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Address:</strong> ${user.address}</p>
            <p><strong>Portfolio:</strong> <a href="${user.portfolio}" target="_blank">${user.portfolio}</a></p>
            <p><strong>GitHub:</strong> <a href="${user.github}" target="_blank">${user.github}</a></p>
            <p><strong>LinkedIn:</strong> <a href="${user.linkedin}" target="_blank">${user.linkedin}</a></p>
            <p><strong>Applying For:</strong> ${user.position}</p>
            <p><strong>Availability:</strong> ${user.availability}</p>
            <p><strong>Additional Information:</strong> ${user.additionalInfo}</p>
        </div>
        `;
    });

    displayData.innerHTML = output;
}
