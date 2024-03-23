import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import crypto from "crypto";
import { expect } from "chai";
import { ethers } from "hardhat";



const moclId = () => {
    return {
        name:  `random${crypto.randomUUID()}`,
        validAt:  new Date().getTime(),
        address: ethers.Wallet.createRandom().address,
        nft: `nft${crypto.randomUUID()}`,
        ipfs: `ipfs${crypto.randomUUID()}`,
        github: `github${crypto.randomUUID()}`,
        twitter: `twitter${crypto.randomUUID()}`,
        warpcaster: `warpcaster${crypto.randomUUID()}`
    }
}

describe("[Indentity]", () => {
    const deploy = async() => {
        const [owner] = await ethers.getSigners();

        const id = await ethers.getContractFactory("Identity");
        const _id = await id.deploy()

        return { _id, owner }
    }

    describe("Deployment", () => {
        it("Owner", async () => {
            const {_id, owner} = await loadFixture(deploy);

            expect(await _id.owner()).to.equal(owner.address)
        })
    })

    describe("Validations", () => {
        it("Create", async () => {
            const {_id} = await loadFixture(deploy);
            const payload = moclId()
            await _id.createIdentity(
                payload.name,
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster
            ) 

            //get by name
            expect(payload.name).to.equal((await _id.getIdentity(payload.name)).name)
            expect(payload.validAt).to.equal((await _id.getIdentity(payload.name)).validAt)

        })
    })
})
