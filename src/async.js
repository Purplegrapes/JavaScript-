async function fn(args) {
  // ...
}

// 等价于
function fn(args) {
  return spawn(function* () {
    // ...
  });
}

function spawn(gen){
  let g = gen();

  function next(data){
    let result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

