
const timer = function(beeps) {

  for (let i = 0; i < beeps.length; i++) {
    if(beeps[i] < 0 || undefined || isNaN(beeps[i])) {
      return;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beeps[i] * 1000);
    }
  }
};

// timer(10, 3, 5, 15, 9);
// timer();
// timer(-4, 3, 4);
// timer("helloooo");
