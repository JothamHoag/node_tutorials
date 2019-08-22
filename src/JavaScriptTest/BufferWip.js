var buff = new Buffer.alloc(10);

var stringValue = "The Quick Brown Fox Jumped Over The Lazy Dogs";
buff.write(stringValue);

console.log("buff contents for sting <"+stringValue+"> is:" + buff.toString());

console.log("Each element if buffer is");
for (var i = 0; i < buff.length; i++){
    console.log("element " + i + " = " + buff[i]);
}

