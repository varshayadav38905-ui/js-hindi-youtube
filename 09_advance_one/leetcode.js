const url = "https://leetcode.com/graphql/"
const payload =JSON.stringify({
  "query": "query { allQuestionsCount { difficulty count } matchedUser(username: \"shahivaibhav16\") { submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } } }"
})
const method ="post"
const headers = {
    "Content-Type" : "application/json"
}
async function fetchUserDetails(){
    const storeData =  await fetch (url, {
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

for(let i = 0 ; i < result.allQuestionsCount.length ; i++){
   console.log(result.allQuestionsCount[i], "A")
}

for(let key in result.matchedUser){
    for(let innerkey in result.matchedUser[key]){
        for(let value of result.matchedUser[key][innerkey]){
            console.log(value, "p");
        }
    }
}


    



 
 



