 function checkPalindrome() {
            const inputNumber = document.getElementById("inputNumber").value;
            const isPalindrome = palindromeChecker(inputNumber);
            const result = document.getElementById("result");

            if (isPalindrome) {
                result.innerText = "The number is a palindrome!";
            } else {
                result.innerText = "The number is not a palindrome.";
            }
        }

        function palindromeChecker(x) {
            const str = x.toString();
            const reversedStr = str.split("").reverse().join("");
            return str === reversedStr;
        }

        function resetForm() {
            document.getElementById("inputNumber").value = "";
            document.getElementById("result").innerText = "";
        }