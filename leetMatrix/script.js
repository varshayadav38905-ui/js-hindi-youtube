
function validateUserName (username){
    const trimmedUserName = username.trim();
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    if(!trimmedUserName){
        return false;

    }
    return regex.test(trimmedUserName);

}



async function fetchUserDetails(username){

    //searchButton.textContent = "searching...";
    //searchButton.disabled = true;
    
    const targetUrl = "https://leetcode.com/graphql/" ;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/' ;
    const finalUrl = proxyUrl + targetUrl ;
    const payload =JSON.stringify({
    "query": `query {
    allQuestionsCount {
        difficulty
        count
    }
    matchedUser(username: "${username}") {
        submitStats {
            acSubmissionNum {
                difficulty
                count
                submissions
            }
            totalSubmissionNum {
                difficulty
                count
                submissions
            }
        }
    }
}`
})
const method ="post"
const headers = {
    "Content-Type" : "application/json"
}

   

const storeData =  await fetch (targetUrl, {
        method :method,
        headers : headers,
        body : payload,
    })

 const jsonData = await storeData.json()
    // console.log(jsonData)
    return jsonData.data;

}
const result = await fetchUserDetails();

 console.log(result , "varsha");
 console.log(result.allQuestionsCount,"vaibhav");
 console.log(result.matchedUser, "shahi");
 



// for(let i = 0 ; i < result.allQuestionsCount.length ; i++){
//    console.log(result.allQuestionsCount[i], "A")
// }

// for(let key in result.matchedUser){
//     for(let innerkey in result.matchedUser[key]){
//         for(let value of result.matchedUser[key][innerkey]){
//             console.log(value, "p");
//         }
//     }
// }

function showUserData(username){
    const result = validateUserName(username);
    const finalResult = fetchUserDetails(result);
}
 
document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

})
//  searchButton.addEventListener("click" , showUserData(username));
function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parsedData) {
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")

    }

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logggin username: ", username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })



    



 
 



