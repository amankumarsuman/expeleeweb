
//  SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;


contract Token{
    string public name="AmanToken";
    string public  symbol="AMAN";
    string public standard= "AmanToken v.0.1";
    uint256 public totalSupply;
    uint256 public _userId;

    address public ownerOfContract;
    address[] public holderToken;

    //  function Transfer(address indexed _from, address indexed _to uint256 _value ) external returns (bool);
    // function approve(address spender, uint256 amount) external returns (bool);
    // function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

mapping(address => TokenHolderInfo) public tokenHolderInfos;
    mapping(address => mapping (address => uint256)) public allowance;
     mapping(address => uint256) balanceOf;


struct TokenHolderInfo{
    uint256 _tokenId;
    address _from;
    address _to;
    uint256 _totalToken;
    bool _tokenHolder;

}
    // mapping(address => mapping (address => uint256)) allowed;
constructor (uint256 _initialSupply){
    ownerOfContract =msg.sender;
    balanceOf[msg.sender]=_initialSupply;
    totalSupply=_initialSupply;
}

function inc() internal {
    _userId++;
}

  function transfer(address _to, uint256 _value) public  returns (bool) {
        require(_value <= balanceOf[msg.sender]);
        inc();
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        // balanceOf[msg.sender] = balanceOf[msg.sender].sub(numTokens);
        // balanceOf[receiver] = balanceOf[receiver].add(numTokens);
        // emit Transfer(msg.sender, receiver, numTokens);
        TokenHolderInfo storage tokenHolderInfo =tokenHolderInfos[_to];
        tokenHolderInfo._to=_to;
        tokenHolderInfo._from=msg.sender;
        tokenHolderInfo._tokenHolder=true;
        tokenHolderInfo._totalToken=_value;
        tokenHolderInfo._tokenId=_userId;
        holderToken.push(_to);
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function approve(address _spender, uint256 _value) public  returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

  function transferFrom(address _from, address _to, uint256 _value) public  returns (bool success) {

    balanceOf[_from] -=_value;
    balanceOf[_to] +=_value;

        // require(_value <= balances[_from]);
        // require(_value <= allowed[_from][msg.sender]);

        // balances[_from] = balances[_from].sub(_value);
        // allowance[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        allowance[_from][msg.sender]  -=_value;
        // balances[_to] = balances[_to].add(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }

    function getTokenHolderData(address _address) public view returns(uint256,address,address,uint256, bool){
return(
    tokenHolderInfos[_address]._tokenId,
    tokenHolderInfos[_address]._to,
    tokenHolderInfos[_address]._from,
    tokenHolderInfos[_address]._totalToken,
    tokenHolderInfos[_address]._tokenHolder

);
    }

    function getTokenHolder() public view returns (address[] memory){
        return holderToken;
    }

}