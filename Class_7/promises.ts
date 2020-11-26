console.log('start');

const prom1 = new Promise((res, err) => {
  setTimeout(() => {
    res('Timeout over');
  }, 1000)
}); 
//then = successfully done
prom1.then(message => console.log(message))
console.log('Finish');