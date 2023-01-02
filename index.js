

const fn1 = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  console.log("sample app creation")

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello fn1`}))
  res.end()
  
}

export default fn1
