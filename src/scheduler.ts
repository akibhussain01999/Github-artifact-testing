// import axios from "axios";
// import fs from "fs";
// import path from "path";

// async function runJob() {
//   try {
//     const res = await axios.post("https://json-placeholder.mock.beeceptor.com/companies");

//     console.log("✅ API success:", res.data);
//   } catch (err: any) {
//     console.error("❌ API failed:", err.message);

//     // Write logs
//     const logDir = path.join(process.cwd(), "logs");
//     if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

//     const logFile = path.join(logDir, `error-${Date.now()}.log`);
//     fs.writeFileSync(logFile, `API failed: ${err.message}\n`);
    
//     // exit 0 so workflow continues and upload step runs
//     process.exit(0);
//   }
// }

// runJob();


import axios from "axios";
import fs from "fs";
import path from "path";

async function runJob() {
  try {
    // invalid URL → guaranteed to fail
    const res = await axios.post("https://this-api-does-not-exist-12345.com/fail");

    console.log("✅ API success:", res.data);
  } catch (err: any) {
    console.error("❌ API failed:", err.message); 

    // Write logs
    const logDir = path.join(process.cwd(), "logs");
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

    const logFile = path.join(logDir, `error-${Date.now()}.log`);
    fs.writeFileSync(
      logFile,
      `API failed: ${err.message}\nStack: ${err.stack ?? "N/A"}\n`
    );

    console.log(`📄 Error log created at ${logFile}`);

    // exit 0 so workflow continues and artifact upload runs
    process.exit(0);
  }
}

runJob();
