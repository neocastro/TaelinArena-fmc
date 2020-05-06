// Run this script to read all .vox and create a F64 number
// for each .vox

(async () => {
  var glob = require("glob");
  var path = require("path");
  var fs = require("fs");

  var files = path.join(__dirname,"../../models/**/*.vox");
  glob(files, {}, async (er, file_names) => {

  var numbers_path = "/../game/F64.numbers.fmc";
  var numbers_path = path.join(__dirname, numbers_path);
  var number_code = "";
  for (var i = 0; i < file_names.length; ++i){
    if ((i > 2) && (i !==  180)) {
      let pred = i - 1;
      let term = "F64."+i+": F64 \n";
      let fmc_code = "  F64.add(F64.1)(F64."+pred+")\n\n";
      number_code += term + fmc_code;
    }
  }

  console.log("Update numbers " + numbers_path);
  fs.writeFileSync(numbers_path, number_code);

  // Done!
  console.log("\nAll done.");
  });

})();
