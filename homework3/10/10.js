var arr = [10, 20, 30, 50, 235, 3000]
arr.forEach(em => {
    if (String(em).search(/(1|2|5)/) === 0) console.log(em);
  })