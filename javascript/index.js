// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      getInstruction(
        "mashedPotatoes",
        1,
        (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
          getInstruction(
            "mashedPotatoes",
            2,
            (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
              getInstruction(
                "mashedPotatoes",
                3,
                (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                  getInstruction(
                    "mashedPotatoes",
                    4,
                    (step5) => {
                      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
                      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
                      document.getElementById("mashedPotatoesImg").removeAttribute("hidden");

                        },
                        (err) => {
                          console.log(err)
                        },
                      )
                    },
                    (err) => {
                      console.log(err)
                    },
                  )
                },
                (err) => {
                  console.log(err)
                },
              )
            },
            (err) => {
              console.log(err)
            },
          )
        },
        (err) => {
          console.log(err)
        },
      )

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step1)=>{
    document.getElementById("steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction ("steak", 1)
  })
  .then((step2)=>{
    document.getElementById("steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction ("steak", 2)
  })
  .then((step3)=>{
    document.getElementById("steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction ("steak", 3)
  })
  .then((step4)=>{
    document.getElementById("steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction ("steak", 4)
  })
  .then((step5)=>{
    document.getElementById("steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction ("steak", 5)
  })
  .then((step6)=>{
    document.getElementById("steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction ("steak", 6)
  })
  .then((step7)=>{
    document.getElementById("steak").innerHTML += `<li>${step7}</li>`
    document.getElementById("steakImg").removeAttribute("hidden");
    return obtainInstruction ("steak", 7)
  })
  .catch ((error)=>{
    console.log(error);
  })
  .finally(() =>{
  document.getElementById("steak").innerHTML += `<li>Steak is ready!</li>`
  });

// Iteration 3 using async/await
const makeBroccoli = async()=>{
  try {
    const step1 = await obtainInstruction("broccoli", 0);
    document.getElementById("broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction("broccoli", 1);
    document.getElementById("broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction("broccoli", 2);
    document.getElementById("broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction("broccoli", 3);
    document.getElementById("broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction("broccoli", 4);
    document.getElementById("broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction("broccoli", 5);
    document.getElementById("broccoli").innerHTML += `<li>${step6}</li>`
    const step7 = await obtainInstruction("broccoli", 6);
    document.getElementById("broccoli").innerHTML += `<li>${step7}</li>`
    document.getElementById("broccoli").innerHTML += "<li>Broccoli is ready!</li>"
    document.getElementById("broccoliImg").removeAttribute("hidden");
  }
  catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ...