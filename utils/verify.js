const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (err) {
        if (err.message.toLowerCase().includes("Already Verified!")) {
            console.log("Already Verified!")
        } else {
            console.log(err)
        }
    }
}

module.exports = { verify }
