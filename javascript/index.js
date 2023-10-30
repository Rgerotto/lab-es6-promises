// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },

  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);
 */
document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
document.querySelector("#steakImg").removeAttribute("hidden");
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
document.querySelector("#broccoliImg").removeAttribute("hidden");
// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (ditto) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (ditto) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${ditto}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (ditto) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${ditto}</li>`;
          },

          (error) => console.error(error)
        );
      },
      (error) => console.error(error)
    );
  },
  (error) => console.error(error)
);

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .catch((error) => console.log("catch()", error));
// Iteration 3 using async/await
// ...

async function getBroccoli() {
  const step1 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  try {
    const step2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  } catch (error) {
    console.log(error);
  }
}
getBroccoli();
// Bonus 2 - Promise all
// ...
const promise0 = obtainInstruction(0);
const promise1 = obtainInstruction(1);
const promise2 = obtainInstruction(2);
const promise3 = obtainInstruction(3);
const promise4 = obtainInstruction(4);
const promise5 = obtainInstruction(5);
const promise6 = obtainInstruction(6);

const allpromise = Promise.all([brusselsSprouts]);
allpromise
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
/* const promise1 = brusselsSprouts[0];
document.querySelector('#brusselsSprouts').innerHTML +=`<li>${}</li>`
console.log(promise1); */
//console.log(brusselsSprouts[0]);
