const API_URL = "https://7f2g4rmw47.execute-api.us-east-1.amazonaws.com/createBackupPlan";

document.getElementById('backupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const roleArn = document.getElementById('roleArn').value;
    const responseMessageElement = document.getElementById('responseMessage');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role_arn: roleArn })
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();

        responseMessageElement.textContent = data.body;
    } catch (error) {
        responseMessageElement.textContent = 'An error occurred: ' + error.message;
    }
});
