import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import { expect } from "chai";
import { ethers } from "hardhat";


describe("Counter", () => {
    const deploy = async() => {
        const [owner, otherAccount] = await ethers.getSigners();

        const counter = await ethers.getContractFactory("Counter");
        const _counter = await counter.deploy()


        return { _counter, owner, otherAccount }
    }

    describe("Deployment", () => {
        it("Owner", async () => {
            const {_counter, owner} = await loadFixture(deploy);

            expect(await _counter.owner()).to.equal(owner.address)
        })

        it("Initial value count", async () => {
            const { _counter } = await loadFixture(deploy)
            
            // zero is initial value, but its possible set this initial value on constructor
            expect(await _counter.counter()).to.equal(0)
        })
    })

    describe("Counting", () => {
        it("increment", async () => {
            const initialValue = 0
            const { _counter } = await loadFixture(deploy)
            await _counter.incrementCounter();
            
            expect(await _counter.counter()).to.equal(initialValue+1)
            expect(await _counter.counter()).to.equal(await _counter.getCounter())

        })
    })

})