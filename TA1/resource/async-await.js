function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: "Shipping is available in your country!" });
        }, 4000);
    });
}
async function displayData() {
    console.log("Checking country shipping availability...");
    try {
        const data = await fetchData();
        console.log("Success:", data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}
displayData();