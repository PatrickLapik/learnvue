function write(text) {
  process.stdout.write(text)
}

write('\x1B[31m'); write('Hello, world!'); write('\n');
write('\x1B[32m'); write('Hello, world!'); write('\n');
write('\x1B[33m'); write('Hello, world!'); write('\n');
write('\x1B[34m'); write('Hello, world!'); write('\n');
write('\x1B[35m'); write('Hello, world!'); write('\n');
write('\x1B[36m'); write('Hello, world!'); write('\n');
write('\x1B[37m'); write('Hello, world!'); write('\n');

write('\x1B[40m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[41m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[42m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[43m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[44m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[45m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[46m'); write('Hello, world!'); write('\x1B[0m'); write('\n');

write('\x1B[100m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[101m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[102m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[103m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[104m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[105m'); write('Hello, world!'); write('\x1B[0m'); write('\n');
write('\x1B[106m'); write('Hello, world!'); write('\x1B[0m'); write('\n');

for(let i = 0; i < 256; i++){
  write(`\x1B[38;5;${i}m`); write(i.toString().padEnd(4, ' ')); write('\x1B[0m')
}

for(let i = 0; i < 256; i++){
  write(`\x1B[48;2;${i};0;0m`); write(i.toString().padEnd(4, ' ')); write('\x1B[0m')
}

write('\n')

write('\x1B[3m'); write('Hello, world!'); write('\x1B[0m');