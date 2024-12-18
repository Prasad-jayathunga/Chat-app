

document.getElementById("msgType");


function addTask() {
    let userInput = document.getElementById("textUserInput").value;

    document.getElementById("msgType").innerHTML += `
            <li class="d-flex gap-2 justify-content-end"
                <h5>`+ userInput + `</h5> 
            </li>`

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            const raw = JSON.stringify({
              "contents": [
                {
                  "parts": [
                    {
                      "text": userInput
                    }
                  ]
                }
              ]
            });
            
            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
            };
            
            fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDyC-nH0h4gwJ66IBzbPHNqQNTji37xag4", requestOptions)
              .then((response) => response.json())
              .then((result) => {
                console.log(result.candidates[0].content.parts[0].text)  
                document.getElementById("msgType").innerHTML += `
                <li class="d-flex gap-2"
                    <h5>`+ result.candidates[0].content.parts[0].text + `</h5> 
                </li>`
    
              })
              .catch((error) => console.error(error));
}

