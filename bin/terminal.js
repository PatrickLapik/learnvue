import readline from "node:readline";

readline.emitKeypressEvents(process.stdin);
console.clear();

write('@');

process.stdin.on("keypress", (ch, key) => {
  // console.log('got "keypress"', ch, key);
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }

  if (key && key.name == "w") {
    write('\x1B[1D');
    write(' ');
    write('\x1B[1D');
    write('\x1B[1A');
    write('@');
  }
  if (key && key.name == "s") {
    write('\x1B[1D');
    write(' ');
    write('\x1B[1D');
    write('\x1B[1B');
    write('@');
  }
  if (key && key.name == "a") {
    write('\x1B[1D');
    write(' ');
    write('\x1B[2D');
    write('@');
  }
  if (key && key.name == "d") {
    write('\x1B[1D');
    write(' ');
    write('@');
  }
});

process.stdin.setRawMode(true);

function write(text) {
  process.stdout.write(text);
}
