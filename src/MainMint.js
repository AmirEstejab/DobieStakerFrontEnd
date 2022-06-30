import { useState } from "react";
import { ethers, BigNumber, Contract, constants } from "ethers";
import Logo from "./logo.png";
//import DobieStaker from "./DobieStaker.json";


const DobieStakerABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

// var account = null;
// var contract = null;

// var stakeBtn = document.querySelector('.stake').addEventListener('click', function(event) {
// event.preventDefault();
// });
// var unstakeBtn = document.querySelector('.unstake').addEventListener('click', function(event) {
//   event.preventDefault();
// });
const DobieStakerAddress = "0x54781bBfB1EBD85b75424A866A6670Bed03608BD";
const MainMint = ({ accounts, setAccounts }) => {
  let contracts = null; 
  const [mintAmount, setMintAmount] = useState(1);
  const [contract, setContract] = useState(null);
  const isConnected = Boolean(accounts[0]);

  //   const blockchain = useSelector((state) => state.blockchain);

const [staked, setStake] = useState(false);
let signers;
let providers;
let account;
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(provider);
      console.log(signer);
      let contract = new ethers.Contract(
        DobieStakerAddress,
        DobieStakerABI,
        signer
      )
      console.log(contract);
      providers = provider;
      signers = signer;
      contracts = contract;
      account = accounts; 
      setContract(contract);
    }
  //   {
  //     var provider = await web3Modal.connect();
  //     var web3 = new Web3(provider); 
  //     await provider.send('eth_requestAccounts'); 
  //     var accounts = await web3.eth.getAccounts(); 
  //     account = accounts[0]; 
  //     document.getElementById('wallet-address').textContent = account; 
  //     contract = new web3.eth.Contract(DobieStakerABI, DobieStakerAddress);
  // }
  }
  async function stakeit() {
    if (window.ethereum && contract != undefined) {
    
    console.log(contract);
    console.log(DobieStakerABI);
    console.log(DobieStakerAddress);
    console.log(accounts[0]);
    var tokenids = document.getElementById("stkid").value;
    console.log(tokenids);
    await contract.methods.stake([tokenids])({from: accounts[0]});
    }
  }

  async function unstakeit() {
    contracts.methods.unstakeAll().send({from: accounts[0]});
  }
  // async function handleMint() {
  //   if (window.ethereum && contract) {
  //     const price = BigNumber.from(await contract.price());
  //     const totalSupply = parseInt(await contract.totalSupply());
  //     const totalFree = parseInt(await contract.totalFree());

  //     const isFreePeriod = totalSupply + mintAmount < totalFree + 1;
  //     const cost = String(isFreePeriod ? 0 : price * mintAmount);

  //     const gasLimit =
  //       (await contract.estimateGas.mint(mintAmount, {
  //         from: accounts[0],
  //         value: cost,
  //       })) * 1.3;

  //     try {
  //       const response = await contract.mint(mintAmount, {
  //         gasLimit: String(parseInt(gasLimit)),
  //         from: accounts[0],
  //         value: cost,
  //       });
  //       console.log("Response: ", response);
  //     } catch (err) {
  //       console.log("Error: ", err);
  //     }
  //   }
  // }

  // const handleDecrement = () => {
  //   if (mintAmount <= 1) return;
  //   setMintAmount(mintAmount - 1);
  // };
  // const handleIncrement = () => {
  //   if (mintAmount >= 20) return;
  //   setMintAmount(mintAmount + 1);
  // };

  return (
    <div className ="all">
    <div className = "banner">No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. No Roadmap. No Promises. Just Stake. </div>
    <div className="toplevel">
    <img className = "logo" src={Logo}></img>
    {isConnected ? (
      <button className = "connectwallet2" onClick={connectAccount}>Connected</button>
    ) : (
      <button className = "connectwallet" onClick={connectAccount}>Connect Wallet</button>
    )}
    </div>
      {isConnected ? (
        
          <div className="background">
            <div className = "info">
                
                <h3>
                Stake 1-4 Dobies to gain 1 level a week, 5-9 for 2 levels a week, 10-20 for 3 levels a week, and 20+ Dobies for 4 levels a week. At any time you like, you can unstake your Dobies and regain access to them in your wallet, but doing so will reset your level counter.
                </h3>
              </div>
          <div className = "greybox">
            <div className = "stakeinfo">
              <div className = "level">
                <h1>Level: </h1>
              </div>
            </div>
            <form className = "form">
            <input className ="tokenInput"type="number" placeholder="Input your TokenId" id="stkid"/>
            <button onClick={stakeit} type="button" className = "stake">Stake!</button>
            <button className = "unstake" type="button" onClick={unstakeit}>Unstake All!</button>
            </form>
          </div>
          </div>

      ) : (
        <div className="background">
    <div className = "greybox">
        <h1 className ="titledobies">Welcome to the Dobies' Staking Station!</h1>
        <button className = "connectwallet inboxbutton" onClick={connectAccount}>Connect Wallet</button>
        </div>
    </div>
      )}
    </div>
  );
};

export default MainMint;
export function connectAccount(){}