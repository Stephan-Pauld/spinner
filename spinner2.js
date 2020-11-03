let chars = ['|', '/', '-', "\\"];

let timer = 100;
for (const i of chars) {
  setTimeout(() => {
    process.stdout.write('\r'+i);
  }, timer);
  timer += 200
};