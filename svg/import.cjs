import fs from "fs";
import path from "path";

const path_to_import = path.resolve(__dirname, "import");

const dir_import = fs.readdirSync(path_to_import, { withFileTypes: true, encoding: "utf-8" });

dir_import.forEach((value, ix, arr) => {
	console.log(`${ix} : value`, value);
	console.log(`${ix} : arr`, arr);
});
