pragma solidity ^0.8.0;

contract ArrayLengthComparison {
    uint[] public numbers;

    // Method 1
    function addNumberWithRequire(uint _number, uint maxLength) public {
        require(numbers.length < maxLength, "Array length exceeded");
        numbers.push(_number);
    }

    // Method 2
    function addNumberWithInternalCheck(uint _number, uint maxLength) public {
        if (!_canAdd(maxLength)) {
            revert("Array length exceeded");
        }
        numbers.push(_number);
    }

    function _canAdd(uint maxLength) internal view returns (bool) {
        return numbers.length < maxLength;
    }
}