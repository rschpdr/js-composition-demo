function animal() {
    return {
        poop() {
            console.log('Poop!');
        }
    }
}

function dog() {
    return {
        bark() {
            console.log('Woof!');
        }
    }
}

function animalDog() {
    return {
        ...animal(), ...dog()
    }
}

function cat() {
    return {
        meow() {
            console.log('Meow!')
        }
    }
}

function animalCat() {
    return {
        ...animal(), ...cat()
    }
}

function robot() {
    return {
        drive() {
            console.log('Driving...')
        }
    }
}

function cleaningRobot() {
    return {
        clean() {
            console.log('Cleaning...')
        }
    }
}

function cleaningRobotV2() {
    return {
        ...robot(), ...cleaningRobot()
    }
}

function murderRobot() {
    return {
        kill() {
            console.log('Killing...')
        }
    }
}

function murderRobotV2() {
    return {
        ...robot(), ...murderRobot()
    }
}

// Jeito 1
// function murderRobotDog() {
//   const obj = {};
//   const dogKeys = Object.keys(dog());
//   for (let i = 0; i <= dogKeys.length; i++) {
//     obj[dogKeys[i]] = dog()[dogKeys[i]];
//   }

//   const murderRobotKeys = Object.keys(murderRobot());
//   for (let i = 0; i <= murderRobotKeys.length; i++) {
//     obj[murderRobotKeys[i]] = murderRobot()[murderRobotKeys[i]];
//   }

//   return obj;
// }

// Jeito 2
// function murderRobotDog() {
//   const obj = {};
//   const dogInstance = dog();
//   const murderRobotInstance = murderRobot();

//   for (let key in dogInstance) {
//     obj[key] = dogInstance[key];
//   }

//   for (let key in murderRobotInstance) {
//         obj[key] = murderRobotInstance[key];
//   }

//   return obj;
// }

// // Jeito 3
// function murderRobotDog() {
//   const newObj = Object.assign(dog(), murderRobot());
//   console.log(newObj)
//   return newObj;
// }

// const nomes = {nome: 'Robson'}
// const nomes2 = {...nomes};

// nomes2.nome = 'Erick';

// console.log(nomes.nome);
// console.log(nomes2.nome);

// Jeito 4
function murderRobotDog() {
  return {...dog(), ...murderRobot()}
}

console.log(dog().bark())
console.log(animalDog().poop())

console.log(cleaningRobot().clean())
console.log(murderRobotV2().drive())

console.log(murderRobotDog().bark())
console.log(murderRobotDog().kill())
