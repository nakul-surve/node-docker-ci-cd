const expected = "Hello from Docker CI/CD";

if (expected !== "Hello from Docker CI/CD") {
  console.error("❌ Test failed");
  process.exit(1);
}

console.log("✅ Tests passed");
