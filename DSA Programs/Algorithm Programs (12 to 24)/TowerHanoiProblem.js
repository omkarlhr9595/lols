//Patil Rohit Kalyan
//Roll No. = 2201149
//Tower of Hanoi problem

function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from source ${source} to target ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from source ${source} to target ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  const n = 3;
  towerOfHanoi(n, 'A', 'B', 'C');
  
  // Outputs:
  // Move disk 1 from source A to target C
  // Move disk 2 from source A to target B
  // Move disk 1 from source C to target B
  // Move disk 3 from source A to target C
  // Move disk 1 from source B to target A
  // Move disk 2 from source B to target C
  // Move disk 1 from source A to target C
  