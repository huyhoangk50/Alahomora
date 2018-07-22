pragma solidity ^0.4.0;
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Bot is Ownable {
    string name;
    string location;    
    address tokenAddress;
    constructor(string _name, string _location, address _tokenAddress) public {
        name = _name;
        location = _location;
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }
    
    function getInfo() public view returns(string, string){
        return(name, location);
    }

    // function makeInvoice(uint256 _amount) public {
    //     (ERC20(tokenAddress).transferFrom(msg.sender, this, _amount));
    // }
}