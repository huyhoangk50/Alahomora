pragma solidity ^0.4.0;
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
// import "./Bot.sol";

contract GovernmentWallet is Ownable {
    struct Agency{
        string name;
        string location;
    }
    
    mapping (bytes32 => uint256) prices;
    uint exchangeRate = 1;
    address tokenAddress;   
    mapping (address => Agency) agencies;
    mapping (address => bool) agencyAllowances;
    mapping (address => bool) botAllowances;
    // mapping (address => Bot) bots;


    constructor(address _tokenAddress){
        tokenAddress = _tokenAddress;
    }

    function setExchangeRate(uint _exchangeRate) public onlyOwner(){
        exchangeRate = _exchangeRate;
    }

    function addNewBot(address _botAddress) public onlyOwner{
        botAllowances[_botAddress] = true;
    }

    function cancelBotPrivilege(address _botAddress) public onlyOwner{
        botAllowances[_botAddress] = false;
    }

    // function addNewAgency (address _agencyAddress, string _agencyName, string _agencyLocation) public onlyOwner{
    //     Agency storage newAgency = Agency(_agencyName, _agencyLocation);
    //     agencyAllowances[_agencyAddress] = true;
    //     agencies[_agencyAddress] = newAgency;
    // }
    
    // function cancelAgencyPrivilege (address _agencyAddress) public onlyOwner{
    //     agencyAllowances[_agencyAddress] = false;
    //     agencies[_agencyAddress] ;
    // }

    modifier onlyAgencies(){
        require(agencyAllowances[msg.sender]);
        _;
    }

    function sellToken(address _buyer, uint256 _amount) public onlyAgencies{
        (ERC20(tokenAddress).transfer(_buyer, _amount));
        emit TokenSold(msg.sender, _buyer, _amount, agencies[msg.sender].name, agencies[msg.sender].location);
    }
    
    function buyToken(address _seller, uint256 _amount) public onlyAgencies{
        require (ERC20(tokenAddress).balanceOf(msg.sender) >= _amount);
        (ERC20(tokenAddress).transferFrom(msg.sender, this, _amount));
        emit TokenBought(_seller, msg.sender, _amount, agencies[msg.sender].name, agencies[msg.sender].location);
    }

    // event FeePaied(address _botAddress, uint _amount, string _botName, string _botStreet);
    event TokenSold(address _seller, address _buyer, uint _amount, string _agencyName, string _agencyLocation);
    event TokenBought(address _seller, address _buyer, uint _amount, string _agencyName, string _agencyLocation);
    // event InvoiceCreated(address _from, address _to, uint _amount, string _botName, string _botStreet);

    // function upsertPrice(string _productName, uint256 _price) public onlyOwner{
    //     bytes32 productHash = keccak256(_productName);
    //     prices[productHash] = _price;
    // }

    // function getProductPrice(string _productName) public view returns(uint256){
    //     bytes32 productHash = keccak256(_productName);
    //     uint price = prices[productHash];
    //     return price;
    // }
}