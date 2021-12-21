//=========== we will be using different callback functions like
// setTimeOut, setTimeinterval
// console.log("i m from calbacks[");

// console.log("hey i m 1st");
// console.log("hey i m 2nd");

// setTimeout(() => {
//   console.log("hey i m 3rd but i can last because i was with setTimeOut ");
// }, 5000);

// console.log("hey i m 4th");

//===============================================================================
// In above example we have seen the proper example of callback which was very smooth
// but now lets do real life example by creating the statement for going to shop

// let people = {
//   boys: ["ram", "shyam", "hari"],
//   items: ["apple", "mango"],
// };

// let choose = (boys_name, call_go) => {
//   setTimeout(() => {
//     console.log(`${people.boys[boys_name]} was selected`);

//     call_go();
//   }, 2000);
// };

// let go = () => {
//   setTimeout(() => {
//     console.log("stand up from bed");
//     setTimeout(() => {
//       console.log("move to door");
//       setTimeout(() => {
//         console.log("going through stairs");
//         setTimeout(() => {
//           console.log("reached in shop");
//           setTimeout(() => {
//             console.log(`give me ${people.items[1]} `);
//           }, 1000);
//         }, 6000);
//       }, 5000);
//     }, 3000);
//   }, 1000);
// };
// choose(1, go); // just passing vlaue through parameter in function choose

// //[In above real life example we can see alot of setTimeOut one of the function of call back one after another which is creating callbackHell so to
// // solve this problem we have promises]

//=====================================================================================================

// now lets do samething with promise

let people = {
  boys: ["ram", "shyam", "hari"],
  items: ["apple", "mango"],
};

let ifBoysAreSleeping = false;

let go = (time, work) => {
  return new Promise((resolve, reject) => {
    if (ifBoysAreSleeping) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry boys are sleeping right now"));
    }
  });
};

go(1000, () => console.log(`${people.boys[1]} is going for shopping `))
  .then(() => {
    return go(3000, () => {
      console.log("stand up for going");
    });
  })

  .then(() => {
    return go(3000, () => {
      console.log("move to door");
    });
  })

  .then(() => {
    return go(3000, () => {
      console.log("going through stairs");
    });
  })

  .then(() => {
    return go(3000, () => {
      console.log("reached in shop");
    });
  })

  .then(() => {
    return go(3000, () => {
      console.log(`can I get that ${people.items[0]}`);
    });
  })

  .catch(() => {
    console.log("Sorry boys are sleeping and we cannot disturb them");
  })

  .finally(() => {
    console.log("Thank you ");
  });
