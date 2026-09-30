
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
     console.log(jsonData)
     solvedQues(jsonData.data)
   // return jsonData.data;

}
const result =  fetchUserDetails();

  console.log(result , "varsha");
//   console.log(result.allQuestionsCount,"vaibhav");
//   console.log(result.matchedUser, "shahi");
 

 function updateProgress(solved,total,circle,label){
  const progressPercentage = (solved/total)*100;
  circle.style.setProperty = ("--progress-Percentage", `${progressPercentage}`)
  label.textContent =` ${solved}/${total}`;

 }

 function solvedQues(result){

    const AllQues = result.allQuestionsCount[0].count;
    const EasyQues = result.allQuestionsCount[1].count;
    const MediumQues = result.allQuestionsCount[2].count;
    const HardQues = result.allQuestionsCount[3].count;
    console.log(AllQues, EasyQues, MediumQues, HardQues )
console.log(result , "result");
    const totalSolvedQues = result.matchedUser.submitStats.acSubmissionNum[0].count;
    const totalEasySolvedQues = result.matchedUser.submitStats.acSubmissionNum[1].count;
    const totalMediumSolvedQues = result.matchedUser.submitStats.acSubmissionNum[2].count;
    const totalHardSolvedQues = result.matchedUser.submitStats.acSubmissionNum[3].count;
    
    console.log(totalSolvedQues ,totalEasySolvedQues, totalMediumSolvedQues, totalHardSolvedQues, "p");
    
}
  // solvedQues(result);

   



function showUserData(username){
    const result = validateUserName(username);
    const finalResult = fetchUserDetails(result);
}
const searchButton = document.getElementById("search-btn");
const usernameInput = document.getElementById("user-input");

searchButton.addEventListener("click", function(){
    const username = usernameInput.value;
    console.log(username);
})



    



 
 



