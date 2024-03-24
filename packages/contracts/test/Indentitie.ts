import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import crypto from "crypto";
import { expect } from "chai";
import { ethers } from "hardhat";



const moclId = (resolver?: string) => {
    return {
        name:  `random${crypto.randomUUID()}`,
        validAt:  1,
        address: ethers.Wallet.createRandom().address,
        nft: `nft${crypto.randomUUID()}`,
        ipfs: `ipfs${crypto.randomUUID()}`,
        github: `github${crypto.randomUUID()}`,
        twitter: `twitter${crypto.randomUUID()}`,
        warpcaster: `warpcaster${crypto.randomUUID()}`,
        resolver: resolver ?? ethers.Wallet.createRandom().address
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
                payload.validAt,
                payload.nft,
                payload.name,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            ) 
            
            //get by name
            const name = await _id.getIdentity(payload.name)
            expect(payload.name.replace(/-/g, "")).to.equal(name.name)
            expect(Number(name.validAt.toString()) - nextYear).to.lessThanOrEqual(1000*60)//menor que 1 min
        })

        it("Set resolver", async () => {
            const {_id} = await loadFixture(deploy);
            const resolver = ethers.Wallet.createRandom().address
            const payload = moclId(resolver)
            
            const registrationFee = await _id.calculateRegistrationFee(payload.name, 1);
            const formattedFee = ethers.utils.formatUnits(registrationFee, "ether");

            await _id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            )

            //set resolver
            const newResolver = ethers.Wallet.createRandom().address
            await _id.setResolver(payload.name, newResolver)
            const name = await _id.getIdentity(payload.name)
            expect(newResolver).to.equal(name.resolver)

            //inválid resolver
            const {_id: _id2} = await loadFixture(deploy);
            await expect(_id2.setResolver(payload.name, newResolver)).to.be.revertedWith("You are not the owner of this identity")
            
            //todo: 
            //edit by owner -> error
            //edit by resolver -> sucess

        })

        it("Renew", async () => {
            const {_id} = await loadFixture(deploy);
            const payload = moclId()
            
            const registrationFee = await _id.calculateRegistrationFee(payload.name, 1);
            const formattedFee = ethers.utils.formatUnits(registrationFee, "ether");

            console.log('[BALANCE_TO_RENEW]: ', formattedFee)

            await _id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            )


            const _registrationFee = await _id.calculateRegistrationFee(payload.name, 3);
            const _formattedFee = ethers.utils.formatUnits(_registrationFee, "ether");

            console.log('[BALANCE_TO_RENEW]: ', _formattedFee)

            //renew
            const nextYear = new Date().getTime() + (60*60*24*365*1000)*3 // 3 years (1 year + 2 years)
            await _id.renew(payload.name, 2, {
                value: ethers.utils.parseEther(_formattedFee)
            })

            const name = await _id.getIdentity(payload.name)
            expect(Number(name.validAt.toString()) - nextYear).to.lessThanOrEqual(1000*60)//menor que 1 min
        })

        it("Create with invalid conditions", async () => {
            const {_id} = await loadFixture(deploy);
            const payload = moclId()

            const registrationFee = await _id.calculateRegistrationFee(payload.name, 1);
            const formattedFee = ethers.utils.formatUnits(registrationFee, "ether");

            await expect(_id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name.slice(0, 2),
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther('10') }
            )).to.be.revertedWith("Insufficient funds")

            await expect(_id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name.slice(0, 2),
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            )).to.be.revertedWith("Name must have at least 3 characters")

            await expect(_id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            ))

            await expect(_id.createIdentity(
                payload.validAt,
                payload.nft,
                payload.name,
                payload.ipfs,
                payload.github,
                payload.twitter,
                payload.warpcaster,
                payload.resolver,
                { value: ethers.utils.parseEther(formattedFee) }
            )).to.be.revertedWith("Name already registered")
        })
    })
})
