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


import fs from "fs";
import path from "path";

async function runJob() { 
  try {
    // Always throw an error for testing artifact upload
    throw new Error("Forced error for artifact upload test");
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

    // exit 1 so workflow fails and artifact upload runs
    process.exit(1);
  }
}

runJob();
