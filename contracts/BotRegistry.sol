pragma solidity ^0.4.0;
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract BotRegistry is Ownable {
    uint myVariable;
    constructor(uint _myVariable) public {
        myVariable = _myVariable;
    }
    function getVariable() public view returns(uint){
        return myVariable;
    }
}