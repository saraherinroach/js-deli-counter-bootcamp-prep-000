var katzDeliLine = [];
function takeANumber (line,name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing (line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else { 
  var countdown = line.length;
  var number = 1;
  while (countdown > 0) {
    var message = [`The line is currently: ${number}. ${line[number-1]}`];
    number++;
    message.push(`, ${number}. ${line[number-1]}`);
    --countdown;
    return message;
  }
  }
}
