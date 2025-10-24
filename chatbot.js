function predictDisease() {
    let symptoms = document.getElementById("symptomsInput").value;
    let symptomsArray = symptoms.split(",").map(s => s.trim().toLowerCase());

    fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: symptomsArray })
    })
    .then(response => response.json())
    .then(data => {
        let resultText = data.diseases.length > 0 
            ? "Possible Diseases: " + data.diseases.join(", ") 
            : "No matching disease found.";
        document.getElementById("result").innerText = resultText;
    })
    .catch(error => console.error("Error:", error));
}
function clearField(){
  document.getElementById("predictDisease").value="";
  document.getElementById("clearFields").value="";
}


