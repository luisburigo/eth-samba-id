import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import crypto from "crypto";
import { expect } from "chai";
import { ethers } from "hardhat";



const moclId = () => {
    return {
        name:  `random${crypto.randomUUID()}`,
        validAt:  1,
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
            const nextYear = new Date().getTime() + (60*60*24*365*1000)


            const registrationFee = await _id.calculateRegistrationFee(payload.name, 1);
            const formattedFee = ethers.utils.formatUnits(registrationFee, "ether");

            await _id.createIdentity(
                payload.name,
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                { value: ethers.utils.parseEther(formattedFee) }
            ) 
            
            //get by name
            const name = await _id.getIdentity(payload.name)
            expect(payload.name.replace(/-/g, "")).to.equal(name.name)
            expect(payload.validAt - nextYear).to.lessThanOrEqual(1000*60)//menor que 1 min
        })


        it("Create with invalid name", async () => {
            const {_id} = await loadFixture(deploy);
            const payload = moclId()

            const registrationFee = await _id.calculateRegistrationFee(payload.name, 1);
            const formattedFee = ethers.utils.formatUnits(registrationFee, "ether");


            await expect(_id.createIdentity(
                payload.name.slice(0, 2),
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                { value: ethers.utils.parseEther('10') }
            )).to.be.revertedWith("Insufficient funds")

            await expect(_id.createIdentity(
                payload.name.slice(0, 2),
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                { value: ethers.utils.parseEther(formattedFee) }
            )).to.be.revertedWith("Name must have at least 3 characters")

            await expect(_id.createIdentity(
                payload.name,
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                { value: ethers.utils.parseEther(formattedFee) }
            ))

            await expect(_id.createIdentity(
                payload.name,
                payload.validAt,
                payload.nft,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                { value: ethers.utils.parseEther(formattedFee) }
            )).to.be.revertedWith("Name already registered")
        })
    })
})
